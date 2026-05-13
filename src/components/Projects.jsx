import React from 'react';

/* ── DATA ────────────────────────────────────────────────────── */
const projects = [
  {
    name: "Project Genius AI",
    description: "AI-powered academic assistance platform helping students with project ideas, documentation, and research workflow.",
    tags: ["React", "Tailwind CSS", "Firebase", "Go APIs", "AI APIs"],
    link: "https://projectgeniusai.com.ng"
  },
  {
    name: "Miracle AI",
    description: "Intelligent AI web platform designed to assist users with productivity, learning, and smart digital assistance.",
    tags: ["React", "Firebase", "Tailwind CSS", "AI APIs"],
    link: "https://miracle-ai.netlify.app"
  },
  {
    name: "Theos X Genesis Hub",
    description: "Official tech initiative platform helping students with academic writing, design, and technical support services.",
    tags: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
    link: "https://theos-x-tech.vercel.app"
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

export default function PortfolioMain() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: 'transparent' }}>
      
      {/* Decorative background morphing blob */}
      <div style={s.blob} aria-hidden="true"></div>

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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                {p.link && p.link !== "#" && (
                  <a href={p.link} target="_blank" rel="noreferrer" style={s.cardLink} className="project-link-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
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
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .project-card { 
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .project-card:hover { 
          transform: translateY(-6px); 
          border-color: rgba(129, 140, 248, 0.6) !important; 
          box-shadow: 0 20px 40px -15px rgba(99, 102, 241, 0.3); 
          background: rgba(255, 255, 255, 0.08) !important;
        }

        .project-card:hover .project-link-icon { 
          color: #a5b4fc; 
        }
      `}</style>
    </main>
  );
}

const s = {
  sectionProjects: { 
    position: 'relative',
    zIndex: 2,
    padding: '6rem 2rem 8rem', 
    maxWidth: '1100px', 
    margin: '0 auto', 
    fontFamily: "system-ui, -apple-system, sans-serif" 
  },
  blob: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '600px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.12) 100%)',
    filter: 'blur(100px)',
    animation: 'morph 10s ease-in-out infinite',
    zIndex: 1,
  },
  header: { 
    marginBottom: '3.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem'
  },
  label: { 
    color: '#818cf8', 
    fontWeight: 800, 
    fontSize: '0.85rem', 
    textTransform: 'uppercase', 
    letterSpacing: '1.5px', 
    display: 'block'
  },
  projHeading: { 
    fontSize: 'clamp(2rem, 5vw, 2.7rem)', 
    fontWeight: 900, 
    color: '#ffffff', 
    letterSpacing: '-0.03em', 
    margin: 0 
  },
  line: { 
    width: '50px', 
    height: '4px', 
    background: 'linear-gradient(90deg, #6366f1, #a855f7)', 
    marginTop: '0.5rem', 
    borderRadius: '100px' 
  },
  projGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
    gap: '1.5rem' 
  },
  projCard: { 
    background: 'rgba(255, 255, 255, 0.03)', 
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.08)', 
    borderRadius: '1.25rem', 
    padding: '2.2rem 2rem', 
    display: 'flex', 
    flexDirection: 'column', 
    height: '100%', 
    minHeight: '290px',
    boxShadow: '0 15px 35px -15px rgba(0, 0, 0, 0.2)'
  },
  cardTop: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: '1.5rem' 
  },
  folderIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.2rem',
    height: '3.2rem',
    background: 'rgba(99, 102, 241, 0.15)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(129, 140, 248, 0.2)'
  },
  cardLink: { 
    color: '#94a3b8', 
    transition: 'all 0.2s ease' 
  },
  cardTitle: { 
    fontSize: '1.35rem', 
    fontWeight: 800, 
    color: '#ffffff', 
    letterSpacing: '-0.02em',
    marginBottom: '0.75rem' 
  },
  cardDesc: { 
    fontSize: '1rem', 
    color: '#94a3b8', 
    lineHeight: 1.6, 
    marginBottom: '1.5rem' 
  },
  tags: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '0.5rem', 
    marginTop: 'auto' 
  },
  tag: { 
    fontFamily: 'system-ui, -apple-system, sans-serif', 
    fontSize: '0.75rem', 
    color: '#a5b4fc', 
    background: 'rgba(99, 102, 241, 0.2)', 
    padding: '0.35rem 0.8rem', 
    borderRadius: '0.5rem', 
    fontWeight: 700 
  },
};