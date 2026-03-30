import { Wifi, Monitor, Tv, Play } from "lucide-react";

const categories = [
  { icon: Wifi, title: "Broadband Guidance", desc: "Get help understanding broadband options and troubleshooting connectivity concerns.", color: "from-primary/10 to-primary/5" },
  { icon: Monitor, title: "Wi-Fi Support Help", desc: "Assistance with Wi-Fi setup questions, range issues, and general connectivity guidance.", color: "from-blue-500/10 to-blue-500/5" },
  { icon: Tv, title: "Cable TV Assistance", desc: "Navigate cable TV-related queries with independent informational support.", color: "from-orange-500/10 to-orange-500/5" },
  { icon: Play, title: "Streaming Setup Help", desc: "General guidance on streaming device setup and configuration questions.", color: "from-green-500/10 to-green-500/5" },
];

const CategoryCards = () => (
  <section className="py-16 lg:py-20">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-3">
          How Can We <span className="text-primary">Help?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Choose a category to learn more about our independent assistance services.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              <cat.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{cat.title}</h3>
            <p className="text-sm text-muted-foreground">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryCards;
