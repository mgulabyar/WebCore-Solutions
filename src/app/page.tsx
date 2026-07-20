// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiTypescript,
//   SiMongodb,
//   SiTailwindcss,
//   SiDocker,
// } from "react-icons/si";
// import { FaCheckCircle, FaStar } from "react-icons/fa";
// import { MdSpeed, MdSecurity } from "react-icons/md";
// import { FaAws } from "react-icons/fa";

// // ---------- HERO ORBIT SECTION ----------

// const innerOrbitItems = [
//   { src: "/mongo-db.png", title: "MongoDB", angle: 0 },
//   { src: "/expressjs.png", title: "Express.js", angle: 90 },
//   { src: "/react.png", title: "React", angle: 180 },
//   { src: "/nodejs.png", title: "Node.js", angle: 270 },
// ];

// const outerOrbitItems = [
//   { src: "/nextjs.png", title: "Next.js", angle: 0 },
//   { src: "/angular.png", title: "Angular", angle: 45 },
//   { src: "/asp.net.png", title: "ASP.NET", angle: 90 },
//   { src: "/c-sharp.png", title: "C#", angle: 135 },
//   { src: "/tailwind.png", title: "Tailwind", angle: 180 },
//   { src: "/c++.png", title: "C++", angle: 225 },
//   { src: "/js.png", title: "JavaScript", angle: 270 },
//   { src: "/ts.png", title: "TypeScript", angle: 315 },
//   { src: "/python.png", title: "Python", angle: 360 },
// ];

// function OrbitGroup({
//   items,
//   radius,
//   reverse,
//   duration,
//   iconSize,
//   isMobile,
// }: {
//   items: { src: string; title: string; angle: number }[];
//   radius: number;
//   reverse?: boolean;
//   duration: number;
//   iconSize: number;
//   isMobile?: boolean;
// }) {
//   const spinClass = reverse ? "orbit-reverse" : "orbit-forward";

//   return (
//     <div
//       className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full"
//       style={{ animationDuration: `${duration}s` }}
//     >
//       {items.map((item, index) => {
//         const radian = (item.angle * Math.PI) / 180;
//         const x = radius * Math.cos(radian);
//         const y = radius * Math.sin(radian);

//         return (
//           <div
//             key={`${item.title}-${index}`}
//             className="absolute left-1/2 top-1/2"
//             style={{
//               transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
//             }}
//           >
//             <div
//               className={`flex items-center justify-center rounded-full border border-slate-100 bg-white/95 shadow-[0_6px_16px_rgba(15,23,42,0.06)] backdrop-blur-sm ${spinClass}`}
//               style={{ width: iconSize, height: iconSize }}
//             >
//               <Image
//                 src={item.src}
//                 alt={item.title}
//                 width={isMobile ? iconSize - 12 : iconSize - 18}
//                 height={isMobile ? iconSize - 12 : iconSize - 18}
//                 className="object-contain pointer-events-none select-none max-w-[72%] max-h-[72%]"
//                 onError={(e) => {
//                   e.currentTarget.style.display = "none";
//                   const parent = e.currentTarget.parentElement;
//                   if (parent)
//                     parent.innerHTML = `<span class="text-slate-800 font-bold text-[10px] sm:text-xs">${item.title.substring(
//                       0,
//                       2
//                     )}</span>`;
//                 }}
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// // ---------- PERFORMANCE METRICS SECTION (REPLACED) ----------

// const metricsDataset = [
//   {
//     id: "metric-1",
//     targetValue: 250,
//     suffix: "+",
//     decimals: 0,
//     title: "Projects Shipped",
//     desc: "Robust production modules deployed worldwide.",
//     iconType: "shipped-box",
//     direction: "right",
//   },
//   {
//     id: "metric-2",
//     targetValue: 4.9,
//     suffix: "",
//     decimals: 1,
//     title: "Client Rating",
//     desc: "Top-tier global client engineering feedback.",
//     iconType: "rating-star",
//     direction: "left",
//   },
//   {
//     id: "metric-3",
//     targetValue: 10,
//     suffix: "x",
//     decimals: 0,
//     title: "Deployment Speed",
//     desc: "Accelerated cloud integration data pipelines.",
//     iconType: "speed-pulse",
//     direction: "right",
//   },
//   {
//     id: "metric-4",
//     targetValue: 99.9,
//     suffix: "%",
//     decimals: 1,
//     title: "System Uptime",
//     desc: "Enterprise SLA guaranteed architecture matrix.",
//     iconType: "uptime-shield",
//     direction: "left",
//   },
// ];

