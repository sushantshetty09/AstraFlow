import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { MapPin, Route, Brain, Truck, Link2, BellRing } from "lucide-react";

export const metadata: Metadata = { title: "Features \u2014 Astra Flow", description: "Real-time GPS, AI disruption detection, weather-aware routing, and a unified control tower." };

const features = [
  { icon: MapPin, title: "Real-Time GPS Tracking", desc: "10-second ping intervals with dead reckoning prediction. Offline ping buffering via IndexedDB. Visual distinction between confirmed and predicted positions.", details: ["Browser Geolocation API", "Socket.IO transport", "Supabase + PostGIS storage", "Kalman filter prediction"] },
  { icon: Route, title: "Route Optimization", desc: "OSRM-powered routing with 30km segment analysis. Automatic deviation detection with 500m threshold and alternate path visualization.", details: ["OSRM route calculation", "30km segment splitting", "Deviation threshold alerts", "Perpendicular distance analysis"] },
  { icon: Brain, title: "AI Delay Analysis", desc: "Rule engine analyzes speed drops, stop durations, and route compliance in real time with escalating severity levels.", details: ["Speed drop detection", "45-min / 2-hour stop alerts", "Geofence breach detection", "Alert severity: LOW to CRITICAL"] },
  { icon: Truck, title: "Fleet Management", desc: "Unified driver dashboard with online/offline status tracking, network monitoring, and reconnection logging.", details: ["Driver status tracking", "Network connectivity logging", "Auto status transitions", "Reconnection detection"] },
  { icon: Link2, title: "Supply Chain Visibility", desc: "End-to-end shipment tracking from origin to destination. Route geometry overlay, segment progress, and ETA calculations.", details: ["Full route visualization", "Segment-level progress", "Dynamic ETA adjustments", "History trail on map"] },
  { icon: BellRing, title: "Smart Alerts", desc: "Multi-tier alert system with weather integration, traffic checks, and configurable thresholds.", details: ["Weather risk scoring (Open-Meteo)", "Traffic incident detection", "Configurable alert thresholds", "Auto-resolve on recovery"] },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Everything Your Operations Team Needs
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Integrated capabilities that transform reactive logistics into proactive intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h2 className="text-xl font-bold mb-3 text-[var(--text)]">{f.title}</h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">{f.desc}</p>
                <div className="space-y-2">
                  {f.details.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <span className="text-[var(--accent)] font-bold">&#8594;</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
