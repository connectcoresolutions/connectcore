import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClipboardList, Headphones, BookOpen, ArrowRight, AlertTriangle } from "lucide-react";
import supportImg from "@/assets/service-support.jpg";

const steps = [
  { icon: ClipboardList, title: "Submit Your Request", desc: "Contact us via phone, email, or our online contact form. Describe your question or concern in as much detail as possible so we can assist effectively.", color: "bg-primary" },
  { icon: Headphones, title: "Speak With Our Support Team", desc: "One of our independent support representatives will connect with you to understand your needs. We listen carefully and ask clarifying questions.", color: "bg-foreground" },
  { icon: BookOpen, title: "Receive Guidance & Assistance", desc: "Based on your query, we provide informational guidance, general troubleshooting tips, and educational resources to help you understand your options.", color: "bg-primary" },
  { icon: ArrowRight, title: "Take Action Independently", desc: "Using the guidance provided, you make your own informed decisions. We empower you with knowledge — the actions you take are entirely your own.", color: "bg-foreground" },
];

const HowItWorksPage = () => (
  <>
    <TopBar />
    <Navbar />

    {/* Hero */}
    <section className="bg-muted py-16 lg:py-24">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
              How It <span className="text-primary">Works</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg">
              Our process is simple, transparent, and designed to get you the guidance you need quickly. No hidden steps, no surprises.
            </p>
          </div>
          <img
            src={supportImg}
            alt="Support team ready to help"
            className="rounded-2xl shadow-xl w-full h-80 object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>

    {/* Timeline steps */}
    <section className="py-16 lg:py-24">
      <div className="container max-w-4xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-6 items-start relative">
                <div className={`h-14 w-14 rounded-full ${step.color} text-background flex items-center justify-center text-lg font-bold shrink-0 relative z-10 shadow-lg`}>
                  {i + 1}
                </div>
                <div className="bg-card border border-border rounded-xl p-6 flex-1 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h2 className="font-heading font-bold text-xl">{step.title}</h2>
                  </div>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-accent border border-border rounded-xl p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-accent-foreground shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-bold text-lg mb-3">Important Disclaimers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• We do not provide, sell, or install any internet, cable, or streaming services.</li>
                <li>• We do not guarantee any specific outcomes or resolutions.</li>
                <li>• Our role is strictly informational and advisory.</li>
                <li>• Service fees apply separately for the assistance we provide.</li>
                <li>• We are not affiliated with any service provider.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default HowItWorksPage;
