"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#hero", label: "Accueil", id: "hero" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#cases", label: "Réalisations", id: "cases" },
  { href: "#about", label: "À propos", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const progressRef = useRef<HTMLSpanElement | null>(null);

  // scroll listener: scrolled flag + progress bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = (document.documentElement.scrollHeight - document.documentElement.clientHeight) || 1;
      const p = Math.min(Math.max(window.scrollY / max, 0), 1);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy on sections with [data-spy]
  useEffect(() => {
    const spy = Array.from(document.querySelectorAll<HTMLElement>("[data-spy]"));
    if (!spy.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    spy.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`} id="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="#hero" aria-label="MONARC home">
          <span className="brand-mark" />
          <span className="brand-word">
            <b className="metal">MONARC</b>
            <small>Agency</small>
          </span>
        </Link>

        <nav className="menu" id="menu" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              data-link={l.id}
              className={activeId === l.id ? "active" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-ghost">
            Démarrer
          </a>
          <a href="#contact" className="btn btn-solid">
            Discutons <span className="arrow">→</span>
          </a>
        </div>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <span className="nav-progress" ref={progressRef} aria-hidden="true" />

      <div className="drawer" id="drawer">
        {LINKS.map((l) => (
          <a key={l.id} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <div className="drawer-cta">
          <a href="#contact" className="btn btn-ghost" onClick={close}>
            Démarrer
          </a>
          <a href="#contact" className="btn btn-solid" onClick={close}>
            Discutons →
          </a>
        </div>
      </div>
    </header>
  );
}
