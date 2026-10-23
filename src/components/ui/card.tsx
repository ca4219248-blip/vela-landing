import { cn } from '@/lib/utils'

/** A frosted, gradient-bordered surface used for every content card. */
export function Card({
  className,
  interactive = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        'gradient-border glass rounded-3xl shadow-card',
        interactive && 'card-hover',
        className,
      )}
      {...props}
    />
  )
}
