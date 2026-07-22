"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  ArrowRight, ExternalLink, Star, Zap, Shield, Palette, Code2, Layers3 } from "lucide-react";
import Footer from "@/components/Footer";

const portfolioSkills = [
  { name: "Next.js", icon: Code2, color: "#111827" },
  { name: "Framer Motion", icon: Zap, color: "#7c3aed" },
  { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
  { name: "UI Systems", icon: Layers3, color: "#2563eb" },
  { name: "Performance", icon: Shield, color: "#10b981" },
  { name: "Premium UX", icon: Star, color: "#f59e0b" },
];

const portfolioSlides = [
  {
    title: "Elite SaaS Dashboard",
    category: "UI / UX • Dashboard",
    image: "/portfolio-1.jpg",
    accent: "#3B82F6",
    desc: "A refined analytics experience with real-time KPIs, layered motion, and a high-end editorial layout.",
  },
  {
    title: "Agency Landing System",
    category: "Brand • Conversion",
    image: "/portfolio-2.jpg",
    accent: "#7C3AED",
    desc: "A premium landing flow with strong visual hierarchy, soft motion, and polished client conversion cues.",
  },
  {
    title: "Developer Portfolio",
    category: "Personal Brand",
    image: "/portfolio-3.jpg",
    accent: "#06B6D4",
    desc: "A cinematic portfolio interface crafted for storytelling, technical trust, and elegant interaction.",
  },
  {
    title: "E-Commerce Experience",
    category: "Product • Commerce",
    image: "/portfolio-4.jpg",
    accent: "#10B981",
    desc: "A clean shopping journey with luxurious spacing, smooth transitions, and conversion-focused design.",
  },
];

const featuredProjects = [
  {
    title: "Nexa Finance",
    tag: "Fintech Platform",
    year: "2026",
    metric: "42% faster checkout",
  },
  {
    title: "Studio Vertex",
    tag: "Creative Agency",
    year: "2026",
    metric: "3x more leads",
  },
  {
    title: "Orbit Commerce",
    tag: "Online Store",
    year: "2025",
    metric: "Premium UX revamp",
  },
];

function PortfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -100px 0px", threshold: 0.05 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % portfolioSlides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const slide = portfolioSlides[active];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#050816] py-24"
    >
      <style>{`
        .pf-grid {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0);
          background-size: 28px 28px;
        }

        .pf-card {
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.5s ease, opacity 0.5s ease;
        }

        .pf-card:hover {
          transform: translateY(-8px);
        }

        .pf-fade {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(6px);
          transition: all 0.8s cubic-bezier(0.16,1,0.3,1);
        }

        .pf-fade.pf-show {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }

        .pf-chip {
          transition: transform 0.35s ease, background-color 0.35s ease, border-color 0.35s ease;
        }

        .pf-chip:hover {
          transform: translateY(-2px);
        }

        @keyframes pf-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .pf-float {
          animation: pf-float 6s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 pf-grid opacity-[0.12]" />
      <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300"
            >
              Portfolio Showcase
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Designing premium digital experiences with
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                {" "}strategy, polish, and motion.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400"
            >
              I build elevated portfolio and product interfaces that feel premium, communicate trust instantly, and guide users through a refined visual story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {portfolioSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="pf-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-neutral-200"
                  style={{
                    boxShadow: `0 0 0 1px ${skill.color}18 inset`,
                  }}
                >
                  <skill.icon className="h-3.5 w-3.5" style={{ color: skill.color }} />
                  {skill.name}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Let’s Talk
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl pf-float" />
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl pf-float" />

            <div className="pf-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Featured Work
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {slide.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {portfolioSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === active ? "w-8 bg-white" : "w-2.5 bg-white/30"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={slide.image}
                      src={slide.image}
                      alt={slide.title}
                      initial={{ opacity: 0, scale: 1.05, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -10 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="h-[420px] w-full object-cover"
                    />
                  </AnimatePresence>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, transparent 55%, ${slide.accent}20 100%)`,
                    }}
                  />
                </div>

                <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#0b1020] p-5">
                  <div>
                    <span
                      className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                      style={{
                        color: slide.accent,
                        backgroundColor: `${slide.accent}14`,
                      }}
                    >
                      {slide.category}
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                      {slide.desc}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {["Elegant motion", "High contrast UI", "Premium storytelling"].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: slide.accent }}
                        />
                        {item}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setActive((prev) => (prev + 1) % portfolioSlides.length)}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                  >
                    Next Slide
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -100px 0px", threshold: 0.1 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Projects built for clarity, trust, and conversion
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                {project.year}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{project.tag}</p>
              <div className="mt-6 h-px w-full bg-slate-200" />
              <p className="mt-5 text-sm font-medium text-slate-700">
                {project.metric}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <PortfolioHero />
      <ProjectsSection />
      <Footer />
    </div>
  );
}