export default function Footer() {
  return (
    <footer style={{
      padding: '32px 0',
      borderTop: '1px solid var(--border)',
      background: '#0B0B0B',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.15em',
          color: 'var(--text-subtle)',
          textTransform: 'uppercase',
        }}>
          Soham Chavan — System Builder
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.1em',
          color: 'var(--text-subtle)',
        }}>
          Built with React + Three.js
        </span>
      </div>
    </footer>
  )
}
