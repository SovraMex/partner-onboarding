import Link from 'next/link';

type PhaseNavProps = {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
};

export function PhaseNav({ prevHref, prevLabel, nextHref, nextLabel }: PhaseNavProps) {
  return (
    <div className="flex justify-between items-center pt-8 pb-16 border-t border-border-subtle mt-10">
      {prevHref && prevLabel ? (
        <Link
          href={prevHref}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display text-sm font-semibold no-underline bg-bg-elevated text-text-secondary hover:bg-bg-inset transition-all"
        >
          ← {prevLabel}
        </Link>
      ) : (
        <div />
      )}
      {nextHref && nextLabel ? (
        <Link
          href={nextHref}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display text-sm font-semibold no-underline bg-blue-primary text-white hover:bg-blue-hover hover:-translate-y-px transition-all"
        >
          {nextLabel} →
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
