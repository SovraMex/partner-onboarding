'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { PhaseCard, type PhaseCardData } from '@/components/PhaseCard';
import { SystemCard } from '@/components/SystemCard';
import { EditionCompare, type EditionData } from '@/components/EditionCompare';
import { LandingReadiness } from '@/components/ReadinessAssessment';
import { phases, takeover } from '@/data/phases';
import { products, productCategories } from '@/data/products';
import { repos } from '@/data/repos';
import { readinessSignals } from '@/data/readiness';
import { editions } from '@/data/editions';
import { landingHero, timelineWeekLabels, ctaButton } from '@/data/landing';

/* ── Map phases data to PhaseCard props ── */

const phaseIdMap: Record<string, string> = {
  'fase-0': '0',
  'fase-a': 'a',
  'fase-b': 'b',
  'fase-c': 'c',
  'fase-d': 'd',
  'fase-e': 'e',
};

const statusLabelMap: Record<string, string> = {
  current: 'Empezar aquí',
  locked: 'Siguiente',
  pending: 'Pendiente',
};

const phaseCards: PhaseCardData[] = phases.map((p) => ({
  phaseId: phaseIdMap[p.id] || p.id,
  number: p.badgeLabel,
  name: p.name,
  weeks: p.weeks,
  description: p.description,
  href: p.route,
  status: p.status === 'pending' ? 'locked' : (p.status as 'current' | 'locked'),
  statusLabel:
    p.status === 'current'
      ? 'Empezar aquí'
      : p.id === 'fase-a'
        ? 'Siguiente'
        : 'Pendiente',
}));

/* ── Map editions data to EditionCompare props ── */

