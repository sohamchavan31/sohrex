export default function SectionLabel({ index, title }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        color: 'var(--accent)',
        textTransform: 'uppercase',
        marginBottom: 12,
      }}>
        {String(index).padStart(2, '0')} &mdash;
      </div>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2.8rem, 6vw, 5rem)',
        lineHeight: 0.95,
        letterSpacing: '0.02em',
        color: 'var(--text-primary)',
      }}>
        {title}
      </h2>
      <div style={{
        marginTop: 20,
        width: 40,
        height: 1,
        background: 'var(--accent)',
        opacity: 0.6,
      }} />
    </div>
  )
}
