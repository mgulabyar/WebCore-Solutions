"use client";

import Link from "next/link";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  "Web Applications",
  "Business Websites",
  "Dashboard Systems",
  "Brand Platforms",
];

function AnimatedCount({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );
  const initialValue = decimals > 0 ? `0.${"0".repeat(decimals)}` : "0";
  const [displayValue, setDisplayValue] = useState(initialValue);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const unsubscribe = rounded.on("change", setDisplayValue);
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.8, ease: "easeOut" });
    }
  }, [count, inView, value]);

  return (
    <motion.span ref={ref}>
      {displayValue}
      {suffix}
    </motion.span>
  );
}

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @keyframes bgFloat1 {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(25px,-18px,0) scale(1.05); }
        }
        @keyframes bgFloat2 {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-20px,22px,0) scale(0.96); }
        }
        @keyframes bgGrid {
          0% { background-position: 0 0; }
          100% { background-position: 80px 80px; }
        }
      `}</style>

      <main className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff_0%,#f8fafc_50%,#eef4ff_100%)]" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              animation: "bgGrid 30s linear infinite",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, transparent 78%)",
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 78%)",
            }}
          />
          <div
            className="absolute left-1/2 top-20 h-112 w-md -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
            style={{ animation: "bgFloat1 16s ease-in-out infinite" }}
          />
          <div
            className="absolute -right-16 top-32 h-96 w-[24rem] rounded-full bg-cyan-400/10 blur-3xl"
            style={{ animation: "bgFloat2 20s ease-in-out infinite" }}
          />
        </div>

        <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl"
            >
              <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                WebCore Solutions
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                We build modern digital products for growing businesses.
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                We design and develop fast, reliable, and professional websites
                that help companies build trust, generate leads, and scale with
                confidence.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  View Work
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Project Overview
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold text-slate-900">
                      Digital Growth Dashboard
                    </h2>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Active Users</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      <AnimatedCount value={12.4} decimals={1} />k
                    </p>
                    <p className="mt-2 text-sm text-emerald-600">+18% this month</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Conversion Rate</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      <AnimatedCount value={8.9} decimals={1} />%
                    </p>
                    <p className="mt-2 text-sm text-emerald-600">+2.1% improvement</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Client Rating</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      <AnimatedCount value={4.9} decimals={1} />
                    </p>
                    <p className="mt-2 text-sm text-slate-500">out of 5</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Success Score</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      <AnimatedCount value={9} />
                      <span className="text-lg text-slate-500">/10</span>
                    </p>
                    <p className="mt-2 text-sm text-slate-500">project quality index</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="text-sm text-slate-300">Strategy Focus</p>
                  <p className="mt-2 text-lg font-semibold">
                    Clean design, faster systems, better business results.
                  </p>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 w-3/4 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-200/70 bg-white/60 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
            {[
              { value: 50, suffix: "+", label: "Projects Delivered" },
              { value: 4.9, suffix: "", label: "Client Rating", decimals: 1 },
              { value: 9, suffix: "/10", label: "Success Score" },
              { value: 24, suffix: "/7", label: "Support & Maintenance" },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ].map((stat: any) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-slate-900">
                  <AnimatedCount value={stat.value} decimals={stat.decimals ?? 0} />
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}