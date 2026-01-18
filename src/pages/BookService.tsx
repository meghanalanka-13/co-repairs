import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle } from "lucide-react";
import coRepairsLogo from "@/assets/co-repairs-logo.png";

const productCategories = [
  "Air Conditioner",
  "Refrigerator",
  "Washing Machine",
  "Television",
  "Microwave",
  "Water Purifier",
  "Dishwasher",
  "Other",
];

const serviceTypes = [
  "Chat Support",
  "Talk to an Agent",
  "Request a Technician Visit",
];

const BookService = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    brand: "",
    productCategory: "",
    serviceType: "",
    issueDescription: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.brand || !formData.productCategory || !formData.serviceType || !formData.issueDescription) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your request.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={coRepairsLogo} alt="Co-Repairs" className="h-8 rounded" />
            </Link>
          </div>
        </header>

        <div className="min-h-screen flex items-center justify-center px-6 pt-16">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Request Submitted!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for contacting Co-Repairs. Our team will review your request and get back to you within 24 hours.
            </p>
            <Link to="/">
              <Button variant="hero" size="lg" className="px-8">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={coRepairsLogo} alt="Co-Repairs" className="h-8 rounded" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
        <div className="w-full max-w-xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book a Service
            </h1>
            <p className="text-muted-foreground">
              Schedule a repair or register a complaint for your appliance.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border shadow-soft space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Mumbai"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input
                  id="brand"
                  name="brand"
                  placeholder="Samsung, LG, etc."
                  value={formData.brand}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productCategory">Product Category</Label>
                <Select onValueChange={handleSelectChange("productCategory")} value={formData.productCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Preferred Service Type</Label>
              <Select onValueChange={handleSelectChange("serviceType")} value={formData.serviceType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueDescription">Issue Description</Label>
              <Textarea
                id="issueDescription"
                name="issueDescription"
                placeholder="Describe the issue you're facing with your appliance..."
                rows={4}
                value={formData.issueDescription}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              {formData.issueDescription.toLowerCase().includes("complaint") 
                ? "Register Complaint" 
                : "Book Service"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookService;
