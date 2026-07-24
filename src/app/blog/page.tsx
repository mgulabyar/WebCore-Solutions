/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, CalendarDays, UserRound } from "lucide-react";

const blogPosts = [
  {
    title: "Building Modern Web Apps with Next.js",
    slug: "building-modern-web-apps-with-nextjs",
    category: "Development",
    excerpt:
      "Learn how to structure scalable, fast, and maintainable applications using the Next.js App Router and modern frontend patterns.",
    image: "/team/Asfand.png",
    date: "July 24, 2026",
    author: "WebCore Team",
    featured: true,
  },
  {
    title: "SEO Strategies for Better Organic Growth",
    slug: "seo-strategies-for-better-organic-growth",
    category: "SEO",
    excerpt:
      "Improve your search visibility with practical SEO tactics that help your content rank and convert better over time.",
    image: "/team/Asfand.png",
    date: "July 21, 2026",
    author: "Gulab Yar",
    featured: false,
  },
  {
    title: "Designing Clean User Interfaces That Convert",
    slug: "designing-clean-user-interfaces-that-convert",
    category: "Design",
    excerpt:
      "A practical guide to building beautiful, user-friendly interfaces that improve engagement and keep visitors on the page.",
    image: "/team/Asfand.png",
    date: "July 18, 2026",
    author: "Asfand Yar",
    featured: false,
  },
  {
    title: "How to Build Faster Responsive Layouts",
    slug: "how-to-build-faster-responsive-layouts",
    category: "Development",
    excerpt:
      "Discover the best responsive layout techniques for building smooth, optimized interfaces across every device size.",
    image: "/team/Asfand.png",
    date: "July 15, 2026",
    author: "Zuryab Gill",
    featured: false,
  },
  {
    title: "Content Planning for Consistent Blogging",
    slug: "content-planning-for-consistent-blogging",
    category: "Marketing",
    excerpt:
      "Plan, write, and publish blog content consistently with a simple workflow that helps you stay organized and productive.",
    image: "/team/Asfand.png",
    date: "July 11, 2026",
    author: "Shabana",
    featured: false,
  },
  {
    title: "Advanced UI Patterns for Modern Websites",
    slug: "advanced-ui-patterns-for-modern-websites",
    category: "Design",
    excerpt:
      "Use advanced UI patterns to make your website feel polished, intuitive, and more professional for your users.",
    image: "/team/Asfand.png",
    date: "July 08, 2026",
    author: "Asfand Yar",
    featured: false,
  },
];

const categories = ["All", "Development", "Design", "SEO", "Marketing"];

function BlogCard({ post, large = false }: { post: (typeof blogPosts)[0]; large?: boolean }) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] ${
        large ? "md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className={`relative ${large ? "h-72 md:h-full" : "h-56"}`}>
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-[#0062D6] px-3 py-1 text-xs font-semibold text-white">
          {post.category}
        </span>
      </div>

      <div className={`flex flex-col bg-white p-6 ${large ? "justify-center md:p-8" : ""}`}>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <UserRound className="h-3.5 w-3.5" />
            {post.author}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-800">
          {post.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-6">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0062D6] transition-transform duration-300 hover:gap-3"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

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

  const featuredPost = filteredPosts.find((post) => post.featured) || blogPosts[0];
  const otherPosts = filteredPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <div className="min-h-screen bg-[#fbfcfe]">
      <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#0062D6]">
              Blog
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-800 lg:text-5xl">
              Ideas, Guides & Updates
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 lg:text-lg">
              Explore our latest articles on development, design, SEO, and digital growth.
              We publish practical content to help you build better products and stronger online presence.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex w-full max-w-2xl items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#0062D6] text-white shadow-lg shadow-blue-500/20"
                    : "bg-white text-slate-600 border border-neutral-200 hover:border-[#0062D6]/30 hover:text-[#0062D6]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 md:px-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800">Featured Post</h2>
          <p className="mt-2 text-sm text-slate-600">
            Highlighting one important article for quick access.
          </p>
        </div>

        <BlogCard post={featuredPost} large />

        <div className="mt-14 mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">Latest Articles</h2>
            <p className="mt-2 text-sm text-slate-600">
              Browse all posts matching your current filter.
            </p>
          </div>
          <span className="text-sm text-slate-500">{otherPosts.length + 1} results</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="rounded-full bg-[#0B1220] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0062D6]">
            Load More
          </button>
        </div>
      </section>
    </div>
  );
}