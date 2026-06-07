import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const LINES = [
  { text: 'Good systems',   muted: false },
  { text: 'outlive',        muted: false, accent: true },
  { text: 'the code',       muted: false },
  { text: 'that built them.', muted: true },
]

export default function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 0',
        background: '#0B0B0B',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(0,255,148,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          Philosophy
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {LINES.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                lineHeight: 1.0,
                color: line.accent
                  ? 'var(--accent)'
                  : line.muted
                  ? 'var(--text-subtle)'
                  : 'var(--text-primary)',
                display: 'block',
                letterSpacing: '0.02em',
              }}
            >
              {line.text}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
