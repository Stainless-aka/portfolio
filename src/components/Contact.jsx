import React, { useEffect, useRef } from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'ayuskid15@email.com',
    link: 'mailto:ayuskid15@email.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22 6 12 13 2 6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Stainless-aka',
    link: 'https://github.com/Stainless-aka',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3" />
        <path d="M14 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Godwin Inalegwu Ayuba',
    link: 'https://ng.linkedin.com/in/godwin-inalegwu-ayuba-09b3153a7',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el || window.matchMedia('(max-width: 768px)').matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4
      el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    const onLeave = () => {
      el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="contact" style={s.section}>
      <div style={s.blob} aria-hidden="true" />
      <div style={s.inner}>
        <div style={s.header}>
          <span className="label-pill">Collaboration</span>
          <h2 className="section-title">Let's work together on your next project.</h2>
          <p className="section-subtitle">Whether it is an MVP, a portfolio refresh, or a product launch, I'm ready to help.</p>
        </div>

        <div ref={containerRef} style={s.grid}>
          {contactInfo.map((item) => (
            <a key={item.label} href={item.link} target="_blank" rel="noreferrer" className="contact-card" style={s.card}>
              <div style={s.icon}>{item.icon}</div>
              <div style={s.details}>
                <p style={s.label}>{item.label}</p>
                <p style={s.value}>{item.value}</p>
              </div>
              <span style={s.arrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    position: 'relative',
    padding: '5rem 0 6rem',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    bottom: '10%',
    right: '15%',
    background: 'radial-gradient(circle, rgba(255,184,108,0.12), transparent 55%)',
    filter: 'blur(35px)',
    animation: 'morph 11s ease-in-out infinite',
    zIndex: 1,
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gap: '2rem',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    textAlign: 'center',
    maxWidth: '680px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.3rem',
  },
  card: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    minHeight: '130px',
  },
  icon: {
    width: '3rem',
    height: '3rem',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '1rem',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--accent)',
  },
  details: {
    display: 'grid',
    gap: '0.2rem',
  },
  label: {
    margin: 0,
    fontSize: '0.75rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
  },
  value: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--text)',
  },
  arrow: {
    color: 'var(--muted)',
    fontSize: '1.4rem',
    transition: 'transform 0.2s ease, color 0.2s ease',
  },
}
