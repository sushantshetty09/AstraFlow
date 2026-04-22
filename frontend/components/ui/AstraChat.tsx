"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, ArrowRight } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface AstraChatProps {
  initialPrompt?: string;
  onClose?: () => void;
}

export default function AstraChat({ initialPrompt, onClose }: AstraChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialPrompt) {
      setOpen(true);
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  async function handleSend(text?: string) {
    const prompt = text || input.trim();
    if (!prompt || loading) return;
    setInput("");

    const userMsg: ChatMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
      if (!apiKey) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Gemini API key not configured. Set NEXT_PUBLIC_GEMINI_KEY in your environment variables." },
        ]);
        setLoading(false);
        return;
      }

      const systemPrompt = "You are Astra, an expert AI logistics analyst for Astra Flow. Diagnose shipment delays, predict route risks, analyze supply chain bottlenecks. Be concise, precise, and professional.";

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents: [
              ...messages.map((m) => ({
                role: m.role === "assistant" ? "model" : "user",
                parts: [{ text: m.content }],
              })),
              { role: "user", parts: [{ text: prompt }] },
            ],
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`Gemini API error: ${res.status}`);
      }

      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I could not generate a response. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${err instanceof Error ? err.message : "Failed to connect to Astra AI."}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setOpen(false);
    onClose?.();
  }

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 group"
          title="Ask Astra"
        >
          <Sparkles className="w-6 h-6" />
          <span className="absolute -top-8 right-0 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask Astra
          </span>
        </button>
      )}

      {/* Side panel */}
      {open && (
        <div className="fixed right-0 top-0 h-full w-96 z-50 flex flex-col bg-[var(--surface)] border-l border-[var(--border)] shadow-2xl animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--text)]">Astra</h3>
                <p className="text-xs text-[var(--text-muted)]">AI Logistics Analyst</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--surface-elevated)] transition-colors"
            >
              <X className="w-4 h-4 text-[var(--text-secondary)]" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <Sparkles className="w-8 h-8 text-[var(--accent)] mx-auto mb-3 opacity-50" />
                <p className="text-sm text-[var(--text-muted)]">Ask Astra about delays, routes, or supply chain risks</p>
                <div className="mt-4 space-y-2">
                  {["Analyze current delay risks", "What are common bottlenecks?", "Suggest route optimizations"].map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="flex items-center gap-2 mx-auto px-3 py-1.5 text-xs text-[var(--accent)] border border-[var(--border)] rounded-lg hover:bg-[var(--accent)]/5 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--surface-elevated)] text-[var(--text)] border border-[var(--border)]"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl px-4 py-3 flex gap-1.5 items-center">
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-[var(--border)] p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about delays, routes, risks..."
                className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all placeholder:text-[var(--text-muted)]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-40 text-white flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
