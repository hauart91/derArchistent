import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard.js";
import Regelwerke from "./pages/Regelwerke";
import Details from "./pages/Details";
import Rechner from "./pages/Rechner";
import Lexikon from "./pages/Lexikon";
import Wettbewerbe from "./pages/Wettbewerbe";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/regelwerke" element={<Regelwerke />} />
        <Route path="/details" element={<Details />} />
        <Route path="/rechner" element={<Rechner />} />
        <Route path="/lexikon" element={<Lexikon />} />
        <Route path="/wettbewerbe" element={<Wettbewerbe />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;