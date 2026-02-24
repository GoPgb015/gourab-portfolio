'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/* ── Global Three.js canvas — fixed, behind everything ─── */
const NeuralCanvas = dynamic(() => import('@/components/three/NeuralCanvas'), {
  ssr: false,
  loading: () => (
    <div
      className="fixed inset-0 z-0"
      style={{
        background:
          'radial-gradient(ellipse at 40% 60%, #0d0025 0%, #04001a 40%, #000308 100%)',
      }}
    />
  ),
});

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* ── Layer 0: Three.js neural network (full page, fixed) ── */}
      <NeuralCanvas />

      {/* ── Layer 1: Cyber grid overlay (fixed, full page) ── */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-[1] opacity-40" />

      {/* ── Layer 2: Content ── */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <About />
          <Experience />
          <Research />
          <Certifications />
          <BlogSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
