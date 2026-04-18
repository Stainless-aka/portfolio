export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.badge}>👋 Available for work</div>
      <h1 style={styles.heading}>
        Hi, I'm <span style={styles.accent}>Godwin Inalegwu Ayuba </span>
      </h1>
      <p style={styles.sub}>
        Frontend Developer crafting fast, clean, and user-friendly web experiences with React.
      </p>
      <div style={styles.actions}>
        <a href="#projects" style={styles.btnPrimary}>View Projects</a>
        <a href="#contact" style={styles.btnOutline}>Get in Touch</a>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '6rem 0 4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.25rem',
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(124,106,247,0.15)',
    color: 'var(--accent2)',
    border: '1px solid rgba(124,106,247,0.3)',
    borderRadius: '999px',
    padding: '0.3rem 0.9rem',
    fontSize: '0.8rem',
    fontWeight: 500,
  },
  heading: {
    fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: '-1px',
    color: 'var(--text)',
  },
  accent: {
    color: 'var(--accent)',
  },
  sub: {
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    color: 'var(--muted)',
    maxWidth: '520px',
    lineHeight: 1.7,
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '0.5rem',
  },
  btnPrimary: {
    background: 'var(--accent)',
    color: '#fff',
    padding: '0.7rem 1.6rem',
    borderRadius: 'var(--radius)',
    fontWeight: 600,
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
  btnOutline: {
    background: 'transparent',
    color: 'var(--text)',
    padding: '0.7rem 1.6rem',
    borderRadius: 'var(--radius)',
    fontWeight: 600,
    fontSize: '0.95rem',
    border: '1px solid var(--border)',
    textDecoration: 'none',
    transition: 'border-color 0.2s',
  },
}
