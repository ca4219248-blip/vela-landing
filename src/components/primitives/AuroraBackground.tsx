import { cn } from '@/lib/utils'

/**
 * Decorative aurora backdrop: layered radial gradient "orbs" plus an optional
 * fading grid. Purely presentational and hidden from assistive tech.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px] animate-pulse-glow" />
      <div className="absolute -left-40 top-40 h-[26rem] w-[26rem] rounded-full bg-aqua-500/15 blur-[120px]" />
      <div className="absolute -right-32 top-10 h-[24rem] w-[24rem] rounded-full bg-brand-400/20 blur-[120px] animate-float-slow" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
    </div>
  )
}
