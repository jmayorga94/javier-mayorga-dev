"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-transparent border border-[var(--hairline)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-[14px] px-4 py-3 rounded-md focus:outline-none focus:border-[#1D9E75] transition-colors";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
          subject: "New contact from javiermayorga.tech",
          ...data,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-8">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="16" cy="16" r="14" />
          <path d="M10 16.5 l4.5 4.5 7.5-8" />
        </svg>
        <p className="text-[15px] text-[var(--text-primary)] font-medium">Message sent.</p>
        <p className="text-[14px] text-[var(--text-secondary)]">I&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[480px] mx-auto text-left flex flex-col gap-3">
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={4}
        className={`${inputClass} resize-none`}
      />
      {status === "error" && (
        <p className="text-[13px] text-red-400">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#1D9E75] hover:bg-[#178f68] disabled:opacity-60 text-white text-[14px] font-medium px-8 py-3 rounded-md transition-colors"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
