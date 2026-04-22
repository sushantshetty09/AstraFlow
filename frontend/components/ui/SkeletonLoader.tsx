"use client";

export default function SkeletonLoader({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <div className="skeleton h-4 w-24 mb-3" />
      <div className="skeleton h-8 w-32 mb-2" />
      <div className="skeleton h-3 w-20" />
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
      <div className="p-4 border-b border-[var(--border)]">
        <div className="skeleton h-4 w-48" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4 p-4 border-b border-[var(--border)] last:border-0">
          <div className="skeleton h-4 w-24" />
          <div className="skeleton h-4 w-32" />
          <div className="skeleton h-4 w-20" />
          <div className="skeleton h-4 w-16" />
          <div className="skeleton h-4 w-28" />
        </div>
      ))}
    </div>
  );
}
