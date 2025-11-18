import React from 'react'
import { motion } from 'framer-motion'

export default function CopyBlock({ lines = [], align = 'center' }) {
  return (
    <div className={`relative z-10 max-w-4xl mx-auto px-6 text-${align}`}> 
      {lines.map((line, idx) => (
        <motion.p
          key={idx}
          className={`text-slate-100/95 leading-tight ${idx === 0 ? 'text-4xl md:text-6xl font-light' : 'text-lg md:text-2xl text-slate-300/90 mt-4'}`}
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: idx * 0.2 }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  )
}
