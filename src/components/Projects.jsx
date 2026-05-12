import React from 'react';

/* ── DATA ────────────────────────────────────────────────────── */
const projects = [
  {
    name: "Project Genius AI",
    description: "AI-powered academic assistance platform helping students with project ideas, documentation, and research workflow.",
    tags: ["React", "Tailwind CSS", "Firebase", "Go APIs", "AI APIs"],
    link: "#"
  },
  {
    name: "Miracle AI",
    description: "Intelligent AI web platform designed to assist users with productivity, learning, and smart digital assistance.",
    tags: ["React", "Firebase", "Tailwind CSS", "AI APIs"],
    link: "#"
  },
  {
    name: "Theos X Genesis Hub",
    description: "Official tech initiative platform helping students with academic writing, design, and technical support services.",
    tags: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
    link: "#"
  },
  {
    name: "School Gallery System",
    description: "A professional digital archive for educational institutions to manage and showcase campus events.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#"
  },
  {
    name: "E-commerce Store",
    description: "A full-featured online retail platform with a focus on clean UI and seamless user checkout experiences.",
    tags: ["React", "Node.js", "Bootstrap"],
    link: "#"
  },
  {
    name: "Hospital Queue System",
    description: "A specialized queue management system designed to optimize patient flow and administrative efficiency.",
    tags: ["React", "Tailwind CSS", "REST APIs"],
    link: "#"
  }
];

/* ── THEME CONSTANTS ─────────────────────────────────────────── */
const GOLD   = '#B8976A';
const CREAM  = '#FAF7F2';
const INK    = '#1A1612';
const MUTED  = '#6B6259';
const RULE   = 'rgba(184,151,106,0.25)';

export default function PortfolioMain() {
  return (
    <main style={{ background: CREAM, minHeight: '100vh' }}>
      
      {/* ── ABOUT SECTION ── */}
      <section id="about" style={s.section}>
        <div style={s.cornerTL} aria-hidden="true" />
        <div style={s.cornerBR} aria-hidden="true" />

        <div style={s.inner}>
          <div style={s.textCol}>
            <div style={s.eyebrowRow}>
              <span style={s.rule} />
              <span style={s.eyebrow}>The Profile</span>
              <span style={s.rule} />
            </div>

            <h2 style={s.heading}>
              Passionate about <em style={s.italic}>Building</em><br />
              <span style={s.headingAccent}>Great Products</span>
            </h2>

            <div style={s.ornament} aria-hidden="true">✦</div>

            <p style={s.body}>
              I specialise in bridging the gap between complex backend logic and 
              intuitive frontend design. My focus is on high-performance web 
              applications that blend clean aesthetics with seamless accessibility.
            </p>

            <div style={s.skillsSummary}>
              <span style={s.skillBadge}>Full-Stack Development</span>
              <span style={s.skillBadge}>AI Integration</span>
              <span style={s.skillBadge}>UI/UX Design</span>
            </div>

            <a href="#projects" style={s.cta} className="btn-hover">
              View my work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginLeft:8}}>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" style={s.sectionProjects}>
        <div style={s.header}>
          <span style={s.label}>Selected Work</span>
          <h2 style={s.projHeading}>Things I've built</h2>
          <div style={s.line}></div>
        </div>

        <div style={s.projGrid}>
          {projects.map((p, i) => (
            <div key={i} className="project-card" style={s.projCard}>
              <div style={s.cardTop}>
                <div style={s.folderIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" style={s.cardLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </div>

              <div style={s.content}>
                <h3 style={s.cardTitle}>{p.name}</h3>
                <p style={s.cardDesc}>{p.description}</p>
              </div>

              <div style={s.tags}>
                {p.tags.map(tag => (
                  <span key={tag} style={s.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        
        .btn-hover:hover { background: ${GOLD} !important; color: #fff !important; transform: translateX(4px); box-shadow: 0 8px 24px -8px ${GOLD}; }
        
        .project-card { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); position: relative; top: 0; background: #fff !important; }
        .project-card:hover { top: -8px; border-color: ${GOLD} !important; box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1); }
        .project-card:hover a { color: ${GOLD}; }
      `}</style>
    </main>
  );
}

const s = {
  section: { position: 'relative', padding: '10rem 3rem', maxWidth: 1160, margin: '0 auto', fontFamily: "'DM Sans', sans-serif" },
  sectionProjects: { padding: '5rem 3rem 8rem', maxWidth: 1160, margin: '0 auto', fontFamily: "'DM Sans', sans-serif" },
  cornerTL: { position: 'absolute', top: 28, left: 28, width: 40, height: 40, borderTop: `1.5px solid ${GOLD}`, borderLeft: `1.5px solid ${GOLD}` },
  cornerBR: { position: 'absolute', bottom: 28, right: 28, width: 40, height: 40, borderBottom: `1.5px solid ${GOLD}`, borderRight: `1.5px solid ${GOLD}` },
  inner: { display: 'flex', justifyContent: 'center', textAlign: 'center' },
  textCol: { maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  
  eyebrowRow: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', width: '100%' },
  rule: { flex: 1, height: '1px', background: GOLD, opacity: 0.55 },
  eyebrow: { fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD },
  
  heading: { fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: INK, lineHeight: 1.1, marginBottom: '0.5rem' },
  headingAccent: { fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(2.8rem, 6.5vw, 4.5rem)', background: `linear-gradient(120deg, ${GOLD}, #C9A84C)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  italic: { fontStyle: 'italic', fontWeight: 500, color: MUTED },
  ornament: { color: GOLD, fontSize: '0.9rem', margin: '2rem 0', opacity: 0.7 },
  body: { color: MUTED, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' },
  
  skillsSummary: { display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' },
  skillBadge: { fontSize: '0.75rem', fontWeight: 600, color: GOLD, border: `1px solid ${RULE}`, padding: '0.4rem 1rem', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '1px' },
  
  cta: { display: 'inline-flex', alignItems: 'center', padding: '0.8rem 2rem', border: `1.5px solid ${GOLD}`, color: GOLD, fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.22s' },

  header: { marginBottom: '3rem' },
  label: { color: GOLD, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' },
  projHeading: { fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800, color: INK, letterSpacing: '-0.02em', margin: 0 },
  line: { width: '60px', height: '4px', background: GOLD, marginTop: '1.5rem', borderRadius: '2px' },
  
  projGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' },
  projCard: { border: `1px solid ${RULE}`, borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '280px' },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
  cardLink: { color: MUTED, transition: 'color 0.2s ease' },
  cardTitle: { fontSize: '1.3rem', fontWeight: 700, color: INK, marginBottom: '0.75rem' },
  cardDesc: { fontSize: '1rem', color: MUTED, lineHeight: 1.6, marginBottom: '1.5rem' },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' },
  tag: { fontFamily: 'monospace', fontSize: '0.75rem', color: GOLD, background: 'rgba(184,151,106,0.08)', padding: '0.3rem 0.7rem', borderRadius: '4px', fontWeight: 500 },
};