import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Building2, Users, ArrowRight } from "lucide-react";
import coRepairsLogo from "@/assets/co-repairs-logo.png";
import coRepairsHero from "@/assets/co-repairs-hero.png";

const goalMissionVision = [
  {
    id: "goal",
    title: "Our Goal",
    content: [
      "At Co-Repairs., our goal is to fundamentally improve the post-sales service experience for both customers and brands. We bring multiple brand-authorized service centers together under one shared, well-designed service hub to make repairs more accessible, reliable, and transparent.",
      "We reduce the friction customers face when locating trusted service centers, dealing with delays, or navigating outdated service environments. At the same time, we support brands with modern infrastructure, skilled manpower, and shared operational spaces that lower costs while raising service standards.",
      "Our ultimate aim is to create a service ecosystem where repairs are easier, trust is stronger, and both customers and brands benefit from a more organized, professional, and visible post-sales network.",
    ],
    layout: "header-left",
  },
  {
    id: "mission",
    title: "Our Mission",
    content: [
      "Our mission is to create a comprehensive, high-quality authorized service center environment under one roof that prioritizes customer needs while maintaining strong business integrity.",
      "We integrate multiple brand-authorized service centers into a shared, professionally managed space equipped with modern infrastructure, technology, and trained manpower. This enables brands to operate more efficiently while ensuring customers receive consistent, standardized, and trustworthy service.",
      "We are committed to ethical service practices, operational transparency, and customer satisfaction in every interaction. Through better service accessibility, improved infrastructure, and stronger brand visibility, we aim to redefine how post-sales service is experienced in India.",
    ],
    layout: "header-right",
  },
  {
    id: "vision",
    title: "Our Vision",
    content: [
      "Our vision is to build a PAN-India network of high-quality, accessible, and trustworthy authorized service hubs that transform how post-sales service is perceived and delivered.",
      "We imagine a future where customers no longer struggle to find reliable service centers, where brands are not burdened by high rental costs and outdated facilities, and where repairs are seen as a first choice rather than a last resort.",
      "Starting with one flagship location, we plan to expand across Tier 1 and Tier 2 cities, gradually building a connected Co-Repairs ecosystem. In the long run, we aim to set global benchmarks for repair experiences — promoting repair, reuse, and responsible consumption as the new norm.",
    ],
    layout: "header-left",
  },
];

const whyCoRepairs = [
  {
    icon: Shield,
    title: "Trusted & Authorized",
    description: "Customers get access to verified, brand-authorized service providers in a professional environment.",
  },
  {
    icon: Building2,
    title: "Better Infrastructure",
    description: "Modern facilities, skilled technicians, and standardized processes improve repair quality.",
  },
  {
    icon: Users,
    title: "Shared Ecosystem",
    description: "Multiple brands under one roof create awareness, efficiency, and higher service standards.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Path",
    description: "Customers book a service. Brands explore partnership opportunities.",
  },
  {
    step: "02",
    title: "Visit or Connect",
    description: "Repairs are handled at authorized Co-Repairs hubs with trained professionals.",
  },
  {
    step: "03",
    title: "Reliable Resolution",
    description: "Faster turnaround, transparent processes, and improved service experience.",
  },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo + Navigation Links - Left */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img src={coRepairsLogo} alt="Co-Repairs." className="h-8 rounded" />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("goal")}
                className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all duration-200"
              >
                Goal
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all duration-200"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all duration-200"
              >
                Vision
              </button>
            </nav>
          </div>

          {/* Right-Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/book"
              className="hidden sm:inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Book a Service
            </Link>
            <Link to="/login">
              <Button variant="portal" size="sm">
                Partner Portal (Demo)
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center px-6 pt-24 pb-0">
        <div className="container mx-auto max-w-4xl text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-10 animate-fade-in">
            Co-Repairs.
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 leading-snug mb-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            Authorized Service Centers,
            <br />
            Under One Roof.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Co-Repairs. is a shared authorized service hub ecosystem designed to improve post-sales service for appliance and electronics brands. We bring multiple authorized service centers together under one roof to make repairs faster, more reliable, and more accessible.
          </p>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto max-w-5xl animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={coRepairsHero}
              alt="Co-Repairs. service center with staff at reception"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Buttons below image with ample spacing */}
        <div className="flex flex-row gap-5 justify-center items-center mt-10 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/book">
            <Button variant="hero" size="lg" className="px-8">
              Book a Service
            </Button>
          </Link>
          <Link to="/home">
            <Button variant="heroOutline" size="lg" className="px-8">
              Partner Ecosystem
            </Button>
          </Link>
        </div>
      </section>

      {/* Goal, Mission, Vision Alternating Blocks */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          {goalMissionVision.map((block, index) => (
            <div
              key={block.id}
              id={block.id}
              className={`flex flex-col ${block.layout === "header-right" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 ${index !== goalMissionVision.length - 1 ? "mb-24 pb-24 border-b border-border" : ""}`}
            >
              {/* Header Block - Glass Card with Centered Text */}
              <div className="lg:w-1/3 flex">
                <div 
                  className="w-full flex items-center justify-center text-center rounded-[20px] p-8 transition-all duration-[180ms] hover:-translate-y-1 hover:shadow-xl cursor-default bg-black"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {block.title}
                  </h2>
                </div>
              </div>
              
              {/* Content Block */}
              <div className="lg:w-2/3 space-y-6">
                {block.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Co-Repairs Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Why Co-Repairs?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCoRepairs.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-soft-lg transition-shadow duration-300 text-center"
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

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="p-8 bg-background rounded-2xl border border-border h-full">
                  <div className="text-6xl font-bold text-muted/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1 - Logo */}
            <div className="space-y-4">
              <img src={coRepairsLogo} alt="Co-Repairs" className="h-10 rounded" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building a better post-sales service ecosystem.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/ecosystem" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ecosystem</Link></li>
                <li><Link to="/benefits" className="text-sm text-muted-foreground hover:text-primary transition-colors">Benefits</Link></li>
                <li><Link to="/sustainability" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sustainability</Link></li>
                <li><Link to="/home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partner Ecosystem</Link></li>
                <li><Link to="/book" className="text-sm text-muted-foreground hover:text-primary transition-colors">Book a Service</Link></li>
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Email: support@co-repairs.com</li>
                <li className="text-sm text-muted-foreground">Phone: +91 XXXXX XXXXX</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Co-Repairs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;