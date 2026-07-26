"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Search,
  Link2,
  Check,
  CircleDot,
} from "lucide-react";
import Footer from "@/components/Footer";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

type Section =
  | {
      id: string;
      type?: "text";
      heading: string;
      paragraphs?: string[];
      bullets?: string[];
    }
  | {
      id: string;
      type: "code";
      heading: string;
      paragraphs?: string[];
      codeTitle: string;
      code: string;
      bullets?: string[];
    };

type Post = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  sections: Section[];
  tags: string[];
};

function ShareButton({
  icon: Icon,
  label,
  onClick,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0062D6]/30 hover:bg-blue-50 hover:text-[#0062D6]"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {title}
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-7 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function BlogDetailClient({
  post,
  relatedPosts,
}: {
  post: Post;
  relatedPosts: Post[];
}) {
  const [loaded, setLoaded] = useState(false);
  const [activeId, setActiveId] = useState(post.sections[0]?.id ?? "");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const filteredPosts = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return [post, ...relatedPosts];
    return [post, ...relatedPosts].filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [search, post, relatedPosts]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setLoaded(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0.1, 0.2, 0.35, 0.5, 0.75] }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [post]);

  const register = (id: string, el: HTMLElement | null) => {
    if (!el) return;
    sectionRefs.current.set(id, el);
  };

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-8 pb-14">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-[#0062D6]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition-colors hover:text-[#0062D6]">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="transition-colors hover:text-[#0062D6]">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-500">{post.category}</span>
          </nav>

          <div className="mt-6 flex w-fit mx-auto justify-center items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0062D6]">
            {post.category}
          </div>

          <h1 className={`mt-4 flex items-center text-center justify-center mx-auto max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-800 md:text-4xl transition-all duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
            {post.title}
          </h1>

          <p className={`mt-4 flex items-center text-center justify-center mx-auto max-w-3xl text-md leading-relaxed text-slate-600 md:text-md transition-all duration-700 delay-100 ${loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
            {post.excerpt}
          </p>

          <div className="mt-7 text-center justify-center mx-auto flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex  h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#0062D6] to-[#0B3C95] text-xs font-semibold text-white">
                {post.author.split(" ").map((n) => n.charAt(0)).join("")}
              </span>
              <span className="text-sm font-medium text-slate-700">By {post.author}</span>
            </div>

            <span className="hidden text-slate-300 md:inline">|</span>

            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
              <CalendarDays className="h-4 w-4" />
              {post.date}
            </span>

            <span className="hidden text-slate-300 md:inline">|</span>

            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
              <Clock3 className="h-4 w-4" />
              {post.readTime}
            </span>

            <div className="ml-auto flex items-center gap-2">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer">
                <ShareButton icon={FaLinkedin} label="Share on LinkedIn" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noreferrer">
                <ShareButton icon={FaXTwitter} label="Share on X" />
              </a>
              <a href={`https://github.com/search?q=${encodedUrl}`} target="_blank" rel="noreferrer">
                <ShareButton icon={FaGithub} label="Open GitHub search" />
              </a>
              <ShareButton icon={Link2} label="Copy link" onClick={copyLink} />
              {copied && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  <Check className="h-3.5 w-3.5" />
                  Copied
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <main className="min-w-0">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <img src={post.image} alt={post.title} className="h-72 w-full object-cover md:h-96" />

              <div className="p-6 md:p-10">
                <div className="flex flex-col gap-10">
                  {post.sections.map((section) => (
                    <section
                      key={section.id}
                      ref={(el) => register(section.id, el)}
                      id={section.id}
                      className="scroll-mt-28"
                    >
                      <div className="flex items-center gap-2">
                        <CircleDot className="h-4 w-4 text-[#0062D6]" />
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">
                          {section.heading}
                        </h2>
                      </div>

                      {section.paragraphs?.map((para, i) => (
                        <p key={i} className="mt-4 text-[15px] leading-8 text-slate-600">
                          {para}
                        </p>
                      ))}

                      {"bullets" in section && section.bullets && (
                        <ul className="mt-4 space-y-3">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
                              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#0062D6]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.type === "code" && (
                        <CodeBlock title={section.codeTitle} code={section.code} />
                      )}
                    </section>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-2 border-t border-slate-100 pt-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </main>

          <aside className="flex h-fit flex-col gap-5 lg:sticky lg:top-6">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-800">
                Table of Contents
              </h3>
              <ol className="mt-4 flex flex-col gap-1">
                {post.sections.map((section, idx) => {
                  const active = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => jumpTo(section.id)}
                        className={`group flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-all duration-300 ${
                          active
                            ? "bg-blue-50 text-[#0062D6]"
                            : "text-slate-500 hover:bg-slate-50 hover:text-[#0062D6]"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold transition-colors duration-300 ${
                            active
                              ? "bg-[#0062D6] text-white"
                              : "bg-slate-100 text-slate-600 group-hover:bg-[#0062D6] group-hover:text-white"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="leading-6">{section.heading}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <h3 className="text-base font-semibold text-slate-900">Search</h3>
              <div className="mt-4 flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 focus-within:border-[#0062D6]/40 focus-within:bg-white">
                <Search className="h-4 w-4 shrink-0 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                {filteredPosts.slice(0, 3).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0062D6]"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-linear-to-br from-[#0062D6] to-[#0B3C95] p-5 shadow-[0_10px_30px_rgba(0,98,214,0.18)]">
              <h3 className="text-base font-semibold text-white">
                Need Help Building Custom Office Add-ins?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">
                We build secure, scalable Office.js solutions tailored to your workflow.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#0062D6] transition-all duration-300 hover:bg-blue-50"
              >
                Contact Our Experts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}