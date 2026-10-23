import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Logo } from '@/components/primitives/Logo'
import { footerColumns } from '@/lib/content'

const socials = [
  { label: 'X', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative border-t border-white/10 pt-16">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + newsletter */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Vela is the AI-native product analytics platform. Understand behaviour, surface
              insights, and ship what matters — without writing a query.
            </p>

            <form onSubmit={onSubmit} className="mt-7 max-w-sm">
              <label htmlFor="newsletter-email" className="text-sm font-medium text-slate-200">
                Get product updates
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                  className="h-11 flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-brand-400/60 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow-sm transition-transform hover:scale-[1.03] active:scale-95"
                >
                  {subscribed ? (
                    <Check className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
              <p className="mt-2 h-4 text-xs text-emerald-300" role="status">
                {subscribed ? 'Thanks — you’re on the list.' : ''}
              </p>
            </form>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-sm font-semibold text-white">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Vela Labs. All rights reserved.
          </p>
          <ul className="flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-flex h-9 items-center rounded-full border border-white/10 px-3.5 text-xs font-medium text-slate-400 transition-colors hover:border-brand-400/40 hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
