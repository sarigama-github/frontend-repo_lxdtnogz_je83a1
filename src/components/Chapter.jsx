import React from 'react'
import { motion } from 'framer-motion'

export default function Chapter({ id, children, title }) {
  return (
    <section
      id={id}
      className="relative w-full min-h-[120svh] snap-start flex items-center justify-center"
      aria-label={title}
    >
      {/* gradient background per spec */}
      <div className="absolute inset-0 -z-0" style={{
        background: 'linear-gradient(180deg, #0f1417 0%, #1c2429 100%)'
      }} />
      {children}
    </section>
  )
}
