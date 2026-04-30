'use client';

import { useState, useEffect, useCallback } from 'react';

export type ChecklistItem = {
  text: string;
  hint?: string;
};

type ChecklistProps = {
  storageKey: string;
  items: ChecklistItem[];
  /** Called with completed count whenever it changes */
  onCountChange?: (completed: number, total: number) => void;
};

export function Checklist({ storageKey, items, onCountChange }: ChecklistProps) {
  const [completed, setCompleted] = useState<Record<number, boolean>>({});

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Record<string, boolean>;
        const state: Record<number, boolean> = {};
        Object.entries(parsed).forEach(([k, v]) => {
          if (v) state[Number(k)] = true;
        });
        setCompleted(state);
      }
    } catch {
      // ignore parse errors
    }
  }, [storageKey]);

  // Notify parent of count changes
  useEffect(() => {
    const count = Object.values(completed).filter(Boolean).length;
    onCountChange?.(count, items.length);
  }, [completed, items.length, onCountChange]);

  const toggle = useCallback(
    (index: number) => {
      setCompleted((prev) => {
        const next = { ...prev };
        if (next[index]) {
          delete next[index];
        } else {
          next[index] = true;
        }
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {
          // storage full
        }
        return next;
      });
    },
    [storageKey]
  );

  return (
    <div>
      {items.map((item, index) => {
        const isCompleted = !!completed[index];
        return (
          <div
            key={index}
            className="flex items-start gap-3 py-3 border-b border-border-subtle last:border-b-0 cursor-pointer transition-opacity"
            onClick={() => toggle(index)}
          >
            <div
              className={`w-5 h-5 rounded-[6px] border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-green-success border-green-success'
                  : 'border-text-muted hover:border-blue-primary'
              }`}
            >
              <span
                className={`text-white text-xs font-bold ${isCompleted ? 'block' : 'hidden'}`}
              >
                ✓
              </span>
            </div>
            <div>
              <div
                className={`text-sm leading-relaxed ${
                  isCompleted ? 'line-through text-text-muted' : ''
                }`}
              >
                {item.text}
              </div>
              {item.hint && (
                <div className="text-xs text-text-muted mt-0.5">{item.hint}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
