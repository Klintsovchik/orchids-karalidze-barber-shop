import React from 'react'

const Location = () => {
  return (
    <section id="location" style={{
      background: 'var(--black)',
      padding: '100px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '18px',
          }}>Find Us</p>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: 'var(--white)',
          }}>Our Location</h2>
          <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: '24px auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '40px', alignItems: 'start' }}>
          {/* Map embed */}
          <div style={{
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid rgba(198,165,92,0.2)',
            height: '420px',
            background: 'var(--charcoal)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11820.12345678!2d41.6427!3d41.6367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40678e8a7d2f5c5b%3A0x1234567890abcdef!2sBatumi%2C%20Georgia!5e0!3m2!1sen!2sge!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.85) contrast(0.9) brightness(0.85)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barber Karalidze Location"
            />
          </div>

          {/* Info */}
          <div style={{
            background: 'var(--charcoal)',
            border: '1px solid rgba(198,165,92,0.15)',
            borderRadius: '2px',
            padding: '40px 32px',
            height: '420px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1.3rem',
                color: 'var(--gold)',
                marginBottom: '8px',
                letterSpacing: '0.05em',
              }}>Barber Karalidze</h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '28px',
              }}>Batumi, Georgia</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    icon: '📍',
                    label: 'Address',
                    value: 'Batumi, Adjara, Georgia',
                  },
                  {
                    icon: '📞',
                    label: 'Phone',
                    value: '+995 555 123 456',
                  },
                  {
                    icon: '🕐',
                    label: 'Hours',
                    value: 'Mon–Sat: 10:00–20:00\nSun: 11:00–18:00',
                  },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.1rem', marginTop: '2px' }}>{item.icon}</span>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '4px',
                      }}>{item.label}</div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        color: 'var(--white)',
                        fontWeight: 400,
                        whiteSpace: 'pre-line',
                        lineHeight: 1.7,
                      }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(198,165,92,0.1)',
                border: '1px solid rgba(198,165,92,0.3)',
                borderRadius: '20px',
                padding: '8px 16px',
                marginBottom: '16px',
              }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>🚶</span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--gold)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}>Walk-ins welcome</span>
              </div>

              <a
                href="https://goo.gl/maps/batumi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'transparent',
                  border: '1px solid rgba(198,165,92,0.35)',
                  color: 'var(--gold)',
                  padding: '12px 20px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(198,165,92,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #location > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Location
