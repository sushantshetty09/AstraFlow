import Link from "next/link";

const testimonials = [
  { quote: "Astra Flow cut our delayed shipments by 40% in the first month.", author: "Logistics Manager", company: "Global Retail Co." },
  { quote: "The real-time visibility is unlike anything we've used before.", author: "VP Supply Chain", company: "Pharma Corp." },
  { quote: "Finally, a control tower that doesn't require a PhD to operate.", author: "Operations Director", company: "FastShip 3PL" },
];

export default function CTABanner() {
  return (
    <>
      {/* Testimonials */}
      <section className="py-20 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] text-center mb-12">
            What teams are saying
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="reveal rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-[var(--text)]">{t.author}</div>
                  <div className="text-xs text-[var(--text-muted)]">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Ready to transform your supply chain?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Start with the free tier. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-8 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--surface)] text-[var(--text)] font-semibold text-sm transition-colors"
            >
              View Live Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
