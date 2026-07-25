/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
// import { notFound } from "next/navigation";
import {
  CalendarDays,
  Clock3,
  UserRound,
  ArrowRight,
  Search,
  ChevronRight,
  Tag,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

type Post = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
  toc: { id: string; label: string }[];
  tags: string[];
};

const posts: Post[] = [
  {
    title: "Integrate Salesforce with Outlook: A Custom Add-in for Contacts, Opportunities & Email Sync",
    slug: "integrate-salesforce-with-outlook-custom-addin",
    category: "Outlook Add-ins",
    excerpt:
      "Bring Salesforce into Outlook with a custom Office.js add-in - see account and opportunity context beside every email, log messages to the CRM, and create records without leaving the inbox.",
    image: "/orange.png",
    date: "July 12, 2026",
    author: "Ali Sher",
    readTime: "9 min read",
    content: [
      "Salesforce runs the pipeline; Outlook runs the day. Sales reps switch between the two constantly, and every context switch costs time and leads to missed CRM updates.",
      "A custom Outlook add-in closes that gap by showing live Salesforce context beside the message and allowing reps to log activity or create records without leaving Outlook.",
      "The best implementation uses Office.js for the task pane, a backend you control, and Salesforce REST APIs with secure OAuth handling.",
      "This approach lets you tailor the experience to your exact objects, fields, and workflow instead of forcing your team into a generic integration.",
    ],
    toc: [
      { id: "introduction", label: "Introduction" },
      { id: "why-connect", label: "Why Connect Salesforce to Outlook?" },
      { id: "integration", label: "How the Integration Works" },
      { id: "sync", label: "What You Can Surface & Sync" },
      { id: "auth", label: "Authenticating with OAuth 2.0" },
      { id: "security", label: "Security & Best Practices" },
    ],
    tags: ["Salesforce", "Outlook", "Office.js", "OAuth 2.0"],
  },
  {
    title: "Build Powerful Excel Add-ins with Office.js: A Complete Guide",
    slug: "build-powerful-excel-addins-with-officejs",
    category: "Excel Add-ins",
    excerpt:
      "A practical guide to building fast, secure, and modern Excel add-ins with Office.js.",
    image: "/orange.png",
    date: "March 12, 2024",
    author: "WebCore Team",
    readTime: "8 min read",
    content: [
      "Excel add-ins are a great way to extend spreadsheet workflows with custom commands, panes, and automation.",
      "Office.js lets you build a consistent experience across platforms while keeping the logic maintainable.",
    ],
    toc: [
      { id: "intro", label: "Introduction" },
      { id: "setup", label: "Project Setup" },
      { id: "apis", label: "Working with Excel APIs" },
    ],
    tags: ["Excel", "Office.js", "Automation"],
  },
  {
    title: "Outlook Add-ins for Business Automation: Use Cases & Examples",
    slug: "outlook-addins-for-business-automation",
    category: "Outlook Add-ins",
    excerpt:
      "Learn how Outlook add-ins help teams automate tasks, save time, and improve workflow efficiency.",
    image: "/orange.png",
    date: "June 20, 2024",
    author: "WebCore Team",
    readTime: "6 min read",
    content: [
      "Outlook add-ins are ideal for automation because they sit exactly where the user already works.",
      "They can reduce switching between systems and make repetitive processes easier to manage.",
    ],
    toc: [
      { id: "overview", label: "Overview" },
      { id: "benefits", label: "Benefits" },
      { id: "examples", label: "Examples" },
    ],
    tags: ["Outlook", "Automation", "Productivity"],
  },
];

const currentPost = posts[0];
const relatedPosts = posts.slice(1);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: currentPost.title,
    description: currentPost.excerpt,
    alternates: {
      canonical: `/blog/${currentPost.slug}`,
    },
  };
}

