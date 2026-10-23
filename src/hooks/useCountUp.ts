import { useEffect, useRef, useState } from 'react'

/**
 * Counts up to `end` once the element scrolls into view. Returns a ref to
 * attach and the current animated value. Honors reduced-motion by snapping
 * straight to the final value.
 */
export function useCountUp(end: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(end)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // easeOutExpo for a snappy, premium feel
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
          setValue(end * eased)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end, duration])

  return { ref, value }
}
