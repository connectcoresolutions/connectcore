import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsOpen(false)} />
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in border border-border">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Phone className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-heading font-extrabold">
            Confused About Your <span className="text-primary">Connection?</span>
          </h3>
          <p className="text-muted-foreground">
            Our independent advisors can walk you through internet, Wi-Fi, and cable questions in plain language.
          </p>
          <Button size="lg" className="w-full text-base font-bold" asChild>
            <a href="tel:+18668678680">
              <Phone className="mr-2 h-5 w-5" />
              SPEAK WITH AN ADVISOR (866) 867-8680
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            No scripts • No pressure • Real independent guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPopup;
