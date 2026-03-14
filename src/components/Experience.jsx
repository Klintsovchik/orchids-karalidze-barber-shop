import React from 'react'

const Experience = () => {
  const features = [
    { icon: '✦', label: 'European Techniques' },
    { icon: '✦', label: 'Precision Tools' },
    { icon: '✦', label: 'Personal Consultation' },
    { icon: '✦', label: 'Hair Wash Included' },
  ]

  return (
    <section id="experience" style={{
      background: 'var(--charcoal)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '80px',
        background: 'linear-gradient(to bottom, var(--gold), transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        {/* Left: image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            paddingTop: '120%',
            background: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=90&fit=crop') center/cover`,
            borderRadius: '2px',
            position: 'relative',
          }}>
            {/* Gold border accent */}
            <div style={{
              position: 'absolute',
              inset: '-12px',
              border: '1px solid rgba(198,165,92,0.3)',
              borderRadius: '2px',
              zIndex: 0,
            }} />
          </div>
          {/* Stats overlay */}
          <div style={{
            position: 'absolute',
            bottom: '-24px',
            right: '-24px',
            background: 'var(--black)',
            border: '1px solid rgba(198,165,92,0.4)',
            padding: '24px 32px',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2.5rem',
              color: 'var(--gold)',
              fontWeight: 700,
              lineHeight: 1,
            }}>5+</div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: '6px',
            }}>Years Experience</div>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '20px',
          }}>Our Philosophy</p>

          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            color: 'var(--white)',
            marginBottom: '28px',
          }}>
            More than<br />
            <span style={{ color: 'var(--gold)' }}>a haircut</span>
          </h2>

          {/* Gold divider */}
          <div style={{ width: '50px', height: '2px', background: 'var(--gold)', marginBottom: '28px' }} />

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.9,
            color: 'rgba(245,245,245,0.7)',
            marginBottom: '24px',
            fontWeight: 300,
          }}>
            At Barber Karalidze we believe grooming is an experience, not just a service. Our barbers combine European techniques, precision tools and attention to detail to deliver clean, stylish cuts that suit your personality.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.9,
            color: 'rgba(245,245,245,0.7)',
            marginBottom: '40px',
            fontWeight: 300,
          }}>
            Every appointment includes consultation, hair wash and professional styling.
          </p>

          {/* Feature list */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {features.map(f => (
              <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>✦</span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.05em',
                  color: 'rgba(245,245,245,0.8)',
                  fontWeight: 500,
                }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience > div { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  )
}

export default Experience
