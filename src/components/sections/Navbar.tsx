import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/primitives/Logo'
import { navLinks } from '@/lib/content'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'

export function Navbar() {
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)

  // Prevent background scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the sheet on Escape for keyboard users.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'container-page transition-all duration-300',
          scrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-5',
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            'flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5',
            scrolled
              ? 'glass shadow-card'
              : 'border border-transparent bg-transparent',
          )}
        >
          <a
            href="#top"
            className="flex items-center rounded-full py-1 pr-2 transition-opacity hover:opacity-90"
            aria-label="Vela — back to top"
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="ghost" size="sm" asChild>
              <a href="#">Sign in</a>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <a href="#pricing">Get started</a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="container-page lg:hidden"
          >
            <div className="glass mt-2 flex flex-col gap-1 rounded-3xl p-4 shadow-card">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-1 gap-2 border-t border-white/10 pt-4 sm:grid-cols-2">
                <Button variant="secondary" asChild>
                  <a href="#" onClick={() => setOpen(false)}>
                    Sign in
                  </a>
                </Button>
                <Button variant="primary" asChild>
                  <a href="#pricing" onClick={() => setOpen(false)}>
                    Get started
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
