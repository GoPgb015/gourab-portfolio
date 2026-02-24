'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/data';

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  'cyber-purple': { text: '#8338ec', bg: 'rgba(131,56,236,0.08)', border: 'rgba(131,56,236,0.25)' },
  'aurora-cyan':  { text: '#06b6d4', bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.25)' },
  'cyber-pink':   { text: '#ff006e', bg: 'rgba(255,0,110,0.08)',  border: 'rgba(255,0,110,0.25)' },
  'aurora-teal':  { text: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.25)' },
};

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="blog" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-cyber-pink/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between gap-4 flex-wrap"
        >
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase text-cyber-pink mb-3"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              07 / Thoughts
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Blog &{' '}
              <span className="gradient-text-warm">Writings</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-aurora-purple hover:text-white transition-colors flex items-center gap-1.5 group"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            All posts
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Blog card grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {blogPosts.map((post, i) => {
            const c = colorMap[post.color] ?? colorMap['aurora-cyan'];
            return (
              <motion.div
                key={post.slug}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group no-underline">
                  <div
                    className="glass-card rounded-2xl p-6 h-full flex flex-col overflow-hidden relative transition-all duration-300"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = c.border;
                      e.currentTarget.style.boxShadow = `0 0 24px ${c.bg}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {/* Top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, ${c.text}, transparent)` }}
                    />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: c.bg,
                            border: `1px solid ${c.border}`,
                            color: c.text,
                            fontFamily: 'var(--font-jetbrains)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-white font-bold text-sm leading-snug mb-3 flex-1 group-hover:text-opacity-90 transition-colors"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-500 text-xs leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <span className="text-slate-600 text-xs">{post.date}</span>
                      <span
                        className="text-xs flex items-center gap-1 group-hover:gap-2 transition-all"
                        style={{ color: c.text }}
                      >
                        {post.readTime}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
