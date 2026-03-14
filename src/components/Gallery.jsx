import React, { useState } from 'react'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=600&q=85&fit=crop',
    caption: 'Precision Fade',
  },
  {
    url: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=600&q=85&fit=crop',
    caption: 'Beard Shaping',
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=85&fit=crop',
    caption: 'Classic Cut',
  },
  {
    url: 'https://images.unsplash.com/photo-1581881067879-6e5f43f1fd3a?w=600&q=85&fit=crop',
    caption: 'Modern Style',
  },
  {
    url: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=85&fit=crop',
    caption: 'Hot Towel Shave',
  },
  {
    url: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=600&q=85&fit=crop',
    caption: 'Textured Crop',
  },
]

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" style={{
      background: 'var(--black)',
      padding: '100px 40px',
    }}>
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
          }}>Our Work</p>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: 'var(--white)',
          }}>Gallery</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            marginTop: '16px',
            fontWeight: 300,
          }}>Precision cuts. Expert fades. Real results.</p>
          <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: '24px auto 0' }} />
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
        }}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(img)}
              style={{
                position: 'relative',
                paddingTop: '115%',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            >
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'scale(1.06)'
                  e.target.nextSibling.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'scale(1)'
                  e.target.nextSibling.style.opacity = '0'
                }}
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,15,15,0.8) 0%, rgba(15,15,15,0.1) 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
                opacity: 0,
                transition: 'opacity 0.4s',
                pointerEvents: 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 600,
                }}>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            marginBottom: '20px',
          }}>Follow our work on Instagram for before & after transformations</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid rgba(198,165,92,0.35)',
            color: 'var(--gold)',
            padding: '12px 28px',
            borderRadius: '2px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(198,165,92,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @BarberKaralidze
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <img
            src={lightbox.url}
            alt={lightbox.caption}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: '2px' }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '32px',
              background: 'none',
              color: 'var(--gold)',
              fontSize: '2rem',
              fontWeight: 300,
            }}
          >✕</button>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          #gallery .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}

export default Gallery
