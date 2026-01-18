import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Compass, Eye } from "lucide-react";
import coRepairsLogo from "@/assets/co-repairs-logo.png";

const companyInfo = [
  {
    icon: Target,
    title: "Our Goal",
    description: "Improve post-sales service experience for customers and brands.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    description: "Standardize and strengthen authorized service through shared infrastructure.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Build a PAN-India network of high-quality, accessible, and trustworthy service centers.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-center">
          <Link to="/" className="flex items-center">
            <img src={coRepairsLogo} alt="Co-Repairs" className="h-8 rounded" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-8 animate-fade-in">
            Authorized Service Centers,
            <br />
            Under One Roof.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Co-Repairs is a shared authorized service hub ecosystem designed to improve post-sales service for appliance and electronics brands. We bring multiple authorized service centers together under one roof to make repairs faster, more reliable, and more accessible.
          </p>

          {/* Pill Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/book">
              <Button variant="hero" size="xl" className="rounded-full px-10">
                Book a Service
              </Button>
            </Link>
            <Link to="/home">
              <Button variant="heroOutline" size="xl" className="rounded-full px-10">
                Partner Ecosystem
              </Button>
            </Link>
          </div>

          {/* Helper Text */}
          <div className="text-sm text-muted-foreground space-y-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p>Customers: book repairs or register complaints.</p>
            <p>Brands & partners: explore our shared service ecosystem.</p>
          </div>
        </div>
      </section>

      {/* Company Snapshot Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Who We Are
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building the future of authorized service infrastructure across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.map((item, index) => (
              <div
                key={item.title}
                className="p-8 bg-background rounded-2xl border border-border shadow-soft hover:shadow-soft-lg transition-shadow duration-300 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <img src={coRepairsLogo} alt="Co-Repairs" className="h-6 rounded mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Co-Repairs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
