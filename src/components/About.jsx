import React from 'react';

const skills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'HTML & CSS', color: '#E34F26' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Git', color: '#F05032' },
  { name: 'REST APIs', color: '#00bb7c' }
];

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.content}>
        <div style={styles.textSide}>
          <span style={styles.badge}>Behind the Code</span>
          <h2 style={styles.heading}>
            Passionate about Building <span style={styles.gradientText}>Great Products</span>
          </h2>
          <p style={styles.body}>
            I specialize in bridging the gap between complex backend logic and 
            intuitive frontend design. My goal is to build high-performance web 
            applications that blend clean aesthetics with seamless accessibility.
          </p>
          <p style={styles.body}>
            I excel at turning ideas into refined, user-focused digital experiences 
            that don't just work—they feel right.
          </p>
        </div>

        <div style={styles.skillsSide}>
          <p style={styles.skillsTitle}>Technical Toolkit</p>
          <div style={styles.skillsGrid}>
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                style={{...styles.skillCard, '--glow': skill.color}}
                className="skill-badge"
              >
                <span style={{...styles.dot, backgroundColor: skill.color}}></span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .skill-badge {
          transition: all 0.3s ease;
          animation: slideUp 0.5s ease backwards;
        }
        .skill-badge:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: var(--glow) !important;
          box-shadow: 0 5px 15px -5px var(--glow);
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
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '4rem',
    alignItems: 'start',
  },
  badge: {
    color: '#6366f1',
    fontWeight: 700,
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 800,
    color: 'var(--text, #111)',
    letterSpacing: '-0.04em',
    lineHeight: 1.1,
    marginBottom: '2rem',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #6366f1, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  body: {
    color: 'var(--muted, #555)',
    fontSize: '1.15rem',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
  },
  skillsSide: {
    background: 'rgba(255, 255, 255, 0.03)',
    padding: '2rem',
    borderRadius: '1.5rem',
    border: '1px solid rgba(0,0,0,0.05)',
    backdropFilter: 'blur(8px)',
  },
  skillsTitle: {
    fontSize: '0.9rem',
    fontWeight: 700,
    color: 'var(--text, #111)',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    opacity: 0.6,
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  skillCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '0.75rem',
    padding: '0.6rem 1.2rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: 'var(--text, #333)',
    cursor: 'default',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    boxShadow: '0 0 8px currentColor',
  }
};