'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/data';

const colorStyles: Record<string, {
  text: string; chipBg: string; chipBorder: string; chipText: string; glow: string; bar: string;
}> = {
  'aurora-purple': {
    text: '#a855f7', chipBg: 'rgba(168,85,247,0.08)', chipBorder: 'rgba(168,85,247,0.25)',
    chipText: '#a855f7', glow: 'rgba(168,85,247,0.12)', bar: '#a855f7',
  },
  'aurora-cyan': {
    text: '#06b6d4', chipBg: 'rgba(6,182,212,0.08)', chipBorder: 'rgba(6,182,212,0.25)',
    chipText: '#06b6d4', glow: 'rgba(6,182,212,0.12)', bar: '#06b6d4',
  },
  'cyber-pink': {
    text: '#ff006e', chipBg: 'rgba(255,0,110,0.08)', chipBorder: 'rgba(255,0,110,0.25)',
    chipText: '#ff006e', glow: 'rgba(255,0,110,0.10)', bar: '#ff006e',
  },
  'neon-gold': {
    text: '#ffd60a', chipBg: 'rgba(255,214,10,0.08)', chipBorder: 'rgba(255,214,10,0.25)',
    chipText: '#ffd60a', glow: 'rgba(255,214,10,0.10)', bar: '#ffd60a',
  },
  'aurora-teal': {
    text: '#14b8a6', chipBg: 'rgba(20,184,166,0.08)', chipBorder: 'rgba(20,184,166,0.25)',
    chipText: '#14b8a6', glow: 'rgba(20,184,166,0.10)', bar: '#14b8a6',
  },
  'cyber-purple': {
    text: '#8338ec', chipBg: 'rgba(131,56,236,0.08)', chipBorder: 'rgba(131,56,236,0.25)',
    chipText: '#8338ec', glow: 'rgba(131,56,236,0.10)', bar: '#8338ec',
  },
};

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-pad relative overflow-hidden">
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
            className="text-xs tracking-[0.3em] uppercase text-cyber-pink mb-3"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            02 / Skills
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-3"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            The Full{' '}
            <span className="gradient-text-warm">AI Toolkit</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            From core ML to vibe coding, generative art, workflow automation, and product strategy.
          </p>
        </motion.div>

        {/* 3-column grid on large, 2 on md, 1 on sm */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {Object.entries(skills).map(([category, data]) => {
            const s = colorStyles[data.color] ?? colorStyles['aurora-cyan'];

            return (
              <motion.div
                key={category}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 overflow-hidden relative group transition-all duration-300 cursor-default"
                style={{ borderColor: `${s.text}18` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${s.text}45`;
                  e.currentTarget.style.boxShadow = `0 0 28px ${s.glow}, 0 0 1px ${s.text}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${s.text}18`;
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Top glow bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.text}, transparent)` }}
                />

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${s.glow}, transparent 70%)`,
                  }}
                />

                {/* Icon + title row */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: s.chipBg, border: `1px solid ${s.chipBorder}` }}
                  >
                    {data.icon}
                  </div>
                  <h3
                    className="font-bold text-base leading-tight"
                    style={{ color: s.text, fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {category}
                  </h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-1.5">
                  {data.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.07, y: -1 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium cursor-default select-none transition-all duration-200"
                      style={{
                        background: s.chipBg,
                        border: `1px solid ${s.chipBorder}`,
                        color: s.chipText,
                        fontFamily: 'var(--font-jetbrains)',
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* Item count badge */}
                <div
                  className="absolute bottom-4 right-4 text-xs opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ color: s.text, fontFamily: 'var(--font-jetbrains)' }}
                >
                  {data.items.length} skills
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Languages footer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 glass-card rounded-2xl p-5 flex flex-wrap items-center gap-3"
        >
          <span
            className="text-xs text-slate-600 shrink-0"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            Languages spoken:
          </span>
          {['English', 'Hindi', 'Bengali'].map((lang) => (
            <span
              key={lang}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: 'rgba(20,184,166,0.08)',
                border: '1px solid rgba(20,184,166,0.25)',
                color: '#14b8a6',
                fontFamily: 'var(--font-jetbrains)',
              }}
            >
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
