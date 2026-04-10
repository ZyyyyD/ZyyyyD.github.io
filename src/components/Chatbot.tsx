import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";

const SYSTEM_PROMPT = `You are a helpful assistant representing Zyrel's portfolio.
Answer questions about his skills, projects, and experience.
His projects include: MangTask (React productivity dashboard), FileSend (secure file sharing), UIKit (React component library).
His stack: React, TypeScript, Tailwind, Laravel, PHP, MySQL, Prisma.
Keep answers short and friendly.`;

const C = {
  bg:      "#0b0b12",
  surface: "rgba(15,25,48,0.97)",
  glass:   "rgba(25,37,64,0.8)",
  border:  "rgba(255,255,255,0.08)",
  amber:   "#f59e0b",
  amberDim:"#d97706",
  teal:    "#0d9488",
  textHi:  "#f3f3f7",
  textMid: "#e2e2e8",
  textMuted:"#9ca3af",
};

interface Props {
  onClose: () => void;
}

export default function Chatbot({ onClose }: Props) {
  const [messages, setMessages] = useState<{ role: string; parts: { text: string }[] }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const fetchingRef = useRef(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || fetchingRef.current) return;
    fetchingRef.current = true;

    const userMessage = { role: "user", parts: [{ text: input }] };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: updatedMessages,
          }),
        }
      );
      if (res.status === 429) {
        setMessages([...updatedMessages, { role: "model", parts: [{ text: "Rate limit reached. Please wait a moment and try again." }] }]);
        return;
      }
      const data = await res.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, I couldn't get a response.";
      setMessages([...updatedMessages, { role: "model", parts: [{ text: reply }] }]);
    } catch {
      setMessages([...updatedMessages, { role: "model", parts: [{ text: "Something went wrong. Please try again." }] }]);
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "110px",
        right: "16px",
        width: "min(360px, calc(100vw - 32px))",
        height: "min(500px, calc(100vh - 160px))",
        background: C.surface,
        backdropFilter: "blur(24px)",
        border: `1px solid ${C.border}`,
        borderRadius: "20px",
        boxShadow: "0 32px 64px -12px rgba(0,0,0,0.85)",
        display: "flex",
        flexDirection: "column",
        zIndex: 60,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 18px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(245,158,11,0.06)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "34px", height: "34px", borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.amber}, ${C.amberDim})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", flexShrink: 0,
            }}
          >
            🤖
          </div>
          <div>
            <p style={{ fontWeight: 700, color: C.textHi, fontSize: "14px", margin: 0, lineHeight: 1.2 }}>
              Zy's Assistant
            </p>
            <p style={{ fontSize: "11px", color: C.teal, margin: 0, fontWeight: 600 }}>● Online</p>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "rgba(255,255,255,0.06)", border: `1px solid ${C.border}`,
            borderRadius: "8px", cursor: "pointer", color: C.textMuted,
            padding: "6px", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")}
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1, overflowY: "auto", padding: "16px",
          display: "flex", flexDirection: "column", gap: "10px",
        }}
      >
        {messages.length === 0 && (
          <div style={{ textAlign: "center", color: C.textMuted, fontSize: "13px", marginTop: "40px", lineHeight: 1.6 }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>👋</div>
            <p>Hi! Ask me anything about Zyrel's skills, projects, or experience.</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}
          >
            <div
              style={{
                maxWidth: "78%",
                padding: "10px 14px",
                borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                background: msg.role === "user"
                  ? `linear-gradient(135deg, ${C.amber}, ${C.amberDim})`
                  : C.glass,
                color: msg.role === "user" ? C.bg : C.textMid,
                fontSize: "13px",
                lineHeight: 1.55,
                border: msg.role === "user" ? "none" : `1px solid ${C.border}`,
                fontWeight: msg.role === "user" ? 600 : 400,
                wordBreak: "break-word",
              }}
            >
              {msg.parts[0].text}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                padding: "10px 16px", borderRadius: "18px 18px 18px 4px",
                background: C.glass, border: `1px solid ${C.border}`,
                color: C.textMuted, fontSize: "13px", display: "flex", gap: "4px", alignItems: "center",
              }}
            >
              <span style={{ animation: "pulse 1s infinite" }}>●</span>
              <span style={{ animation: "pulse 1s infinite 0.2s" }}>●</span>
              <span style={{ animation: "pulse 1s infinite 0.4s" }}>●</span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: "12px 14px",
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          gap: "8px",
          flexShrink: 0,
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask me anything..."
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.06)",
            border: `1px solid ${C.border}`,
            borderRadius: "12px",
            padding: "10px 14px",
            color: C.textHi,
            fontSize: "13px",
            outline: "none",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = C.border)}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            background: `linear-gradient(135deg, ${C.amber}, ${C.amberDim})`,
            border: "none",
            borderRadius: "12px",
            padding: "10px 14px",
            color: C.bg,
            fontWeight: 700,
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            opacity: loading || !input.trim() ? 0.5 : 1,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "opacity 0.2s",
            flexShrink: 0,
          }}
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
}
