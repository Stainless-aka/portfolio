import React from 'react';

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.badge}>Available for projects</span>
        <h2 style={styles.heading}>Let's work together</h2>
        <p style={styles.body}>
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div style={styles.grid}>
        {contactInfo.map(({ icon, label, value, link, color }) => (
          <a 
            key={label} 
            href={link} 
            target="_blank" 
            rel="noreferrer" 
            style={{...styles.card, '--hover-color': color}}
            className="contact-card"
          >
            <div style={{...styles.iconBox, backgroundColor: `${color}15`, color: color}}>
              {icon}
            </div>
            <div style={styles.cardContent}>
              <p style={styles.rowLabel}>{label}</p>
              <p style={styles.rowValue}>{value}</p>
            </div>
            <span style={styles.arrow}>→</span>
          </a>
        ))}
      </div>

      <style>{`
        .contact-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          background: var(--hover-color) !important;
          border-color: var(--hover-color) !important;
        }
        .contact-card:hover * {
          color: #fff !important;
        }
        .contact-card:hover span {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
}

const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'ayuskid15@email.com',
    link: 'mailto:ayuskid15@email.com',
    color: '#6366f1'
  },
  {
    icon: '⚡',
    label: 'GitHub',
    value: 'Stainless-aka',
    link: 'https://github.com/Stainless-aka',
    color: '#24292f'
  },
  {
    icon: '🛡️',
    label: 'LinkedIn',
    value: 'Godwin Ayuba',
    link: 'https://ng.linkedin.com/in/godwin-inalegwu-ayuba-09b3153a7',
    color: '#0077b5'
  },
];

const styles = {
  section: {
    padding: '8rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  },
  badge: {
    background: 'rgba(99, 102, 241, 0.1)',
    color: '#6366f1',
    padding: '0.5rem 1rem',
    borderRadius: '2rem',
    fontSize: '0.8rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
    fontWeight: 800,
    color: 'var(--text, #111)',
    letterSpacing: '-0.03em',
    margin: 0,
  },
  body: {
    color: 'var(--muted, #666)',
    fontSize: '1.2rem',
    maxWidth: '600px',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '1.25rem',
    position: 'relative',
    overflow: 'hidden',
  },
  iconBox: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    flexShrink: 0,
  },
  cardContent: {
    flexGrow: 1,
  },
  rowLabel: {
    fontSize: '0.75rem',
    color: 'var(--muted, #666)',
    margin: '0 0 0.25rem 0',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  rowValue: {
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: 0,
    color: 'var(--text, #111)',
  },
  arrow: {
    fontSize: '1.2rem',
    opacity: 0.5,
    transition: 'transform 0.3s ease',
  }
};