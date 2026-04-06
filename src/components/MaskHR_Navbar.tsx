/* MaskHR Navbar - Deep Navy Command Center Design
 * Frosted glass effect on scroll, amber CTA button
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Modules", href: "/modules" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1F3A]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/40 transition-shadow">
                <span className="text-[#0B1F3A] font-black text-lg" style={{ fontFamily: "Sora, sans-serif" }}>M</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                Mask<span className="text-amber-400">HR</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-amber-400"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10 text-sm"
              onClick={() => toast.info("Login feature coming soon!")}
            >
              Sign In
            </Button>
            <Button
              className="bg-amber-500 hover:bg-amber-400 text-[#0B1F3A] font-semibold text-sm px-5 shadow-lg hover:shadow-amber-500/30 transition-all"
              onClick={() => toast.info("Demo booking coming soon!")}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0B1F3A]/98 border-t border-white/10 py-4 px-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`block px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                    location === link.href
                      ? "text-amber-400 bg-amber-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="mt-4 px-4 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
                onClick={() => { toast.info("Login feature coming soon!"); setMobileOpen(false); }}
              >
                Sign In
              </Button>
              <Button
                className="w-full bg-amber-500 hover:bg-amber-400 text-[#0B1F3A] font-semibold"
                onClick={() => { toast.info("Demo booking coming soon!"); setMobileOpen(false); }}
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
