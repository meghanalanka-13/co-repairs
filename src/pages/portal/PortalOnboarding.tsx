import { PortalLayout } from "@/components/portal/PortalLayout";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const onboardingSteps = [
  {
    title: "Contract Signed",
    description: "Partnership agreement executed",
    status: "completed",
    date: "Jan 15, 2024",
  },
  {
    title: "Technical Integration",
    description: "API setup and system connectivity",
    status: "completed",
    date: "Jan 22, 2024",
  },
  {
    title: "Training Program",
    description: "Technician certification in progress",
    status: "in-progress",
    date: "Expected Feb 5, 2024",
  },
  {
    title: "Parts Inventory Setup",
    description: "Spare parts catalog and logistics",
    status: "pending",
    date: "Pending",
  },
  {
    title: "Go Live",
    description: "Full service activation",
    status: "pending",
    date: "Target: Feb 15, 2024",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-100",
    label: "Completed",
  },
  "in-progress": {
    icon: Clock,
    color: "text-primary",
    bg: "bg-accent",
    label: "In Progress",
  },
  pending: {
    icon: AlertCircle,
    color: "text-muted-foreground",
    bg: "bg-muted",
    label: "Pending",
  },
};

export default function PortalOnboarding() {
  return (
    <PortalLayout
      title="Onboarding Status"
      description="Track your integration progress with Co-Repairs"
    >
      <div className="bg-card rounded-2xl border border-border shadow-soft p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-semibold text-foreground">Integration Progress</h3>
            <p className="text-sm text-muted-foreground mt-1">3 of 5 steps completed</p>
          </div>
          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
            <div className="w-3/5 h-full bg-primary rounded-full" />
          </div>
        </div>

        <div className="space-y-6">
          {onboardingSteps.map((step, index) => {
            const config = statusConfig[step.status as keyof typeof statusConfig];
            const Icon = config.icon;

            return (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", config.bg)}>
                    <Icon className={cn("w-5 h-5", config.color)} />
                  </div>
                  {index < onboardingSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{step.title}</h4>
                    <span className={cn("text-xs font-medium px-2 py-1 rounded-full", config.bg, config.color)}>
                      {config.label}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{step.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PortalLayout>
  );
}
