import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import Navbar from '../Navbar';

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-xl mx-auto px-4 pb-12">
        <h1 className="text-2xl font-bold mb-6">Dia Blog</h1>
        <ul>
          {posts.map(({ slug, title, date }) => (
            <li key={slug} className="mb-4">
              <Link href={`/blog/${slug}`} className="text-blue-600 hover:underline">
                {title}
              </Link>
              <p className="text-sm text-gray-500">{date}</p>
            </li>
          ))}
        </ul>
      </main>

      {/* Footer */}
<footer style={{
  padding: '2rem 1rem',
  textAlign: 'center',
  fontSize: '0.875rem',
  color: '#999'
}}>
  
  <form
    action="https://YOUR_MAILERLITE_FORM_URL"
    method="post"
    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}
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
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      Subscribe to updates
    </button>
  </form>

  {/* Add marginTop here */}
  <p style={{ marginTop: '2rem' }}>
    Built for clarity seekers: doers, dreamers, and minimalists.
  </p>
</footer>
    </div>
  );
}