function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-4 h-fit space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
        <h3 className="text-base font-semibold text-slate-800">Search</h3>
        <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
        <h3 className="text-base font-semibold text-slate-800">Categories</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Outlook Add-ins", "Excel Add-ins", "Word Add-ins", "Best Practices"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
        <h3 className="text-base font-semibold text-slate-800">Popular Posts</h3>
        <div className="mt-4 space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-slate-50"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-800 group-hover:text-[#0062D6]">
                  {post.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-linear-to-br from-[#0062D6] to-[#0B3C95] p-6 shadow-[0_10px_30px_rgba(0,98,214,0.2)]">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-base font-semibold text-white">Need Help?</h3>
          <MessageSquareText className="h-4 w-4 text-blue-100" />
        </div>
        <p className="text-sm leading-relaxed text-blue-100">
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
  );
}

export default function BlogDetailPage() {
  const post = currentPost;

  return (
    <div className="min-h-screen bg-[#fbfcfe]">
      <section className="relative overflow-hidden bg-white pt-20 pb-14">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0062D6]">
              {post.category}
            </span>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
              {post.title}
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-md">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <UserRound className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <main className="min-w-0">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
              <img
                src={post.image}
                alt={post.title}
                className="h-70 w-full object-cover md:h-87.5"
              />

              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0062D6]">
                    {post.category}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    9 min read
                  </span>
                </div>

                <div className="mt-8 space-y-5 text-[14px] leading-relaxed text-slate-700">
                  {post.content.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>

                <div className="mt-10 rounded-lg bg-slate-50 p-6">
                  <h2 className="text-lg font-semibold text-slate-800">Table of Contents</h2>
                  <div className="mt-4 space-y-3">
                    {post.toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0062D6]"
                      >
                        <ChevronRight className="h-4 w-4" />
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-10 space-y-10">
                  <section id="introduction">
                    <h2 className="text-2xl font-semibold text-slate-800">Introduction</h2>
                    <p className="mt-4 text-slate-700 leading-8">
                      Salesforce and Outlook together can remove manual work from sales workflows and keep CRM data more complete.
                    </p>
                  </section>

                  <section id="why-connect">
                    <h2 className="text-2xl font-bold text-slate-900">Why Connect Salesforce to Outlook?</h2>
                    <ul className="mt-4 space-y-3 text-slate-700">
                      {[
                        "See account, contact, and opportunity context beside every email.",
                        "Log emails to Salesforce in one click.",
                        "Create leads and opportunities from the inbox.",
                        "Keep forecasting and reporting accurate.",
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <Sparkles className="mt-1 h-4 w-4 text-[#0062D6]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section id="integration">
                    <h2 className="text-2xl font-bold text-slate-900">How the Integration Works</h2>
                    <p className="mt-4 text-slate-700 leading-8">
                      The add-in reads Outlook email context through Office.js, then calls your backend to fetch Salesforce data securely.
                    </p>
                  </section>

                  <section id="sync">
                    <h2 className="text-2xl font-bold text-slate-900">What You Can Surface & Sync</h2>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {[
                        "Contacts and leads matched to the sender email.",
                        "Accounts and open opportunities.",
                        "Recent activity and timeline items.",
                        "Cases and custom objects.",
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="auth">
                    <h2 className="text-2xl font-bold text-slate-900">Authenticating with OAuth 2.0</h2>
                    <p className="mt-4 text-slate-700 leading-8">
                      Keep the Connected App secret on the server, exchange codes securely, and only return short-lived session tokens to the task pane.
                    </p>
                  </section>

                  <section id="security">
                    <h2 className="text-2xl font-bold text-slate-900">Security & Best Practices</h2>
                    <ul className="mt-4 space-y-3 text-slate-700">
                      {[
                        "Keep secrets and refresh tokens server-side only.",
                        "Use narrow OAuth scopes.",
                        "Encrypt tokens at rest.",
                        "Validate every request.",
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <Tag className="mt-1 h-4 w-4 text-[#0062D6]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-8">
                  <span className="text-sm font-semibold text-slate-800">Share:</span>
                  <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-[#0062D6]/30 hover:text-[#0062D6]">
                    LinkedIn
                  </button>
                  <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-[#0062D6]/30 hover:text-[#0062D6]">
                    X
                  </button>
                  <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-[#0062D6]/30 hover:text-[#0062D6]">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>

            <section className="mt-14">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Related Articles</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    More posts that match this topic.
                  </p>
                </div>
                <Link href="/blog" className="text-sm font-semibold text-[#0062D6] hover:underline">
                  View all
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative h-56">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#0062D6]">
                        {item.category}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-[#0062D6]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </main>

          <div className="lg:pt-2">
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
}