'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `text-black hover:underline ${pathname === path ? 'font-bold underline' : ''}`;

  return (
    <nav className="flex justify-center gap-8 py-6 text-base font-medium">
      <Link href="http://localhost:3000" className={linkStyle('/')}>Home</Link>
      <Link href="/blog" className={linkStyle('/blog')}>Blog</Link>
    </nav>
  );
}