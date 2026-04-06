/* MaskHR Contact Page - Deep Navy Command Center Design */
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Calendar, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import MaskHR_Navbar from "@/components/MaskHR_Navbar";
import MaskHR_Footer from "@/components/MaskHR_Footer";

const contactOptions = [
  { icon: Calendar, title: "Request a Demo", desc: "See MaskHR in action with a personalized walkthrough from our team.", action: "Schedule Demo" },
  { icon: MessageSquare, title: "Sales Inquiry", desc: "Talk to our sales team about pricing, enterprise contracts, and custom deployments.", action: "Contact Sales" },
  { icon: Headphones, title: "Customer Support", desc: "Existing customers can reach our 24/7 support team for technical assistance.", action: "Get Support" },
];

const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/30 focus:border-amber-500/50 focus:outline-none text-sm";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! Our team will be in touch within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white">
      <MaskHR_Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-[#080F1E] to-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Get In Touch</span>
          <h1 className="text-5xl font-bold text-white mb-4">Let's Talk About Your Enterprise</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you're evaluating MaskHR, need a demo, or have a specific question — our team is ready to help.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#0B1F3A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <div key={opt.title}
                  className="bg-[#0F2847] border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300 cursor-pointer group"
                  onClick={() => toast.info(`${opt.action} coming soon!`)}>
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <Icon size={22} className="text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{opt.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{opt.desc}</p>
                  <span className="text-amber-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    {opt.action} <ArrowRight size={14} />
                  </span>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#0F2847] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
                    <Mail size={28} className="text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm">Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Full Name *</label>
                      <input className={inputClass} placeholder="John Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Work Email *</label>
                      <input type="email" className={inputClass} placeholder="john@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Company</label>
                    <input className={inputClass} placeholder="Acme Corporation" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-1.5 block">Message *</label>
                    <textarea
                      className={inputClass + " resize-none"}
                      placeholder="Tell us about your organization..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-[#0B1F3A] font-bold py-5">
                    Send Message <ArrowRight size={16} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "hello@maskhr.com" },
                    { icon: Phone, label: "Phone", value: "+965 0000 0000" },
                    { icon: MapPin, label: "Headquarters", value: "Kuwait City, Kuwait" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} className="text-amber-400" />
                        </div>
                        <div>
                          <div className="text-white/40 text-xs uppercase tracking-wide">{item.label}</div>
                          <div className="text-white font-medium text-sm">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#0F2847] border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-white font-bold text-base mb-2">Enterprise Sales</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  For organizations with 500+ employees, our enterprise team provides dedicated onboarding and tailored implementation support.
                </p>
                <Button variant="outline" className="border-amber-500/40 text-amber-400 hover:bg-amber-500/10 text-sm"
                  onClick={() => toast.info("Enterprise sales contact coming soon!")}>
                  Talk to Enterprise Sales
                </Button>
              </div>

              <div className="bg-[#0F2847] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-bold text-base mb-2">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Sunday – Thursday</span>
                    <span className="text-white">9:00 AM – 5:00 PM AST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Weekend Support</span>
                    <span className="text-amber-400">24/7 for Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MaskHR_Footer />
    </div>
  );
}