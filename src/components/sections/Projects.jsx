import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import { featuredProjects, otherProjects } from '../../data/projects'

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="container">
        <SectionLabel index={2} title="PROJECTS" />
        {/* Featured */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 64 }}>
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>
        {/* Divider */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            Other work
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {otherProjects.map((p) => (
              <OtherCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

function FeaturedCard({ project }) {
  const [open, setOpen] = useState(false)
  const isMIS = project.id === 'mis'

  return (
    <motion.div
      layout
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${isMIS ? 'rgba(0,255,148,0.2)' : 'var(--border)'}`,
        padding: '36px 40px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
      whileHover={{ borderColor: isMIS ? 'rgba(0,255,148,0.45)' : 'rgba(255,255,255,0.1)' }}
      onClick={() => setOpen(!open)}
    >
      {/* Glow line top for MIS */}
      {isMIS && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.5,
        }} />
      )}

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: isMIS ? 'var(--accent)' : 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            {isMIS && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />}
            {project.label}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            color: 'var(--text-primary)',
            letterSpacing: '0.02em',
          }}>
            {project.title}
          </h3>
        </div>
        {/* Expand toggle */}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            width: 32, height: 32,
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, marginTop: 4,
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
          }}
        >
          +
        </motion.div>
      </div>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        color: 'var(--text-muted)',
        lineHeight: 1.7,
        marginBottom: 24,
        maxWidth: 600,
      }}>
        {project.short}
      </p>

      {/* Stack pills */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: open ? 32 : 0 }}>
        {project.stack.map((s) => (
          <span key={s} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.1em',
            padding: '4px 10px',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}>
            {s}
          </span>
        ))}
      </div>

      {/* Expanded detail */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              paddingTop: 28,
              borderTop: '1px solid var(--border)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 32,
            }}>
              {[
                { label: 'Problem', text: project.problem },
                { label: 'Solution', text: project.solution },
                { label: 'Impact',   text: project.impact },
              ].map(({ label, text }) => (
                <div key={label}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}>
                    {label}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                  }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Architecture flow for MIS */}
            {isMIS && (
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}>
                  System Architecture
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
                  {['Client', 'API Gateway', 'Business Logic', 'Data Layer', 'Cache'].map((node, i, arr) => (
                    <div key={node} style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{
                        padding: '6px 14px',
                        border: '1px solid var(--border)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.08em',
                        color: i === 0 || i === arr.length - 1 ? 'var(--accent)' : 'var(--text-muted)',
                        borderColor: i === 0 || i === arr.length - 1 ? 'rgba(0,255,148,0.3)' : 'var(--border)',
                        whiteSpace: 'nowrap',
                      }}>
                        {node}
                      </div>
                      {i < arr.length - 1 && (
                        <div style={{ padding: '0 8px', color: 'var(--text-subtle)', fontSize: '0.8rem' }}>→</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div style={{ marginTop: 28, display: 'flex', gap: 12, alignItems: 'center' }}>
              {project.github ? (
                <a href={project.github} className="btn btn-ghost" style={{ fontSize: '0.68rem' }}
                  onClick={e => e.stopPropagation()}>
                  GitHub
                </a>
              ) : (
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-subtle)',
                  textTransform: 'uppercase',
                }}>
                  {project.privateNote || 'Private Repo'}
                </span>
              )}
              {project.live && (
                <a href={project.live} className="btn btn-primary" style={{ fontSize: '0.68rem' }}
                  onClick={e => e.stopPropagation()}>
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function OtherCard({ project }) {
  return (
    <motion.div
      whileHover={{ borderColor: 'rgba(255,255,255,0.1)', y: -3 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        padding: '24px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transition: 'all 0.2s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ width: 28, height: 28, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {project.github && (
          <a href={project.github} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        )}
      </div>
      <h4 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.2rem',
        color: 'var(--text-primary)',
        letterSpacing: '0.02em',
      }}>
        {project.title}
      </h4>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        lineHeight: 1.6,
        flex: 1,
      }}>
        {project.short}
      </p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {project.stack.map((s) => (
          <span key={s} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.58rem',
            letterSpacing: '0.08em',
            padding: '3px 8px',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
          }}>
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
