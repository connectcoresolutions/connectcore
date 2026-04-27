import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* CTA Banner */}
    <div className="bg-primary text-primary-foreground">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-heading font-extrabold">Have a Connectivity Question?</h3>
          <p className="text-primary-foreground/80 mt-1">Our independent advisors are standing by to help you find clarity.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="lg" asChild>
            <a href="tel:+18668678680">
              <Phone className="mr-2 h-4 w-4" /> Call Now (866) 867-8680
            </a>
          </Button>
        </div>
      </div>
    </div>

    {/* Main Footer */}
    <div className="container py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Logo variant="light" size="md" />
          <p className="text-sm opacity-70">
            Independent connectivity advisory service. Established 2026.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider opacity-60">Quick Links</h4>
          <ul className="space-y-2.5 text-sm opacity-70">
            <li><Link to="/" className="hover:opacity-100 hover:text-primary transition-all">Home</Link></li>
            <li><Link to="/services" className="hover:opacity-100 hover:text-primary transition-all">Services</Link></li>
            <li><Link to="/how-it-works" className="hover:opacity-100 hover:text-primary transition-all">How It Works</Link></li>
            <li><Link to="/faq" className="hover:opacity-100 hover:text-primary transition-all">FAQ</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 hover:text-primary transition-all">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider opacity-60">Legal</h4>
          <ul className="space-y-2.5 text-sm opacity-70">
            <li><Link to="/privacy" className="hover:opacity-100 hover:text-primary transition-all">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:opacity-100 hover:text-primary transition-all">Terms & Conditions</Link></li>
            <li><Link to="/refund" className="hover:opacity-100 hover:text-primary transition-all">Refund Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:opacity-100 hover:text-primary transition-all">Disclaimer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider opacity-60">Contact</h4>
          <div className="space-y-3 text-sm opacity-70">
            <a href="tel:+18668678680" className="flex items-center gap-2 hover:opacity-100 hover:text-primary transition-all">
              <Phone className="h-4 w-4" /> (866) 867-8680
            </a>
            <a href="mailto:support@connectcoresolutions.com" className="flex items-center gap-2 hover:opacity-100 hover:text-primary transition-all">
              <Mail className="h-4 w-4" /> support@connectcoresolutions.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6">
        <p className="text-xs opacity-50 text-center max-w-4xl mx-auto">
          ConnectCore Solutions is an independent advisory service. We are not affiliated with, authorised by, or endorsed by any internet, broadband, or cable TV service provider. All trademarks belong to their respective owners. Advisory fees apply separately for services provided.
        </p>
        <p className="text-xs opacity-40 text-center mt-3">
          © {new Date().getFullYear()} CONNECTCORE SOLUTIONS. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
