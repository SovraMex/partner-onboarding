export type SystemCardData = {
  icon: string;
  title: string;
  description: string;
  githubLink?: string;
  githubLabel?: string;
};

export function SystemCard({ card }: { card: SystemCardData }) {
  const Wrapper = card.githubLink ? 'a' : 'div';
  const linkProps = card.githubLink
    ? {
        href: card.githubLink,
        target: '_blank' as const,
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="bg-bg-surface border border-border-subtle rounded-2xl p-6 no-underline text-inherit block transition-all duration-300 hover:border-[rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-primary)]"
    >
      <div className="text-2xl mb-3">{card.icon}</div>
      <div className="font-display text-[15px] font-bold mb-1.5">{card.title}</div>
      <div className="text-[13px] text-text-secondary">{card.description}</div>
      {card.githubLink && card.githubLabel && (
        <div className="mt-2 text-xs text-blue-primary">&#8599; {card.githubLabel}</div>
      )}
    </Wrapper>
  );
}
