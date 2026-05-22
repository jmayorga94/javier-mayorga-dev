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
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Top-left corner bracket */}
        <div
          style={{
            position: 'absolute',
            top: 32,
            left: 32,
            width: 20,
            height: 20,
            borderTop: '2px solid #1D9E75',
            borderLeft: '2px solid #1D9E75',
            display: 'flex',
          }}
        />
        {/* Top-right corner bracket */}
        <div
          style={{
            position: 'absolute',
            top: 32,
            right: 32,
            width: 20,
            height: 20,
            borderTop: '2px solid #1D9E75',
            borderRight: '2px solid #1D9E75',
            display: 'flex',
          }}
        />
        {/* Bottom-left corner bracket */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: 32,
            width: 20,
            height: 20,
            borderBottom: '2px solid #1D9E75',
            borderLeft: '2px solid #1D9E75',
            display: 'flex',
          }}
        />
        {/* Bottom-right corner bracket */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            right: 32,
            width: 20,
            height: 20,
            borderBottom: '2px solid #1D9E75',
            borderRight: '2px solid #1D9E75',
            display: 'flex',
          }}
        />

        {/* JM monogram */}
        <div
          style={{
            color: '#f9fafb',
            fontSize: 120,
            fontWeight: 500,
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          JM
        </div>

        {/* Teal separator */}
        <div
          style={{
            width: 48,
            height: 2,
            background: '#1D9E75',
            marginTop: 20,
            marginBottom: 20,
            display: 'flex',
          }}
        />

        {/* Role label — pre-uppercased; 0.14em × 12px ≈ 2px letter-spacing */}
        <div
          style={{
            color: '#1D9E75',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '2px',
          }}
        >
          CLOUD ARCHITECT & ENTERPRISE SOLUTIONS LEADER
        </div>
      </div>
    ),
    { ...size }
  )
}
