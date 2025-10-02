import Link from 'next/link';

export default function PlanOverview() {
  const days = [
    { number: 1, title: "The Matrix of Management" },
    { number: 2, title: "The Illusion—Faulty Practices & Deadly Diseases" },
    { number: 3, title: "Taking the Red Pill—Introduction to Profound Knowledge" },
    { number: 4, title: "Lens One—Appreciation for a System" },
    { number: 5, title: "Lens Two—Knowledge of Variation" },
    { number: 6, title: "Lens Three—Theory of Knowledge" },
    { number: 7, title: "Lens Four—Psychology (And Bringing It All Together)" },
  ];

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
          <h2 className="text-5xl mb-6">Unplugging from the Management Matrix</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            A 7-day journey discovering why the management world you see every day might be an illusion—and 
            learning to see your organization through new eyes using W. Edwards Deming's System of Profound Knowledge.
          </p>
          <div className="flex gap-4 text-gray-600">
            <span className="font-semibold">7 days</span>
            <span>•</span>
            <span>5-7 minutes per day</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl mb-4">What You'll Learn</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Recognize the Nine Faulty Practices and Seven Deadly Diseases that undermine organizations</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Understand the four lenses of Profound Knowledge: Systems, Variation, Knowledge, and Psychology</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>See how these lenses interrelate to create transformational understanding</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Begin applying systems thinking to your daily work</span>
            </li>
          </ul>
        </div>

        {/* Daily Readings */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6">Daily Readings</h3>
          <div className="space-y-3">
            {days.map((day) => (
              <Link
                key={day.number}
                href={`/plans/unplugging-from-the-matrix/day/${day.number}`}
                className="block border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                    {day.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1">{day.title}</h4>
                    <p className="text-gray-600 text-sm">Day {day.number} of 7</p>
                  </div>
                  <div className="text-gray-400">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4">Ready to Begin?</h3>
          <p className="mb-6 text-gray-300">
            Start with Day 1 and discover what's been hidden in plain sight.
          </p>
          <Link
            href="/plans/unplugging-from-the-matrix/day/1"
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
            © 2024 The Daily Digestible Deming
          </p>
        </div>
      </footer>
    </main>
  );
}