import React from 'react'

export default function Hero() {
  return (
    <section style={s.section}>
      <div style={s.blob} aria-hidden="true" />

      <div style={s.inner}>
        <div style={s.badge} className="badge">Available for work</div>

        <div style={s.heroCopy}>
          <p className="code-line">const hello = 'Welcome to my portfolio'</p>
          <h1 className="section-title">I build fast, clean web experiences.</h1>
          <p className="section-subtitle">React developer focused on accessibility, polished animations, and terminal-style interface design.</p>

          <div className="button-row" style={s.actions}>
            <a href="#projects" className="btn btn-accent">Explore My Work</a>
            <a href="#contact" className="btn btn-muted">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    minHeight: '88vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '6rem 0 4rem',
  },
  blob: {
    position: 'absolute',
    width: '560px',
    height: '560px',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'radial-gradient(circle, rgba(255,184,108,0.14), transparent 55%)',
    filter: 'blur(30px)',
    animation: 'morph 12s ease-in-out infinite',
    zIndex: 1,
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    textAlign: 'center',
  },
  badge: {
    alignSelf: 'center',
  },
  heroCopy: {
    display: 'grid',
    gap: '1.5rem',
  },
  actions: {
    justifyContent: 'center',
  },
}
