export type ReactionType = "thumbsup" | "fire" | "lightbulb" | "thinking";

export interface ReactionCounts {
  thumbsup: number;
  fire: number;
  lightbulb: number;
  thinking: number;
}

export const REACTIONS: { type: ReactionType; emoji: string; label: string }[] = [
  { type: "thumbsup",  emoji: "👍", label: "Useful" },
  { type: "fire",      emoji: "🔥", label: "Fire" },
  { type: "lightbulb", emoji: "💡", label: "Insightful" },
  { type: "thinking",  emoji: "🤔", label: "Thought-provoking" },
];
