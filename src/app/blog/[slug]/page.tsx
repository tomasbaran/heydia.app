import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import Link from 'next/link';
import html from 'remark-html';
import MailingListSnippet from '@/app/MailingListSnippet'; // Adjust path if needed
  
interface BlogPageParams {
  slug: string;
}

export async function generateStaticParams() {
  const files = fs.readdirSync('posts');
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default async function Page({ params }: { params: Promise<BlogPageParams> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark()
  .use(gfm) // ← add this
  .use(html)
  .process(content);
  const contentHtml = processedContent.toString();

  

  return (
    <>
      <article className="prose max-w-3xl mx-auto p-6">
          <Link href="/blog" className="text-blue-600 hover:underline block mb-4">
          ← Back to Dia Blog
        </Link>
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{data.date}</p>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
        <center><MailingListSnippet /></center>

        <p style={{ marginTop: '2rem' }}>
          ♡ Built for clarity seekers: doers, dreamers, and minimalists.
        </p>
      </footer>
    </>
  );
}

