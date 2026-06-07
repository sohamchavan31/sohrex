import { motion } from 'framer-motion'
import Scene from '../canvas/Scene'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        background: '#0B0B0B',
      }}
    >
      {/* ── Layer 1: 3D Canvas ─────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Scene />
      </div>

      {/* ── Layer 2: Dark vignette overlay ────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'radial-gradient(ellipse at center, rgba(11,11,11,0.45) 0%, rgba(11,11,11,0.82) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Layer 3: UI ────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Left — vertical name */}
        <motion.div
          {...fadeUp(0.8)}
          style={{
            position: 'absolute',
            left: 36,
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'center center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Soham Chavan
        </motion.div>

        {/* Right — section hints */}
        <motion.div
          {...fadeUp(0.9)}
          style={{
            position: 'absolute',
            right: 36,
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <span>Work</span>
          <span style={{ color: 'var(--accent)' }}>·</span>
          <span>Contact</span>
        </motion.div>

        {/* Center screen panel */}
        <div
          style={{
            width: 'min(680px, 90vw)',
            padding: '52px 56px',
            background: 'rgba(14, 14, 14, 0.55)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.06)',
            position: 'relative',
          }}
        >
          {/* Corner accents */}
          <CornerAccent pos="top-left" />
          <CornerAccent pos="top-right" />
          <CornerAccent pos="bottom-left" />
          <CornerAccent pos="bottom-right" />

          {/* System label */}
          <motion.div {...fadeUp(0.3)} style={{ marginBottom: 28 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}
            >
              {'>'} Backend Developer
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            {...fadeUp(0.45)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(4rem, 10vw, 7.5rem)',
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              color: '#F0F0F0',
              marginBottom: 12,
            }}
          >
            I BUILD
            <br />
            <span
              style={{
                color: 'var(--accent)',
                textShadow: '0 0 40px rgba(0,255,148,0.3)',
              }}
            >
              THINGS
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.6)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.25em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: 40,
            }}
          >
            Software &nbsp;·&nbsp; Systems &nbsp;·&nbsp; Self
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.75)}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}
            >
              View Work
              <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-ghost"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}
            >
              <DownloadIcon />
              Resume
            </a>
          </motion.div>

          {/* Bottom status bar */}
          <motion.div
            {...fadeUp(0.9)}
            style={{
              marginTop: 44,
              paddingTop: 20,
              borderTop: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
            }}
          >
            <StatusDot />
            <span>Available for opportunities</span>
            <span style={{ marginLeft: 'auto', color: 'var(--text-subtle)' }}>2025</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom label */}
      <motion.div
        {...fadeUp(1.1)}
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.58rem',
            letterSpacing: '0.2em',
            color: 'var(--text-subtle)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'var(--accent)', opacity: 0.5 }}
        />
      </motion.div>
    </section>
  )
}

// ── Helpers ──────────────────────────────────────────────

function CornerAccent({ pos }) {
  const isTop    = pos.startsWith('top')
  const isLeft   = pos.endsWith('left')
  const size     = 14

  return (
    <div
      style={{
        position: 'absolute',
        top:    isTop    ? 0 : 'auto',
        bottom: !isTop   ? 0 : 'auto',
        left:   isLeft   ? 0 : 'auto',
        right:  !isLeft  ? 0 : 'auto',
        width:  size,
        height: size,
        borderTop:    isTop    ? `1px solid var(--accent)` : 'none',
        borderBottom: !isTop   ? `1px solid var(--accent)` : 'none',
        borderLeft:   isLeft   ? `1px solid var(--accent)` : 'none',
        borderRight:  !isLeft  ? `1px solid var(--accent)` : 'none',
        opacity: 0.6,
      }}
    />
  )
}

function StatusDot() {
  return (
    <motion.div
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--accent)',
        boxShadow: '0 0 6px var(--accent)',
        flexShrink: 0,
      }}
    />
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
