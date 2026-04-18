import React, { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const navLinks = ['About', 'Projects', 'Contact']

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <span style={styles.logo}>Portfolio<span style={styles.dot}>.</span></span>
          <ul style={{ ...styles.navLinks, ...(menuOpen ? styles.navLinksOpen : {}) }}>
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            style={styles.burger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
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
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Godwin I. Ayuba - Built with React.
        </p>
      </footer>
    </>
  )
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(15,15,19,0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border)',
  },
  navInner: {
    maxWidth: 'var(--max-w)',
    margin: '0 auto',
    padding: '0 1.5rem',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--text)',
    letterSpacing: '-0.5px',
  },
  dot: {
    color: 'var(--accent)',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  navLinksOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    left: 0,
    right: 0,
    background: 'var(--surface)',
    padding: '1.5rem',
    gap: '1.25rem',
    borderBottom: '1px solid var(--border)',
  },
  navLink: {
    color: 'var(--muted)',
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'color 0.2s',
    textDecoration: 'none',
  },
  burger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  burgerLine: {
    display: 'block',
    width: '22px',
    height: '2px',
    background: 'var(--text)',
    borderRadius: '2px',
    transition: 'transform 0.2s, opacity 0.2s',
  },
  burgerLine1Open: { transform: 'translateY(7px) rotate(45deg)' },
  burgerLine2Open: { opacity: 0 },
  burgerLine3Open: { transform: 'translateY(-7px) rotate(-45deg)' },
  main: {
    maxWidth: 'var(--max-w)',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem 1.5rem',
    borderTop: '1px solid var(--border)',
    marginTop: '4rem',
  },
}
