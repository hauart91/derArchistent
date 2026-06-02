import { useState, useEffect } from "react";

const FORMATE = [
  { name: "DIN A0",  mm: "841 × 1189", px72: "2384 × 3370", px150: "4967 × 7022",  px300: "9933 × 14043", inA0: "1×",    qm: "0,9999" },
  { name: "DIN A1",  mm: "594 × 841",  px72: "1684 × 2384", px150: "3508 × 4967",  px300: "7016 × 9933",  inA0: "2×",    qm: "0,4996" },
  { name: "DIN A2",  mm: "420 × 594",  px72: "1191 × 1684", px150: "2480 × 3508",  px300: "4961 × 7016",  inA0: "4×",    qm: "0,2495" },
  { name: "DIN A3",  mm: "297 × 420",  px72: "842 × 1191",  px150: "1754 × 2480",  px300: "3508 × 4961",  inA0: "8×",    qm: "0,1247" },
  { name: "DIN A4",  mm: "210 × 297",  px72: "595 × 842",   px150: "1240 × 1754",  px300: "2480 × 3508",  inA0: "16×",   qm: "0,0624" },
  { name: "DIN A5",  mm: "148 × 210",  px72: "420 × 595",   px150: "874 × 1240",   px300: "1748 × 2480",  inA0: "32×",   qm: "0,0311" },
  { name: "DIN A6",  mm: "105 × 148",  px72: "298 × 420",   px150: "620 × 874",    px300: "1240 × 1748",  inA0: "64×",   qm: "0,0155" },
  { name: "DIN A7",  mm: "74 × 105",   px72: "210 × 298",   px150: "437 × 620",    px300: "874 × 1240",   inA0: "128×",  qm: "0,0078" },
  { name: "DIN A8",  mm: "52 × 74",    px72: "147 × 210",   px150: "307 × 437",    px300: "614 × 874",    inA0: "256×",  qm: "0,0038" },
  { name: "DIN A9",  mm: "37 × 52",    px72: "105 × 147",   px150: "219 × 307",    px300: "437 × 614",    inA0: "512×",  qm: "0,0019" },
  { name: "DIN A10", mm: "26 × 37",    px72: "74 × 105",    px150: "154 × 219",    px300: "307 × 437",    inA0: "1024×", qm: "0,0010" },
];

function DINIllustration() {
  return (
    <svg viewBox="0 0 400 283" className="din-illustration" xmlns="http://www.w3.org/2000/svg">
      {/* Filled sub-regions — together they tile the full A0 area (400×283) */}
      <rect x="0"   y="0"   width="200" height="283" fill="#fef3ec" />
      <rect x="200" y="0"   width="200" height="142" fill="#fde4d0" />
      <rect x="200" y="142" width="100" height="141" fill="#fcd5b4" />
      <rect x="300" y="142" width="100" height="71"  fill="#fbc699" />
      <rect x="300" y="213" width="50"  height="70"  fill="#fab780" />
      <rect x="350" y="213" width="50"  height="35"  fill="#f9a868" />
      <rect x="350" y="248" width="25"  height="35"  fill="#f89950" />
      <rect x="375" y="248" width="25"  height="35"  fill="#f78a38" />

      {/* Inner dividers */}
      <line x1="200" y1="0"   x2="200" y2="283" stroke="#d4c4b0" strokeWidth="1" />
      <line x1="200" y1="142" x2="400" y2="142" stroke="#d4c4b0" strokeWidth="1" />
      <line x1="300" y1="142" x2="300" y2="283" stroke="#d4c4b0" strokeWidth="1" />
      <line x1="300" y1="213" x2="400" y2="213" stroke="#d4c4b0" strokeWidth="1" />
      <line x1="350" y1="213" x2="350" y2="283" stroke="#d4c4b0" strokeWidth="1" />
      <line x1="350" y1="248" x2="400" y2="248" stroke="#d4c4b0" strokeWidth="1" />
      <line x1="375" y1="248" x2="375" y2="283" stroke="#d4c4b0" strokeWidth="1" />

      {/* A0 outer border */}
      <rect x="0" y="0" width="400" height="283" fill="none" stroke="#7a6a5a" strokeWidth="1.5" />

      {/* Format labels */}
      <text x="100" y="133" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1a1a1a">A1</text>
      <text x="100" y="149" textAnchor="middle" fontSize="10" fill="#888">594 × 841 mm</text>

      <text x="300" y="63"  textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a1a1a">A2</text>
      <text x="300" y="78"  textAnchor="middle" fontSize="10" fill="#888">420 × 594 mm</text>

      <text x="250" y="203" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">A3</text>
      <text x="250" y="216" textAnchor="middle" fontSize="9"  fill="#888">297 × 420 mm</text>

      <text x="350" y="172" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a1a1a">A4</text>
      <text x="350" y="184" textAnchor="middle" fontSize="8"  fill="#888">210 × 297 mm</text>

      <text x="325" y="242" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1a1a1a">A5</text>
      <text x="325" y="253" textAnchor="middle" fontSize="7.5" fill="#888">148 × 210</text>

      <text x="375" y="229" textAnchor="middle" fontSize="8"  fontWeight="700" fill="#1a1a1a">A6</text>

      <text x="362" y="265" textAnchor="middle" fontSize="7"  fontWeight="700" fill="#1a1a1a">A7</text>

      <text x="388" y="261" textAnchor="middle" fontSize="6"  fontWeight="700" fill="#333">A8+</text>
    </svg>
  );
}

