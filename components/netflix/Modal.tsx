"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  thumbnail: string;
  title: string;
  seasonEpisode?: string;
  period?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  detail?: string;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  thumbnail,
  title,
  seasonEpisode,
  period,
  description,
  bullets,
  tags,
  detail,
  children,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:w-full md:max-w-2xl md:-translate-x-1/2 top-[10vh] bottom-[5vh] z-[101] bg-bg-modal rounded-lg overflow-hidden flex flex-col"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="relative w-full aspect-video flex-shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${thumbnail})` }}
              />
              <div className="card-gradient absolute inset-0" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg-modal/80 flex items-center justify-center text-text-primary hover:text-text-white transition-colors"
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="font-[var(--font-display)] text-3xl md:text-4xl text-text-white tracking-wide">
                  {title}
                </h2>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {seasonEpisode && (
                  <span className="text-accent-gold text-sm font-semibold">
                    {seasonEpisode}
                  </span>
                )}
                {period && (
                  <span className="text-text-secondary text-sm border border-border-subtle px-2 py-0.5 rounded">
                    {period}
                  </span>
                )}
                {detail && (
                  <span className="text-accent-gold text-sm">
                    {detail}
                  </span>
                )}
              </div>

              {description && (
                <p className="text-text-primary text-sm leading-relaxed mb-4">
                  {description}
                </p>
              )}

              {bullets && bullets.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed flex gap-2">
                      <span className="text-accent-gold mt-1 flex-shrink-0">&#x25B8;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-secondary border border-border-subtle px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