// function AnimatedCount({
//   value,
//   suffix,
//   decimals,
// }: {
//   value: number;
//   suffix: string;
//   decimals: number;
// }) {
//   const nodeRef = useRef<HTMLSpanElement>(null);
//   const isInView = useInView(nodeRef, { once: true, amount: 0.05 });

//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) =>
//     decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
//   );

//   const [displayValue, setDisplayValue] = useState(
//     decimals > 0 ? `0.${"0".repeat(decimals)}` : "0"
//   );

//   useEffect(() => {
//     const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
//     return () => unsubscribe();
//   }, [rounded]);

//   useEffect(() => {
//     if (isInView) {
//       animate(count, value, { duration: 1.2, ease: [0.16, 1, 0.3, 1] });
//     }
//   }, [isInView, count, value]);

//   return (
//     <span ref={nodeRef}>
//       {displayValue}
//       {suffix}
//     </span>
//   );
// }

// function PremiumMetricIcon({ type }: { type: string }) {
//   if (type === "uptime-shield") {
//     return (
//       <svg
//         className="w-5 h-5 text-blue-600"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//         />
//       </svg>
//     );
//   }

//   if (type === "rating-star") {
//     return (
//       <svg
//         className="w-5 h-5 text-amber-500 fill-amber-400/5"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M11.48 3.499c.15-.426.79-.426.94 0l1.84 5.22a.5.5 0 00.476.342h5.518c.452 0 .639.578.28.821l-4.464 3.012a.5.5 0 00-.181.563l1.681 5.21c.143.444-.37.817-.745.541l-4.465-3.013a.5.5 0 00-.582 0l-4.465 3.013c-.374.276-.888-.097-.745-.541l1.681-5.21a.5.5 0 00-.181-.563L3.54 9.882c-.359-.243-.171-.821.28-.821h5.518a.5.5 0 00.476-.342l1.84-5.22z"
//         />
//       </svg>
//     );
//   }

//   if (type === "shipped-box") {
//     return (
//       <svg
//         className="w-5 h-5 text-purple-600"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//         />
//       </svg>
//     );
//   }

//   return (
//     <svg
//       className="w-5 h-5 text-emerald-600"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M13 10V3L4 14h7v7l9-11h-7z"
//       />
//     </svg>
//   );
// }

// function PerformanceMetricsSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [hasTriggered, setHasTriggered] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHasTriggered(true);
//         }
//       },
//       { rootMargin: "0px 0px -100px 0px", threshold: 0.01 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="w-full bg-[#fbfcfe] pb-28 pt-12 px-6 flex flex-col justify-center items-center overflow-hidden font-sans select-none relative"
//     >
//       <style jsx>{`
//         .hardware-slide-card {
//           opacity: 0;
//           will-change: transform, opacity;
//           transition: transform 1.6s cubic-bezier(0.16, 1, 0.3, 1),
//             opacity 1.2s ease-out;
//         }
//         .direction-left {
//           transform: translateX(calc(-50vw - 120%));
//         }
//         .direction-right {
//           transform: translateX(calc(50vw + 120%));
//         }
//         .hardware-slide-card.slide-active {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .border-glow-path {
//           stroke-dasharray: 400;
//           stroke-dashoffset: 400;
//           transition: stroke-dashoffset 1.75s cubic-bezier(0.25, 1, 0.2, 1);
//         }

//         .group:hover .border-glow-path {
//           stroke-dashoffset: 0;
//         }
//       `}</style>

//       <div className="text-center mb-16 max-w-xl relative z-10">
//         <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block">
//           Proven Performance
//         </span>
//         <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2 sm:text-4xl">
//           Engineered for Scale & Reliability
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full relative z-10">
//         {metricsDataset.map((card, idx) => (
//           <div
//             key={card.id}
//             style={{
//               transitionDelay: hasTriggered ? `${idx * 160}ms` : "0ms",
//             }}
//             className={`hardware-slide-card ${
//               card.direction === "left" ? "direction-left" : "direction-right"
//             } ${
//               hasTriggered ? "slide-active" : ""
//             } flex flex-col items-start rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.015)] relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(15,23,42,0.04)] group cursor-pointer w-full`}
//           >
//             <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500 rounded-l-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-30" />

