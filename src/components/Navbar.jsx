import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#booking' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '18px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(15,15,15,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(198,165,92,0.2)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: 'var(--font-headline)',
        fontSize: '1.1rem',
        letterSpacing: '0.15em',
        color: 'var(--gold)',
        fontWeight: 700,
      }}>
        BARBER <span style={{ color: 'var(--white)' }}>KARALIDZE</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            fontWeight: 500,
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = 'var(--white)'}
          >{l.label}</a>
        ))}
        <a href="#booking" style={{
          background: 'var(--gold)',
          color: 'var(--black)',
          padding: '10px 24px',
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          borderRadius: '2px',
          transition: 'background 0.3s, transform 0.2s',
        }}
        onMouseEnter={e => { e.target.style.background = '#d4b97a'; e.target.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.target.style.background = 'var(--gold)'; e.target.style.transform = 'translateY(0)'; }}
        >Book Now</a>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none',
        background: 'none',
        flexDirection: 'column',
        gap: '5px',
        padding: '4px',
      }} className="hamburger">
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: 'var(--gold)',
            transition: 'all 0.3s',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(15,15,15,0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          zIndex: 999,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: '24px', right: '32px',
            background: 'none', color: 'var(--gold)',
            fontSize: '1.8rem', fontWeight: 300,
          }}>✕</button>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.6rem',
              letterSpacing: '0.1em',
              color: 'var(--white)',
            }}>{l.label}</a>
          ))}
          <a href="#booking" onClick={() => setMenuOpen(false)} style={{
            background: 'var(--gold)', color: 'var(--black)',
            padding: '14px 40px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            borderRadius: '2px',
          }}>Book Now</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
