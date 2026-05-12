import React, { useEffect, useRef } from 'react';

const GOLD   = '#B8976A';
const GOLD_L = '#D4B483';
const CREAM  = '#FAF7F2';
const INK    = '#1A1612';
const MUTED  = '#6B6259';
const RULE   = 'rgba(184,151,106,0.25)';

export default function Contact() {
  const containerRef = useRef(null);

  /* parallax tilt effect for the contact cards grid */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 4;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 4;
      el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    const onLeave = () => {
      el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="contact" style={s.section}>
      {/* Decorative corners */}
      <div style={s.cornerTL} aria-hidden="true" />
      <div style={s.cornerBR} aria-hidden="true" />

      <div style={s.inner}>
        {/* HEADER */}
        <div style={s.header}>
          <div style={s.eyebrowRow}>
            <span style={s.rule} />
            <span style={s.eyebrow}>Collaboration</span>
            <span style={s.rule} />
          </div>
          <h2 style={s.heading}>
            Let’s work <em style={s.italic}>together</em>
            <br />
            <span style={s.headingAccent}>On your next project</span>
          </h2>
          <div style={s.ornament} aria-hidden="true">✦</div>
          <p style={s.body}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div ref={containerRef} style={s.gridContainer}>
          <div style={s.grid}>
            {contactInfo.map(({ icon, label, value, link, color }, i) => (
              <a 
                key={label} 
                href={link} 
                target="_blank" 
                rel="noreferrer" 
                style={{...s.card, animationDelay: `${i * 100}ms`}}
                className="contact-card-premium"
              >
                <div style={{...s.iconBox, color: color}}>
                  {icon}
                </div>
                <div style={s.cardContent}>
                  <p style={s.rowLabel}>{label}</p>
                  <p style={s.rowValue}>{value}</p>
                </div>
                <span className="card-arrow" style={s.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Glyph */}
        <div style={s.footerFlourish}>
          <span style={s.footerRule} />
          <span style={s.footerGlyph}>◈</span>
          <span style={s.footerRule} />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Cormorant+Garamond:ital,wght@1,600&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .contact-card-premium {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          text-decoration: none;
          animation: fadeUp 0.8s ease backwards;
        }

        .contact-card-premium:hover {
          background: #fff !important;
          border-color: ${GOLD} !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -12px rgba(184, 151, 106, 0.15);
        }

        .contact-card-premium:hover .card-arrow {
          transform: translateX(5px);
          color: ${GOLD} !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'ayuskid15@email.com', link: 'mailto:ayuskid15@email.com', color: '#6366f1' },
  { icon: '⚡', label: 'GitHub', value: 'Stainless-aka', link: 'https://github.com/Stainless-aka', color: '#1A1612' },
  { icon: '🛡️', label: 'LinkedIn', value: 'Godwin Inalegwu Ayuba', link: 'https://ng.linkedin.com/in/godwin-inalegwu-ayuba-09b3153a7', color: '#0077b5' },
];

const s = {
  section: {
    position: 'relative',
    padding: '8rem 2rem',
    background: CREAM,
    fontFamily: "'DM Sans', sans-serif",
    overflow: 'hidden',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cornerTL: {
    position: 'absolute', top: 30, left: 30, width: 50, height: 50,
    borderTop: `1.5px solid ${GOLD}`, borderLeft: `1.5px solid ${GOLD}`,
  },
  cornerBR: {
    position: 'absolute', bottom: 30, right: 30, width: 50, height: 50,
    borderBottom: `1.5px solid ${GOLD}`, borderRight: `1.5px solid ${GOLD}`,
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '600px',
  },
  eyebrowRow: {
    display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem',
  },
  rule: { flex: 1, height: '1px', background: GOLD, opacity: 0.4 },
  eyebrow: {
    fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.25em',
    textTransform: 'uppercase', color: GOLD,
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
    fontWeight: 700, color: INK, lineHeight: 1.1, margin: 0,
  },
  italic: { fontStyle: 'italic', fontWeight: 500, color: MUTED },
  headingAccent: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
    background: `linear-gradient(120deg, ${GOLD}, ${GOLD_L})`,
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  },
  ornament: { color: GOLD, fontSize: '1rem', margin: '1.5rem 0', opacity: 0.8 },
  body: { color: MUTED, fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 300 },
  
  gridContainer: { width: '100%', transition: 'transform 0.1s ease-out' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
    width: '100%',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.8rem',
    background: 'rgba(255, 255, 255, 0.4)',
    border: `1px solid ${RULE}`,
    borderRadius: '4px',
    position: 'relative',
  },
  iconBox: {
    width: '3.5rem', height: '3.5rem', background: '#fff',
    borderRadius: '2px', display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontSize: '1.4rem', border: `1px solid ${RULE}`,
  },
  cardContent: { flexGrow: 1 },
  rowLabel: {
    fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase',
    letterSpacing: '0.1em', color: GOLD, margin: '0 0 0.3rem 0',
  },
  rowValue: { fontSize: '1.05rem', fontWeight: 500, color: INK, margin: 0 },
  arrow: { fontSize: '1.2rem', color: MUTED, opacity: 0.4, transition: 'all 0.3s ease' },
  
  footerFlourish: {
    display: 'flex', alignItems: 'center', width: '100%',
    maxWidth: '400px', gap: '1rem', marginTop: '5rem',
  },
  footerRule: { flex: 1, height: '1px', background: RULE },
  footerGlyph: { color: GOLD, fontSize: '0.8rem', opacity: 0.6 }
};