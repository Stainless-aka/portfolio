import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'React',        category: 'Frontend' },
  { name: 'JavaScript',   category: 'Language' },
  { name: 'HTML & CSS',   category: 'Frontend' },
  { name: 'Vite',         category: 'Tooling'  },
  { name: 'Git',          category: 'Tooling'  },
  { name: 'REST APIs',    category: 'Backend'  },
  { name: 'Node.js',      category: 'Backend'  },
];

export default function About() {
  const cardRef = useRef(null);

  /* Subtle parallax tilt on skills card (Only runs on desktop pointer devices) */
  useEffect(() => {
    const el = cardRef.current;
    if (!el || window.matchMedia('(max-width: 768px)').matches) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 8;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 8;
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    
    const onLeave = () => { 
      el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'; 
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    
    return () => { 
      el.removeEventListener('mousemove', onMove); 
      el.removeEventListener('mouseleave', onLeave); 
    };
  }, []);

  return (
    <section id="about" className="about-section" style={s.section}>
      {/* Decorative background element */}
      <div className="about-blob" style={s.blob}></div>

      <div className="about-inner" style={s.inner}>

        {/* ── LEFT: text column ── */}
        <div className="about-text-col" style={s.textCol}>
          <div className="fade-in" style={s.badgeContainer}>
            <span style={s.dot}></span>
            <span style={s.badgeText}>Behind the Code</span>
          </div>

          <h2 style={s.heading}>
            Passionate about <span className="gradient-text" style={s.accent}>Building Great Products</span>
          </h2>

          <p style={s.body}>
            I specialise in bridging the gap between complex backend logic and
            intuitive frontend design. My goal is to build high-performance web
            applications that blend clean aesthetics with seamless accessibility.
          </p>
          <p style={s.body}>
            I excel at turning ideas into refined, user-focused digital experiences
            that don't just work — they <span style={s.highlight}>feel right.</span>
          </p>

          <div style={s.actions}>
            <a href="#contact" className="btn-primary" style={s.btnPrimary}>
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginLeft: 8}}>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── RIGHT: skills card ── */}
        <div className="about-skills-col" style={s.skillsCol}>
          <div ref={cardRef} className="about-card" style={s.card}>

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
                  }}
                >
                  <span style={s.chipDot} />
                  <span style={s.chipName}>{sk.name}</span>
                  <span style={s.chipCat}>{sk.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating tag behind card */}
          <div className="about-floating-tag" style={s.floatingTag} aria-hidden="true">
            <span style={s.floatingNumber}>7</span>
            <span style={s.floatingLabel}>Skills</span>
          </div>
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

        @keyframes chipIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1);    }
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
          text-decoration: none;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
          filter: brightness(1.1);
        }

        .sk-chip {
          transition: all 0.25s ease;
          animation: chipIn 0.45s ease backwards;
        }
        
        .sk-chip:hover {
          background: rgba(99, 102, 241, 0.15) !important;
          border-color: #6366f1 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px -8px #6366f1;
        }

        /* ── RESPONSIVE MEDIA QUERIES ── */
        @media (max-width: 992px) {
          .about-inner {
            gap: 2.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 1.5rem !important;
            min-height: auto !important;
          }
          .about-inner {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .about-text-col {
            align-items: center !important;
            text-align: center !important;
          }
          .about-blob {
            width: 320px !important;
            height: 320px !important;
            top: 10% !important;
            left: 50% !important;
          }
          .about-card {
            padding: 2rem 1.5rem !important;
            transform: none !important; /* Disables unexpected static rotations on touch screen */
          }
          .about-floating-tag {
            bottom: -0.5rem !important;
            right: -0.5rem !important;
            width: 70px !important;
            height: 70px !important;
          }
          .about-floating-number {
            font-size: 1.35rem !important;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 3rem 1rem !important;
          }
          .btn-primary {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
          }
          .sk-chip {
            width: 100%; /* Spans chip list fully across narrow windows if desired */
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── styles ─────────────────────────────────────────────────── */
const s = {
  section: {
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '4rem 2rem',
  },
  blob: {
    position: 'absolute',
    top: '20%',
    left: '30%',
    transform: 'translateX(-50%)',
    width: '500px',
    height: '500px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
    filter: 'blur(90px)',
    animation: 'morph 10s ease-in-out infinite',
    zIndex: 1,
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
    maxWidth: '1100px',
    width: '100%',
  },
  textCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.5rem',
    textAlign: 'left',
  },
  badgeContainer: {
    display: 'inline-flex',
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
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 900,
    lineHeight: 1.15,
    letterSpacing: '-0.03em',
    color: 'var(--text, #111)',
    margin: 0,
  },
  accent: {
    display: 'inline',
  },
  body: {
    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
    color: 'var(--muted, #555)',
    lineHeight: 1.6,
    margin: 0,
  },
  highlight: {
    color: 'var(--text, #111)',
    fontWeight: 600,
    borderBottom: '2px solid #6366f1',
  },
  actions: {
    marginTop: '0.5rem',
    width: '100%'
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#6366f1',
    color: '#fff',
    padding: '1rem 2.5rem',
    borderRadius: '0.75rem',
    fontWeight: 700,
    fontSize: '1rem',
  },
  skillsCol: {
    position: 'relative',
    width: '100%'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    borderRadius: '1.25rem',
    padding: '2.5rem 2rem',
    boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.1)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    willChange: 'transform',
    animation: 'fadeInUp 0.8s 0.15s ease backwards',
  },
  cardLabel: {
    fontWeight: 700,
    fontSize: '0.75rem',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#6366f1',
    margin: '0 0 0.8rem 0',
  },
  cardRule: {
    height: '1px',
    background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), transparent)',
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
    background: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '0.5rem',
    cursor: 'default',
  },
  chipDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#6366f1',
    flexShrink: 0,
    boxShadow: '0 0 6px #6366f1',
  },
  chipName: {
    fontSize: '0.88rem',
    fontWeight: 600,
    color: '#111',
  },
  chipCat: {
    fontSize: '0.7rem',
    fontWeight: 400,
    color: '#666',
    paddingLeft: '0.25rem',
    borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
  },
  floatingTag: {
    position: 'absolute',
    bottom: '-1rem',
    right: '-1rem',
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
    zIndex: 2,
  },
  floatingNumber: {
    fontSize: '1.6rem',
    fontWeight: 900,
    color: '#fff',
    lineHeight: 1,
  },
  floatingLabel: {
    fontSize: '0.55rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.85)',
    marginTop: '2px',
  },
};