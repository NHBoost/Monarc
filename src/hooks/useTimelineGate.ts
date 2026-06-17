"use client";

import { useEffect } from "react";

/**
 * Adds `tl-live` to <html> only when the animation timeline is actually
 * advancing (rAF fires twice). Falls back to `reveal-fallback` after 700ms
 * so paused / SSR-captured renders never get stuck invisible.
 */
export function useTimelineGate() {
  useEffect(() => {
    const root = document.documentElement;
    let framed = false;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        framed = true;
        root.classList.add("tl-live");
      });
    });

    const watchdog = window.setTimeout(() => {
      if (!framed) root.classList.add("reveal-fallback");
    }, 700);

    return () => {
      window.clearTimeout(watchdog);
      root.classList.remove("tl-live", "reveal-fallback");
    };
  }, []);
}