//             <svg
//               className="absolute inset-0 w-full h-full pointer-events-none z-20"
//               fill="none"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               width="100%"
//               height="100%"
//             >
//               <path
//                 className="border-glow-path"
//                 d="M 0,0 L 100,0 L 100,100"
//                 stroke="url(#blue-laser-gradient)"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//               />
//               <defs>
//                 <linearGradient
//                   id="blue-laser-gradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="100%"
//                 >
//                   <stop offset="0%" stopColor="#3b82f6" />
//                   <stop offset="50%" stopColor="#2563eb" />
//                   <stop offset="100%" stopColor="#1d4ed8" />
//                 </linearGradient>
//               </defs>
//             </svg>

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/60 p-2.5 transition-all duration-300 group-hover:bg-slate-50 group-hover:shadow-inner">
//               <PremiumMetricIcon type={card.iconType} />
//             </div>

//             <span className="text-3xl font-medium tracking-tight text-slate-800 mt-5 group-hover:text-blue-600 transition-colors duration-200">
//               <AnimatedCount
//                 value={card.targetValue}
//                 suffix={card.suffix}
//                 decimals={card.decimals}
//               />
//             </span>

//             <h3 className="text-sm font-semibold text-slate-700 tracking-tight mt-1.5">
//               {card.title}
//             </h3>
//             <p className="text-xs leading-relaxed text-slate-400 mt-1 max-w-[210px]">
//               {card.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // ---------- TECH STACK SECTION ----------

// const techStackItems = [
//   {
//     icon: SiReact,
//     label: "React",
//     desc: "Component-driven UI architecture",
//   },
//   {
//     icon: SiNextdotjs,
//     label: "Next.js",
//     desc: "SSR and edge-optimized performance",
//   },
//   {
//     icon: SiNodedotjs,
//     label: "Node.js",
//     desc: "Scalable backend microservices",
//   },
//   {
//     icon: SiTypescript,
//     label: "TypeScript",
//     desc: "Type-safe modern Development",
//   },
//   {
//     icon: SiMongodb,
//     label: "MongoDB",
//     desc: "Document database at scale",
//   },
//   {
//     icon: SiTailwindcss,
//     label: "Tailwind",
//     desc: "Rapid, consistent styling",
//   },
//   {
//     icon: SiDocker,
//     label: "Docker",
//     desc: "Containerized deployment",
//   },
//   {
//     icon: FaAws,
//     label: "AWS",
//     desc: "Cloud infrastructure & DevOps",
//   },
// ];

// // ---------- CLIENT IMPACT SECTION ----------

// const impactMetrics = [
//   {
//     icon: MdSpeed,
//     title: "Performance",
//     desc: "Propsed architecture consistently delivers sub-second load times.",
//   },
//   {
//     icon: MdSecurity,
//     title: "Security",
//     desc: "Hardened APIs, RBAC, and best practices across the stack.",
//   },
//   {
//     icon: FaCheckCircle,
//     title: "Reliability",
//     desc: "Monitored uptime, graceful scaling, and redundancy built in.",
//   },
//   {
//     icon: FaStar,
//     title: "Experience",
//     desc: "Refined UX patterns that boost adoption and engagement.",
//   },
// ];

// export default function TechHeroSection() {
//   return (
//     <div>
//       {/* HERO SECTION */}
//       <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-[#fbfcfe] mt-0 pt-0 pb-16 text-slate-900 lg:min-h-[85vh]">
//         <style jsx global>{`
//           @keyframes orbit-forward {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//           @keyframes orbit-reverse {
//             from { transform: rotate(360deg); }
//             to { transform: rotate(0deg); }
//           }
//           .orbit-forward {
//             animation: orbit-forward 35s linear infinite;
//           }
//           .orbit-reverse {
//             animation: orbit-reverse 48s linear infinite;
//           }
//         `}</style>

//         <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px]" />
//         <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(248,250,252,0.95))]" />

