-- Run this in Supabase Dashboard → SQL Editor

-- Reaction counters table
create table if not exists reaction_counts (
  slug          text    not null,
  reaction_type text    not null check (reaction_type in ('thumbsup', 'fire', 'lightbulb', 'thinking')),
  count         integer not null default 0,
  primary key (slug, reaction_type)
);

-- Atomic increment function (avoids race conditions)
create or replace function increment_reaction(p_slug text, p_reaction_type text)
returns void
language sql
as $$
  insert into reaction_counts (slug, reaction_type, count)
  values (p_slug, p_reaction_type, 1)
  on conflict (slug, reaction_type)
  do update set count = reaction_counts.count + 1;
$$;

-- Allow anyone to read counts (anon key)
alter table reaction_counts enable row level security;

create policy "Anyone can read reaction counts"
  on reaction_counts for select
  using (true);

-- Only service role can write (via API route with service key)
create policy "Service role can write reaction counts"
  on reaction_counts for all
  using (auth.role() = 'service_role');
