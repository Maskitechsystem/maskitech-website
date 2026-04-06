/* MaskHR Home Page - Deep Navy Command Center Design
 * Hero with dashboard mockup, module cards, stats, testimonials, CTA
 */
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, DollarSign, BarChart3, Settings, Star, TrendingUp, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { toast } from "sonner";
import Navbar from "@/components/MaskHR_Navbar";
import Footer from "@/components/MaskHR_Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499682206/iGcbWK4gX9eL7PBKEzwPpZ/maskhr-hero-HAcniY8fCqu6tpUAZ7ceXD.png";
const ANALYTICS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499682206/iGcbWK4gX9eL7PBKEzwPpZ/maskhr-analytics-3fu4TmtZSpQRiTFxpqbgpa.png";

const modules = [
  {
    icon: Users,
    title: "Core HR",
    subtitle: "HRIS Foundation",
    description: "Centralized employee records, organizational management, benefits administration, and time tracking — all in one system of record.",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    features: ["Global Employee Database", "Org Chart Management", "Benefits Administration", "Document Management"],
  },
  {
    icon: Star,
    title: "Talent Management",
    subtitle: "Attract & Retain",
    description: "End-to-end talent lifecycle from applicant tracking and onboarding to performance reviews, learning, and succession planning.",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    features: ["Applicant Tracking (ATS)", "Automated Onboarding", "Performance Reviews", "Learning Management (LMS)"],
  },
  {
    icon: DollarSign,
    title: "Payroll",
    subtitle: "Global Compensation",
    description: "Automated global payroll processing, tax compliance, compensation management, and expense reimbursement across all jurisdictions.",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
    features: ["Multi-Jurisdiction Payroll", "Tax Compliance & Filing", "Compensation Planning", "Expense Management"],
  },
  {
    icon: BarChart3,
    title: "Accounting & Finance",
    subtitle: "Financial Intelligence",
    description: "Real-time general ledger, AP/AR automation, cash flow management, and financial reporting deeply integrated with HR data.",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    features: ["General Ledger (GL)", "Accounts Payable/Receivable", "Cash Flow Forecasting", "Budgeting & Reporting"],
  },
  {
    icon: Settings,
    title: "ERP",
    subtitle: "Enterprise Operations",
    description: "Unified enterprise resource planning covering project management, procurement, IT assets, and advanced business intelligence.",
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/30",
    iconColor: "text-rose-400",
    features: ["Project & Resource Mgmt", "Procurement & Supply Chain", "IT Asset Management", "AI-Powered Analytics"],
  },
];

const stats = [
  { value: "5", label: "Unified Modules", suffix: "+" },
  { value: "99.9", label: "Uptime SLA", suffix: "%" },
  { value: "150", label: "Countries Supported", suffix: "+" },
  { value: "40", label: "Reduction in Admin Work", suffix: "%" },
];

const benefits = [
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II, ISO 27001, GDPR compliant with end-to-end encryption and role-based access control." },
  { icon: Globe, title: "Global Ready", desc: "Multi-currency, multi-language, and multi-jurisdiction support for organizations operating worldwide." },
  { icon: TrendingUp, title: "AI-Powered Insights", desc: "Machine learning models surface workforce trends, predict attrition, and optimize compensation strategies." },
  { icon: Settings, title: "Open API Platform", desc: "RESTful APIs and pre-built integrations with 200+ enterprise tools including Slack, Salesforce, and SAP." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0F2847] to-[#0B1F3A]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>
                  Unified Enterprise Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                The Command Center for Your{" "}
                <span className="text-amber-400">Entire Enterprise</span>
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                MaskHR unifies HR, Payroll, Accounting, and ERP into one seamless platform — eliminating silos, automating workflows, and delivering real-time intelligence across your organization.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Core HR", "Payroll", "Accounting", "ERP", "Analytics"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-sm text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                    <CheckCircle size={14} className="text-amber-400 flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-amber-500 hover:bg-amber-400 text-[#0B1F3A] font-bold text-base px-7 py-6 shadow-xl hover:shadow-amber-500/30 transition-all"
                  onClick={() => toast.info("Demo booking coming soon!")}
                >
                  Request a Demo
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Link href="/modules">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 text-base px-7 py-6"
                  >
                    Explore Modules
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img
                  src={HERO_IMG}
                  alt="MaskHR Enterprise Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#0F2847] border border-amber-500/30 rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <TrendingUp size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm" style={{ fontFamily: "Sora, sans-serif" }}>40% Less Admin</div>
                    <div className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>Avg. time saved per week</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#080F1E] border-y border-white/10 py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-400 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                  {stat.value}<span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="py-24 bg-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block" style={{ fontFamily: "Inter, sans-serif" }}>
              Platform Modules
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
              Everything Your Enterprise Needs
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Five deeply integrated modules that share a single data layer, eliminating redundancy and delivering a unified view of your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`relative rounded-xl border ${mod.border} bg-gradient-to-br ${mod.color} p-6 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-[#0B1F3A]/60 flex items-center justify-center mb-4 ${mod.iconColor}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {mod.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Sora, sans-serif" }}>{mod.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>{mod.description}</p>
                  <ul className="space-y-1.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/50" style={{ fontFamily: "Inter, sans-serif" }}>
                        <CheckCircle size={12} className={mod.iconColor} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}

            {/* View All Card */}
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 flex flex-col items-center justify-center text-center cursor-pointer group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                <ArrowRight size={24} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Explore All Modules</h3>
              <p className="text-white/50 text-sm mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                Dive deeper into each module's capabilities and features.
              </p>
              <Link href="/modules">
                <Button className="bg-amber-500 hover:bg-amber-400 text-[#0B1F3A] font-semibold text-sm">
                  View Details
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-24 bg-[#080F1E]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block" style={{ fontFamily: "Inter, sans-serif" }}>
                Business Intelligence
              </span>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                Real-Time Analytics Across Every Module
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                MaskHR's unified data layer means every metric — from headcount to cash flow — is available in real-time. AI-powered dashboards surface insights that would take weeks to compile manually.
              </p>
              <div className="space-y-4">
                {[
                  "Workforce growth and attrition forecasting",
                  "Payroll cost vs. revenue per employee",
                  "Department-level budget variance analysis",
                  "Talent pipeline and succession readiness scores",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={ANALYTICS_IMG}
                alt="MaskHR Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block" style={{ fontFamily: "Inter, sans-serif" }}>
              Why MaskHR
            </span>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
              Built for Enterprise Scale
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-[#0F2847] border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{b.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#080F1E]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-[#0F2847] to-[#0B1F3A] p-12 lg:p-20 text-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                Ready to Unify Your Enterprise?
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
                Join forward-thinking organizations that have consolidated their HR, Finance, and Operations onto MaskHR's unified platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-amber-500 hover:bg-amber-400 text-[#0B1F3A] font-bold text-base px-8 py-6 shadow-xl hover:shadow-amber-500/30 transition-all"
                  onClick={() => toast.info("Demo booking coming soon!")}
                >
                  Request a Demo
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
