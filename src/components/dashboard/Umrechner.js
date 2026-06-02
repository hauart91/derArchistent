import { useState, useEffect } from "react";

const UNIT_MM = { m: 1000, dm: 100, cm: 10, mm: 1 };
const UNITS   = ["m", "dm", "cm", "mm"];

function fmt(v) {
  if (isNaN(v) || !isFinite(v)) return "";
  return parseFloat(v.toFixed(6)).toString();
}
function toDrawing(rv, ru, s, du) {
  return fmt((parseFloat(rv) * UNIT_MM[ru]) / parseFloat(s) / UNIT_MM[du]);
}
function toReal(dv, du, s, ru) {
  return fmt((parseFloat(dv) * UNIT_MM[du] * parseFloat(s)) / UNIT_MM[ru]);
}

function rgbToHex(r, g, b) {
  return [r, g, b].map(v => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, "0")).join("").toUpperCase();
}
function hexToRgb(hex) {
  const h = hex.replace("#", "");
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return { r: parseInt(h.slice(0,2),16), g: parseInt(h.slice(2,4),16), b: parseInt(h.slice(4,6),16) };
}
function rgbToCmyk(r, g, b) {
  const r1=r/255, g1=g/255, b1=b/255;
  const k = 1 - Math.max(r1, g1, b1);
  if (k >= 1) return { c:0, m:0, y:0, k:100 };
  return {
    c: Math.round(((1-r1-k)/(1-k))*100),
    m: Math.round(((1-g1-k)/(1-k))*100),
    y: Math.round(((1-b1-k)/(1-k))*100),
    k: Math.round(k*100),
  };
}
function cmykToRgb(c, m, y, k) {
  return {
    r: Math.round(255*(1-c/100)*(1-k/100)),
    g: Math.round(255*(1-m/100)*(1-k/100)),
    b: Math.round(255*(1-y/100)*(1-k/100)),
  };
}

