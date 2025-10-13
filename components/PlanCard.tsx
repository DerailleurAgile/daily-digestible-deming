// Plan card component
// Display a reading plan with optional progress bar
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Plan = { slug: string; title?: string; description?: string; days?: number };

export default function PlanCard({ plan, showProgress }: { plan: Plan; showProgress?: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showProgress) return;
    try {
      const raw = localStorage.getItem('dd-progress');
      const all = raw ? JSON.parse(raw) : {};
      const planMap: Record<string, boolean> = all[plan.slug] || {};
      const doneCount = Object.keys(planMap).filter((k) => planMap[k]).length;
      const pct = plan.days ? Math.round((doneCount / plan.days) * 100) : doneCount ? 100 : 0;
      setProgress(pct);
    } catch {
      setProgress(0);
    }
  }, [plan.slug, plan.days, showProgress]);

  return (
    <Link
      href={`/plans/${plan.slug}`}
      className="plan-card group block rounded-lg p-6 border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-0"
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold transition-colors group-hover:bg-blue-600"
          aria-hidden
        >
          {plan.title ? plan.title[0] : plan.slug[0]}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold mb-1 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {plan.title ?? plan.slug}
            </h3>
            {showProgress && (
              <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">{progress}%</span>
            )}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
            {plan.description}
          </p>

          {showProgress && (
            <div className="mt-4 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500"
                style={{ width: `${progress}%` }}
                aria-hidden
              />
            </div>
          )}
        </div>

        <div className="ml-4 text-gray-400 transition-colors group-hover:text-blue-600">→</div>
      </div>
    </Link>
  );
}