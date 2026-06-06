import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import { skillGroups } from '../../data/skills'

const GROUP_ICONS = {
  backend:  '⚙',
  frontend: '▣',
  data:     '◈',
  tools:    '⊕',
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <SectionLabel index={3} title="SKILLS" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 2,
        }}>
          {skillGroups.map((group, gi) => (
            <SkillModule key={group.id} group={group} icon={GROUP_ICONS[group.id]} index={gi} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

function SkillModule({ group, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ background: 'rgba(0,255,148,0.03)' }}
      style={{
        padding: '32px 28px',
        border: '1px solid var(--border)',
        background: 'var(--bg-card)',
        transition: 'background 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line on hover via CSS */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 1,
        background: 'var(--accent)',
        opacity: 0,
        transition: 'opacity 0.2s',
      }} className="module-line" />

      {/* Icon + title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36,
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: '1rem',
          color: 'var(--accent)',
          flexShrink: 0,
        }}>
          {icon}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
        }}>
          {group.title}
        </h3>
      </div>

      {/* Skills list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {group.skills.map((skill, i) => (
          <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 4, height: 4,
              background: i === 0 ? 'var(--accent)' : 'var(--text-subtle)',
              borderRadius: '50%',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: i === 0 ? 'var(--text-primary)' : 'var(--text-muted)',
            }}>
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Module index */}
      <div style={{
        position: 'absolute',
        bottom: 16, right: 16,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.55rem',
        letterSpacing: '0.1em',
        color: 'var(--text-subtle)',
      }}>
        MOD_{String(index + 1).padStart(2, '0')}
      </div>
    </motion.div>
  )
}
