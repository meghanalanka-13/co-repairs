import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { Building2, Users, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Shared Infrastructure",
    description: "Centralized service centers equipped with tools, parts, and trained technicians across multiple locations.",
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Access to certified professionals with multi-brand expertise and continuous training programs.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Stringent SLAs, compliance protocols, and real-time monitoring ensure consistent service quality.",
  },
  {
    icon: BarChart3,
    title: "Transparent Analytics",
    description: "Comprehensive dashboards and reporting tools for complete visibility into service operations.",
  },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight mb-8 animate-fade-in leading-tight">
            Reimagining Post-Sales
            <br />
            Service Infrastructure
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A unified, brand-authorized service ecosystem that replaces fragmented post-sales operations with standardized, scalable infrastructure.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Under one professionally managed roof, your service centers gain modern facilities, trained manpower, and structured processes — enabling lower costs, better operational control, and consistently higher service quality for your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/ecosystem">
              <Button variant="hero" size="xl" className="px-10">
                Explore Ecosystem
              </Button>
            </Link>
            <Link to="/partner">
              <Button variant="heroOutline" size="xl" className="px-10">
                Partner With Us
              </Button>
            </Link>
          </div>
          <Link
            to="/login"
            className="inline-block mt-8 text-sm text-muted-foreground hover:text-primary transition-colors animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Partner Portal (Demo) →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              A New Standard in Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our ecosystem brings together infrastructure, expertise, and technology to deliver exceptional post-sales experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-8 bg-background rounded-2xl border border-border shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
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

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Transform Your Service Operations?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Join leading brands in our shared service ecosystem and deliver exceptional customer experiences.
          </p>
          <Link to="/partner">
            <Button variant="hero" size="xl" className="px-10">
              Start Partnership Conversation
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
