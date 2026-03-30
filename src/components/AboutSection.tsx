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
            About{" "}
            <span className="text-primary">CONNECTCORE SOLUTIONS</span>
          </h2>
          <p className="text-muted-foreground">
            CONNECTCORE SOLUTIONS is an independent third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi, and cable TV services.
          </p>
          <p className="text-muted-foreground">
            We assist users by providing informational support, helping them understand service options, and offering general guidance on common connectivity-related concerns.
          </p>
          <p className="text-muted-foreground">
            We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider. Our focus is transparency, clarity, and responsible service assistance.
          </p>
          <div className="bg-accent border border-border rounded-lg p-4">
            <p className="text-xs text-accent-foreground font-medium">
              CONNECTCORE SOLUTIONS is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {["General assistance", "Informational support", "No direct services"].map((b) => (
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
