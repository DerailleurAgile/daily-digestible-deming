// Progress Toggle Component

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Props = { 
  dayNumber: number; 
  totalDays?: number;
  planSlug?: string;
};

const STORAGE_KEY = 'dd-progress';

function readProgress(): Record<string, boolean> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeProgress(p: Record<string, boolean>) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // Silent fail
  }
}

export default function ProgressToggle({ 
  dayNumber, 
  totalDays = 7,
  planSlug = 'unplugging-from-the-matrix'
}: Props) {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const p = readProgress();
    setDone(Boolean(p[String(dayNumber)]));
  }, [dayNumber]);

  function toggle() {
    const p = readProgress();
    p[String(dayNumber)] = !p[String(dayNumber)];
    writeProgress(p);
    setDone(Boolean(p[String(dayNumber)]));
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="mt-8 flex items-center gap-4">
        <div className="h-10 w-32 bg-gray-100 rounded-md animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={done}
        className={`progress-toggle-btn ${done ? 'done' : 'not-done'}`}
      >
        {done ? '✓ Mark as not done' : 'Mark as done'}
      </button>

      <div className="flex items-center gap-2">
        {dayNumber < totalDays ? (
          <Link
            href={`/plans/${planSlug}/day/${dayNumber + 1}`}
            className="nav-btn"
          >
            Next Day →
          </Link>
        ) : null}

        <Link
          href={`/plans/${planSlug}`}
          className="nav-btn-secondary"
        >
          Back to Overview
        </Link>
      </div>
    </div>
  );
}