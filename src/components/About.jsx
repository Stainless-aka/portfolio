const skills = ['React', 'JavaScript', 'HTML & CSS', 'Vite', 'Git', 'REST APIs']

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <p style={styles.label}>About Me</p>
      <h2 style={styles.heading}>Passionate about building great products</h2>
      <p style={styles.body}>
        Dedicated to developing high-performance web applications with a focus on clean design and accessibility. 
        I specialize in transforming concepts into polished, user-centric products.
      </p>
      <div style={styles.skills}>
        {skills.map(skill => (
          <span key={skill} style={styles.skill}>{skill}</span>
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
  body: {
    color: 'var(--muted)',
    fontSize: '1rem',
    maxWidth: '560px',
    lineHeight: 1.8,
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginTop: '0.5rem',
  },
  skill: {
    background: 'var(--surface2)',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '0.35rem 0.85rem',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
}
