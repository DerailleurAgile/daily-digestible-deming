// Day Complete Badge Component

'use client';
import { useEffect, useState } from 'react';

type Props = { planSlug: string; dayNumber: number };

const STORAGE_KEY = 'dd-progress';

export default function DayCompleteBadge({ planSlug, dayNumber }: Props) {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function read() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const all = raw ? JSON.parse(raw) : {};
        const planMap: Record<string, boolean> = all?.[planSlug] || {};
        setDone(Boolean(planMap[String(dayNumber)]));
      } catch {
        setDone(false);
      }
    }

    read();
    const onStorage = (e: StorageEvent) => {
      if (!e.key || e.key === STORAGE_KEY) read();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [planSlug, dayNumber]);

  // Prevent hydration mismatch - return nothing until mounted
  if (!mounted || !done) return null;

  return (
    <span className="complete-badge">
      ✓ Done
    </span>
  );
}