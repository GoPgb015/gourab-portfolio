"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const tabs = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function Navbar({ soundEnabled, onToggleSound }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/95 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-[var(--font-display)] text-3xl tracking-wider text-accent-gold hover:text-accent-gold-bright transition-colors"
        >
          GC
        </a>

        <div className="hidden md:flex items-center gap-6">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="text-sm text-text-secondary hover:text-text-white transition-colors"
            >
              {tab.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSound}
            className="text-text-secondary hover:text-text-white transition-colors p-2"
            aria-label={soundEnabled ? "Mute" : "Unmute"}
          >
            {soundEnabled ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden text-text-secondary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          className="md:hidden bg-bg-primary/98 backdrop-blur-lg border-t border-border-subtle px-6 py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="block py-3 text-text-secondary hover:text-text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {tab.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
