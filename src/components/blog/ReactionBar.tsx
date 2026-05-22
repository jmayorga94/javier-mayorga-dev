interface Props {
  slug: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ReactionBar(_props: Props) {
  return (
    <div className="mt-16 pt-8 border-t border-[var(--hairline)]">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
        Reactions — coming soon™ (the engineer is busy deploying things)
      </p>
    </div>
  );
}
