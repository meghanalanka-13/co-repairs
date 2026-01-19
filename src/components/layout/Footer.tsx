import { Link } from "react-router-dom";
import coRepairsLogo from "@/assets/co-repairs-logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <img src={coRepairsLogo} alt="Co-Repairs" className="h-10 rounded" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building a better post-sales service ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/ecosystem" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ecosystem</Link></li>
              <li><Link to="/benefits" className="text-sm text-muted-foreground hover:text-primary transition-colors">Benefits</Link></li>
              <li><Link to="/sustainability" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="/home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partner Ecosystem</Link></li>
              <li><Link to="/book" className="text-sm text-muted-foreground hover:text-primary transition-colors">Book a Service</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: support@co-repairs.com</li>
              <li className="text-sm text-muted-foreground">Phone: +91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Co-Repairs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">Privacy</span>
            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}