import { useState } from "react";
import { Link } from "react-router-dom";

const ITEMS = [
  "BauNVO", "Bauordnungen", "VOB", "DIN Normen", "GRZ", "GFZ",
  "Baumasse", "Traufhöhe", "Firsthöhe", "Abstandsflächen", "Bebauungsplan",
  "Erschließung", "Barrierefreiheit", "Standsicherheit",
];

function Lexikon() {
  const [q, setQ] = useState("");
  const filtered = ITEMS.filter(i => i.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="dash-box">
      <h3 className="dash-box__title">Lexikon</h3>
      <div className="dash-search">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="5.5" cy="5.5" r="4" stroke="#aaa" strokeWidth="1.4"/>
          <line x1="8.5" y1="8.5" x2="12" y2="12" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Suche" className="dash-search-input" />
      </div>
      <ul className="dash-list">
        {filtered.map(item => (
          <li key={item}><Link to="/lexikon">{item}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Lexikon;
