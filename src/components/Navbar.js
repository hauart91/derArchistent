import { NavLink } from "react-router-dom";

function NavItem({ to, label }) {
  return (
    <NavLink to={to} data-text={label}>
      {label}
    </NavLink>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <NavItem to="/" label="Home" />
      <NavItem to="/dashboard" label="Dashboard" />
      <NavItem to="/regelwerke" label="Regelwerke" />
      <NavItem to="/details" label="Details" />
      <NavItem to="/rechner" label="Rechner" />
      <NavItem to="/lexikon" label="Lexikon" />
      <NavItem to="/wettbewerbe" label="Wettbewerbe" />
      <NavItem to="/kontakt" label="Kontakt" />
    </nav>
  );
}

export default Navbar;
