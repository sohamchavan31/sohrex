import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'

const LINKS = [
  {
    label: 'Email',
    value: 'soham@example.com',
    href: 'mailto:soham@example.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/sohamchavan',
    href: 'https://github.com/sohamchavan',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sohamchavan',
    href: 'https://linkedin.com/in/sohamchavan',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="container">
        <SectionLabel index={5} title="CONTACT" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: 48,
              marginTop: -32,
            }}>
              Open to interesting problems — whether that's a full-time role,
              freelance project, or just a good conversation about systems.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    whileHover={{ x: 6, borderColor: 'rgba(0,255,148,0.2)' }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '18px 20px',
                      border: '1px solid var(--border)',
                      background: 'var(--bg-card)',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>
                      {link.icon}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.15em',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        marginBottom: 2,
                      }}>
                        {link.label}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                      }}>
                        {link.value}
                      </div>
                    </div>
                    <div style={{ marginLeft: 'auto', color: 'var(--text-subtle)' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — message form */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '36px 32px',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              {'>'} Send a message
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
                { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.id}>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,255,148,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about the project..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,255,148,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
