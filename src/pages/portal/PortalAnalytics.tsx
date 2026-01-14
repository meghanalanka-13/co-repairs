import { useState } from "react";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, Settings } from "lucide-react";

export default function PortalAnalytics() {
  const [analyticsUrl, setAnalyticsUrl] = useState("");
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [savedUrl, setSavedUrl] = useState("");

  const handleSaveUrl = () => {
    setSavedUrl(analyticsUrl);
    setShowUrlInput(false);
  };

  return (
    <PortalLayout
      title="Co-Repairs Command Center"
      description="Real-time operational intelligence for partner brands"
    >
      {savedUrl ? (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowUrlInput(true)}
              className="gap-2"
            >
              <Settings className="w-4 h-4" />
              Configure Dashboard
            </Button>
          </div>

          {showUrlInput && (
            <div className="bg-card rounded-xl border border-border p-4 flex gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Analytics Dashboard URL
                </label>
                <Input
                  value={analyticsUrl}
                  onChange={(e) => setAnalyticsUrl(e.target.value)}
                  placeholder="https://your-analytics-dashboard.com/embed"
                  className="bg-background"
                />
              </div>
              <Button onClick={handleSaveUrl}>Update</Button>
              <Button variant="outline" onClick={() => setShowUrlInput(false)}>Cancel</Button>
            </div>
          )}

          <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
            <iframe
              src={savedUrl}
              style={{ width: "100%", height: "900px", border: 0, borderRadius: "18px" }}
              title="Analytics Dashboard"
            />
          </div>
        </div>
      ) : (
        <div className="bg-card rounded-2xl border border-border shadow-soft p-12 text-center">
          <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Analytics Dashboard
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Add your analytics dashboard link to activate this section. The dashboard will be embedded directly into your portal.
          </p>

          {showUrlInput ? (
            <div className="max-w-lg mx-auto space-y-4">
              <Input
                value={analyticsUrl}
                onChange={(e) => setAnalyticsUrl(e.target.value)}
                placeholder="https://your-analytics-dashboard.com/embed"
                className="bg-background"
              />
              <div className="flex gap-3 justify-center">
                <Button onClick={handleSaveUrl}>Save Dashboard URL</Button>
                <Button variant="outline" onClick={() => setShowUrlInput(false)}>Cancel</Button>
              </div>
            </div>
          ) : (
            <Button onClick={() => setShowUrlInput(true)} className="gap-2">
              <Settings className="w-4 h-4" />
              Configure Dashboard
            </Button>
          )}
        </div>
      )}
    </PortalLayout>
  );
}
