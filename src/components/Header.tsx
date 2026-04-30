'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavPhase = {
  id: string;
  label: string;
  href: string;
  state: 'active' | 'locked' | 'done' | 'default';
};

const phases: NavPhase[] = [
  { id: '0', label: 'Fase 0', href: '/fase-0', state: 'default' },
  { id: 'a', label: 'Fase A', href: '/fase-a', state: 'default' },
  { id: 'b', label: 'Fase B', href: '/fase-b', state: 'default' },
  { id: 'c', label: 'Fase C', href: '/fase-c', state: 'default' },
  { id: 'd', label: 'Fase D', href: '/fase-d', state: 'default' },
  { id: 'e', label: 'Fase E', href: '/fase-e', state: 'default' },
  { id: 't', label: 'Takeover', href: '/takeover', state: 'default' },
];

// Order of phases for state computation
const phaseOrder = ['0', 'a', 'b', 'c', 'd', 'e'];

function computeStates(currentPath: string): NavPhase[] {
  const currentIndex = phaseOrder.findIndex((id) => currentPath === `/fase-${id}`);
  const isTakeover = currentPath === '/takeover';

  return phases.map((phase) => {
    if (phase.id === 't') {
      return { ...phase, state: isTakeover ? 'active' : 'default' };
    }
    const phaseIndex = phaseOrder.indexOf(phase.id);
    if (isTakeover) return { ...phase, state: 'default' };
    if (currentIndex === -1) return { ...phase, state: 'default' };
    if (phaseIndex === currentIndex) return { ...phase, state: 'active' };
    if (phaseIndex < currentIndex) return { ...phase, state: 'done' };
    return { ...phase, state: 'locked' };
  });
}

const navStateClasses: Record<string, string> = {
  active: 'text-blue-primary bg-blue-light border-border-active',
  locked: 'opacity-40 cursor-not-allowed',
  done: 'text-green-success bg-green-light',
  default: 'text-text-muted hover:text-text-secondary hover:bg-bg-elevated',
};

export function Header() {
  const pathname = usePathname();
  const isLanding = pathname === '/';
  const computedPhases = computeStates(pathname);

  return (
    <header className="border-b border-border-subtle py-4 sticky top-0 bg-bg-primary/90 backdrop-blur-[20px] z-[100]">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-xl text-blue-primary no-underline flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-blue-primary rounded-full shadow-[0_0_8px_rgba(0,102,204,0.4)]" />
          Sovra Partners
        </Link>

        {isLanding ? (
          <div className="text-[13px] text-text-muted">
            ¿Necesitas ayuda?{' '}
            <a href="mailto:partners@sovra.io" className="text-blue-primary no-underline">
              partners@sovra.io
            </a>
          </div>
        ) : (
          <nav className="flex gap-1 max-md:hidden">
            {computedPhases.map((phase) => (
              <Link
                key={phase.id}
                href={phase.state === 'locked' ? '#' : phase.href}
                className={`px-3.5 py-1.5 rounded-[20px] text-[13px] font-medium no-underline transition-all border border-transparent ${navStateClasses[phase.state]}`}
                onClick={(e) => {
                  if (phase.state === 'locked') e.preventDefault();
                }}
              >
                {phase.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
