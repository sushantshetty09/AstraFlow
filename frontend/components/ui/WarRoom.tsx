"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, X, Clock, Sparkles } from "lucide-react";

interface Shipment {
  id: string;
  tracking_id: string;
  driver_name: string;
  origin: string;
  destination: string;
  status: string;
  estimated_arrival: string;
  delay_risk: string;
}

interface WarRoomProps {
  shipments: Shipment[];
  onClose: () => void;
  onAskAstra: (prompt: string) => void;
}

function getDelayHours(eta: string): number {
  if (!eta) return 0;
  const diff = (new Date(eta).getTime() - Date.now()) / (1000 * 60 * 60);
  return diff < 0 ? Math.abs(diff) : 0;
}

export default function WarRoom({ shipments, onClose, onAskAstra }: WarRoomProps) {
  const [visible, setVisible] = useState(false);

  const criticalShipments = shipments.filter(
    (s) => s.delay_risk === "HIGH" || s.status === "stopped" || getDelayHours(s.estimated_arrival) > 2
  );

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 200);
  }

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/95 flex flex-col transition-all duration-200 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-red-900/50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center pulse-danger">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white">War Room</h1>
            <p className="text-sm text-red-400">{criticalShipments.length} critical shipments require attention</p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="w-10 h-10 rounded-lg border border-red-900/50 flex items-center justify-center hover:bg-red-900/30 transition-colors"
        >
          <X className="w-5 h-5 text-red-400" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        {criticalShipments.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-400">No critical shipments. All systems operational.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criticalShipments.map((s) => {
              const delayH = Math.round(getDelayHours(s.estimated_arrival));
              return (
                <div
                  key={s.id}
                  className="rounded-xl border border-red-900/50 bg-red-950/30 p-6 hover:bg-red-950/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm text-red-400 font-bold">{s.tracking_id}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 text-xs font-semibold">
                      <AlertTriangle className="w-3 h-3" />
                      Critical
                    </span>
                  </div>

                  <div className="text-sm text-gray-300 mb-1">{s.driver_name || "Unassigned"}</div>
                  <div className="text-xs text-gray-500 mb-4">
                    {s.origin?.split(",")[0]} &#8594; {s.destination?.split(",")[0]}
                  </div>

                  {/* Countdown */}
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span className="text-lg font-bold text-red-400">
                      {delayH > 0 ? `${delayH}h overdue` : "ETA at risk"}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      onAskAstra(
                        `Shipment ${s.tracking_id} from ${s.origin} to ${s.destination} is ${delayH} hours delayed. Driver: ${s.driver_name || "Unknown"}. Diagnose root cause and give 3 actionable recommendations.`
                      )
                    }
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-red-900/50 text-red-400 text-xs font-semibold hover:bg-red-900/30 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Ask Astra
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
