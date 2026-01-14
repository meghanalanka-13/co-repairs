import { MainLayout } from "@/components/layout/MainLayout";
import { Building2, Users, Briefcase, TrendingDown, Clock, Star, MapPin, HeartHandshake } from "lucide-react";

const brandBenefits = [
  {
    icon: TrendingDown,
    title: "Reduced Costs",
    description: "Eliminate capital expenditure on service infrastructure while sharing operational costs with the network.",
  },
  {
    icon: MapPin,
    title: "Expanded Coverage",
    description: "Instant access to nationwide service network without individual center investments.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "Consistent service quality through standardized processes and certified technicians.",
  },
  {
    icon: Clock,
    title: "Faster Turnaround",
    description: "Optimized logistics and spare parts management for quicker repair cycles.",
  },
];

const customerBenefits = [
  {
    icon: MapPin,
    title: "Convenient Locations",
    description: "Access authorized service at nearby centers, regardless of brand.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Faster repairs with readily available parts and expert technicians.",
  },
  {
    icon: Star,
    title: "Genuine Parts",
    description: "Authentic components and manufacturer-approved repair procedures.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Pricing",
    description: "Clear, standardized pricing across all service centers.",
  },
];

const partnerBenefits = [
  {
    icon: Building2,
    title: "Steady Work Volume",
    description: "Consistent flow of service requests from multiple brand partnerships.",
  },
  {
    icon: Users,
    title: "Training & Development",
    description: "Access to multi-brand training programs and certification opportunities.",
  },
  {
    icon: Briefcase,
    title: "Business Support",
    description: "Marketing, operations, and technology support to grow your business.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Risk",
    description: "Diversified revenue streams across multiple brand relationships.",
  },
];

export default function Benefits() {
  return (
    <MainLayout>
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Benefits for <span className="text-gradient-copper">Everyone</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our ecosystem creates value for all stakeholders in the service chain.
            </p>
          </div>

          {/* For Brands */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              For Brands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 bg-card rounded-xl border border-border shadow-soft"
                >
                  <benefit.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Customers */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              For Customers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customerBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 bg-card rounded-xl border border-border shadow-soft"
                >
                  <benefit.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Service Partners */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              For Service Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 bg-card rounded-xl border border-border shadow-soft"
                >
                  <benefit.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
