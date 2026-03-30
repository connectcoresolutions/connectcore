import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import personImg from "@/assets/person-with-router.jpg";

const LargeImageSection = () => (
  <section className="py-16 lg:py-20 bg-muted">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold">
            Get Help With Internet & Cable{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We assist users in understanding options, solving general issues, and navigating service-related concerns. Our team provides independent, unbiased guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Request Help
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+18668678680">
                <Phone className="mr-2 h-5 w-5" />
                Call Now (866) 867-8680
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Service fees apply separately for assistance. CONNECTCORE SOLUTIONS is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.
          </p>
        </div>
        <div>
          <img
            src={personImg}
            alt="Support representative ready to help"
            className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]"
            loading="lazy"
            width={768}
            height={1024}
          />
        </div>
      </div>
    </div>
  </section>
);

export default LargeImageSection;
