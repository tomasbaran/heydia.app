'use client';

import { useEffect, useRef } from 'react';

export default function MailingListSnippet() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Remove any previously injected Mailjet script
      const existingScript = document.querySelector(
        'script[src="https://app.mailjet.com/pas-nc-embedded-v1.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      // Add fresh script tag
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
        src="https://sri0h.mjt.lu/wgt/sri0h/0wym/form?c=67a2157f"
        width="800"
        style={{ height: '305px', border: 'none' }}
      />
    </div>
  );
}