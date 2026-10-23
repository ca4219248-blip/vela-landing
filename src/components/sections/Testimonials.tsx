import { Quote, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { securityBadges, testimonials } from '@/lib/content'

export function Testimonials() {
  return (
    <Section className="scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Loved by teams"
          title={
            <>
              The quiet advantage behind <span className="text-gradient">fast product teams.</span>
            </>
          }
          description="Product, growth and data teams use Vela to stop debating numbers and start shipping."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <Card interactive className="flex h-full flex-col p-7">
                <Quote className="h-7 w-7 text-brand-400/60" aria-hidden="true" />
                <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-ember-400 text-ember-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-aqua-500 text-sm font-semibold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {securityBadges.map((badge) => {
              const Icon = badge.icon
              return (
                <li key={badge.label} className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <Icon className="h-4 w-4 text-brand-300" aria-hidden="true" />
                  {badge.label}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