//         <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-4 px-5 mt-0 pt-0 lg:grid-cols-2 lg:gap-12 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="max-w-xl mt-0 pt-8"
//           >
//             <div className="mb-4 inline-flex rounded-full border border-slate-400/80 bg-white/90 px-4 py-2 text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase shadow-sm">
//               WEBCORE SOLUTIONS
//             </div>

//             <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
//               Building high-performance digital infrastructure for modern businesses.
//             </h1>

//             <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
//               We engineer scalable web applications, reliable platforms, and polished interfaces that help teams move faster and grow with confidence.
//             </p>

//             <div className="mt-6 flex flex-wrap items-center gap-3">
//               <Link
//                 href="#contact"
//                 className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
//               >
//                 Start a Project
//               </Link>
//               <Link
//                 href="#portfolio"
//                 className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition duration-300 hover:text-white hover:bg-slate-950"
//               >
//                 View Capabilities
//               </Link>
//             </div>
//           </motion.div>

//           <div className="relative flex h-[310px] w-full items-center justify-center overflow-visible sm:h-[480px] lg:h-[510px] max-sm:pt-14 mt-4 lg:mt-0">
//             <div className="absolute h-[270px] w-[270px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px] rounded-full border border-slate-200/80 pointer-events-none" />
//             <div className="absolute h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] lg:h-[200px] lg:w-[200px] rounded-full border border-slate-200/60 pointer-events-none" />

//             <div className="absolute h-[270px] w-[270px] sm:h-[320px] lg:h-[360px] flex items-center justify-center">
//               <div className="block sm:hidden w-full h-full relative">
//                 <motion.div
//                   className="w-full h-full absolute"
//                   animate={{ rotate: 360 }}
//                   transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
//                 >
//                   <OrbitGroup
//                     items={outerOrbitItems}
//                     radius={135}
//                     duration={48}
//                     iconSize={42}
//                     isMobile
//                   />
//                 </motion.div>
//               </div>
//               <div className="hidden sm:block w-full h-full relative">
//                 <motion.div
//                   className="w-full h-full absolute"
//                   animate={{ rotate: 360 }}
//                   transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
//                 >
//                   <OrbitGroup
//                     items={outerOrbitItems}
//                     radius={180}
//                     duration={48}
//                     iconSize={54}
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             <div className="absolute h-[150px] w-[150px] sm:h-[180px] lg:h-[200px] flex items-center justify-center">
//               <div className="block sm:hidden w-full h-full relative">
//                 <motion.div
//                   className="w-full h-full absolute"
//                   animate={{ rotate: -360 }}
//                   transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
//                 >
//                   <OrbitGroup
//                     items={innerOrbitItems}
//                     radius={75}
//                     reverse
//                     duration={32}
//                     iconSize={36}
//                     isMobile
//                   />
//                 </motion.div>
//               </div>
//               <div className="hidden sm:block w-full h-full relative">
//                 <motion.div
//                   className="w-full h-full absolute"
//                   animate={{ rotate: -360 }}
//                   transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
//                 >
//                   <OrbitGroup
//                     items={innerOrbitItems}
//                     radius={100}
//                     reverse
//                     duration={32}
//                     iconSize={44}
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             <motion.div
//               className="relative z-20 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-4 ring-slate-50"
//               animate={{ y: [0, -4, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <Image
//                 src="/web.png"
//                 alt="Web Core Centerpiece"
//                 width={52}
//                 height={52}
//                 className="h-8 w-8 sm:h-12 sm:w-12 object-contain pointer-events-none select-none"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* PERFORMANCE METRICS SECTION (REPLACED) */}
//       <PerformanceMetricsSection />

