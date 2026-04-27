import { Rocket, Shield, Eye, Heart } from "lucide-react";

const items = [
  { icon: Rocket, value: "2026", label: "Est. 2026", desc: "Born as a modern advisory platform built specifically for today's connected households." },
  { icon: Shield, value: "100%", label: "Unaffiliated", desc: "Completely free from agreements with any ISP, cable operator, or streaming platform." },
  { icon: Eye, value: "Open", label: "Transparent", desc: "We are upfront about every aspect of our service, including what we cannot do." },
  { icon: Heart, value: "Always", label: "Client-Centred", desc: "Every interaction is tailored to your unique connectivity questions and circumstances." },
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
