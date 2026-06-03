import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const navLinks = ['About', 'Projects', 'Contact']

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
  }, [menuOpen])

  return (
    <div style={styles.appWrapper}>
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.navInner}>
          <span style={styles.logo} className="logo-text">
            Godwin<span>.</span>
          </span>

          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`} style={styles.navLinks}>
            {navLinks.map((link, i) => (
              <li key={link} style={{ animationDelay: `${i * 0.05}s` }}>
                <a
                  className="nav-link"
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li style={styles.mobileCta} className="mobile-only-cta">
              <a href="#contact" className="btn btn-accent" onClick={() => setMenuOpen(false)}>
                Hire Me
              </a>
            </li>
          </ul>

          <button className="burger-btn" style={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span style={{ ...styles.burgerLine, ...(menuOpen ? styles.burgerLine1Open : {}) }} />
            <span style={{ ...styles.burgerLine, ...(menuOpen ? styles.burgerLine2Open : {}) }} />
            <span style={{ ...styles.burgerLine, ...(menuOpen ? styles.burgerLine3Open : {}) }} />
          </button>
        </div>
      </nav>

      <main style={styles.main}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerLine} />
        <p style={styles.footerText}>� {new Date().getFullYear()} Godwin Inalegwu Ayuba</p>
      </footer>

      <style>{`
        .nav-menu {
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .burger-btn {
          display: none;
        }

        .mobile-only-cta {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            padding: 110px 2rem;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            background: rgba(7, 16, 20, 0.96);
            backdrop-filter: blur(12px);
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.22);
            z-index: 999;
            opacity: 0;
            transform: translateX(12px);
          }

          .nav-menu.open {
            right: 0;
            opacity: 1;
            transform: translateX(0);
          }

          .burger-btn {
            display: flex;
          }

          .mobile-only-cta {
            display: block;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

const styles = {
  appWrapper: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  nav: {
    position: 'fixed',
    inset: '0 0 auto 0',
    zIndex: 1000,
    padding: '0 1.5rem',
    transition: 'all 0.3s ease',
  },
  navScrolled: {
    background: 'rgba(7, 16, 20, 0.9)',
    backdropFilter: 'blur(6px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
  },
  navInner: {
    maxWidth: 'var(--max-w)',
    margin: '0 auto',
    overflow: 'hidden',
    height: '76px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { color: 'var(--text)', fontWeight: 900, letterSpacing: '-0.06em' },
  navLinks: { listStyle: 'none', display: 'flex', alignItems: 'center', gap: '2rem' },
  mobileCta: { display: 'none' },
  burger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 1001,
  },
  burgerLine: {
    width: '24px',
    height: '2px',
    background: 'var(--text)',
    borderRadius: '999px',
    transition: 'all 0.3s ease',
  },
  burgerLine1Open: { transform: 'translateY(7px) rotate(45deg)' },
  burgerLine2Open: { opacity: 0 },
  burgerLine3Open: { transform: 'translateY(-7px) rotate(-45deg)' },
  main: { flex: 1, paddingTop: '90px' },
  footer: { padding: '2.5rem 1.5rem', textAlign: 'center' },
  footerLine: {
    width: 'clamp(160px, 20vw, 280px)',
    height: '1px',
    margin: '0 auto 1rem',
    background: 'rgba(255,255,255,0.08)',
  },
  footerText: { color: 'var(--muted)', fontSize: '0.95rem' },
}
