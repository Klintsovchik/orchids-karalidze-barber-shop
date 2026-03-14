import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Cinematic background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(
            135deg,
            rgba(15,15,15,0.92) 0%,
            rgba(30,30,30,0.75) 40%,
            rgba(15,15,15,0.88) 100%
          ),
          url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1920&q=90&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transform: loaded ? 'scale(1)' : 'scale(1.05)',
        transition: 'transform 1.5s ease',
      }} />

      {/* Gold diagonal accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '15%',
        width: '1px',
        height: '40%',
        background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
        opacity: 0.6,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '20%',
        width: '1px',
        height: '35%',
        background: 'linear-gradient(to top, transparent, var(--gold), transparent)',
        opacity: 0.4,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: '800px',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 1s ease 0.3s',
      }}>
        {/* Gold line top */}
        <div style={{
          width: '60px',
          height: '1px',
          background: 'var(--gold)',
          margin: '0 auto 24px',
        }} />

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '20px',
          fontWeight: 500,
        }}>
          Batumi, Georgia
        </p>

        <h1 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 700,
          letterSpacing: '0.08em',
          lineHeight: 1.1,
          color: 'var(--white)',
          marginBottom: '12px',
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        }}>
          BARBER
          <br />
          <span style={{ color: 'var(--gold)' }}>KARALIDZE</span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
          letterSpacing: '0.08em',
          color: 'rgba(245,245,245,0.8)',
          marginBottom: '8px',
          fontWeight: 300,
        }}>
          European-quality grooming in Batumi
        </p>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
          letterSpacing: '0.05em',
          color: 'rgba(245,245,245,0.55)',
          marginBottom: '48px',
          fontWeight: 300,
          fontStyle: 'italic',
        }}>
          Precision cuts. Perfect fades. Relaxing experience.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a href="#booking" style={{
            display: 'inline-block',
            background: 'var(--gold)',
            color: 'var(--black)',
            padding: '16px 36px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--gold-light)'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px rgba(198,165,92,0.35)'; }}
          onMouseLeave={e => { e.target.style.background = 'var(--gold)'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
          >
            Book Appointment
          </a>
          <a href="#services" style={{
            display: 'inline-block',
            background: 'transparent',
            color: 'var(--white)',
            padding: '16px 36px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            border: '1px solid rgba(245,245,245,0.4)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(245,245,245,0.4)'; e.target.style.color = 'var(--white)'; }}
          >
            View Services
          </a>
        </div>

        {/* Trust badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(198,165,92,0.25)',
          borderRadius: '30px',
          padding: '10px 22px',
        }}>
          <span style={{ fontSize: '1rem' }}>⭐</span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            letterSpacing: '0.05em',
            color: 'rgba(245,245,245,0.75)',
          }}>Loved by locals and travelers</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.5,
        animation: 'bounce 2s infinite',
      }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}

export default Hero
