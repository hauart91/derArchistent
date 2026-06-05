import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const FEATURES = [
  {
    icon: "⊞",
    title: "Dashboard",
    desc: "Umrechner, DIN-Formate, Maßstab, Winkel, Farben – alles auf einen Blick.",
    to: "/dashboard",
  },
  {
    icon: "§",
    title: "Regelwerke",
    desc: "BayBO, MBO, OIB und weitere Vorschriften strukturiert aufbereitet.",
    to: "/regelwerke",
  },
  {
    icon: "A–Z",
    title: "Lexikon",
    desc: "Fachbegriffe der Architektur kompakt und schnell nachschlagen.",
    to: "/lexikon",
  },
  {
    icon: "⌗",
    title: "Rechner",
    desc: "GRZ, GFZ, Entwässerung, Parkplätze und mehr berechnen.",
    to: "/rechner",
  },
];

function Home() {
  return (
    <Layout>
      <div className="home-page">

        {/* ── HERO ── */}
        <section className="home-hero">
          <div className="home-hero__bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)` }} />
          <div className="home-hero__overlay" />
          <div className="home-hero__inner">
            <p className="home-hero__eyebrow">Für Architekten &amp; Planer</p>
            <h1 className="home-hero__headline">
              Regelwerke, Tools und Wissen –<br />alles an einem Ort.
            </h1>
            <p className="home-hero__sub">
              derArchistent bündelt alles, was Architekten und Planer im Alltag brauchen.
              Fachinformationen, smarte Tools, Rechner und Daten.
            </p>
            <div className="home-hero__cta">
              <Link to="/dashboard" className="home-btn home-btn--primary">
                Dashboard öffnen
              </Link>
              <Link to="/regelwerke" className="home-btn home-btn--ghost">
                Regelwerke ansehen
              </Link>
            </div>
          </div>
          <div className="home-hero__badge">Beta</div>
        </section>

        {/* ── FEATURES ── */}
        <section className="home-features">
          <p className="home-features__label">Was dich erwartet</p>
          <div className="home-features__grid">
            {FEATURES.map(f => (
              <Link to={f.to} key={f.title} className="home-card">
                <span className="home-card__icon">{f.icon}</span>
                <h3 className="home-card__title">{f.title}</h3>
                <p className="home-card__desc">{f.desc}</p>
                <span className="home-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <section className="home-strip">
          <div className="home-strip__inner">
            <h2 className="home-strip__headline">Bereit loszulegen?</h2>
            <p className="home-strip__sub">
              Kostenlos, direkt im Browser — keine Registrierung nötig.
            </p>
            <Link to="/dashboard" className="home-btn home-btn--primary">
              Jetzt starten
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default Home;
