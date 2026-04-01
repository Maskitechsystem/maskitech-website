/* ============================================================
   NOVATECH SYSTEMS — CASE STUDIES PAGE
   Design: Dark Modernism — carousel with expandable modals
   ============================================================ */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, X, ArrowRight, TrendingUp,
  Building2, Heart, Zap, ShoppingBag, Plane, DollarSign,
  BarChart3, Users, Clock, Globe
} from "lucide-react";

const CASE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499682206/5S2oDo9MrGbF4qkHsfsTza/novatech-case-study-bg-3JYmyDTwn82UP6wEJXn9Tn.webp";

const caseStudies = [
  {
    id: 1,
    company: "Meridian Global Bank",
    industry: "Financial Services",
    icon: DollarSign,
    color: "oklch(0.52 0.22 258)",
    challenge: "Meridian needed to modernize its 30-year-old core banking infrastructure while maintaining 24/7 operations for 12 million customers across 40 countries.",
    solution: "Deployed NovaTech Apex Platform with a phased migration strategy, zero-downtime cutover, and Shield Security for regulatory compliance across 40+ jurisdictions.",
    results: [
      { metric: "340%", label: "ROI in 18 months" },
      { metric: "60%", label: "Reduction in IT costs" },
      { metric: "99.99%", label: "Uptime maintained" },
      { metric: "3x", label: "Faster transaction processing" },
    ],
    quote: "NovaTech transformed our infrastructure without a single hour of downtime. The ROI exceeded every projection we had.",
    author: "Sarah Chen",
    role: "CTO, Meridian Global Bank",
    tags: ["Digital Transformation", "Core Banking", "Compliance"],
    duration: "18 months",
    teamSize: "2,400 employees affected",
  },
  {
    id: 2,
    company: "Nexus Health Systems",
    industry: "Healthcare",
    icon: Heart,
    color: "oklch(0.55 0.18 200)",
    challenge: "Nexus Health needed to unify patient data across 85 hospitals and 400 clinics while achieving HIPAA compliance and enabling real-time clinical decision support.",
    solution: "Implemented DataFlow Analytics for unified patient data lake, Shield Security for HIPAA compliance automation, and custom AI models for clinical decision support.",
    results: [
      { metric: "45%", label: "Reduction in diagnostic time" },
      { metric: "85", label: "Hospitals unified" },
      { metric: "100%", label: "HIPAA compliance" },
      { metric: "$120M", label: "Annual cost savings" },
    ],
    quote: "The unified data platform has fundamentally changed how our clinicians make decisions. Patient outcomes have measurably improved.",
    author: "Dr. Marcus Williams",
    role: "Chief Digital Officer, Nexus Health",
    tags: ["Healthcare IT", "Data Unification", "HIPAA"],
    duration: "24 months",
    teamSize: "12,000 clinical staff",
  },
  {
    id: 3,
    company: "Orbital Energy Corp",
    industry: "Energy & Utilities",
    icon: Zap,
    color: "oklch(0.55 0.18 80)",
    challenge: "Orbital Energy needed to optimize grid operations across 6 countries, reduce energy waste by 30%, and enable predictive maintenance for 15,000 infrastructure assets.",
    solution: "CloudBridge for multi-region infrastructure management, DataFlow for predictive analytics on sensor data, and Apex for operational workflow automation.",
    results: [
      { metric: "32%", label: "Energy waste reduction" },
      { metric: "15K", label: "Assets monitored in real-time" },
      { metric: "78%", label: "Fewer unplanned outages" },
      { metric: "$200M", label: "Infrastructure savings" },
    ],
    quote: "Predictive maintenance alone has saved us $200 million in infrastructure costs. The ROI was visible within the first quarter.",
    author: "Elena Vasquez",
    role: "VP of Operations, Orbital Energy",
    tags: ["IoT", "Predictive Maintenance", "Multi-Cloud"],
    duration: "12 months",
    teamSize: "8,500 operations staff",
  },
  {
    id: 4,
    company: "Quantum Retail Group",
    industry: "Retail & E-commerce",
    icon: ShoppingBag,
    color: "oklch(0.55 0.18 320)",
    challenge: "Quantum Retail needed to unify online and offline customer experiences across 2,000 stores, 15 e-commerce platforms, and 50 million loyalty program members.",
    solution: "Apex Platform for unified commerce orchestration, DataFlow for customer 360 analytics, and real-time personalization engine processing 10M events per second.",
    results: [
      { metric: "28%", label: "Increase in conversion rate" },
      { metric: "50M", label: "Customers unified" },
      { metric: "10M", label: "Events/second processed" },
      { metric: "4.2x", label: "Customer lifetime value" },
    ],
    quote: "We went from 47 disconnected systems to one unified platform. Our customers finally have a seamless experience across every touchpoint.",
    author: "James Park",
    role: "Chief Customer Officer, Quantum Retail",
    tags: ["Omnichannel", "Customer 360", "Personalization"],
    duration: "15 months",
    teamSize: "35,000 retail staff",
  },
  {
    id: 5,
    company: "Atlas Airlines",
    industry: "Aviation & Travel",
    icon: Plane,
    color: "oklch(0.52 0.18 240)",
    challenge: "Atlas Airlines needed to modernize operations for 800 daily flights, reduce delays through predictive analytics, and improve passenger experience across 120 destinations.",
    solution: "DataFlow Analytics for flight operations intelligence, Apex for crew and gate management automation, and Shield Security for regulatory compliance across 120 countries.",
    results: [
      { metric: "23%", label: "Reduction in delays" },
      { metric: "800", label: "Daily flights optimized" },
      { metric: "94%", label: "Passenger satisfaction" },
      { metric: "$85M", label: "Operational savings" },
    ],
    quote: "NovaTech's predictive analytics have transformed our operations. We now anticipate disruptions before they happen.",
    author: "Captain David Osei",
    role: "COO, Atlas Airlines",
    tags: ["Aviation Operations", "Predictive Analytics", "Compliance"],
    duration: "20 months",
    teamSize: "18,000 aviation staff",
  },
];

