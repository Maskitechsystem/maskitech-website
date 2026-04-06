/* ============================================================
   Maskitech SYSTEMS — INSIGHTS / BLOG HUB PAGE
   Design: Dark Modernism — multi-author blog with category filters
   ============================================================ */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Clock, User, Tag, ChevronRight,
  BookOpen, TrendingUp, Shield, Cloud, Cpu, Globe
} from "lucide-react";

const BLOG_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499682206/5S2oDo9MrGbF4qkHsfsTza/Maskitech-blog-visual-B25cuMBwvHxPbsi8PeZd7X.webp";

const authors = [
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    avatar: "SC",
    color: "oklch(0.52 0.22 258)",
    bio: "Former MIT researcher with 15 years in enterprise AI and distributed systems.",
    articles: 24,
  },
  {
    id: "marcus-osei",
    name: "Marcus Osei",
    role: "VP of Security Research",
    avatar: "MO",
    color: "oklch(0.55 0.18 200)",
    bio: "Cybersecurity expert and author of 'Zero Trust in Practice'.",
    articles: 18,
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Head of Cloud Architecture",
    avatar: "PS",
    color: "oklch(0.55 0.18 280)",
    bio: "Multi-cloud architect who has led 200+ enterprise cloud migrations.",
    articles: 31,
  },
  {
    id: "james-kowalski",
    name: "James Kowalski",
    role: "Director of Product Strategy",
    avatar: "JK",
    color: "oklch(0.55 0.18 80)",
    bio: "Product strategist focused on enterprise digital transformation and AI adoption.",
    articles: 15,
  },
];

const categories = ["All", "AI & Machine Learning", "Cloud Architecture", "Security", "Digital Transformation", "Data Analytics", "Leadership"];

