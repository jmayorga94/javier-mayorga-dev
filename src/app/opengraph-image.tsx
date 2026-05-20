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
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Name — the hero */}
        <div
          style={{
            color: '#f9fafb',
            fontSize: '96px',
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: '-2px',
          }}
        >
          Javier Mayorga
        </div>

        {/* Teal divider line — site signature */}
        <div
          style={{
            width: '64px',
            height: '2px',
            background: '#1D9E75',
            marginTop: '32px',
            marginBottom: '32px',
          }}
        />

        {/* Role */}
        <div
          style={{
            color: '#1D9E75',
            fontSize: '28px',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          Cloud Architect &amp; Enterprise Solutions Leader
        </div>
      </div>
    ),
    { ...size }
  )
}
