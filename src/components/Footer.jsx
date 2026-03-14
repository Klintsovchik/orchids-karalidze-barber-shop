import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(198,165,92,0.15)',
      padding: '60px 40px 30px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '60px',
          marginBottom: '50px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.2rem',
              letterSpacing: '0.12em',
              color: 'var(--gold)',
              fontWeight: 700,
              marginBottom: '16px',
            }}>
              BARBER <span style={{ color: 'var(--white)' }}>KARALIDZE</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              lineHeight: 1.8,
              color: 'rgba(245,245,245,0.5)',
              fontWeight: 300,
              maxWidth: '280px',
            }}>
              European-quality grooming in the heart of Batumi, Georgia. Precision cuts, expert fades, and luxurious service.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px',
              fontWeight: 600,
            }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#booking' },
              ].map(l => (
                <a key={l.label} href={l.href} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'rgba(245,245,245,0.55)',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,245,245,0.55)'}
                >{l.label}</a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px',
              fontWeight: 600,
            }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '14px' }}>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                border: '1px solid rgba(198,165,92,0.3)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(245,245,245,0.6)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(198,165,92,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(198,165,92,0.3)'; e.currentTarget.style.color = 'rgba(245,245,245,0.6)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Google Maps */}
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                border: '1px solid rgba(198,165,92,0.3)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(245,245,245,0.6)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(198,165,92,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(198,165,92,0.3)'; e.currentTarget.style.color = 'rgba(245,245,245,0.6)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/995555123456" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                border: '1px solid rgba(198,165,92,0.3)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(245,245,245,0.6)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(198,165,92,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(198,165,92,0.3)'; e.currentTarget.style.color = 'rgba(245,245,245,0.6)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'rgba(245,245,245,0.3)',
          }}>
            © {year} Barber Karalidze. All rights reserved.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'rgba(245,245,245,0.4)',
              letterSpacing: '0.05em',
            }}>Open Today</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
