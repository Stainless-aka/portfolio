import React from 'react';
import projects from '../data/projects'; // Assuming this exists

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.label}>Selected Work</span>
        <h2 style={styles.heading}>Things I've built</h2>
        <div style={styles.line}></div>
      </div>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className="project-card" style={styles.card}>
            <div style={styles.cardTop}>
              <div style={styles.folderIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" style={styles.cardLink} aria-label="View Project">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>

            <div style={styles.content}>
              <h3 style={styles.cardTitle}>{p.name}</h3>
              <p style={styles.cardDesc}>{p.description}</p>
            </div>

            {p.tags && (
              <div style={styles.tags}>
                {p.tags.map(tag => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          top: 0;
        }
        .project-card:hover {
          top: -8px;
          border-color: #6366f1 !important;
          background: rgba(255, 255, 255, 0.02) !important;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
        }
        .project-card:hover a {
          color: #6366f1;
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: '8rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '3rem',
    position: 'relative',
  },
  label: {
    color: '#6366f1',
    fontWeight: 700,
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  heading: {
    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
    fontWeight: 800,
    color: 'var(--text, #111)',
    letterSpacing: '-0.02em',
    margin: 0,
  },
  line: {
    width: '60px',
    height: '4px',
    background: '#6366f1',
    marginTop: '1.5rem',
    borderRadius: '2px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '1.25rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    minHeight: '280px',
    backdropFilter: 'blur(10px)',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  folderIcon: {
    opacity: 0.8,
  },
  cardLink: {
    color: 'var(--muted, #666)',
    transition: 'color 0.2s ease',
  },
  content: {
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: 'var(--text, #111)',
    marginBottom: '0.75rem',
  },
  cardDesc: {
    fontSize: '1rem',
    color: 'var(--muted, #555)',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginTop: 'auto',
  },
  tag: {
    fontFamily: 'monospace',
    fontSize: '0.75rem',
    color: 'var(--muted, #666)',
    background: 'rgba(0, 0, 0, 0.05)',
    padding: '0.3rem 0.7rem',
    borderRadius: '4px',
    fontWeight: 500,
  },
};