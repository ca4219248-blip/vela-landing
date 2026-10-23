import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  Database,
  MessageSquare,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/primitives/Section'
import { staggerChild, staggerParent } from '@/components/primitives/Reveal'
import { features, type Feature } from '@/lib/content'
import { cn } from '@/lib/utils'

const accentRing: Record<Feature['accent'], string> = {
  brand: 'from-brand-500/25 to-brand-500/0 text-brand-200',
  aqua: 'from-aqua-500/25 to-aqua-500/0 text-aqua-200',
  ember: 'from-ember-500/25 to-ember-500/0 text-ember-300',
}

export function Features() {
  return (
    <Section id="features" className="scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Vela"
          title={
            <>
              Everything you need to understand
              <br className="hidden sm:block" /> <span className="text-gradient">what your users do.</span>
            </>
          }
          description="One event model, an AI layer on top, and the guardrails a serious data team expects. No dashboards to maintain, no queries to write."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(0,1fr)] lg:grid-cols-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerChild}
              className={cn('h-full', feature.span)}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon

  return (
    <Card
      interactive
      className="group flex h-full flex-col overflow-hidden p-6 sm:p-7"
    >
      <div
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-inset ring-white/10',
          accentRing[feature.accent],
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-white sm:text-xl">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.description}</p>

      {feature.visual && (
        <div className="mt-6 flex flex-1 flex-col">
          <FeatureVisual kind={feature.visual} />
        </div>
      )}

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Learn more
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Card>
  )
}

function FeatureVisual({ kind }: { kind: NonNullable<Feature['visual']> }) {
  if (kind === 'chart') {
    return (
      <div className="relative flex h-full min-h-[10rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <BarChart3 className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
            Retention · D30
          </span>
          <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
            +9.1%
          </span>
        </div>
        <svg viewBox="0 0 320 90" className="mt-4 w-full flex-1" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B79FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B79FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B79FF" />
              <stop offset="100%" stopColor="#3EE0F5" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 C 30 66, 45 40, 70 44 S 110 24, 140 30 S 190 8, 220 20 S 280 6, 320 12 L320 90 L0 90 Z"
            fill="url(#area)"
          />
          <motion.path
            d="M0 70 C 30 66, 45 40, 70 44 S 110 24, 140 30 S 190 8, 220 20 S 280 6, 320 12"
            fill="none"
            stroke="url(#stroke)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    )
  }

  if (kind === 'chat') {
    return (
      <div className="space-y-2.5">
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-brand-500/15 px-3.5 py-2.5 text-xs text-brand-100 ring-1 ring-inset ring-brand-400/20">
          Why did signups dip last Tuesday?
        </div>
        <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs text-slate-300">
          <span className="mb-1.5 flex items-center gap-1.5 font-medium text-white">
            <Sparkles className="h-3.5 w-3.5 text-aqua-300" aria-hidden="true" />
            Vela Copilot
          </span>
          Signups fell 11% — 82% of the drop came from the EU on mobile, right after the v2.4 release. Want me to open the affected funnel?
        </div>
      </div>
    )
  }

  if (kind === 'integrations') {
    const tools = [Database, Bell, Zap, MessageSquare, BarChart3, Sparkles]
    return (
      <div className="grid grid-cols-3 gap-2.5">
        {tools.map((Tool, i) => (
          <div
            key={i}
            className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors group-hover:border-brand-400/25 group-hover:text-brand-200"
          >
            <Tool className="h-5 w-5" aria-hidden="true" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {['Slack alerts', 'Scheduled digests', 'Webhook triggers'].map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
          <Check className="h-4 w-4 text-aqua-300" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}
