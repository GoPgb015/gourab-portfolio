'use client';

import { motion } from 'framer-motion';

const companies = [
  { name: 'Company A', url: '#' },
  { name: 'Company B', url: '#' },
  { name: 'Company C', url: '#' },
  { name: 'Company D', url: '#' },
  { name: 'Company E', url: '#' },
];

export default function SocialProof() {
  return (
    <section className="py-8 border-y border-gold/20 overflow-hidden">
      <div className="flex items-center gap-8">
        <span className="text-sm uppercase tracking-widest text-text-secondary whitespace-nowrap">
          Trusted by top teams from:
        </span>
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {companies.map((company, i) => (
              <span key={i} className="text-text-primary text-lg font-semibold whitespace-nowrap">
                {company.name}
              </span>
            ))}
            {companies.map((company, i) => (
              <span key={`dup-${i}`} className="text-text-primary text-lg font-semibold whitespace-nowrap">
                {company.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