function mdBoldToHtml(s: string): string {
  return s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

const editionCards: [EditionData, EditionData] = [
  {
    tag: editions[0].tag,
    tagColor: editions[0].tagColor,
    subtitle: editions[0].sizeLabel,
    title: editions[0].title,
    features: editions[0].features.map(mdBoldToHtml),
    footer: editions[0].footnote ? { text: editions[0].footnote, type: 'text' } : undefined,
  },
  {
    tag: editions[1].tag,
    tagColor: editions[1].tagColor,
    subtitle: editions[1].sizeLabel,
    title: editions[1].title,
    features: editions[1].features.map(mdBoldToHtml),
    footerLink: editions[1].footnoteLink
      ? { text: editions[1].footnoteLinkLabel!, href: editions[1].footnoteLink }
      : undefined,
  },
];

/* ── Timeline segment colors ── */

const segmentColors: Record<string, string> = {
  a: 'bg-blue-primary',
  b: 'bg-purple-accent',
  c: 'bg-orange-accent',
  d: 'bg-green-success',
  e: 'bg-yellow-warning',
};

/* ── Page ── */

export default function Home() {
  const [readinessResult, setReadinessResult] = useState<'pass' | 'fail' | null>(null);

  const handleReadinessResult = useCallback((result: 'pass' | 'fail' | null) => {
    setReadinessResult(result);
  }, []);

  const timelinePhases = phases.filter((p) => p.timelineWeeks);
  const totalWeeks = timelinePhases.reduce((sum, p) => sum + (p.timelineWeeks || 0), 0);

  return (
    <>
      <Header />

      <main className="max-w-[1100px] mx-auto px-6">
        {/* ── Hero ── */}
        <section className="text-center py-16 pb-12">
          <div className="inline-block text-xs font-semibold px-4 py-1.5 bg-blue-light text-blue-primary rounded-[20px] mb-5">
            {landingHero.badge}
          </div>
          <h1 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold leading-tight mb-4">
            Tu guía para implementar
            <br />
            SovraGov en 90 días
          </h1>
          <p className="text-text-secondary text-base max-w-2xl mx-auto leading-relaxed">
            {landingHero.description}
          </p>
        </section>

        {/* ── Timeline ── */}
        <section className="mb-12">
          <div className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider mb-5">
            Roadmap — 90 días
          </div>

          {/* Week labels */}
          <div className="flex justify-between mb-2 px-0.5">
            {timelineWeekLabels.map((label) => (
              <span key={label} className="font-mono text-[11px] text-text-muted">
                {label}
              </span>
            ))}
          </div>

          {/* Timeline bar */}
          <div className="flex gap-0.5 h-2.5 rounded-full overflow-hidden mb-8">
            {timelinePhases.map((p) => {
              const phaseKey = phaseIdMap[p.id] || p.id;
              const widthPercent = ((p.timelineWeeks || 0) / totalWeeks) * 100;
              return (
                <div
                  key={p.id}
                  className={`${segmentColors[phaseKey]} rounded-sm opacity-80`}
                  style={{ width: `${widthPercent}%` }}
                />
              );
            })}
          </div>

          {/* Phase cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {phaseCards.map((card) => (
              <PhaseCard key={card.phaseId} card={card} />
            ))}
          </div>

          {/* Takeover link */}
          <div className="text-center mt-5">
            <Link
              href={takeover.route}
              className="text-sm text-text-muted no-underline border-b border-dashed border-text-muted hover:text-text-secondary transition-colors"
            >
              {takeover.label}
            </Link>
          </div>
        </section>

        {/* ── Editions ── */}
        <section className="mb-12 pt-8 border-t border-[rgba(0,0,0,0.06)]">
          <div className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Dos ediciones — mismo plazo, diferente escala
          </div>
          <p className="text-text-secondary text-[15px] mb-6">
            No todos los gobiernos son iguales. El criterio: si el gobierno tiene menos de 10
            trámites totales, usa la edición Gobierno Pequeño.
          </p>
          <EditionCompare editions={editionCards} />
        </section>

        {/* ── System Products ── */}
        <section className="mb-12">
          <div className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider mb-6">
            Qué incluye el sistema — 13 productos
          </div>

          {productCategories.map((cat) => {
            const catProducts = products.filter((p) => p.category === cat.key);
            return (
              <div key={cat.key} className="mb-8">
                <h3 className="font-display text-base text-text-secondary uppercase tracking-wide mb-3">
                  {cat.label}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {catProducts.map((product) => (
                    <SystemCard
                      key={product.title}
                      card={{
                        icon: product.icon,
                        title: product.title,
                        description: product.description,
                        githubLink: product.githubLink,
                        githubLabel: product.githubLabel,
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ── GitHub Repos ── */}
        <section className="mb-12 pt-8 border-t border-[rgba(0,0,0,0.06)]">
          <div className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
            Repositorios GitHub
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-bg-surface border border-border-subtle rounded-xl no-underline text-inherit hover:border-[rgba(0,0,0,0.15)] transition-colors"
              >
                <span className="text-2xl">{repo.icon}</span>
                <div>
                  <div className="font-semibold text-sm">{repo.name}</div>
                  <div className="text-xs text-text-muted">{repo.description}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Readiness Assessment ── */}
        <section className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Antes de empezar
              </div>
              <h2 className="font-display text-2xl font-bold">¿El gobierno está listo?</h2>
            </div>
            {readinessResult && (
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] text-sm font-semibold ${
                  readinessResult === 'pass'
                    ? 'bg-green-light text-green-success'
                    : 'bg-red-light text-red-alert'
                }`}
              >
                {readinessResult === 'pass' ? `✅ ${ctaButton.passResult}` : `⚠️ ${ctaButton.failResult}`}
              </div>
            )}
          </div>
          <p className="text-text-secondary text-[15px] mb-6">
            Evalúa estas 4 señales antes de comprometer un timeline. Si 2 o más son rojas, ofrece
            una sesión de pre-discovery.
          </p>

          <LandingReadiness signals={readinessSignals} onResult={handleReadinessResult} />
        </section>

        {/* ── CTA ── */}
        <section className="text-center pb-16">
          <Link
            href={readinessResult ? ctaButton.href : '#'}
            onClick={(e) => {
              if (!readinessResult) e.preventDefault();
            }}
            className={`inline-block font-display font-bold text-base px-8 py-4 rounded-xl transition-all no-underline ${
              readinessResult
                ? 'bg-blue-primary text-white hover:bg-blue-hover shadow-[0_4px_12px_rgba(0,102,204,0.25)] hover:-translate-y-0.5'
                : 'bg-bg-elevated text-text-muted cursor-not-allowed'
            }`}
          >
            {ctaButton.text}
          </Link>
          <div
            className={`text-sm mt-3 ${
              readinessResult === 'fail' ? 'text-yellow-warning font-medium' : 'text-text-muted'
            }`}
          >
            {!readinessResult
              ? ctaButton.disabledHint
              : readinessResult === 'pass'
                ? ctaButton.passHint
                : ctaButton.warningHint}
          </div>
        </section>
      </main>
    </>
  );
}
