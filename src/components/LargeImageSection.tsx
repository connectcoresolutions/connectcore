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
            Ready to Cut Through the{" "}
            <span className="text-primary">Confusion?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Home connectivity doesn't have to be overwhelming. Our independent advisors break down complex service options, common technical issues, and billing structures in plain, straightforward language — no upselling, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to an Advisor
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+18668678680">
                <Phone className="mr-2 h-5 w-5" />
                Call (866) 867-8680
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Advisory fees apply. ConnectCore Solutions is a fully independent advisory service with no affiliation to any internet, cable, or telecommunications provider.
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
