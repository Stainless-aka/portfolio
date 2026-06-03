import React, { useEffect, useRef } from 'react'

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'HTML & CSS', category: 'Frontend' },
  { name: 'Vite', category: 'Tooling' },
  { name: 'Git', category: 'Tooling' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
]

export default function About() {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el || window.matchMedia('(max-width: 768px)').matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    const onLeave = () => {
      el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="about" style={s.section}>
      <div style={s.blob} aria-hidden="true" />

      <div style={s.grid}>
        <div style={s.textBlock}>
          <span className="label-pill">Behind the code</span>
          <h2 className="section-title">Products that feel polished and perform well.</h2>
          <p className="section-subtitle">I build interfaces that combine clarity, accessibility, and subtle motion so users feel confident and the experience stays responsive.</p>
          <p className="section-subtitle">My strength is shaping smart frontend systems with clean structure and low-cost animations.</p>
          <a href="#contact" className="btn btn-accent" style={s.cta}>Let�s connect</a>
        </div>

        <div style={s.cardWrapper}>
          <article ref={cardRef} className="about-card" style={s.card}>
            <p style={s.cardLabel}>Technical Toolkit</p>
            <div style={s.rule} />
            <div style={s.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.name} style={s.skillChip}>
                  <span style={s.skillDot} />
                  <div>
                    <p style={s.skillName}>{skill.name}</p>
                    <p style={s.skillCategory}>{skill.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <div style={s.floatingTag} aria-hidden="true">
            <span style={s.floatingNumber}>7</span>
            <span style={s.floatingLabel}>Skills</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    position: 'relative',
    padding: '5rem 0',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    top: '10%',
    left: '8%',
    width: '420px',
    height: '420px',
    background: 'radial-gradient(circle, rgba(255,184,108,0.12), transparent 60%)',
    filter: 'blur(30px)',
    animation: 'morph 12s ease-in-out infinite',
    zIndex: 1,
  },
  grid: {
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: 'minmax(320px, 1fr) minmax(320px, 1fr)',
    gap: '2rem',
    alignItems: 'center',
  },
  textBlock: {
    display: 'grid',
    gap: '1.4rem',
  },
  cta: {
    width: 'max-content',
  },
  cardWrapper: {
    position: 'relative',
  },
  card: {
    padding: '2rem',
    minHeight: '360px',
  },
  cardLabel: {
    color: 'var(--accent)',
    fontSize: '0.78rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  rule: {
    width: '70px',
    height: '2px',
    background: 'rgba(255,184,108,0.3)',
    marginBottom: '1.5rem',
  },
  skillsGrid: {
    display: 'grid',
    gap: '0.85rem',
  },
  skillChip: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '0.9rem',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.06)',
  },
  skillDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'var(--accent)',
  },
  skillName: {
    margin: 0,
    fontWeight: 700,
    color: 'var(--text)',
  },
  skillCategory: {
    margin: 0,
    color: 'var(--muted)',
    fontSize: '0.85rem',
  },
  floatingTag: {
    position: 'absolute',
    bottom: '-1rem',
    right: '-1rem',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    background: 'linear-gradient(135deg, rgba(255,184,108,0.22), rgba(255,255,255,0.04))',
    boxShadow: '0 18px 35px rgba(0,0,0,0.18)',
  },
  floatingNumber: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 900,
    color: 'var(--text)',
  },
  floatingLabel: {
    margin: 0,
    fontSize: '0.7rem',
    color: 'var(--muted)',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
}
