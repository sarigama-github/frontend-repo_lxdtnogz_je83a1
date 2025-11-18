import React from 'react'
import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative w-full h-[90svh] md:h-[120svh]">
      <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      {/* glass gradient overlay for depth; don't block interaction */}
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(800px 400px at 50% 20%, rgba(129,235,210,0.08), transparent 60%), linear-gradient(180deg, rgba(15,20,23,0.2) 0%, rgba(28,36,41,0.6) 60%, rgba(28,36,41,0.9) 100%)'
      }} />
    </div>
  )
}
