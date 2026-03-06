"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroSplash({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute w-40 h-40 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(212,168,71,0.4) 0%, transparent 70%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: [0, 1, 0.6] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.h1
            className="font-[var(--font-display)] text-8xl md:text-9xl tracking-wider text-accent-gold relative z-10"
            initial={{ scale: 0.3, opacity: 0, letterSpacing: "0.5em" }}
            animate={{ scale: 1, opacity: 1, letterSpacing: "0.15em" }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            GC
          </motion.h1>
          <motion.div
            className="absolute bottom-1/3 w-64 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
