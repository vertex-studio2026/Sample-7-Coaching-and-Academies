import { Info } from 'lucide-react';
import type { ReactNode } from 'react';

/**
 * Small, calm footnote used under sections that show sample content.
 * Keeping it visible (instead of a modal or tooltip) is deliberate: a parent
 * should never have to hunt for the caveat.
 */
export default function SampleNote({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  const styles =
    tone === 'dark'
      ? 'border-white/15 bg-white/5 text-slate-300'
      : 'border-slate-200 bg-white text-slate-500';

  return (
    <p className={`mt-10 flex items-start gap-2.5 rounded-xl border px-4 py-3 text-xs leading-relaxed ${styles}`}>
      <Info className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
