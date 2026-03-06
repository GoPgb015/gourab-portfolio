"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/portfolio";

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="hero-gradient absolute inset-0 z-10" />

      <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-text-white tracking-wide leading-none mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-text-primary max-w-xl mb-6 font-light">
              {slide.subtitle}
            </p>
            <button className="bg-accent-gold hover:bg-accent-gold-bright text-bg-primary font-semibold px-8 py-3 rounded text-sm transition-colors">
              {slide.cta}
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-2 mt-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-accent-gold"
                  : "w-4 bg-text-muted hover:bg-text-secondary"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
