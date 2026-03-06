"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useSound(src: string) {
  const [enabled, setEnabled] = useState(false);
  const howlRef = useRef<any>(null);

  useEffect(() => {
    import("howler").then(({ Howl }) => {
      howlRef.current = new Howl({
        src: [src],
        loop: true,
        volume: 0.15,
        preload: true,
      });
    });

    return () => {
      howlRef.current?.unload();
    };
  }, [src]);

  const toggle = useCallback(() => {
    if (!howlRef.current) return;
    if (enabled) {
      howlRef.current.pause();
    } else {
      howlRef.current.play();
    }
    setEnabled((prev) => !prev);
  }, [enabled]);

  return { enabled, toggle };
}
