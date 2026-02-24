'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'AI Researcher',
  'Analytics Lead',
  'AI Educator',
  'LLM Practitioner',
  'Published Researcher',
];

function TypeWriter() {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const current = ROLES[wordIdx];
    const speed = deleting ? 35 : 75;

    timerRef.current = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === '') {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [text, deleting, wordIdx]);

  return (
    <span className="inline-block min-w-[1ch]">
      <span className="gradient-text font-bold">{text}</span>
      <span
        className="inline-block w-0.5 h-6 md:h-8 bg-aurora-purple ml-1 align-middle"
        style={{ animation: 'cursor-blink 1s step-end infinite' }}
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle scanline overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.015) 3px,
            rgba(0,0,0,0.015) 4px
          )`,
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(3,7,18,0.6) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6 leading-none"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          <span className="text-white">Gourab</span>
          <br />
          <span className="gradient-text">Chatterjee</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8 h-10 md:h-12 flex items-center justify-center"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          <TypeWriter />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bridging{' '}
          <span className="neon-purple font-medium">machine learning</span>,{' '}
          <span className="neon-cyan font-medium">enterprise analytics</span>, and{' '}
          <span className="neon-pink font-medium">applied research</span>{' '}
          — published across IIMs & IIT Kharagpur.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#experience"
            className="group relative px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7, #06b6d4)',
              }}
            />
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #ff006e, #a855f7, #00f5ff)',
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Explore Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#research"
            className="px-8 py-3.5 rounded-full font-semibold glass neon-border text-aurora-purple hover:text-white hover:bg-aurora-purple/10 transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            View Research
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { value: '9+', label: 'Research Papers' },
            { value: '5+', label: 'Roles' },
            { value: 'IIMs', label: '& IIT Kharagpur' },
            { value: '8+', label: 'Certifications' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-black gradient-text mb-1"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs text-slate-600 tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-jetbrains)' }}
        >
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-aurora-purple to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
