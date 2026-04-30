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
      className="bg-bg-surface border border-border-subtle rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] no-underline text-inherit block"
    >
      <div className="text-2xl mb-3">{card.icon}</div>
      <div className="font-display text-[15px] font-bold mb-1.5">{card.title}</div>
      <div className="text-[13px] text-text-secondary">{card.description}</div>
      {card.githubLink && card.githubLabel && (
        <div className="mt-2 text-xs text-blue-primary">↗ {card.githubLabel}</div>
      )}
    </Wrapper>
  );
}
