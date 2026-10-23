import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
}

/** Consistent vertical rhythm wrapper for every landing-page section. */
export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn('relative py-20 sm:py-28 lg:py-32', className)} {...props}>
      {children}
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl text-center items-center' : 'max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-[1.1] tracking-tightest sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
      )}
    </div>
  )
}
