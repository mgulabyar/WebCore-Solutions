"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projectsData";

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const easeOutExpo = [0.16, 1, 0.3, 1] as const;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOutExpo },
    },
  };

  useEffect(() => {
    if (!activeProject) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCarouselIndex(0);
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const id = window.setInterval(() => {
      setCarouselIndex((prev) =>
        prev === activeProject.images.length - 1 ? 0 : prev + 1,
      );
    }, 4500);
    return () => window.clearInterval(id);
  }, [activeProject]);

  const nextImage = () =>
    activeProject &&
    setCarouselIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1,
    );

  const prevImage = () =>
    activeProject &&
    setCarouselIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1,
    );

  const openPreview = (project: Project) => {
    setActiveProject(project);
    setCarouselIndex(0);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            My <span className="text-brand-orange">Portfolio</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            Selected projects across Google Add-ons, Office Add-ins, and web
            development — crafted with premium UI, automation, and
            high-performance engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project._id}
              variants={cardVariants}
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.35 } }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-black/30">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/15 to-transparent opacity-90" />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl font-black leading-tight text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#050816]/70 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  <button
                    onClick={() => openPreview(project)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </button>
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white"
                  >
                    Open Tab
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#02040c]/95 p-4 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="flex w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#050816]"
            >
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
                <h3 className="text-2xl font-black text-white md:text-4xl">
                  {activeProject.title}
                </h3>
                <button
                  onClick={() => setActiveProject(null)}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300"
                  aria-label="Close modal"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="grid flex-1 overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
                <div className="order-2 border-t border-white/5 p-6 lg:order-1 lg:border-t-0 lg:border-r">
                  <p className="max-h-[60vh] overflow-y-auto text-sm leading-relaxed text-slate-400">
                    {activeProject.description}
                  </p>
                </div>

                <div className="relative order-1 flex min-h-[420px] items-center justify-center overflow-hidden bg-black/35 p-4 lg:order-2">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={carouselIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: easeOutExpo }}
                      src={activeProject.images[carouselIndex]}
                      alt={`${activeProject.title} slide ${carouselIndex + 1}`}
                      className="max-h-[72vh] w-full rounded-2xl object-contain"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                    <button
                      onClick={prevImage}
                      className="rounded-full border border-white/10 bg-[#050816]/80 p-3 text-white"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="rounded-full border border-white/10 bg-[#050816]/80 p-3 text-white"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
