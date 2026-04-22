"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle route SVG background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path d="M0 400 Q200 200 400 350 T800 250 T1200 300" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6" className="route-dash" />
          <path d="M0 300 Q300 100 600 280 T1200 200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" className="route-dash" style={{ animationDelay: "0.5s" }} />
          <path d="M0 500 Q400 300 700 400 T1200 350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="route-dash" style={{ animationDelay: "1s" }} />
          {/* Nodes */}
          <circle cx="200" cy="320" r="4" fill="currentColor" opacity="0.3" />
          <circle cx="500" cy="280" r="4" fill="currentColor" opacity="0.3" />
          <circle cx="800" cy="250" r="4" fill="currentColor" opacity="0.3" />
          <circle cx="1050" cy="290" r="4" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--text-secondary)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
              Live platform — tracking shipments now
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in animate-fade-in-delay-1">
            Logistics Intelligence,{" "}
            <span className="text-[var(--accent)]">Redefined.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl mb-8 leading-relaxed animate-fade-in animate-fade-in-delay-2">
            Real-time GPS tracking, AI-powered disruption detection, and proactive rerouting — all in a single control tower built for modern supply chains.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in animate-fade-in-delay-3">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm transition-colors"
            >
              Get Started
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--surface)] text-[var(--text)] font-semibold text-sm transition-colors"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
