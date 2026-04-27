import { Wifi, Monitor, Smartphone, Play, Globe, FileText } from "lucide-react";

const services = [
  { icon: Globe, title: "Broadband Advisory", desc: "Expert guidance to help you compare, understand, and evaluate broadband options that suit your household's needs." },
  { icon: Wifi, title: "Wi-Fi Performance Help", desc: "Practical advice on improving Wi-Fi coverage, diagnosing interference, and optimising your home network layout." },
  { icon: Smartphone, title: "Multi-Device Connectivity", desc: "Advisory support for connecting smart TVs, mobile phones, tablets, and IoT devices to your home network." },
  { icon: Play, title: "Streaming Platform Guidance", desc: "Clear, unbiased explanations of popular streaming platforms, device requirements, and account management basics." },
  { icon: Monitor, title: "Home Network Consulting", desc: "Comprehensive advisory on routers, mesh systems, Ethernet wiring, and overall home network architecture." },
  { icon: FileText, title: "Bill & Plan Clarification", desc: "We decode provider invoices and plan structures so you fully understand what you're paying for — we do not access or modify any accounts." },
];

const ServicesGrid = () => (
  <section className="py-16 lg:py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Advisory Solutions We <span className="text-primary">Provide</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every service below is purely advisory and educational. ConnectCore Solutions does not sell, install, or directly supply any internet, cable, or streaming service.
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