function DINFormate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="dash-box dash-box--wide din-box" onClick={() => setOpen(true)}>
        <h3 className="dash-box__title">DIN Planformate</h3>
        <div className="dash-table-scroll">
          <table className="dash-table">
            <thead>
              <tr>
                <th className="dash-table__name">Format</th>
                <th className="dash-table__val">mm</th>
                <th className="dash-table__val">72 dpi</th>
                <th className="dash-table__val">150 dpi</th>
                <th className="dash-table__val">300 dpi</th>
                <th className="dash-table__val">in A0</th>
                <th className="dash-table__val">m²</th>
              </tr>
            </thead>
            <tbody>
              {FORMATE.map(f => (
                <tr key={f.name}>
                  <td className="dash-table__name">{f.name}</td>
                  <td className="dash-table__val">{f.mm}</td>
                  <td className="dash-table__val">{f.px72}</td>
                  <td className="dash-table__val">{f.px150}</td>
                  <td className="dash-table__val">{f.px300}</td>
                  <td className="dash-table__val">{f.inA0}</td>
                  <td className="dash-table__val">{f.qm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span className="din-expand-hint">Klicken für Detailansicht</span>
      </div>

      {open && (
        <div className="din-overlay" onClick={() => setOpen(false)}>
          <div className="din-overlay__panel" onClick={e => e.stopPropagation()}>
            <button className="din-overlay__close" onClick={() => setOpen(false)}>×</button>
            <h2 className="din-overlay__title">DIN Planformate</h2>
            <div className="din-overlay__body">
              <div className="din-overlay__table-wrap">
                <table className="dash-table din-overlay__table">
                  <thead>
                    <tr>
                      <th className="dash-table__name">Format</th>
                      <th className="dash-table__val">Maße (mm)</th>
                      <th className="dash-table__val">72 dpi</th>
                      <th className="dash-table__val">150 dpi</th>
                      <th className="dash-table__val">300 dpi</th>
                      <th className="dash-table__val">in A0</th>
                      <th className="dash-table__val">m²</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FORMATE.map(f => (
                      <tr key={f.name}>
                        <td className="dash-table__name">{f.name}</td>
                        <td className="dash-table__val">{f.mm}</td>
                        <td className="dash-table__val">{f.px72}</td>
                        <td className="dash-table__val">{f.px150}</td>
                        <td className="dash-table__val">{f.px300}</td>
                        <td className="dash-table__val">{f.inA0}</td>
                        <td className="dash-table__val">{f.qm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="din-overlay__viz">
                <DINIllustration />
                <p className="din-overlay__viz-caption">
                  Maßstäbliche Darstellung der DIN A-Reihe innerhalb des A0-Formats
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DINFormate;
