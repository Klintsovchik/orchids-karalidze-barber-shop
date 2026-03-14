import React from 'react'

const Barber = () => {
  return (
    <section id="barber" style={{
      background: 'var(--charcoal)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle diagonal gold lines */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        border: '1px solid rgba(198,165,92,0.06)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
        {/* Content left */}
        <div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '20px',
          }}>Behind the Chair</p>

          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: 'var(--white)',
            lineHeight: 1.2,
            marginBottom: '8px',
          }}>Giorgi</h2>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--gold)',
            lineHeight: 1.2,
            marginBottom: '6px',
          }}>Karalidze</h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '32px',
          }}>Master Barber</p>

          <div style={{ width: '50px', height: '2px', background: 'var(--gold)', marginBottom: '28px' }} />

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.9,
            color: 'rgba(245,245,245,0.7)',
            marginBottom: '20px',
            fontWeight: 300,
          }}>
            Years of experience in modern men's grooming. Known for clean fades, expert beard shaping and genuine personal consultation.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.9,
            color: 'rgba(245,245,245,0.7)',
            marginBottom: '36px',
            fontWeight: 300,
          }}>
            His goal: make every haircut match your face shape, personality and lifestyle. Not just a cut — a complete transformation.
          </p>

          {/* Specialties */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Clean Fades', 'Beard Shaping', 'Personal Consultation', 'Skin Care', 'Hot Towel Shave'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--gold)',
                border: '1px solid rgba(198,165,92,0.35)',
                borderRadius: '20px',
                padding: '6px 14px',
                textTransform: 'uppercase',
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Image right */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            paddingTop: '125%',
            background: `url('/images/crop.jpg') center top/cover`,
            borderRadius: '2px',
            position: 'relative',
          }} />
          {/* Decorative corner */}
          <div style={{
            position: 'absolute',
            bottom: '-16px',
            left: '-16px',
            width: '80px',
            height: '80px',
            border: '2px solid var(--gold)',
            borderRight: 'none',
            borderTop: 'none',
            opacity: 0.4,
          }} />
          <div style={{
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            width: '80px',
            height: '80px',
            border: '2px solid var(--gold)',
            borderLeft: 'none',
            borderBottom: 'none',
            opacity: 0.4,
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #barber > div { grid-template-columns: 1fr !important; gap: 50px !important; }
          #barber > div > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  )
}

export default Barber
