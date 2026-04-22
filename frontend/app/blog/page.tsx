import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = { title: "Blog \u2014 Astra Flow", description: "Insights on logistics technology, supply chain optimization, and real-time tracking." };

const posts = [
  { slug: "real-time-gps-tracking-architecture", title: "Building Real-Time GPS Tracking for Logistics at Scale", excerpt: "How we designed a sub-second location pipeline using browser Geolocation API, Socket.IO, and Supabase real-time \u2014 handling 10,000+ concurrent drivers.", tag: "Engineering", readTime: "8 min read", date: "Mar 2026" },
  { slug: "control-tower-socketio-supabase", title: "Building a Real-Time Control Tower with Socket.IO and Supabase", excerpt: "How we built sub-second logistics updates using WebSockets, Supabase real-time, and a FastAPI backend for unified fleet visibility.", tag: "Architecture", readTime: "12 min read", date: "Feb 2026" },
  { slug: "ai-delay-prediction-logistics", title: "AI-Powered Delay Prediction in Last-Mile Delivery", excerpt: "Using rule engines and pattern analysis to predict delivery delays before they happen \u2014 reducing customer complaints by 40%.", tag: "AI / ML", readTime: "10 min read", date: "Jan 2026" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Blog</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Technical deep-dives and insights from the Astra Flow engineering team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover-lift group">
                <div className="h-40 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--surface-elevated)] flex items-center justify-center">
                  <FileText className="w-10 h-10 text-[var(--text-muted)] opacity-30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">{post.tag}</span>
                    <span className="text-xs text-[var(--text-muted)]">{post.readTime}</span>
                  </div>
                  <h2 className="text-base font-bold text-[var(--text)] mb-2 leading-tight group-hover:text-[var(--accent)] transition-colors">{post.title}</h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="text-xs text-[var(--text-muted)]">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
