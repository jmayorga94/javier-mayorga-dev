"use client";

import { useEffect, useState } from "react";
import { ReactionCounts, ReactionType } from "@/types/reactions";

const EMPTY: ReactionCounts = { thumbsup: 0, fire: 0, lightbulb: 0, thinking: 0 };
const TYPES: ReactionType[] = ["thumbsup", "fire", "lightbulb", "thinking"];

function storageKey(slug: string, type: ReactionType) {
  return `reacted:${slug}:${type}`;
}

function loadReacted(slug: string): Set<ReactionType> {
  if (typeof window === "undefined") return new Set();
  const set = new Set<ReactionType>();
  for (const t of TYPES) {
    if (localStorage.getItem(storageKey(slug, t))) set.add(t);
  }
  return set;
}

export function useReactions(slug: string) {
  const [counts, setCounts] = useState<ReactionCounts>(EMPTY);
  // Lazy initializer reads localStorage once on mount — no effect needed
  const [reacted, setReacted] = useState<Set<ReactionType>>(() => loadReacted(slug));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/reactions/${slug}`)
      .then((r) => r.json())
      .then((data: ReactionCounts) => { setCounts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  async function react(type: ReactionType) {
    if (reacted.has(type)) return;

    // Optimistic update
    setCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    setReacted((prev) => new Set(prev).add(type));
    localStorage.setItem(storageKey(slug, type), "1");

    const res = await fetch(`/api/reactions/${slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
    });

    // Rollback on failure
    if (!res.ok) {
      setCounts((prev) => ({ ...prev, [type]: Math.max(0, prev[type] - 1) }));
      setReacted((prev) => { const next = new Set(prev); next.delete(type); return next; });
      localStorage.removeItem(storageKey(slug, type));
    }
  }

  return { counts, reacted, loading, react };
}
