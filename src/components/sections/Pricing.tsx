import { useState } from 'react'
import { Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { plans, type Plan } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <Section id="pricing" className="scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple pricing that <span className="text-gradient">scales with you.</span>
            </>
          }
          description="Start free, upgrade when you grow. Every paid plan includes the AI layer, integrations and unlimited history."
        />

        {/* Billing period toggle */}
        <div className="mt-9 flex justify-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            <ToggleButton active={!annual} onClick={() => setAnnual(false)}>
              Monthly
            </ToggleButton>
            <ToggleButton active={annual} onClick={() => setAnnual(true)}>
              Annual
              <span className="ml-1.5 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                Save 20%
              </span>
            </ToggleButton>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className={cn(plan.highlighted && 'lg:-mt-4 lg:mb-4')}>
              <PlanCard plan={plan} annual={annual} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors',
        active ? 'bg-white text-ink-950' : 'text-slate-300 hover:text-white',
      )}
    >
      {children}
    </button>
  )
}

function PlanCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const price = annual ? plan.annual : plan.monthly

  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300',
        plan.highlighted
          ? 'gradient-border bg-brand-500/[0.07] shadow-glow'
          : 'glass card-hover shadow-card',
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-gradient px-3.5 py-1 text-xs font-semibold text-white shadow-glow-sm">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Most popular
        </span>
      )}

      <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
      <p className="mt-1.5 text-sm text-slate-400">{plan.tagline}</p>

      <div className="mt-6 flex items-end gap-1.5">
        <span className="font-display text-4xl font-bold tracking-tight text-white">
          ${price}
        </span>
        <span className="pb-1 text-sm text-slate-500">/month</span>
      </div>
      <p className="mt-1 h-5 text-xs text-slate-500">
        {price === 0
          ? 'Free forever'
          : annual
            ? 'Billed annually'
            : 'Billed monthly, cancel anytime'}
      </p>

      <Button
        variant={plan.highlighted ? 'primary' : 'secondary'}
        size="lg"
        asChild
        className="mt-6 w-full"
      >
        <a href="#">{plan.cta}</a>
      </Button>

      <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <span
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                plan.highlighted ? 'bg-brand-500/25 text-brand-200' : 'bg-white/10 text-aqua-300',
              )}
            >
              <Check className="h-3 w-3" aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
