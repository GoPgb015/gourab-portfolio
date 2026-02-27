'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-32 gradient-emerald-bg">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's Build Something Together
        </motion.h2>

        <motion.p
          className="text-xl text-text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind? Let's discuss how we can work together.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:gourab@example.com"
            className="inline-block px-8 py-4 bg-gold-warm text-charcoal font-semibold rounded hover:bg-gold-bright transition-colors"
          >
            Get In Touch
          </a>

          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-gold-warm hover:text-gold-bright transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gold-warm hover:text-gold-bright transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gold-warm hover:text-gold-bright transition-colors">
              Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
