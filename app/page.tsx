/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl mb-2">The Daily Digestible Deming</h1>
          <p className="text-gray-600 text-lg">Daily insights for transformational leadership</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-5xl mb-6">Free Your Mind</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The management world you see every day might be an illusion. Discover how W. Edwards Deming's 
            System of Profound Knowledge can help you see your organization as it truly is.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            In just seven days, learn to recognize the artificial constructs that obscure reality and 
            undermine results—and discover a radically different way of understanding organizations.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12">
          <h3 className="text-2xl mb-4">Start Your Journey</h3>
          <p className="text-gray-700 mb-6">
            Begin with our flagship 7-day reading plan: <strong>Unplugging from the Management Matrix</strong>
          </p>
          <Link 
            href="/plans/unplugging-from-the-matrix"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Begin the Transformation
          </Link>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6">What You'll Discover</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">The Illusion</h4>
              <p className="text-gray-700">
                Learn to recognize the Nine Faulty Practices and Seven Deadly Diseases that create 
                the problems they're meant to solve.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">The Four Lenses</h4>
              <p className="text-gray-700">
                Explore Deming's System of Profound Knowledge: Appreciation for a System, Knowledge of 
                Variation, Theory of Knowledge, and Psychology.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">The Transformation</h4>
              <p className="text-gray-700">
                Start seeing your organization differently and begin the journey toward genuine improvement.
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl mb-4">From The Digestible Deming</h3>
          <p className="text-gray-700 mb-4">
            This daily practice is an extension of <a href="https://digestibledeming.substack.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">The Digestible Deming</a>, 
            where we make W. Edwards Deming's profound insights approachable and actionable for modern leaders.
          </p>
          <p className="text-gray-600">
            Take your Deming learning from occasional insights to daily practice.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-600 text-center">
            © 2024 The Daily Digestible Deming. Making Deming accessible, one day at a time.
          </p>
        </div>
      </footer>
    </main>
  );
}