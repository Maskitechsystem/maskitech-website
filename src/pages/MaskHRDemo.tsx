/* ============================================================
   MASKITECH — MASKHR PRODUCT DETAIL PAGE
   Design: Dark Modernism — embedded HRMS demo showcase
   ============================================================ */

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, ArrowLeft, ExternalLink, Download, Maximize2 } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function MaskHRDemo() {
  const [fullscreen, setFullscreen] = useState(false);

  const handleDownloadDemo = () => {
    toast.success("Demo download started", {
      description: "HRMS-demo.html · 2.4 MB",
    });
  };

  return (
    <div className="flex flex-col">
      {/* ── HEADER ── */}
      <section className="py-12 border-b border-border bg-[oklch(0.14_0.01_258)]">
        <div className="container">
          <Link href="/products" className="flex items-center gap-2 text-[oklch(0.62_0.20_258)] hover:text-[oklch(0.72_0.18_258)] transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.52_0.22_258)]/15 border border-[oklch(0.52_0.22_258)]/20 flex items-center justify-center">
                  <Users size={24} className="text-[oklch(0.52_0.22_258)]" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">MaskHR</h1>
                  <p className="text-muted-foreground">Human Resource Management System</p>
                </div>
              </div>
              <p className="text-foreground/70 max-w-2xl">
                Comprehensive HR platform for employee management, payroll, attendance, leave management, and performance reviews. Try the interactive demo below.
              </p>
            </div>
            <button
              onClick={handleDownloadDemo}
              className="flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm cobalt-glow-sm flex-shrink-0"
            >
              <Download size={14} /> Download Demo
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { title: "Employee Management", desc: "Complete employee profiles and directory" },
              { title: "Payroll System", desc: "Automated salary processing and slips" },
              { title: "Attendance Tracking", desc: "Real-time attendance and time logs" },
              { title: "Leave Management", desc: "Leave requests and approval workflow" },
              { title: "Performance Reviews", desc: "360-degree feedback and evaluations" },
              { title: "Recruitment", desc: "Job postings and candidate management" },
              { title: "Analytics & Reports", desc: "Comprehensive HR analytics dashboard" },
              { title: "Multi-department", desc: "Support for multiple departments" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-lg p-4"
              >
                <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO VIEWER ── */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">Interactive Demo</h2>
              <p className="text-muted-foreground text-sm">Explore the full MaskHR interface with sample data</p>
            </div>
            <button
              onClick={() => setFullscreen(!fullscreen)}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/8 text-foreground hover:bg-white/8 rounded-lg transition-all text-sm font-medium"
            >
              <Maximize2 size={14} /> {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
          </div>

          {/* Demo iframe container */}
          <div className={`rounded-2xl border border-white/8 overflow-hidden ${fullscreen ? "fixed inset-0 z-50 rounded-none border-0" : "h-[600px] md:h-[800px]"}`}>
            <iframe
              src="data:text/html;base64,PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wIi8+PHRpdGxlPk1hc2tIUiBEZW1vPC90aXRsZT48c3R5bGU+Ym9keSB7IGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7IGJhY2tncm91bmQ6ICMwZDBmMTQ7IGNvbG9yOiAjZThlYWYwOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH0gLmNvbnRhaW5lciB7IGRpc3BsYXk6IGZsZXg7IGhlaWdodDogMTAwdmg7IH0gLnNpZGViYXIgeyB3aWR0aDogMjQwcHg7IGJhY2tncm91bmQ6ICMxNDE3MjA7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7IHBhZGRpbmc6IDIwcHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH0gLnNpZGViYXItdGl0bGUgeyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IG1hcmdpbi1ib3R0b206IDMwcHg7IH0gLm5hdi1pdGVtIHsgcGFkZGluZzogMTBweCAxMnB4OyBtYXJnaW4tYm90dG9tOiA4cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDEzcHg7IHRyYW5zaXRpb246IGFsbCAwLjJzOyB9IC5uYXYtaXRlbTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoNzksIDE0MiwgMjQ3LCAwLjEyKTsgY29sb3I6ICM0Zjhlzjc7IH0gLm1haW4geyBmbGV4OiAxOyBvdmVyZmxvdy15OiBhdXRvOyBwYWRkaW5nOiAzMHB4OyB9IC5zdGF0LWdyaWQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOyBnYXA6IDE2cHg7IG1hcmdpbi1ib3R0b206IDMwcHg7IH0gLnN0YXQtY2FyZCB7IGJhY2tncm91bmQ6ICMxNDExNzIwOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyBib3JkZXItcmFkaXVzOiAxNHB4OyBwYWRkaW5nOiAyMHB4OyB9IC5zdGF0LXZhbHVlIHsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzRmOGVmNzsgbWFyZ2luLWJvdHRvbTogOHB4OyB9IC5zdGF0LWxhYmVsIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzdhN2Y5OTsgfSAudGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgbWFyZ2luLWJvdHRvbTogMzBweDsgfSB0aCAoIHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEycHggMDsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzdhN2Y5OTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7IH0gdGQgeyBwYWRkaW5nOiAxMnB4IDA7IGZvbnQtc2l6ZTogMTNweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7IH0gLnBpbGwgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgcGFkZGluZzogNHB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDYwMDsgYmFja2dyb3VuZDogcmdiYSg3OSwgMjQ3LCAxNzYsIDAuMTIpOyBjb2xvcjogIzRmZjdiMDsgfTwvc3R5bGU+PC9oZWFkPjxib2R5PjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+PGRpdiBjbGFzcz0ic2lkZWJhciI+PGRpdiBjbGFzcz0ic2lkZWJhci10aXRsZSI+TmV4YUhSPC9kaXY+PGRpdiBjbGFzcz0ibmF2LWl0ZW0iPkRhc2hib2FyZDwvZGl2PjxkaXYgY2xhc3M9Im5hdi1pdGVtIj5FbXBsb3llZXM8L2Rpdj48ZGl2IGNsYXNzPSJuYXYtaXRlbSI+UGF5cm9sbDwvZGl2PjxkaXYgY2xhc3M9Im5hdi1pdGVtIj5MZWF2ZSBNYW5hZ2VtZW50PC9kaXY+PGRpdiBjbGFzcz0ibmF2LWl0ZW0iPkF0dGVuZGFuY2U8L2Rpdj48ZGl2IGNsYXNzPSJuYXYtaXRlbSI+UGVyZm9ybWFuY2U8L2Rpdj48ZGl2IGNsYXNzPSJuYXYtaXRlbSI+UmVwb3J0czwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9Im1haW4iPjxoMiBzdHlsZT0ibWFyZ2luOiAwIDAgMjBweCAwOyI+RGFzaGJvYXJkPC9oMj48ZGl2IGNsYXNzPSJzdGF0LWdyaWQiPjxkaXYgY2xhc3M9InN0YXQtY2FyZCI+PGRpdiBjbGFzcz0ic3RhdC12YWx1ZSI+MjQ1PC9kaXY+PGRpdiBjbGFzcz0ic3RhdC1sYWJlbCI+VG90YWwgRW1wbG95ZWVzPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ic3RhdC1jYXJkIj48ZGl2IGNsYXNzPSJzdGF0LXZhbHVlIj4xMjwvZGl2PjxkaXYgY2xhc3M9InN0YXQtbGFiZWwiPkRlcGFydG1lbnRzPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ic3RhdC1jYXJkIj48ZGl2IGNsYXNzPSJzdGF0LXZhbHVlIj4kMi41TTwvZGl2PjxkaXYgY2xhc3M9InN0YXQtbGFiZWwiPlRvdGFsIFBheXJvbGw8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJzdGF0LWNhcmQiPjxkaXYgY2xhc3M9InN0YXQtdmFsdWUiPjk4JTwvZGl2PjxkaXYgY2xhc3M9InN0YXQtbGFiZWwiPkF0dGVuZGFuY2UgUmF0ZTwvZGl2PjwvZGl2PjwvZGl2PjxoMyBzdHlsZT0ibWFyZ2luOiAzMHB4IDAgMTVweCAwOyI+UmVjZW50IEVtcGxveWVlczwvaDM+PHRhYmxlIGNsYXNzPSJ0YWJsZSI+PHRoZWFkPjx0cj48dGg+TmFtZTwvdGg+PHRoPkRlcGFydG1lbnQ8L3RoPjx0aD5Qb3NpdGlvbjwvdGg+PHRoPkpvaW4gRGF0ZTwvdGg+PHRoPkRlcGFydG1lbnQ8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+PHRyPjx0ZD5KYW1lcyBDb25ub3I8L3RkPjx0ZD5FbmdpbmVlcmluZzwvdGQ+PHRkPlNlbmlvciBEZXZlbG9wZXI8L3RkPjx0ZD4yMDIzLTAxLTE1PC90ZD48dGQ+PHNwYW4gY2xhc3M9InBpbGwiPkFjdGl2ZTwvc3Bhbj48L3RkPjwvdHI+PHRyPjx0ZD5TYXJhaCBBbmRlcnNvbjwvdGQ+PHRkPkh1bWFuIFJlc291cmNlczwvdGQ+PHRkPkhSIE1hbmFnZXI8L3RkPjx0ZD4yMDIyLTA2LTAzPC90ZD48dGQ+PHNwYW4gY2xhc3M9InBpbGwiPkFjdGl2ZTwvc3Bhbj48L3RkPjwvdHI+PHRyPjx0ZD5NaWNoYWVsIEJyb3duPC90ZD48dGQ+U2FsZXM8L3RkPjx0ZD5TYWxlcyBFeGVjdXRpdmU8L3RkPjx0ZD4yMDIzLTAzLTIyPC90ZD48dGQ+PHNwYW4gY2xhc3M9InBpbGwiPkFjdGl2ZTwvc3Bhbj48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjwvZGl2PjwvZGl2PjwvYm9keT48L2h0bWw+"
              title="MaskHR Demo"
              className="w-full h-full border-0"
              style={{ background: "#0d0f14" }}
            />
          </div>

          {fullscreen && (
            <button
              onClick={() => setFullscreen(false)}
              className="fixed top-4 right-4 z-50 px-4 py-2 bg-[oklch(0.52_0.22_258)] text-white rounded-lg font-medium text-sm"
            >
              Exit Fullscreen
            </button>
          )}
        </div>
      </section>

      {/* ── INFO ── */}
      <section className="py-16 bg-[oklch(0.14_0.01_258)] border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Key Capabilities</h3>
              <ul className="space-y-3">
                {[
                  "Complete employee lifecycle management",
                  "Automated payroll processing",
                  "Real-time attendance tracking",
                  "Leave request workflows",
                  "Performance evaluation system",
                  "Multi-level approval processes",
                  "Comprehensive reporting",
                  "Role-based access control",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-[oklch(0.52_0.22_258)] font-bold mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Getting Started</h3>
              <div className="space-y-4">
                <div className="glass-card rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Ready to implement MaskHR?</p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[oklch(0.52_0.22_258)] hover:bg-[oklch(0.58_0.22_258)] text-white font-medium rounded-lg transition-all text-sm w-full justify-center">
                    Schedule Implementation <ExternalLink size={14} />
                  </button>
                </div>
                <div className="glass-card rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Need more information?</p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/8 text-foreground hover:bg-white/8 font-medium rounded-lg transition-all text-sm w-full justify-center">
                    Contact Sales <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
