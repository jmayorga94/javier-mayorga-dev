import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
        }}
      >
        <div
          style={{
            color: '#f9fafb',
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          JM
        </div>
        <div
          style={{
            width: 14,
            height: 1,
            background: '#1D9E75',
            marginTop: 3,
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
