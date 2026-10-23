import { cn } from '@/lib/utils'

/** The Vela wordmark + gradient sail glyph. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="vela-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A99CFF" />
            <stop offset="0.55" stopColor="#6E5BFF" />
            <stop offset="1" stopColor="#22C9E0" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="rgba(255,255,255,0.04)" />
        <path
          d="M8 9.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v.3c0 .6-.28 1.17-.76 1.53L16 17l-7.24-5.67A1.9 1.9 0 0 1 8 9.8V9.5Z"
          fill="url(#vela-mark)"
        />
        <path d="M10 21.5h12M12.5 25h7" stroke="url(#vela-mark)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[1.35rem] font-bold tracking-tight text-white">
        Vela
      </span>
    </span>
  )
}
