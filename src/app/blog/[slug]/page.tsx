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