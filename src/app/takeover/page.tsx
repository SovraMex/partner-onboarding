'use client';

import { useState, useCallback } from 'react';
import { Header } from '@/components/Header';
import { Checklist } from '@/components/Checklist';
import { ProgressBar } from '@/components/ProgressBar';
import { PhaseNav } from '@/components/PhaseNav';
import {
  Sidebar,
  SidebarCard,
  EscalationBox,
} from '@/components/Sidebar';
import {
  takeoverHero,
  takeoverDifferences,
  t1,
  t1Checklist,
  t1Decision,
  t2,
  t2Checklist,
  t2Decision,
  t3,
  t3Checklist,
  t3Decision,
  takeoverStorageKey,
  takeoverErrors,
  takeoverTimeline,
  takeoverSidebarContext,
  takeoverEscalationItems,
} from '@/data/takeover-content';

const progressPhaseLabels = [
  'T1 \u00b7 Transferencia',
  'T2 \u00b7 Presentaci\u00f3n',
  'T3 \u00b7 Operaci\u00f3n',
];

const iconColorClasses: Record<string, string> = {
  blue: 'bg-blue-light text-blue-primary',
  purple: 'bg-purple-light text-purple-accent',
  green: 'bg-green-light text-green-success',
};

const dotClasses: Record<string, string> = {
  active: 'bg-blue-primary shadow-[0_0_6px_rgba(0,102,204,0.4)]',
  pending: 'bg-text-muted',
  done: 'bg-green-success',
};

const totalItems = t1Checklist.length + t2Checklist.length + t3Checklist.length;

