// /* eslint-disable @next/next/no-img-element */
// import type { Metadata } from "next";
// import Link from "next/link";
// // import { notFound } from "next/navigation";
// import {
//   CalendarDays,
//   Clock3,
//   UserRound,
//   ArrowRight,
//   Search,
//   ChevronRight,
//   Tag,
//   MessageSquareText,
//   Sparkles,
// } from "lucide-react";
// import Footer from "@/components/Footer";

// type Post = {
//   title: string;
//   slug: string;
//   category: string;
//   excerpt: string;
//   image: string;
//   date: string;
//   author: string;
//   readTime: string;
//   content: string[];
//   toc: { id: string; label: string }[];
//   tags: string[];
// };

// const posts: Post[] = [
//   {
//     title: "Integrate Salesforce with Outlook: A Custom Add-in for Contacts, Opportunities & Email Sync",
//     slug: "integrate-salesforce-with-outlook-custom-addin",
//     category: "Outlook Add-ins",
//     excerpt:
//       "Bring Salesforce into Outlook with a custom Office.js add-in - see account and opportunity context beside every email, log messages to the CRM, and create records without leaving the inbox.",
//     image: "/orange.png",
//     date: "July 12, 2026",
//     author: "Ali Sher",
//     readTime: "9 min read",
//     content: [
//       "Salesforce runs the pipeline; Outlook runs the day. Sales reps switch between the two constantly, and every context switch costs time and leads to missed CRM updates.",
//       "A custom Outlook add-in closes that gap by showing live Salesforce context beside the message and allowing reps to log activity or create records without leaving Outlook.",
//       "The best implementation uses Office.js for the task pane, a backend you control, and Salesforce REST APIs with secure OAuth handling.",
//       "This approach lets you tailor the experience to your exact objects, fields, and workflow instead of forcing your team into a generic integration.",
//     ],
//     toc: [
//       { id: "introduction", label: "Introduction" },
//       { id: "why-connect", label: "Why Connect Salesforce to Outlook?" },
//       { id: "integration", label: "How the Integration Works" },
//       { id: "sync", label: "What You Can Surface & Sync" },
//       { id: "auth", label: "Authenticating with OAuth 2.0" },
//       { id: "security", label: "Security & Best Practices" },
//     ],
//     tags: ["Salesforce", "Outlook", "Office.js", "OAuth 2.0"],
//   },
//   {
//     title: "Build Powerful Excel Add-ins with Office.js: A Complete Guide",
//     slug: "build-powerful-excel-addins-with-officejs",
//     category: "Excel Add-ins",
//     excerpt:
//       "A practical guide to building fast, secure, and modern Excel add-ins with Office.js.",
//     image: "/orange.png",
//     date: "March 12, 2024",
//     author: "WebCore Team",
//     readTime: "8 min read",
//     content: [
//       "Excel add-ins are a great way to extend spreadsheet workflows with custom commands, panes, and automation.",
//       "Office.js lets you build a consistent experience across platforms while keeping the logic maintainable.",
//     ],
//     toc: [
//       { id: "intro", label: "Introduction" },
//       { id: "setup", label: "Project Setup" },
//       { id: "apis", label: "Working with Excel APIs" },
//     ],
//     tags: ["Excel", "Office.js", "Automation"],
//   },
//   {
//     title: "Outlook Add-ins for Business Automation: Use Cases & Examples",
//     slug: "outlook-addins-for-business-automation",
//     category: "Outlook Add-ins",
//     excerpt:
//       "Learn how Outlook add-ins help teams automate tasks, save time, and improve workflow efficiency.",
//     image: "/orange.png",
//     date: "June 20, 2024",
//     author: "WebCore Team",
//     readTime: "6 min read",
//     content: [
//       "Outlook add-ins are ideal for automation because they sit exactly where the user already works.",
//       "They can reduce switching between systems and make repetitive processes easier to manage.",
//     ],
//     toc: [
//       { id: "overview", label: "Overview" },
//       { id: "benefits", label: "Benefits" },
//       { id: "examples", label: "Examples" },
//     ],
//     tags: ["Outlook", "Automation", "Productivity"],
//   },
// ];

