import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const faqs = [
  {
    question: "What services does HBR-WORLD provide?",
    answer:
      "HBR-WORLD offers comprehensive contracting services including civil construction, interior/exterior fit-out, MEP works (electrical, plumbing, mechanical, HVAC), facility maintenance, renovation works, and professional manpower supply across Saudi Arabia.",
  },
  {
    question: "Which areas in Saudi Arabia do you operate?",
    answer:
      "We operate across all major cities in Saudi Arabia including Riyadh, Jeddah, Dammam, Makkah, Madinah, and other key industrial and commercial zones throughout the Kingdom.",
  },
  {
    question: "What types of manpower can you supply?",
    answer:
      "We provide skilled workers, semi-skilled workers, general laborers, engineers, technicians, drivers, welders, operators, safety officers, and specialized construction personnel. All our workers are properly trained and certified.",
  },
  {
    question: "How do you ensure quality and safety on projects?",
    answer:
      "We maintain strict protocols, adhere to international safety standards, conduct regular quality audits, and ensure all team members are properly trained and certified. Our commitment to excellence is reflected in our ISO certifications.",
  },
  {
    question: "What is your project timeline guarantee?",
    answer:
      "We pride ourselves on on-time delivery. Each project receives a detailed timeline during the planning phase, and we maintain transparent communication throughout to ensure milestones are met as scheduled.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can request a quote by visiting our Contact page, calling our office directly, or sending an email to info@hbr-world.com. Our team will assess your requirements and provide a competitive, transparent quotation within 48 hours.",
  },
];

export const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("FAQ")}</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              {t("Frequently Asked Questions")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("Find answers to common questions about our services and operations")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/70 backdrop-blur-xl border border-border/50 rounded-2xl px-6 shadow-glass data-[state=open]:shadow-glow transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline no-underline focus:no-underline transition-colors py-6 [&[data-state=open]>svg]:rotate-180">

                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{t(faq.answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
