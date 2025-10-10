// Component to list and manage available reading plans
'use client';
import { useEffect, useState } from 'react';
import PlanCard from './PlanCard';

type Plan = { slug: string; title?: string; description?: string; days?: number };

export default function FindPlansList({ plans }: { plans: Plan[] }) {
  const [subs, setSubs] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('dd-subs');
      setSubs(raw ? JSON.parse(raw) : []);
    } catch {
      setSubs([]);
    }
  }, []);

  function toggle(slug: string) {
    try {
      const next = subs.includes(slug) ? subs.filter((s) => s !== slug) : [...subs, slug];
      localStorage.setItem('dd-subs', JSON.stringify(next));
      setSubs(next);
    } catch {}
  }

  return (
    <div className="space-y-3">
      {plans.map((p) => (
        <div key={p.slug} className="flex items-center justify-between">
          <PlanCard plan={p} />
          <button
            onClick={() => toggle(p.slug)}
            className={`ml-4 px-3 py-2 rounded-md text-sm ${subs.includes(p.slug) ? 'bg-gray-700 text-white' : 'bg-blue-600 text-white'}`}
          >
            {subs.includes(p.slug) ? 'Remove' : 'Add'}
          </button>
        </div>
      ))}
    </div>
  );
}