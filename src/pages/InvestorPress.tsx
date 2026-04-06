/* ============================================================
   Maskitech SYSTEMS — INVESTOR & PRESS CENTER PAGE
   Design: Dark Modernism — financial data, press releases, downloadable reports
   ============================================================ */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download, ExternalLink, TrendingUp, DollarSign, BarChart3,
  FileText, Newspaper, Calendar, ChevronRight, ArrowRight,
  Building2, Globe, Award, Mail, Phone
} from "lucide-react";
import { toast } from "sonner";

const financialHighlights = [
  { label: "Annual Revenue", value: "$2.4B", change: "+34%", positive: true },
  { label: "ARR Growth", value: "67%", change: "YoY", positive: true },
  { label: "Enterprise Clients", value: "2,400+", change: "+28%", positive: true },
  { label: "Gross Margin", value: "78%", change: "+3pp", positive: true },
];

const reports = [
  {
    id: 1,
    title: "Q4 2024 Earnings Report",
    description: "Full-year 2024 financial results including revenue breakdown, segment performance, and 2025 guidance.",
    type: "Earnings Report",
    date: "Feb 15, 2024",
    size: "4.2 MB",
    format: "PDF",
    icon: BarChart3,
    color: "oklch(0.52 0.22 258)",
  },
  {
    id: 2,
    title: "2024 Annual Report",
    description: "Comprehensive annual report covering business performance, strategy, governance, and financial statements.",
    type: "Annual Report",
    date: "Mar 1, 2024",
    size: "12.8 MB",
    format: "PDF",
    icon: FileText,
    color: "oklch(0.55 0.18 200)",
  },
  {
    id: 3,
    title: "Q3 2024 Earnings Report",
    description: "Third quarter 2024 financial results with product segment breakdown and updated full-year guidance.",
    type: "Earnings Report",
    date: "Nov 12, 2023",
    size: "3.8 MB",
    format: "PDF",
    icon: BarChart3,
    color: "oklch(0.52 0.22 258)",
  },
  {
    id: 4,
    title: "2024 ESG & Sustainability Report",
    description: "Environmental, social, and governance performance metrics, sustainability commitments, and progress toward net-zero.",
    type: "ESG Report",
    date: "Jan 20, 2024",
    size: "8.1 MB",
    format: "PDF",
    icon: Globe,
    color: "oklch(0.55 0.18 160)",
  },
  {
    id: 5,
    title: "Investor Day 2024 Presentation",
    description: "Full slide deck from Maskitech Investor Day 2024 covering 5-year strategy, product roadmap, and financial targets.",
    type: "Presentation",
    date: "Oct 5, 2023",
    size: "18.4 MB",
    format: "PDF",
    icon: TrendingUp,
    color: "oklch(0.55 0.18 280)",
  },
  {
    id: 6,
    title: "Series D Funding Announcement Deck",
    description: "Investor materials from Maskitech's $450M Series D funding round at a $6.2B valuation.",
    type: "Funding Materials",
    date: "Sep 1, 2023",
    size: "6.7 MB",
    format: "PDF",
    icon: DollarSign,
    color: "oklch(0.55 0.18 80)",
  },
];

const pressReleases = [
  {
    id: 1,
    title: "Maskitech Systems Raises $450M Series D at $6.2B Valuation",
    excerpt: "Maskitech Systems today announced the close of a $450 million Series D funding round led by Sequoia Capital, with participation from existing investors Andreessen Horowitz and Tiger Global.",
    date: "Sep 1, 2023",
    category: "Funding",
    featured: true,
  },
  {
    id: 2,
    title: "Maskitech Apex Platform Achieves FedRAMP High Authorization",
    excerpt: "Maskitech Systems announces FedRAMP High authorization for the Apex Platform, enabling deployment across U.S. federal agencies and defense contractors.",
    date: "Nov 28, 2023",
    category: "Product",
    featured: false,
  },
  {
    id: 3,
    title: "Maskitech Acquires CloudSentry for $280M to Expand Security Portfolio",
    excerpt: "Strategic acquisition of CloudSentry brings advanced cloud-native security capabilities and 200+ enterprise customers to the Maskitech Shield Security suite.",
    date: "Jan 15, 2024",
    category: "M&A",
    featured: false,
  },
  {
    id: 4,
    title: "Maskitech Named Leader in 2024 Gartner Magic Quadrant for Enterprise Integration",
    excerpt: "Maskitech Systems recognized as a Leader for the third consecutive year in the Gartner Magic Quadrant for Enterprise Integration Platform as a Service.",
    date: "Feb 8, 2024",
    category: "Recognition",
    featured: false,
  },
  {
    id: 5,
    title: "Maskitech Expands APAC Presence with New Singapore Headquarters",
    excerpt: "New regional headquarters in Singapore to serve growing demand across Southeast Asia, with $100M committed investment and plans to hire 500 employees by 2025.",
    date: "Mar 5, 2024",
    category: "Expansion",
    featured: false,
  },
  {
    id: 6,
    title: "Maskitech DataFlow Analytics Achieves ISO 27001 Certification",
    excerpt: "DataFlow Analytics platform receives ISO 27001:2022 certification, reinforcing Maskitech's commitment to enterprise-grade security and data governance.",
    date: "Mar 20, 2024",
    category: "Compliance",
    featured: false,
  },
];

