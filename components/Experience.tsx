'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '@/data';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={ref} className="py-32 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Building Real
        </motion.h2>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="pl-8 border-l-2 border-gold-warm/30 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gold-warm rounded-full" />
              <div className="mb-2">
                <span className="text-gold-warm font-mono text-sm">{exp.period}</span>
              </div>
              <h3 className="text-2xl font-display text-text-primary mb-1">{exp.role}</h3>
              <p className="text-text-secondary mb-4">{exp.company}</p>
              <p className="text-text-primary/80">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
