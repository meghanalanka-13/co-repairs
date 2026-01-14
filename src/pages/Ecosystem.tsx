import { MainLayout } from "@/components/layout/MainLayout";
import { Building, Users, FileCheck, BarChart, Wrench, Shield } from "lucide-react";

const ecosystemFeatures = [
  {
    icon: Building,
    title: "Shared Service Centers",
    description: "State-of-the-art facilities serving multiple brands under one roof, optimizing resources and reducing overhead costs.",
  },
  {
    icon: Users,
    title: "Brand Onboarding",
    description: "Seamless integration process with dedicated support, training programs, and comprehensive documentation.",
  },
  {
    icon: Wrench,
    title: "Infrastructure & Equipment",
    description: "Modern diagnostic tools, genuine spare parts inventory, and specialized equipment for all product categories.",
  },
  {
    icon: Shield,
    title: "Compliance & Certification",
    description: "ISO-certified processes, data protection compliance, and regular audits to maintain highest standards.",
  },
  {
    icon: FileCheck,
    title: "Service Level Agreements",
    description: "Customizable SLAs with guaranteed turnaround times, quality metrics, and escalation procedures.",
  },
  {
    icon: BarChart,
    title: "Reporting & Analytics",
    description: "Real-time dashboards, monthly reports, and predictive analytics for informed decision-making.",
  },
];

export default function Ecosystem() {
  return (
    <MainLayout>
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Our <span className="text-gradient-copper">Ecosystem</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive service infrastructure designed to support brands at every stage of the post-sales journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Onboard</h3>
                <p className="text-sm text-muted-foreground">
                  Quick integration with our platform and service network
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Link your products and customers to our service centers
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Grow your service coverage without infrastructure investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
