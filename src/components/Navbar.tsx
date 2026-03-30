import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <Logo variant="dark" size="md" />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                location.pathname === link.to
                  ? "text-primary after:absolute after:bottom-[-1.15rem] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+18668678680">
              <Phone className="mr-1.5 h-4 w-4" /> Call Now (866) 867-8680
            </a>
          </Button>
          <Button asChild>
            <Link to="/contact">Get Assistance</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background pb-4 animate-fade-in">
          <div className="container flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Assistance</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
