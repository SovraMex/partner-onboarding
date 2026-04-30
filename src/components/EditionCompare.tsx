export type EditionData = {
  tag: string;
  tagColor: 'blue' | 'orange';
  subtitle: string;
  title: string;
  features: string[];
  footer?: { text: string; type: 'text' };
  footerLink?: { text: string; href: string };
};

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: 'bg-blue-light',
    text: 'text-blue-primary',
    border: 'border-l-blue-primary',
  },
  orange: {
    bg: 'bg-orange-light',
    text: 'text-orange-accent',
    border: 'border-l-orange-accent',
  },
};

export function EditionCompare({
  editions,
}: {
  editions: [EditionData, EditionData];
}) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {editions.map((ed, i) => {
          const colors = tagColors[ed.tagColor];
          return (
            <div
              key={i}
              className={`p-6 bg-bg-surface border border-border-subtle rounded-2xl border-l-4 ${colors.border}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-xs px-2.5 py-0.5 ${colors.bg} ${colors.text} rounded-[20px] font-semibold`}
                >
                  {ed.tag}
                </span>
                <span className="text-xs text-text-muted">{ed.subtitle}</span>
              </div>
              <div className="text-[15px] font-bold text-text-primary mb-2">{ed.title}</div>
              <div className="text-[13px] text-text-secondary leading-[1.7]">
                {ed.features.map((f, fi) => (
                  <span key={fi}>
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                    {fi < ed.features.length - 1 && <br />}
                  </span>
                ))}
              </div>
              {ed.footer && (
                <div className={`mt-3 text-xs ${colors.text} font-semibold`}>
                  {ed.footer.text}
                </div>
              )}
              {ed.footerLink && (
                <div className="mt-3">
                  <a
                    href={ed.footerLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs ${colors.text} font-semibold no-underline`}
                  >
                    {ed.footerLink.text}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3.5 px-4 bg-yellow-light border border-[rgba(202,138,4,0.15)] rounded-xl">
        <div className="text-[13px] text-text-primary">
          <strong>Mismo plazo, mismas fases.</strong> La edición Gobierno Pequeño mantiene los
          90 días y las 5 etapas (A-E). Lo que cambia es el equipo, la cantidad de trámites, y
          la intensidad de las capacitaciones. La guía de este portal aplica para ambas — las
          diferencias están documentadas en la guía.
        </div>
      </div>
    </div>
  );
}
