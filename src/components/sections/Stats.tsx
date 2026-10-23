import { Section } from '@/components/primitives/Section'
import { Reveal } from '@/components/primitives/Reveal'
import { useCountUp } from '@/hooks/useCountUp'
import { stats, type Stat } from '@/lib/content'

export function Stats() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="gradient-border glass rounded-4xl p-8 sm:p-10">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center lg:text-left">
                <StatItem stat={stat} />
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value)
  const decimals = stat.decimals ?? (Number.isInteger(stat.value) ? 0 : 1)
  const display = value.toFixed(decimals)

  return (
    <div>
      <dd className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        <span className="text-gradient">
          {stat.prefix}
          <span ref={ref}>{display}</span>
          {stat.suffix}
        </span>
      </dd>
      <dt className="mt-2 text-sm text-slate-400">{stat.label}</dt>
    </div>
  )
}
