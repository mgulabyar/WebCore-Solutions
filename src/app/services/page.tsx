/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaMap, FaCode, FaRocket } from "react-icons/fa";
import {
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiGit,
} from "react-icons/si";
import Footer from "@/components/Footer";


const frontendSkills = [
  {
    name: "React.js",
    src: "/react.png",
    color: "#61DAFB",
    desc: "Component-driven interfaces built for speed and long-term maintainability.",
  },
  {
    name: "Next.js",
    src: "/nextjs.png",
    color: "#3B82F6",
    desc: "Server-rendered, SEO-optimized applications with blazing-fast page loads.",
  },
  {
    name: "Angular",
    src: "/angular.png",
    color: "#DD0031",
    desc: "Enterprise-grade single page applications with structured architecture.",
  },
  {
    name: "TypeScript",
    src: "/ts.png",
    color: "#3178C6",
    desc: "Type-safe codebases that catch errors early and scale confidently.",
  },
  {
    name: "Tailwind CSS",
    src: "/tailwind.png",
    color: "#06B6D4",
    desc: "Pixel-perfect, responsive designs with a utility-first workflow.",
  },
];

const backendSkills = [
  {
    name: "Node.js & Express",
    icon: SiNodedotjs,
    color: "#3C873A",
    desc: "Fast, event-driven APIs built for real-time, high-traffic applications.",
  },
  {
    name: "ASP.NET Core",
    icon: SiDotnet,
    color: "#512BD4",
    desc: "Secure, enterprise-grade backend systems with rock-solid performance.",
  },
  {
    name: "Python & Flask",
    icon: SiPython,
    color: "#3776AB",
    desc: "Lightweight services and AI-integration pipelines for rapid iteration.",
  },
  {
    name: "PHP & WordPress",
    icon: SiPhp,
    color: "#8993BE",
    desc: "Custom plugins and dynamic backend logic for content-driven platforms.",
  },
];

const databaseSkills = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    desc: "Flexible, document-based databases designed for scalable products.",
  },
  {
    name: "MySQL / SQL",
    icon: SiMysql,
    color: "#4479A1",
    desc: "Reliable relational databases with optimized, high-speed queries.",
  },
  {
    name: "MERN Stack",
    icon: SiExpress,
    color: "#E2E8F0",
    desc: "Full-stack MongoDB, Express, React & Node — end-to-end ownership.",
  },
  {
    name: "Git & Docker",
    icon: SiGit,
    color: "#F05032",
    desc: "Version-controlled, containerized workflows for smooth deploys.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We analyze your requirements and business goals to create a tailored solution.",
    icon: FaSearch,
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Detailed roadmap and architecture design with milestone definitions.",
    icon: FaMap,
  },
  {
    step: 3,
    title: "Development",
    description:
      "Agile development with regular updates and feedback integration.",
    icon: FaCode,
  },
  {
    step: 4,
    title: "Deployment",
    description:
      "Testing, deployment, and post-launch support for seamless go-live.",
    icon: FaRocket,
  },
];

/* ---------------- HERO ---------------- */

