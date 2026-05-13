import React, { useEffect, useRef } from 'react';

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
      {/* Decorative background morphing blob */}
      <div style={s.blob} aria-hidden="true" />

      <div style={s.inner}>
        {/* HEADER */}
        <div style={s.header}>
          <div className="fade-in" style={s.badgeContainer}>
            <span style={s.dot}></span>
            <span style={s.badgeText}>Collaboration</span>
          </div>
          
          <h2 style={s.heading}>
            Let’s work <span className="gradient-text" style={s.accent}>together on your next project</span>
          </h2>
          
          <p style={s.body}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div ref={containerRef} style={s.gridContainer}>
          <div style={s.grid}>
            {contactInfo.map(({ icon, label, value, link }, i) => (
              <a 
                key={label} 
                href={link} 
                target="_blank" 
                rel="noreferrer" 
                style={{...s.card, animationDelay: `${i * 100}ms`}}
                className="contact-card-premium"
              >
                <div style={s.iconBox}>
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
      </div>

      <style>{`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-in { animation: fadeInUp 0.8s ease-out forwards; }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }

        .contact-card-premium {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          text-decoration: none;
          animation: fadeInUp 0.8s ease backwards;
        }

        .contact-card-premium:hover {
          background: rgba(255, 255, 255, 0.9) !important;
          border-color: #6366f1 !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.25);
        }

        .contact-card-premium:hover .card-arrow {
          transform: translateX(5px);
          color: #6366f1 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

const contactInfo = [
  { 
    label: 'Email', 
    value: 'ayuskid15@email.com', 
    link: 'mailto:ayuskid15@email.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )
  },
  { 
    label: 'GitHub', 
    value: 'Stainless-aka', 
    link: 'https://github.com/Stainless-aka',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    )
  },
  { 
    label: 'LinkedIn', 
    value: 'Godwin Inalegwu Ayuba', 
    link: 'https://ng.linkedin.com/in/godwin-inalegwu-ayuba-09b3153a7',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  }
];

const s = {
  section: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '6rem 2rem',
  },
  blob: {
    position: 'absolute',
    bottom: '10%',
    right: '20%',
    transform: 'translateX(50%)',
    width: '450px',
    height: '450px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
    filter: 'blur(90px)',
    animation: 'morph 9s ease-in-out infinite',
    zIndex: 1,
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '650px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
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
    fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
    fontWeight: 900,
    color: 'var(--text, #111)',
    lineHeight: 1.15,
    letterSpacing: '-0.04em',
    margin: 0,
  },
  accent: {
    display: 'block',
  },
  body: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'var(--muted, #555)',
    lineHeight: 1.6,
    margin: 0,
  },
  gridContainer: { 
    width: '100%', 
    transition: 'transform 0.1s ease-out' 
  },
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
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    borderRadius: '1.25rem',
    position: 'relative',
    boxShadow: '0 15px 35px -15px rgba(99, 102, 241, 0.08)',
  },
  iconBox: {
    width: '3.5rem',
    height: '3.5rem',
    background: '#fff',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6366f1',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.1)',
  },
  cardContent: { 
    flexGrow: 1 
  },
  rowLabel: {
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#6366f1',
    margin: '0 0 0.2rem 0',
  },
  rowValue: { 
    fontSize: '1.05rem', 
    fontWeight: 600, 
    color: 'var(--text, #111)', 
    margin: 0 
  },
  arrow: { 
    fontSize: '1.2rem', 
    color: 'var(--muted, #555)', 
    opacity: 0.5, 
    transition: 'all 0.3s ease' 
  },
};