import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const navLinks = ['About', 'Projects', 'Contact']

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll listener for navbar background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

          <ul style={{ 
            ...styles.navLinks, 
            ...(menuOpen ? styles.navLinksOpen : {}) 
          }}>
            {navLinks.map((link, i) => (
              <li key={link} style={{ animationDelay: `${i * 0.1}s` }} className={menuOpen ? "fade-in-nav" : ""}>
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
            <li className="mobile-only">
               <a href="#contact" style={styles.ctaMobile}>Hire Me</a>
            </li>
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
        <div style={styles.footerLine}></div>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} Godwin Inalegwu Ayuba. 
        </p>
      </footer>

      <style>{`
        :root {
          --accent: #6366f1;
          --text: #111827;
          --muted: #6b7280;
          --border: rgba(0,0,0,0.08);
          --max-w: 1200px;
        }

        /* Dark mode support if body has .dark class */
        @media (prefers-color-scheme: dark) {
          :root {
            --text: #f3f4f6;
            --muted: #9ca3af;
            --border: rgba(255,255,255,0.1);
          }
          body { background: #0a0a0c; }
        }

        html { scroll-behavior: smooth; }
        
        .nav-hover-effect {
          position: relative;
        }
        .nav-hover-effect::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-hover-effect:hover::after {
          width: 100%;
        }

        @keyframes fadeInNav {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-nav { animation: fadeInNav 0.4s ease forwards; }

        @media (max-width: 768px) {
          .mobile-only { display: block !important; width: 100%; }
          button { display: flex !important; }
          ul { 
            display: none; 
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

const styles = {
  appWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '0.5rem 0',
  },
  navScrolled: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(15px)',
    borderBottom: '1px solid var(--border)',
    padding: '0.2rem 0',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
  },
  navInner: {
    maxWidth: 'var(--max-w)',
    margin: '0 auto',
    padding: '0 2rem',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 900,
    color: 'var(--text)',
    letterSpacing: '-1px',
    cursor: 'pointer',
  },
  dot: { color: 'var(--accent)' },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLinksOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100vh',
    background: 'var(--surface, #fff)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  navLink: {
    color: 'var(--text)',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  burger: {
    display: 'none',
    flexDirection: 'column',
    gap: '6px',
    background: 'rgba(99, 102, 241, 0.1)',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 1001,
  },
  burgerLine: {
    display: 'block',
    width: '24px',
    height: '2px',
    background: 'var(--accent)',
    borderRadius: '2px',
    transition: 'all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  },
  burgerLine1Open: { transform: 'translateY(8px) rotate(45deg)' },
  burgerLine2Open: { opacity: 0, transform: 'translateX(20px)' },
  burgerLine3Open: { transform: 'translateY(-8px) rotate(-45deg)' },
  main: {
    flex: 1,
  },
  footer: {
    padding: '4rem 2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  footerLine: {
    width: '100%',
    maxWidth: 'var(--max-w)',
    height: '1px',
    background: 'linear-gradient(to right, transparent, var(--border), transparent)',
  },
  footerText: {
    color: 'var(--text)',
    fontWeight: 600,
    fontSize: '0.95rem',
  },
  footerSubText: {
    color: 'var(--muted)',
    fontWeight: 400,
    display: 'block',
    marginTop: '0.5rem',
  },
}