const industries = ["All", "Financial Services", "Healthcare", "Energy & Utilities", "Retail & E-commerce", "Aviation & Travel"];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
  const [activeIndustry, setActiveIndustry] = useState("All");
  const carouselRef = useRef<HTMLDivElement>(null);

  const filtered = activeIndustry === "All"
    ? caseStudies
    : caseStudies.filter(c => c.industry === activeIndustry);

  const prev = () => setActiveIndex(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setActiveIndex(i => (i + 1) % filtered.length);

  const activeCase = filtered[activeIndex] || filtered[0];

  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section className="pt-16 pb-12 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.52_0.22_258)]/5 to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="novatech-badge mb-4 inline-block">Case Studies</span>
            <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
              Real Results.
              <br />
              <span className="text-gradient-cobalt">Proven Impact.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore how leading enterprises across industries have transformed their operations with NovaTech Systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY FILTER ── */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => { setActiveIndustry(ind); setActiveIndex(0); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeIndustry === ind
                    ? "bg-[oklch(0.52_0.22_258)] text-white cobalt-glow-sm"
                    : "bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground hover:bg-white/8"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CAROUSEL ── */}
      <section className="py-16">
        <div className="container">
          <AnimatePresence mode="wait">
            {activeCase && (
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
              >
                {/* Left: case info */}
                <div className="flex flex-col">
                  <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${activeCase.color}20`, border: `1px solid ${activeCase.color}30` }}
                        >
                          <activeCase.icon size={22} style={{ color: activeCase.color }} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">{activeCase.company}</h2>
                          <span className="novatech-badge text-[10px]">{activeCase.industry}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Challenge</h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">{activeCase.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Solution</h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">{activeCase.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {activeCase.tags.map(tag => (
                        <span key={tag} className="novatech-badge text-[10px]">{tag}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-[oklch(0.62_0.20_258)]" />
                        {activeCase.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={12} className="text-[oklch(0.62_0.20_258)]" />
                        {activeCase.teamSize}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCase(activeCase)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm cobalt-glow-sm w-fit"
                    >
                      Read Full Case Study <ArrowRight size={15} />
                    </button>
                  </div>
                </div>

                {/* Right: metrics + visual */}
                <div className="flex flex-col gap-4">
                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {activeCase.results.map((r) => (
                      <div key={r.label} className="glass-card rounded-xl p-5">
                        <div className="text-3xl font-bold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {r.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div
                    className="rounded-xl p-6 flex-1 relative overflow-hidden"
                    style={{ background: `${activeCase.color}12`, border: `1px solid ${activeCase.color}25` }}
                  >
                    <div className="absolute top-4 right-4 text-6xl font-serif opacity-10" style={{ color: activeCase.color }}>"</div>
                    <p className="text-foreground/90 text-sm leading-relaxed italic mb-4 relative z-10">
                      "{activeCase.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: activeCase.color }}
                      >
                        {activeCase.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{activeCase.author}</p>
                        <p className="text-xs text-muted-foreground">{activeCase.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center hover:bg-white/8 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center hover:bg-white/8 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 h-2 bg-[oklch(0.52_0.22_258)]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-muted-foreground font-mono">
              {String(activeIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </section>

      {/* ── ALL CASE STUDIES GRID ── */}
      <section className="py-16 bg-[oklch(0.14_0.01_258)]">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            All Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                onClick={() => setSelectedCase(cs)}
                className="glass-card glass-card-hover rounded-xl p-6 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${cs.color}20` }}
                  >
                    <cs.icon size={16} style={{ color: cs.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{cs.company}</p>
                    <p className="text-xs text-muted-foreground">{cs.industry}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{cs.challenge}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {cs.results.slice(0, 2).map(r => (
                      <div key={r.label} className="text-center">
                        <p className="text-base font-bold text-foreground">{r.metric}</p>
                        <p className="text-[10px] text-muted-foreground">{r.label}</p>
                      </div>
                    ))}
                  </div>
                  <ChevronRight size={16} className="text-[oklch(0.62_0.20_258)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedCase && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCase(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-[101] overflow-y-auto"
            >
              <div className="min-h-full flex items-start justify-center py-4">
                <div className="w-full max-w-3xl glass-card rounded-2xl border border-white/10 shadow-2xl shadow-black/60 overflow-hidden">
                  {/* Modal header */}
                  <div
                    className="relative px-8 py-10 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${selectedCase.color}30, ${selectedCase.color}10)` }}
                  >
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${CASE_BG})`, backgroundSize: 'cover' }} />
                    <button
                      onClick={() => setSelectedCase(null)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <X size={16} />
                    </button>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ background: `${selectedCase.color}30`, border: `1px solid ${selectedCase.color}50` }}
                        >
                          <selectedCase.icon size={26} style={{ color: selectedCase.color }} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{selectedCase.company}</h2>
                          <span className="novatech-badge">{selectedCase.industry}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                        {selectedCase.results.map(r => (
                          <div key={r.label} className="bg-white/10 rounded-lg px-3 py-2.5 text-center">
                            <p className="text-xl font-bold text-white">{r.metric}</p>
                            <p className="text-xs text-white/70 mt-0.5">{r.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal body */}
                  <div className="px-8 py-8 space-y-8">
                    <div>
                      <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">The Challenge</h3>
                      <p className="text-foreground/80 leading-relaxed">{selectedCase.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">The Solution</h3>
                      <p className="text-foreground/80 leading-relaxed">{selectedCase.solution}</p>
                    </div>
                    <div
                      className="rounded-xl p-6"
                      style={{ background: `${selectedCase.color}10`, border: `1px solid ${selectedCase.color}20` }}
                    >
                      <p className="text-foreground/90 italic leading-relaxed mb-4">"{selectedCase.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ background: selectedCase.color }}
                        >
                          {selectedCase.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{selectedCase.author}</p>
                          <p className="text-sm text-muted-foreground">{selectedCase.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={14} className="text-[oklch(0.62_0.20_258)]" />
                        Project duration: {selectedCase.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users size={14} className="text-[oklch(0.62_0.20_258)]" />
                        {selectedCase.teamSize}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.tags.map(tag => (
                        <span key={tag} className="novatech-badge">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm">
                        Download PDF <ArrowRight size={15} />
                      </button>
                      <button
                        onClick={() => setSelectedCase(null)}
                        className="px-5 py-2.5 bg-white/5 border border-white/8 text-foreground font-medium rounded-lg hover:bg-white/8 transition-all text-sm"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
