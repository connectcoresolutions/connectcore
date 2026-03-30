import { Wifi, Monitor, Smartphone, Play, Globe, FileText } from "lucide-react";

const services = [
  { icon: Globe, title: "Internet Setup Guidance", desc: "General assistance understanding internet setup processes and options." },
  { icon: Wifi, title: "Wi-Fi Troubleshooting", desc: "Guidance on common Wi-Fi issues like slow speeds and connectivity drops." },
  { icon: Smartphone, title: "Device Connection Help", desc: "Help navigating device connection questions for smart TVs, phones, and more." },
  { icon: Play, title: "Streaming Setup Assistance", desc: "Informational support for setting up streaming devices and applications." },
  { icon: Monitor, title: "General Connectivity Help", desc: "Broad guidance on networking, wiring, and connectivity-related concerns." },
  { icon: FileText, title: "Billing Guidance", desc: "Informational help understanding billing questions (we do not process payments for providers)." },
];

const ServicesGrid = () => (
  <section className="py-16 lg:py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Services We Offer Our <span className="text-primary">Customers</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          All services are informational and assistance-based. We do not provide, sell, or install any internet, cable, or streaming services.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
