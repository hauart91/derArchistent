import { useState, useMemo } from "react";
import Layout from "../components/Layout";

const COMPETITIONS = [
  // ── Realisierungswettbewerbe ──────────────────────────
  {
    id: 1,
    title: "Abfallsammelzentrum Mittleres Rheintal, Götzis",
    veranstalter: "Gemeindeverband ASZ Mittleres Rheintal",
    deadline: "2026-07-01",
    land: "AT",
    typ: "Realisierungswettbewerb",
    gebaeude: "Infrastruktur",
    ort: "Götzis, Vorarlberg",
    preisgeld: "€ 36.360",
    offen: false,
    beschreibung: "Geladener, einstufiger Realisierungswettbewerb (unterschwellig) für den Neubau eines Abfallsammelzentrums. Bearbeitungshonorar für alle Teilnehmer.",
    url: "https://www.architekturwettbewerb.at/competition/abfallsammelzentrum-mittleres-rheintal-goetzis/14042",
  },
  {
    id: 2,
    title: "Kinderkrippe & Kindergarten Brixlegg",
    veranstalter: "Gemeinde Brixlegg",
    deadline: "2026-07-06",
    land: "AT",
    typ: "Realisierungswettbewerb",
    gebaeude: "Bildung & Kita",
    ort: "Brixlegg, Tirol",
    preisgeld: "—",
    offen: false,
    beschreibung: "Geladener Realisierungswettbewerb für den Neubau einer dreigruppigen Kinderkrippe und eines sechsgruppigen Kindergartens.",
    url: "https://www.baunetz.de/wettbewerbe/Neubau_der_dreigruppigen_Kinderkrippe_und_des_sechsgruppigen_Kindergartens_10332663.html",
  },
  {
    id: 3,
    title: "Wohnbau Salzburg Richard-Kürth-Straße",
    veranstalter: "Russegger Bau GmbH",
    deadline: "2026-07-09",
    land: "AT",
    typ: "Realisierungswettbewerb",
    gebaeude: "Wohnbau",
    ort: "Salzburg",
    preisgeld: "—",
    offen: false,
    beschreibung: "Regional beschränkter, offener Realisierungswettbewerb für Wohnbebauung an der Richard-Kürth-Straße in Salzburg.",
    url: "https://www.architekturwettbewerb.at/competition/wohnbau-salzburg-richard-kuerth-strasse/14037",
  },
  {
    id: 4,
    title: "Salzburg Stadt Glangärten – Wohnbau",
    veranstalter: "Kuglhof Immobilien / Wohnbau-Genossenschaft Bergland",
    deadline: "2026-07-16",
    land: "AT",
    typ: "Realisierungswettbewerb",
    gebaeude: "Wohnbau",
    ort: "Salzburg Stadt",
    preisgeld: "—",
    offen: true,
    beschreibung: "Offener, einstufiger Realisierungswettbewerb für Wohnbebauung im Bereich Glangärten im Salzburger Stadtzentrum.",
    url: "https://www.architekturwettbewerb.at/competition/salzburg-stadt-glangaerten-architektur/13837",
  },
  {
    id: 5,
    title: "Salzburg Stadt Glangärten – Freiraum & Landschaft",
    veranstalter: "Kuglhof Immobilien / Wohnbau-Genossenschaft Bergland",
    deadline: "2026-07-16",
    land: "AT",
    typ: "Realisierungswettbewerb",
    gebaeude: "Freiraum & Landschaft",
    ort: "Salzburg Stadt",
    preisgeld: "—",
    offen: true,
    beschreibung: "Offener, einstufiger Realisierungswettbewerb Freiraumplanung/Landschaftsarchitektur, Glangärten Parkring.",
    url: "https://www.architekturwettbewerb.at/competition/salzburg-stadt-glangaerten-parkring-freiraumplanung-landschaftsarchitektur/13839",
  },
  {
    id: 6,
    title: "Primarschule Lüchingen",
    veranstalter: "Primarschulgemeinde Lüchingen",
    deadline: "2026-07-01",
    land: "CH",
    typ: "Realisierungswettbewerb",
    gebaeude: "Bildung & Kita",
    ort: "Lüchingen, St. Gallen",
    preisgeld: "—",
    offen: false,
    beschreibung: "Zweistufiges Auswahlverfahren für den Neubau der Primarschule Lüchingen. Bewerbung bis 1. Juli 2026, Projektwettbewerb in der zweiten Stufe.",
    url: "https://konkurado.ch/de/wettbewerbe",
  },
  {
    id: 7,
    title: "Homann-Gelände Dissen a.T.W.",
    veranstalter: "Stadt Dissen am Teutoburger Wald",
    deadline: "2026-06-17",
    land: "DE",
    typ: "Realisierungswettbewerb",
    gebaeude: "Städtebau",
    ort: "Dissen, Niedersachsen",
    preisgeld: "—",
    offen: false,
    beschreibung: "Nicht offener, einstufiger städtebaulicher Realisierungswettbewerb für das ehemalige Homann-Gelände. Jurysitzung am 17. Juni 2026.",
    url: "https://www.wettbewerbe-aktuell.de/ausschreibung/homann-gelaende-dissen-atw-399734",
  },
  {
    id: 8,
    title: "Wohnbau Innsbruck – Kranebitter Allee 214",
    veranstalter: "Innsbrucker Immobilien GmbH / Pichler Immobilien GmbH",
    deadline: "2026-08-26",
    land: "AT",
    typ: "Realisierungswettbewerb",
    gebaeude: "Wohnbau",
    ort: "Innsbruck, Tirol",
    preisgeld: "€ 147.500",
    offen: true,
    beschreibung: "Offener, einstufiger Realisierungswettbewerb (oberschwellig) für den Neubau zweier Wohnanlagen. Hohes Bearbeitungshonorar für alle Teilnehmer.",
    url: "https://www.architekturwettbewerb.at/competition/neubau-wohnanlagen-kranebitter-allee-214-innsbruck/14220",
  },
  {
    id: 9,
    title: "Saalsporthalle Zürich (Renovation & Erweiterung)",
    veranstalter: "Stadt Zürich, Amt für Hochbauten",
    deadline: "2026-10-08",
    land: "CH",
    typ: "Realisierungswettbewerb",
    gebaeude: "Sport & Freizeit",
    ort: "Zürich",
    preisgeld: "—",
    offen: true,
    beschreibung: "Offenes, einstufiges Projektwettbewerb SIA 142 für die Renovation und Erweiterung der Saalsporthalle Zürich. Anonymes Verfahren.",
    url: "https://konkurado.ch/de/wettbewerbe",
  },
  {
    id: 10,
    title: "Wohnbau Innsbruck – Philippine-Welser-Straße, Amras",
    veranstalter: "Neue Heimat Tirol",
    deadline: "2026-09-03",
    land: "AT",
    typ: "Realisierungswettbewerb",
    gebaeude: "Wohnbau",
    ort: "Innsbruck, Tirol",
    preisgeld: "€ 89.000",
    offen: false,
    beschreibung: "Geladener, einstufiger Realisierungswettbewerb für ausgewählte Büros. Neubau Wohnanlage Philippine-Welser-Straße in Amras.",
    url: "https://www.architekturwettbewerb.at/competition/neubau-der-wohnbebauung-philippine-welser-strasse-in-amras-innsbruck/14235",
  },
  {
    id: 11,
    title: "Volksschule & Mittelschule Höchst, Vorarlberg",
    veranstalter: "Gemeinde Höchst",
    deadline: "2026-09-04",
    land: "AT",
    typ: "Realisierungswettbewerb",
    gebaeude: "Bildung & Kita",
    ort: "Höchst, Vorarlberg",
    preisgeld: "€ 70.375",
    offen: true,
    beschreibung: "Offener, einstufiger Realisierungswettbewerb (oberschwellig). Neubau Ganztages-Volksschule und Mittelschule inkl. Turnsaal in Kirchdorf/Höchst.",
    url: "https://www.architekturwettbewerb.at/competition/ganztagsbetreuung-mittelschule-volksschule-kirchdorf-hoechst/14191",
  },
  {
    id: 12,
    title: "Studentisches Wohnen Biel",
    veranstalter: "Privater Bauträger (Daniele de Falcis)",
    deadline: "2026-09-18",
    land: "CH",
    typ: "Realisierungswettbewerb",
    gebaeude: "Wohnbau",
    ort: "Biel, Bern",
    preisgeld: "—",
    offen: true,
    beschreibung: "Offener, einstufiger Projektwettbewerb SIA 142 für studentisches Wohnen in Biel. Anonymes Verfahren.",
    url: "https://konkurado.ch/de/wettbewerbe",
  },
  {
    id: 13,
    title: "Gesundheitszentrum für das Alter Oberstrass, Zürich",
    veranstalter: "Stadt Zürich, Gesundheits- und Umweltdepartement",
    deadline: "2026-11-13",
    land: "CH",
    typ: "Realisierungswettbewerb",
    gebaeude: "Gesundheit & Soziales",
    ort: "Zürich",
    preisgeld: "—",
    offen: true,
    beschreibung: "Offener, einstufiger anonymer Projektwettbewerb SIA 142. Neubau eines Gesundheitszentrums für das Alter im Quartier Oberstrass. Anmeldung bis 5. Juni 2026.",
    url: "https://konkurado.ch/de/gfa-oberstrass",
  },
  // ── Preise & Awards ──────────────────────────────────
  {
    id: 14,
    title: "Architekturpreis Land Salzburg 2026",
    veranstalter: "Land Salzburg / Initiative Architektur",
    deadline: "2026-06-09",
    land: "AT",
    typ: "Preis",
    gebaeude: "—",
    ort: "Salzburg",
    preisgeld: "€ 10.000",
    offen: true,
    beschreibung: "Auszeichnung für herausragende Bauten im Land Salzburg. Jurysitzung 25.–26. Juni, Ausstellung im Architekturhaus Salzburg ab Oktober 2026.",
    url: "https://initiativearchitektur.at/architekturpreise/architekturpreis-land-salzburg-2026",
  },
  {
    id: 15,
    title: "Österreichischer Staatspreis Architektur und Nachhaltigkeit 2026",
    veranstalter: "BMWET – Bundesministerium",
    deadline: "2026-06-05",
    land: "AT",
    typ: "Preis",
    gebaeude: "—",
    ort: "Österreich",
    preisgeld: "—",
    offen: true,
    beschreibung: "Auszeichnung für nachhaltiges Bauen und Sanieren. Gebäude fertiggestellt 2023–April 2026, Fokus Kreislaufwirtschaft. Keine Gebäude mit fossiler Heizung.",
    url: "https://www.klimaaktiv.at/staatspreis-2026",
  },
  {
    id: 16,
    title: "BDA Architekturpreis Essen 2026",
    veranstalter: "BDA Essen",
    deadline: "2026-06-30",
    land: "DE",
    typ: "Preis",
    gebaeude: "—",
    ort: "Essen, NRW",
    preisgeld: "—",
    offen: true,
    beschreibung: "Regionaler Architekturpreis des BDA Essen für herausragende Bauten im Stadtgebiet. Einreichung bis 30. Juni 2026.",
    url: "https://www.baunetz.de/wettbewerbe/",
  },
  {
    id: 17,
    title: "Großer BDA-Preis 2026",
    veranstalter: "Bund Deutscher Architektinnen und Architekten (BDA)",
    deadline: "2026-09-24",
    land: "DE",
    typ: "Preis",
    gebaeude: "—",
    ort: "Hannover",
    preisgeld: "€ 5.000",
    offen: false,
    beschreibung: "Höchste Auszeichnung des BDA, alle drei Jahre vergeben. Goldmedaille + Dotierung. Verleihung am 24. September in Hannover.",
    url: "https://www.bda-bund.de/",
  },
  {
    id: 18,
    title: "Architecture MasterPrize 2026",
    veranstalter: "AMP – Architecture MasterPrize",
    deadline: "2026-08-31",
    land: "INT",
    typ: "Preis",
    gebaeude: "—",
    ort: "International",
    preisgeld: "—",
    offen: true,
    beschreibung: "Internationaler Architekturpreis. Kategorien: Architektur, Innenarchitektur, Landschaftsarchitektur. Teilnahme aus dem DACH-Raum möglich.",
    url: "https://www.baunetz.de/wettbewerbe/Architecture_MasterPrize_2026_10281393.html",
  },
  // ── Ideenwettbewerbe & Student ────────────────────────
  {
    id: 19,
    title: "150 Jahre Schweizer Wettbewerbsordnung",
    veranstalter: "Competition Laboratory / SIA",
    deadline: "2026-06-09",
    land: "CH",
    typ: "Ideenwettbewerb",
    gebaeude: "—",
    ort: "Schweiz",
    preisgeld: "—",
    offen: true,
    beschreibung: "Ideen für die Zukunft von Planungswettbewerben, zum 150. Jubiläum der Schweizer Wettbewerbsordnung 2027.",
    url: "https://konkurado.ch/de",
  },
  {
    id: 20,
    title: "Pavilion Atlas 2026",
    veranstalter: "Architecture Competitions / Buildner",
    deadline: "2026-09-16",
    land: "INT",
    typ: "Ideenwettbewerb",
    gebaeude: "Pavillon",
    ort: "International",
    preisgeld: "€ 20.000",
    offen: true,
    beschreibung: "Internationaler offener Wettbewerb für einen Pavillon. Offen für Architekten, Studierende und Interessierte weltweit.",
    url: "https://architecturecompetitions.com/pavilionatlas/",
  },
  {
    id: 21,
    title: "wa award 2026 – Konstruktive Räume",
    veranstalter: "wettbewerbe aktuell",
    deadline: "2026-10-31",
    land: "DE",
    typ: "Studentenwettbewerb",
    gebaeude: "—",
    ort: "DACH",
    preisgeld: "€ 9.000",
    offen: true,
    beschreibung: "Studentenwettbewerb für Architektur- und Ingenieurstudierende im deutschsprachigen Raum. Neue Ansätze in Material- und Fügungsgestaltung.",
    url: "https://www.wettbewerbe-aktuell.de/wa-award",
  },
];