// const currentPost = posts[0];
// const relatedPosts = posts.slice(1);

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: currentPost.title,
//     description: currentPost.excerpt,
//     alternates: {
//       canonical: `/blog/${currentPost.slug}`,
//     },
//   };
// }

// function Sidebar() {
//   return (
//     <aside className="lg:sticky lg:top-4 h-fit space-y-6">
//       <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
//         <h3 className="text-base font-semibold text-slate-800">Search</h3>
//         <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
//           <Search className="h-4 w-4 shrink-0 text-slate-400" />
//           <input
//             type="text"
//             placeholder="Search articles..."
//             className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
//           />
//         </div>
//       </div>

//       <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
//         <h3 className="text-base font-semibold text-slate-800">Categories</h3>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {["Outlook Add-ins", "Excel Add-ins", "Word Add-ins", "Best Practices"].map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
//         <h3 className="text-base font-semibold text-slate-800">Popular Posts</h3>
//         <div className="mt-4 space-y-4">
//           {posts.map((post) => (
//             <Link
//               key={post.slug}
//               href={`/blog/${post.slug}`}
//               className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-slate-50"
//             >
//               <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
//                 <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
//               </div>
//               <div className="min-w-0">
//                 <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-800 group-hover:text-[#0062D6]">
//                   {post.title}
//                 </h4>
//                 <p className="mt-1 text-xs text-slate-500">{post.date}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="rounded-lg border border-slate-200 bg-linear-to-br from-[#0062D6] to-[#0B3C95] p-6 shadow-[0_10px_30px_rgba(0,98,214,0.2)]">
//         <div className="mb-2 flex items-center gap-2">
//           <h3 className="text-base font-semibold text-white">Need Help?</h3>
//           <MessageSquareText className="h-4 w-4 text-blue-100" />
//         </div>
//         <p className="text-sm leading-relaxed text-blue-100">
//           We build secure, scalable Office.js solutions tailored to your workflow.
//         </p>
//         <Link
//           href="/contact"
//           className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#0062D6] transition-all duration-300 hover:bg-blue-50"
//         >
//           Contact Our Experts
//           <ArrowRight className="h-4 w-4" />
//         </Link>
//       </div>
//     </aside>
//   );
// }

// export default function BlogDetailPage() {
//   const post = currentPost;

//   return (
//     <div className="min-h-screen bg-[#fbfcfe]">
//       <section className="relative overflow-hidden bg-white pt-20 pb-14">
//         <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
//         <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
//           <div className="mx-auto max-w-4xl text-center">
//             <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0062D6]">
//               {post.category}
//             </span>

//             <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
//               {post.title}
//             </h1>

//             <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-md">
//               {post.excerpt}
//             </p>

//             <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
//               <span className="inline-flex items-center gap-2">
//                 <UserRound className="h-4 w-4" />
//                 {post.author}
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <CalendarDays className="h-4 w-4" />
//                 {post.date}
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <Clock3 className="h-4 w-4" />
//                 {post.readTime}
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 pb-16 md:px-12">
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
//           <main className="min-w-0">
//             <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="h-70 w-full object-cover md:h-87.5"
//               />

//               <div className="p-6 md:p-10">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0062D6]">
//                     {post.category}
//                   </span>
//                   <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
//                     9 min read
//                   </span>
//                 </div>

//                 <div className="mt-8 space-y-5 text-[14px] leading-relaxed text-slate-700">
//                   {post.content.map((para, index) => (
//                     <p key={index}>{para}</p>
//                   ))}
//                 </div>

//                 <div className="mt-10 rounded-lg bg-slate-50 p-6">
//                   <h2 className="text-lg font-semibold text-slate-800">Table of Contents</h2>
//                   <div className="mt-4 space-y-3">
//                     {post.toc.map((item) => (
//                       <a
//                         key={item.id}
//                         href={`#${item.id}`}
//                         className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#0062D6]"
//                       >
//                         <ChevronRight className="h-4 w-4" />
//                         {item.label}
//                       </a>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mt-10 space-y-10">
//                   <section id="introduction">
//                     <h2 className="text-2xl font-semibold text-slate-800">Introduction</h2>
//                     <p className="mt-4 text-slate-700 leading-8">
//                       Salesforce and Outlook together can remove manual work from sales workflows and keep CRM data more complete.
//                     </p>
//                   </section>

