import Link from 'next/link';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'system-ui'
    }}>
      
       <Navbar />

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5em' }}>Dia</h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#555',
          maxWidth: '500px',
          marginBottom: '2rem'
        }}>
          Simple daily planning that fits your brain.
        </p>

        <form
          action="https://YOUR_MAILERLITE_FORM_URL"
          method="post"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            maxWidth: '400px'
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            style={{
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              backgroundColor: '#0B6E4F',
              color: '#fff',
              borderRadius: '5px',
              border: 'none'
            }}
          >
            Sign up for the waitlist
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#999'
      }}>
        Built for clarity seekers: doers, dreamers, and minimalists.
      </footer>
    </div>
  );
}