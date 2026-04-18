import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <p style={styles.label}>Projects</p>
      <h2 style={styles.heading}>Things I've built</h2>
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.cardTop}>
              <span style={styles.icon}>🗂️</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" style={styles.cardLink}>↗</a>
              )}
            </div>
            <h3 style={styles.cardTitle}>{p.name}</h3>
            <p style={styles.cardDesc}>{p.description}</p>
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
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 0',
    borderTop: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    color: 'var(--accent)',
    fontWeight: 600,
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
  heading: {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 700,
    color: 'var(--text)',
    letterSpacing: '-0.5px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1.25rem',
    marginTop: '0.5rem',
  },
  card: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    transition: 'border-color 0.2s, transform 0.2s',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.5rem',
  },
  cardLink: {
    color: 'var(--muted)',
    fontSize: '1.1rem',
    textDecoration: 'none',
  },
  cardTitle: {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: 'var(--text)',
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: 'var(--muted)',
    lineHeight: 1.7,
    flexGrow: 1,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.25rem',
  },
  tag: {
    background: 'rgba(124,106,247,0.12)',
    color: 'var(--accent2)',
    borderRadius: '6px',
    padding: '0.2rem 0.6rem',
    fontSize: '0.75rem',
    fontWeight: 500,
  },
}
