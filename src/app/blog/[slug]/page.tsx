import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the expected params shape
interface BlogPageParams {
  slug: string;
}

// Generate static parameters for dynamic routes
export async function generateStaticParams() {
  const files = fs.readdirSync('posts');
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

// Page component with manual props typing
export default async function Page({ params }: { params: Promise<BlogPageParams> }) {
  const { slug } = await params; // Unwrap the Promise to get the slug
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="prose max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}