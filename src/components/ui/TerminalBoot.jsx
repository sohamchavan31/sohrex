import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = [
  { text: '> initializing system...',     delay: 0 },
  { text: '> loading modules...',         delay: 600 },
  { text: '> mounting interface...',      delay: 1200 },
  { text: '> identity: Soham_Chavan',      delay: 1800, accent: true },
  { text: '> status: SYSTEM READY',       delay: 2400, accent: true },
]

export default function TerminalBoot({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
        if (i === LINES.length - 1) {
          setTimeout(() => {
            setDone(true)
            setTimeout(onComplete, 600)
          }, 700)
        }
      }, line.delay)
    })
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#0B0B0B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            {visibleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: line.accent ? 'var(--accent)' : 'var(--text-muted)',
                  marginBottom: '6px',
                  letterSpacing: '0.05em',
                }}
              >
                {line.text}
                {i === visibleLines.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.7 }}
                    style={{ marginLeft: 4, color: 'var(--accent)' }}
                  >
                    █
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
