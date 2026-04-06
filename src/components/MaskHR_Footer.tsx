/* MaskHR Footer - Deep Navy Command Center Design */
import { Link } from "wouter";
import { toast } from "sonner";

const footerLinks = {
  Platform: [
    { label: "Core HR", href: "/modules" },
    { label: "Talent Management", href: "/modules" },
    { label: "Payroll", href: "/modules" },
    { label: "Accounting", href: "/modules" },
    { label: "ERP", href: "/modules" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080F1E] border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center">
                <span className="text-[#0B1F3A] font-black text-lg" style={{ fontFamily: "Sora, sans-serif" }}>M</span>
              </div>
              <span className="text-white font-bold text-xl" style={{ fontFamily: "Sora, sans-serif" }}>
                Mask<span className="text-amber-400">HR</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              The unified enterprise platform combining HR, Accounting, and ERP into a single, seamless command center for modern organizations.
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Twitter", "GitHub"].map((s) => (
                <button
                  key={s}
                  onClick={() => toast.info(`${s} coming soon!`)}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-amber-400 hover:border-amber-400/40 transition-colors text-xs font-bold"
                >
                  {s[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "Sora, sans-serif" }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-white/50 hover:text-amber-400 text-sm transition-colors cursor-pointer" style={{ fontFamily: "Inter, sans-serif" }}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2026 MaskHR. All rights reserved.
          </p>
          <p className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Built for the modern enterprise.
          </p>
        </div>
      </div>
    </footer>
  );
}
