import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
            fontSize: 72,
            fontWeight: 400,
            letterSpacing: '-2px',
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
