// Toggle button for light/dark theme
'use client';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'dd-theme';

// This function is similar to ThemeProvider but includes UI for toggling
export default function ThemeToggle({ className = '' }: { className?: string }) {
  // start with 'light' to avoid SSR/client mismatch; adjust in useEffect
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // initialize once on client
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved);
        document.documentElement.classList[saved === 'dark' ? 'add' : 'remove']('dark');
        return;
      }
    } catch {
      // ignore
    }

    // no saved preference → follow system
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.classList[initial === 'dark' ? 'add' : 'remove']('dark');
  }, []);

  useEffect(() => {
    // persist and apply whenever theme state changes
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  }, [theme]);

  function toggle() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={`p-2 rounded-md hover:bg-white/5 transition-colors ${className}`}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}