function Umrechner() {
  const [open, setOpen] = useState(false);

  // Winkel / Prozent
  const [winkel,  setWinkel]  = useState("");
  const [prozent, setProzent] = useState("");

  // Maßstab
  const [scale,      setScale]      = useState("100");
  const [realVal,    setRealVal]    = useState("");
  const [realUnit,   setRealUnit]   = useState("m");
  const [drawVal,    setDrawVal]    = useState("");
  const [drawUnit,   setDrawUnit]   = useState("cm");
  const [lastEdited, setLastEdited] = useState("real");

  // Farbe
  const [hex,   setHex]   = useState("");
  const [rgbR,  setRgbR]  = useState("");
  const [rgbG,  setRgbG]  = useState("");
  const [rgbB,  setRgbB]  = useState("");
  const [cmykC, setCmykC] = useState("");
  const [cmykM, setCmykM] = useState("");
  const [cmykY, setCmykY] = useState("");
  const [cmykK, setCmykK] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // ── Winkel handlers ──
  function onWinkel(e) {
    const v = e.target.value; setWinkel(v);
    const d = parseFloat(v);
    setProzent(isNaN(d) ? "" : (Math.tan((d*Math.PI)/180)*100).toFixed(2));
  }
  function onProzent(e) {
    const v = e.target.value; setProzent(v);
    const p = parseFloat(v);
    setWinkel(isNaN(p) ? "" : ((Math.atan(p/100)*180)/Math.PI).toFixed(2));
  }

  // ── Maßstab handlers ──
  function onRealVal(e) {
    const v = e.target.value; setRealVal(v); setLastEdited("real");
    setDrawVal(toDrawing(v, realUnit, scale, drawUnit));
  }
  function onDrawVal(e) {
    const v = e.target.value; setDrawVal(v); setLastEdited("draw");
    setRealVal(toReal(v, drawUnit, scale, realUnit));
  }
  function onRealUnit(e) {
    const u = e.target.value; setRealUnit(u);
    if (lastEdited === "real") setDrawVal(toDrawing(realVal, u, scale, drawUnit));
    else setRealVal(toReal(drawVal, drawUnit, scale, u));
  }
  function onDrawUnit(e) {
    const u = e.target.value; setDrawUnit(u);
    if (lastEdited === "real") setDrawVal(toDrawing(realVal, realUnit, scale, u));
    else setRealVal(toReal(drawVal, u, scale, realUnit));
  }
  function onScale(e) {
    const s = e.target.value; setScale(s);
    if (!s) return;
    if (lastEdited === "real") setDrawVal(toDrawing(realVal, realUnit, s, drawUnit));
    else setRealVal(toReal(drawVal, drawUnit, s, realUnit));
  }
  function swapScale() {
    const rv = realVal, ru = realUnit;
    setRealVal(drawVal); setRealUnit(drawUnit);
    setDrawVal(rv); setDrawUnit(ru);
    setLastEdited(le => le === "real" ? "draw" : "real");
  }

  // ── Color handlers ──
  function syncFromRgb(r, g, b) {
    setHex(rgbToHex(r, g, b));
    const cy = rgbToCmyk(r, g, b);
    setCmykC(String(cy.c)); setCmykM(String(cy.m)); setCmykY(String(cy.y)); setCmykK(String(cy.k));
  }
  function syncFromCmyk(c, m, y, k) {
    const rgb = cmykToRgb(c, m, y, k);
    setRgbR(String(rgb.r)); setRgbG(String(rgb.g)); setRgbB(String(rgb.b));
    setHex(rgbToHex(rgb.r, rgb.g, rgb.b));
  }
  function onHex(e) {
    const v = e.target.value.replace(/[^0-9a-fA-F]/g,"").toUpperCase().slice(0,6);
    setHex(v);
    const rgb = hexToRgb(v);
    if (!rgb) return;
    setRgbR(String(rgb.r)); setRgbG(String(rgb.g)); setRgbB(String(rgb.b));
    syncFromRgb(rgb.r, rgb.g, rgb.b);
  }
  function onRgbR(e) { const n=Math.min(255,Math.max(0,parseInt(e.target.value)||0)); setRgbR(String(n)); syncFromRgb(n, parseInt(rgbG)||0, parseInt(rgbB)||0); }
  function onRgbG(e) { const n=Math.min(255,Math.max(0,parseInt(e.target.value)||0)); setRgbG(String(n)); syncFromRgb(parseInt(rgbR)||0, n, parseInt(rgbB)||0); }
  function onRgbB(e) { const n=Math.min(255,Math.max(0,parseInt(e.target.value)||0)); setRgbB(String(n)); syncFromRgb(parseInt(rgbR)||0, parseInt(rgbG)||0, n); }
  function onCmykC(e) { const n=Math.min(100,Math.max(0,parseInt(e.target.value)||0)); setCmykC(String(n)); syncFromCmyk(n, parseInt(cmykM)||0, parseInt(cmykY)||0, parseInt(cmykK)||0); }
  function onCmykM(e) { const n=Math.min(100,Math.max(0,parseInt(e.target.value)||0)); setCmykM(String(n)); syncFromCmyk(parseInt(cmykC)||0, n, parseInt(cmykY)||0, parseInt(cmykK)||0); }
  function onCmykY(e) { const n=Math.min(100,Math.max(0,parseInt(e.target.value)||0)); setCmykY(String(n)); syncFromCmyk(parseInt(cmykC)||0, parseInt(cmykM)||0, n, parseInt(cmykK)||0); }
  function onCmykK(e) { const n=Math.min(100,Math.max(0,parseInt(e.target.value)||0)); setCmykK(String(n)); syncFromCmyk(parseInt(cmykC)||0, parseInt(cmykM)||0, parseInt(cmykY)||0, n); }

  const swatchColor = /^[0-9a-fA-F]{6}$/.test(hex) ? "#"+hex : null;

  // ── Shared JSX sections (same state, reused in card + overlay) ──
  const winkelSection = (
    <div className="dash-calc-section">
      <p className="dash-label">Winkel / Prozent</p>
      <div className="dash-row">
        <div className="dash-input-group">
          <input type="number" value={winkel} onChange={onWinkel} placeholder="0" className="dash-input" />
          <span className="dash-unit">°</span>
        </div>
        <span className="dash-eq">=</span>
        <div className="dash-input-group">
          <input type="number" value={prozent} onChange={onProzent} placeholder="0" className="dash-input" />
          <span className="dash-unit">%</span>
        </div>
      </div>
    </div>
  );

  const massstabSection = (
    <div className="dash-calc-section" style={{ marginTop: 10 }}>
      <p className="dash-label">Maßstab</p>
      <select value={scale} onChange={onScale} className="dash-select">
        <option value="50">1:50</option>
        <option value="100">1:100</option>
        <option value="200">1:200</option>
        <option value="250">1:250</option>
        <option value="500">1:500</option>
      </select>
      <div className="dash-scale-row">
        <div className="dash-scale-side">
          <span className="dash-scale-label">Wirklichkeit</span>
          <div className="dash-input-group">
            <input type="number" value={realVal} onChange={onRealVal} placeholder="0" className="dash-input" />
            <select value={realUnit} onChange={onRealUnit} className="dash-unit-select">
              {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <button className="dash-swap-btn" onClick={swapScale} title="Seiten tauschen">⇄</button>
        <div className="dash-scale-side">
          <span className="dash-scale-label">Plan</span>
          <div className="dash-input-group">
            <input type="number" value={drawVal} onChange={onDrawVal} placeholder="0" className="dash-input" />
            <select value={drawUnit} onChange={onDrawUnit} className="dash-unit-select">
              {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const farbeSection = (
    <div className="dash-calc-section" style={{ marginTop: 10 }}>
      <p className="dash-label">Farbe</p>
      <div className="dash-row">
        <div className="dash-input-group" style={{ flex: 1 }}>
          <span className="dash-unit" style={{ paddingLeft: 8 }}>#</span>
          <input
            type="text" value={hex} onChange={onHex} placeholder="FF5500"
            className="dash-input" maxLength={6}
            style={{ fontFamily:"monospace", textTransform:"uppercase" }}
          />
        </div>
        <div className="dash-color-swatch" style={{ background: swatchColor ?? "#ececec" }} />
      </div>
      <div className="dash-color-row">
        {[["R", rgbR, onRgbR], ["G", rgbG, onRgbG], ["B", rgbB, onRgbB]].map(([l,v,fn]) => (
          <div key={l} className="dash-input-group">
            <span className="dash-color-label">{l}</span>
            <input type="number" value={v} onChange={fn} placeholder="0" className="dash-input dash-input--color" min="0" max="255" />
          </div>
        ))}
      </div>
      <div className="dash-color-row">
        {[["C", cmykC, onCmykC], ["M", cmykM, onCmykM]].map(([l,v,fn]) => (
          <div key={l} className="dash-input-group">
            <span className="dash-color-label">{l}</span>
            <input type="number" value={v} onChange={fn} placeholder="0" className="dash-input dash-input--color" min="0" max="100" />
            <span className="dash-unit">%</span>
          </div>
        ))}
      </div>
      <div className="dash-color-row">
        {[["Y", cmykY, onCmykY], ["K", cmykK, onCmykK]].map(([l,v,fn]) => (
          <div key={l} className="dash-input-group">
            <span className="dash-color-label">{l}</span>
            <input type="number" value={v} onChange={fn} placeholder="0" className="dash-input dash-input--color" min="0" max="100" />
            <span className="dash-unit">%</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* ── Dashboard card ── */}
      <div className="dash-box din-box" onClick={() => setOpen(true)}>
        <h3 className="dash-box__title">Umrechner</h3>
        {/* stopPropagation so typing in inputs doesn't open the overlay */}
        <div onClick={e => e.stopPropagation()}>
          {winkelSection}
          {massstabSection}
          {farbeSection}
        </div>
        <span className="din-expand-hint">Klicken für Detailansicht</span>
      </div>

      {/* ── Overlay ── */}
      {open && (
        <div className="din-overlay" onClick={() => setOpen(false)}>
          <div className="din-overlay__panel umr-overlay__panel" onClick={e => e.stopPropagation()}>
            <button className="din-overlay__close" onClick={() => setOpen(false)}>×</button>
            <h2 className="din-overlay__title">Umrechner</h2>
            <div className="umr-overlay__body">
              <div className="umr-overlay__col">
                {winkelSection}
                {massstabSection}
              </div>
              <div className="umr-overlay__col">
                {farbeSection}
                {swatchColor && (
                  <div className="umr-big-swatch" style={{ background: swatchColor }}>
                    <span className="umr-big-swatch__label">#{hex}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Umrechner;
