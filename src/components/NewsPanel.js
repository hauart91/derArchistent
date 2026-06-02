import { useState } from "react";

const NEWS = [
  {
    id: 1,
    category: "Regelwerk",
    title: "Neue DIN 18040 – Barrierefreiheit im Wohnungsbau überarbeitet",
    date: "01. Jun 2026",
    color: "#d6e4f0",
  },
  {
    id: 2,
    category: "Wettbewerb",
    title: "Bundespreis Architektur 2026 – Einreichungen ab sofort möglich",
    date: "30. Mai 2026",
    color: "#d5e8d4",
  },
  {
    id: 3,
    category: "Recht",
    title: "Neue HOAI-Grundleistungen ab Juli 2026 in Kraft",
    date: "28. Mai 2026",
    color: "#ffe6cc",
  },
  {
    id: 4,
    category: "Lexikon",
    title: "Begriffserklärung: Gebäudeenergiegesetz (GEG) aktualisiert",
    date: "25. Mai 2026",
    color: "#e8d5f0",
  },
  {
    id: 5,
    category: "Wettbewerb",
    title: "RPW 2013 – Überarbeitete Fassung veröffentlicht",
    date: "22. Mai 2026",
    color: "#f0e6d5",
  },
  {
    id: 6,
    category: "Regelwerk",
    title: "MBO 2025 – Muster-Bauordnung jetzt in der Datenbank",
    date: "20. Mai 2026",
    color: "#d5eaf0",
  },
  {
    id: 7,
    category: "Recht",
    title: "Honorartabelle: Anpassungen für Ingenieurbauwerke 2026",
    date: "18. Mai 2026",
    color: "#f0d5d5",
  },
  {
    id: 8,
    category: "Wettbewerb",
    title: "Stadtplanungspreis München – Ergebnisse bekannt gegeben",
    date: "15. Mai 2026",
    color: "#ddf0d5",
  },
];

const CATEGORY_COLORS = {
  Regelwerk: "#1a6baa",
  Wettbewerb: "#2e8b4a",
  Recht:      "#c75c1a",
  Lexikon:    "#7b3fa8",
};

function NewsPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`news-panel${open ? " news-panel--open" : ""}`}>

      <button
        className="news-panel__toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "News schließen" : "News öffnen"}
      >
        <span className="news-panel__toggle-label">NEWS</span>
        <svg width="8" height="8" viewBox="0 0 8 8" className={`news-panel__arrow${open ? " news-panel__arrow--flipped" : ""}`}>
          <polyline points="6,1 2,4 6,7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="news-panel__inner">
        <div className="news-panel__header">
          <h3 className="news-panel__title">Aktuelles</h3>
          <span className="news-panel__count">{NEWS.length}</span>
        </div>

        <div className="news-panel__list">
          {NEWS.map((item) => (
            <div key={item.id} className="news-item">
              <div className="news-item__img" style={{ background: item.color }} />
              <div className="news-item__body">
                <span
                  className="news-item__category"
                  style={{ color: CATEGORY_COLORS[item.category] ?? "#555" }}
                >
                  {item.category}
                </span>
                <p className="news-item__title">{item.title}</p>
                <span className="news-item__date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default NewsPanel;
