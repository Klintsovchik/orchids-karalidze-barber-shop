import React from 'react'

const reasons = [
  { icon: '🎓', title: 'European Techniques', desc: 'Trained in modern European barbering methods for precise, contemporary results.' },
  { icon: '🛋️', title: 'Relaxing Experience', desc: 'Every visit is designed to be a calming, premium grooming session.' },
  { icon: '🤝', title: 'Friendly Professionals', desc: 'Warm, approachable barbers who take time to understand your style.' },
  { icon: '✨', title: 'Facial Care & Massage', desc: 'Full-service grooming including skin care and relaxing scalp massage.' },
  { icon: '🚶', title: 'Walk-ins Welcome', desc: 'No appointment? No problem. We always do our best to accommodate you.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees. You always know the price before we start.' },
]

const WhyUs = () => {
  return (
    <section id="why-us" style={{
      background: 'var(--charcoal)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(198,165,92,0.04) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(198,165,92,0.03) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '18px',
          }}>The Karalidze Standard</p>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: 'var(--white)',
          }}>Why Choose Us</h2>
          <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: '24px auto 0' }} />
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2px',
          border: '1px solid rgba(198,165,92,0.15)',
        }}>
          {reasons.map((r, i) => (
            <div key={r.title} style={{
              padding: '44px 36px',
              background: 'var(--black)',
              borderRight: (i % 2 === 0) ? '1px solid rgba(198,165,92,0.1)' : 'none',
              borderBottom: i < 4 ? '1px solid rgba(198,165,92,0.1)' : 'none',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(198,165,92,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '18px' }}>{r.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '12px',
                letterSpacing: '0.05em',
              }}>{r.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                lineHeight: 1.75,
                color: 'rgba(245,245,245,0.55)',
                fontWeight: 300,
              }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
