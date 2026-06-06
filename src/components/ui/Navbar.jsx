import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'Work',      href: '#projects' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 36px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(11,11,11,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.15em',
          color: 'var(--accent)',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}
      >
        SC<span style={{ color: 'var(--text-muted)' }}>_</span>
      </a>

      {/* Links */}
      <div style={{ display: 'flex', gap: 32 }}>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
