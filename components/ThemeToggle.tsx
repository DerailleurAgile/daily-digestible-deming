// Toggle button for light/dark theme
'use client';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'dd-theme'; // 'light' | 'dark'

// This function is similar to ThemeProvider but includes UI for toggling
export default function ThemeToggle({ className = '' }: { className?: string }) {
  // start with 'light' to avoid SSR/client mismatch; adjust in useEffect
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // initialize once on client
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    function apply(t: 'light' | 'dark') {
      if (t === 'dark') {
        root.classList.add('dark');
        // body.classList.add('dark');
      } else {
        root.classList.remove('dark');
        // body.classList.remove('dark');
      }
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY) as 'light' | 'dark' | null;
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved);
        apply(saved);
        return;
      }
    } catch (e) {
      // ignore storage errors
    }

    // no saved preference → follow system
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? 'dark' : 'light';
    setTheme(initial);
    apply(initial);
  }, []);

  useEffect(() => {
    // persist and apply whenever theme state changes
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
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