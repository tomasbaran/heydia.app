import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import html from 'remark-html';
import Link from 'next/link';
import gfm from 'remark-gfm'

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
    <article className="mx-auto max-w-[900px] px-6 text-lg leading-7 text-gray-800">
      <Link href="/blog" className="text-blue-600 hover:underline block mb-4">
        ← Back to Dia Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <time className="text-sm text-gray-500">{data.date}</time>
      <div className="mt-6 prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}