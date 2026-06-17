const CASES = [
  {
    client: "Maison Lumen",
    tag: "E-commerce",
    issue: "Une marque visible mais peu de demandes entrantes qualifiées.",
    solution: "Refonte du tunnel et système d'acquisition payant structuré.",
    result: "Plus de demandes entrantes",
  },
  {
    client: "Atelier Sora",
    tag: "Service B2B",
    issue: "Une image de marque floue et peu différenciante sur son marché.",
    solution: "Repositionnement, identité de contenu et présence sociale cohérente.",
    result: "Meilleure image de marque",
  },
  {
    client: "Nova Conseil",
    tag: "Consulting",
    issue: "Aucun canal d'acquisition prévisible pour soutenir la croissance.",
    solution: "Mise en place d'un système d'acquisition clair et mesurable.",
    result: "Augmentation des prises de contact",
  },
];

const TrendIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 17 9 11l4 4 8-8" />
    <path d="M17 7h4v4" />
  </svg>
);

export default function Cases() {
  return (
    <section className="section" id="cases" data-spy>
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow-2">Cas d&apos;étude</span>
          <h2 className="sec-title">
            Des stratégies pensées pour générer des <span className="hl">résultats concrets</span>
          </h2>
        </div>
        <div className="grid g3">
          {CASES.map((c, i) => (
            <article
              key={c.client}
              className="card case-card"
              data-stagger
              style={{ ["--d" as string]: `${i * 0.08}s` }}
            >
              <div className="case-top">
                <span className="case-client">{c.client}</span>
                <span className="tag">{c.tag}</span>
              </div>
              <div className="case-row">
                <span className="k">Enjeu</span>
                <span className="v">{c.issue}</span>
              </div>
              <div className="case-row">
                <span className="k">Solution</span>
                <span className="v">{c.solution}</span>
              </div>
              <div className="case-result">
                <TrendIcon />
                <span>{c.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
