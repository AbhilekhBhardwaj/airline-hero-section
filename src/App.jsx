import { useState } from "react";

const MenuIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navItems = ["Start", "Story", "Rates", "Benefits", "FAQ"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb" }}>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            SkyElite
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <section className="hero">
        <video
          className="hero-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-text">
              <p className="hero-label">Private Jets</p>
              <h1 className="hero-h1">
                <span className="hero-h1-line1">Premium.</span>
                <span className="hero-h1-line2">Accessible.</span>
              </h1>
              <p className="hero-sub">Your dedication deserves recognition.</p>
              <div className="hero-ctas">
                <button className="btn-discover">Discover</button>
                <button className="btn-book">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-chevron" />
        </div>
      </section>
    </div>
  );
}

export default App;