const awards = [
  { name: "Gartner Magic Quadrant Leader", year: "2024", org: "Gartner" },
  { name: "Forbes Cloud 100", year: "2024", org: "Forbes" },
  { name: "G2 Best Enterprise Software", year: "2024", org: "G2" },
  { name: "Fast Company Most Innovative", year: "2023", org: "Fast Company" },
  { name: "Deloitte Technology Fast 500", year: "2023", org: "Deloitte" },
  { name: "CRN Tech Innovator Award", year: "2023", org: "CRN" },
];

const categoryColors: Record<string, string> = {
  Funding: "oklch(0.55 0.18 80)",
  Product: "oklch(0.52 0.22 258)",
  "M&A": "oklch(0.55 0.18 280)",
  Recognition: "oklch(0.55 0.18 200)",
  Expansion: "oklch(0.55 0.18 160)",
  Compliance: "oklch(0.55 0.18 320)",
};

export default function InvestorPress() {
  const [activeTab, setActiveTab] = useState<"investor" | "press">("investor");
  const [reportFilter, setReportFilter] = useState("All");

  const handleDownload = (report: typeof reports[0]) => {
    toast.success(`Downloading "${report.title}"`, {
      description: `${report.format} · ${report.size}`,
    });
  };

  const reportTypes = ["All", "Earnings Report", "Annual Report", "ESG Report", "Presentation", "Funding Materials"];
  const filteredReports = reportFilter === "All" ? reports : reports.filter(r => r.type === reportFilter);

  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section className="pt-16 pb-12 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.52_0.22_258)]/5 to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="Maskitech-badge mb-4 inline-block">Investor & Press</span>
            <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
              Investor Relations
              <br />
              <span className="text-gradient-cobalt">& Press Center</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Financial reports, press releases, and media resources for investors, analysts, and journalists covering Maskitech Systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINANCIAL HIGHLIGHTS ── */}
      <section className="py-12 border-b border-border bg-[oklch(0.14_0.01_258)]">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Financial Highlights — FY 2024</h2>
            <span className="Maskitech-badge">As of Dec 31, 2024</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {financialHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-6"
              >
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-3xl font-bold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.value}
                </p>
                <div className={`flex items-center gap-1 text-xs font-mono ${item.positive ? "text-[oklch(0.65_0.18_145)]" : "text-[oklch(0.62_0.22_25)]"}`}>
                  <TrendingUp size={11} />
                  {item.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAB NAVIGATION ── */}
      <section className="py-6 border-b border-border">
        <div className="container">
          <div className="flex gap-2">
            {[
              { id: "investor", label: "Investor Relations", icon: BarChart3 },
              { id: "press", label: "Press Center", icon: Newspaper },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "investor" | "press")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[oklch(0.52_0.22_258)] text-white cobalt-glow-sm"
                    : "bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground hover:bg-white/8"
                }`}
              >
                <tab.icon size={15} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTOR RELATIONS ── */}
      {activeTab === "investor" && (
        <section className="py-16">
          <div className="container">
            {/* Report type filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {reportTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setReportFilter(type)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    reportFilter === type
                      ? "bg-[oklch(0.52_0.22_258)] text-white"
                      : "bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Reports grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {filteredReports.map((report, i) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${report.color}20`, border: `1px solid ${report.color}30` }}
                    >
                      <report.icon size={18} style={{ color: report.color }} />
                    </div>
                    <span className="Maskitech-badge text-[10px]">{report.type}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">{report.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{report.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={11} />{report.date}</span>
                      <span className="font-mono">{report.size}</span>
                    </div>
                    <button
                      onClick={() => handleDownload(report)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[oklch(0.52_0.22_258)]/15 border border-[oklch(0.52_0.22_258)]/25 text-[oklch(0.62_0.20_258)] rounded-md text-xs font-medium hover:bg-[oklch(0.52_0.22_258)]/25 transition-all"
                    >
                      <Download size={12} />
                      {report.format}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Awards & Recognition
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {awards.map((award, i) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="glass-card rounded-xl p-4 text-center flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-[oklch(0.52_0.22_258)]/15 border border-[oklch(0.52_0.22_258)]/20 flex items-center justify-center">
                      <Award size={16} className="text-[oklch(0.62_0.20_258)]" />
                    </div>
                    <p className="text-xs font-semibold text-foreground text-center leading-tight">{award.name}</p>
                    <p className="text-[10px] text-muted-foreground">{award.org} · {award.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Investor contact */}
            <div className="mt-16 glass-card rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Investor Relations Contact</h3>
                <p className="text-muted-foreground text-sm">For investor inquiries, financial data requests, or analyst briefings.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:ir@Maskitech.com" className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm">
                  <Mail size={15} /> ir@Maskitech.com
                </a>
                <a href="tel:+18005551234" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/8 text-foreground font-medium rounded-lg hover:bg-white/8 transition-all text-sm">
                  <Phone size={15} /> +1 (800) 555-1234
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PRESS CENTER ── */}
      {activeTab === "press" && (
        <section className="py-16">
          <div className="container">
            {/* Featured press release */}
            {pressReleases.filter(p => p.featured).map((pr) => (
              <div key={pr.id} className="glass-card rounded-2xl p-8 mb-10 border border-[oklch(0.52_0.22_258)]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[oklch(0.52_0.22_258)] to-[oklch(0.55_0.18_280)]" />
                <div className="flex items-start justify-between mb-4">
                  <span className="Maskitech-badge">Latest Release</span>
                  <span className="text-xs text-muted-foreground">{pr.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 leading-tight">{pr.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{pr.excerpt}</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm cobalt-glow-sm">
                    Read Full Release <ArrowRight size={15} />
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/8 text-foreground font-medium rounded-lg hover:bg-white/8 transition-all text-sm">
                    <Download size={15} /> Download PDF
                  </button>
                </div>
              </div>
            ))}

            {/* All press releases */}
            <h2 className="text-xl font-bold text-foreground mb-6">All Press Releases</h2>
            <div className="space-y-3 mb-16">
              {pressReleases.filter(p => !p.featured).map((pr, i) => (
                <motion.div
                  key={pr.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass-card glass-card-hover rounded-xl px-6 py-5 flex items-start gap-5 group cursor-pointer"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: categoryColors[pr.category] || "oklch(0.52 0.22 258)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded"
                        style={{
                          color: categoryColors[pr.category] || "oklch(0.62 0.20 258)",
                          background: `${categoryColors[pr.category] || "oklch(0.52 0.22 258)"}15`
                        }}
                      >
                        {pr.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{pr.date}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-[oklch(0.72_0.18_258)] transition-colors leading-snug mb-1">
                      {pr.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{pr.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="p-2 rounded-md hover:bg-white/8 transition-colors">
                      <ExternalLink size={14} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-md hover:bg-white/8 transition-colors">
                      <Download size={14} className="text-muted-foreground" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Media kit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.52_0.22_258)]/15 border border-[oklch(0.52_0.22_258)]/20 flex items-center justify-center mb-5">
                  <Building2 size={22} className="text-[oklch(0.62_0.20_258)]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Media Kit</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Download our official brand assets, executive headshots, product screenshots, and company fact sheet for editorial use.
                </p>
                <button
                  onClick={() => toast.success("Media kit download started", { description: "ZIP · 45.2 MB" })}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm cobalt-glow-sm"
                >
                  <Download size={15} /> Download Media Kit
                </button>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.55_0.18_200)]/15 border border-[oklch(0.55_0.18_200)]/20 flex items-center justify-center mb-5">
                  <Mail size={22} className="text-[oklch(0.65_0.16_200)]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Press Contact</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  For media inquiries, interview requests, and editorial coverage of Maskitech Systems.
                </p>
                <div className="space-y-3">
                  <a href="mailto:press@Maskitech.com" className="flex items-center gap-2 text-sm text-[oklch(0.62_0.20_258)] hover:text-[oklch(0.72_0.18_258)] transition-colors">
                    <Mail size={14} /> press@Maskitech.com
                  </a>
                  <a href="tel:+18005559876" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Phone size={14} /> +1 (800) 555-9876
                  </a>
                </div>
              </div>
            </div>

            {/* Coverage logos */}
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6 text-center">Featured In</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {["Forbes", "TechCrunch", "Wall Street Journal", "Bloomberg", "Financial Times", "Wired"].map((pub) => (
                  <span key={pub} className="text-muted-foreground/40 hover:text-muted-foreground transition-colors font-semibold text-sm tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
