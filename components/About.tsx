'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-32 gradient-emerald-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Impact
        </motion.h2>

        <motion.p
          className="text-xl text-text-primary leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Transforming research into real-world AI solutions that deliver measurable results.
        </motion.p>

        <motion.p
          className="text-text-primary/80 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          From academic foundations to industry applications, I bring a unique perspective that bridges the gap between cutting-edge research and practical implementation.
        </motion.p>
      </div>
    </section>
  );
}
