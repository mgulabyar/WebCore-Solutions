"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f8fc] text-slate-900">
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_36%),radial-gradient(circle_at_bottom_right,#e0f2fe_0%,transparent_28%),linear-gradient(to_bottom,#ffffff_0%,#f7f8fc_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-50 mask-[radial-gradient(circle_at_center,black,transparent_78%)]" />
        <motion.div
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -14, 10, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -18, 12, 0],
            y: [0, 16, -10, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[18%] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"
        />
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-md sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]" />
            WebCore Solutions • Premium Web Development
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We Design{" "}
            <span className="bg-linear-to-r from-blue-600 via-cyan-500 to-sky-700 bg-clip-text text-transparent">
              Modern Web Experiences
            </span>{" "}
            That Feel Premium.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            We craft high-performance websites and web applications with elegant
            UI, smooth motion, and a clean visual system built for trust, speed,
            and growth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/55 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_35%)]" />
            <div className="relative grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Enterprise Applications",
                  desc: "Scalable systems with clean structure, fast performance, and modern UX.",
                },
                {
                  title: "Premium UI/UX",
                  desc: "Elegant interfaces with polished spacing, motion, and visual balance.",
                },
                {
                  title: "Motion-Driven Delivery",
                  desc: "Smooth interactions that make every page feel alive and high-end.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 h-10 w-10 rounded-2xl bg-blue-600/10" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
