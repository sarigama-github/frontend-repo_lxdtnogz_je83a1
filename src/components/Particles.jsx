import React, { useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

function random(min, max) {
  return Math.random() * (max - min) + min
}

// Simple GPU-friendly particle field using divs; reacts subtly to mouse
export default function Particles({ count = 80, color = 'rgba(129,235,210,0.35)' }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: random(-10, 110),
      y: random(-10, 110),
      size: random(1, 3.5),
      blur: random(0, 4),
      opacity: random(0.15, 0.55),
      speed: random(8, 22),
    }))
  }, [count])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useTransform(my, [0, 1], [6, -6])
  const ry = useTransform(mx, [0, 1], [-6, 6])

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      onMouseMove={(e) => {
        const { clientX, clientY, currentTarget } = e
        const rect = currentTarget.getBoundingClientRect()
        mx.set((clientX - rect.left) / rect.width)
        my.set((clientY - rect.top) / rect.height)
      }}
      style={{ perspective: 800 }}
      aria-hidden
    >
      <motion.div style={{ rotateX: rx, rotateY: ry }} className="absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: p.opacity }}
            transition={{ duration: 1.2, delay: p.id * 0.005 }}
            className="absolute rounded-full"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              background: color,
              filter: `blur(${p.blur}px)`,
              boxShadow: `0 0 ${p.size * 6}px ${color}`,
            }}
          />
        ))}
      </motion.div>

      {/* soft vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(1200px 600px at 50% 110%, rgba(56,194,188,0.08), transparent 60%)'
      }} />
    </motion.div>
  )
}
