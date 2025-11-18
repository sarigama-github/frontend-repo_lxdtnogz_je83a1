import React from 'react'
import { motion } from 'framer-motion'

function CTA({ children, variant = 'primary' }) {
  const styles = variant === 'primary'
    ? 'bg-[#0b2a2a]/60 text-[#81ebd2] border-[#38c2bc]/40 hover:bg-[#0b2a2a]/80'
    : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10'
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative isolate px-6 md:px-7 py-3 md:py-3.5 rounded-xl border backdrop-blur-md overflow-hidden transition-colors ${styles}`}
    >
      <span className="relative z-10 font-medium tracking-wide">{children}</span>
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#38c2bc]/10 to-[#81ebd2]/10 blur-md" />
      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
        background: 'radial-gradient(400px 120px at 50% -20%, rgba(129,235,210,0.2), transparent 60%)'
      }} />
    </motion.button>
  )
}

export default function CTAGroup() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8">
      <CTA variant="primary">💚 Začni z naročnino</CTA>
      <CTA variant="secondary">⚙️ Povprašaj za custom rešitev</CTA>
    </div>
  )
}