function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -100px 0px", threshold: 0.01 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const headline = "One Team. Every Layer of Your Stack.".split(" ");

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-28"
    >
      <style>{`
        @keyframes wc-blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }
        .wc-blob-1 { animation: wc-blob-move 14s ease-in-out infinite; }
        .wc-blob-2 { animation: wc-blob-move 18s ease-in-out infinite reverse; }
      `}</style>
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="wc-blob-1 absolute top-0 left-1/4 h-80 w-80 rounded-full bg-[#0076FF]/10 blur-3xl" />
      <div className="wc-blob-2 absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-300"
        >
          Our Technical Expertise
        </motion.span>

        <h1 className="mt-6 flex flex-wrap justify-center gap-x-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={
                isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={
                word === "Stack."
                  ? "bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                  : ""
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl mx-auto text-base text-neutral-400 leading-relaxed"
        >
          From pixel-perfect interfaces to resilient backend systems and
          well-structured databases — we own the full stack, so you deal with
          one team instead of three.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {["Frontend", "Backend", "Databases", "DevOps"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FRONTEND: Premium offset grid, PNG icons, rich motion ---------------- */

function FrontendSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -120px 0px", threshold: 0.15 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28"
    >
      <style>{`
        .fe-card {
          opacity: 0;
          will-change: transform, opacity, filter;
          transition:
            opacity 0.9s cubic-bezier(0.16,1,0.3,1),
            transform 1.05s cubic-bezier(0.16,1,0.3,1),
            filter 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .fe-from-left {
          transform: translateX(-140px) translateY(30px) rotate(-10deg) scale(0.8);
          filter: blur(6px);
        }
        .fe-from-right {
          transform: translateX(140px) translateY(30px) rotate(10deg) scale(0.8);
          filter: blur(6px);
        }
        .fe-card.fe-active {
          opacity: 1;
          transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          filter: blur(0px);
        }

        .fe-ring {
          position: absolute;
          inset: -6px;
          border-radius: 20px;
          border: 1.5px dashed var(--ring-color);
          opacity: 0;
          transform: rotate(0deg) scale(0.85);
          transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1);
        }
        .fe-card:hover .fe-ring {
          opacity: 0.55;
          transform: rotate(50deg) scale(1);
        }

        .fe-icon-wrap {
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
        }
        .fe-card:hover .fe-icon-wrap {
          transform: translateY(-4px) scale(1.12) rotate(-6deg);
          box-shadow: 0 12px 24px -8px var(--shadow-color);
        }

        .fe-underline {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.05s;
        }
        .fe-card:hover .fe-underline { transform: scaleX(1); }

        .fe-desc {
          opacity: 0;
          transform: translateY(6px);
          max-height: 0;
          overflow: hidden;
          transition: opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s, max-height 0.45s ease;
        }
        .fe-card:hover .fe-desc {
          opacity: 1;
          transform: translateY(0);
          max-height: 100px;
        }

        .fe-badge {
          transform: scale(0) rotate(-20deg);
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.1s;
        }
        .fe-card:hover .fe-badge { transform: scale(1) rotate(0deg); }

        @media (max-width: 1023px) {
          .fe-desc {
            opacity: 1;
            transform: translateY(0);
            max-height: 100px;
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            Frontend Development
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
            Interfaces People Love to Use
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            We build fast, responsive, and accessible user interfaces using the
            most in-demand frontend technologies of today.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {frontendSkills.map((skill, idx) => {
            const fromLeft = idx % 2 === 0;
            const offsetClass = idx % 2 === 1 ? "lg:mt-8" : "";
            return (
              <div
                key={skill.name}
                style={{
                  transitionDelay: isVisible ? `${idx * 130}ms` : "0ms",
                }}
                className={`fe-card ${fromLeft ? "fe-from-left" : "fe-from-right"} ${
                  isVisible ? "fe-active" : ""
                } ${offsetClass} group relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-[transform,box-shadow] duration-500`}
              >
                <span
                  className="fe-badge absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md z-10"
                  style={{ backgroundColor: skill.color }}
                >
                  {idx + 1}
                </span>

                <div className="relative mb-5">
                  <div
                    className="fe-ring"
                    style={{ ["--ring-color" as any]: skill.color }}
                  />
                  <div
                    className="fe-icon-wrap relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                    style={{
                      backgroundColor: `${skill.color}14`,
                      border: `1px solid ${skill.color}30`,
                      ["--shadow-color" as any]: `${skill.color}55`,
                    }}
                  >
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-base font-semibold text-slate-900">
                  {skill.name}
                </h3>
                <div
                  className="fe-underline h-0.5 w-8 my-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
                <p className="fe-desc text-sm text-slate-600 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BACKEND: Alternating full-width rows on dark bg ---------------- */

function BackendSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -120px 0px", threshold: 0.15 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0b1220] py-24"
    >
      <style>{`
        .be-row {
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
        }
        .be-from-left { transform: translateX(-160px) scale(0.9) skewX(3deg); }
        .be-from-right { transform: translateX(160px) scale(0.9) skewX(-3deg); }
        .be-row.be-active { opacity: 1; transform: translateX(0) scale(1) skewX(0deg); }

        .be-glow { transition: opacity 0.4s ease; opacity: 0; }
        .be-row:hover .be-glow { opacity: 1; }

        .be-icon-box { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .be-row:hover .be-icon-box { transform: scale(1.12) rotate(6deg); }
      `}</style>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
            Backend Development
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
            Systems That Never Let You Down
          </h2>
          <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
            Robust, secure, and scalable backend architecture powering
            everything behind the scenes.
          </p>
        </div>

        <div className="space-y-5">
          {backendSkills.map((skill, idx) => {
            const fromLeft = idx % 2 === 0;
            return (
              <div
                key={skill.name}
                style={{
                  transitionDelay: isVisible ? `${idx * 150}ms` : "0ms",
                }}
                className={`be-row ${fromLeft ? "be-from-left" : "be-from-right"} ${
                  isVisible ? "be-active" : ""
                } group relative flex items-center gap-5 rounded-2xl bg-white/[0.04] border border-white/10 p-6 overflow-hidden`}
              >
                <div
                  className="be-glow absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${fromLeft ? "0%" : "100%"} 50%, ${skill.color}22, transparent 60%)`,
                  }}
                />
                <div
                  className="be-icon-box relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${skill.color}1a`,
                    border: `1px solid ${skill.color}40`,
                  }}
                >
                  <skill.icon
                    className="h-7 w-7"
                    style={{ color: skill.color }}
                  />
                </div>
                <div className="relative">
                  <h3 className="text-base font-semibold text-white">
                    {skill.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DatabaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -120px 0px", threshold: 0.15 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-24"
    >
      <style>{`
        .db-card {
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
        }
        .db-from-left { transform: translateX(-110px) translateY(20px) rotate(-5deg); }
        .db-from-right { transform: translateX(110px) translateY(20px) rotate(5deg); }
        .db-card.db-active { opacity: 1; transform: translateX(0) translateY(0) rotate(0deg); }

        @keyframes db-pulse-ring {
          0% { box-shadow: 0 0 0 0 var(--pulse-color); }
          100% { box-shadow: 0 0 0 12px transparent; }
        }
        .db-card:hover .db-pulse { animation: db-pulse-ring 1.2s ease-out infinite; }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            Database & Other Skills
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
            Data, Handled the Right Way
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            From flexible NoSQL databases to structured relational systems and
            modern development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {databaseSkills.map((skill, idx) => {
            const fromLeft = idx % 2 === 0;
            return (
              <div
                key={skill.name}
                style={{
                  transitionDelay: isVisible ? `${idx * 130}ms` : "0ms",
                }}
                className={`db-card ${fromLeft ? "db-from-left" : "db-from-right"} ${
                  isVisible ? "db-active" : ""
                } group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-[transform,box-shadow] duration-500`}
              >
                <div
                  className="db-pulse flex h-14 w-14 items-center justify-center rounded-2xl mb-5"
                  style={{
                    backgroundColor: `${skill.color}14`,
                    border: `1px solid ${skill.color}35`,
                    ["--pulse-color" as any]: `${skill.color}55`,
                  }}
                >
                  <skill.icon
                    className="h-6 w-6"
                    style={{ color: skill.color }}
                  />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {skill.name}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -100px 0px", threshold: 0.15 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#f8fafc] py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
            How We Work
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 mx-auto">
            A proven methodology that ensures quality and timely delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
            >
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-[38px] left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-base font-bold shadow-lg shadow-blue-500/20">
                  {step.step}
                </div>
                <step.icon className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <FrontendSection />
      <BackendSection />
      <DatabaseSection />
      <ProcessSection />
      <Footer />
    </div>
  );
}
