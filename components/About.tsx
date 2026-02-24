'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, education } from '@/data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-aurora-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-aurora-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase text-aurora-purple mb-3"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            03 / About
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            The{' '}
            <span className="gradient-text">Mind</span>{' '}
            Behind the Data
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left – Avatar + stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Avatar card */}
            <div className="relative glass-card rounded-2xl p-8 overflow-hidden">
              {/* Animated gradient border top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, #7c3aed, #00f5ff, #ff006e, #7c3aed)',
                  backgroundSize: '300% 100%',
                  animation: 'aurora 4s ease infinite',
                }}
              />

              <div className="flex items-start gap-6">
                {/* Avatar placeholder with initials */}
                <div className="relative shrink-0">
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #a855f7, #06b6d4)',
                      fontFamily: 'var(--font-space-grotesk)',
                    }}
                  >
                    GC
                  </div>
                  {/* Chess knight decoration */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-space-gray flex items-center justify-center text-lg border border-aurora-purple/30">
                    ♞
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold text-white mb-1"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    Gourab Chatterjee
                  </h3>
                  <p className="text-aurora-purple text-sm font-medium mb-2">
                    AI & Analytics Professional
                  </p>
                  <p className="text-slate-500 text-xs flex items-center gap-1.5">
                    <span>📍</span> {personalInfo.location}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-slate-400 leading-relaxed text-sm">{personalInfo.bio}</p>

              {/* Interests */}
              <div className="mt-5 flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span key={interest} className="chip">{interest}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-5 text-center neon-border hover:neon-border-cyan transition-all duration-300 group">
                  <div
                    className="text-3xl font-black gradient-text mb-1 group-hover:scale-110 transition-transform"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – Education + bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Bio text */}
            <div className="glass-card rounded-2xl p-8">
              <h3
                className="text-lg font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <span className="neon-purple">#</span> Story
              </h3>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  My journey started in circuits — M.Tech in Electronics & Communication at{' '}
                  <span className="text-aurora-cyan font-medium">IIT (ISM) Dhanbad</span>. Then I pivoted
                  to management at{' '}
                  <span className="text-aurora-purple font-medium">Jaipuria Institute</span>, graduating as
                  6th Term Topper with 83.20%.
                </p>
                <p>
                  Today I sit at the intersection of{' '}
                  <span className="text-cyber-pink font-medium">AI research</span>,{' '}
                  <span className="text-aurora-cyan font-medium">enterprise analytics</span>, and{' '}
                  <span className="text-neon-gold font-medium">institutional AI operations</span> — building
                  systems that bridge data and decisions.
                </p>
                <p>
                  I&apos;ve presented research at IIM Indore, IIM Bangalore, IIM Shillong, Fore School of
                  Management, and IIT Kharagpur — applying ML to everything from electoral finance to
                  hospitality emotion mapping.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="glass-card rounded-2xl p-8">
              <h3
                className="text-lg font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <span className="neon-purple">#</span> Education
              </h3>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-5 border-l border-aurora-purple/20 hover:border-aurora-purple/60 transition-colors duration-300"
                  >
                    <div
                      className="absolute -left-1.5 top-1 w-3 h-3 rounded-full border-2 border-aurora-purple bg-space-black"
                      style={{ boxShadow: '0 0 8px rgba(168,85,247,0.5)' }}
                    />
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <p className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                          {edu.degree}
                        </p>
                        <p className="text-slate-500 text-xs mt-0.5">{edu.institution}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-aurora-cyan text-xs font-medium">{edu.score}</p>
                        <p className="text-slate-600 text-xs">{edu.period}</p>
                      </div>
                    </div>
                    {edu.badge && (
                      <span className="inline-block mt-2 chip chip-gold">{edu.badge}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
