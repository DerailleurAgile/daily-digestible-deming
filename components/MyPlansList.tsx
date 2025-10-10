// Component to list user's subscribed plans
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import PlanCard from './PlanCard';

type Plan = { slug: string; title?: string; description?: string; days?: number };

export default function MyPlansList({ plans }: { plans: Plan[] }) {
  const [subs, setSubs] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('dd-subs');
      setSubs(raw ? JSON.parse(raw) : []);
    } catch {
      setSubs([]);
    }
  }, []);

  const subscribedPlans = plans.filter((p) => subs.includes(p.slug));

  if (subscribedPlans.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-gray-400">You haven't added any plans yet.</p>
        <Link href="/my-plans/find" className="inline-block mt-2 text-sm text-blue-500">Find plans →</Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {subscribedPlans.map((p) => (
        <PlanCard key={p.slug} plan={p} showProgress />
      ))}
    </div>
  );
}