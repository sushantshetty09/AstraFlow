"use client";

import { useEffect, useState, useRef } from "react";

interface HealthScoreProps {
  onTimeRate: number;
  criticalAlerts: number;
  activeShipments: number;
  totalShipments: number;
}

export default function HealthScore({ onTimeRate, criticalAlerts, activeShipments, totalShipments }: HealthScoreProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Calculate health score: On-Time Rate 40% + Zero Critical Delays 30% + Active Coverage 30%
  const criticalScore = criticalAlerts === 0 ? 100 : Math.max(0, 100 - criticalAlerts * 20);
  const coverageScore = totalShipments > 0 ? (activeShipments / totalShipments) * 100 : 80;
  const score = Math.round(onTimeRate * 0.4 + criticalScore * 0.3 + Math.min(100, coverageScore) * 0.3);

  const color = score >= 75 ? "var(--success)" : score >= 50 ? "var(--warning)" : "var(--danger)";
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (score / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center" title={`On-Time Rate: ${onTimeRate}% (40%) | Critical Score: ${criticalScore} (30%) | Coverage: ${Math.round(coverageScore)}% (30%)`}>
      <div className="relative w-28 h-28">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--border)" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animated ? offset : circumference}
            style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold text-[var(--text)]">{animated ? score : 0}</span>
          <span className="text-[8px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">Health</span>
        </div>
      </div>
    </div>
  );
}
