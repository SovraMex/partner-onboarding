import type { ReactNode } from 'react';

/* ── Sidebar wrapper ── */
export function Sidebar({ children }: { children: ReactNode }) {
  return <aside className="flex flex-col gap-4">{children}</aside>;
}

/* ── Sidebar card (generic container) ── */
export function SidebarCard({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-bg-surface border border-border-subtle rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      {title && (
        <div className="font-display text-sm font-bold mb-3 flex items-center gap-2">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

/* ── Timeline sidebar ── */
export type TimelinePhase = {
  label: string;
  weeks: string;
  state: 'active' | 'pending' | 'done';
};

export function TimelineSidebar({ phases }: { phases: TimelinePhase[] }) {
  const dotClasses: Record<string, string> = {
    active: 'bg-blue-primary shadow-[0_0_6px_rgba(0,102,204,0.4)]',
    pending: 'bg-text-muted',
    done: 'bg-green-success',
  };

  return (
    <SidebarCard title="📍 Timeline — 90 días">
      {phases.map((phase, i) => (
        <div key={i} className="flex items-center gap-2.5 py-2 text-[13px]">
          <span className={`w-2 h-2 rounded-full shrink-0 ${dotClasses[phase.state]}`} />
          <span
            className={
              phase.state === 'active'
                ? 'text-text-primary font-semibold'
                : 'text-text-secondary'
            }
          >
            {phase.label}
          </span>
          <span className="ml-auto font-mono text-[11px] text-text-muted">
            {phase.weeks}
          </span>
        </div>
      ))}
    </SidebarCard>
  );
}

/* ── Kit sidebar ── */
export function KitSidebar({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <SidebarCard title={title}>
      {items.map((item, i) => (
        <div
          key={i}
          className="py-2 border-b border-border-subtle last:border-b-0 text-[13px] text-text-secondary"
        >
          {item}
        </div>
      ))}
    </SidebarCard>
  );
}

/* ── Escalation box ── */
export function EscalationBox({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <SidebarCard>
      <div className="bg-blue-light border border-border-active rounded-xl p-4">
        <div className="text-[13px] font-bold text-blue-primary mb-2">{title}</div>
        {items.map((item, i) => (
          <div
            key={i}
            className="text-xs text-text-secondary py-1 pl-3.5 relative before:content-['→'] before:absolute before:left-0 before:text-blue-primary"
          >
            {item}
          </div>
        ))}
      </div>
    </SidebarCard>
  );
}

/* ── Roles grid sidebar ── */
export type RoleChip = {
  name: string;
  description: string;
};

export function RolesSidebar({
  title,
  roles,
}: {
  title: string;
  roles: RoleChip[];
}) {
  return (
    <SidebarCard title={title}>
      <div className="grid grid-cols-2 gap-2.5">
        {roles.map((role, i) => (
          <div key={i} className="p-2.5 px-3.5 bg-bg-elevated rounded-lg text-[13px]">
            <div className="font-semibold mb-0.5">{role.name}</div>
            <div className="text-[11px] text-text-muted">{role.description}</div>
          </div>
        ))}
      </div>
    </SidebarCard>
  );
}
