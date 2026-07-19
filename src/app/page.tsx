"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "Enterprise Applications",
    desc: "Scalable dashboards, client portals, and business systems built for speed and reliability.",
  },
  {
    title: "Premium UI/UX Design",
    desc: "Clean, modern interfaces with polished motion and a strong visual hierarchy.",
  },
  {
    title: "Cloud & Performance",
    desc: "Fast delivery, optimized workflows, and robust frontend architecture for real-world scale.",
  },
];

const services = [
  "Web Development",
  "Next.js Solutions",
  "UI/UX Systems",
  "Motion Design",
  "API Integration",
  "Performance Optimization",
  "Cloud Deployment",
  "Business Automation",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f7f9ff] text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_28%),radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.20),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_30%),linear-gradient(to_bottom,#ffffff_0%,#f7f9ff_55%,#eef4ff_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

        <motion.div
          animate={{ x: [0, 24, -18, 0], y: [0, -16, 10, 0], scale: [1, 1.08, 0.98, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 14, 0], y: [0, 18, -12, 0], scale: [1, 0.96, 1.04, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[6%] top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 18, -12, 0], y: [0, -12, 14, 0], scale: [1, 1.04, 0.98, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-28 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl"
        />
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14 } },
          }}
          className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <div className="absolute left-1/2 top-10 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-blue-300/35 shadow-[0_0_140px_rgba(37,99,235,0.18)]" />
          <div className="absolute left-1/2 top-20 -z-20 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-300/10 to-transparent blur-3xl" />

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-md sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]" />
            WebCore Solutions • Premium Web Development
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We Design{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-700 bg-clip-text text-transparent">
              Modern Web Experiences
            </span>{" "}
            That Feel Premium.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            We craft high-performance websites and web applications with clean
            UI, smooth motion, and a strong digital system built for trust,
            speed, and growth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get a Free Consultation
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
            >
              Explore Portfolio
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/65 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_35%)]" />
            <div className="relative grid gap-4 md:grid-cols-3">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
                >
                  <div className="mb-4 h-10 w-10 rounded-2xl bg-blue-600/10" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="border-y border-slate-200/70 bg-white/45 py-12 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "100%", label: "Performance Focus" },
              { value: "50+", label: "Systems Delivered" },
              { value: "4.8x", label: "Workflow Speedup" },
              { value: "24/7", label: "Monitoring Ready" },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white/70 p-5 text-center shadow-sm">
                <p className="text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Our Technical Expertise
          </h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            We build more than interfaces. We create scalable digital products
            with strong architecture, motion, and business clarity.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)]"
            >
              <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-600/15 to-cyan-500/15 transition group-hover:from-blue-600 group-hover:to-cyan-500" />
              <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-blue-700">
                {item}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                High-end digital solution built with clean code, reliable UX, and
                scalable execution.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}