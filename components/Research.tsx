'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { research } from '@/data';

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  'cyber-purple': { text: '#8338ec', bg: 'rgba(131,56,236,0.08)', border: 'rgba(131,56,236,0.25)' },
  'aurora-cyan':  { text: '#06b6d4', bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.25)' },
  'aurora-teal':  { text: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.25)' },
  'cyber-green':  { text: '#39ff14', bg: 'rgba(57,255,20,0.06)',  border: 'rgba(57,255,20,0.2)' },
  'cyber-pink':   { text: '#ff006e', bg: 'rgba(255,0,110,0.08)',  border: 'rgba(255,0,110,0.25)' },
  'aurora-purple':{ text: '#a855f7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.25)' },
  'neon-gold':    { text: '#ffd60a', bg: 'rgba(255,214,10,0.08)', border: 'rgba(255,214,10,0.25)' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="research" className="section-pad relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-aurora-purple/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-aurora-teal/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase text-neon-gold mb-3"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            05 / Research
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Published{' '}
            <span className="gradient-text">Research</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm">
            9 papers presented at IIMs (Indore, Bangalore, Shillong), IIT Kharagpur & Fore School
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-5 space-y-5">
          {research.map((paper, i) => {
            const c = colorMap[paper.color] ?? colorMap['aurora-cyan'];
            const isHovered = hovered === paper.id;

            return (
              <motion.div
                key={paper.id}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="break-inside-avoid"
              >
                <div
                  className="glass-card rounded-2xl p-6 overflow-hidden relative cursor-default transition-all duration-300"
                  style={{
                    borderColor: isHovered ? c.border : 'rgba(255,255,255,0.06)',
                    boxShadow: isHovered ? `0 0 24px ${c.bg}` : 'none',
                  }}
                  onMouseEnter={() => setHovered(paper.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${c.text}, transparent)`,
                      opacity: isHovered ? 1 : 0.3,
                    }}
                  />

                  {/* Year badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                        color: c.text,
                        fontFamily: 'var(--font-jetbrains)',
                      }}
                    >
                      {paper.year}
                    </span>
                    <span className="text-slate-600 text-xs">#{paper.id.toString().padStart(2, '0')}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white font-bold text-sm leading-snug mb-3"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {paper.title}
                  </h3>

                  {/* Venue */}
                  <p className="text-xs font-medium mb-3" style={{ color: c.text }}>
                    📍 {paper.venue}
                  </p>

                  {/* Description – reveal on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-slate-500 text-xs leading-relaxed mb-4 overflow-hidden"
                      >
                        {paper.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${c.bg}`,
                          border: `1px solid ${c.border}`,
                          color: c.text,
                          fontFamily: 'var(--font-jetbrains)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
