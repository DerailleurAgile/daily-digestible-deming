/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import metadata from "@/content/reading-plans/unplugging-from-the-matrix/metadata.json";
import DayCompleteBadge from "@/components/DayCompleteBadge";

export default function PlanOverview() {
  // Build the days array dynamically from metadata
  const days = Array.from({ length: metadata.days }, (_, i) => ({
    number: i + 1,
    title: metadata.dayTitles[i] || `Day ${i + 1}`, // fallback if missing
  }));

  const planSlug = (metadata as any)?.slug ?? 'unplugging-from-the-matrix';

  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl mb-6">Daily Readings</h1>

        <div className="space-y-4">
          {days.map((day) => (
            <Link
              key={day.number}
              href={`/plans/${planSlug}/day/${day.number}`}
              className="plan-card group block rounded-lg p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-0 hover:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-md bg-gray-700 dark:bg-gray-700" aria-hidden />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold mb-1 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {day.title}
                      <DayCompleteBadge planSlug={planSlug} dayNumber={day.number} />
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{/* optional percent here */}</span>
                  </div>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Day {day.number} of {days.length}</p>

                  {/* optional client-side progress can be added here like in PlanCard */}
                </div>

                <div className="ml-4 text-gray-400 group-hover:text-blue-600 transition-colors">→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}