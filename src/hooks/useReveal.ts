"use client";

import { useEffect } from "react";

/**
 * Observes `[data-reveal]`, `[data-stagger]`, `.headline` and `[data-count]`
 * elements once they enter the viewport, adds `.inview`, and triggers
 * the count-up animation on `[data-count]` numbers.
 */
export function useReveal() {
  useEffect(() => {
    const countUp = (el: Element) => {
      const node = el as HTMLElement;
      if (node.dataset.done) return;
      node.dataset.done = "1";

      const target = parseFloat(node.getAttribute("data-count") ?? "0");
      const suffix = node.getAttribute("data-suffix") ?? "";
      const dur = 1500;
      let start: number | null = null;

      const step = (ts: number) => {
        if (start === null) {
          start = ts;
          node.textContent = "0";
        }
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(eased * target) + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("inview");
          if (el.hasAttribute("data-count")) countUp(el);
          el.querySelectorAll("[data-count]").forEach(countUp);
          io.unobserve(el);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -7% 0px" }
    );

    const nodes = document.querySelectorAll(
      "[data-reveal],[data-stagger],.headline,[data-count]"
    );
    nodes.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, []);
}
