import { trustedBy } from '@/lib/content'

export function LogoCloud() {
  // Duplicated list drives the seamless CSS marquee.
  const row = [...trustedBy, ...trustedBy]

  return (
    <section aria-label="Trusted by" className="relative py-10 sm:py-14">
      <div className="container-page">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Powering product decisions at
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl font-semibold tracking-tight text-slate-500/70 transition-colors hover:text-slate-300 sm:text-2xl"
              aria-hidden={i >= trustedBy.length}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
