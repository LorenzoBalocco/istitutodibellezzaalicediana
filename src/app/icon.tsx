import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2C2825',
        }}
      >
        <span
          style={{
            color: '#E8D5D0',
            fontFamily: 'Georgia, serif',
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          AD
        </span>
      </div>
    ),
    { ...size }
  )
}
