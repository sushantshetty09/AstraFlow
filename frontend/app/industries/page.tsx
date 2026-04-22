import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { ShoppingCart, Pill, Car, Package, Snowflake, Truck } from "lucide-react";

export const metadata: Metadata = { title: "Industries \u2014 Astra Flow", description: "Astra Flow powers logistics across retail, pharma, automotive, e-commerce, cold chain, and 3PL." };

const industries = [
  { icon: ShoppingCart, title: "Retail & FMCG", desc: "Last-mile delivery optimization, demand-driven routing, and real-time customer ETAs for omnichannel fulfillment." },
  { icon: Pill, title: "Pharmaceuticals", desc: "Temperature-sensitive shipment monitoring, regulatory compliance tracking, and chain-of-custody visibility." },
  { icon: Car, title: "Automotive", desc: "Just-in-time parts delivery, assembly line supply coordination, and multi-tier supplier visibility." },
  { icon: Package, title: "E-commerce", desc: "High-volume order tracking, carrier integration, and automated delay notifications to end customers." },
  { icon: Snowflake, title: "Cold Chain", desc: "Real-time temperature monitoring, spoilage risk alerts, and compliance documentation for perishable goods." },
  { icon: Truck, title: "3PL & Freight", desc: "Multi-client fleet management, cross-dock optimization, and unified visibility across carrier networks." },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Built for Every Industry
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From retail to pharma, Astra Flow adapts to the unique challenges of your supply chain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover-lift">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                  <ind.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h2 className="text-lg font-bold mb-2 text-[var(--text)]">{ind.title}</h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
