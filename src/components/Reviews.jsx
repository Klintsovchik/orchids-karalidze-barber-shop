import React, { useState } from 'react'

const reviews = [
  {
    name: 'Luka M.',
    text: 'Very good barber, very friendly. Best guy in Batumi. Hair wash and massage included. Incredible service!',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    name: 'Tornike B.',
    text: 'Great barber. I\'m very satisfied and impressed with the service. The atmosphere is luxurious and calm.',
    rating: 5,
    date: '1 month ago',
  },
  {
    name: 'Alex K.',
    text: 'Finally a barbershop in Batumi with European quality. The fade was perfect and pricing was completely transparent.',
    rating: 5,
    date: '3 weeks ago',
  },
  {
    name: 'David G.',
    text: 'Giorgi is a real professional. Clean scissors, great technique. My beard has never looked this good.',
    rating: 5,
    date: '1 month ago',
  },
  {
    name: 'James W.',
    text: 'I\'m a tourist passing through Batumi. Found this place and couldn\'t be happier. Will come back every visit!',
    rating: 5,
    date: '3 months ago',
  },
]

const Stars = ({ count = 5 }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: '#FFC940', fontSize: '0.9rem' }}>★</span>
    ))}
  </div>
)

const Reviews = () => {
  const [active, setActive] = useState(0)

  return (
    <section id="reviews" style={{
      background: 'var(--black)',
      padding: '100px 40px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '18px',
          }}>What Clients Say</p>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: 'var(--white)',
          }}>Client Reviews</h2>
          {/* Google badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '22px',
            padding: '8px 18px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '30px',
          }}>
            <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M43.6 20H24v8h11.3c-1 5.3-5.6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6-6C34.1 5.6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10.7 0 19.6-7.7 19.6-20 0-1.3-.1-2.7-.3-4z"/>
              <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.4 16.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l6-6C34.1 5.6 29.3 4 24 4c-7.6 0-14.1 4.4-17.7 10.7z"/>
              <path fill="#FBBC05" d="M24 44c5.2 0 9.9-1.8 13.5-4.8l-6.3-5.2c-1.9 1.3-4.4 2-7.2 2-5.6 0-10.3-3.8-11.9-8.9l-6.6 5.1C8.1 39.5 15.5 44 24 44z"/>
              <path fill="#EA4335" d="M43.6 20H24v8h11.3c-.9 4.5-4.1 7.4-8 8.6l6.3 5.2c3.6-3.3 6.4-8.1 6.4-14.8 0-1.3-.1-2.7-.4-4z"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(245,245,245,0.65)' }}>
              Verified Google Reviews
            </span>
          </div>
          <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: '24px auto 0' }} />
        </div>

        {/* Reviews grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: 'var(--charcoal)',
              border: '1px solid rgba(198,165,92,0.12)',
              borderRadius: '2px',
              padding: '36px 30px',
              position: 'relative',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(198,165,92,0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(198,165,92,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontFamily: 'Georgia, serif',
                fontSize: '4rem',
                color: 'rgba(198,165,92,0.12)',
                lineHeight: 1,
                userSelect: 'none',
              }}>"</div>

              <Stars count={r.rating} />

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                lineHeight: 1.8,
                color: 'rgba(245,245,245,0.75)',
                margin: '18px 0 24px',
                fontStyle: 'italic',
                fontWeight: 300,
              }}>"{r.text}"</p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--gold)',
                  fontWeight: 600,
                }}>{r.name}</span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                }}>{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
