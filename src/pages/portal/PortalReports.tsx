import { PortalLayout } from "@/components/portal/PortalLayout";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar } from "lucide-react";

const reports = [
  {
    name: "Monthly Performance Summary",
    type: "PDF",
    date: "January 2024",
    size: "2.4 MB",
  },
  {
    name: "Customer Satisfaction Report",
    type: "PDF",
    date: "January 2024",
    size: "1.8 MB",
  },
  {
    name: "Service Center Analytics",
    type: "XLSX",
    date: "January 2024",
    size: "4.2 MB",
  },
  {
    name: "SLA Compliance Report",
    type: "PDF",
    date: "December 2023",
    size: "1.5 MB",
  },
  {
    name: "Parts Inventory Status",
    type: "XLSX",
    date: "December 2023",
    size: "3.1 MB",
  },
  {
    name: "Technician Performance Review",
    type: "PDF",
    date: "December 2023",
    size: "2.8 MB",
  },
];

export default function PortalReports() {
  const handleDownload = (reportName: string) => {
    // Demo - just show an alert
    alert(`Downloading: ${reportName}`);
  };

  return (
    <PortalLayout
      title="Reports"
      description="Access and download your service reports"
    >
      <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="w-4 h-4" />
              Filter by Date
            </Button>
          </div>
          <Button variant="outline" size="sm">
            Request Custom Report
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Report Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Type</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Period</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Size</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.name} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{report.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex px-2 py-1 rounded bg-muted text-xs font-medium text-muted-foreground">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">{report.date}</td>
                  <td className="py-4 px-6 text-muted-foreground">{report.size}</td>
                  <td className="py-4 px-6 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownload(report.name)}
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
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
