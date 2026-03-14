import React from 'react'

const Booking = () => {
  const phone = '+995 555 123 456'
  const whatsappMsg = encodeURIComponent('Hello! I would like to book an appointment at Barber Karalidze.')

  return (
    <section id="booking" style={{
      background: 'var(--charcoal)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at center, rgba(198,165,92,0.07) 0%, transparent 65%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Gold horizontal lines */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)', opacity: 0.3 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)', opacity: 0.3 }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        {/* Scissors icon */}
        <div style={{
          width: '60px',
          height: '60px',
          border: '1px solid rgba(198,165,92,0.4)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
          fontSize: '1.5rem',
        }}>✂</div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '18px',
        }}>Reserve Your Spot</p>

        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 600,
          color: 'var(--white)',
          lineHeight: 1.2,
          marginBottom: '24px',
        }}>
          Book Your<br />
          <span style={{ color: 'var(--gold)' }}>Grooming Session</span>
        </h2>

        <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: '0 auto 28px' }} />

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          lineHeight: 1.8,
          color: 'rgba(245,245,245,0.65)',
          marginBottom: '50px',
          fontWeight: 300,
        }}>
          Easy booking via WhatsApp or phone call. Walk-ins are also welcome — we'll always do our best to accommodate you.
        </p>

        {/* Booking buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
          <a
            href={`https://wa.me/995555123456?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#25D366',
              color: '#fff',
              padding: '16px 36px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(37,211,102,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </a>

          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'transparent',
              color: 'var(--white)',
              padding: '16px 36px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              border: '1px solid rgba(245,245,245,0.3)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,245,245,0.3)'; e.currentTarget.style.color = 'var(--white)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .88h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </a>
        </div>

        {/* Phone number display */}
        <div style={{
          display: 'inline-block',
          fontFamily: 'var(--font-headline)',
          fontSize: '1.5rem',
          color: 'var(--gold)',
          letterSpacing: '0.1em',
          marginBottom: '20px',
        }}>{phone}</div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Mon – Sat', value: '10:00 – 20:00' },
            { label: 'Sunday', value: '11:00 – 18:00' },
            { label: 'Walk-ins', value: 'Welcome' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '6px',
              }}>{item.label}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--white)',
                fontWeight: 500,
              }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Booking
