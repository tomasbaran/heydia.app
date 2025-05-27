'use client';

import { useEffect, useRef } from 'react';

export default function WaitlistSnippet() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Remove previously injected Mailjet script (if any)
      const existingScript = document.querySelector(
        'script[src="https://app.mailjet.com/pas-nc-embedded-v1.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      // Inject a fresh Mailjet script
      const script = document.createElement('script');
      script.src = 'https://app.mailjet.com/pas-nc-embedded-v1.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <iframe
        data-w-type="embedded"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://sri0h.mjt.lu/wgt/sri0h/0wqr/form?c=d5048884"
        width="100%"
        style={{ height: '350px',width: '450px', border: 'none', maxWidth: 550 }}
      />
    </div>
  );
}