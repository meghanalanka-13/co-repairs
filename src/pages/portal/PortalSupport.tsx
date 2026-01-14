import { useState } from "react";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I add a new service center to my network?",
    answer: "To add a new service center, navigate to the Onboarding section and click 'Add Center'. You'll need to provide location details, capacity information, and technician certifications. Our team will review and approve within 48 hours.",
  },
  {
    question: "What are the SLA requirements for partner brands?",
    answer: "Standard SLAs include 48-hour acknowledgment, 5-day resolution for standard repairs, and 24-hour response for critical issues. Custom SLAs can be negotiated based on your brand requirements.",
  },
  {
    question: "How do I access training materials for my technicians?",
    answer: "Training materials are available in the Training Portal, accessible from the Quick Actions section in your Overview dashboard. New certifications are released monthly.",
  },
  {
    question: "Can I export data from the analytics dashboard?",
    answer: "Yes, all reports can be exported in PDF or Excel format from the Reports section. Real-time analytics can be exported via API integration.",
  },
];

export default function PortalSupport() {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Request Submitted",
      description: "Our team will respond within 24 hours.",
    });
    setFormData({ subject: "", message: "" });
  };

  return (
    <PortalLayout
      title="Support"
      description="Get help from our partner support team"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-card rounded-2xl border border-border shadow-soft p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">Contact Support</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief description of your issue"
                className="bg-background"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Provide details about your support request..."
                rows={6}
                className="bg-background resize-none"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="font-medium text-foreground mb-4">Other Ways to Reach Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                partner-support@co-repairs.com
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567 (9 AM - 6 PM EST)
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                Live chat available in business hours
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-card rounded-2xl border border-border shadow-soft p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openFaq === index ? "max-h-40" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
