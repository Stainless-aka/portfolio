import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'React',        color: '#61DAFB', category: 'Frontend' },
  { name: 'JavaScript',   color: '#C9A84C', category: 'Language'  },
  { name: 'HTML & CSS',   color: '#C06A3B', category: 'Frontend'  },
  { name: 'Vite',         color: '#8B8FE8', category: 'Tooling'   },
  { name: 'Git',          color: '#B85C44', category: 'Tooling'   },
  { name: 'REST APIs',    color: '#5E9E80', category: 'Backend'   },
  { name: 'Node.js',      color: '#5E9E80', category: 'Backend'   },
];

const GOLD   = '#B8976A';
const GOLD_L = '#D4B483';
const CREAM  = '#FAF7F2';
const INK    = '#1A1612';
const MUTED  = '#6B6259';
const RULE   = 'rgba(184,151,106,0.25)';

export default function About() {
  const cardRef  = useRef(null);
  const badgeRef = useRef(null);

  /* subtle parallax tilt on skills card */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 8;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 8;
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    const onLeave = () => { el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <section id="about" style={s.section}>

      {/* ── decorative corner rule ── */}
      <div style={s.cornerTL} aria-hidden="true" />
      <div style={s.cornerBR} aria-hidden="true" />

      <div style={s.inner}>

        {/* ── LEFT: text column ── */}
        <div style={s.textCol}>

          <div style={s.eyebrowRow}>
            <span style={s.rule} />
            <span style={s.eyebrow}>Behind the Code</span>
            <span style={s.rule} />
          </div>

          <h2 style={s.heading}>
            Passionate about{' '}
            <em style={s.italic}>Building</em>
            <br />
            <span style={s.headingAccent}>Great Products</span>
          </h2>

          <div style={s.ornament} aria-hidden="true">✦</div>

          <p style={s.body}>
            I specialise in bridging the gap between complex backend logic and
            intuitive frontend design. My goal is to build high-performance web
            applications that blend clean aesthetics with seamless accessibility.
          </p>
          <p style={s.body}>
            I excel at turning ideas into refined, user-focused digital experiences
            that don't just work — they <em>feel</em> right.
          </p>

          <a href="#contact" style={s.cta} className="about-cta">
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginLeft:8}}>
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* ── RIGHT: skills card ── */}
        <div style={s.skillsCol}>
          <div ref={cardRef} style={s.card}>

            <p style={s.cardLabel}>Technical Toolkit</p>
            <div style={s.cardRule} />

            <div style={s.grid}>
              {skills.map((sk, i) => (
                <div
                  key={sk.name}
                  className="sk-chip"
                  style={{
                    ...s.chip,
                    animationDelay: `${i * 70}ms`,
                    '--dot': sk.color,
                  }}
                >
                  <span style={{...s.dot, background: sk.color}} />
                  <span style={s.chipName}>{sk.name}</span>
                  <span style={s.chipCat}>{sk.category}</span>
                </div>
              ))}
            </div>

            {/* card bottom flourish */}
            <div style={s.cardFooter}>
              <span style={s.footerRule} />
              <span style={s.footerGlyph} aria-hidden="true">◈</span>
              <span style={s.footerRule} />
            </div>
          </div>

          {/* floating tag behind card */}
          <div ref={badgeRef} style={s.floatingTag} aria-hidden="true">
            <span style={s.floatingNumber}>7</span>
            <span style={s.floatingLabel}>Core Skills</span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes chipIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1);    }
        }

        .sk-chip {
          transition: background 0.25s ease, border-color 0.25s ease,
                      transform 0.25s ease, box-shadow 0.25s ease;
          animation: chipIn 0.45s ease backwards;
        }
        .sk-chip:hover {
          background: rgba(184,151,106,0.10) !important;
          border-color: var(--dot) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px -8px var(--dot);
        }

        .about-cta {
          transition: background 0.22s ease, color 0.22s ease,
                      transform 0.22s ease, box-shadow 0.22s ease;
        }
        .about-cta:hover {
          background: ${GOLD} !important;
          color: #fff !important;
          transform: translateX(4px);
          box-shadow: 0 8px 24px -8px ${GOLD};
        }
      `}</style>
    </section>
  );
}

/* ─── styles ─────────────────────────────────────────────────── */
const s = {
  section: {
    position: 'relative',
    padding: '7rem 3rem',
    maxWidth: 1160,
    margin: '0 auto',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    background: CREAM,
    borderRadius: '2px',
    overflow: 'hidden',
  },

  /* decorative corner marks */
  cornerTL: {
    position: 'absolute', top: 28, left: 28,
    width: 40, height: 40,
    borderTop: `1.5px solid ${GOLD}`,
    borderLeft: `1.5px solid ${GOLD}`,
  },
  cornerBR: {
    position: 'absolute', bottom: 28, right: 28,
    width: 40, height: 40,
    borderBottom: `1.5px solid ${GOLD}`,
    borderRight: `1.5px solid ${GOLD}`,
  },

  inner: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '5rem',
    alignItems: 'center',
  },

  /* ── text column ── */
  textCol: {
    animation: 'fadeUp 0.7s ease backwards',
  },
  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  rule: {
    flex: 1,
    height: '1px',
    background: GOLD,
    opacity: 0.55,
    display: 'block',
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: '0.72rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: GOLD,
    whiteSpace: 'nowrap',
  },

  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
    fontWeight: 700,
    lineHeight: 1.08,
    color: INK,
    letterSpacing: '-0.01em',
    marginBottom: '0.5rem',
  },
  italic: {
    fontStyle: 'italic',
    fontWeight: 500,
    color: MUTED,
  },
  headingAccent: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
    background: `linear-gradient(120deg, ${GOLD}, ${GOLD_L} 60%, #C9A84C)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '0.01em',
  },

  ornament: {
    display: 'block',
    color: GOLD,
    fontSize: '0.9rem',
    letterSpacing: '0.4em',
    margin: '1.6rem 0',
    opacity: 0.7,
  },

  body: {
    fontFamily: "'DM Sans', sans-serif",
    color: MUTED,
    fontSize: '1.05rem',
    lineHeight: 1.8,
    marginBottom: '1.2rem',
    fontWeight: 300,
    maxWidth: 420,
  },

  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: '1rem',
    padding: '0.7rem 1.6rem',
    border: `1.5px solid ${GOLD}`,
    borderRadius: '2px',
    color: GOLD,
    fontSize: '0.85rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },

  /* ── skills column ── */
  skillsCol: {
    position: 'relative',
  },

  card: {
    background: '#fff',
    border: `1px solid ${RULE}`,
    borderRadius: '4px',
    padding: '2.2rem 2rem',
    boxShadow: `0 2px 0 0 ${GOLD}30, 0 24px 64px -16px rgba(26,22,18,0.12)`,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    willChange: 'transform',
    animation: 'fadeUp 0.8s 0.15s ease backwards',
  },

  cardLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: '0.68rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: GOLD,
    marginBottom: '0.8rem',
  },
  cardRule: {
    height: '1px',
    background: `linear-gradient(90deg, ${GOLD}60, transparent)`,
    marginBottom: '1.6rem',
  },

  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
  },

  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.55rem',
    padding: '0.55rem 1rem',
    background: `${CREAM}`,
    border: `1px solid rgba(184,151,106,0.2)`,
    borderRadius: '2px',
    cursor: 'default',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    flexShrink: 0,
    boxShadow: '0 0 6px currentColor',
  },
  chipName: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.88rem',
    fontWeight: 500,
    color: INK,
    letterSpacing: '0.01em',
  },
  chipCat: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.68rem',
    fontWeight: 300,
    color: MUTED,
    letterSpacing: '0.08em',
    paddingLeft: '0.25rem',
    borderLeft: `1px solid ${RULE}`,
  },

  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginTop: '2rem',
  },
  footerRule: {
    flex: 1,
    height: '1px',
    background: RULE,
    display: 'block',
  },
  footerGlyph: {
    color: GOLD,
    fontSize: '0.7rem',
    opacity: 0.7,
  },

  /* floating badge */
  floatingTag: {
    position: 'absolute',
    bottom: '-1.2rem',
    right: '-1.2rem',
    width: 72,
    height: 72,
    borderRadius: '50%',
    background: INK,
    border: `1.5px solid ${GOLD}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 8px 24px -8px rgba(26,22,18,0.4)`,
    zIndex: 2,
  },
  floatingNumber: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    color: GOLD,
    lineHeight: 1,
  },
  floatingLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.48rem',
    fontWeight: 400,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: GOLD_L,
    marginTop: '2px',
  },
};