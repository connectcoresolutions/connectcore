import familyImg from "@/assets/family-watching-tv.jpg";

const AboutSection = () => (
  <section id="about" className="py-16 lg:py-20">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={familyImg}
            alt="Family enjoying entertainment at home"
            className="rounded-2xl shadow-xl w-full object-cover"
            loading="lazy"
            width={1024}
            height={768}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold">
            Who We Are —{" "}
            <span className="text-primary">ConnectCore Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            ConnectCore Solutions was founded in 2026 with one purpose: to give everyday consumers a knowledgeable, unbiased resource for navigating the often confusing world of home connectivity. We are not a provider — we are your advisor.
          </p>
          <p className="text-muted-foreground">
            Whether you have questions about broadband plans, Wi-Fi performance, or cable TV options, our team of independent advisors is here to help you make sense of it all — clearly and without any sales agenda.
          </p>
          <p className="text-muted-foreground">
            We hold no partnerships with, and receive no compensation from, any internet, cable, or streaming company. Every recommendation we offer is grounded solely in your best interest.
          </p>
          <div className="bg-accent border border-border rounded-lg p-4">
            <p className="text-xs text-accent-foreground font-medium">
              ConnectCore Solutions operates entirely independently. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecommunications service provider.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Objective guidance", "Consumer-first advice", "Zero provider ties"].map((b) => (
              <span key={b} className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                ✔ {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
