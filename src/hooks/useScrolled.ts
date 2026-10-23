import { useEffect, useState } from 'react'

/**
 * Tracks whether the window has scrolled past a threshold. Used to
 * condense and frost the sticky navbar once the user leaves the hero.
 */
export function useScrolled(threshold = 12): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
