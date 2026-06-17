const TESTIMONIALS = [
  {
    initials: "CR",
    name: "Camille Renard",
    company: "Maison Lumen",
    quote:
      "MONARC Agency nous a aidés à structurer notre communication et à gagner en clarté dans notre stratégie digitale.",
  },
  {
    initials: "YB",
    name: "Yanis Bercot",
    company: "Atelier Sora",
    quote:
      "Une équipe réactive, professionnelle et orientée résultats. L'accompagnement est clair du début à la fin.",
  },
  {
    initials: "SM",
    name: "Sofia Marchetti",
    company: "Nova Conseil",
    quote:
      "Grâce à leur approche, nous avons pu améliorer notre image et générer plus de demandes qualifiées.",
  },
];

export default function Testimonials() {
  return (
    <section className="section alt" id="testimonials">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <span className="eyebrow-2">Témoignages</span>
          <h2 className="sec-title">
            Ils nous ont fait <span className="hl">confiance</span>
          </h2>
        </div>
        <div className="grid g3">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className="card tcard"
              data-stagger
              style={{ ["--d" as string]: `${i * 0.08}s` }}
            >
              <div className="mark">&ldquo;</div>
              <p className="quote">{t.quote}</p>
              <div className="tperson">
                <span className="avatar" aria-hidden="true">{t.initials}</span>
                <div>
                  <b>{t.name}</b>
                  <span>{t.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
