/* ============================================================
   MASKITECH — LAYOUT COMPONENT
   Design: Dark Modernism with Blue/Orange branding — sticky glass nav + footer
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, X, Menu, ChevronRight, Zap,
  BarChart3, BookOpen, TrendingUp, Home
} from "lucide-react";

const navItems = [
  { label: "Products", href: "/products", icon: BarChart3 },
  { label: "Case Studies", href: "/case-studies", icon: TrendingUp },
  { label: "Insights", href: "/insights", icon: BookOpen },
  { label: "Investor & Press", href: "/investor-press", icon: Zap },
];

const searchData = [
  { title: "MaskHR — Human Resource Management", type: "Product", href: "/products" },
  { title: "RestoData — Restaurant Analytics Dashboard", type: "Product", href: "/products" },
  { title: "FreshBite — Preorder Food Application", type: "Product", href: "/products" },
  { title: "Restaurant Chain Growth Case Study", type: "Case Study", href: "/case-studies" },
  { title: "HR Transformation Success Story", type: "Case Study", href: "/case-studies" },
  { title: "Future of HR Technology", type: "Insight", href: "/insights" },
  { title: "Restaurant Analytics Best Practices", type: "Insight", href: "/insights" },
  { title: "Q4 2024 Business Report", type: "Press", href: "/investor-press" },
  { title: "Series Funding Announcement", type: "Press", href: "/investor-press" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const filteredResults = searchQuery.length > 1
    ? searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container">
<div className="flex items-center justify-between h-20">
  {/* Logo */}
  <Link href="/" className="flex items-center gap-3 group">
    <img
      src="/logo_2.png"
      alt="Maskitech"
      className="h-20 w-auto"
      style={{marginTop:'-1px', marginBottom:'-1px'}}
    />
    <div className="flex flex-col leading-none gap-1">
      <span style={{
        color:'#ffffff',
        fontSize:'34px',
        fontWeight:900,
        letterSpacing:'0.05em',
        lineHeight:1,
        fontFamily:'Space Grotesk, sans-serif'
      }}>
        Maski<span style={{color:'#f97316'}}>tech</span>
      </span>
      <span style={{
        color:'#60a5fa',
        fontSize:'13px',
        fontWeight:700,
        letterSpacing:'0.4em',
        textTransform:'uppercase'
      }}>
        Solutions
      </span>
    </div>
  </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link px-3 py-2 rounded-md transition-all hover:bg-white/5 ${
                    location === item.href ? "text-foreground bg-white/5" : ""
                  }`}
                >
                  {item.label}
                  {location === item.href && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[oklch(0.52_0.22_258)] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground hover:bg-white/8 transition-all text-sm"
              >
                <Search size={14} />
                <span className="hidden sm:inline text-xs">Search</span>
                <kbd className="hidden sm:inline text-xs bg-white/10 px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
              </button>

              {/* CTA */}
              <Link
                href="/products"
                className="hidden md:flex items-center gap-1.5 px-4 py-1.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white text-sm font-medium rounded-md transition-all cobalt-glow-sm"
              >
                Get Started
                <ChevronRight size={14} />
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-white/5 transition-colors"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
            >
              <div className="container py-4 flex flex-col gap-1">
                <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 text-sm font-medium">
                  <Home size={16} className="text-muted-foreground" />
                  Home
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 text-sm font-medium transition-colors ${
                      location === item.href ? "bg-white/5 text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <item.icon size={16} className="text-[oklch(0.52_0.22_258)]" />
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 pt-2 border-t border-border">
                  <Link
                    href="/products"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[oklch(0.52_0.22_258)] text-white text-sm font-medium rounded-md"
                  >
                    Get Started <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-xl mx-4"
            >
              <div className="glass-card rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/8">
                  <Search size={16} className="text-muted-foreground flex-shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search products, insights, press..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-1 rounded hover:bg-white/10 transition-colors"
                  >
                    <X size={14} className="text-muted-foreground" />
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-80 overflow-y-auto">
                  {searchQuery.length <= 1 && (
                    <div className="px-4 py-8 text-center">
                      <p className="text-muted-foreground text-sm">Start typing to search across all Maskitech content</p>
                      <div className="flex items-center justify-center gap-4 mt-4">
                        {["Products", "Case Studies", "Insights", "Press"].map((cat) => (
                          <span key={cat} className="Maskitech-badge">{cat}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchQuery.length > 1 && filteredResults.length === 0 && (
                    <div className="px-4 py-8 text-center">
                      <p className="text-muted-foreground text-sm">No results for "{searchQuery}"</p>
                    </div>
                  )}

                  {filteredResults.map((result, i) => (
                    <Link
                      key={i}
                      href={result.href}
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                    >
                      <div className="w-8 h-8 rounded-md bg-[oklch(0.52_0.22_258)]/15 flex items-center justify-center flex-shrink-0">
                        <Search size={12} className="text-[oklch(0.62_0.20_258)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">{result.title}</p>
                        <p className="text-xs text-muted-foreground">{result.type}</p>
                      </div>
                      <ChevronRight size={14} className="text-muted-foreground flex-shrink-0" />
                    </Link>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-4 py-2.5 border-t border-white/8 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Press <kbd className="bg-white/10 px-1 py-0.5 rounded font-mono">Esc</kbd> to close</p>
                  <p className="text-xs text-muted-foreground">{filteredResults.length} results</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-sm bg-[oklch(0.52_0.22_258)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-mono">NT</span>
                </div>
                <span className="font-semibold text-foreground text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Maskitech <span className="text-[oklch(0.62_0.20_258)]">Systems</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Enterprise technology solutions trusted by Fortune 500 companies worldwide. Building the infrastructure of tomorrow.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                  <button
                    key={social}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground hover:bg-white/8 text-xs transition-all"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: "Platform", links: ["Apex Suite", "Shield Security", "DataFlow", "CloudBridge", "Pricing"] },
              { title: "Company", links: ["About", "Careers", "Partners", "Contact", "Blog"] },
              { title: "Resources", links: ["Documentation", "API Reference", "Case Studies", "Whitepapers", "Status"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4 font-mono">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="section-divider mt-12 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 Maskitech Systems, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
