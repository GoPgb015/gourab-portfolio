"use client";

import { useRef, useState } from "react";

interface ContentRowProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentRow({ title, children }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 20);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-6 md:py-8">
      <h2 className="font-[var(--font-display)] text-xl md:text-2xl text-text-white tracking-wider px-6 md:px-12 mb-3">
        {title}
      </h2>

      <div className="relative group">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-30 w-12 bg-gradient-to-r from-bg-primary/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-2 md:gap-3 px-6 md:px-12 overflow-x-auto hide-scrollbar scroll-smooth"
        >
          {children}
        </div>

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-30 w-12 bg-gradient-to-l from-bg-primary/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
