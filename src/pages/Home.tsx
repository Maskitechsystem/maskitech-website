/* ============================================================
   MASKITECH — HOME PAGE REDESIGN
   Direction C: Product Showcase Hero
   Dark background preserved, new layout approach
   ============================================================ */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, ArrowRight, Users, BarChart3, ShoppingCart,
  Globe, Lock, Zap, TrendingUp, CheckCircle2, Star, Play
} from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop";

/* ─── Animated counter hook ─── */
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Typewriter hook ─── */
function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ─── Metric card ─── */
function MetricCard({ value, suffix, label, description }: {
  value: number; suffix: string; label: string; description: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1800, inView);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-2">
      <div className="flex items-end gap-1">
        <span className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {count}
        </span>
        <span className="text-2xl font-bold text-[oklch(0.62_0.20_258)] mb-0.5">{suffix}</span>
      </div>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const products = [
  {
    icon: Users,
    name: "MaskHR",
    tagline: "Human Resource Management",
    description: "Complete HR platform for employee management, payroll, attendance, and performance reviews.",
    features: ["Employee Management", "Payroll & Compensation", "Performance Reviews"],
    color: "oklch(0.52 0.22 258)",
    colorHex: "#4f8ef7",
    href: "/maskhr",
    badge: "Enterprise",
  },
  {
    icon: BarChart3,
    name: "RestoData",
    tagline: "Restaurant Analytics",
    description: "Advanced analytics for restaurant chains. Track sales, inventory, and customer insights in real-time.",
    features: ["Real-time Analytics", "Inventory Management", "Multi-location Support"],
    color: "oklch(0.55 0.18 200)",
    colorHex: "#38bdf8",
    href: "/products",
    badge: "Analytics",
  },
  {
    icon: ShoppingCart,
    name: "FreshBite",
    tagline: "Food Preorder App",
    description: "Customer-facing food preorder and delivery app with real-time tracking, payments, and loyalty rewards.",
    features: ["Pre-order System", "Real-time Tracking", "Loyalty Rewards"],
    color: "oklch(0.55 0.18 160)",
    colorHex: "#34d399",
    href: "/products",
    badge: "Consumer",
  },
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const typed = useTypewriter(["MaskHR", "RestoData", "FreshBite"]);

  /* Auto-rotate product cards */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct(p => (p + 1) % products.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* Parallax logo on scroll */
  useEffect(() => {
    const fn = () => {
      const el = document.getElementById("parallax-logo");
      if (el) el.style.transform = `translateY(${window.scrollY * 0.8}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="flex flex-col">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">

        {/* Background image + overlays */}
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/65 to-background" />
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.52_0.22_258)]/8 to-[oklch(0.55_0.18_200)]/4" />
        </div>

        {/* Robot logo watermark — parallax */}
        <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden pointer-events-none">
          <img
            src="/logo_2.png"
            alt=""
            id="parallax-logo"
            className="w-auto"
            style={{ height: "80%", opacity: 0.35, marginRight: "-5%", willChange: "transform" }}
          />
        </div>

        {/* ─── Main content grid ─── */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — Headline + CTA */}
            <div>
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-5">
                <span className="Maskitech-badge">Integrated Business Solutions</span>
              </motion.div>

              {/* Headline with typewriter */}
              <motion.h1
                custom={1} variants={fadeUp} initial="hidden" animate="visible"
                className="text-5xl sm:text-6xl lg:text-[3.75rem] font-bold text-white leading-[1.07] tracking-tight mb-6"
              >
                One Platform.<br />
                <span className="text-gradient-cobalt">
                  {typed}
                  <span className="animate-pulse text-[oklch(0.62_0.20_258)]">|</span>
                </span>
              </motion.h1>

              <motion.p
                custom={2} variants={fadeUp} initial="hidden" animate="visible"
                className="text-lg text-white/65 leading-relaxed max-w-xl mb-10"
              >
                MaskiTech brings together HR management, restaurant analytics, and food ordering
                into one unified platform. Trusted by 500+ organizations worldwide.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3} variants={fadeUp} initial="hidden" animate="visible"
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                <Link href="/products"
                  className="flex items-center gap-2 px-6 py-3 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-semibold rounded-lg transition-all cobalt-glow text-sm"
                >
                  Explore Products <ArrowRight size={16} />
                </Link>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/8 hover:bg-white/14 border border-white/20 text-white font-medium rounded-lg transition-all text-sm">
                  <Play size={14} className="fill-white" /> Watch Demo
                </button>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                custom={4} variants={fadeUp} initial="hidden" animate="visible"
                className="flex flex-wrap items-center gap-4"
              >
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[oklch(0.75_0.18_80)] text-[oklch(0.75_0.18_80)]" />
                  ))}
                  <span className="text-white/55 text-xs ml-1">4.9/5 on G2</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-white/20" />
                <div className="flex items-center gap-1.5 text-white/55 text-xs">
                  <CheckCircle2 size={13} className="text-[oklch(0.62_0.20_258)]" />
                  Enterprise Security
                </div>
                <div className="hidden sm:block h-4 w-px bg-white/20" />
                <div className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Globe size={13} className="text-[oklch(0.62_0.20_258)]" />
                  Global Coverage
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Product showcase cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Product selector tabs */}
              <div className="flex gap-2 mb-6">
                {products.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => setActiveProduct(i)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={activeProduct === i
                      ? { background: `${p.colorHex}22`, border: `1px solid ${p.colorHex}55`, color: p.colorHex }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }
                    }
                  >
                    <p.icon size={14} />
                    {p.name}
                  </button>
                ))}
              </div>

              {/* Active product card */}
              <AnimatePresence mode="wait">
                {products.map((product, i) => i === activeProduct && (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className="glass-card rounded-2xl p-8"
                    style={{ border: `1px solid ${product.colorHex}30` }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ background: `${product.colorHex}18`, border: `1px solid ${product.colorHex}30` }}
                        >
                          <product.icon size={28} style={{ color: product.colorHex }} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                          <p className="text-sm" style={{ color: product.colorHex }}>{product.tagline}</p>
                        </div>
                      </div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: `${product.colorHex}18`, color: product.colorHex, border: `1px solid ${product.colorHex}40` }}
                      >
                        {product.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${product.colorHex}18`, border: `1px solid ${product.colorHex}40` }}>
                            <CheckCircle2 size={12} style={{ color: product.colorHex }} />
                          </div>
                          <span className="text-white/75 text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href={product.href}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white transition-all"
                      style={{ background: `${product.colorHex}CC`, boxShadow: `0 0 24px ${product.colorHex}30` }}
                    >
                      Explore {product.name} <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex gap-2 mt-5 justify-center">
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProduct(i)}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: activeProduct === i ? "24px" : "6px",
                      background: activeProduct === i ? products[i].colorHex : "rgba(255,255,255,0.2)"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/35 text-xs font-mono tracking-widest"
        >
          SCROLL
        </motion.div>
      </section>

      {/* ══════════════════ METRICS ══════════════════ */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard value={500} suffix="+" label="Organizations" description="Using MaskiTech products globally" />
            <MetricCard value={50} suffix="+" label="Restaurant Chains" description="Powered by RestoData" />
            <MetricCard value={10000} suffix="+" label="Active Users" description="On FreshBite platform" />
            <MetricCard value={99} suffix=".99%" label="Uptime SLA" description="Enterprise-grade reliability" />
          </div>
        </div>
      </section>

      {/* ══════════════════ PRODUCTS (mobile + detail) ══════════════════ */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="Maskitech-badge mb-4 inline-block">Our Product Suite</span>
            <h2 className="text-4xl font-bold text-foreground mb-3 leading-tight">
              Three Powerful Products,<br />
              <span className="text-gradient-cobalt">One Unified Platform</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each product is built on modern cloud infrastructure and designed to work seamlessly together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-6 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${product.colorHex}18`, border: `1px solid ${product.colorHex}30` }}>
                    <product.icon size={24} style={{ color: product.colorHex }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.tagline}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Key Features</p>
                  <div className="space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.colorHex }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <Link href={product.href}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all text-white w-full justify-center"
                  style={{ background: product.colorHex, boxShadow: `0 0 16px ${product.colorHex}40` }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all cobalt-glow-sm"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY MASKITECH ══════════════════ */}
      <section className="py-20 bg-[oklch(0.14_0.01_258)] border-y border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-3 leading-tight">
              Why Choose <span className="text-gradient-cobalt">MaskiTech?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for modern businesses that demand reliability, security, and seamless integration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Fast & Scalable", desc: "Built on Vercel and Supabase for lightning-fast performance at any scale." },
              { icon: Lock, title: "Enterprise Security", desc: "Bank-grade encryption, role-based access, and comprehensive audit logs." },
              { icon: Globe, title: "Global Infrastructure", desc: "Deployed worldwide with 99.99% uptime SLA and multi-region redundancy." },
              { icon: TrendingUp, title: "Real-time Analytics", desc: "Make data-driven decisions with instant insights and predictive analytics." },
              { icon: Users, title: "Unified Ecosystem", desc: "All products work together seamlessly with shared authentication and data." },
              { icon: CheckCircle2, title: "24/7 Support", desc: "Dedicated support team ready to help you succeed every step of the way." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.52_0.22_258)]/15 border border-[oklch(0.52_0.22_258)]/20 flex items-center justify-center">
                  <item.icon size={18} className="text-[oklch(0.62_0.20_258)]" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="Maskitech-badge mb-4 inline-block">Get Started</span>
            <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Start with a free trial of any MaskiTech product. No credit card required.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all cobalt-glow-sm">
                Start Free Trial <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/8 text-foreground font-medium rounded-lg hover:bg-white/8 transition-all">
                Schedule Demo <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
