import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">

      <div className="top-bar">

        <div className="logo">
          <img src="/logo.svg" alt="derArchistent" className="logo-img" />
        </div>

        <div className="right-section">

          <div className="search-box">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="4.5" stroke="#aaa" strokeWidth="1.5"/>
              <line x1="9.5" y1="9.5" x2="13.5" y2="13.5" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input type="text" placeholder="Suche..." />
          </div>

          <button className="login-btn">Login</button>

          <span className="language">DE</span>

        </div>

      </div>

      <Navbar />

    </header>
  );
}

export default Header;
