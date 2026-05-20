import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Javier Mayorga — Cloud Architect & Enterprise Solutions Leader'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Vertical teal bar */}
        <div style={{ width: '4px', background: '#1D9E75', flexShrink: 0 }} />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 80px',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              color: '#1D9E75',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Cloud Architect & Enterprise Solutions Leader
          </div>

          {/* Name */}
          <div
            style={{
              color: '#f9fafb',
              fontSize: '96px',
              fontWeight: 500,
              letterSpacing: '-3px',
              lineHeight: 1,
              marginBottom: '24px',
            }}
          >
            Javier Mayorga
          </div>

          {/* Domain */}
          <div
            style={{
              color: '#6b7280',
              fontSize: '20px',
              fontWeight: 400,
              letterSpacing: '0.04em',
            }}
          >
            javiermayorga.tech
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
