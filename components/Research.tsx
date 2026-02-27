'use client';

import { motion } from 'framer-motion';
import { research } from '@/data';

export default function Research() {
  return (
    <section className="py-32 gradient-emerald-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Foundation
        </motion.h2>

        <motion.p
          className="text-xl text-text-primary mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Academic research that paved the way for practical AI applications.
        </motion.p>

        <div className="space-y-8">
          {research.map((paper, index) => (
            <motion.div
              key={index}
              className="bg-charcoal/50 p-6 rounded-lg gold-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-display text-gold-warm mb-2">{paper.title}</h3>
              <p className="text-text-secondary text-sm mb-2">{paper.venue} · {paper.year}</p>
              <p className="text-text-primary/80 text-sm">{paper.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
