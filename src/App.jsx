import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSpline from './components/HeroSpline'
import Particles from './components/Particles'
import Chapter from './components/Chapter'
import CopyBlock from './components/CopyBlock'
import CTAGroup from './components/CTAGroup'

function DividerWave({ progress }) {
  const y = useTransform(progress, [0, 1], [80, -80])
  return (
    <motion.div style={{ y }} className="pointer-events-none absolute inset-x-0 -bottom-20 h-40" aria-hidden>
      <div className="w-full h-full" style={{
        background:
          'radial-gradient(60% 80px at 50% 0%, rgba(56,194,188,0.25), transparent 70%)'
      }} />
    </motion.div>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden snap-y snap-mandatory" style={{
      fontFamily: 'Poppins, Inter, ui-sans-serif, system-ui',
      background: 'linear-gradient(180deg, #0f1417 0%, #1c2429 100%)'
    }}>
      {/* global decorative particles */}
      <Particles />

      {/* CHAPTER 1 — The Awakening */}
      <Chapter id="chapter-1" title="The Awakening">
        <motion.div className="relative w-full" style={{ scale: bgScale, opacity: bgOpacity }}>
          <HeroSpline />
          <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-center pb-10">
            <div className="text-center">
              <CopyBlock lines={[
                'Meet your perfect booking buddy.',
                'Pametna aplikacija, ki dela namesto tebe.'
              ]} />
              <CTAGroup />
            </div>
          </div>
          <DividerWave progress={scrollYProgress} />
        </motion.div>
      </Chapter>

      {/* CHAPTER 2 — Old World → New Order */}
      <Chapter id="chapter-2" title="The Old World → The New Order">
        <div className="relative w-full max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div key={i} className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  initial={{ filter: 'grayscale(1) blur(2px)', opacity: 0.6 }}
                  whileInView={{ filter: 'grayscale(0) blur(0px)', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.06 }}
                  style={{
                    background:
                      'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 6px, transparent 6px 12px)'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <CopyBlock lines={[
              'Dolga leta so bile profesionalne aplikacije drage, zapletene in dosegljive le velikim.',
              'Zdaj pa — BooklyMate.'
            ]} />
          </div>
        </div>
      </Chapter>

      {/* CHAPTER 3 — Mastering Control (Features in Motion) */}
      <Chapter id="chapter-3" title="Mastering Control">
        <div className="relative w-full">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-6 px-6 py-10 min-w-max">
              {[
                { title: '📅 Calendar', desc: 'Create a booking with a drag — ripple of mint light.' },
                { title: '👤 Client profile', desc: 'Data layers with subtle holographic notes.' },
                { title: '🔔 Notification', desc: 'A light pulse propagates through space.' },
                { title: '🌴 Vacation', desc: 'Freeze time then reset with bright return.' },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="w-[80vw] md:w-[42vw] lg:w-[34vw] aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#0b2a2a]/40 to-[#0b2a2a]/10 border border-[#38c2bc]/20 shadow-[0_10px_60px_-20px_rgba(56,194,188,0.25)] relative overflow-hidden"
                >
                  <div className="absolute inset-0" style={{
                    background:
                      'radial-gradient(400px 200px at 20% 0%, rgba(56,194,188,0.18), transparent 60%)'
                  }} />
                  <div className="p-5 relative z-10">
                    <h3 className="text-[#81ebd2] text-xl font-medium tracking-wide">{card.title}</h3>
                    <p className="text-slate-300/90 mt-2">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="px-6">
            <p className="text-center text-slate-400/80">Kmalu: davčna integracija · spletne rezervacije · real-time chat.</p>
          </div>
        </div>
      </Chapter>

      {/* CHAPTER 4 — Decision Split */}
      <Chapter id="chapter-4" title="Decision Split">
        <div className="relative w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-[#81ebd2] text-2xl mb-2">💚 Naročnina — 50 €/mesec (brez DDV)</h3>
              <ul className="text-slate-300/90 space-y-2">
                <li>Do 3 uporabnike · 1 lokacija</li>
                <li>Personalizacija barv in logotipa</li>
                <li>Brez začetnega plačila</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-slate-100 text-2xl mb-2">⚙️ Custom rešitev — od 999 €</h3>
              <ul className="text-slate-300/90 space-y-2">
                <li>Poln UX/UI dizajn, integracije, vzdrževanje 50 €/mesec</li>
                <li>Plačilni načrt 12×100 € ali 24×60 €</li>
              </ul>
            </motion.div>
          </div>
          <CTAGroup />
        </div>
      </Chapter>

      {/* CHAPTER 5 — Immersion (Live App Loop) */}
      <Chapter id="chapter-5" title="Immersion">
        <div className="relative w-full max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/2 p-4 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.8)]">
            <div className="aspect-[9/19] w-full rounded-[22px] bg-black/70 border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-8">
                  <p className="text-[#81ebd2] text-xl mb-2">BooklyMate Live</p>
                  <p className="text-slate-300/90">Autonomous 10s loop: calendar → service → confirm → notify → dashboard.</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0" style={{
                background: 'radial-gradient(300px 140px at 50% 0%, rgba(56,194,188,0.14), transparent 60%)'
              }} />
            </div>
          </motion.div>
          <div className="mt-8">
            <CopyBlock lines={['Poglej, kako tvoj salon oživi z BooklyMate.', 'Stranke se naročajo 24/7 — ti imaš popoln pregled.', 'Experience it in motion.']} />
          </div>
        </div>
      </Chapter>

      {/* CHAPTER 6 — The Revelation */}
      <Chapter id="chapter-6" title="The Revelation">
        <CopyBlock lines={[
          'BooklyMate ni le aplikacija.',
          'Je tvoj digitalni pomočnik, ki ti prihrani čas, zmanjša stres in te poveže s tvojimi strankami.'
        ]} />
        <CTAGroup />
      </Chapter>

      {/* CHAPTER 7 — Serenity */}
      <Chapter id="chapter-7" title="Serenity">
        <div className="text-center">
          <div className="text-3xl md:text-5xl text-slate-100/90 tracking-wide">BOOKLYMATE</div>
          <p className="mt-6 text-slate-400">© 2025 BooklyMate · Pogoji · Zasebnost · Kontakt</p>
          <p className="mt-2 text-slate-500">“Meet your perfect booking buddy.”</p>
        </div>
      </Chapter>
    </main>
  )
}
