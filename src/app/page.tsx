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

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @keyframes drift1 {
          0% { transform: translate3d(0,0,0) scale(1); }
          25% { transform: translate3d(40px,-30px,0) scale(1.08); }
          50% { transform: translate3d(-20px,20px,0) scale(0.96); }
          75% { transform: translate3d(30px,35px,0) scale(1.04); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes drift2 {
          0% { transform: translate3d(0,0,0) scale(1); }
          25% { transform: translate3d(-30px,25px,0) scale(0.96); }
          50% { transform: translate3d(25px,-35px,0) scale(1.06); }
          75% { transform: translate3d(-10px,20px,0) scale(1); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes drift3 {
          0% { transform: translate3d(0,0,0) scale(1); }
          25% { transform: translate3d(20px,30px,0) scale(1.05); }
          50% { transform: translate3d(-35px,-20px,0) scale(0.98); }
          75% { transform: translate3d(15px,-25px,0) scale(1.08); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes floatX {
          0%,100% { transform: translateX(0px); }
          50% { transform: translateX(18px); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 80px 80px; }
        }
      `}</style>

      <main className="relative min-h-screen overflow-x-hidden bg-[#f7f9ff] text-slate-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_25%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.24),transparent_18%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.16),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_28%),linear-gradient(to_bottom,#ffffff_0%,#f7f9ff_45%,#eef4ff_100%)]" />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              animation: "gridMove 28s linear infinite",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, transparent 76%)",
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 76%)",
            }}
          />

          <div
            className="absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
            style={{ animation: "drift1 18s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[6%] top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
            style={{ animation: "drift2 22s ease-in-out infinite" }}
          />
          <div
            className="absolute right-[8%] top-28 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl"
            style={{ animation: "drift3 24s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-[-80px] left-1/4 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl"
            style={{ animation: "floatY 10s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-24 right-1/4 h-56 w-56 rounded-full bg-white/60 blur-3xl"
            style={{ animation: "floatX 14s ease-in-out infinite" }}
          />
        </div>

        <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute left-1/2 top-12 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-blue-300/35 bg-white/20 shadow-[0_0_160px_rgba(37,99,235,0.18)] backdrop-blur-3xl" />
          <div className="absolute left-1/2 top-24 -z-20 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-300/10 to-transparent blur-3xl" />

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.14 } },
            }}
            className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
          >
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
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
      </main>
    </>
  );
}