//                   <section id="why-connect">
//                     <h2 className="text-2xl font-semibold text-slate-800">Why Connect Salesforce to Outlook?</h2>
//                     <ul className="mt-4 space-y-3 text-slate-700">
//                       {[
//                         "See account, contact, and opportunity context beside every email.",
//                         "Log emails to Salesforce in one click.",
//                         "Create leads and opportunities from the inbox.",
//                         "Keep forecasting and reporting accurate.",
//                       ].map((item) => (
//                         <li key={item} className="flex gap-3">
//                           <Sparkles className="mt-1 h-4 w-4 text-[#0062D6]" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </section>

//                   <section id="integration">
//                     <h2 className="text-2xl font-semibold text-slate-800">How the Integration Works</h2>
//                     <p className="mt-4 text-slate-700 leading-8">
//                       The add-in reads Outlook email context through Office.js, then calls your backend to fetch Salesforce data securely.
//                     </p>
//                   </section>

//                   <section id="sync">
//                     <h2 className="text-2xl font-semibold text-slate-800">What You Can Surface & Sync</h2>
//                     <div className="mt-4 grid gap-4 md:grid-cols-2">
//                       {[
//                         "Contacts and leads matched to the sender email.",
//                         "Accounts and open opportunities.",
//                         "Recent activity and timeline items.",
//                         "Cases and custom objects.",
//                       ].map((item) => (
//                         <div key={item} className="rounded-lg text-black  text-sm border border-slate-200 bg-white p-4 shadow-sm">
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                   </section>

//                   <section id="auth">
//                     <h2 className="text-2xl font-semibold text-slate-800">Authenticating with OAuth 2.0</h2>
//                     <p className="mt-4 text-slate-700 leading-8">
//                       Keep the Connected App secret on the server, exchange codes securely, and only return short-lived session tokens to the task pane.
//                     </p>
//                   </section>

//                   <section id="security">
//                     <h2 className="text-2xl font-semibold text-slate-800">Security & Best Practices</h2>
//                     <ul className="mt-4 space-y-3 text-slate-700">
//                       {[
//                         "Keep secrets and refresh tokens server-side only.",
//                         "Use narrow OAuth scopes.",
//                         "Encrypt tokens at rest.",
//                         "Validate every request.",
//                       ].map((item) => (
//                         <li key={item} className="flex gap-3">
//                           <Tag className="mt-1 h-4 w-4 text-[#0062D6]" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </section>
//                 </div>

//                 <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-8">
//                   <span className="text-sm font-semibold text-slate-800">Share:</span>
//                   <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 hover:border-[#0062D6]/30 hover:text-[#0062D6]">
//                     LinkedIn
//                   </button>
//                   <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 hover:border-[#0062D6]/30 hover:text-[#0062D6]">
//                     X
//                   </button>
//                   <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 hover:border-[#0062D6]/30 hover:text-[#0062D6]">
//                     Copy Link
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <section className="mt-14">
//               <div className="mb-6 flex items-end justify-between gap-4">
//                 <div>
//                   <h2 className="text-2xl font-semibold text-slate-800">Related Articles</h2>
//                   <p className="mt-2 text-sm text-slate-600">
//                     More posts that match this topic.
//                   </p>
//                 </div>
//                 <Link href="/blog" className="text-sm font-semibold text-[#0062D6] hover:underline">
//                   View all
//                 </Link>
//               </div>

//               <div className="grid gap-6 md:grid-cols-2">
//                 {relatedPosts.map((item) => (
//                   <Link
//                     key={item.slug}
//                     href={`/blog/${item.slug}`}
//                     className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
//                   >
//                     <div className="relative h-44">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
//                     </div>
//                     <div className="p-6">
//                       <span className="text-xs font-bold uppercase tracking-widest text-[#0062D6]">
//                         {item.category}
//                       </span>
//                       <h3 className="mt-2 text-xl font-semibold text-slate-800 group-hover:text-[#0062D6]">
//                         {item.title}
//                       </h3>
//                       <p className="mt-3 text-sm leading-relaxed text-slate-600">
//                         {item.excerpt}
//                       </p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </section>
//           </main>

//           <div className="">
//             <Sidebar />
//           </div>
//         </div>
//       </section>
//             <Footer />
      
