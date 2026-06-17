"use client";

import { type FormEvent, useState } from "react";

type NoteState = { kind: "" | "ok" | "bad"; text: string };
const EMAIL_RE = /^[^@]+@[^@]+\.[^@]+$/;

export default function Contact() {
  const [note, setNote] = useState<NoteState>({ kind: "", text: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, boolean> = {};
    let ok = true;

    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]").forEach((f) => {
      const value = String(data.get(f.name) ?? "").trim();
      const bad = !value || (f.type === "email" && !EMAIL_RE.test(value));
      next[f.name] = bad;
      if (bad) ok = false;
    });
    setErrors(next);

    if (!ok) {
      setNote({ kind: "bad", text: "Merci de compléter les champs requis." });
      return;
    }
    setNote({
      kind: "ok",
      text: "Merci ! Votre demande a bien été envoyée — nous revenons vers vous sous 24 h.",
    });
    form.reset();
  }

  const cls = (name: string) => (errors[name] ? "err" : undefined);

  return (
    <section className="section alt" id="contact" data-spy>
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow-2">Contact</span>
          <h2 className="sec-title">
            Contactez <span className="hl">MONARC Agency</span>
          </h2>
          <p className="sec-sub">
            Vous avez un projet, une question ou besoin d&apos;un accompagnement marketing ? Envoyez-nous un message,
            notre équipe vous répond rapidement.
          </p>
        </div>

        <div className="contact-grid">
          <form className="form" onSubmit={onSubmit} noValidate data-reveal>
            <div className="frow">
              <div className="field">
                <label htmlFor="f-name">Nom</label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  required
                  className={cls("name")}
                />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  placeholder="vous@entreprise.com"
                  required
                  className={cls("email")}
                />
              </div>
            </div>
            <div className="frow">
              <div className="field">
                <label htmlFor="f-phone">Téléphone</label>
                <input id="f-phone" name="phone" type="tel" placeholder="+33 6 00 00 00 00" />
              </div>
              <div className="field">
                <label htmlFor="f-company">Entreprise</label>
                <input id="f-company" name="company" type="text" placeholder="Nom de l'entreprise" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-msg">Message</label>
              <textarea
                id="f-msg"
                name="message"
                rows={5}
                placeholder="Parlez-nous de votre projet…"
                required
                className={cls("message")}
              />
            </div>
            <button type="submit" className="btn btn-solid btn-lg">
              Envoyer ma demande <span className="arrow">→</span>
            </button>
            <p className={`form-note${note.kind ? ` ${note.kind}` : ""}`}>{note.text}</p>
          </form>

          <aside className="cinfo" data-reveal>
            <div className="cline">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <div>
                <div className="k">Email</div>
                <div className="v">hello@monarc.agency</div>
              </div>
            </div>
            <div className="cline">
              <svg viewBox="0 0 24 24">
                <path d="M4 5c0 8 7 15 15 15l1-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-5z" />
              </svg>
              <div>
                <div className="k">Téléphone</div>
                <div className="v">+33 1 84 80 00 00</div>
              </div>
            </div>
            <div className="cline">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <div>
                <div className="k">Adresse</div>
                <div className="v">24 Rue de la Croissance, 75008 Paris</div>
              </div>
            </div>
            <div className="csocials">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17 6.5v.01" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1z" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24">
                  <path d="M14 4v9a3.5 3.5 0 1 1-3-3.5M14 4c.5 2.5 2 4 4.5 4.2" />
                </svg>
              </a>
            </div>
            <div className="cmap">
              <iframe
                title="MONARC Agency — Paris"
                loading="lazy"
                src="https://maps.google.com/maps?q=Paris%20France&z=12&output=embed"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
