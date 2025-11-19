'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `text-black hover:underline ${pathname === path ? 'font-bold underline' : ''}`;

  return (
    <nav className="flex justify-center gap-8 py-6 text-base font-medium">
      <Link href="/" className={linkStyle('/')}>Home</Link>
      <Link href="/blog" className={linkStyle('/blog')}>Blog</Link>
      <Link href="https://app.heydia.app" target="_blank" className={linkStyle('/app')}>[ Dia App ↗ ]</Link>
    </nav>
  );
}