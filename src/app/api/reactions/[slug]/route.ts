import { NextRequest, NextResponse } from "next/server";
import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import { ReactionType } from "@/types/reactions";

export const runtime = "edge";

const VALID_TYPES: ReactionType[] = ["thumbsup", "fire", "lightbulb", "thinking"];

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { slug } = await params;

  const { data, error } = await getSupabase()
    .from("reaction_counts")
    .select("reaction_type, count")
    .eq("slug", slug);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const counts = { thumbsup: 0, fire: 0, lightbulb: 0, thinking: 0 };
  for (const row of data ?? []) {
    counts[row.reaction_type as ReactionType] = row.count;
  }

  return NextResponse.json(counts);
}

export async function POST(req: NextRequest, { params }: Params) {
  const { slug } = await params;
  const body = await req.json().catch(() => ({}));
  const type: string = body.type ?? "";

  if (!VALID_TYPES.includes(type as ReactionType)) {
    return NextResponse.json({ error: "Invalid reaction type" }, { status: 400 });
  }

  const { error } = await getSupabaseAdmin().rpc("increment_reaction", {
    p_slug: slug,
    p_reaction_type: type,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
