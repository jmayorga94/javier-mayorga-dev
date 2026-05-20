"use client";

import { useReactions } from "@/hooks/useReactions";
import { REACTIONS, ReactionType } from "@/types/reactions";

interface Props {
  slug: string;
}

export function ReactionBar({ slug }: Props) {
  const { counts, reacted, loading, react } = useReactions(slug);

  return (
    <div className="mt-16 pt-8 border-t border-[#f3f4f6]">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#6b7280] mb-4">
        Was this useful?
      </p>
      <div className="flex flex-wrap gap-3">
        {REACTIONS.map(({ type, emoji, label }) => {
          const active = reacted.has(type);
          const count = loading ? 0 : counts[type];
          return (
            <button
              key={type}
              onClick={() => react(type as ReactionType)}
              disabled={active}
              title={label}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full border text-[14px]
                transition-all duration-150
                ${active
                  ? "border-[#1D9E75] bg-[#f0fdf9] text-[#1D9E75] cursor-default"
                  : "border-[#f3f4f6] bg-white text-[#374151] hover:border-[#1D9E75] hover:bg-[#f0fdf9] hover:text-[#1D9E75]"
                }
              `}
            >
              <span className="text-[18px] leading-none">{emoji}</span>
              {count > 0 && (
                <span className="font-medium text-[13px]">{count}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
