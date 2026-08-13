import { PortalLayout } from "@/components/portal/PortalLayout";
import { KPICard } from "@/components/portal/KPICard";
import { Wrench, Clock, CheckCircle, TrendingUp } from "lucide-react";

const kpiData = [
  {
    title: "Repeat Visit Rate (per visit)",
    value: "7.5%",
    icon: <Wrench className="w-5 h-5 text-primary" />,
  },
  {
    title: "First-Visit Resolution Rate",
    value: "78.7%",
    icon: <Clock className="w-5 h-5 text-primary" />,
  },
  {
    title: "Est. Cost of Repeat Visits (all-time)",
    value: "₹ 1,14,58,400",
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
  },
  {
    title: "Stock-Out Rate",
    value: "7.5%",
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
  },
];

export default function PortalOverview() {
  return (
    <PortalLayout
      title="Overview"
      description="Partner health summary and key metrics"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
          <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { text: "New service request from Mumbai center", time: "2 hours ago" },
              { text: "Monthly report generated", time: "5 hours ago" },
              { text: "SLA threshold alert resolved", time: "1 day ago" },
              { text: "New technician certified", time: "2 days ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-foreground">{activity.text}</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
          <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "View Reports", desc: "Access monthly analytics" },
              { label: "Contact Support", desc: "Get help from our team" },
              { label: "Training Portal", desc: "Technician certifications" },
              { label: "Documentation", desc: "API & integration guides" },
            ].map((action, index) => (
              <div
                key={index}
                className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
              >
                <p className="font-medium text-sm text-foreground">{action.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{action.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
