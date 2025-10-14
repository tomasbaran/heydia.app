'use client';
import Navbar from './Navbar';
// import WaitlistSnippet from './WaitlistSnippet';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'system-ui'
    }}>
      <Navbar />

      {/* Header Section - Logo and Title at Top */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0.5rem',
        paddingTop: '1rem'
      }}>
        <img
          src="/dia-logo.png"
          alt="Dia logo"
          style={{
            maxWidth: '200px',
            marginBottom: '0.5rem'
          }}
        />
        
        <p style={{
          fontSize: '1.25rem',
          color: '#555',
          maxWidth: '500px',
          margin: 0
        }}>
          Simple daily planner that fits my brain.
        </p>
      </div>

      {/* Main Content - CTA at Center */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem 1rem'
      }}>

        {/* CTA Button */}
        <a 
          href="https://form.typeform.com/to/JHAvzNQy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#000',
            color: '#fff',
            padding: '1.25rem 2.5rem',
            fontSize: '1.5rem',
            fontWeight: '700',
            textDecoration: 'none',
            borderRadius: '12px',
            transition: 'all 0.2s ease',
            border: '2px solid #000',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            letterSpacing: '0.3px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
          }}
        >
          Is Dia for me?
        </a>

        {/* Render the MailerLite Form */}
           {/* <WaitlistSnippet /> */}
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