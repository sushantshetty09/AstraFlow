"use client";
import { useEffect } from "react";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  /* Scroll reveal (Intersection Observer) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-in");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const attach = () =>
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mo.disconnect(); };
  }, []);

  return <>{children}</>;
}
