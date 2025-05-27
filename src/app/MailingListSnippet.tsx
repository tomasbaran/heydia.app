'use client';

import { useEffect, useRef } from 'react';

export default function MailjetEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined') {
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
        width="450"
        style={{ height: 0 }}
      />
    </div>
  );
}