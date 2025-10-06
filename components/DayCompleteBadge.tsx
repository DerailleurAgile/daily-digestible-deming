// Day Complete Badge Component

'use client';
import { useEffect, useState } from 'react';

type Props = { dayNumber: number };

const STORAGE_KEY = 'dd-progress';

export default function DayCompleteBadge({ dayNumber }: Props) {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const p = raw ? JSON.parse(raw) : {};
      setDone(Boolean(p[String(dayNumber)]));
    } catch {
      setDone(false);
    }
  }, [dayNumber]);

  // Prevent hydration mismatch - return nothing until mounted
  if (!mounted || !done) return null;

  return (
    <span className="complete-badge">
      ✓ Done
    </span>
  );
}