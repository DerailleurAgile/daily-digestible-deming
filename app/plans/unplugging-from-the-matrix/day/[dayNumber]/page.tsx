import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// This tells Next.js which pages to pre-generate
export function generateStaticParams() {
  return [
    { dayNumber: '1' },
    { dayNumber: '2' },
    { dayNumber: '3' },
    { dayNumber: '4' },
    { dayNumber: '5' },
    { dayNumber: '6' },
    { dayNumber: '7' },
  ];
}

async function getDayContent(dayNumber: string) {
  try {
    const base = path.join(
      process.cwd(),
      'content',
      'reading-plans',
      'unplugging-from-the-matrix'
    );

    // Prefer .mdx but fall back to .md so existing files keep working
    const mdxPath = path.join(base, `day-${dayNumber}.mdx`);
    const mdPath = path.join(base, `day-${dayNumber}.md`);

    if (fs.existsSync(mdxPath)) {
      return fs.readFileSync(mdxPath, 'utf-8');
    }
    if (fs.existsSync(mdPath)) {
      return fs.readFileSync(mdPath, 'utf-8');
    }

    return null;
  } catch {
    return null;
  }
}

export default async function DayReading({
  params,
}: {
  params: Promise<{ dayNumber: string }>;
}) {
  const { dayNumber } = await params;
  const dayNum = parseInt(dayNumber);
  
  if (dayNum < 1 || dayNum > 7) {
    notFound();
  }

  const content = await getDayContent(dayNumber);
  
  if (!content) {
    notFound();
  }

  const components = {
    img: ({ src, alt, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => {
      if (!src) return <img alt={alt} {...rest} />;
      if (/^(https?:)?\/\//i.test(src) || src.startsWith('/')) {
        return <img src={src} alt={alt} {...rest} />;
      }
      const cleaned = src.replace(/^\.\//, '').replace(/^img\//, ''); // extra safety
      const apiPath = `/api/content?path=${encodeURIComponent(
        `reading-plans/unplugging-from-the-matrix/img/${cleaned}`
      )}`;
      return <img src={apiPath} alt={alt} {...rest} />;
    },
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/plans/unplugging-from-the-matrix" className="text-blue-600 hover:underline mb-2 inline-block">
            ← Back to Plan Overview
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Day {dayNum} of 7</h1>
            <span className="text-gray-600 text-sm">
              Unplugging from the Management Matrix
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-headings:font-roboto-slab prose-p:font-spectral max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Navigation */}
      <nav className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            {dayNum > 1 ? (
              <Link
                href={`/plans/unplugging-from-the-matrix/day/${dayNum - 1}`}
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                ← Previous Day
              </Link>
            ) : (
              <div></div>
            )}
            
            {dayNum < 7 ? (
              <Link
                href={`/plans/unplugging-from-the-matrix/day/${dayNum + 1}`}
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                Next Day →
              </Link>
            ) : (
              <Link
                href="/plans/unplugging-from-the-matrix"
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                Complete ✓
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-600 text-center">
            © {new Date().getFullYear()} The Daily Digestible Deming
          </p>
        </div>
      </footer>
    </main>
  );
}