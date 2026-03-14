import React, { useState } from 'react'

const services = [
  {
    icon: '✂',
    title: 'Haircut',
    description: 'Precision haircut + wash + professional styling. Tailored to your face shape and lifestyle.',
    price: 'From 40 GEL',
    highlight: false,
  },
  {
    icon: '🪒',
    title: 'Beard Trim',
    description: 'Expert beard shaping, line-up and conditioning. Clean, defined results every time.',
    price: 'From 25 GEL',
    highlight: false,
  },
  {
    icon: '👑',
    title: 'Hair + Beard',
    description: 'Full grooming experience. Complete haircut and beard combo for the ultimate transformation.',
    price: 'From 70 GEL',
    highlight: true,
  },
  {
    icon: '🌿',
    title: 'Facial Care',
    description: 'Skin cleansing, exfoliation + relaxing facial massage. Look and feel refreshed.',
    price: 'From 50 GEL',
    highlight: false,
  },
  {
    icon: '🔥',
    title: 'Hot Towel Shave',
    description: 'Classic straight razor shave with hot towel prep. The ultimate luxury shaving experience.',
    price: 'From 45 GEL',
    highlight: false,
  },
]

const Services = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" style={{
      background: 'var(--black)',
      padding: '100px 40px',
      position: 'relative',
    }}>
      {/* Price transparency badge */}
      <div style={{
        position: 'absolute',
        top: '40px',
        right: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(198,165,92,0.1)',
        border: '1px solid rgba(198,165,92,0.35)',
        borderRadius: '30px',
        padding: '10px 20px',
      }}>
        <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>✔</span>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: 'var(--gold)',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}>Clear Pricing. No Surprises.</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '18px',
          }}>What We Offer</p>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: 'var(--white)',
          }}>Our Services</h2>
          <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: '24px auto 0' }} />
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
        }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: s.highlight
                  ? 'linear-gradient(145deg, rgba(198,165,92,0.15), rgba(198,165,92,0.05))'
                  : (hovered === i ? 'var(--charcoal)' : 'rgba(30,30,30,0.5)'),
                border: s.highlight
                  ? '1px solid rgba(198,165,92,0.5)'
                  : `1px solid ${hovered === i ? 'rgba(198,165,92,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '2px',
                padding: '40px 28px',
                position: 'relative',
                transition: 'all 0.35s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 16px 40px rgba(0,0,0,0.4)' : 'none',
                cursor: 'default',
              }}
            >
              {s.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--gold)',
                  color: 'var(--black)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'nowrap',
                }}>Most Popular</div>
              )}

              <div style={{
                fontSize: '2rem',
                marginBottom: '20px',
                display: 'block',
              }}>{s.icon}</div>

              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: s.highlight ? 'var(--gold)' : 'var(--white)',
                marginBottom: '14px',
                letterSpacing: '0.06em',
              }}>{s.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.84rem',
                lineHeight: 1.7,
                color: 'rgba(245,245,245,0.6)',
                marginBottom: '28px',
                fontWeight: 300,
              }}>{s.description}</p>

              <div style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1.15rem',
                color: 'var(--gold)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                borderTop: '1px solid rgba(198,165,92,0.2)',
                paddingTop: '18px',
              }}>{s.price}</div>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          marginTop: '40px',
          letterSpacing: '0.05em',
        }}>
          * Exact price may vary based on hair length and complexity. Always confirmed before service begins.
        </p>
      </div>
    </section>
  )
}

export default Services
