import { Section, SectionHeading } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { steps } from '@/lib/content'

export function Workflow() {
  return (
    <Section id="product" className="scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Live in an afternoon. <span className="text-gradient">Useful for years.</span>
            </>
          }
          description="Three steps, no data team required. Vela does the modelling, the baselining and the explaining."
        />

        <div className="relative mt-16">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block"
          />

          <ol className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal as="li" key={step.title} delay={i * 0.12} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-brand-200 ring-1 ring-inset ring-brand-400/30">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-semibold tracking-widest text-slate-600">
                      STEP {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{step.description}</p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </Section>
  )
}
