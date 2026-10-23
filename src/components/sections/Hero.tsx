import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AuroraBackground } from '@/components/primitives/AuroraBackground'

const barData = [38, 52, 44, 67, 58, 82, 74, 96]

const avatars = [
  { initials: 'PN', from: 'from-brand-500', to: 'to-brand-700' },
  { initials: 'DO', from: 'from-aqua-400', to: 'to-aqua-500' },
  { initials: 'ML', from: 'from-ember-400', to: 'to-ember-500' },
  { initials: 'JK', from: 'from-brand-400', to: 'to-aqua-400' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-36">
      <AuroraBackground />

      <div className="container-page relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="border-brand-400/30 bg-brand-500/10 text-brand-100">
              <Sparkles className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
              Introducing Vela Copilot
              <ArrowRight className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-6 text-[2.6rem] font-bold leading-[1.04] tracking-tightest sm:text-6xl lg:text-[4.25rem]"
          >
            Product intelligence,
            <br className="hidden sm:block" />{' '}
            <span className="text-gradient">on autopilot.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Vela watches every funnel, cohort and release, then tells you what changed and why —
            in plain English, before your next standup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button variant="primary" size="lg" asChild className="w-full sm:w-auto">
              <a href="#pricing">
                Start for free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
              <a href="#product">
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                Watch the demo
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <div className="flex -space-x-2.5" aria-hidden="true">
              {avatars.map((a) => (
                <span
                  key={a.initials}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${a.from} ${a.to} text-[11px] font-semibold text-white ring-2 ring-ink-950`}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Trusted by <span className="font-semibold text-slate-200">4,000+</span> product teams
              — no credit card required.
            </p>
          </motion.div>
        </div>

        <HeroPreview />
      </div>
    </section>
  )
}

function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 max-w-5xl sm:mt-20"
    >
      {/* Glow behind the app window */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-10 -top-10 bottom-0 rounded-[3rem] bg-brand-600/20 blur-3xl"
      />

      <div className="gradient-border glass relative overflow-hidden rounded-3xl p-1.5 shadow-card sm:rounded-4xl sm:p-2">
        <div className="overflow-hidden rounded-[1.35rem] bg-ink-900/80 sm:rounded-[1.6rem]">
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="ml-1 hidden flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              app.vela.io/insights
            </div>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live
            </span>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-5">
            {/* KPI column */}
            <div className="space-y-3">
              {[
                { label: 'Active users', value: '128,402', delta: '+12.4%', up: true },
                { label: 'Activation', value: '64.1%', delta: '+3.8%', up: true },
                { label: 'Churn', value: '1.9%', delta: '-0.6%', up: false },
              ].map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.12 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5"
                >
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">{kpi.label}</p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">{kpi.value}</p>
                  <p
                    className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${
                      kpi.up ? 'text-emerald-400' : 'text-ember-400'
                    }`}
                  >
                    <TrendingUp className={`h-3 w-3 ${kpi.up ? '' : 'rotate-180'}`} aria-hidden="true" />
                    {kpi.delta}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Chart column */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">Weekly active users</p>
                  <p className="text-xs text-slate-500">Last 8 weeks</p>
                </div>
                <span className="rounded-full border border-brand-400/25 bg-brand-500/10 px-2.5 py-1 text-[11px] font-medium text-brand-200">
                  +38.2%
                </span>
              </div>

              <div className="mt-5 flex h-40 items-end gap-2 sm:h-48 sm:gap-3">
                {barData.map((h, i) => (
                  <motion.div
                    key={i}
                    className="relative flex-1 rounded-t-md bg-gradient-to-t from-brand-600/40 via-brand-500 to-aqua-400"
                    initial={{ height: 0, opacity: 0.4 }}
                    animate={{ height: `${h}%`, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-slate-600">
                {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'].map((w) => (
                  <span key={w} className="flex-1 text-center">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating insight chips */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="glass absolute -left-3 bottom-10 hidden max-w-[15rem] rounded-2xl p-3.5 shadow-card lg:block animate-float"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/20">
            <Sparkles className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
          </span>
          <p className="text-xs font-semibold text-white">Anomaly detected</p>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          Checkout completion dropped 6% after the v2.4 release. Likely cause: payment step latency.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="glass absolute -right-3 top-16 hidden rounded-2xl p-3.5 shadow-card lg:block animate-float-slow"
      >
        <p className="text-[11px] uppercase tracking-wide text-slate-500">Time to insight</p>
        <p className="mt-1 font-display text-2xl font-semibold text-white">4.2s</p>
        <p className="text-xs text-emerald-400">-42% vs last quarter</p>
      </motion.div>
    </motion.div>
  )
}
