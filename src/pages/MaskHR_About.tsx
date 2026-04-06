/* MaskHR About Page - Deep Navy Command Center Design */
import { Shield, Globe, TrendingUp, Users, BarChart3, Zap } from "lucide-react";
import MaskHR_Navbar from "@/components/MaskHR_Navbar";
import MaskHR_Footer from "@/components/MaskHR_Footer";

const values = [
  { icon: Shield, title: "Security First", desc: "Enterprise-grade security is not an afterthought at MaskHR — it is the foundation. SOC 2 Type II, ISO 27001, and GDPR compliance are built into every layer of the platform." },
  { icon: Globe, title: "Global by Design", desc: "MaskHR was architected from day one to support organizations operating across multiple countries, currencies, and regulatory environments." },
  { icon: TrendingUp, title: "Continuous Innovation", desc: "Our engineering team ships meaningful product updates every two weeks, driven by customer feedback and the latest advances in AI and cloud infrastructure." },
  { icon: Users, title: "Customer Obsession", desc: "Every product decision at MaskHR starts with a single question: does this make our customers' lives meaningfully better?" },
  { icon: BarChart3, title: "Data Transparency", desc: "We believe organizations deserve complete visibility into their own data. MaskHR provides unrestricted data export and open API access at every tier." },
  { icon: Zap, title: "Speed & Reliability", desc: "Our globally distributed infrastructure delivers 99.9% uptime SLA with sub-100ms response times for core workflows, regardless of your location." },
];

const milestones = [
  { year: "2022", event: "MaskHR founded with a mission to unify enterprise HR and Finance" },
  { year: "2023", event: "Core HR and Payroll modules launched, serving first 50 enterprise customers" },
  { year: "2024", event: "Accounting and ERP modules released; expanded to 50+ countries" },
  { year: "2025", event: "AI-powered analytics suite launched; 150+ country support achieved" },
  { year: "2026", event: "Next-generation platform with real-time data streaming and advanced ML models" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white">
      <MaskHR_Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-[#080F1E] to-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">About MaskHR</span>
            <h1 className="text-5xl font-bold text-white mb-6">Rethinking Enterprise Software from the Ground Up</h1>
            <p className="text-white/60 text-lg leading-relaxed">
              MaskHR was born from a simple observation: enterprise organizations were spending enormous resources managing data across dozens of disconnected HR, payroll, and finance systems. We set out to build the platform that eliminates this complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Mission</span>
              <h2 className="text-4xl font-bold text-white mb-6">Eliminate the Silos That Hold Organizations Back</h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                The average enterprise uses 11 different HR and finance systems. Each one creates data silos, manual reconciliation work, and blind spots in organizational intelligence. MaskHR's mission is to replace this fragmented landscape with a single, deeply integrated platform.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                We believe that when HR and Finance data live in the same system, organizations make better decisions faster.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Enterprise Customers" },
                { value: "150+", label: "Countries Supported" },
                { value: "2M+", label: "Employees Managed" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0F2847] border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080F1E]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Values</span>
            <h2 className="text-4xl font-bold text-white">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-[#0F2847] border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Journey</span>
            <h2 className="text-4xl font-bold text-white">MaskHR Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 font-bold text-xs">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
                </div>
                <div className="pt-3 pb-8">
                  <p className="text-white/70 text-base leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MaskHR_Footer />
    </div>
  );
}