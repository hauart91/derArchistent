import { useState } from "react";
import Layout from "../components/Layout";

function Kontakt() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    betreff: "",
    nachricht: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Layout>
      <div className="kontakt-page">

        <div className="kontakt-header">
          <h1 className="kontakt-title">Kontakt</h1>
          <p className="kontakt-subtitle">
            Haben Sie Fragen, Anregungen oder möchten Sie mit uns zusammenarbeiten?
            Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="kontakt-grid">

          {/* FORM */}
          <div className="kontakt-form-wrap">
            <h2 className="kontakt-section-title">Nachricht senden</h2>

            {sent ? (
              <div className="kontakt-success">
                <span className="kontakt-success-icon">✓</span>
                <p>Vielen Dank! Ihre Nachricht wurde gesendet.</p>
                <button
                  className="kontakt-btn-outline"
                  onClick={() => { setSent(false); setForm({ name: "", email: "", betreff: "", nachricht: "" }); }}
                >
                  Neue Nachricht
                </button>
              </div>
            ) : (
              <form className="kontakt-form" onSubmit={handleSubmit}>

                <div className="kontakt-row">
                  <div className="kontakt-field">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      required
                    />
                  </div>
                  <div className="kontakt-field">
                    <label>E-Mail</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      required
                    />
                  </div>
                </div>

                <div className="kontakt-field">
                  <label>Betreff</label>
                  <input
                    type="text"
                    name="betreff"
                    value={form.betreff}
                    onChange={handleChange}
                    placeholder="Worum geht es?"
                    required
                  />
                </div>

                <div className="kontakt-field">
                  <label>Nachricht</label>
                  <textarea
                    name="nachricht"
                    value={form.nachricht}
                    onChange={handleChange}
                    placeholder="Ihre Nachricht..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="kontakt-btn-send">
                  Nachricht senden
                </button>

              </form>
            )}
          </div>

          {/* CONTACT INFO */}
          <div className="kontakt-info">
            <h2 className="kontakt-section-title">Kontaktdaten</h2>

            <div className="kontakt-info-block">
              <span className="kontakt-info-label">Adresse</span>
              <p>Musterstraße 12<br />80333 München<br />Deutschland</p>
            </div>

            <div className="kontakt-info-block">
              <span className="kontakt-info-label">E-Mail</span>
              <a href="mailto:info@derarchistent.de">info@derarchistent.de</a>
            </div>

            <div className="kontakt-info-block">
              <span className="kontakt-info-label">Telefon</span>
              <a href="tel:+4989123456789">+49 89 123 456 789</a>
            </div>

            <div className="kontakt-info-block">
              <span className="kontakt-info-label">Öffnungszeiten</span>
              <p>Mo – Fr: 09:00 – 18:00 Uhr<br />Sa – So: Geschlossen</p>
            </div>

            <div className="kontakt-divider" />

            <div className="kontakt-info-block">
              <span className="kontakt-info-label">Social Media</span>
              <div className="kontakt-social">
                <a href="#instagram">Instagram</a>
                <a href="#linkedin">LinkedIn</a>
                <a href="#xing">Xing</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Kontakt;
