import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/primitives/Reveal'

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-5xl border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Gradient field + grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-brand-gradient opacity-[0.92]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-grid opacity-[0.15] mix-blend-overlay"
            />
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-24 -z-10 h-72 w-72 rounded-full bg-white/25 blur-3xl"
            />

            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-[1.1] tracking-tightest text-white sm:text-4xl lg:text-5xl">
              Stop guessing. Start shipping what works.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              Join 4,000+ teams using Vela to turn product data into decisions. Free to start — no
              credit card, no sales call.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="w-full bg-white text-ink-950 shadow-lg hover:bg-white/90 sm:w-auto [background-image:none] [animation:none]"
              >
                <a href="#pricing">
                  Start for free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="w-full border border-white/40 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
              >
                <a href="#">Book a demo</a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/70">
              Free 14-day trial on Growth · Cancel anytime
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
