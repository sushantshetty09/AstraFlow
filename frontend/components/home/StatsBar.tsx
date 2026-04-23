"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, label: "Shipments Tracked", suffix: "+", display: "20+" },
  { value: 98.7, label: "On-Time Rate", suffix: "%", display: "98.7%" },
  { value: 140, label: "Countries", suffix: "+", display: "140+" },
  { value: 2, label: "Detection Latency", suffix: "s", prefix: "<", display: "<2s" },
];

function AnimatedStat({ display, label }: { display: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className={`text-2xl sm:text-3xl font-extrabold text-[var(--text)] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
        {display}
      </div>
      <div className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <AnimatedStat key={s.label} display={s.display} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
