import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Partner() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    brandName: "",
    contactPerson: "",
    city: "",
    email: "",
    intent: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Request Received",
      description: "Thank you for your interest. Our team will contact you within 2 business days.",
    });
    setFormData({
      brandName: "",
      contactPerson: "",
      city: "",
      email: "",
      intent: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MainLayout>
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Partner <span className="text-gradient-copper">With Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our shared service ecosystem and transform your post-sales operations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-soft p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="brandName">Brand Name</Label>
              <Input
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="Your company or brand name"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Primary location"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="business@company.com"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="intent">Partnership Intent</Label>
              <Textarea
                id="intent"
                name="intent"
                value={formData.intent}
                onChange={handleChange}
                placeholder="Tell us about your service needs and what you're looking to achieve..."
                rows={4}
                className="bg-background resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Submit Partnership Request
            </Button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}
