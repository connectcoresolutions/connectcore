import { Rocket, Shield, Eye, Heart } from "lucide-react";

const items = [
  { icon: Rocket, value: "2026", label: "Year Launched", desc: "A fresh startup built for modern assistance needs." },
  { icon: Shield, value: "100%", label: "Independent", desc: "No ties to any ISP, cable, or streaming brand." },
  { icon: Eye, value: "Full", label: "Transparency", desc: "Clear about what we do and what we don't." },
  { icon: Heart, value: "24/7", label: "User-First", desc: "Your questions and concerns guide our support." },
];

const TrustBlock = () => (
  <section className="py-16 lg:py-20 bg-trust text-trust-foreground">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.label} className="text-center space-y-2">
            <div className="h-14 w-14 rounded-full bg-trust-foreground/10 flex items-center justify-center mx-auto">
              <item.icon className="h-7 w-7" />
            </div>
            <div className="text-3xl font-extrabold">{item.value}</div>
            <h3 className="font-heading font-bold text-lg">{item.label}</h3>
            <p className="text-sm opacity-85">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBlock;
