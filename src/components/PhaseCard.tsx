import Link from 'next/link';

export type PhaseCardData = {
  /** Route id: '0', 'a', 'b', 'c', 'd', 'e' */
  phaseId: string;
  number: string;
  name: string;
  weeks: string;
  description: string;
  href: string;
  status: 'current' | 'locked' | 'done';
  statusLabel: string;
};

const phaseTopBorderColors: Record<string, string> = {
  a: 'before:bg-blue-primary',
  b: 'before:bg-purple-accent',
  c: 'before:bg-orange-accent',
  d: 'before:bg-green-success',
  e: 'before:bg-yellow-warning',
  t: 'before:bg-text-muted',
  '0': 'before:bg-blue-primary',
};

const statusDotClasses: Record<string, string> = {
  current: 'bg-product-gov animate-[pulse_2s_infinite]',
  locked: 'bg-text-muted',
  done: 'bg-green-success',
};

const statusBadgeClasses: Record<string, string> = {
  current: 'bg-blue-light text-blue-primary',
  locked: 'bg-bg-elevated text-text-muted',
  done: 'bg-green-light text-green-success',
};

export function PhaseCard({ card }: { card: PhaseCardData }) {
  const isCurrent = card.status === 'current';
  const isLocked = card.status === 'locked';
  const borderColor = phaseTopBorderColors[card.phaseId] || 'before:bg-blue-primary';

  const baseClasses = `
    relative overflow-hidden bg-bg-surface border rounded-2xl p-5
    no-underline text-inherit
    transition-all duration-300
    before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px]
    ${borderColor}
  `;

  const stateClasses = isCurrent
    ? 'border-border-active before:opacity-100 cursor-pointer hover:border-[rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[var(--shadow-glow-primary)]'
    : isLocked
      ? 'border-border-subtle opacity-50 cursor-not-allowed before:opacity-0'
      : 'border-border-subtle before:opacity-0 cursor-pointer hover:border-[rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[var(--shadow-glow-primary)] hover:before:opacity-100';

  const content = (
    <>
      <div
        className={`font-mono text-[11px] font-semibold mb-2 ${
          isCurrent ? 'text-blue-primary' : 'text-text-muted'
        }`}
      >
        {card.number}
      </div>
      <div className="font-display text-[17px] font-bold mb-1.5">{card.name}</div>
      <div className="font-mono text-xs text-text-muted mb-2.5">{card.weeks}</div>
      <div className="text-[13px] text-text-secondary leading-relaxed">{card.description}</div>
      <div
        className={`inline-flex items-center gap-1.5 mt-3.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusBadgeClasses[card.status]}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${statusDotClasses[card.status]}`} />
        {card.statusLabel}
      </div>
    </>
  );

  if (isLocked) {
    return <div className={`${baseClasses} ${stateClasses}`}>{content}</div>;
  }

  return (
    <Link href={card.href} className={`${baseClasses} ${stateClasses}`}>
      {content}
    </Link>
  );
}
