import React from 'react'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" style={s.section}>
      <div style={s.header}>
        <span className="label-pill">Selected Work</span>
        <h2 className="section-title">Projects that tell the story.</h2>
        <p className="section-subtitle">A collection of live applications and polished demos, arranged for clarity and impact.</p>
      </div>

      <div style={s.grid}>
        {projects.map((project, index) => (
          <article key={project.name} className="project-card" style={s.card}>
            <div style={s.cardTop}>
              <div style={s.iconBox} aria-hidden="true">&lt;/&gt;</div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" style={s.link}>
                  Visit
                </a>
              )}
            </div>

            <div>
              <h3 style={s.title}>{project.name}</h3>
              <p style={s.description}>{project.description}</p>
            </div>

            <div className="proj-tags" style={s.tags}>
              {project.tags.map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const s = {
  section: {
    position: 'relative',
    padding: '4rem 0 6rem',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '1.4rem',
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '280px',
    padding: '1.8rem',
    borderRadius: '1.2rem',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.2rem',
  },
  iconBox: {
    width: '3rem',
    height: '3rem',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '1rem',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.05)',
    color: 'var(--accent)',
    fontWeight: 700,
  },
  link: {
    color: 'var(--accent)',
    fontWeight: 700,
    letterSpacing: '0.02em',
    textDecoration: 'none',
  },
  title: {
    fontSize: '1.35rem',
    margin: 0,
    color: 'var(--text)',
    lineHeight: 1.2,
  },
  description: {
    margin: '0.85rem 0 0',
    color: 'var(--muted)',
    lineHeight: 1.75,
    fontSize: '0.98rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.55rem',
    marginTop: '1.5rem',
  },
}
