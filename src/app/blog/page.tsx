import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <main className="max-w-xl mx-auto p-4">
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
  );
}