export default function TakeoverPage() {
  const [t1Count, setT1Count] = useState(0);
  const [t2Count, setT2Count] = useState(0);
  const [t3Count, setT3Count] = useState(0);

  const handleT1Change = useCallback((completed: number) => {
    setT1Count(completed);
  }, []);

  const handleT2Change = useCallback((completed: number) => {
    setT2Count(completed);
  }, []);

  const handleT3Change = useCallback((completed: number) => {
    setT3Count(completed);
  }, []);

  const completedCount = t1Count + t2Count + t3Count;
  const percent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  return (
    <>
      <Header />
      <main className="max-w-[1100px] mx-auto px-6">
        {/* Hero */}
        <section className="pt-10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-semibold bg-bg-elevated text-text-muted border border-border-subtle mb-4">
            <span className="w-2 h-2 rounded-full bg-text-muted animate-[pulse_2s_infinite]" />
            {takeoverHero.badge}
          </div>
          <h1 className="font-display text-[2.5rem] font-extrabold leading-tight mb-3">
            {takeoverHero.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            {takeoverHero.description}
          </p>
        </section>

        {/* Why it's different — 4 cards */}
        <section className="pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {takeoverDifferences.map((card, i) => (
              <div
                key={i}
                className="bg-bg-surface border border-border-subtle rounded-2xl p-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-sm font-semibold">{card.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Progress Bar */}
        <section className="pb-10">
          <ProgressBar
            completed={percent}
            total={100}
            phaseLabels={progressPhaseLabels}
            activePhaseIndex={0}
          />
        </section>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 pb-10">
          {/* Main content */}
          <div className="flex flex-col gap-6">
            {/* Phase T1 */}
            <div className="bg-bg-surface border border-border-subtle rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-mono font-bold shrink-0 ${iconColorClasses[t1.iconColor]}`}
                >
                  {t1.icon}
                </div>
                <div>
                  <div className="font-display text-[15px] font-bold">
                    {t1.title}
                  </div>
                  <div className="text-[13px] text-text-secondary">
                    {t1.subtitle}
                  </div>
                </div>
              </div>
              <Checklist
                storageKey={`${takeoverStorageKey}_t1`}
                items={t1Checklist}
                onCountChange={handleT1Change}
              />
              <div className="py-3 mt-4 border-t border-border-subtle">
                <div className="text-sm font-semibold mb-1">{t1Decision.question}</div>
                <div className="text-[13px] text-text-secondary">
                  {t1Decision.criteria}
                </div>
              </div>
            </div>

            {/* Phase T2 */}
            <div className="bg-bg-surface border border-border-subtle rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-mono font-bold shrink-0 ${iconColorClasses[t2.iconColor]}`}
                >
                  {t2.icon}
                </div>
                <div>
                  <div className="font-display text-[15px] font-bold">
                    {t2.title}
                  </div>
                  <div className="text-[13px] text-text-secondary">
                    {t2.subtitle}
                  </div>
                </div>
              </div>
              <Checklist
                storageKey={`${takeoverStorageKey}_t2`}
                items={t2Checklist}
                onCountChange={handleT2Change}
              />
              <div className="py-3 mt-4 border-t border-border-subtle">
                <div className="text-sm font-semibold mb-1">{t2Decision.question}</div>
                <div className="text-[13px] text-text-secondary">
                  {t2Decision.criteria}
                </div>
              </div>
            </div>

            {/* Phase T3 */}
            <div className="bg-bg-surface border border-border-subtle rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-mono font-bold shrink-0 ${iconColorClasses[t3.iconColor]}`}
                >
                  {t3.icon}
                </div>
                <div>
                  <div className="font-display text-[15px] font-bold">
                    {t3.title}
                  </div>
                  <div className="text-[13px] text-text-secondary">
                    {t3.subtitle}
                  </div>
                </div>
              </div>
              <Checklist
                storageKey={`${takeoverStorageKey}_t3`}
                items={t3Checklist}
                onCountChange={handleT3Change}
              />
              <div className="py-3 mt-4 border-t border-border-subtle">
                <div className="text-sm font-semibold mb-1">{t3Decision.question}</div>
                <div className="text-[13px] text-text-secondary">
                  {t3Decision.criteria}
                </div>
              </div>
            </div>

            {/* Errors */}
            <div className="bg-bg-surface border border-border-subtle rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-red-light flex items-center justify-center text-base shrink-0">
                  \u26a0\ufe0f
                </div>
                <div>
                  <div className="font-display text-[15px] font-bold">
                    Errores comunes en takeover
                  </div>
                  <div className="text-[13px] text-text-secondary">
                    Lo que sale mal y c\u00f3mo resolverlo
                  </div>
                </div>
              </div>
              {takeoverErrors.map((err, i) => (
                <div
                  key={i}
                  className="py-3 border-b border-border-subtle last:border-b-0"
                >
                  <div className="text-sm font-semibold text-red-alert mb-1">
                    {err.title}
                  </div>
                  <div className="text-[13px] text-text-secondary">{err.fix}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar>
            {/* Takeover Timeline */}
            <SidebarCard title="\ud83d\udccd Timeline — Takeover">
              {takeoverTimeline.map((phase, i) => (
                <div key={i} className="flex items-center gap-2.5 py-2 text-[13px]">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${dotClasses[phase.status]}`}
                  />
                  <span
                    className={
                      phase.status === 'active'
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

            {/* Context */}
            <SidebarCard title={`\ud83d\udca1 ${takeoverSidebarContext.title}`}>
              <div className="text-[13px] text-text-secondary leading-relaxed">
                {takeoverSidebarContext.paragraphs.map((p, i) => (
                  <p key={i} className={i > 0 ? 'mt-2' : ''}>
                    {p.includes('**') ? (
                      <>
                        {p.split('**').map((part, pi) =>
                          pi % 2 === 1 ? (
                            <strong key={pi}>{part}</strong>
                          ) : (
                            <span key={pi}>{part}</span>
                          )
                        )}
                      </>
                    ) : (
                      p
                    )}
                  </p>
                ))}
              </div>
            </SidebarCard>

            <EscalationBox
              title="\ud83d\udd37 Cu\u00e1ndo escalar a Sovra"
              items={takeoverEscalationItems}
            />
          </Sidebar>
        </div>

        {/* Phase Nav */}
        <PhaseNav
          prevHref="/fase-e"
          prevLabel="Fase E: Post-lanzamiento"
          nextHref="/"
          nextLabel="Volver al inicio"
        />
      </main>
    </>
  );
}
