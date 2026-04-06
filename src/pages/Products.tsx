/* ============================================================
   MASKITECH — PRODUCTS PAGE
   Design: Dark Modernism — showcase MaskHR, RestoData, FreshBite
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Users, BarChart3, ShoppingCart, Check, X, ChevronRight,
  ArrowRight, Zap, Database, Lock, Globe, Smartphone, Clock,
  TrendingUp, Settings, AlertCircle
} from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    id: "maskhr",
    name: "MaskHR",
    tagline: "Human Resource Management System",
    description: "Comprehensive HR platform for employee management, payroll, attendance, leave management, and performance reviews.",
    icon: Users,
    color: "oklch(0.52 0.22 258)",
    features: [
      "Employee Management & Profiles",
      "Payroll & Compensation",
      "Attendance Tracking",
      "Leave Management",
      "Performance Reviews",
      "Recruitment Pipeline",
      "Analytics & Reports",
      "Multi-department Support"
    ],
    cta: "View HRMS Demo",
    href: "/products/maskhr",
    status: "Live Demo Available",
    users: "500+ organizations",
  },
  {
    id: "restodata",
    name: "RestoData",
    tagline: "Restaurant Analytics & Management Dashboard",
    description: "Advanced analytics platform for restaurant chains to track sales, inventory, staff performance, and customer insights in real-time.",
    icon: BarChart3,
    color: "oklch(0.55 0.18 200)",
    features: [
      "Real-time Sales Analytics",
      "Inventory Management",
      "Staff Performance Tracking",
      "Customer Analytics",
      "Multi-location Dashboard",
      "Revenue Forecasting",
      "Supplier Integration",
      "Mobile App Access"
    ],
    cta: "View Live Dashboard",
    href: "https://restodata.vercel.app/dashboard",
    status: "Production Ready",
    users: "50+ restaurant chains",
    external: true,
  },
  {
    id: "freshbite",
    name: "FreshBite",
    tagline: "Food Preorder & Delivery Application",
    description: "Customer-facing app for pre-ordering food from restaurants with real-time tracking, payment integration, and loyalty rewards.",
    icon: ShoppingCart,
    color: "oklch(0.55 0.18 160)",
    features: [
      "Food Menu Browsing",
      "Pre-order System",
      "Real-time Order Tracking",
      "Multiple Payment Methods",
      "Loyalty Rewards Program",
      "Restaurant Ratings & Reviews",
      "Push Notifications",
      "Saved Preferences"
    ],
    cta: "Download App",
    href: "https://freshbite-app.vercel.app/",
    status: "Available on Web",
    users: "10,000+ active users",
    external: true,
  },
];

const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "User Management", maskhr: true, restodata: true, freshbite: true },
      { name: "Real-time Analytics", maskhr: true, restodata: true, freshbite: false },
      { name: "Mobile App", maskhr: false, restodata: true, freshbite: true },
      { name: "Multi-location Support", maskhr: true, restodata: true, freshbite: false },
    ]
  },
  {
    category: "Integration & APIs",
    features: [
      { name: "REST API", maskhr: true, restodata: true, freshbite: true },
      { name: "GitHub Integration", maskhr: false, restodata: true, freshbite: false },
      { name: "Supabase Backend", maskhr: false, restodata: true, freshbite: true },
      { name: "Payment Gateway", maskhr: false, restodata: false, freshbite: true },
    ]
  },
  {
    category: "Security & Compliance",
    features: [
      { name: "Role-based Access", maskhr: true, restodata: true, freshbite: false },
      { name: "Data Encryption", maskhr: true, restodata: true, freshbite: true },
      { name: "Audit Logs", maskhr: true, restodata: true, freshbite: false },
      { name: "GDPR Compliant", maskhr: true, restodata: true, freshbite: true },
    ]
  },
];

const ComparisonCell = ({ value }: { value: boolean }) => (
  value ? (
    <Check size={16} className="text-[oklch(0.65_0.18_145)]" />
  ) : (
    <X size={16} className="text-[oklch(0.62_0.22_25)]" />
  )
);

export default function Products() {
  const [activeTab, setActiveTab] = useState<"overview" | "comparison">("overview");

  const handleExternalLink = (url: string, productName: string) => {
    toast.success(`Opening ${productName}`, {
      description: "Redirecting to live application...",
    });
    setTimeout(() => window.open(url, "_blank"), 300);
  };

  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section className="pt-16 pb-12 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.52_0.22_258)]/5 to-[oklch(0.55_0.18_200)]/3 pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="Maskitech-badge mb-4 inline-block">Our Product Suite</span>
            <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
              Integrated Business
              <br />
              <span className="text-gradient-cobalt">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              MaskiTech brings together HR management, restaurant analytics, and food ordering into one unified platform ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ── TAB NAVIGATION ── */}
      <section className="py-6 border-b border-border">
        <div className="container">
          <div className="flex gap-2">
            {[
              { id: "overview", label: "Product Overview" },
              { id: "comparison", label: "Feature Comparison" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "overview" | "comparison")}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[oklch(0.52_0.22_258)] text-white cobalt-glow-sm"
                    : "bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground hover:bg-white/8"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW TAB ── */}
      {activeTab === "overview" && (
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-6 group"
                >
                  {/* Header */}
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${product.color}20`, border: `1px solid ${product.color}30` }}
                    >
                      <product.icon size={24} style={{ color: product.color }} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-1">{product.name}</h2>
                    <p className="text-sm text-muted-foreground mb-3">{product.tagline}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{product.description}</p>
                  </div>

                  {/* Status badges */}
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md"
                      style={{
                        color: product.color,
                        background: `${product.color}15`,
                        border: `1px solid ${product.color}30`
                      }}
                    >
                      {product.status}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-muted-foreground">
                      {product.users}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="flex-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Key Features</p>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.slice(0, 6).map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check size={14} style={{ color: product.color }} className="mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {product.external ? (
                    <button
                      onClick={() => handleExternalLink(product.href, product.name)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all text-white w-full justify-center"
                      style={{
                        background: product.color,
                        boxShadow: `0 0 20px ${product.color}40`
                      }}
                    >
                      {product.cta} <ArrowRight size={14} />
                    </button>
                  ) : (
                    <Link
                      href={product.href}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all text-white w-full justify-center"
                      style={{
                        background: product.color,
                        boxShadow: `0 0 20px ${product.color}40`
                      }}
                    >
                      {product.cta} <ArrowRight size={14} />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Integration info */}
            <div className="glass-card rounded-2xl p-8 border border-[oklch(0.52_0.22_258)]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.52_0.22_258)]/15 border border-[oklch(0.52_0.22_258)]/20 flex items-center justify-center flex-shrink-0">
                  <Zap size={18} className="text-[oklch(0.62_0.20_258)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Unified Ecosystem</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All MaskiTech products are built on modern cloud infrastructure (Vercel, Supabase, GitHub) and can be integrated seamlessly. Share authentication, data, and workflows across the entire platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── COMPARISON TAB ── */}
      {activeTab === "comparison" && (
        <section className="py-16">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Feature Comparison</h2>
              <p className="text-muted-foreground">Detailed breakdown of capabilities across all MaskiTech products.</p>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8 bg-white/2">
                    <th className="px-6 py-4 text-left text-xs font-mono text-muted-foreground uppercase tracking-widest">Feature</th>
                    <th className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <Users size={16} className="text-[oklch(0.52_0.22_258)]" />
                        <span className="text-xs font-semibold text-foreground">MaskHR</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <BarChart3 size={16} className="text-[oklch(0.55_0.18_200)]" />
                        <span className="text-xs font-semibold text-foreground">RestoData</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <ShoppingCart size={16} className="text-[oklch(0.55_0.18_160)]" />
                        <span className="text-xs font-semibold text-foreground">FreshBite</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((section) => (
                    <React.Fragment key={section.category}>
                      <tr className="bg-white/2">
                        <td colSpan={4} className="px-6 py-2.5">
                          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{section.category}</span>
                        </td>
                      </tr>
                      {section.features.map((feature, fi) => (
                        <tr key={`${section.category}-${feature.name}`} className={`border-b border-white/5 hover:bg-white/2 transition-colors ${fi % 2 === 0 ? "" : "bg-white/1"}`}>
                          <td className="px-6 py-3.5 text-sm text-foreground/80">{feature.name}</td>
                          <td className="px-6 py-3.5 text-center"><ComparisonCell value={feature.maskhr} /></td>
                          <td className="px-6 py-3.5 text-center"><ComparisonCell value={feature.restodata} /></td>
                          <td className="px-6 py-3.5 text-center"><ComparisonCell value={feature.freshbite} /></td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              All products include 24/7 support, regular updates, and enterprise-grade security. Custom integrations available.
            </p>
          </div>
        </section>
      )}

      {/* ── PRICING CTA ── */}
      <section className="py-16 bg-[oklch(0.14_0.01_258)] border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="Maskitech-badge mb-4 inline-block">Get Started Today</span>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Choose the products you need and start your free trial. No credit card required.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all cobalt-glow-sm">
                Schedule Demo <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/8 text-foreground font-medium rounded-lg hover:bg-white/8 transition-all">
                View Pricing <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
