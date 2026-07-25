/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  CalendarDays,
  Clock,
  BookOpenCheck,
  Sparkles,
  BarChart3,
  Grid3x3,
  ChevronRight,
  Send,
} from "lucide-react";

const blogPosts = [
  {
    title: "Building Modern Web Apps with Next.js",
    slug: "building-modern-web-apps-with-nextjs",
    category: "Development",
    excerpt:
      "Learn how to structure scalable, fast, and maintainable applications using the Next.js App Router and modern frontend patterns.",
    image: "/orange.png",
    date: "July 24, 2026",
    author: "WebCore Team",
    readTime: "9 min read",
    featured: true,
  },
  {
    title: "SEO Strategies for Better Organic Growth",
    slug: "seo-strategies-for-better-organic-growth",
    category: "SEO",
    excerpt:
      "Improve your search visibility with practical SEO tactics that help your content rank and convert better over time.",
    image: "/orange.png",
    date: "July 21, 2026",
    author: "Gulab Yar",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "Designing Clean User Interfaces That Convert",
    slug: "designing-clean-user-interfaces-that-convert",
    category: "Design",
    excerpt:
      "A practical guide to building beautiful, user-friendly interfaces that improve engagement and keep visitors on the page.",
    image: "/orange.png",
    date: "July 18, 2026",
    author: "Asfand Yar",
    readTime: "8 min read",
    featured: false,
  },
  {
    title: "How to Build Faster Responsive Layouts",
    slug: "how-to-build-faster-responsive-layouts",
    category: "Development",
    excerpt:
      "Discover the best responsive layout techniques for building smooth, optimized interfaces across every device size.",
    image: "/orange.png",
    date: "July 15, 2026",
    author: "Zuryab Gill",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Content Planning for Consistent Blogging",
    slug: "content-planning-for-consistent-blogging",
    category: "Marketing",
    excerpt:
      "Plan, write, and publish blog content consistently with a simple workflow that helps you stay organized and productive.",
    image: "/orange.png",
    date: "July 11, 2026",
    author: "Shabana",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "Advanced UI Patterns for Modern Websites",
    slug: "advanced-ui-patterns-for-modern-websites",
    category: "Design",
    excerpt:
      "Use advanced UI patterns to make your website feel polished, intuitive, and more professional for your users.",
    image: "/orange.png",
    date: "July 08, 2026",
    author: "Asfand Yar",
    readTime: "8 min read",
    featured: false,
  },
];

const categoryList = [
  { name: "Development", count: 3 },
  { name: "Design", count: 2 },
  { name: "SEO", count: 1 },
  { name: "Marketing", count: 1 },
  { name: "Best Practices", count: 4 },
];

// const categories = ["All", "Development", "Design", "SEO", "Marketing"];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function BlogHero() {
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(textEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-7 lg:pb-10">
      <style>{`
        .blog-hero-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
        }
        .blog-hero-left.blog-hero-active {
          opacity: 1;
          transform: translateX(0);
        }
        .blog-hero-right {
          opacity: 0;
          transform: translateX(60px) scale(0.95);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 1.05s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }
        .blog-hero-right.blog-hero-active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      `}</style>

      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-xl bg-blue-100/50 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-xl bg-cyan-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
        <div
          ref={textRef}
          className={`blog-hero-left ${isVisible ? "blog-hero-active" : ""}`}
        >
    
          <h1 className="text-3xl font-semibold tracking-tight text-slate-800 lg:text-4xl">
            Insights, Tutorials &amp; Updates
          </h1>

          <p className="mt-6 max-w-xl text-md leading-relaxed text-slate-600 lg:text-md">
            Discover expert content on web development, scalable architecture,
            UI/UX design, and digital growth strategies. From step-by-step
            tutorials and engineering guides to industry insights and product
            announcements, our blog helps businesses build smarter, faster,
            and more reliable digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">
              <BookOpenCheck className="h-3.5 w-3.5 text-[#0062D6]" />
              Expert Guides
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">
              <Sparkles className="h-3.5 w-3.5 text-[#0062D6]" />
              Practical Tutorials
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">
              <BarChart3 className="h-3.5 w-3.5 text-[#0062D6]" />
              Industry Insights
            </span>
          </div>
        </div>

        <div
          ref={mediaRef}
          className={`blog-hero-right ${isVisible ? "blog-hero-active" : ""} relative flex items-center justify-center`}
        >
          <div className="absolute" />
          <img
            src="/blog.png"
            alt="WebCore Solutions blog insights"
            className="relative z-10 w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

function ArticleRowCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <article className="group flex flex-col gap-6 overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition-all duration-400 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_45px_rgba(0,98,214,0.1)] sm:flex-row sm:p-6">
      <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-72">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 text-sm font-semibold text-white">
          {post.author}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center py-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0062D6]">
          {post.category}
        </span>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="mt-2.5 text-xl font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-[#0062D6] lg:text-2xl">
            {post.title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-[#0062D6] to-[#0B3C95] text-[10px] font-bold text-white">
              {getInitials(post.author)}
            </span>
            By {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}

function BlogSidebar({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
}: {
  search: string;
  setSearch: (v: string) => void;
  activeCategory: string;
  setActiveCategory: (v: string) => void;
}) {
  return (
    <aside className="flex flex-col gap-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
        <h3 className="text-base font-bold text-slate-900">Search</h3>
        <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
        <h3 className="text-base font-semibold text-slate-800">Categories</h3>
        <ul className="mt-4 flex flex-col gap-1">
          {categoryList.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <li key={cat.name}>
                <button
                  onClick={() => setActiveCategory(isActive ? "All" : cat.name)}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-blue-50 text-[#0062D6]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0062D6]"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Grid3x3
                      className={`h-4 w-4 ${
                        isActive ? "text-[#0062D6]" : "text-slate-400"
                      }`}
                    />
                    {cat.name}
                  </span>
                  <span
                    className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold ${
                      isActive
                        ? "bg-[#0062D6] text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setActiveCategory("All")}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0062D6] hover:underline"
        >
          View all categories
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-[#0062D6] to-[#0B3C95] p-6 shadow-[0_10px_30px_rgba(0,98,214,0.2)]">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-base font-bold text-white">Stay Updated</h3>
          <Send className="h-4 w-4 text-blue-100" />
        </div>
        <p className="text-sm leading-relaxed text-blue-100">
          Subscribe to get the latest tutorials, insights, and product updates.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-4 w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-blue-100/70 focus:border-white/50"
        />
        <button className="mt-3 w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#0062D6] transition-all duration-300 hover:bg-blue-50">
          Subscribe
        </button>
        <p className="mt-3 text-xs text-blue-100/70">No spam. Unsubscribe anytime.</p>
      </div>
    </aside>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / perPage));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="min-h-screen bg-[#fbfcfe]">
      <BlogHero />

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold text-slate-800">Latest Articles</h2>
              <span className="text-sm text-slate-500">
                {filteredPosts.length} articles
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {paginatedPosts.map((post) => (
                <ArticleRowCard key={post.slug} post={post} />
              ))}
              {paginatedPosts.length === 0 && (
                <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
                  No articles match your search.
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:border-[#0062D6]/30 hover:text-[#0062D6] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors duration-300 ${
                      currentPage === i + 1
                        ? "bg-[#0062D6] text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-[#0062D6]/30 hover:text-[#0062D6]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:border-[#0062D6]/30 hover:text-[#0062D6] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>

          <BlogSidebar
            search={search}
            setSearch={setSearch}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </section>
    </div>
  );
}