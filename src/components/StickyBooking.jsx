import React, { useState, useEffect } from 'react'

const StickyBooking = () => {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const whatsappMsg = encodeURIComponent('Hello! I would like to book an appointment at Barber Karalidze.')

  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      right: '28px',
      zIndex: 998,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '12px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.4s ease',
      pointerEvents: visible ? 'all' : 'none',
    }}>
      {/* Expanded options */}
      {expanded && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'flex-end',
          animation: 'slideUp 0.3s ease',
        }}>
          <a
            href={`https://wa.me/995555123456?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: '#25D366',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '30px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
              textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="tel:+995555123456"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--charcoal)',
              color: 'var(--white)',
              padding: '12px 20px',
              borderRadius: '30px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 700,
              border: '1px solid rgba(198,165,92,0.4)',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .88h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </a>
        </div>
      )}

      {/* Main FAB button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: expanded ? 'var(--charcoal)' : 'var(--gold)',
          color: expanded ? 'var(--gold)' : 'var(--black)',
          border: expanded ? '1px solid var(--gold)' : 'none',
          borderRadius: '30px',
          padding: '14px 28px',
          fontFamily: 'var(--font-body)',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: expanded ? 'none' : '0 8px 30px rgba(198,165,92,0.4)',
          transition: 'all 0.3s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => { if (!expanded) e.currentTarget.style.transform = 'scale(1.04)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {expanded ? (
          <>✕ Close</>
        ) : (
          <>✂ Book Now</>
        )}
      </button>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default StickyBooking
