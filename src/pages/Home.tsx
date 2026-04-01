/* ============================================================
   MASKITECH — HOME PAGE
   Design: Dark Modernism — hero with gradient orbs, metrics, product teaser
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ChevronRight, ArrowRight, Users, BarChart3, ShoppingCart,
  Globe, Lock, Zap, TrendingUp, CheckCircle2, Star
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499682206/5S2oDo9MrGbF4qkHsfsTza/novatech-hero-bg-PmR75BL2kd7qegqUDASAdk.webp";

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function MetricCard({ value, suffix, label, description }: {
  value: number; suffix: string; label: string; description: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1800, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
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
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const products = [
  {
    icon: Users,
    name: "MaskHR",
    tagline: "Human Resource Management",
    description: "Complete HR platform for employee management, payroll, attendance, and performance reviews. Streamline your entire HR operations.",
    features: ["Employee Management", "Payroll & Compensation", "Performance Reviews"],
    color: "oklch(0.52 0.22 258)",
    href: "/products",
  },
  {
    icon: BarChart3,
    name: "RestoData",
    tagline: "Restaurant Analytics",
    description: "Advanced analytics dashboard for restaurant chains. Track sales, inventory, staff performance, and customer insights in real-time.",
    features: ["Real-time Analytics", "Inventory Management", "Multi-location Support"],
    color: "oklch(0.55 0.18 200)",
    href: "/products",
  },
  {
    icon: ShoppingCart,
    name: "FreshBite",
    tagline: "Food Preorder App",
    description: "Customer-facing food preorder and delivery application with real-time tracking, payments, and loyalty rewards.",
    features: ["Pre-order System", "Real-time Tracking", "Loyalty Rewards"],
    color: "oklch(0.55 0.18 160)",
    href: "/products",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.52_0.22_258)]/8 to-[oklch(0.55_0.18_200)]/4" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-5"
            >
              <span className="novatech-badge">Integrated Business Solutions</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              The Platform for
              <br />
              <span className="text-gradient-cobalt">Modern Business</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-white/70 leading-relaxed max-w-xl mb-10"
            >
              MaskiTech brings together HR management, restaurant analytics, and food ordering into one unified platform. Trusted by 500+ organizations worldwide.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/products"
                className="flex items-center gap-2 px-6 py-3 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-semibold rounded-lg transition-all cobalt-glow text-sm"
              >
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium rounded-lg transition-all text-sm"
              >
                View Case Studies <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mt-12"
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[oklch(0.75_0.18_80)] text-[oklch(0.75_0.18_80)]" />
                ))}
                <span className="text-white/60 text-xs ml-1">4.9/5 on G2</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-white/60 text-xs">
                <CheckCircle2 size={13} className="text-[oklch(0.62_0.20_258)]" />
                Enterprise Grade Security
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-white/60 text-xs">
                <Globe size={13} className="text-[oklch(0.62_0.20_258)]" />
                Global Coverage
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono"
        >
          SCROLL
        </motion.div>
      </section>

      {/* ── METRICS ── */}
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

      {/* ── PRODUCTS TEASER ── */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="novatech-badge mb-4 inline-block">Our Product Suite</span>
            <h2 className="text-4xl font-bold text-foreground mb-3 leading-tight">
              Three Powerful Products,
              <br />
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
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${product.color}20`, border: `1px solid ${product.color}30` }}
                  >
                    <product.icon size={24} style={{ color: product.color }} />
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
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.color }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={product.href}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all text-white w-full justify-center"
                  style={{
                    background: product.color,
                    boxShadow: `0 0 16px ${product.color}40`
                  }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all cobalt-glow-sm"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY MASKITECH ── */}
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

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="novatech-badge mb-4 inline-block">Get Started</span>
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
