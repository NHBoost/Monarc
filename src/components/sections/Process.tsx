const STEPS = [
  { n: 1, title: "Analyse", body: "Nous analysons votre activité, vos objectifs, votre audience et votre présence digitale actuelle." },
  { n: 2, title: "Stratégie", body: "Nous définissons une stratégie claire pour améliorer votre visibilité et attirer les bons prospects." },
  { n: 3, title: "Création", body: "Nous produisons les contenus, supports, pages ou campagnes nécessaires à votre développement." },
  { n: 4, title: "Lancement", body: "Nous mettons en place les actions marketing et suivons les premiers résultats." },
  { n: 5, title: "Optimisation", body: "Nous ajustons la stratégie pour améliorer continuellement les performances." },
];

export default function Process() {
  return (
    <section className="section alt" id="process">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow-2">Méthode</span>
          <h2 className="sec-title">
            Une méthode simple, claire et <span className="hl">orientée résultats</span>
          </h2>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="step"
              data-stagger
              style={{ ["--d" as string]: `${i * 0.08}s` }}
            >
              <span className="dot">{s.n}</span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
