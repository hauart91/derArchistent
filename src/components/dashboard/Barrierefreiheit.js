import { Link } from "react-router-dom";

const ITEMS = [
  "Behindertengerecht",
  "Rollstuhlgerecht",
  "DIN 18040-1 (öffentliche Gebäude)",
  "DIN 18040-2 (Wohnungen)",
];

function Barrierefreiheit() {
  return (
    <div className="dash-box">
      <h3 className="dash-box__title">Barrierefreiheit</h3>
      <ul className="dash-list">
        {ITEMS.map(item => (
          <li key={item}><Link to="/regelwerke">{item}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Barrierefreiheit;
