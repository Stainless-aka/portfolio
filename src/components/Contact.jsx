export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <p style={styles.label}>Contact</p>
      <h2 style={styles.heading}>Let's work together</h2>
      <p style={styles.body}>
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>
      <div style={styles.card}>
        <div style={styles.row}>
          <span style={styles.iconWrap}>📧</span>
          <div>
            <p style={styles.rowLabel}>Email</p>
            <a href="mailto:ayuskid15@email.com" style={styles.rowValue}>ayuskid15@email.com</a>
          </div>
        </div>
        <div style={styles.divider} />
        <div style={styles.row}>
          <span style={styles.iconWrap}>👾</span>
          <div>
            <p style={styles.rowLabel}>GitHub</p>
            <a href="https://github.com/Stainless-aka" target="_blank" rel="noreferrer" style={styles.rowValue}>
              https://github.com/Stainless-aka
            </a>
          </div>
        </div>
        <div style={styles.divider} />
        <div style={styles.row}>
          <span style={styles.iconWrap}>💼</span>
          <div>
            <p style={styles.rowLabel}>LinkedIn</p>
            <a href="https://ng.linkedin.com/in/godwin-inalegwu-ayuba-09b3153a7" target="_blank" rel="noreferrer" style={styles.rowValue}>
              linkedin.com/in/Godwin Inalegwu Ayuba
            </a>
          </div>
        </div>
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
    maxWidth: '480px',
    lineHeight: 1.8,
  },
  card: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '1.5rem',
    marginTop: '0.5rem',
    maxWidth: '480px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.5rem 0',
  },
  iconWrap: {
    fontSize: '1.4rem',
    width: '2.5rem',
    textAlign: 'center',
  },
  rowLabel: {
    fontSize: '0.75rem',
    color: 'var(--muted)',
    marginBottom: '0.1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  rowValue: {
    color: 'var(--text)',
    fontSize: '0.95rem',
    fontWeight: 500,
    textDecoration: 'none',
  },
  divider: {
    height: '1px',
    background: 'var(--border)',
    margin: '0.25rem 0',
  },
}
