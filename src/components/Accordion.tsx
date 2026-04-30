'use client';

import { useState, type ReactNode } from 'react';

export type AccordionTag = {
  label: string;
  variant: 'optional' | 'required' | 'duration';
};

export type AccordionItemData = {
  title: string;
  subtitle?: string;
  tags?: AccordionTag[];
  /** Optional meeting number badge shown to the left */
  meetingNumber?: string;
  /** Color theme for meeting number badge */
  meetingColor?: 'blue' | 'purple' | 'orange' | 'green';
  children: ReactNode;
};

type AccordionProps = {
  items: AccordionItemData[];
  /** Index of the item open by default (-1 for none) */
  defaultOpen?: number;
};

const tagClasses: Record<string, string> = {
  optional: 'bg-yellow-light text-yellow-warning',
  required: 'bg-blue-light text-blue-primary',
  duration: 'bg-bg-elevated text-text-muted',
};

const meetingColorClasses: Record<string, string> = {
  blue: 'bg-blue-light text-blue-primary border border-border-active',
  purple: 'bg-purple-light text-purple-accent',
  orange: 'bg-orange-light text-orange-accent',
  green: 'bg-green-light text-green-success',
};

export function Accordion({ items, defaultOpen = -1 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-border-subtle last:border-b-0">
            <button
              type="button"
              className="flex items-start gap-3.5 py-4 w-full text-left cursor-pointer select-none hover:opacity-85 transition-opacity"
              onClick={() => toggle(index)}
            >
              {item.meetingNumber !== undefined ? (
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[13px] font-semibold shrink-0 ${meetingColorClasses[item.meetingColor || 'blue']}`}
                >
                  {item.meetingNumber}
                </span>
              ) : (
                <span
                  className={`w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center text-xs text-text-muted transition-transform duration-250 ${isOpen ? 'rotate-90' : ''}`}
                >
                  ▶
                </span>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-[15px] font-semibold">{item.title}</span>
                  {item.tags?.map((tag, ti) => (
                    <span
                      key={ti}
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-[10px] ${tagClasses[tag.variant]}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                {item.subtitle && (
                  <div className="text-[13px] text-text-secondary">{item.subtitle}</div>
                )}
              </div>
              {item.meetingNumber !== undefined && (
                <span
                  className={`w-5 h-5 shrink-0 mt-1 flex items-center justify-center text-xs text-text-muted transition-transform duration-250 ${isOpen ? 'rotate-90' : ''}`}
                >
                  ▶
                </span>
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-350 ease-in-out ${
                isOpen ? 'max-h-[800px] pb-5 pl-[34px]' : 'max-h-0 pl-[34px]'
              }`}
              style={item.meetingNumber !== undefined ? { paddingLeft: '46px' } : undefined}
            >
              {item.children}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Reusable sub-components for accordion body content */

export function AccordionSection({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-4 last:mb-0">
      {label && (
        <div className="text-[11px] font-bold uppercase tracking-[1px] text-text-muted mb-2">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

export function AccordionList({ items }: { items: string[] }) {
  return (
    <ul className="list-none p-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-[13px] text-text-secondary py-1 pl-4 relative leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-bg-inset"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function AccordionDeliverable({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 py-2 px-3 bg-green-light rounded-lg text-[13px] text-green-success font-medium mb-1.5 last:mb-0">
      {text}
    </div>
  );
}

export function AccordionAttendees({
  attendees,
}: {
  attendees: { name: string; required?: boolean }[];
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {attendees.map((a, i) => (
        <span
          key={i}
          className={`px-2.5 py-1 rounded-xl text-xs ${
            a.required
              ? 'bg-blue-light text-blue-primary'
              : 'bg-bg-elevated text-text-secondary'
          }`}
        >
          {a.name}
        </span>
      ))}
    </div>
  );
}
