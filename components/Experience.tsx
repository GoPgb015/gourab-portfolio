'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { experience } from '@/data';

const colorMap: Record<string, string> = {
  'cyber-purple': '#8338ec',
  'aurora-cyan':  '#06b6d4',
  'neon-gold':    '#ffd60a',
  'cyber-pink':   '#ff006e',
  'aurora-teal':  '#14b8a6',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-cyber-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase text-aurora-cyan mb-3"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            04 / Experience
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Where I&apos;ve{' '}
            <span className="gradient-text-cool">Built</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(180deg, transparent, #7c3aed 10%, #06b6d4 50%, #7c3aed 90%, transparent)',
            }}
          />

          <div className="space-y-6 pl-8 md:pl-24">
            {experience.map((exp, i) => {
              const color = colorMap[exp.color] ?? '#a855f7';
              const isOpen = expanded === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Timeline node */}
                  <div
                    className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300"
                    style={{
                      borderColor: color,
                      backgroundColor: isOpen ? color : '#030712',
                      boxShadow: isOpen ? `0 0 12px ${color}80` : 'none',
                      marginTop: '1.5rem',
                    }}
                  />

                  <div
                    className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer
                      ${isOpen ? 'neon-border' : 'hover:border-white/10'}`}
                    style={isOpen ? { borderColor: `${color}40`, boxShadow: `0 0 20px ${color}10` } : {}}
                    onClick={() => setExpanded(isOpen ? null : exp.id)}
                  >
                    {/* Header row */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{
                                background: `${color}15`,
                                border: `1px solid ${color}40`,
                                color: color,
                                fontFamily: 'var(--font-jetbrains)',
                              }}
                            >
                              {exp.type}
                            </span>
                            <span className="text-slate-600 text-xs">{exp.period}</span>
                          </div>
                          <h3
                            className="text-white font-bold text-lg mb-1"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}
                          >
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium" style={{ color }}>
                            {exp.company}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-slate-600 shrink-0 mt-1"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="chip">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded bullets */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-6 pb-6 pt-0 border-t"
                            style={{ borderColor: `${color}20` }}
                          >
                            <ul className="mt-4 space-y-2.5">
                              {exp.bullets.map((bullet, bi) => (
                                <li key={bi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
