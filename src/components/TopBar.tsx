import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground py-2.5 text-sm">
    <div className="container flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href="tel:+18668678680" className="flex items-center gap-2 hover:opacity-80 transition-opacity font-medium">
          <Phone className="h-3.5 w-3.5" />
          <span>(866) 867-8680</span>
        </a>
        <a href="mailto:support@connectcoresolutions.com" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mail className="h-3.5 w-3.5" />
          <span>support@connectcoresolutions.com</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:flex items-center gap-1.5 text-xs opacity-80">
          <Clock className="h-3 w-3" />
          Mon–Sat: 8AM–10PM EST
        </span>
        <span className="bg-topbar-foreground/15 px-2.5 py-0.5 rounded-full text-xs font-medium">
          Independent Third-Party Assistance
        </span>
      </div>
    </div>
  </div>
);

export default TopBar;