const LAND_LABELS = { AT: "Österreich", DE: "Deutschland", CH: "Schweiz", INT: "International" };
const LAND_COLORS = { AT: "#e85500", DE: "#1a1a1a", CH: "#cc0000", INT: "#4a6fa5" };

const TYPEN = ["Alle", "Realisierungswettbewerb", "Ideenwettbewerb", "Preis", "Studentenwettbewerb"];
const GEBAEUDEARTEN = ["Alle", "Wohnbau", "Bildung & Kita", "Gesundheit & Soziales", "Sport & Freizeit", "Freiraum & Landschaft", "Städtebau", "Infrastruktur", "Pavillon"];
const LAENDER = ["Alle", "DE", "AT", "CH", "INT"];

function daysLeft(deadline) {
  const today = new Date(); today.setHours(0,0,0,0);
  return Math.ceil((new Date(deadline) - today) / 86400000);
}

function DeadlineBadge({ deadline }) {
  const d = daysLeft(deadline);
  if (d < 0)  return <span className="wettb-badge wettb-badge--past">Abgelaufen</span>;
  if (d === 0) return <span className="wettb-badge wettb-badge--urgent">Heute</span>;
  if (d <= 7)  return <span className="wettb-badge wettb-badge--urgent">Noch {d} Tag{d !== 1 ? "e" : ""}</span>;
  if (d <= 30) return <span className="wettb-badge wettb-badge--soon">Noch {d} Tage</span>;
  return <span className="wettb-badge wettb-badge--open">Noch {d} Tage</span>;
}

