'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  planSlug: string;
  dayNumber: number;
  target: string;
  storageKey?: string;
};

const STORAGE_KEY_DEFAULT = 'dd-progress';

function readProgress(key: string): Record<string, Record<string, boolean>> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function writeProgress(key: string, p: Record<string, Record<string, boolean>>) {
  try {
    localStorage.setItem(key, JSON.stringify(p));
  } catch {}
}

export default function MarkDoneAndNavigate({
  planSlug,
  dayNumber,
  target,
  storageKey = STORAGE_KEY_DEFAULT,
}: Props) {
  const router = useRouter();

  function handleClick() {
    const all = readProgress(storageKey);
    if (!all[planSlug]) all[planSlug] = {};
    all[planSlug][String(dayNumber)] = true;
    writeProgress(storageKey, all);
    router.push(target);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
    >
      Next →
    </button>
  );
}