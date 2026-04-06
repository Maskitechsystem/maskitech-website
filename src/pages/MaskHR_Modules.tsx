/* MaskHR Modules Page - Deep Navy Command Center Design */
import { Users, Star, DollarSign, BarChart3, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import MaskHR_Navbar from "@/components/MaskHR_Navbar";
import MaskHR_Footer from "@/components/MaskHR_Footer";

const modules = [
  {
    id: "core-hr", icon: Users, title: "Core HR (HRIS)", subtitle: "The Foundation of MaskHR",
    description: "MaskHR's Core HR module serves as the global system of record for every employee in your organization.",
    color: "blue", borderColor: "border-blue-500/40", bgColor: "bg-blue-500/10", iconColor: "text-blue-400",
    features: [
      { name: "Global Employee System of Record", desc: "Centralized database for all employee data across geographies and legal entities." },
      { name: "Organizational Management", desc: "Model complex org structures, reporting lines, and matrix relationships." },
      { name: "Benefits Administration", desc: "Manage health, dental, retirement, and wellness programs." },
      { name: "Time & Attendance Tracking", desc: "Automated tracking of hours, overtime, shift scheduling, and leave balances." },
      { name: "Document Management", desc: "Secure, compliant storage for contracts, certifications, and employee records." },
      { name: "Self-Service Portal", desc: "Employees and managers can update information and access pay stubs independently." },
    ],
  },
  {
    id: "talent", icon: Star, title: "Talent Management", subtitle: "Attract, Develop & Retain",
    description: "From the first job posting to succession planning, MaskHR's Talent Management covers the entire talent lifecycle.",
    color: "purple", borderColor: "border-purple-500/40", bgColor: "bg-purple-500/10", iconColor: "text-purple-400",
    features: [
      { name: "Applicant Tracking System (ATS)", desc: "Streamlined recruitment from job posting to offer letter, with AI-assisted screening." },
      { name: "Automated Onboarding", desc: "Trigger cross-departmental workflows automatically." },
      { name: "Performance Management", desc: "Continuous feedback, OKR goal setting, and 360-degree reviews." },
      { name: "Learning Management System", desc: "Deliver training programs and track completions." },
      { name: "Succession Planning", desc: "Identify high-potential employees and build talent pipelines." },
      { name: "Compensation Benchmarking", desc: "Real-time market data to ensure competitive pay structures." },
    ],
  },
  {
    id: "payroll", icon: DollarSign, title: "Payroll & Compensation", subtitle: "Accurate, Compliant, Global",
    description: "MaskHR's payroll engine draws directly from Core HR and posts results directly to the Accounting General Ledger.",
    color: "amber", borderColor: "border-amber-500/40", bgColor: "bg-amber-500/10", iconColor: "text-amber-400",
    features: [
      { name: "Global Payroll Processing", desc: "Automated wage, tax, and deduction calculations across 150+ countries." },
      { name: "Tax Compliance & Reporting", desc: "Automated tax filings and regulatory compliance for all jurisdictions." },
      { name: "Compensation Management", desc: "Strategic tools for salary bands, merit increases, and bonuses." },
      { name: "Expense Management", desc: "Streamlined submission, approval, and reimbursement workflows." },
      { name: "Payroll Audit Trail", desc: "Complete, immutable audit log of every payroll run." },
      { name: "Direct Deposit & Multi-Currency", desc: "Support for multiple payment methods and currencies." },
    ],
  },
  {
    id: "accounting", icon: BarChart3, title: "Accounting & Finance", subtitle: "Workforce Finance, Unified",
    description: "Every payroll run and expense is automatically journalized, giving finance teams real-time insight into workforce economics.",
    color: "emerald", borderColor: "border-emerald-500/40", bgColor: "bg-emerald-500/10", iconColor: "text-emerald-400",
    features: [
      { name: "General Ledger (GL)", desc: "Real-time ledger automatically capturing transactions from payroll and expenses." },
      { name: "Accounts Payable (AP)", desc: "Automated vendor invoice processing and payment scheduling." },
      { name: "Accounts Receivable (AR)", desc: "Customer invoicing, collections management, and revenue recognition." },
      { name: "Cash Flow Management", desc: "Real-time cash position tracking and forecasting." },
      { name: "Financial Reporting", desc: "Customizable P&L, balance sheet, and workforce cost reports." },
      { name: "Budgeting & Forecasting", desc: "Departmental budget creation, monitoring, and variance analysis." },
    ],
  },
  {
    id: "erp", icon: Settings, title: "Enterprise Resource Planning", subtitle: "Operations, Unified",
    description: "MaskHR's ERP module extends the platform beyond HR and Finance into the broader operational fabric of the enterprise.",
    color: "rose", borderColor: "border-rose-500/40", bgColor: "bg-rose-500/10", iconColor: "text-rose-400",
    features: [
      { name: "Project & Resource Management", desc: "Plan and execute projects with real-time talent allocation and cost tracking." },
      { name: "Procurement & Supply Chain", desc: "Streamlined purchase order management and vendor evaluation." },
      { name: "IT Asset Management", desc: "Automated hardware/software provisioning linked to onboarding." },
      { name: "Advanced Analytics & BI", desc: "Cross-module AI-powered dashboards for strategic insights." },
      { name: "API & Integration Hub", desc: "RESTful APIs and 200+ pre-built connectors." },
      { name: "Compliance & Risk Management", desc: "Automated compliance monitoring and audit trail management." },
    ],
  },
];

const colorMap: Record<string, { badge: string }> = {
  blue: { badge: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  purple: { badge: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
  amber: { badge: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
  emerald: { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
  rose: { badge: "bg-rose-500/10 text-rose-400 border-rose-500/30" },
};

export default function Modules() {
  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white">
      <MaskHR_Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-[#080F1E] to-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Platform Modules</span>
          <h1 className="text-5xl font-bold text-white mb-6">Five Modules. One Platform.</h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mb-10">
            MaskHR combines the best of HRMS, Payroll, Accounting, and ERP into a single, deeply integrated platform.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-16">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            const colors = colorMap[mod.color];
            return (
              <div key={mod.id} id={mod.id} className={`rounded-2xl border ${mod.borderColor} bg-[#0F2847] overflow-hidden`}>
                <div className={`${mod.bgColor} border-b ${mod.borderColor} p-8 lg:p-10`}>
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 rounded-xl ${mod.bgColor} border ${mod.borderColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={28} className={mod.iconColor} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-widest border rounded-full px-3 py-1 ${colors.badge}`}>
                          Module {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-1">{mod.title}</h2>
                      <p className={`text-sm font-semibold ${mod.iconColor}`}>{mod.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed mt-6 max-w-4xl">{mod.description}</p>
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="text-white font-bold text-lg mb-6">Key Capabilities</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {mod.features.map((feature) => (
                      <div key={feature.name} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${mod.bgColor} border ${mod.borderColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle size={12} className={mod.iconColor} />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm mb-1">{feature.name}</div>
                          <div className="text-white/50 text-xs leading-relaxed">{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-[#080F1E]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to See MaskHR in Action?</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Schedule a personalized demo with our team and see how MaskHR can transform your organization.
          </p>
          <Button
            className="bg-amber-500 hover:bg-amber-400 text-[#0B1F3A] font-bold text-base px-8 py-6"
            onClick={() => toast.info("Demo booking coming soon!")}
          >
            Request a Demo <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      <MaskHR_Footer />
    </div>
  );
}