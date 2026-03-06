"use client";

import { motion } from "framer-motion";

interface CardProps {
  thumbnail: string;
  title: string;
  subtitle?: string;
  badge?: string;
  hoverDescription?: string;
  onClick: () => void;
  ranked?: number;
}

export default function Card({
  thumbnail,
  title,
  subtitle,
  badge,
  hoverDescription,
  onClick,
  ranked,
}: CardProps) {
  return (
    <motion.div
      className="relative flex-shrink-0 cursor-pointer group"
      style={{ width: ranked ? "300px" : "250px" }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <div className="flex items-end">
        {ranked && (
          <span
            className="font-[var(--font-display)] text-[120px] leading-none text-transparent mr-[-20px] z-10"
            style={{ WebkitTextStroke: "2px #d4a847" }}
          >
            {ranked}
          </span>
        )}

        <div className="relative w-full aspect-[16/9] rounded overflow-hidden bg-bg-card">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:brightness-110"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
          <div className="card-gradient absolute inset-0" />

          {badge && (
            <span className="absolute top-2 right-2 bg-accent-gold text-bg-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              {badge}
            </span>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-sm font-semibold text-text-white leading-tight line-clamp-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-text-secondary mt-1 line-clamp-1">
                {subtitle}
              </p>
            )}
          </div>

          {hoverDescription && (
            <div className="absolute inset-0 bg-bg-card/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <div>
                <h3 className="text-sm font-semibold text-text-white leading-tight mb-1">
                  {title}
                </h3>
                <p className="text-xs text-text-secondary line-clamp-3">
                  {hoverDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="absolute -inset-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "0 0 20px rgba(212,168,71,0.15)" }}
      />
    </motion.div>
  );
}
