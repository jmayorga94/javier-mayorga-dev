import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  lang: "en" | "es";
  tags: string[];
  summary: string;
  published: boolean;
  readingTime: number;
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  client: string;
  year: number;
  outcome: string;
  tags: string[];
  lang: "en" | "es";
}

export interface ArchMeta {
  slug: string;
  title: string;
  diagramType: "ha" | "cicd" | "migration" | "api";
  summary: string;
  tags: string[];
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function getSlugFiles(dir: string): string[] {
  const fullDir = path.join(contentRoot, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs.readdirSync(fullDir).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): PostMeta[] {
  return getSlugFiles("posts")
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(contentRoot, "posts", file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        lang: data.lang ?? "en",
        tags: data.tags ?? [],
        summary: data.summary ?? "",
        published: data.published !== false,
        readingTime: estimateReadingTime(content),
      } as PostMeta;
    })
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const file = path.join(contentRoot, "posts", `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      lang: data.lang ?? "en",
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      published: data.published !== false,
      readingTime: estimateReadingTime(content),
    },
    content,
  };
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  return getSlugFiles("case-studies").map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentRoot, "case-studies", file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? "",
      client: data.client ?? "",
      year: data.year ?? 0,
      outcome: data.outcome ?? "",
      tags: data.tags ?? [],
      lang: data.lang ?? "en",
    } as CaseStudyMeta;
  });
}

export function getCaseStudyBySlug(slug: string): { meta: CaseStudyMeta; content: string } | null {
  const file = path.join(contentRoot, "case-studies", `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? "",
      client: data.client ?? "",
      year: data.year ?? 0,
      outcome: data.outcome ?? "",
      tags: data.tags ?? [],
      lang: data.lang ?? "en",
    },
    content,
  };
}

export function getAllArchitecture(): ArchMeta[] {
  return getSlugFiles("architecture").map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentRoot, "architecture", file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? "",
      diagramType: data.diagramType ?? "ha",
      summary: data.summary ?? "",
      tags: data.tags ?? [],
    } as ArchMeta;
  });
}

export function getArchBySlug(slug: string): { meta: ArchMeta; content: string } | null {
  const file = path.join(contentRoot, "architecture", `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? "",
      diagramType: data.diagramType ?? "ha",
      summary: data.summary ?? "",
      tags: data.tags ?? [],
    },
    content,
  };
}
