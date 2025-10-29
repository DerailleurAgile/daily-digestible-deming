/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import metadata from "@/content/reading-plans/14-points/metadata.json";
import DayCompleteBadge from "@/components/DayCompleteBadge";

export default function PlanOverview() {
  // Build the days array dynamically from metadata
  const days = Array.from({ length: metadata.days }, (_, i) => ({
    number: i + 1,
    title: metadata.dayTitles[i] || `Day ${i + 1}`, // fallback if missing
  }));

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="text-blue-600 hover:underline mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl mb-2">The Daily Digestible Deming</h1>
        </div>
      </header>

      {/* Plan Overview */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-5xl mb-6">{metadata.title}</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {metadata.description}
          </p>
          <div className="flex gap-4 text-gray-600">
            <span className="font-semibold">{metadata.days} days</span>
            <span>•</span>
            <span>{metadata.estimatedTime}</span>
            <span>•</span>
            <span>{metadata.difficulty}</span>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl mb-4">What You&apos;ll Learn</h3>
          <ul className="space-y-3">
            {metadata.learningGoals.map((goal: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Daily Readings */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6">Daily Readings</h3>
          <div className="space-y-3">
            {days.map((day) => (
              <Link
                key={day.number}
                href={`/plans/14-points/day/${day.number}`}
                className="group block border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {day.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="text-lg font-semibold mb-1 transition-colors group-hover:text-blue-600">
                        {day.title}
                      </h4>
                      {/* <DayCompleteBadge dayNumber={day.number} /> */}
                      <DayCompleteBadge planSlug="14-points" dayNumber={day.number} />
                    </div>
                    <p className="text-gray-600 text-sm transition-colors group-hover:text-gray-800">
                      Day {day.number} of {metadata.days}
                    </p>
                  </div>
                  <div className="text-gray-400 transition-colors group-hover:text-blue-600">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4">Ready to Begin?</h3>
          <p className="mb-6 text-gray-300">
            Start with Day 1 and discover what&apos;s been hidden in plain sight.
          </p>
          <Link
            href="/plans/14-points/day/1"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Day 1
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-600 text-center">
            © {new Date().getFullYear()} The Daily Digestible Deming
          </p>
        </div>
      </footer>
    </main>
  );
}