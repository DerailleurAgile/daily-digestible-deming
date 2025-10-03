import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import metadata from "@/content/reading-plans/unplugging-from-the-matrix/metadata.json";

// Generate static params dynamically
export async function generateStaticParams() {
  return Array.from({ length: metadata.days }, (_, i) => ({
    dayNumber: String(i + 1),
  }));
}

export default function DayReading({ params }: { params: { dayNumber: string } }) {
  const dayNum = parseInt(params.dayNumber, 10);

  if (dayNum < 1 || dayNum > metadata.days) notFound();

  // Synchronously read the Markdown file
  let content: string;
  try {
    const filePath = path.join(
      process.cwd(),
      "content/reading-plans/unplugging-from-the-matrix",
      `day-${dayNum}.md`
    );
    content = fs.readFileSync(filePath, "utf-8");
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/plans/unplugging-from-the-matrix"
            className="text-blue-600 hover:underline mb-2 inline-block"
          >
            ← Back to Plan Overview
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">
              Day {dayNum} of {metadata.days}
            </h1>
            <span className="text-gray-600 text-sm">{metadata.title}</span>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-headings:font-roboto-slab prose-p:font-spectral max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </article>

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
              <div />
            )}

            {dayNum < metadata.days ? (
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