import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'

const LINES = [
  { text: 'I design and build systems', accent: false },
  { text: 'that solve real problems.',  accent: false },
  { text: 'Backend-first. Logic-driven.', accent: true },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <SectionLabel index={1} title="ABOUT" />
            <div style={{ marginBottom: 32 }}>
              {LINES.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    lineHeight: 1.15,
                    color: line.accent ? 'var(--accent)' : 'var(--text-primary)',
                    opacity: line.accent ? 1 : 0.9,
                  }}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ paddingTop: 8 }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              marginBottom: 24,
            }}>
              I'm Soham Chavan — a software developer who thinks in systems.
              Whether it's a backend API, a data pipeline, or a full-stack platform,
              I focus on building things that work reliably at scale.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              marginBottom: 40,
            }}>
              My work lives at the intersection of clean architecture and practical
              impact. I don't just write code — I build infrastructure that teams
              can depend on.
            </p>

            {/* Stat row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
              paddingTop: 32,
              borderTop: '1px solid var(--border)',
            }}>
              {[
                { val: '5+',  label: 'Projects\nShipped' },
                { val: '2+',  label: 'Years\nBuilding' },
                { val: '200+', label: 'Users\nServed' },
              ].map((stat) => (
                <div key={stat.val}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.4rem',
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {stat.val}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.12em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    whiteSpace: 'pre-line',
                    lineHeight: 1.5,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
