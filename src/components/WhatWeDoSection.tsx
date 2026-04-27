import { CheckCircle, XCircle } from "lucide-react";

const doItems = [
  "Offer clear, honest guidance on internet, cable, and streaming topics",
  "Help clients compare and evaluate available connectivity options",
  "Walk through general troubleshooting approaches with unbiased advice",
  "Support informed decision-making through educational consultations",
];

const dontItems = [
  "We are not an Internet Service Provider (ISP) or cable operator",
  "We do not represent or speak on behalf of any service provider brand",
  "We carry no affiliation, authorisation, or endorsement from any telecom company",
  "We do not sell, bundle, or resell internet, cable, or streaming subscriptions",
  "We cannot guarantee specific technical outcomes or service resolutions",
  "Provider names, where referenced, are for contextual information only",
];

const WhatWeDoSection = () => (
  <section className="py-16 lg:py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Clarity & Honesty Are Our <span className="text-primary">Foundation</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            What We Do
          </h3>
          <ul className="space-y-3">
            {doItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
            <XCircle className="h-6 w-6 text-destructive" />
            What We Do NOT Do
          </h3>
          <ul className="space-y-3">
            {dontItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="h-4 w-4 text-destructive mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
