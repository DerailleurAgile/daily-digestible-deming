// Bottom navigation bar component
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function BottomNav() {
  const path = usePathname();
  const active = (p: string) => (path?.startsWith(p) ? 'text-white' : 'text-gray-400');

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-gray-800 z-50">
      <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/" className={`flex flex-col items-center text-xs gap-1 ${active('/')}`}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Home</span>
          </Link>

          <Link href="/my-plans" className={`flex flex-col items-center text-xs gap-1 ${active('/my-plans')}`}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
            <span>My Study Plans</span>
          </Link>

          <Link href="/my-plans/find" className={`flex flex-col items-center text-xs gap-1 ${active('/my-plans/find')}`}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span>Find</span>
          </Link>

          <Link href="/you" className={`flex flex-col items-center text-xs gap-1 ${active('/you')}`}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M6 20c1.6-4 8.4-4 10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span>You</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}