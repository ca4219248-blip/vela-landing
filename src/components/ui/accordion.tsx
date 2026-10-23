import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        'group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors data-[state=open]:border-brand-400/40 data-[state=open]:bg-white/[0.04]',
        className,
      )}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'flex flex-1 items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-semibold text-white transition-colors hover:text-brand-200 sm:px-6',
          className,
        )}
        {...props}
      >
        {children}
        <Plus
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-brand-300 transition-transform duration-300 group-data-[state=open]:rotate-45"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className,
      )}
      {...props}
    >
      <div className="px-5 pb-5 text-[15px] leading-relaxed text-slate-400 sm:px-6">
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}
