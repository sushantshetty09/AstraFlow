import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = { title: "About \u2014 Astra Flow", description: "Learn about Astra Flow's mission, team, and technology stack." };

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Supabase", "PostgreSQL", "Socket.IO", "Leaflet", "OSRM", "Open-Meteo"];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">About Astra Flow</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Astra Flow is an AI-powered logistics intelligence platform that gives supply chain teams
              real-time visibility, predictive analytics, and automated disruption response.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">Our Mission</h2>
            <p className="text-xl font-semibold text-[var(--text)] leading-relaxed">
              To make global supply chains resilient, transparent, and intelligent &#8212;
              so that teams can move from reactive firefighting to proactive optimization.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { name: "Sushant Shetty", role: "Full-Stack Developer", desc: "Builds end-to-end features from database to deployment." },
                { name: "Astra AI", role: "Logistics Analyst", desc: "Gemini-powered AI that analyzes delays and recommends actions." },
                { name: "Open Source", role: "Community", desc: "Powered by OSS: Next.js, FastAPI, Supabase, Leaflet, OSRM." },
              ].map((member) => (
                <div key={member.name} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--surface-elevated)] mx-auto mb-4 flex items-center justify-center text-xl font-bold text-[var(--text-muted)]">
                    {member.name[0]}
                  </div>
                  <h3 className="font-semibold text-[var(--text)]">{member.name}</h3>
                  <p className="text-sm text-[var(--accent)] mb-2">{member.role}</p>
                  <p className="text-xs text-[var(--text-muted)]">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-medium text-[var(--text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)]" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
