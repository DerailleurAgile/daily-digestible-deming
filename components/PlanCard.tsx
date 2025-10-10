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
    <Link href={`/plans/${plan.slug}`} className="group block w-full">
      <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-black/60">
        <div className="w-14 h-14 bg-gray-700 rounded-md flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold">{plan.title ?? plan.slug}</h3>
            {showProgress && (
              <span className="ml-2 text-sm text-gray-400">{progress}%</span>
            )}
          </div>
          <p className="text-sm text-gray-400">{plan.description}</p>
          {showProgress && (
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${progress}%` }} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}