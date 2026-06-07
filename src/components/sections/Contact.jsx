import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'

const LINKS = [
  {
    label: 'Email',
    value: 'sohamchavsn03@gmail.com',
    href: 'mailto:sohamchavsn03@gmail.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/sohamchavan31',
    href: 'https://github.com/sohamchavan31',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sohamsc01',
    href: 'https://www.linkedin.com/in/sohamsc01/',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

const PROJECT_TYPES = [
  'Web Application',
  'Mobile App',
  'Desktop Software',
  'API / Backend System',
  'Data Pipeline',
  'AI / ML Integration',
  'Other',
]

const BUDGETS = [
  'Under ₹50,000',
  '₹50,000 – ₹1,50,000',
  '₹1,50,000 – ₹5,00,000',
  '₹5,00,000+',
  'Not sure yet',
]

const TIMELINES = [
  'ASAP',
  '1 – 3 months',
  '3 – 6 months',
  '6+ months',
  'Flexible',
]

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false)
  const [quick, setQuick] = useState({ name: '', email: '', message: '' })
  const [quickSending, setQuickSending] = useState(false)
  const [quickSent, setQuickSent] = useState(false)

  const handleQuickSubmit = async () => {
    if (!quick.name || !quick.email || !quick.message) return
    setQuickSending(true)
    try {
      await fetch('https://formspree.io/f/xeewanrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: quick.name, email: quick.email, message: quick.message }),
      })
    } catch (e) {
      console.error('Formspree error:', e)
    }
    setQuickSending(false)
    setQuickSent(true)
  }

  return (
    <>
      <SectionWrapper id="contact">
        <div className="container">
          <SectionLabel index={5} title="CONTACT" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}>
            {/* Left — links */}
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
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ x: 6, borderColor: 'rgba(0,255,148,0.2)' }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 16,
                        padding: '18px 20px',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-card)',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>{link.icon}</div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>{link.label}</div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{link.value}</div>
                      </div>
                      <div style={{ marginLeft: 'auto', color: 'var(--text-subtle)' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — simple form + CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Simple message form */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 24 }}>
                  {'>'} Send a message
                </div>
                {quickSent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', padding: '32px 0' }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: 'var(--accent)', marginBottom: 10 }}>✓</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: 8 }}>SENT.</div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      I'll get back to you at <span style={{ color: 'var(--accent)' }}>{quick.email}</span>.
                    </p>
                  </motion.div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                      { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    ].map((field) => (
                      <div key={field.id}>
                        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8 }}>{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={quick[field.id]}
                          onChange={e => setQuick(prev => ({ ...prev, [field.id]: e.target.value }))}
                          style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }}
                          onFocus={e => e.target.style.borderColor = 'rgba(0,255,148,0.4)'}
                          onBlur={e => e.target.style.borderColor = 'var(--border)'}
                        />
                      </div>
                    ))}
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8 }}>Message</label>
                      <textarea
                        rows={3}
                        placeholder="Tell me what's on your mind..."
                        value={quick.message}
                        onChange={e => setQuick(prev => ({ ...prev, message: e.target.value }))}
                        style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor = 'rgba(0,255,148,0.4)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={handleQuickSubmit}
                      disabled={quickSending}
                      style={{ width: '100%', justifyContent: 'center', opacity: quickSending ? 0.6 : 1 }}
                    >
                      {quickSending ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                )}
              </div>

              {/* Start a Project CTA */}
              <motion.div
                whileHover={{ borderColor: 'rgba(0,255,148,0.3)' }}
                onClick={() => setModalOpen(true)}
                style={{
                  padding: '24px 32px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 6 }}>Got a project in mind?</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-primary)', letterSpacing: '0.02em' }}>START A PROJECT →</div>
                </div>
                <div style={{ width: 40, height: 40, border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Discovery Modal */}
      <AnimatePresence>
        {modalOpen && <DiscoveryModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

function DiscoveryModal({ onClose }) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '', email: '', company: '',
    projectType: '', description: '',
    budget: '', timeline: '',
    extra: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = async () => {
    setSending(true)
    try {
      await fetch('https://formspree.io/f/xeewanrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          project_type: form.projectType,
          description: form.description,
          budget: form.budget,
          timeline: form.timeline,
          extra: form.extra,
        }),
      })
    } catch (e) {
      console.error('Formspree error:', e)
    }
    setSending(false)
    setSubmitted(true)
  }

  const STEPS = [
    {
      label: '01 — Who are you?',
      fields: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <ModalField label="Your Name *" value={form.name} onChange={v => update('name', v)} placeholder="Full name" />
          <ModalField label="Email *" value={form.email} onChange={v => update('email', v)} placeholder="your@email.com" type="email" />
          <ModalField label="Company / Organisation" value={form.company} onChange={v => update('company', v)} placeholder="Optional" />
        </div>
      ),
      valid: form.name && form.email,
    },
    {
      label: '02 — What do you need?',
      fields: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={labelStyle}>Project Type *</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {PROJECT_TYPES.map(t => (
                <button key={t} onClick={() => update('projectType', t)}
                  style={{
                    padding: '7px 14px',
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em',
                    border: '1px solid', cursor: 'pointer', transition: 'all 0.15s',
                    borderColor: form.projectType === t ? 'var(--accent)' : 'var(--border)',
                    background: form.projectType === t ? 'rgba(0,255,148,0.08)' : 'transparent',
                    color: form.projectType === t ? 'var(--accent)' : 'var(--text-muted)',
                  }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={labelStyle}>Describe your project *</div>
            <textarea rows={4} value={form.description} onChange={e => update('description', e.target.value)}
              placeholder="What are you building? What problem does it solve?"
              style={{ ...inputStyle, resize: 'vertical', marginTop: 8 }}
              onFocus={e => e.target.style.borderColor = 'rgba(0,255,148,0.4)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
        </div>
      ),
      valid: form.projectType && form.description,
    },
    {
      label: '03 — Scope & Timeline',
      fields: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div style={labelStyle}>Budget Range</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {BUDGETS.map(b => (
                <button key={b} onClick={() => update('budget', b)}
                  style={{
                    padding: '10px 16px', textAlign: 'left',
                    fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                    border: '1px solid', cursor: 'pointer', transition: 'all 0.15s',
                    borderColor: form.budget === b ? 'var(--accent)' : 'var(--border)',
                    background: form.budget === b ? 'rgba(0,255,148,0.06)' : 'transparent',
                    color: form.budget === b ? 'var(--accent)' : 'var(--text-muted)',
                  }}>
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={labelStyle}>Timeline</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {TIMELINES.map(t => (
                <button key={t} onClick={() => update('timeline', t)}
                  style={{
                    padding: '7px 14px',
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em',
                    border: '1px solid', cursor: 'pointer', transition: 'all 0.15s',
                    borderColor: form.timeline === t ? 'var(--accent)' : 'var(--border)',
                    background: form.timeline === t ? 'rgba(0,255,148,0.08)' : 'transparent',
                    color: form.timeline === t ? 'var(--accent)' : 'var(--text-muted)',
                  }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
      valid: true,
    },
    {
      label: '04 — Anything else?',
      fields: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={labelStyle}>Additional context</div>
            <textarea rows={5} value={form.extra} onChange={e => update('extra', e.target.value)}
              placeholder="Tech preferences, existing systems, inspiration, constraints... anything useful."
              style={{ ...inputStyle, resize: 'vertical', marginTop: 8 }}
              onFocus={e => e.target.style.borderColor = 'rgba(0,255,148,0.4)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          {/* Summary */}
          <div style={{ padding: '16px', border: '1px solid var(--border)', background: 'rgba(0,255,148,0.03)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--accent)', marginBottom: 10 }}>SUMMARY</div>
            {[
              { k: 'Name', v: form.name },
              { k: 'Email', v: form.email },
              { k: 'Type', v: form.projectType },
              { k: 'Budget', v: form.budget || '—' },
              { k: 'Timeline', v: form.timeline || '—' },
            ].map(({ k, v }) => (
              <div key={k} style={{ display: 'flex', gap: 12, marginBottom: 4, fontFamily: 'var(--font-mono)', fontSize: '0.68rem' }}>
                <span style={{ color: 'var(--text-muted)', width: 64, flexShrink: 0 }}>{k}</span>
                <span style={{ color: 'var(--text-primary)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      valid: true,
    },
  ]

  const current = STEPS[step]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        style={{
          width: 'min(600px, 100%)',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#111111',
          border: '1px solid rgba(0,255,148,0.15)',
          position: 'relative',
        }}
      >
        {/* Top bar */}
        <div style={{
          padding: '20px 28px',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, background: '#111111', zIndex: 1,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 4 }}>START A PROJECT</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{current.label}</div>
          </div>
          {/* Progress dots */}
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            {STEPS.map((_, i) => (
              <div key={i} style={{
                width: i === step ? 20 : 6, height: 6,
                background: i <= step ? 'var(--accent)' : 'var(--border)',
                transition: 'all 0.3s',
              }} />
            ))}
            <button onClick={onClose} style={{ marginLeft: 16, background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.2rem', lineHeight: 1 }}>✕</button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: 'center', padding: '40px 0' }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--accent)', marginBottom: 16 }}>✓</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: 12 }}>GOT IT.</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Thanks {form.name.split(' ')[0]}. I'll review your brief and get back to you at <span style={{ color: 'var(--accent)' }}>{form.email}</span> within 24 hours.
              </p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                {current.fields}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Footer nav */}
        {!submitted && (
          <div style={{
            padding: '20px 28px',
            borderTop: '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            position: 'sticky', bottom: 0, background: '#111111',
          }}>
            <button
              onClick={() => step > 0 && setStep(s => s - 1)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em',
                background: 'none', border: '1px solid var(--border)', color: step === 0 ? 'var(--text-subtle)' : 'var(--text-muted)',
                padding: '8px 20px', cursor: step === 0 ? 'default' : 'pointer', textTransform: 'uppercase',
              }}
            >
              ← Back
            </button>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-subtle)' }}>
              {step + 1} / {STEPS.length}
            </span>
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => current.valid && setStep(s => s + 1)}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em',
                  background: current.valid ? 'var(--accent)' : 'var(--border)',
                  border: 'none', color: current.valid ? '#000' : 'var(--text-subtle)',
                  padding: '8px 20px', cursor: current.valid ? 'pointer' : 'default', textTransform: 'uppercase',
                }}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={sending}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em',
                  background: sending ? 'var(--border)' : 'var(--accent)',
                  border: 'none', color: sending ? 'var(--text-subtle)' : '#000',
                  padding: '8px 20px', cursor: sending ? 'default' : 'pointer', textTransform: 'uppercase',
                }}
              >
                {sending ? 'Sending...' : 'Submit →'}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

function ModalField({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <div style={labelStyle}>{label}</div>
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ ...inputStyle, marginTop: 8 }}
        onFocus={e => e.target.style.borderColor = 'rgba(0,255,148,0.4)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
    </div>
  )
}

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.6rem',
  letterSpacing: '0.15em',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  display: 'block',
}
