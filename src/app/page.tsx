import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-500">
            Web Development • UI/UX • Scalable Solutions
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            We Build Modern Web Apps That Look Premium and Perform Fast.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            WebCore Solutions creates responsive, dynamic, and scalable web
            applications using Next.js, React, Tailwind CSS, and modern backend
            technologies for businesses that want a strong digital presence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Get a Free Consultation
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Custom Web Apps</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Fully responsive business solutions built for speed, scale, and
              user experience.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Modern UI Design</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Clean layouts, premium styling, and smooth visual flow with dark
              and light mode support.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Performance Focused</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Optimized for speed, SEO, and long-term maintainability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}