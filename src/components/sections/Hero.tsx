"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [soundOn, setSoundOn] = useState(false);

  // toggle sound + animate button
  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setSoundOn(!v.muted);
  };

  // autoplay retry on first pointer interaction
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      const kick = () => {
        v.play().catch(() => {});
        window.removeEventListener("pointerdown", kick);
      };
      window.addEventListener("pointerdown", kick, { once: true });
    });
  }, []);

  // subtle parallax on pointer move
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;

    let raf: number | null = null;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = frame.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        frame.style.transform = `perspective(1400px) rotateX(${-y * 1.4}deg) rotateY(${x * 1.6}deg)`;
        raf = null;
      });
    };
    const onLeave = () => {
      frame.style.transition = "transform .6s ease";
      frame.style.transform = "";
      window.setTimeout(() => {
        frame.style.transition = "";
      }, 600);
    };
    frame.addEventListener("mousemove", onMove);
    frame.addEventListener("mouseleave", onLeave);
    return () => {
      frame.removeEventListener("mousemove", onMove);
      frame.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero wrap" id="hero" data-spy>
      <span className="eyebrow" data-reveal>
        <span className="dot" /> Agence digitale premium
      </span>

      <div className="hero-grid">
        <div className="hero-left">
          <h1 className="headline">
            <span className="ln">
              <span>Nous bâtissons une</span>
            </span>
            <span className="ln">
              <span>
                <em className="accent">Croissance digitale</em>
              </span>
            </span>
            <span className="ln">
              <span>pour les marques ambitieuses</span>
            </span>
          </h1>

          <div className="hero-actions" data-reveal>
            <a href="#contact" className="btn btn-solid btn-lg">
              Demander un audit gratuit <span className="arrow">→</span>
            </a>
            <a href="#cases" className="btn btn-ghost btn-lg">
              Voir nos réalisations
            </a>
          </div>

          <div className="est" data-reveal>
            <span className="bar" />
            <div>
              <div className="k">Depuis</div>
              <div className="v">2020</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <p className="lede" data-reveal>
            MONARC est une <b>agence digitale premium</b> dédiée à la stratégie, la visibilité, l&apos;acquisition et
            la conversion pour les entreprises ambitieuses.
          </p>

          <div className="stats">
            <div className="stat" data-stagger>
              <div className="num metal" data-count="12" data-suffix="+">
                12+
              </div>
              <div className="lab">
                Années de vision<span>Stratégie &amp; savoir-faire</span>
              </div>
            </div>
            <div className="stat" data-stagger>
              <div className="num metal" data-count="250" data-suffix="+">
                250+
              </div>
              <div className="lab">
                Projets livrés<span>Sur 14 marchés</span>
              </div>
            </div>
            <div className="stat" data-stagger>
              <div className="num metal" data-count="98" data-suffix="%">
                98%
              </div>
              <div className="lab">
                Clients satisfaits<span>La fidélité d&apos;abord</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="visual" data-reveal>
        <div className="visual-frame" ref={frameRef}>
          <video
            ref={videoRef}
            className="visual-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="https://www.pexels.com/fr-fr/download/video/6558324/" type="video/mp4" />
          </video>
          <div className="visual-overlay" />
          <div className="ring" />
          <button
            className="play"
            aria-label={soundOn ? "Couper le son" : "Activer le son"}
            aria-pressed={soundOn}
            onClick={toggleSound}
          >
            {soundOn ? (
              <svg viewBox="0 0 24 24">
                <path d="M11 5 6 9H3v6h3l5 4z" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a9 9 0 0 1 0 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M11 5 6 9H3v6h3l5 4z" />
                <path d="m16 9 5 6M21 9l-5 6" />
              </svg>
            )}
          </button>
          <div className="visual-tag">
            <span className="live" /> Showreel · MONARC
          </div>
        </div>
      </div>
    </section>
  );
}
