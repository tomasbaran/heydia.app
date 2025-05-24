import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import html from 'remark-html';
import Link from 'next/link';
import gfm from 'remark-gfm';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const files = fs.readdirSync('posts');
  return files.map(file => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default async function PostPage({ params }: Params) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const { remark } = await import('remark');
  const processedContent = await remark().use(gfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <article className="mx-auto max-w-[900px] px-6 text-lg leading-7 text-gray-800 flex-1">
        <Link href="/blog" className="text-blue-600 hover:underline block mb-4">
          ← Back to Dia Blog
        </Link>

        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <time className="text-sm text-gray-500">{data.date}</time>
        <div className="mt-6 prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

      {/* Footer with sign-up form */}
      <footer
        style={{
          padding: '2rem 1rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#999',
        }}
      >
        <form
          action="https://YOUR_MAILERLITE_FORM_URL"
          method="post"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '400px',
            margin: '2rem auto 1rem',
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
              border: '1px solid #ccc',
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
              cursor: 'pointer',
            }}
          >
            Sign up for the waitlist
          </button>
        </form>

        <p style={{ marginTop: '2rem' }}>
          Built for clarity seekers: doers, dreamers, and minimalists.
        </p>
      </footer>
    </div>
  );
}