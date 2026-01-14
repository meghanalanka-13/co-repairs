import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ClipboardList,
  Building2,
  BarChart3,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/portal", icon: LayoutDashboard },
  { label: "Onboarding Status", href: "/portal/onboarding", icon: ClipboardList },
  { label: "Service Center Performance", href: "/portal/performance", icon: Building2 },
  { label: "Operational Analytics", href: "/portal/analytics", icon: BarChart3 },
  { label: "Reports", href: "/portal/reports", icon: FileText },
  { label: "Support", href: "/portal/support", icon: HelpCircle },
];

export function PortalSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen p-6 flex flex-col">
      <Link to="/" className="flex items-center gap-2 mb-10">
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">CR</span>
        </div>
        <span className="font-semibold text-foreground">Co-Repairs</span>
      </Link>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-border">
        <div className="px-4 py-2 mb-4">
          <p className="text-sm font-medium text-foreground">Demo Partner</p>
          <p className="text-xs text-muted-foreground">partner@brand.com</p>
        </div>
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Exit Portal
        </Link>
      </div>
    </aside>
  );
}
