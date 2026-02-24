'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '@/data';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Aurora background burst */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase text-aurora-purple mb-3"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            08 / Contact
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Let&apos;s{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Open to AI research collaborations, analytics consulting, and conversations about where
            intelligence meets impact.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {/* Email */}
          <motion.a
            variants={fadeUp}
            href={`mailto:${personalInfo.email}`}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 text-center group cursor-pointer transition-all duration-300 neon-border hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] no-underline"
          >
            <div className="text-2xl mb-3">📧</div>
            <p
              className="text-xs text-slate-500 mb-1"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              Email
            </p>
            <p className="text-sm text-slate-300 group-hover:text-aurora-purple transition-colors break-all">
              {personalInfo.email}
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={fadeUp}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 text-center group cursor-pointer transition-all duration-300 neon-border-cyan hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] no-underline"
          >
            <div className="text-2xl mb-3">🔗</div>
            <p
              className="text-xs text-slate-500 mb-1"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              LinkedIn
            </p>
            <p className="text-sm text-slate-300 group-hover:text-aurora-cyan transition-colors">
              gourabchatterjee
            </p>
          </motion.a>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 text-center group cursor-default transition-all duration-300 neon-border-pink hover:shadow-[0_0_30px_rgba(255,0,110,0.1)]"
          >
            <div className="text-2xl mb-3">📍</div>
            <p
              className="text-xs text-slate-500 mb-1"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              Location
            </p>
            <p className="text-sm text-slate-300">{personalInfo.location}</p>
          </motion.div>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white text-lg overflow-hidden group transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            <span
              className="absolute inset-0 rounded-full transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7, #06b6d4)',
              }}
            />
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #ff006e, #a855f7, #7c3aed)',
              }}
            />
            <span className="relative z-10">Send a Message</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
