import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => (
  <>
    <TopBar />
    <Navbar />
    <section className="py-16 lg:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question? Reach out to our independent support team. We're here to provide guidance and assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-bold text-2xl mb-6">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
              </div>
              <Input placeholder="Phone Number" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Describe your question or concern..." rows={5} />
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to our Terms & Conditions and Privacy Policy. Service fees apply separately.
              </p>
              <Button type="submit" size="lg">Submit Request</Button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="font-heading font-bold text-2xl mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+18668678680" className="text-muted-foreground hover:text-primary">(866) 867-8680</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:support@connectcoresolutions.com" className="text-muted-foreground hover:text-primary">support@connectcoresolutions.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-muted-foreground">Available remotely across the United States</p>
                </div>
              </div>
            </div>

            <div className="bg-accent border border-border rounded-xl p-6">
              <p className="text-xs text-accent-foreground">
                CONNECTCORE SOLUTIONS is an independent third-party assistance provider. We are not affiliated with any ISP, cable, or streaming company. Service fees apply separately for assistance provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default ContactPage;
