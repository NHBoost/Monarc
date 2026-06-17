const VALUES = [
  {
    n: "01",
    title: "Expertise",
    body: "Stratégies digitales pensées pour générer des résultats mesurables.",
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Réactivité",
    body: "Un accompagnement fluide, rapide et adapté aux besoins de chaque client.",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Confiance",
    body: "Une relation transparente, basée sur l'écoute, la clarté et la performance.",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const CHIPS = [
  {
    label: "Google Ads",
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    label: "Meta Ads",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12a9 5 0 0 0 18 0 9 5 0 0 0-18 0" />
        <path d="M12 7v10" />
      </svg>
    ),
  },
  {
    label: "WordPress",
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
    ),
  },
  {
    label: "Réseaux sociaux",
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
      </svg>
    ),
  },
  {
    label: "Création de contenu",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21l3-1 11-11-2-2L4 18z" />
        <path d="m14 6 2 2" />
      </svg>
    ),
  },
  {
    label: "Acquisition client",
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M19 8v6M16 11h6" />
      </svg>
    ),
  },
];

export default function Approche() {
  return (
    <section className="section" id="approche">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow-2">L&apos;agence</span>
          <h2 className="sec-title">
            Une agence pensée pour les marques qui veulent passer à{" "}
            <span className="hl">l&apos;étape supérieure</span>
          </h2>
          <p className="sec-sub">
            Chez MONARC Agency, nous aidons les entreprises à structurer leur présence digitale, attirer les bons
            clients et transformer leur visibilité en résultats concrets. Notre approche combine stratégie, créativité,
            data et performance pour créer des actions marketing réellement efficaces.
          </p>
        </div>

        <div className="grid g3 values">
          {VALUES.map((v, i) => (
            <article
              key={v.n}
              className="card"
              data-stagger
              style={{ ["--d" as string]: `${i * 0.1}s` }}
            >
              <span className="val-n">{v.n}</span>
              <span className="ico">{v.svg}</span>
              <h3 className="card-h">{v.title}</h3>
              <p className="card-p">{v.body}</p>
            </article>
          ))}
        </div>

        <div className="exp-wrap" data-reveal>
          <p className="exp-lbl">Nos expertises principales</p>
          <div className="chips">
            {CHIPS.map((c) => (
              <span key={c.label} className="chip">
                {c.svg} {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
