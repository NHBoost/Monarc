const KEYS = [
  {
    label: "Stratégie digitale",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M3 3v18h18" />
        <path d="m7 14 3-4 3 2 4-6" />
      </svg>
    ),
  },
  {
    label: "Acquisition client",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M6 3v6a6 6 0 0 0 12 0V3" />
        <path d="M6 3H3M18 3h3M6 9H3M18 9h3" />
      </svg>
    ),
  },
  {
    label: "Création de contenu",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        <path d="m12 8 1.5 2.5L16 12l-2.5 1.5L12 16l-1.5-2.5L8 12l2.5-1.5z" />
      </svg>
    ),
  },
  {
    label: "Conversion prospects",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17 9 11l4 4 8-8" />
        <path d="M17 7h4v4" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className="section alt" id="about" data-spy>
      <div className="wrap about-grid">
        <div className="about-media" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-img"
            src="https://images.pexels.com/photos/6476262/pexels-photo-6476262.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Équipe MONARC en réunion stratégique"
          />
          <div className="mglow" />
          <div className="about-badge">
            <b className="metal">MONARC</b>
            <span>Digital · Strategy · Growth</span>
          </div>
        </div>
        <div data-reveal>
          <span className="eyebrow-2">À propos</span>
          <h2 className="sec-title">
            Une agence digitale orientée stratégie, image et <span className="hl">performance</span>
          </h2>
          <p className="sec-sub">
            MONARC Agency accompagne les entrepreneurs, marques et entreprises dans la construction d&apos;une présence
            digitale solide. Notre mission est simple : créer des stratégies qui attirent l&apos;attention, génèrent de
            la confiance et convertissent les prospects en clients.
          </p>

          <div className="about-keys">
            {KEYS.map((k) => (
              <div key={k.label} className="kkey">
                {k.svg}
                <b>{k.label}</b>
              </div>
            ))}
          </div>

          <p className="about-quote">
            Nous ne faisons pas seulement du marketing. Nous construisons des{" "}
            <b>systèmes d&apos;acquisition cohérents</b>, adaptés à votre marché, à votre audience et à vos objectifs de
            croissance.
          </p>
        </div>
      </div>
    </section>
  );
}
