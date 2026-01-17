import { PortalLayout } from "@/components/portal/PortalLayout";
import { Button } from "@/components/ui/button";
import { BarChart3, ExternalLink } from "lucide-react";

const ANALYTICS_URL = "https://your-shiny-app-url.com"; // Replace with your actual Shiny app URL

export default function PortalAnalytics() {
  return (
    <PortalLayout
      title="Co-Repairs Command Center"
      description="Real-time operational intelligence for partner brands"
    >
      <div className="bg-card rounded-2xl border border-border shadow-soft p-12 text-center">
        <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
          <BarChart3 className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">
          Operational Analytics Dashboard
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Access real-time analytics, service metrics, and operational insights for your brand.
        </p>

        <Button asChild className="gap-2">
          <a
            href={ANALYTICS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Analytics Dashboard
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </PortalLayout>
  );
}
