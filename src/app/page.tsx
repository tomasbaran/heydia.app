'use client';
import Navbar from './Navbar';
import WaitlistSnippet from './WaitlistSnippet';

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
        padding: '1rem'
      }}>

        <img
  src="/dia-logo.png"
  alt="Dia logo"
  style={{
    maxWidth: '200px',
    // height: 'auto',
    // marginBottom: '2rem',
  }}
/>
        
  

        <p style={{
          fontSize: '1.25rem',
          color: '#555',
          maxWidth: '500px',
          marginBottom: '2rem'
        }}>
          Simple daily planner that fits my brain.
        </p>

        {/* Render the MailerLite Form */}
           <WaitlistSnippet />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#999'
      }}>
       ♡ Built for clarity seekers: doers, dreamers, and minimalists.
      </footer>
    </div>
  );
}