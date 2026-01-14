import { MainLayout } from "@/components/layout/MainLayout";
import { Recycle, Leaf, Clock, Package } from "lucide-react";

const sustainabilityPillars = [
  {
    icon: Recycle,
    title: "Repair-First Approach",
    description: "We prioritize repair over replacement, extending product lifecycles and reducing electronic waste. Every successful repair is a product saved from landfill.",
  },
  {
    icon: Package,
    title: "Reduced Waste",
    description: "Centralized operations minimize packaging waste and optimize spare parts inventory, reducing overall environmental impact.",
  },
  {
    icon: Clock,
    title: "Extended Product Life",
    description: "Quality repairs with genuine parts ensure products serve their intended lifespan, maximizing the value of manufacturing resources.",
  },
  {
    icon: Leaf,
    title: "Circular Economy",
    description: "We're building infrastructure that supports a circular economy, where products are designed to be repaired, refurbished, and recycled.",
  },
];

const stats = [
  { value: "2M+", label: "Products Repaired" },
  { value: "850K", label: "Tons CO₂ Saved" },
  { value: "1.2M", label: "Products Diverted from Landfill" },
  { value: "95%", label: "Parts Recycling Rate" },
];

export default function Sustainability() {
  return (
    <MainLayout>
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Sustainability at <span className="text-gradient-copper">Our Core</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every repair we complete contributes to a more sustainable future. We're committed to reducing electronic waste and extending product lifecycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {sustainabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 bg-card rounded-2xl border border-border shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-copper mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-muted-foreground mb-8">
            Partner with us to make sustainable service operations the industry standard. Together, we can extend product lifecycles and reduce environmental impact.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
