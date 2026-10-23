import {
  Activity,
  Bot,
  Boxes,
  GitBranch,
  LineChart,
  Lock,
  PlugZap,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const trustedBy: string[] = [
  'Northwind',
  'Quanta',
  'Harbor',
  'Lattice',
  'Mono',
  'Cobalt',
  'Fathom',
  'Aperture',
]

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  /** Grid placement for the asymmetric bento layout (desktop). */
  span: string
  accent: 'brand' | 'aqua' | 'ember'
  visual?: 'chart' | 'chat' | 'integrations' | 'code'
}

export const features: Feature[] = [
  {
    icon: LineChart,
    title: 'Insights that surface themselves',
    description:
      'Vela watches every funnel, cohort and release in real time, then flags the movements that actually matter — before your standup.',
    span: 'lg:col-span-3 lg:row-span-2',
    accent: 'brand',
    visual: 'chart',
  },
  {
    icon: Bot,
    title: 'Ask in plain English',
    description:
      'Skip the SQL. Ask a question and get a chart, a written takeaway and the query behind it.',
    span: 'lg:col-span-3',
    accent: 'aqua',
    visual: 'chat',
  },
  {
    icon: PlugZap,
    title: '120+ native integrations',
    description:
      'Warehouse, product, billing and support data, joined automatically into one event model.',
    span: 'lg:col-span-3',
    accent: 'brand',
    visual: 'integrations',
  },
  {
    icon: Sparkles,
    title: 'Anomaly alerts',
    description: 'Get pinged in Slack the moment a metric breaks its expected range.',
    span: 'lg:col-span-2',
    accent: 'ember',
  },
  {
    icon: Users,
    title: 'Built for teams',
    description: 'Shared boards, comments and role-based access, from analysts to executives.',
    span: 'lg:col-span-2',
    accent: 'brand',
  },
  {
    icon: Workflow,
    title: 'Automations',
    description: 'Turn any insight into a workflow that runs on a schedule or a trigger.',
    span: 'lg:col-span-2',
    accent: 'aqua',
  },
]

export interface Stat {
  value: number
  suffix: string
  prefix?: string
  decimals?: number
  label: string
}

export const stats: Stat[] = [
  { value: 42, suffix: '%', label: 'Faster time to insight' },
  { value: 120, suffix: '+', label: 'Native integrations' },
  { value: 3.4, suffix: 'B', label: 'Events processed daily' },
  { value: 99.99, suffix: '%', decimals: 2, label: 'Uptime, last 12 months' },
]

export interface Step {
  icon: LucideIcon
  title: string
  description: string
}

export const steps: Step[] = [
  {
    icon: PlugZap,
    title: 'Connect your stack',
    description:
      'Point Vela at your warehouse and product tools. Our model unifies events in minutes — no pipeline to babysit.',
  },
  {
    icon: Activity,
    title: 'Let it learn your product',
    description:
      'Vela baselines your funnels and defines expected ranges automatically, so signal stands out from noise.',
  },
  {
    icon: GitBranch,
    title: 'Act on what matters',
    description:
      'Get plain-English answers, shareable boards and alerts wired straight into the tools your team already lives in.',
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Vela replaced three dashboards and a weekly analytics request. Our PMs now answer their own questions in seconds, and the anomaly alerts caught a checkout regression before support did.',
    name: 'Priya Nair',
    role: 'VP Product, Northwind',
    initials: 'PN',
  },
  {
    quote:
      'The plain-English layer is the real unlock. I asked a question during a board meeting and had a defensible answer with the underlying query on screen before the slide finished.',
    name: 'Daniel Okoye',
    role: 'Head of Growth, Quanta',
    initials: 'DO',
  },
  {
    quote:
      'Onboarding took an afternoon. The event model just fit our data, and the team stopped arguing about whose numbers were right.',
    name: 'Mei Lin',
    role: 'Staff Data Engineer, Harbor',
    initials: 'ML',
  },
]

export interface Plan {
  name: string
  tagline: string
  monthly: number
  annual: number
  features: string[]
  cta: string
  highlighted?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'For small teams finding their footing.',
    monthly: 0,
    annual: 0,
    features: [
      'Up to 1M monthly events',
      '3 seats included',
      'Core funnels & retention',
      '30-day data history',
      'Community support',
    ],
    cta: 'Start for free',
  },
  {
    name: 'Growth',
    tagline: 'For product teams shipping every week.',
    monthly: 79,
    annual: 63,
    features: [
      'Up to 25M monthly events',
      'Unlimited seats',
      'AI insights & anomaly alerts',
      'Unlimited history',
      '120+ integrations',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    name: 'Scale',
    tagline: 'For platform teams with serious volume.',
    monthly: 249,
    annual: 199,
    features: [
      'Custom event volume',
      'SSO / SAML & SCIM',
      'Audit logs & data residency',
      'Dedicated warehouse sync',
      'Solutions architect',
      '99.99% uptime SLA',
    ],
    cta: 'Talk to sales',
  },
]

export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'How long does setup actually take?',
    answer:
      'Most teams are live the same day. Connect your warehouse or install a product SDK, and Vela builds a unified event model automatically. No pipeline maintenance, no schema migrations to babysit.',
  },
  {
    question: 'Do I need to know SQL?',
    answer:
      'No. Ask questions in plain English and Vela returns a chart, a written takeaway and the underlying query so you can verify it. Analysts can still drop into SQL whenever they want full control.',
  },
  {
    question: 'Where does my data live?',
    answer:
      'Your data stays in your region. Vela supports EU and US data residency, encrypts everything in transit and at rest, and never trains shared models on your event data.',
  },
  {
    question: 'What happens when I hit my event limit?',
    answer:
      'Nothing breaks. We keep ingesting and notify you, so you can upgrade in-app or set a hard cap. You will never silently lose events mid-month.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. Plans are month-to-month or annual, and you can cancel from the dashboard in two clicks. Annual plans are refunded pro-rata for unused time.',
  },
]

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '#product' },
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Customers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'DPA', href: '#' },
    ],
  },
]

export const securityBadges: { icon: LucideIcon; label: string }[] = [
  { icon: Lock, label: 'SOC 2 Type II' },
  { icon: Boxes, label: 'GDPR ready' },
  { icon: Activity, label: '99.99% SLA' },
]
