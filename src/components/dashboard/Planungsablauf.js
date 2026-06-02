import { useState } from "react";

const VERFAHREN = [
  "Verfahrensfrei",
  "Genehmigungsfreistellung",
  "Vereinfachtes Verfahren",
  "Reguläres Verfahren",
];

const TIMELINE = {
  "Verfahrensfrei": [
    { label: "Eingabe Unterlagen", duration: null },
    { label: "Baubeginn möglich", duration: "sofort", highlight: true },
    { label: "Baustart", duration: null },
    { label: "Fertigstellung", duration: null },
  ],
  "Genehmigungsfreistellung": [
    { label: "Eingabe Unterlagen", duration: null },
    { label: "Wartefrist", duration: "min. 1 Monat", highlight: true },
    { label: "Baubeginn", duration: null },
    { label: "Fertigstellung", duration: null },
  ],
  "Vereinfachtes Verfahren": [
    { label: "Eingabe Baugenehmigung", duration: null },
    { label: "Bearbeitungszeit", duration: "ca. 2–3 Monate", highlight: true },
    { label: "Positiver Baubescheid", duration: null },
    { label: "Baubeginnsanzeige", duration: "min. 1 Woche", highlight: true },
    { label: "Baustart", duration: null },
    { label: "Fertigstellung", duration: null },
  ],
  "Reguläres Verfahren": [
    { label: "Eingabe Baugenehmigung", duration: null },
    { label: "Fiktionsfrist", duration: "min. 3 Monate", highlight: true },
    { label: "Positiver Baubescheid", duration: null },
    { label: "Baubeginnsanzeige", duration: "min. 1 Woche", highlight: true },
    { label: "Baustart", duration: null },
    { label: "Nutzungsaufnahme", duration: "min. 1 Woche", highlight: true },
    { label: "Fertigstellung", duration: null },
  ],
};

function Planungsablauf() {
  const [verfahren, setVerfahren] = useState("Reguläres Verfahren");
  const [gk, setGk] = useState("GK 3");
  const [sonderbau, setSonderbau] = useState("Nein");

  const timeline = TIMELINE[verfahren];

  return (
    <div className="dash-outer-box">
      <h2 className="dash-section-label">Planungsablauf</h2>

      {/* VERFAHREN / GK / SONDERBAU */}
      <p className="dash-question">Definiere den Verfahrenstyp und die Gebäudeklasse</p>

      <div className="plan-selection-grid">

        <div className="dash-box">
          <h3 className="dash-box__title">Verfahrenstyp</h3>
          <p className="dash-box__sub">nach Art. 58–60 BayBO</p>
          <div className="plan-option-list">
            {VERFAHREN.map((v) => (
              <button
                key={v}
                className={`plan-option${verfahren === v ? " plan-option--active" : ""}`}
                onClick={() => setVerfahren(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="dash-box">
          <h3 className="dash-box__title">Gebäudeklasse</h3>
          <p className="dash-box__sub">nach Art. 2 BayBO</p>
          <div className="plan-option-list">
            {["GK 1","GK 2","GK 3","GK 4","GK 5"].map((g) => (
              <button
                key={g}
                className={`plan-option${gk === g ? " plan-option--active" : ""}`}
                onClick={() => setGk(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="dash-box">
          <h3 className="dash-box__title">Sonderbau</h3>
          <p className="dash-box__sub">nach Art. 2 BayBO</p>
          <div className="plan-option-list">
            {["Ja","Nein"].map((s) => (
              <button
                key={s}
                className={`plan-option${sonderbau === s ? " plan-option--active" : ""}`}
                onClick={() => setSonderbau(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* TIMELINE */}
      <div className="dash-box plan-timeline-wrap">
        <h3 className="dash-box__title">Planungsablauf — {verfahren}</h3>
        <div className="plan-timeline">
          {timeline.map((step, i) => (
            <div key={i} className="plan-timeline__step">
              {step.duration && (
                <span className={`plan-timeline__duration${step.highlight ? " plan-timeline__duration--hi" : ""}`}>
                  {step.duration}
                </span>
              )}
              <div className={`plan-timeline__dot${step.duration ? " plan-timeline__dot--mid" : ""}`} />
              <span className="plan-timeline__label">{step.label}</span>
              {i < timeline.length - 1 && <div className="plan-timeline__line" />}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Planungsablauf;