function formatDate(iso) {
  const [y, m, day] = iso.split("-");
  return `${day}.${m}.${y}`;
}

function Wettbewerbe() {
  const [search, setSearch]               = useState("");
  const [filterLand, setFilterLand]       = useState("Alle");
  const [filterTyp, setFilterTyp]         = useState("Alle");
  const [filterGebaeude, setFilterGebaeude] = useState("Alle");
  const [filterStatus, setFilterStatus]   = useState("Alle");
  const [sortBy, setSortBy]               = useState("deadline");

  const filtered = useMemo(() => {
    let list = COMPETITIONS.filter(c => {
      const q = search.toLowerCase();
      if (q && ![c.title, c.veranstalter, c.ort, c.beschreibung].some(s => s.toLowerCase().includes(q))) return false;
      if (filterLand     !== "Alle" && c.land     !== filterLand)     return false;
      if (filterTyp      !== "Alle" && c.typ      !== filterTyp)      return false;
      if (filterGebaeude !== "Alle" && c.gebaeude !== filterGebaeude) return false;
      if (filterStatus === "Offen"      && daysLeft(c.deadline) < 0)  return false;
      if (filterStatus === "Abgelaufen" && daysLeft(c.deadline) >= 0) return false;
      return true;
    });

    list.sort((a, b) => {
      if (sortBy === "deadline") return new Date(a.deadline) - new Date(b.deadline);
      if (sortBy === "land")     return a.land.localeCompare(b.land);
      if (sortBy === "preisgeld") {
        const pa = parseInt(a.preisgeld.replace(/\D/g,"")) || 0;
        const pb = parseInt(b.preisgeld.replace(/\D/g,"")) || 0;
        return pb - pa;
      }
      return 0;
    });
    return list;
  }, [search, filterLand, filterTyp, filterStatus, sortBy]);

  const offen = COMPETITIONS.filter(c => daysLeft(c.deadline) >= 0).length;

  return (
    <Layout>
      <div className="wettb-page">

        {/* Header */}
        <div className="wettb-header">
          <div>
            <h1 className="wettb-title">Architekturwettbewerbe</h1>
            <p className="wettb-subtitle">Aktuelle Wettbewerbe und Ausschreibungen im deutschsprachigen Raum</p>
          </div>
          <div className="wettb-stats">
            <div className="wettb-stat">
              <span className="wettb-stat__num">{COMPETITIONS.length}</span>
              <span className="wettb-stat__label">Gesamt</span>
            </div>
            <div className="wettb-stat">
              <span className="wettb-stat__num wettb-stat__num--orange">{offen}</span>
              <span className="wettb-stat__label">Offen</span>
            </div>
            <div className="wettb-stat">
              <span className="wettb-stat__num">{filtered.length}</span>
              <span className="wettb-stat__label">Gefiltert</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="wettb-filters">
          <div className="wettb-search">
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke="#aaa" strokeWidth="1.5"/>
              <line x1="9.5" y1="9.5" x2="13.5" y2="13.5" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text" placeholder="Suchen..." value={search}
              onChange={e => setSearch(e.target.value)} className="wettb-search__input"
            />
          </div>
          <select value={filterLand} onChange={e => setFilterLand(e.target.value)} className="wettb-select">
            <option value="Alle">Alle Länder</option>
            {LAENDER.filter(l => l !== "Alle").map(l => <option key={l} value={l}>{LAND_LABELS[l]}</option>)}
          </select>
          <select value={filterTyp} onChange={e => setFilterTyp(e.target.value)} className="wettb-select">
            {TYPEN.map(t => <option key={t} value={t}>{t === "Alle" ? "Alle Typen" : t}</option>)}
          </select>
          <select value={filterGebaeude} onChange={e => setFilterGebaeude(e.target.value)} className="wettb-select">
            {GEBAEUDEARTEN.map(g => <option key={g} value={g}>{g === "Alle" ? "Alle Gebäudearten" : g}</option>)}
          </select>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="wettb-select">
            <option value="Alle">Alle Status</option>
            <option value="Offen">Nur offene</option>
            <option value="Abgelaufen">Abgelaufen</option>
          </select>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="wettb-select wettb-select--sort">
            <option value="deadline">↑ Deadline</option>
            <option value="preisgeld">↑ Preisgeld</option>
            <option value="land">↑ Land</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="wettb-empty">Keine Wettbewerbe gefunden.</p>
        ) : (
          <div className="wettb-grid">
            {filtered.map(c => (
              <div key={c.id} className={"wettb-card" + (daysLeft(c.deadline) < 0 ? " wettb-card--past" : "")}>
                <div className="wettb-card__top">
                  <div className="wettb-card__tags">
                    <span className="wettb-tag" style={{ background: LAND_COLORS[c.land] + "18", color: LAND_COLORS[c.land], borderColor: LAND_COLORS[c.land] + "40" }}>
                      {LAND_LABELS[c.land]}
                    </span>
                    <span className="wettb-tag wettb-tag--typ">{c.typ}</span>
                    {c.gebaeude !== "—" && <span className="wettb-tag wettb-tag--gebaeude">{c.gebaeude}</span>}
                    {!c.offen && <span className="wettb-tag wettb-tag--geladen">Geladen</span>}
                  </div>
                  <DeadlineBadge deadline={c.deadline} />
                </div>

                <h3 className="wettb-card__title">{c.title}</h3>

                <div className="wettb-card__meta">
                  <span className="wettb-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    {c.veranstalter}
                  </span>
                  <span className="wettb-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {c.ort}
                  </span>
                  {c.preisgeld !== "—" && (
                    <span className="wettb-meta-item wettb-meta-item--prize">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                      {c.preisgeld}
                    </span>
                  )}
                </div>

                <p className="wettb-card__desc">{c.beschreibung}</p>

                <div className="wettb-card__footer">
                  <span className="wettb-deadline">
                    Einreichung bis {formatDate(c.deadline)}
                  </span>
                  <a href={c.url} target="_blank" rel="noreferrer" className="wettb-link">
                    Zur Ausschreibung →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="wettb-source">
          Quellen: wettbewerbe-aktuell.de · architekturwettbewerb.at · baunetz.de · konkurado.ch · Stand: Juni 2026
        </p>
      </div>
    </Layout>
  );
}

export default Wettbewerbe;
