'use client';

import { useRef, useMemo, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const PARTICLE_COUNT      = 220;
const CONNECTION_DISTANCE = 3.8;
const SPREAD_X            = 40;   // ±20 units — covers full wide viewport
const SPREAD_Y            = 26;   // ±13 units — covers full height
const SPREAD_Z            = 10;   // ±5  units — depth layer
const DRIFT_SPEED         = 0.05;
const MOUSE_ATTRACTION    = 0.015;
const MOUSE_RADIUS        = 5.5;
const MAX_LINES           = 14000;

const PALETTE = [
  new THREE.Color('#bf5fff'),
  new THREE.Color('#00ffe7'),
  new THREE.Color('#ff2d78'),
  new THREE.Color('#7b2fff'),
  new THREE.Color('#00cfff'),
];

function pickColor() {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)].clone();
}

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  originalPosition: THREE.Vector3;
  phase: number;
}

function NeuralNetwork({ mouseNDC }: { mouseNDC: React.MutableRefObject<THREE.Vector2> }) {
  const { camera } = useThree();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: PARTICLE_COUNT }, () => {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * SPREAD_X,
        (Math.random() - 0.5) * SPREAD_Y,
        (Math.random() - 0.5) * SPREAD_Z,
      );
      return {
        position: pos.clone(),
        originalPosition: pos.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
        ),
        color: pickColor(),
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  const particleGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors    = new Float32Array(PARTICLE_COUNT * 3);
    const sizes     = new Float32Array(PARTICLE_COUNT);

    particles.forEach((p, i) => {
      positions[i * 3]     = p.position.x;
      positions[i * 3 + 1] = p.position.y;
      positions[i * 3 + 2] = p.position.z;
      colors[i * 3]        = p.color.r;
      colors[i * 3 + 1]    = p.color.g;
      colors[i * 3 + 2]    = p.color.b;
      sizes[i] = 0.06 + Math.random() * 0.08;
    });

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aColor',   new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [particles]);

  const lineGeo = useMemo(() => {
    const geo       = new THREE.BufferGeometry();
    const positions = new Float32Array(MAX_LINES * 2 * 3);
    const colors    = new Float32Array(MAX_LINES * 2 * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3).setUsage(THREE.DynamicDrawUsage));
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  const particleMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: /* glsl */ `
          attribute float size;
          attribute vec3  aColor;
          varying   vec3  vColor;
          uniform   float uTime;
          void main() {
            vColor = aColor;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float pulse = 1.0 + 0.10 * sin(uTime * 2.2 + position.x * 3.1);
            gl_PointSize = size * pulse * (280.0 / -mvPosition.z);
            gl_Position  = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: /* glsl */ `
          varying vec3 vColor;
          void main() {
            vec2  uv   = gl_PointCoord - 0.5;
            float d    = length(uv);
            if (d > 0.5) discard;
            float core  = smoothstep(0.5,  0.0,  d);
            float halo  = smoothstep(0.5,  0.15, d) * 0.25;
            float alpha = core + halo;
            gl_FragColor = vec4(vColor * (0.85 + halo * 0.6), alpha);
          }
        `,
        transparent: true,
        depthWrite:  false,
        blending:    THREE.AdditiveBlending,
      }),
    [],
  );

  const lineMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent:  true,
        opacity:      0.35,
        blending:     THREE.AdditiveBlending,
        depthWrite:   false,
      }),
    [],
  );

  const _worldMouse = useMemo(() => new THREE.Vector3(), []);
  const _toTarget   = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    particleMat.uniforms.uTime.value = t;

    const camNormal = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camNormal, new THREE.Vector3());
    const rayOrigin = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
    const rayDirection = new THREE.Vector3(
      mouseNDC.current.x, mouseNDC.current.y, 0.5,
    ).unproject(camera).sub(rayOrigin).normalize();
    new THREE.Ray(rayOrigin, rayDirection).intersectPlane(plane, _worldMouse);

    const posAttr   = particleGeo.attributes.position as THREE.BufferAttribute;
    const colorAttr = particleGeo.attributes.aColor   as THREE.BufferAttribute;

    particles.forEach((p, i) => {
      const drift = Math.sin(t * 0.4 + p.phase) * 0.006;
      p.velocity.x += drift * (Math.random() - 0.5);
      p.velocity.y += drift * (Math.random() - 0.5);
      p.velocity.z += drift * (Math.random() - 0.5);

      _toTarget.subVectors(p.originalPosition, p.position);
      p.velocity.addScaledVector(_toTarget, 0.003);

      const dist = p.position.distanceTo(_worldMouse);
      if (dist < MOUSE_RADIUS && dist > 0.01) {
        const strength = (1 - dist / MOUSE_RADIUS) * MOUSE_ATTRACTION;
        _toTarget.subVectors(_worldMouse, p.position).normalize().multiplyScalar(strength);
        p.velocity.add(_toTarget);
      }

      p.velocity.multiplyScalar(0.96);
      p.position.add(p.velocity);

      posAttr.setXYZ(i, p.position.x, p.position.y, p.position.z);

      const hsl = { h: 0, s: 0, l: 0 };
      p.color.getHSL(hsl);
      hsl.l = 0.55 + 0.15 * Math.sin(t * 1.1 + p.phase);
      p.color.setHSL(hsl.h, hsl.s, hsl.l);
      colorAttr.setXYZ(i, p.color.r, p.color.g, p.color.b);
    });

    posAttr.needsUpdate   = true;
    colorAttr.needsUpdate = true;

    const linePosAttr   = lineGeo.attributes.position as THREE.BufferAttribute;
    const lineColorAttr = lineGeo.attributes.color    as THREE.BufferAttribute;
    let seg = 0;

    outer: for (let a = 0; a < PARTICLE_COUNT; a++) {
      for (let b = a + 1; b < PARTICLE_COUNT; b++) {
        const dx = particles[a].position.x - particles[b].position.x;
        const dy = particles[a].position.y - particles[b].position.y;
        const dz = particles[a].position.z - particles[b].position.z;
        const d2 = dx * dx + dy * dy + dz * dz;

        if (d2 < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
          if (seg >= MAX_LINES) break outer;
          const alpha = 1 - Math.sqrt(d2) / CONNECTION_DISTANCE;
          const base  = seg * 6;

          linePosAttr.array[base]     = particles[a].position.x;
          linePosAttr.array[base + 1] = particles[a].position.y;
          linePosAttr.array[base + 2] = particles[a].position.z;
          lineColorAttr.array[base]     = particles[a].color.r * alpha;
          lineColorAttr.array[base + 1] = particles[a].color.g * alpha;
          lineColorAttr.array[base + 2] = particles[a].color.b * alpha;

          linePosAttr.array[base + 3] = particles[b].position.x;
          linePosAttr.array[base + 4] = particles[b].position.y;
          linePosAttr.array[base + 5] = particles[b].position.z;
          lineColorAttr.array[base + 3] = particles[b].color.r * alpha;
          lineColorAttr.array[base + 4] = particles[b].color.g * alpha;
          lineColorAttr.array[base + 5] = particles[b].color.b * alpha;

          seg++;
        }
      }
    }

    lineGeo.setDrawRange(0, seg * 2);
    linePosAttr.needsUpdate   = true;
    lineColorAttr.needsUpdate = true;
  });

  return (
    <>
      <points    geometry={particleGeo} material={particleMat} />
      <lineSegments geometry={lineGeo} material={lineMat} />
    </>
  );
}

function CameraDrift() {
  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * DRIFT_SPEED) * 1.5;
    camera.position.y = Math.sin(t * DRIFT_SPEED * 0.6) * 1.0;
    camera.position.z = 16 + Math.cos(t * DRIFT_SPEED * 0.4) * 1.0;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  const mouseNDC = useRef(new THREE.Vector2(0, 0));

  const onPointerMove = useCallback((e: PointerEvent) => {
    mouseNDC.current.x =  (e.clientX / window.innerWidth)  * 2 - 1;
    mouseNDC.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, [onPointerMove]);

  return (
    <>
      <CameraDrift />
      <NeuralNetwork mouseNDC={mouseNDC} />
    </>
  );
}

export default function NeuralCanvas() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        background:
          'radial-gradient(ellipse at 40% 60%, #0d0025 0%, #04001a 40%, #000308 100%)',
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.LinearToneMapping,
          toneMappingExposure: 0.8,
        }}
        camera={{ fov: 75, near: 0.1, far: 100, position: [0, 0, 16] }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.02} />
        <Scene />
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.35}
            luminanceThreshold={0.55}
            luminanceSmoothing={0.9}
            mipmapBlur
            radius={0.6}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
