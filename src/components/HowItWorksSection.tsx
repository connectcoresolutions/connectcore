import { ClipboardList, Headphones, BookOpen, ArrowRight } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Submit Your Request", desc: "Reach out via phone, email, or our contact form with your question." },
  { icon: Headphones, title: "Speak With Our Support Team", desc: "A support representative will connect with you to understand your needs." },
  { icon: BookOpen, title: "Receive Guidance & Assistance", desc: "Get informational support and guidance tailored to your question." },
  { icon: ArrowRight, title: "Take Action Independently", desc: "Use the guidance provided to make your own informed decisions." },
];

const HowItWorksSection = () => (
  <section className="py-16 lg:py-20 bg-muted">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          How It <span className="text-primary">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our straightforward process ensures you get the guidance you need quickly and transparently.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.title} className="text-center space-y-4 group">
            <div className="relative">
              <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-0.5 bg-border -translate-y-1/2" />
              )}
            </div>
            <h3 className="font-heading font-bold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
