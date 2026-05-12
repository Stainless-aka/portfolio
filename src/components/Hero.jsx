import React from 'react';

export default function Hero() {
  return (
    <section style={styles.section}>
      {/* Decorative background element */}
      <div style={styles.blob}></div>

      <div style={styles.container}>
        <div className="fade-in" style={styles.badgeContainer}>
          <span style={styles.dot}></span>
          <span style={styles.badgeText}>Available for work</span>
        </div>

        <h1 style={styles.heading}>
          Hi, I'm <span className="gradient-text" style={styles.accent}>Godwin Inalegwu Ayuba</span>
        </h1>

        <p style={styles.sub}>
          Frontend Developer crafting <span style={styles.highlight}>high-performance</span>, 
          clean, and user-friendly web experiences with React.
        </p>

        <div style={styles.actions}>
          <a href="#projects" className="btn-primary" style={styles.btnPrimary}>
            Explore My Work
          </a>
          <a href="#contact" className="btn-outline" style={styles.btnOutline}>
            Get in Touch
          </a>
        </div>
      </div>

      <style>{`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in { animation: fadeInUp 0.8s ease-out forwards; }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }

        .btn-primary {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
          filter: brightness(1.1);
        }

        .btn-outline {
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(5px);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: #6366f1 !important;
          color: #6366f1 !important;
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem',
    textAlign: 'center',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  blob: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '400px',
    height: '400px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
    filter: 'blur(80px)',
    animation: 'morph 8s ease-in-out infinite',
    zIndex: 1,
  },
  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(99, 102, 241, 0.08)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    padding: '0.5rem 1.2rem',
    borderRadius: '100px',
  },
  dot: {
    width: '8px',
    height: '8px',
    background: '#10b981',
    borderRadius: '50%',
    boxShadow: '0 0 10px #10b981',
  },
  badgeText: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#6366f1',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: '-0.05em',
    color: 'var(--text, #111)',
    maxWidth: '900px',
    margin: 0,
  },
  accent: {
    display: 'block',
  },
  sub: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    color: 'var(--muted, #555)',
    maxWidth: '650px',
    lineHeight: 1.6,
    margin: 0,
  },
  highlight: {
    color: 'var(--text, #111)',
    fontWeight: 600,
    borderBottom: '2px solid #6366f1',
  },
  actions: {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  btnPrimary: {
    background: '#6366f1',
    color: '#fff',
    padding: '1rem 2.5rem',
    borderRadius: '0.75rem',
    fontWeight: 700,
    fontSize: '1rem',
    textDecoration: 'none',
  },
  btnOutline: {
    background: 'transparent',
    color: 'var(--text, #111)',
    padding: '1rem 2.5rem',
    borderRadius: '0.75rem',
    fontWeight: 700,
    fontSize: '1rem',
    border: '1px solid var(--border, #ddd)',
    textDecoration: 'none',
  },
};