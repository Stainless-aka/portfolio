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
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
  }, [menuOpen])

  return (
    <div style={styles.appWrapper}>
      <nav style={{ 
        ...styles.nav, 
        ...(scrolled ? styles.navScrolled : {}) 
      }}>
        <div style={styles.navInner}>
          <span style={styles.logo}>
            Godwin<span style={styles.dot}>.</span>
          </span>

          {/* Desktop & Mobile Links */}
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`} style={styles.navLinks}>
            {navLinks.map((link, i) => (
              <li key={link} style={{ animationDelay: `${i * 0.1}s` }}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={styles.navLink}
                  className="nav-hover-effect"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="mobile-only-cta">
               <a href="#contact" style={styles.ctaButton} onClick={() => setMenuOpen(false)}>Hire Me</a>
            </li>
          </ul>

          <button
            style={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
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
        <div style={styles.footerLine}></div>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} Godwin Inalegwu Ayuba.
        </p>
      </footer>

      <style>{`
        :root {
          --accent: #6366f1;
          --text: #111827;
          --bg-nav: rgba(255, 255, 255, 0.8);
          --muted: #6b7280;
          --border: rgba(0,0,0,0.08);
          --max-w: 1200px;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --text: #f3f4f6;
            --bg-nav: rgba(10, 10, 12, 0.8);
            --muted: #9ca3af;
            --border: rgba(255,255,255,0.1);
          }
          body { background: #0a0a0c; color: #f3f4f6; }
        }

        html { scroll-behavior: smooth; }

        .nav-hover-effect { position: relative; }
        .nav-hover-effect::after {
          content: ''; position: absolute; width: 0; height: 2px;
          bottom: -4px; left: 0; background-color: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-hover-effect:hover::after { width: 100%; }

        /* Responsive Logic */
        @media (max-width: 768px) {
          .nav-menu {
            display: flex !important;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: var(--bg-nav);
            backdrop-filter: blur(20px);
            padding: 100px 40px;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
          }

          .nav-menu.open {
            right: 0;
          }

          .mobile-only-cta { display: block !important; margin-top: 2rem; }
          
          .burger-btn { display: flex !important; }
        }

        @media (min-width: 769px) {
          .mobile-only-cta { display: none; }
        }
      `}</style>
    </div>
  )
}

const styles = {
  appWrapper: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  navScrolled: {
    background: 'var(--bg-nav)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },
  navInner: {
    maxWidth: 'var(--max-w)',
    margin: '0 auto',
    padding: '0 1.5rem',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '-1px' },
  dot: { color: 'var(--accent)' },
  navLinks: { listStyle: 'none', display: 'flex', gap: '2.5rem', alignItems: 'center' },
  navLink: { color: 'var(--text)', fontSize: '1rem', fontWeight: 500, textDecoration: 'none' },
  ctaButton: {
    background: 'var(--accent)',
    color: 'white',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
  },
  burger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 1001,
  },
  burgerLine: {
    display: 'block', width: '25px', height: '2px',
    background: 'var(--text)', borderRadius: '2px', transition: '0.3s'
  },
  burgerLine1Open: { transform: 'translateY(8px) rotate(45deg)' },
  burgerLine2Open: { opacity: 0 },
  burgerLine3Open: { transform: 'translateY(-8px) rotate(-45deg)' },
  main: { flex: 1, paddingTop: '80px' },
  footer: { padding: '3rem 0', textAlign: 'center' },
  footerLine: { height: '1px', background: 'var(--border)', width: '80%', margin: '0 auto 2rem' },
  footerText: { color: 'var(--muted)', fontSize: '0.9rem' }
}