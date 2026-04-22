import { MapPin, Route, Brain, Truck, Link2, BellRing } from "lucide-react";

const features = [
  { icon: MapPin, title: "Real-Time Tracking", desc: "10-second GPS intervals with dead reckoning prediction and offline buffering." },
  { icon: Route, title: "Route Optimization", desc: "OSRM-powered routing with 30km segment analysis and deviation detection." },
  { icon: Brain, title: "AI Delay Analysis", desc: "ML-powered speed and pattern analysis for proactive delay prediction." },
  { icon: Truck, title: "Fleet Management", desc: "Unified driver dashboard with status tracking and network monitoring." },
  { icon: Link2, title: "Supply Chain Visibility", desc: "End-to-end shipment tracking from origin to destination across carriers." },
  { icon: BellRing, title: "Smart Alerts", desc: "Multi-tier severity alerts with weather, traffic, and geofence triggers." },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Everything Your Operations Team Needs
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Integrated capabilities that transform reactive logistics into proactive intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover-lift cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-[var(--text)]">{f.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
