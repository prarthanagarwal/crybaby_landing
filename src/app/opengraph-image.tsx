import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'CryBaby — Track, Understand & Celebrate Your Tears'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #dfe5f2 0%, #88aaee 50%, #dfe5f2 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: '24px',
            border: '4px solid #000',
            boxShadow: '8px 6px 0px 0px #000',
            padding: '60px 80px',
            maxWidth: '1000px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '24px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://crybaby.app/images/logo.png"
              alt="CryBaby Logo"
              width={120}
              height={120}
              style={{ borderRadius: '20px' }}
            />
            <span style={{ fontSize: '72px', fontWeight: 800, color: '#000' }}>
              CryBaby
            </span>
          </div>
          <p
            style={{
              fontSize: '28px',
              color: '#555',
              textAlign: 'center',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '700px',
            }}
          >
            Track, understand, and celebrate your emotional moments. Available on iOS & Android.
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
