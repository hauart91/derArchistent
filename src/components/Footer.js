import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <img src="/logo.svg" alt="derArchistent" className="footer-logo" />
          <p className="footer-tagline">
            Die Plattform für Architektur, Regelwerke und Wettbewerbe im deutschsprachigen Raum.
          </p>
          <div className="footer-social">
            <a href="#instagram" aria-label="Instagram">Instagram</a>
            <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
            <a href="#xing" aria-label="Xing">Xing</a>
          </div>
        </div>

        {/* NAV */}
        <div className="footer-col">
          <h4 className="footer-col-title">Seiten</h4>
          <nav className="footer-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/regelwerke">Regelwerke</NavLink>
            <NavLink to="/lexikon">Lexikon</NavLink>
            <NavLink to="/rechner">Rechner</NavLink>
            <NavLink to="/wettbewerbe">Wettbewerbe</NavLink>
          </nav>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4 className="footer-col-title">Kontakt</h4>
          <div className="footer-contact">
            <p>Musterstraße 12<br />80333 München<br />Deutschland</p>
            <a href="mailto:info@derarchistent.de">info@derarchistent.de</a>
            <a href="tel:+4989123456789">+49 89 123 456 789</a>
          </div>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4 className="footer-col-title">Rechtliches</h4>
          <nav className="footer-nav">
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
            <a href="#agb">AGB</a>
            <a href="#cookies">Cookie-Einstellungen</a>
          </nav>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 derArchistent. Alle Rechte vorbehalten.</span>
        <span className="footer-bottom-badge">Beta</span>
      </div>

    </footer>
  );
}

export default Footer;
