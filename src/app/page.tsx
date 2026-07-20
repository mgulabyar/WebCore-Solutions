
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
              style={{
                width: iconSize,
                height: iconSize,
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={isMobile ? iconSize - 12 : iconSize - 18}
                height={isMobile ? iconSize - 12 : iconSize - 18}
                className="object-contain pointer-events-none select-none max-w-[72%] max-h-[72%]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) parent.innerHTML = `<span class="text-slate-800 font-bold text-[10px] sm:text-xs">${item.title.substring(0, 2)}</span>`;
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TechHeroSection() {
  return (
    // Responsive sizing: lg screen pr top padding zero, small screen pr text se fasla rakhne k liye space add ki ha
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-[#fbfcfe] mt-0 pt-0 pb-16 text-slate-900 lg:min-h-[85vh]">
      <style jsx global>{`
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
      `}</style>

      {/* Decorative Ambiance Layer */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(248,250,252,0.95))]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-4 px-5 mt-0 pt-0 lg:grid-cols-2 lg:gap-12 lg:px-8">
        
        {/* Left Layout Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mt-0 pt-8"
        >
          <div className="mb-4 inline-flex rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase shadow-sm">
            WEBCORE SOLUTIONS
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Building high-performance digital infrastructure for modern businesses.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
            We engineer scalable web applications, reliable platforms, and polished interfaces that help teams move faster and grow with confidence.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Start a Project
            </Link>
            <Link
              href="#portfolio"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:text-slate-900 hover:border-slate-300"
            >
              View Capabilities
            </Link>
          </div>
        </motion.div>

        
        <div className="relative flex h-[310px] w-full items-center justify-center overflow-visible sm:h-[480px] lg:h-[550px] max-sm:pt-14 mt-4 lg:mt-0">
          
         
          <div className="absolute h-[290px] w-[290px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px] rounded-full border border-slate-200/80 pointer-events-none" />
          <div className="absolute h-[170px] w-[170px] sm:h-[200px] sm:w-[200px] lg:h-[220px] lg:w-[220px] rounded-full border border-slate-200/60 pointer-events-none" />

          {/* 1. OUTER ORBIT TRACK LAYER */}
          <div className="absolute h-[290px] w-[290px] sm:h-[340px] lg:h-[380px] flex items-center justify-center">
            {/* Mobile / Small Screen Look (Bigger and exact line centered) */}
            <div className="block sm:hidden w-full h-full relative">
              <motion.div className="w-full h-full absolute" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 48, ease: "linear" }}>
                <OrbitGroup items={outerOrbitItems} radius={145} duration={48} iconSize={42} isMobile />
              </motion.div>
            </div>
            {/* Desktop / Large Screen Look */}
            <div className="hidden sm:block w-full h-full relative">
              <motion.div className="w-full h-full absolute" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 48, ease: "linear" }}>
                <OrbitGroup items={outerOrbitItems} radius={190} duration={48} iconSize={54} />
              </motion.div>
            </div>
          </div>

          {/* 2. INNER ORBIT TRACK LAYER */}
          <div className="absolute h-[170px] w-[170px] sm:h-[200px] lg:h-[220px] flex items-center justify-center">
            {/* Mobile / Small Screen Look */}
            <div className="block sm:hidden w-full h-full relative">
              <motion.div className="w-full h-full absolute" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 32, ease: "linear" }}>
                <OrbitGroup items={innerOrbitItems} radius={85} reverse duration={32} iconSize={36} isMobile />
              </motion.div>
            </div>
            {/* Desktop / Large Screen Look */}
            <div className="hidden sm:block w-full h-full relative">
              <motion.div className="w-full h-full absolute" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 32, ease: "linear" }}>
                <OrbitGroup items={innerOrbitItems} radius={110} reverse duration={32} iconSize={44} />
              </motion.div>
            </div>
          </div>

          {/* 3. CENTRAL LOCKED MAIN BRAND CORE HUB */}
          <motion.div
            className="relative z-20 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-4 ring-slate-50"
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
