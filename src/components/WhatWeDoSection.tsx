import { CheckCircle, XCircle } from "lucide-react";

const doItems = [
  "Provide guidance on internet, cable, and streaming questions",
  "Assist with understanding services and options available",
  "Help navigate common issues with independent advice",
  "Offer informational support for decision-making",
];

const dontItems = [
  "We are not an Internet Service Provider (ISP)",
  "We do not provide official customer support for any brand",
  "We are not affiliated, authorized, or endorsed by any telecom or cable company",
  "We do not sell internet, cable, or streaming subscriptions",
  "We do not provide guaranteed technical fixes or outcome assurances",
  "All mentions of providers, if any, are strictly for informational purposes only",
];

const WhatWeDoSection = () => (
  <section className="py-16 lg:py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Transparency Is Our <span className="text-primary">Priority</span>
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
