import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Are you an official cable or internet service provider?", a: "No. We are an independent third-party assistance platform. CONNECTCORE SOLUTIONS does not sell, install, or provide any internet, cable, or streaming services, and we have no official standing with any provider." },
  { q: "Do you sell internet, cable, or streaming plans?", a: "No. We do not sell, resell, or bundle any internet, cable, or streaming plans. Our role is strictly limited to providing independent informational guidance and assistance." },
  { q: "Are you affiliated with any cable or internet company?", a: "No. We are not affiliated with, authorized by, endorsed by, or sponsored by any internet, broadband, cable TV, or streaming provider. All trademarks belong to their respective owners and are referenced for informational purposes only." },
  { q: "Do you charge for your services?", a: "Yes. Service fees apply separately for our assistance. Our charges are entirely independent of and unrelated to any service provider fees. Please contact us for details." },
  { q: "Will I still be billed by my service provider?", a: "Yes. Your existing service provider billing remains completely unchanged. Our assistance fee is a separate, independent charge for the guidance we provide and has no impact on your provider's invoices." },
  { q: "Do you need my account passwords or sensitive information?", a: "No. We never request passwords, login credentials, Social Security numbers, or sensitive financial information. We provide general informational guidance only and have no need for account access." },
  { q: "Which providers do you support?", a: "We may reference multiple providers for general informational guidance purposes only. We have no affiliation, authorization, or partnership with any provider. Any provider names mentioned are used strictly for reference." },
  { q: "What services do you provide?", a: "We provide informational guidance and general assistance related to internet, Wi-Fi, cable TV, and streaming setup questions. Our support is purely advisory and educational in nature." },
  { q: "Can you guarantee a resolution to my issue?", a: "No. We provide guidance and informational support only. We do not guarantee any specific outcomes, service availability, or resolutions." },
  { q: "How is my data handled?", a: "We take privacy seriously. We do not store passwords or sensitive financial data. All communication uses secure channels. Please review our Privacy Policy for full details." },
  { q: "Are your services refundable?", a: "Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether the service has already been fully delivered. Please review our Refund Policy page for full eligibility details." },
  { q: "When was CONNECTCORE SOLUTIONS launched?", a: "CONNECTCORE SOLUTIONS is a startup launched in 2026, built to provide independent, unbiased assistance for connectivity-related questions." },
];

const FAQSection = () => (
  <section className="py-16 lg:py-20 bg-muted">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left font-heading font-semibold text-sm hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
