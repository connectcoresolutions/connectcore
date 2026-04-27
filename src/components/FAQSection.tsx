import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Is ConnectCore Solutions an official cable or internet provider?", a: "No. ConnectCore Solutions is a fully independent advisory service. We do not sell, install, or manage any internet, cable, or streaming service, and we hold no official standing with any provider whatsoever." },
  { q: "Do you sell or resell internet, cable, or streaming plans?", a: "No. We do not sell, resell, bundle, or promote any connectivity plans. Our sole function is to provide objective, educational advisory support to help consumers make their own informed choices." },
  { q: "Are you partnered with or endorsed by any service provider?", a: "No. We have zero partnerships, affiliations, endorsements, or sponsorship arrangements with any internet, broadband, cable TV, or streaming company. All brand names are the property of their respective owners and are referenced only for educational context." },
  { q: "Do you charge for your advisory services?", a: "Yes. Our advisory consultations are provided for a fee, which is quoted and agreed upon before any service is delivered. All charges are entirely independent of any provider fees or bills you may already have." },
  { q: "Will my existing provider bills change?", a: "No. Your provider billing remains completely unaffected by using our service. The fee you pay ConnectCore Solutions covers our advisory time only and has absolutely no connection to your provider's invoices." },
  { q: "Will you ever ask for my passwords or financial details?", a: "Never. We do not request passwords, login credentials, Social Security numbers, bank details, or any sensitive personal or financial information. Our advisory work requires none of these and we will never ask for them." },
  { q: "Which service providers can you advise on?", a: "Our advisors carry general working knowledge of the connectivity landscape and can discuss a broad range of providers in an informational capacity. We have no formal relationship with any of them — our perspective is always that of an independent, unbiased third party." },
  { q: "What specifically does your advisory service cover?", a: "We cover internet and broadband topics, home Wi-Fi optimisation, cable TV basics, streaming platform overviews, device connectivity, and general billing comprehension. All guidance is educational and advisory in nature." },
  { q: "Can you guarantee my issue will be resolved?", a: "No. Our role is to advise and educate, not to fix or guarantee outcomes. Service availability, technical resolution, and final decisions all remain with you and, where applicable, your service provider." },
  { q: "How do you protect the information I share with you?", a: "We take data protection seriously. Sensitive financial data and passwords are never collected or stored. All communications are handled over secure channels. Full details are available in our Privacy Policy." },
  { q: "What is your refund policy?", a: "Clients may submit a written refund request within 7 to 15 days of the advisory session, depending on the scope of service delivered. Refund eligibility is assessed individually. Full terms are outlined in our Refund Policy page." },
  { q: "When was ConnectCore Solutions established?", a: "ConnectCore Solutions was established in 2026 as a dedicated independent advisory platform, created to bring transparency and consumer-focused clarity to the often confusing home connectivity market." },
];

const FAQSection = () => (
  <section className="py-16 lg:py-20 bg-muted">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Questions We Get <span className="text-primary">Asked Most</span>
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
