'use client';

type ProgressBarProps = {
  completed: number;
  total: number;
  phaseLabels: string[];
  activePhaseIndex: number;
};

export function ProgressBar({
  completed,
  total,
  phaseLabels,
  activePhaseIndex,
}: ProgressBarProps) {
  const percent = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="bg-bg-surface rounded-xl p-5 px-6 border border-border-subtle shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-text-secondary">
          Progreso del onboarding
        </span>
        <span className="font-mono text-sm text-blue-primary">
          {completed} / {total}
        </span>
      </div>
      <div className="h-1.5 bg-bg-elevated rounded-[3px] overflow-hidden">
        <div
          className="h-full rounded-[3px] transition-[width] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            width: `${percent}%`,
            background: 'linear-gradient(90deg, var(--blue-primary), var(--purple-accent))',
          }}
        />
      </div>
      <div className="flex justify-between mt-2.5">
        {phaseLabels.map((label, i) => (
          <span
            key={i}
            className={`text-[11px] font-medium ${
              i === activePhaseIndex ? 'text-blue-primary' : 'text-text-muted'
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
