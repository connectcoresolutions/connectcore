import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { trackLeadConversion } from "@/lib/tracking";

type ThankYouState = {
  conversionId?: string;
  topic?: string;
};

const ThankYouPage = () => {
  const location = useLocation();
  const state = (location.state ?? {}) as ThankYouState;

  useEffect(() => {
    if (!state.conversionId) {
      return;
    }

    trackLeadConversion({
      conversionId: state.conversionId,
      pagePath: location.pathname,
      topic: state.topic,
    });
  }, [location.pathname, state.conversionId, state.topic]);

  return (
    <>
      <TopBar />
      <Navbar />
      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-sm text-center space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold">Thanks. Your request is in.</h1>
              <p className="text-lg text-muted-foreground">
                Our team will review your message and follow up using the contact details you provided.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-accent/40 p-5 text-left">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />
                <p className="text-sm text-accent-foreground">
                  Conversion tracking fires from this page only after a successful form submission, which reduces duplicate and bot-triggered lead events.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Submit Another Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ThankYouPage;