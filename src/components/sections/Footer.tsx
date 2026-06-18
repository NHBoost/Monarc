import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="#hero" aria-label="MONARC home">
              <span className="brand-mark" />
              <span className="brand-word">
                <b className="metal">MONARC</b>
                <small>Agency</small>
              </span>
            </Link>
            <p>Agence de marketing digital spécialisée en stratégie, acquisition et conversion.</p>
          </div>
          <div className="foot-col">
            <h5>Navigation</h5>
            <a href="#hero">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#services">Services</a>
            <a href="#cases">Cas clients</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="foot-col">
            <h5>Réseaux</h5>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <a href="mailto:contact@monarc-agency.be">contact@monarc-agency.be</a>
            <a href="tel:+3228080000">+32 2 808 00 00</a>
            <a href="#contact">Bruxelles, Belgique</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="copy">© 2026 MONARC Agency. Tous droits réservés.</span>
          <div className="legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
