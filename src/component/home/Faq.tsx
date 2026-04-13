import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>
            Can I cancel anytime?
          </AccordionTrigger>
          <AccordionContent>
            Yes, anytime.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger>
            Do you support mobile?
          </AccordionTrigger>
          <AccordionContent>
            Fully responsive on all devices.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}