import { CheckCircle, Zap, Shield, HeartHandshake } from "lucide-react";

const features = [
  { icon: Zap, title: "Rapid Engagement", desc: "Reach our advisory team fast — no lengthy wait queues or automated runarounds" },
  { icon: Shield, title: "Completely Impartial", desc: "Our advisors carry no provider affiliations, so every answer serves only you" },
  { icon: HeartHandshake, title: "People Over Product", desc: "We centre every conversation around your specific situation, not a scripted pitch" },
];

const FeatureSection = () => (
  <section className="py-16 lg:py-20 bg-muted">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Smart, Unbiased Guidance for Home <span className="text-primary">Connectivity</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          From streaming and cable TV to broadband and Wi-Fi, ConnectCore Solutions delivers straightforward advisory support rooted in clarity — not commissions. We educate, advise, and empower.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {["Impartial advisory", "Zero brand ties", "Education-first approach"].map((item) => (
          <div key={item} className="flex items-center gap-2 bg-background rounded-full px-4 py-2 shadow-sm border border-border">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;
