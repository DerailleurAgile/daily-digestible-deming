// ThemeProvider component to manage light/dark mode based on 
// user preference and system settings
'use client';
import { useEffect } from 'react';

const STORAGE_KEY = 'dd-theme'; // 'light' | 'dark' | absent => follow system

// Function to read theme from localStorage and apply it
export default function ThemeProvider() {
  useEffect(() => {
    const root = document.documentElement;

    function applyTheme(theme: 'light' | 'dark' | null) {
      const useDark =
        theme === 'dark' || (theme === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (useDark) root.classList.add('dark');
      else root.classList.remove('dark');
    }

    // initial
    const saved = (() => {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch {
        return null;
      }
    })();
    applyTheme(saved as 'light' | 'dark' | null);

    // respond to system changes when no explicit preference
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onMedia = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) applyTheme(null);
    };
    mql.addEventListener?.('change', onMedia);
    // sync across tabs
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) applyTheme(e.newValue as 'light' | 'dark' | null);
    };
    window.addEventListener('storage', onStorage);

    return () => {
      mql.removeEventListener?.('change', onMedia);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return null; // no UI — just initialize theme
}