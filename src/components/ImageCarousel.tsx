import heroImg from "@/assets/hero-living-room.jpg";
import familyImg from "@/assets/family-watching-tv.jpg";
import personImg from "@/assets/person-with-router.jpg";
import wifiImg from "@/assets/wifi-router.jpg";
import streamingImg from "@/assets/streaming-setup.jpg";
import deviceImg from "@/assets/device-connection.jpg";

const images = [
  { src: heroImg, alt: "Living room entertainment setup" },
  { src: familyImg, alt: "Family watching TV" },
  { src: personImg, alt: "Support representative" },
  { src: wifiImg, alt: "Wi-Fi router setup" },
  { src: streamingImg, alt: "Streaming entertainment" },
  { src: deviceImg, alt: "Device connectivity" },
];

const ImageCarousel = () => (
  <section className="py-12 lg:py-16 overflow-hidden bg-muted">
    <div className="text-center mb-8">
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-3">
        Guidance You Can <span className="text-primary">Rely On</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        From routers to remotes, we keep you informed and in control of your home connectivity.
      </p>
    </div>
    <div className="relative">
      <div className="flex animate-scroll gap-6">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg border border-border"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
              width={288}
              height={192}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImageCarousel;
