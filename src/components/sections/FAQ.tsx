import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Section, SectionHeading } from '@/components/primitives/Section'
import { faqs } from '@/lib/content'

export function FAQ() {
  return (
    <Section id="faq" className="scroll-mt-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="text-gradient">answered.</span>
              </>
            }
            description="Can't find what you're looking for? Our team replies within a few hours."
          />

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  )
}
