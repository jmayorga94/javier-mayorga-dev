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
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            color: '#1D9E75',
            fontSize: '72px',
            fontWeight: 700,
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          JM
        </div>
        <div
          style={{
            width: '48px',
            height: '2px',
            background: '#1D9E75',
            marginBottom: '40px',
          }}
        />
        <div
          style={{
            color: '#f9fafb',
            fontSize: '64px',
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Javier Mayorga
        </div>
        <div
          style={{
            color: '#9ca3af',
            fontSize: '28px',
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          Cloud Architect &amp; Enterprise Solutions Leader
        </div>
      </div>
    ),
    { ...size }
  )
}
