const SERVICES = [
  {
    title: "Création de site web",
    body: "Nous concevons des sites modernes, rapides, professionnels et optimisés pour convertir vos visiteurs en prospects ou clients.",
    svg: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
        <path d="m8 13 2 2-2 2M13 17h3" />
      </svg>
    ),
  },
  {
    title: "Gestion des réseaux sociaux",
    body: "Nous construisons une présence cohérente grâce à des contenus réguliers, professionnels et adaptés à votre audience.",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M21 11a7 7 0 0 1-7 7H8l-4 3v-9a7 7 0 0 1 7-7h3a7 7 0 0 1 7 6z" />
        <path d="M9 11h6M9 8h4" />
      </svg>
    ),
  },
  {
    title: "Accompagnement business",
    body: "Nous vous aidons à clarifier votre positionnement, structurer vos offres et mettre en place une stratégie adaptée à vos objectifs.",
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="m15 9-4 1.5L9.5 15 14 13.5z" />
      </svg>
    ),
  },
  {
    title: "Production de contenu",
    body: "Nous créons des visuels, vidéos, scripts et contenus publicitaires pensés pour capter l'attention et renforcer votre image de marque.",
    svg: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3z" />
      </svg>
    ),
  },
  {
    title: "Acquisition client",
    body: "Nous mettons en place des campagnes performantes pour générer des prospects qualifiés et améliorer votre retour sur investissement.",
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M3 4h18l-7 8v6l-4 2v-8z" />
      </svg>
    ),
  },
  {
    title: "Accompagnement comptable & fiscal",
    body: "Nous accompagnons les entreprises dans la structuration de leur activité avec une vision claire, professionnelle et orientée croissance.",
    svg: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 7h8M8 11h2M12 11h4M8 15h2M12 15h4" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Services() {
  return (
    <section className="section" id="services" data-spy>
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow-2">Services</span>
          <h2 className="sec-title">
            Nos services pour développer votre <span className="hl">présence digitale</span>
          </h2>
          <p className="sec-sub">
            De la stratégie à la création, MONARC Agency vous accompagne dans toutes les étapes de votre croissance
            digitale.
          </p>
        </div>

        <div className="grid g3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="card scard"
              data-stagger
              style={{ ["--d" as string]: `${(i % 3) * 0.08}s` }}
            >
              <span className="ico">{s.svg}</span>
              <h3 className="card-h">{s.title}</h3>
              <p className="card-p">{s.body}</p>
              <a className="more" href="#contact">
                En savoir plus <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
