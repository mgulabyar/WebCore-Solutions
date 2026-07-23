/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projectsData";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All Portfolio");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const easeOutExpo = [0.16, 1, 0.3, 1] as const;

  const filterItems = [
    "All Portfolio",
    "Office Add-ins",
    "Google Add-ons",
    "Web Development",
    "Word Add-ins",
    "Excel Add-ins",
    "PowerPoint Add-ins",
    "Outlook Add-ins",
    "Gmail Add-ons",
    "Google Sheet Add-ons",
    "Google Docs Add-ons",
    "Google Form Add-ons",
  ];

  const filteredProjects =
    selectedFilter === "All Portfolio"
      ? projects
      : projects.filter(
          (p) => p.category === selectedFilter || p.subType === selectedFilter
        );

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const gridObserver = new IntersectionObserver(
      ([entry]) => setIsGridVisible(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (gridRef.current) gridObserver.observe(gridRef.current);
    return () => {
      headerObserver.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCarouselIndex(0);
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const id = window.setInterval(() => {
      setCarouselIndex((prev) =>
        prev === activeProject.images.length - 1 ? 0 : prev + 1
      );
    }, 4500);
    return () => window.clearInterval(id);
  }, [activeProject]);

  const nextImage = () =>
    activeProject &&
    setCarouselIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );

  const prevImage = () =>
    activeProject &&
    setCarouselIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );

  const openPreview = (project: Project) => {
    setActiveProject(project);
    setCarouselIndex(0);
  };

  return (
    <>
    <section className="relative min-h-screen overflow-hidden bg-[#fbfcfe] pt-12 pb-12">
      <style>{`
        .pf-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
        }
        @keyframes pf-blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.08); }
          66% { transform: translate(-20px, 15px) scale(0.94); }
        }
        .pf-blob-1 { animation: pf-blob-move 16s ease-in-out infinite; }
        .pf-blob-2 { animation: pf-blob-move 20s ease-in-out infinite reverse; }

        .pf-card {
          opacity: 0;
          transform: translateY(70px) scale(0.94);
          filter: blur(6px);
          transition:
            opacity 0.9s cubic-bezier(0.16,1,0.3,1),
            transform 1s cubic-bezier(0.16,1,0.3,1),
            filter 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .pf-card.pf-active {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0px);
        }

        .pf-card-inner {
          position: relative;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .pf-card-inner:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px -12px rgba(0, 98, 214, 0.25);
        }
        .pf-glow-border {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.5px;
          background: linear-gradient(135deg, #0062D6, #38BDF8, #0062D6);
          background-size: 200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 20;
        }
        .pf-card-inner:hover .pf-glow-border {
          opacity: 1;
          animation: pf-border-flow 3s linear infinite;
        }
        @keyframes pf-border-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .pf-img {
          transition: transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .pf-card-inner:hover .pf-img {
          transform: scale(1.1);
        }
        .pf-shine {
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(115deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          transition: left 0.9s cubic-bezier(0.16,1,0.3,1);
          z-index: 10;
        }
        .pf-card-inner:hover .pf-shine {
          left: 130%;
        }

        .pf-overlay {
          opacity: 0;
          transition: opacity 0.45s ease;
        }
        .pf-card-inner:hover .pf-overlay {
          opacity: 1;
        }
        .pf-btn {
          transform: translateY(18px) scale(0.9);
          opacity: 0;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease;
        }
        .pf-card-inner:hover .pf-btn {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        .pf-card-inner:hover .pf-btn-1 { transition-delay: 0.08s; }
        .pf-card-inner:hover .pf-btn-2 { transition-delay: 0.16s; }

        .pf-title-accent {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s;
        }
        .pf-card-inner:hover .pf-title-accent {
          transform: scaleX(1);
        }

        .pf-filter-btn {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }
        .pf-filter-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>



      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div
          ref={headerRef}
          className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-5 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
            className="text-4xl font-semibold tracking-tight text-slate-800 md:text-4xl"
          >
            My Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            className="max-w-2xl text-sm text-slate-600 md:text-base"
          >
            From custom Office add-ins and Google add-ons to high-performance
            web ecosystems built with Python, Next.js, and the MERN stack.
            Explore how I transform complex ideas into scalable, automated
            digital solutions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-12 flex max-w-5xl flex-wrap items-center justify-center gap-2.5 py-6"
        >
          {filterItems.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`pf-filter-btn rounded-full border px-5 py-2 text-[12px] font-bold uppercase tracking-wide transition-colors duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? "bg-[#0062D6] border-[#0062D6] text-white"
                  : "bg-transparent border-slate-200 text-slate-500 hover:border-[#0062D6]/40 hover:text-[#0062D6]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project._id}
              style={{
                transitionDelay: isGridVisible ? `${idx * 120}ms` : "0ms",
              }}
              className={`pf-card ${isGridVisible ? "pf-active" : ""}`}
            >
              <article className="pf-card-inner overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
                <div className="pf-glow-border" />

                <div className="relative aspect-20/9 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="pf-img h-full w-full object-cover"
                  />
                  <div className="pf-shine" />

                  <div className="pf-overlay absolute inset-0 flex items-center justify-center gap-3 bg-[#0B1220]/70 backdrop-blur-sm">
                    <button
                      onClick={() => openPreview(project)}
                      className="pf-btn pf-btn-1 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white/20 transition-colors duration-300"
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>

                    <Link
                      href={`/projects-detail/${project._id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="pf-btn pf-btn-2 inline-flex items-center gap-2 rounded-full bg-[#0062D6] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#0B3C95] transition-colors duration-300"
                    >
                      Open Tab
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="relative bg-[#0B1220] flex flex-col items-center justify-center px-5 py-4">
                  <div className="pf-title-accent absolute left-0 top-0 h-0.5 w-full bg-linear-to-r from-[#0062D6] to-cyan-400" />
                  <h3 className="text-base font-semibold text-white md:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-400 md:text-sm">
                    {project.category}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-200 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="flex w-full max-w-7xl flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <h3 className="text-2xl font-semibold text-slate-800 md:text-3xl">
                  {activeProject.title}
                </h3>
                <button
                  onClick={() => setActiveProject(null)}
                  className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid flex-1 overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
                <div className="order-2 border-t border-slate-100 p-6 lg:order-1 lg:border-t-0 lg:border-r">
                  <h4 className="text-xl font-semibold text-slate-900 mb-6">
                    {activeProject.tagline}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base font-light mb-8">
                    {activeProject.description}
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4">
                      Skills and deliverables
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full transition-colors duration-300 hover:border-[#0062D6]/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative order-1 flex min-h-105 items-center justify-center overflow-hidden bg-slate-50 p-4 lg:order-2">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={carouselIndex}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.5, ease: easeOutExpo }}
                      src={activeProject.images[carouselIndex]}
                      alt={`${activeProject.title} slide ${carouselIndex + 1}`}
                      className="max-h-[72vh] w-full rounded-2xl object-contain shadow-lg"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                    <button
                      onClick={prevImage}
                      className="rounded-full border border-slate-200 bg-white/90 p-2.5 text-slate-700 shadow-md hover:bg-white transition-colors duration-300"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="rounded-full border border-slate-200 bg-white/90 p-2.5 text-slate-700 shadow-md hover:bg-white transition-colors duration-300"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {activeProject.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === carouselIndex
                            ? "w-6 bg-[#0062D6]"
                            : "w-1.5 bg-slate-300"
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
    <Footer/>
    </>
  );
}