import { PortalLayout } from "@/components/portal/PortalLayout";
import { MapPin, Star, Clock, Wrench } from "lucide-react";

const serviceCenters = [
  {
    name: "Mumbai Central",
    location: "Maharashtra",
    rating: 4.8,
    activeTickets: 156,
    avgResolution: "1.8 days",
    status: "operational",
  },
  {
    name: "Delhi NCR Hub",
    location: "Delhi",
    rating: 4.6,
    activeTickets: 203,
    avgResolution: "2.1 days",
    status: "operational",
  },
  {
    name: "Bangalore Tech Center",
    location: "Karnataka",
    rating: 4.9,
    activeTickets: 124,
    avgResolution: "1.5 days",
    status: "operational",
  },
  {
    name: "Chennai Express",
    location: "Tamil Nadu",
    rating: 4.7,
    activeTickets: 98,
    avgResolution: "2.0 days",
    status: "maintenance",
  },
  {
    name: "Kolkata Service Point",
    location: "West Bengal",
    rating: 4.5,
    activeTickets: 87,
    avgResolution: "2.4 days",
    status: "operational",
  },
];

export default function PortalPerformance() {
  return (
    <PortalLayout
      title="Service Center Performance"
      description="Monitor performance across your authorized service network"
    >
      <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Center</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Location</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Rating</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Active Tickets</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Avg Resolution</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {serviceCenters.map((center) => (
                <tr key={center.name} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{center.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {center.location}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium text-foreground">{center.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-foreground">{center.activeTickets}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-foreground">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {center.avgResolution}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        center.status === "operational"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {center.status === "operational" ? "Operational" : "Maintenance"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayout>
  );
}
