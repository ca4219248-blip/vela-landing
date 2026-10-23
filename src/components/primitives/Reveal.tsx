import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
  delay?: number
  /** Stagger children with this step (seconds) when used with <Reveal.Item>. */
  as?: 'div' | 'section' | 'li' | 'span'
}

/**
 * Scroll-triggered entrance animation. Falls back to an instant render for
 * users who prefer reduced motion.
 */
export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const { x, y } = reduce ? offset.none : offset[direction]
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