const articles = [
  {
    id: 1,
    title: "The Future of Enterprise AI: Moving Beyond Proof of Concept",
    excerpt: "Most enterprises have run AI pilots. Few have scaled them. We examine the organizational, technical, and cultural barriers that separate AI experiments from enterprise-wide transformation.",
    category: "AI & Machine Learning",
    author: authors[0],
    readTime: "12 min read",
    date: "Mar 28, 2024",
    featured: true,
    tags: ["AI", "Enterprise", "Strategy"],
    color: "oklch(0.52 0.22 258)",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Zero Trust Architecture: A Practical Implementation Guide for 2024",
    excerpt: "Zero trust is no longer optional for enterprises. This comprehensive guide walks through implementation phases, common pitfalls, and how to build executive buy-in for a zero-trust transformation.",
    category: "Security",
    author: authors[1],
    readTime: "18 min read",
    date: "Mar 22, 2024",
    featured: false,
    tags: ["Security", "Zero Trust", "Architecture"],
    color: "oklch(0.55 0.18 200)",
    icon: Shield,
  },
  {
    id: 3,
    title: "Multi-Cloud Cost Optimization: Saving $10M Without Sacrificing Performance",
    excerpt: "Cloud costs are spiraling for most enterprises. We share the exact framework we use with clients to identify waste, negotiate better contracts, and architect for cost efficiency.",
    category: "Cloud Architecture",
    author: authors[2],
    readTime: "15 min read",
    date: "Mar 18, 2024",
    featured: false,
    tags: ["Cloud", "FinOps", "Cost Optimization"],
    color: "oklch(0.55 0.18 280)",
    icon: Cloud,
  },
  {
    id: 4,
    title: "The Data Mesh Revolution: Decentralizing Enterprise Analytics",
    excerpt: "Centralized data warehouses are becoming bottlenecks. Data mesh architecture offers a compelling alternative — but requires significant organizational change. Here's what actually works.",
    category: "Data Analytics",
    author: authors[0],
    readTime: "10 min read",
    date: "Mar 14, 2024",
    featured: false,
    tags: ["Data Mesh", "Analytics", "Architecture"],
    color: "oklch(0.52 0.22 258)",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: "Building a Culture of Security: Beyond Compliance Checkboxes",
    excerpt: "Technical security controls are necessary but insufficient. The enterprises with the best security postures have built security into their culture. We examine what that actually looks like.",
    category: "Security",
    author: authors[1],
    readTime: "8 min read",
    date: "Mar 10, 2024",
    featured: false,
    tags: ["Security Culture", "Leadership", "Compliance"],
    color: "oklch(0.55 0.18 200)",
    icon: Shield,
  },
  {
    id: 6,
    title: "Platform Engineering: The New Competitive Advantage",
    excerpt: "Leading technology organizations are investing heavily in internal developer platforms. We explore why platform engineering has become a strategic priority and how to build the business case.",
    category: "Digital Transformation",
    author: authors[3],
    readTime: "11 min read",
    date: "Mar 6, 2024",
    featured: false,
    tags: ["Platform Engineering", "DevOps", "Strategy"],
    color: "oklch(0.55 0.18 80)",
    icon: Globe,
  },
  {
    id: 7,
    title: "Kubernetes at Scale: Lessons from 500+ Enterprise Deployments",
    excerpt: "After helping 500+ enterprises deploy Kubernetes in production, we've seen every failure mode. This guide distills the most critical lessons for running Kubernetes at enterprise scale.",
    category: "Cloud Architecture",
    author: authors[2],
    readTime: "20 min read",
    date: "Mar 1, 2024",
    featured: false,
    tags: ["Kubernetes", "Cloud Native", "Operations"],
    color: "oklch(0.55 0.18 280)",
    icon: Cloud,
  },
  {
    id: 8,
    title: "Generative AI in the Enterprise: Governance Frameworks That Work",
    excerpt: "Enterprises are rushing to adopt generative AI, but few have adequate governance frameworks. We present a practical governance model that enables innovation while managing risk.",
    category: "AI & Machine Learning",
    author: authors[3],
    readTime: "14 min read",
    date: "Feb 26, 2024",
    featured: false,
    tags: ["GenAI", "Governance", "Risk Management"],
    color: "oklch(0.52 0.22 258)",
    icon: Cpu,
  },
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAuthor, setActiveAuthor] = useState<string | null>(null);

  const filtered = articles.filter(a => {
    const catMatch = activeCategory === "All" || a.category === activeCategory;
    const authorMatch = !activeAuthor || a.author.id === activeAuthor;
    return catMatch && authorMatch;
  });

  const featured = articles.find(a => a.featured);

  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <section className="pt-16 pb-12 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.52_0.22_258)]/5 to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="Maskitech-badge mb-4 inline-block">Insights & Thought Leadership</span>
            <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
              Enterprise Intelligence.
              <br />
              <span className="text-gradient-cobalt">Expert Perspectives.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Deep analysis, practical guides, and strategic insights from Maskitech's technology leaders and industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      {featured && (
        <section className="py-14">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
              {/* Featured visual */}
              <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[320px]">
                <img src={BLOG_BG} alt="Featured article" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="Maskitech-badge mb-3 inline-block">{featured.category}</span>
                  <h2 className="text-2xl font-bold text-white leading-tight mb-2">{featured.title}</h2>
                  <div className="flex items-center gap-4 text-white/60 text-xs">
                    <span className="flex items-center gap-1.5"><Clock size={11} />{featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                </div>
              </div>

              {/* Featured content */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-mono text-[oklch(0.62_0.20_258)] uppercase tracking-widest">Featured Article</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight mb-3">{featured.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{featured.excerpt}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map(tag => (
                      <span key={tag} className="Maskitech-badge text-[10px]">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: featured.author.color }}
                    >
                      {featured.author.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{featured.author.name}</p>
                      <p className="text-xs text-muted-foreground">{featured.author.role}</p>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm cobalt-glow-sm w-fit">
                    Read Article <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── AUTHOR SPOTLIGHT ── */}
      <section className="py-10 border-y border-border bg-[oklch(0.14_0.01_258)]">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Our Authors</h3>
            {activeAuthor && (
              <button
                onClick={() => setActiveAuthor(null)}
                className="text-xs text-[oklch(0.62_0.20_258)] hover:text-[oklch(0.72_0.18_258)] transition-colors"
              >
                Clear filter ×
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {authors.map((author) => (
              <button
                key={author.id}
                onClick={() => setActiveAuthor(activeAuthor === author.id ? null : author.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                  activeAuthor === author.id
                    ? "border-[oklch(0.52_0.22_258)]/40 bg-[oklch(0.52_0.22_258)]/10"
                    : "border-white/8 bg-white/3 hover:bg-white/6"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: author.color }}
                >
                  {author.avatar}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">{author.name}</p>
                  <p className="text-xs text-muted-foreground">{author.articles} articles</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="py-6 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[oklch(0.52_0.22_258)] text-white cobalt-glow-sm"
                    : "bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground hover:bg-white/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-16">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen size={40} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No articles found for the selected filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="glass-card glass-card-hover rounded-xl overflow-hidden flex flex-col group cursor-pointer"
                >
                  {/* Category bar */}
                  <div className="h-1 w-full" style={{ background: article.color }} />

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center"
                          style={{ background: `${article.color}20` }}
                        >
                          <article.icon size={13} style={{ color: article.color }} />
                        </div>
                        <span className="text-xs text-muted-foreground">{article.category}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">{article.readTime}</span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground leading-snug mb-2 group-hover:text-[oklch(0.72_0.18_258)] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-white/5 border border-white/8 px-2 py-0.5 rounded text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/6">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                          style={{ background: article.author.color }}
                        >
                          {article.author.avatar}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground">{article.author.name}</p>
                          <p className="text-[10px] text-muted-foreground">{article.date}</p>
                        </div>
                      </div>
                      <ChevronRight size={15} className="text-muted-foreground group-hover:text-[oklch(0.62_0.20_258)] transition-colors" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Load more */}
          <div className="text-center mt-12">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/8 text-foreground font-medium rounded-lg hover:bg-white/8 transition-all text-sm mx-auto">
              Load More Articles <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-16 bg-[oklch(0.14_0.01_258)] border-t border-border">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <span className="Maskitech-badge mb-4 inline-block">Newsletter</span>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Stay Ahead of the Curve
            </h2>
            <p className="text-muted-foreground mb-8">
              Weekly insights on enterprise technology, delivered to your inbox. Join 45,000+ technology leaders.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-[oklch(0.52_0.22_258)]/50 transition-colors"
              />
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm cobalt-glow-sm flex-shrink-0">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
