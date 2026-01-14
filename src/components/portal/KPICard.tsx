import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: ReactNode;
}

export function KPICard({ title, value, change, changeType = "neutral", icon }: KPICardProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-semibold text-foreground">{value}</p>
        {change && (
          <p
            className={cn(
              "text-sm font-medium",
              changeType === "positive" && "text-green-600",
              changeType === "negative" && "text-red-500",
              changeType === "neutral" && "text-muted-foreground"
            )}
          >
            {change}
          </p>
        )}
      </div>
    </div>
  );
}
