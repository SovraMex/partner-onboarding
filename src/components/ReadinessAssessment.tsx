'use client';

import { useState, useEffect, useCallback } from 'react';

/* ── Landing version: green/red buttons ── */

export type ReadinessSignal = {
  icon: string;
  title: string;
  question: string;
  greenLabel: string;
  redLabel: string;
  greenDetail: string;
  redDetail: string;
};

type LandingReadinessProps = {
  signals: ReadinessSignal[];
  storageKey?: string;
  onResult?: (result: 'pass' | 'fail' | null) => void;
};

export function LandingReadiness({
  signals,
  storageKey = 'landing_readiness',
  onResult,
}: LandingReadinessProps) {
  const [selections, setSelections] = useState<Record<number, 'green' | 'red'>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setSelections(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  useEffect(() => {
    const answered = Object.keys(selections).length;
    if (answered === signals.length) {
      const redCount = Object.values(selections).filter((s) => s === 'red').length;
      onResult?.(redCount >= 2 ? 'fail' : 'pass');
    } else {
      onResult?.(null);
    }
  }, [selections, signals.length, onResult]);

  const setSignal = useCallback(
    (index: number, color: 'green' | 'red') => {
      setSelections((prev) => {
        const next = { ...prev, [index]: color };
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [storageKey]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {signals.map((signal, i) => {
        const selected = selections[i];
        const cardBg =
          selected === 'green'
            ? 'border-[rgba(5,150,105,0.4)] bg-green-light'
            : selected === 'red'
              ? 'border-[rgba(220,38,38,0.3)] bg-red-light'
              : 'border-border-subtle bg-bg-surface';

        return (
          <div
            key={i}
            className={`border rounded-2xl p-6 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${cardBg}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-bg-elevated">
                {signal.icon}
              </div>
              <div className="font-display text-base font-bold">{signal.title}</div>
            </div>
            <div className="text-sm text-text-secondary mb-4">{signal.question}</div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSignal(i, 'green')}
                className={`flex-1 py-2.5 px-3 rounded-lg border text-[13px] font-medium cursor-pointer transition-all text-center ${
                  selected === 'green'
                    ? 'bg-green-light border-green-success text-green-success'
                    : 'bg-bg-elevated border-border-subtle text-text-secondary hover:border-[rgba(0,0,0,0.15)]'
                }`}
              >
                {signal.greenLabel}
              </button>
              <button
                type="button"
                onClick={() => setSignal(i, 'red')}
                className={`flex-1 py-2.5 px-3 rounded-lg border text-[13px] font-medium cursor-pointer transition-all text-center ${
                  selected === 'red'
                    ? 'bg-red-light border-red-alert text-red-alert'
                    : 'bg-bg-elevated border-border-subtle text-text-secondary hover:border-[rgba(0,0,0,0.15)]'
                }`}
              >
                {signal.redLabel}
              </button>
            </div>
            {selected && (
              <div className="text-xs text-text-muted mt-2.5 pt-2.5 border-t border-border-subtle">
                {selected === 'green' ? signal.greenDetail : signal.redDetail}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Phase-0 version: checkboxes with auto-result ── */

export type ReadinessCheckItem = {
  text: string;
  hint?: string;
};

type Phase0ReadinessProps = {
  items: ReadinessCheckItem[];
  storageKey?: string;
};

export function Phase0Readiness({
  items,
  storageKey = 'phase0_readiness',
}: Phase0ReadinessProps) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const toggle = useCallback(
    (index: number) => {
      setChecked((prev) => {
        const next = { ...prev };
        if (next[index]) {
          delete next[index];
        } else {
          next[index] = true;
        }
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [storageKey]
  );

  const count = Object.values(checked).filter(Boolean).length;
  const isReady = count >= 3;
  const hasAny = count > 0;

  return (
    <div>
      <p className="text-[13px] text-text-secondary px-4 pb-3">
        Marca cada señal que el gobierno cumple. El indicador se actualiza automáticamente.
      </p>
      <div className="px-4">
        {items.map((item, i) => {
          const isChecked = !!checked[i];
          return (
            <div
              key={i}
              className="flex items-start gap-3 py-3 border-b border-border-subtle last:border-b-0 cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div
                className={`w-5 h-5 rounded-[6px] border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                  isChecked
                    ? 'bg-green-success border-green-success'
                    : 'border-text-muted hover:border-blue-primary'
                }`}
              >
                <span
                  className={`text-white text-xs font-bold ${isChecked ? 'block' : 'hidden'}`}
                >
                  ✓
                </span>
              </div>
              <div>
                <div
                  className={`text-sm leading-relaxed ${isChecked ? 'line-through text-text-muted' : ''}`}
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

      <div
        className={`mx-4 mt-4 p-3.5 px-4 rounded-xl text-[13px] font-semibold text-center transition-all duration-300 ${
          !hasAny
            ? 'bg-bg-elevated text-text-muted'
            : isReady
              ? 'bg-green-light text-green-success border border-[rgba(5,150,105,0.2)]'
              : 'bg-red-light text-red-alert border border-[rgba(220,38,38,0.2)]'
        }`}
      >
        {!hasAny
          ? 'Completa la evaluación para ver el resultado'
          : isReady
            ? `${count}/4 señales verdes — Listo para arrancar`
            : `${count}/4 señales verdes — No comprometer timeline`}
      </div>
    </div>
  );
}
