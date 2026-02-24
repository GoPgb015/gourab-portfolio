'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications, achievements } from '@/data';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section-pad relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-cyber-purple/5 blur-3xl pointer-events-none" />

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
            className="text-xs tracking-[0.3em] uppercase text-aurora-teal mb-3"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            06 / Credentials
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Certifications &{' '}
            <span className="gradient-text-cool">Wins</span>
          </h2>
        </motion.div>

        {/* Certs grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-2xl p-5 relative overflow-hidden group transition-all duration-300 cursor-default"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(168,85,247,0.1), transparent 70%)',
                }}
              />
              <div className="text-3xl mb-4">{cert.icon}</div>
              <h3
                className="text-white text-sm font-semibold leading-snug mb-2"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {cert.name}
              </h3>
              <p
                className="text-aurora-purple text-xs font-medium"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3
            className="text-lg font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            <span className="neon-gold">🏆</span> Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((ach, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,214,10,0.15), rgba(168,85,247,0.15))',
                    border: '1px solid rgba(255,214,10,0.3)',
                    color: '#ffd60a',
                    fontFamily: 'var(--font-jetbrains)',
                  }}
                >
                  {i + 1}
                </div>
                <p className="text-slate-300 text-sm">{ach}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
