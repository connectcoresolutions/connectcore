import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Users } from "lucide-react";
import heroImg from "@/assets/hero-living-room.jpg";

const stats = [
  { icon: Shield, label: "Independent & Unbiased" },
  { icon: Clock, label: "Quick Response" },
  { icon: Users, label: "Real Agents" },
];

const HeroSection = () => (
  <section className="bg-muted relative overflow-hidden">
    <div className="container py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Independent Third-Party Support
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
            Independent Internet & Cable Service{" "}
            <span className="text-primary">Assistance</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Get guidance and general support for broadband, Wi-Fi, and cable-related queries from an independent third-party assistance provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="text-base shadow-lg shadow-primary/25" asChild>
              <a href="tel:+18668678680">
                <Phone className="mr-2 h-5 w-5" />
                Call Now (866) 867-8680
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Not an ISP. No brand affiliation. Independent third-party assistance only.
          </p>
          <div className="flex flex-wrap gap-5 pt-2">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <s.icon className="h-4 w-4 text-primary" />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10" />
          <img
            src={heroImg}
            alt="Modern living room entertainment setup"
            className="rounded-2xl shadow-2xl w-full object-cover"
            width={1024}
            height={768}
          />
        </div>
      </div>

      <div className="mt-10 p-4 bg-accent rounded-lg border border-border">
        <p className="text-sm text-accent-foreground text-center">
          <strong>📢 Disclosure:</strong> CONNECTCORE SOLUTIONS is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming provider.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
