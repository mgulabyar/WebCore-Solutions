"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "@/components/Footer";

const innerOrbitItems = [
  { src: "/mongo-db.png", title: "MongoDB", angle: 0 },
  { src: "/expressjs.png", title: "Express.js", angle: 90 },
  { src: "/react.png", title: "React", angle: 180 },
  { src: "/nodejs.png", title: "Node.js", angle: 270 },
];

const outerOrbitItems = [
  { src: "/nextjs.png", title: "Next.js", angle: 0 },
  { src: "/angular.png", title: "Angular", angle: 45 },
  { src: "/asp.net.png", title: "ASP.NET", angle: 90 },
  { src: "/c-sharp.png", title: "C#", angle: 135 },
  { src: "/tailwind.png", title: "Tailwind", angle: 180 },
  { src: "/c++.png", title: "C++", angle: 225 },
  { src: "/js.png", title: "JavaScript", angle: 270 },
  { src: "/ts.png", title: "TypeScript", angle: 315 },
  { src: "/python.png", title: "Python", angle: 360 },
];

function OrbitGroup({
  items,
  radius,
  reverse,
  duration,
  iconSize,
  isMobile,
}: {
  items: { src: string; title: string; angle: number }[];
  radius: number;
  reverse?: boolean;
  duration: number;
  iconSize: number;
  isMobile?: boolean;
}) {
  const spinClass = reverse ? "orbit-reverse" : "orbit-forward";

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full"
      style={{ animationDuration: `${duration}s` }}
    >
      {items.map((item, index) => {
        const radian = (item.angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        return (
          <div
            key={`${item.title}-${index}`}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            }}
          >
            <div
              className={`flex items-center justify-center rounded-full border border-slate-100 bg-white/95 shadow-[0_6px_16px_rgba(15,23,42,0.06)] backdrop-blur-sm ${spinClass}`}
              style={{ width: iconSize, height: iconSize }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={isMobile ? iconSize - 12 : iconSize - 18}
                height={isMobile ? iconSize - 12 : iconSize - 18}
                className="object-contain pointer-events-none select-none max-w-[72%] max-h-[72%]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent)
                    parent.innerHTML = `<span class="text-slate-800 font-bold text-[10px] sm:text-xs">${item.title.substring(
                      0,
                      2,
                    )}</span>`;
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const metricsDataset = [
  {
    id: "metric-1",
    targetValue: 250,
    suffix: "+",
    decimals: 0,
    title: "Projects Shipped",
    desc: "Robust production modules deployed worldwide.",
    iconType: "shipped-box",
    direction: "right",
  },
  {
    id: "metric-2",
    targetValue: 4.9,
    suffix: "",
    decimals: 1,
    title: "Client Rating",
    desc: "Top-tier global client engineering feedback.",
    iconType: "rating-star",
    direction: "left",
  },
  {
    id: "metric-3",
    targetValue: 10,
    suffix: "x",
    decimals: 0,
    title: "Deployment Speed",
    desc: "Accelerated cloud integration data pipelines.",
    iconType: "speed-pulse",
    direction: "right",
  },
  {
    id: "metric-4",
    targetValue: 99.9,
    suffix: "%",
    decimals: 1,
    title: "System Uptime",
    desc: "Enterprise SLA guaranteed architecture matrix.",
    iconType: "uptime-shield",
    direction: "left",
  },
];

function AnimatedCount({
  value,
  suffix,
  decimals,
}: {
  value: number;
  suffix: string;
  decimals: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.05 });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString(),
  );

  const [displayValue, setDisplayValue] = useState(
    decimals > 0 ? `0.${"0".repeat(decimals)}` : "0",
  );

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.2, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, count, value]);

  return (
    <span ref={nodeRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

function PremiumMetricIcon({ type }: { type: string }) {
  if (type === "uptime-shield") {
    return (
      <svg
        className="w-5 h-5 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    );
  }

  if (type === "rating-star") {
    return (
      <svg
        className="w-5 h-5 text-amber-500 fill-amber-400/5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499c.15-.426.79-.426.94 0l1.84 5.22a.5.5 0 00.476.342h5.518c.452 0 .639.578.28.821l-4.464 3.012a.5.5 0 00-.181.563l1.681 5.21c.143.444-.37.817-.745.541l-4.465-3.013a.5.5 0 00-.582 0l-4.465 3.013c-.374.276-.888-.097-.745-.541l1.681-5.21a.5.5 0 00-.181-.563L3.54 9.882c-.359-.243-.171-.821.28-.821h5.518a.5.5 0 00.476-.342l1.84-5.22z"
        />
      </svg>
    );
  }

  if (type === "shipped-box") {
    return (
      <svg
        className="w-5 h-5 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    );
  }

  return (
    <svg
      className="w-5 h-5 text-emerald-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function PerformanceMetricsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px", threshold: 0.01 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className=" w-full bg-[#fbfcfe] pb-20 pt-10 px-6 md:px-16 flex flex-col justify-center items-center overflow-hidden font-sans select-none relative"
    >
      <style jsx>{`
        .hardware-slide-card {
          opacity: 0;
          will-change: transform, opacity;
          transition:
            transform 1.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 1.2s ease-out;
        }
        .direction-left {
          transform: translateX(calc(-50vw - 120%));
        }
        .direction-right {
          transform: translateX(calc(50vw + 120%));
        }
        .hardware-slide-card.slide-active {
          opacity: 1;
          transform: translateX(0);
        }

        .border-glow-path {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          transition: stroke-dashoffset 1.75s cubic-bezier(0.25, 1, 0.2, 1);
        }

        .group:hover .border-glow-path {
          stroke-dashoffset: 0;
        }
      `}</style>

      <div className="text-center mb-16 max-w-xl relative z-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 block">
          Proven Performance
        </span>
        <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2 sm:text-4xl">
          Engineered for Scale & Reliability
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full relative z-10">
        {metricsDataset.map((card, idx) => (
          <div
            key={card.id}
            style={{
              transitionDelay: hasTriggered ? `${idx * 160}ms` : "0ms",
            }}
            className={`hardware-slide-card ${
              card.direction === "left" ? "direction-left" : "direction-right"
            } ${
              hasTriggered ? "slide-active" : ""
            } flex flex-col items-start rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.015)] relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(15,23,42,0.04)] group cursor-pointer w-full`}
          >
            <span className="absolute left-0 top-0 bottom-0 w-0.75 bg-blue-500 rounded-l-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-30" />

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              fill="none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
            >
              <path
                className="border-glow-path"
                d="M 0,0 L 100,0 L 100,100"
                stroke="url(#blue-laser-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="blue-laser-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/60 p-2.5 transition-all duration-300 group-hover:bg-slate-50 group-hover:shadow-inner">
              <PremiumMetricIcon type={card.iconType} />
            </div>

            <span className="text-3xl font-medium tracking-tight text-slate-800 mt-5 group-hover:text-blue-700 transition-colors duration-200">
              <AnimatedCount
                value={card.targetValue}
                suffix={card.suffix}
                decimals={card.decimals}
              />
            </span>

            <h3 className="text-sm font-semibold text-slate-700 tracking-tight mt-1.5">
              {card.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-400 mt-1 max-w-52.5">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "United States",
    rating: 5,
    text: "Outstanding work on our platform. The architecture is clean, scalable, and performs flawlessly under load.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    location: "United Kingdom",
    rating: 5,
    text: "They transformed our vision into reality, delivered on time, and communication throughout was perfect.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Spain",
    rating: 5,
    text: "Attention to detail and technical excellence is unmatched. Our users genuinely love the smooth experience.",
  },
  {
    id: 4,
    name: "David Park",
    location: "South Korea",
    rating: 5,
    text: "Exceptional technical expertise and project management. They delivered well beyond our expectations.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    location: "Canada",
    rating: 5,
    text: "Best development team we have worked with - professional, responsive, and technically brilliant.",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    location: "UAE",
    rating: 5,
    text: "Incredible work on our financial platform. Security, performance, and UX all exceeded expectations.",
  },
  {
    id: 7,
    name: "Jennifer Lee",
    location: "Singapore",
    rating: 5,
    text: "They built our entire learning platform from scratch - a seamless, intuitive experience for students.",
  },
  {
    id: 8,
    name: "Robert Martinez",
    location: "Australia",
    rating: 5,
    text: "Their platform solution is world-class - compliant, fast, and remarkably user-friendly throughout.",
  },
];

function TestimonialsSection() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = testimonials.length;
  const cloneCount = cardsPerView;

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const [trackIndex, setTrackIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [prevCloneCount, setPrevCloneCount] = useState(cloneCount);

  if (cloneCount !== prevCloneCount) {
    setPrevCloneCount(cloneCount);
    setTrackIndex(cloneCount);
    setIsTransitioning(false);
  }

  const extended = [
    ...testimonials.slice(totalSlides - cloneCount, totalSlides),
    ...testimonials,
    ...testimonials.slice(0, cloneCount),
  ];

  const goTo = useCallback((direction: 1 | -1) => {
    setIsTransitioning(true);
    setTrackIndex((prev) => prev + direction);
  }, []);

  const nextSlide = useCallback(() => goTo(1), [goTo]);
  const prevSlide = useCallback(() => goTo(-1), [goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const real =
      (((trackIndex - cloneCount) % totalSlides) + totalSlides) % totalSlides;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(real);
  }, [trackIndex, cloneCount, totalSlides]);

  const handleTransitionEnd = () => {
    if (trackIndex >= cloneCount + totalSlides) {
      setIsTransitioning(false);
      setTrackIndex(trackIndex - totalSlides);
    } else if (trackIndex < cloneCount) {
      setIsTransitioning(false);
      setTrackIndex(trackIndex + totalSlides);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsTransitioning(true)),
      );
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  const cardPercent = 100 / cardsPerView;

  const goToReal = (realIdx: number) => {
    setIsTransitioning(true);
    setTrackIndex(cloneCount + realIdx);
  };

  const centerTrackPos = trackIndex + Math.floor(cardsPerView / 2);

  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] py-5">
      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Client Testimonials
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden py-6">
            <div
              className="flex items-center"
              style={{
                transform: `translateX(-${trackIndex * cardPercent}%)`,
                transition: isTransitioning
                  ? "transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extended.map((t, idx) => {
                const isCenter = idx === centerTrackPos && cardsPerView === 3;
                return (
                  <div
                    key={`${t.id}-${idx}`}
                    className="shrink-0 px-3"
                    style={{ flex: `0 0 ${cardPercent}%` }}
                  >
                    <div
                      className={`rounded-2xl p-7 h-60 flex flex-col transition-all duration-500 ease-out ${
                        isCenter
                          ? "bg-linear-to-br from-blue-500 to-blue-700 shadow-2xl shadow-blue-500/25 -translate-y-4 scale-[1.06] z-10 relative"
                          : "bg-white border border-slate-200/70 opacity-70 scale-[0.94] shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            isCenter
                              ? "bg-white/20 text-white ring-1 ring-white/30"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {t.name
                            .split(" ")
                            .map((n) => n.charAt(0))
                            .join("")}
                        </div>
                        <div>
                          <h3
                            className={`text-sm font-semibold ${
                              isCenter ? "text-white" : "text-slate-800"
                            }`}
                          >
                            {t.name}
                          </h3>
                          <p
                            className={`text-xs ${
                              isCenter ? "text-blue-100" : "text-slate-400"
                            }`}
                          >
                            {t.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5 mt-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`h-3.5 w-3.5 ${
                              isCenter ? "text-amber-300" : "text-amber-400"
                            }`}
                          />
                        ))}
                      </div>

                      <p
                        className={`mt-4 text-sm leading-relaxed line-clamp-4 ${
                          isCenter
                            ? "text-white/95 font-medium"
                            : "text-slate-500"
                        }`}
                      >
                        {t.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToReal(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fbfcfe] mt-0 pt-0 pb-12 text-slate-900 lg:min-h-[86vh]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes orbit-forward {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes orbit-reverse {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            .orbit-forward {
              animation: orbit-forward 35s linear infinite;
            }
            .orbit-reverse {
              animation: orbit-reverse 48s linear infinite;
            }
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(248,250,252,0.95))]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-4 px-5 mt-0 pt-0 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mt-0 pt-8 text-center lg:text-left"
        >
          <div className="mb-4 inline-flex rounded-full border border-[#0062D6] bg-white/90 px-4 py-2 text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase shadow-sm">
            WEBCORE SOLUTIONS
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-700 sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
            Building high-performance digital infrastructure for modern
            businesses.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base mx-auto lg:mx-0">
            We engineer scalable web applications, reliable platforms, and
            polished interfaces that help teams move faster and grow with
            confidence.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-[#056fe9] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="#portfolio"
              className="rounded-full border border-[#0062D6] bg-white px-5 py-2.5 text-sm font-semibold text-[#0062D6] shadow-sm transition duration-300 hover:text-white hover:bg-[#0062D6]"
            >
              View Capabilities
            </Link>
          </div>
        </motion.div>

        <div className="relative flex h-77.5 w-full items-center justify-center overflow-visible sm:h-120 lg:h-127.5 max-sm:pt-14 mt-4 lg:mt-0">
          <div className="absolute h-57.5 w-57.5 sm:h-70 sm:w-70 lg:h-80 lg:w-[320px] rounded-full border border-[#0062D6] pointer-events-none" />
          <div className="absolute h-30 w-[120px] sm:h-35 sm:w-[140px] lg:h-[160px] lg:w-[160px] rounded-full border border-[#0062D6] pointer-events-none" />

          <div className="absolute h-[230px] w-[230px] sm:h-[280px] lg:h-[320px] flex items-center justify-center">
            <div className="block sm:hidden w-full h-full relative">
              <motion.div
                className="w-full h-full absolute"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
              >
                <OrbitGroup
                  items={outerOrbitItems}
                  radius={115}
                  duration={48}
                  iconSize={42}
                  isMobile
                />
              </motion.div>
            </div>
            <div className="hidden sm:block w-full h-full relative">
              <motion.div
                className="w-full h-full absolute"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
              >
                <OrbitGroup
                  items={outerOrbitItems}
                  radius={160}
                  duration={48}
                  iconSize={54}
                />
              </motion.div>
            </div>
          </div>

          <div className="absolute h-30 w-30 sm:h-35 lg:h-40 flex items-center justify-center">
            <div className="block sm:hidden w-full h-full relative">
              <motion.div
                className="w-full h-full absolute"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
              >
                <OrbitGroup
                  items={innerOrbitItems}
                  radius={60}
                  reverse
                  duration={32}
                  iconSize={36}
                  isMobile
                />
              </motion.div>
            </div>
            <div className="hidden sm:block w-full h-full relative">
              <motion.div
                className="w-full h-full absolute"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
              >
                <OrbitGroup
                  items={innerOrbitItems}
                  radius={80}
                  reverse
                  duration={32}
                  iconSize={44}
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative z-20 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#0062D6] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-4 ring-slate-50"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/web.png"
              alt="Web Core Centerpiece"
              width={52}
              height={52}
              className="h-8 w-8 sm:h-12 sm:w-12 object-contain pointer-events-none select-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PerformanceCTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
        }
      },
      {
        rootMargin: "0px 0px -150px 0px",
        threshold: 0.01,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-linear-to-r from-blue-600 to-blue-700 py-24 flex justify-center items-center select-none"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .unified-gravity-block {
              opacity: 0;
              will-change: transform, opacity;
              transition: transform 1.6s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
              transform: translateY(-100vh);
            }

            .unified-gravity-block.gravity-active {
              opacity: 1;
              transform: translateY(0);
            }

            .shimmer-wave-btn {
              position: relative;
              overflow: hidden;
              z-index: 1;
            }
            .shimmer-wave-btn::before {
              content: "";
              position: absolute;
              top: 0;
              left: -100%;
              width: 50%;
              height: 100%;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(37, 99, 235, 0.15),
                transparent
              );
              transform: skewX(-25deg);
              z-index: -1;
            }
            .shimmer-wave-btn:hover::before {
              left: 200%;
              transition: left 0.8s cubic-bezier(0.25, 1, 0.5, 1);
            }

            .split-expand-btn {
              position: relative;
              overflow: hidden;
              z-index: 1;
            }
            .split-expand-btn::before {
              content: "";
              position: absolute;
              top: 0;
              left: 50%;
              width: 0;
              height: 100%;
              background-color: #2563eb;
              transform: translateX(-50%);
              transition: width 0.55s cubic-bezier(0.25, 1, 0.4, 1);
              z-index: -1;
              will-change: width;
            }
            .split-expand-btn:hover::before {
              width: 100%;
            }
            .split-expand-btn:hover {
              border-color: #2563eb !important;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            }
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-10 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div
        className={`unified-gravity-block ${
          hasTriggered ? "gravity-active" : ""
        } relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center px-4`}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to build something exceptional?
        </h2>

        <p className="mt-4 max-w-xl text-sm text-blue-100 font-normal opacity-90">
          Schedule a consultation with our team to discuss your project and
          explore how we can help you achieve your goals.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full">
          <Link
            href="#contact"
            className="shimmer-wave-btn rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 active:scale-95 block"
          >
            Book a Consultation
          </Link>

          <Link
            href="#portfolio"
            className="split-expand-btn rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 active:scale-95 block"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function TechHeroSection() {
  return (
    <div>
      <HeroSection />
      <PerformanceMetricsSection />
      <TestimonialsSection />
      <PerformanceCTASection />
      <Footer />
    </div>
  );
}
