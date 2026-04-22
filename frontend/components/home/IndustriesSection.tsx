"use client";

const industries = [
  "Retail & FMCG", "Pharmaceuticals", "Automotive", "E-commerce", "Cold Chain", "3PL & Freight",
  "Manufacturing", "Energy & Oil", "Agriculture", "Textiles",
];

export default function IndustriesSection() {
  return (
    <section className="py-16 border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] text-center">
          Trusted across industries
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...industries, ...industries].map((ind, i) => (
            <div
              key={`${ind}-${i}`}
              className="flex-shrink-0 px-6 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-medium text-[var(--text-secondary)]"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