//       {/* TECH STACK SHOWCASE SECTION */}
//       <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-16">
//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mb-12 text-center">
//             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
//               Technology Stack
//             </span>
//             <h2 className="mt-2 text-3xl font-bold text-slate-900 tracking-tight">
//               Modern Stack for Modern Products
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//             {techStackItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                 <div className="relative">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//                     <item.icon className="h-6 w-6" />
//                   </div>
//                   <h3 className="mt-4 text-sm font-semibold text-slate-900">
//                     {item.label}
//                   </h3>
//                   <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CLIENT IMPACT SECTION */}
//       <section className="relative w-full overflow-hidden bg-[#f8fafc] py-16">
//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mb-12 text-center">
//             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
//               Client Impact
//             </span>
//             <h2 className="mt-2 text-3xl font-bold text-slate-900 tracking-tight">
//               Outcomes That Speak for Themselves
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {impactMetrics.map((m) => (
//               <div
//                 key={m.title}
//                 className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                 <div className="relative">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//                     <m.icon className="h-6 w-6" />
//                   </div>
//                   <h3 className="mt-4 text-sm font-semibold text-slate-900">
//                     {m.title}
//                   </h3>
//                   <p className="mt-2 text-xs text-slate-600">{m.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 py-16">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
//         <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center px-4">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             Ready to build something exceptional?
//           </h2>
//           <p className="mt-4 max-w-xl text-sm text-blue-100">
//             Schedule a consultation with our team to discuss your project and explore how we can help you achieve your goals.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center gap-3">
//             <Link
//               href="#contact"
//               className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
//             >
//               Book a Consultation
//             </Link>
//             <Link
//               href="#portfolio"
//               className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/20"
//             >
//               View Our Work
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PerformanceCTASection() {
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
        rootMargin: "0px 0px -150px 0px", // Pre-loads compilation frames before entry
        threshold: 0.01 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 py-24 flex justify-center items-center select-none"
    >
      {/* 🚀 Ultra-Premium Unified Gravity & Center-Out Ripple Engine */}
      <style jsx>{`
        .unified-gravity-block {
          opacity: 0;
          will-change: transform, opacity;
          /* Advanced single-frame cubic path tracking that completely eliminates mid-scroll friction */
          transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(-100vh); /* Absolute screen ceiling clearance across all sizes */
        }
        
        .unified-gravity-block.gravity-active {
          opacity: 1;
          transform: translateY(0); /* Drops instantly fast and locks natively on viewport coordinate zero */
        }

        /* Center-Out Radial Shimmer Expansion Masks */
        .center-ripple-btn {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .center-ripple-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s cubic-bezier(0.25, 1, 0.4, 1), height 0.5s cubic-bezier(0.25, 1, 0.4, 1);
          z-index: -1;
          will-change: width, height;
        }
        
        /* Button 1 Ripple Configuration (Halka / Light Powder Blue Expansion) */
        .btn-light-ripple::before {
          background-color: #f1f5f9;
        }
        .btn-light-ripple:hover::before {
          width: 320px;
          height: 320px;
        }

        /* Button 2 Ripple Configuration (Full Solid White Expansion bursting out) */
        .btn-full-ripple::before {
          background-color: #ffffff;
        }
        .btn-full-ripple:hover::before {
          width: 320px;
          height: 320px;
        }
        .btn-full-ripple:hover {
          color: #2563eb !important; /* Converts text dynamically to match your blue-600 palette */
          border-color: #ffffff !important;
        }
      `}</style>

      {/* YOUR EXACT ORIGINAL GRID PATTERN MESH OVERLAY */}
      <div className="pointer-events-none absolute inset-0 opacity-10 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* UNIFIED CONTENT BLOCK (Drops completely synced from absolute monitor top boundary) */}
      <div className={`unified-gravity-block ${hasTriggered ? "gravity-active" : ""} relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center px-4`}>
        
        {/* Original Heading Text Block */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build something exceptional?
        </h2>

        {/* Original Paragraph Block */}
        <p className="mt-4 max-w-xl text-sm text-blue-100 font-normal opacity-90">
          Schedule a consultation with our team to discuss your project and explore how we can help you achieve your goals.
        </p>

        {/* ACTION BUTTON ROUTING ROW WITH INTEGRATED CENTER EXPANSION INTERACTION */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full">
          
          {/* Button 1: Book Consultation (Your exact original styles + Light Center-Out Expansion) */}
          <Link
            href="#contact"
            className="center-ripple-btn btn-light-ripple rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 active:scale-95 block"
          >
            Book a Consultation
          </Link>

          {/* Button 2: View Our Work (Your exact original border styles + Full Solid White Burst) */}
          <Link
            href="#portfolio"
            className="center-ripple-btn btn-full-ripple rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-500 active:scale-95 block"
          >
            View Our Work
          </Link>

        </div>
      </div>
    </section>
  );
}
