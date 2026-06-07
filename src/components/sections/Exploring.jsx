import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import { exploring } from '../../data/skills'

const ICONS = {
  ai:      '◎',
  arduino: '⚡',
  gym:     '◉',
  music:   '♪',
  sketch:  '✎',
}

export default function Exploring() {
  return (
    <SectionWrapper id="exploring">
      <div className="container">
        <SectionLabel index={4} title="EXPLORING" />
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          maxWidth: 520,
          marginBottom: 52,
          marginTop: -32,
        }}>
          Outside of work, I stay curious. These are the things I'm
          actively digging into — for fun, growth, or just because.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 2,
        }}>
          {exploring.map((item, i) => (
            <ExploreCard key={item.id} item={item} icon={ICONS[item.id]} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

function ExploreCard({ item, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4, borderColor: 'rgba(0,255,148,0.25)' }}
      style={{
        padding: '28px 24px',
        border: '1px solid var(--border)',
        background: 'var(--bg-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        transition: 'all 0.2s',
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: 'monospace',
        fontSize: '1.5rem',
        color: 'var(--accent)',
        opacity: 0.7,
        lineHeight: 1,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          marginBottom: 6,
        }}>
          {item.label}
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          lineHeight: 1.55,
        }}>
          {item.note}
        </div>
      </div>
    </motion.div>
  )
}
