import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import coRepairsLogo from "@/assets/co-repairs-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Benefits", href: "/benefits" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Partner With Us", href: "/partner" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={coRepairsLogo} alt="Co-Repairs" className="h-8 rounded" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                location.pathname === item.href
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/login">
          <Button variant="portal" size="sm">
            Partner Portal
          </Button>
        </Link>
      </div>
    </header>
  );
}
