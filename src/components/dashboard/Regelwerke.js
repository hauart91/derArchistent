import { useState } from "react";
import { Link } from "react-router-dom";

const ITEMS = [
  "BauGB", "BauNVO", "Bayerische Bauordnung (BayBO)", "Musterbauordnung (MBO)",
  "VOB", "DIN 276", "DIN 277", "DIN 18040", "DIN 4109", "HOAI", "RPW 2013",
];

function Regelwerke() {
  const [q, setQ] = useState("");
  const filtered = ITEMS.filter(i => i.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="dash-box">
      <h3 className="dash-box__title">Regelwerke</h3>
      <div className="dash-search">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="5.5" cy="5.5" r="4" stroke="#aaa" strokeWidth="1.4"/>
          <line x1="8.5" y1="8.5" x2="12" y2="12" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Suche" className="dash-search-input" />
      </div>
      <ul className="dash-list">
        {filtered.map(item => (
          <li key={item}><Link to="/regelwerke">{item}</Link></li>
        ))}
      </ul>
      <Link to="/regelwerke" className="dash-link-more">Zu den Regelwerken →</Link>
    </div>
  );
}

export default Regelwerke;