//     </div>
//   );
// }


import type { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";

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

const posts: Post[] = [
  {
    title:
      "Integrate Salesforce with Outlook: A Custom Add-in for Contacts, Opportunities & Email Sync",
    slug: "integrate-salesforce-with-outlook-custom-addin",
    category: "Outlook Add-ins",
    excerpt:
      "Bring Salesforce into Outlook with a custom Office.js add-in — see account and opportunity context beside every email, log messages to the CRM, and create records without leaving the inbox.",
    image: "/orange.png",
    date: "July 12, 2026",
    author: "Ali Sher",
    readTime: "9 min read",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "Salesforce runs the pipeline; Outlook runs the day. Sales reps switch between the two constantly — reading an email, then hopping to Salesforce to check the account, log the conversation, or update an opportunity. Every one of those context switches is a small tax on selling time, and the honest truth is that a lot of activity never gets logged at all.",
          "A custom Outlook add-in closes that gap. It shows live Salesforce context right next to the message you’re reading, and lets you log the email or create a contact, lead, or opportunity without ever leaving the inbox. Salesforce ships its own add-in, but a custom one lets you match your objects, your fields, and your team’s exact workflow — which is where the real adoption comes from.",
        ],
      },
      {
        id: "why-connect",
        heading: "Why Connect Salesforce to Outlook?",
        bullets: [
          "See account, contact, and opportunity context beside every email — no tab switching.",
          "Log emails to the Salesforce timeline in one click, or automatically on send.",
          "Create leads, contacts, and opportunities from the inbox while the context is fresh.",
          "Keep the CRM complete so forecasts and pipeline reports are actually trustworthy.",
          "Tailor it to custom objects and fields the standard integration won’t touch.",
        ],
      },
      {
        id: "how-it-works",
        heading: "How the Integration Works",
        paragraphs: [
          "The add-in is an Office.js task pane that loads beside a message in Outlook on Windows, Mac, and the web. It reads the current email through Office.context.mailbox.item, then calls a backend service you host. That backend holds your Salesforce Connected App credentials, runs the OAuth 2.0 flow, and proxies requests to the Salesforce REST API — returning clean JSON the task pane renders.",
          "Salesforce exposes a mature REST API with SOQL queries and sObject endpoints for standard and custom objects. Connected Apps authenticate via OAuth 2.0, and API usage counts against your org’s daily limits — so cache lookups and batch writes.",
        ],
      },
      {
        id: "surface-sync",
        heading: "What You Can Surface & Sync",
        bullets: [
          "Contacts and leads matched to the sender’s email address.",
          "Accounts and their open opportunities, stage, and amount.",
          "Recent activity from the record’s timeline (emails, tasks, events).",
          "Cases and custom objects specific to your org.",
          "New records: create leads, contacts, opportunities, tasks, and log emails as activities.",
        ],
      },
      {
        id: "oauth",
        heading: "Authenticating with OAuth 2.0",
        paragraphs: [
          "Set up a Salesforce Connected App and use the OAuth 2.0 authorization-code flow. The user connects their Salesforce org once; your backend exchanges the code for access and refresh tokens and stores them securely. Kick the flow off from the add-in with the Office Dialog API.",
        ],
        type: "code",
        codeTitle: "taskpane.js",
        code: `// Open the Salesforce consent flow hosted by your backend, in an Office dialog.
Office.context.ui.displayDialogAsync(
  "https://your-backend.com/salesforce/connect",
  { height: 60, width: 40 },
  (result) => {
    const dialog = result.value;
    dialog.addEventHandler(Office.EventType.DialogMessageReceived, (arg) => {
      // Backend posts back a short-lived session token, NOT the Salesforce tokens.
      sessionStorage.setItem("sfSession", arg.message);
      dialog.close();
    });
  }
);`,
      },
      {
        id: "secret-server-side",
        heading: "Keep the consumer secret server-side",
        paragraphs: [
          "Your Connected App’s consumer secret and the real access/refresh tokens must never reach the add-in. The task pane should only hold a short-lived session token that authorises calls to your backend.",
        ],
      },
      {
        id: "email-context",
        heading: "Reading the Email Context",
        paragraphs: [
          "Start by reading the sender of the selected message — that email address is the key you’ll use to find the matching Salesforce record.",
        ],
        type: "code",
        codeTitle: "taskpane.js",
        code: `const item = Office.context.mailbox.item;
const senderEmail = item.from?.emailAddress; // e.g. "jane@acme.com"
const subject = item.subject;

// Pass senderEmail to your backend to find the matching contact or lead.`,
      },
      {
        id: "lookup",
        heading: "Looking Up a Salesforce Record",
        paragraphs: [
          "Your backend runs a SOQL query for the sender’s email and returns a tidy summary. Doing the query server-side keeps credentials safe and lets you shape exactly the fields the task pane needs.",
        ],
        type: "code",
        codeTitle: "salesforce.js",
        code: `async function findContact(email) {
  const token = sessionStorage.getItem("sfSession");
  const res = await fetch(
    \`https://your-backend.com/salesforce/contacts?email=\${encodeURIComponent(email)}\`,
    { headers: { Authorization: \`Bearer \${token}\` } }
  );
  if (res.status === 404) return null; // no match — offer to create a lead
  if (!res.ok) throw new Error("Salesforce lookup failed");
  return res.json(); // { name, account, opportunities: [...], recentActivity: [...] }
}

// On the backend, the query is roughly:
// SELECT Name, Account.Name FROM Contact WHERE Email = :email LIMIT 1`,
      },
      {
        id: "cache",
        heading: "Cache per conversation",
        paragraphs: [
          "Cache the lookup against the sender’s address for the life of the task pane. Reopening the same thread then feels instant and spares your Salesforce API limits.",
        ],
      },
      {
        id: "logging",
        heading: "Logging Emails & Creating Records",
        paragraphs: [
          "Logging an email creates a Task (an activity) linked to the contact and, optionally, an opportunity. Let the rep confirm, then post the message metadata to your backend, which writes it to Salesforce.",
        ],
        type: "code",
        codeTitle: "salesforce.js",
        code: `async function logEmail(whoId) {
  const item = Office.context.mailbox.item;
  const token = sessionStorage.getItem("sfSession");

  await fetch("https://your-backend.com/salesforce/tasks", {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${token}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      WhoId: whoId,
      Subject: item.subject,
      ActivityDate: new Date().toISOString().slice(0, 10),
      Status: "Completed",
    }),
  });
}

// Same pattern powers Create lead, Create opportunity, Add task.`,
      },
      {
        id: "event-automation",
        heading: "Event-Based Automation",
        paragraphs: [
          "With an event-based add-in you can react to OnMessageSend and offer — or automatically perform — email logging as the rep hits send, capturing outbound activity with zero manual steps. Keep the handler lightweight, call event.completed() promptly, and do the real work on your backend.",
        ],
      },
      {
        id: "api-limits",
        heading: "Respect API limits",
        paragraphs: [
          "Auto-logging every send plus live lookups can burn through Salesforce’s daily API allowance quickly. Debounce lookups, batch writes with the Composite API, and cache on your backend.",
        ],
      },
      {
        id: "security",
        heading: "Security & Best Practices",
        bullets: [
          "Keep the Connected App secret and OAuth tokens server-side only; encrypt them at rest.",
          "Request the narrowest OAuth scopes your features need, and respect Salesforce field-level security.",
          "Refresh access tokens on the server and handle session expiry transparently.",
          "Serve every endpoint over HTTPS and validate the add-in’s session token on each call.",
          "Sanitize CRM content before rendering it in the task pane to prevent injection.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "A Salesforce-in-Outlook add-in turns the inbox into a place where selling and record-keeping happen together: reps see the account they’re emailing, log activity in a click, and create records while the details are fresh — so the pipeline stays honest and the CRM stops being a chore. Start with contact context and one-click email logging, prove the workflow, then layer on opportunity creation and automation. If you want a secure, custom Salesforce add-in built around your org’s objects and process, we’d be glad to help.",
        ],
      },
    ],
    tags: ["Salesforce", "Outlook", "Office.js", "CRM", "API Integration", "Sales", "OAuth 2.0"],
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug) ?? posts[0];
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug) ?? posts[0];
  const relatedPosts = posts.filter((p) => p.slug !== post.slug);
  return <BlogDetailClient post={post} relatedPosts={relatedPosts} />;
}