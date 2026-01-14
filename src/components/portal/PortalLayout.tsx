import { ReactNode } from "react";
import { PortalSidebar } from "./PortalSidebar";

interface PortalLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function PortalLayout({ children, title, description }: PortalLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <PortalSidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {children}
      </main>
    </div>
  );
}
