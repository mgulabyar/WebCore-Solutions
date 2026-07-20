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

export default function TechHeroSection() {
  return (
    <section className="w-full min-h-[85vh] flex items-center bg-white text-slate-900 overflow-hidden relative py-12">
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-125 h-125 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 grid items-center gap-16 lg:grid-cols-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] leading-[1.2]">
            Building High-Performance <br />
            <span className="text-[#2563eb] font-bold">
              Digital Infrastructure
            </span>
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-slate-500 sm:text-base max-w-lg">
            We engineer scalable web solutions, secure database frameworks, and
            modern cross-platform ecosystems designed to streamline your
            business workflows and accelerate digital growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="group relative px-7 py-3 overflow-hidden rounded-lg bg-slate-950 text-xs font-semibold text-white shadow-sm transition-all duration-300 block"
            >
              <span className="absolute inset-0 w-full h-full bg-[#61DAFB] transition-transform duration-300 ease-out transform translate-x-[-101%] group-hover:translate-x-0" />
              <span className="relative z-10 group-hover:text-slate-950 transition-colors duration-200">
                Consult an Expert
              </span>
            </Link>

            <Link
              href="#portfolio"
              className="group relative px-6 py-2.5 overflow-hidden rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:border-[#61DAFB] transition-colors duration-300 block"
            >
              <span className="absolute inset-0 w-full h-full bg-[#61DAFB]/10 transition-transform duration-300 ease-out transform translate-x-[-101%] group-hover:translate-x-0" />
              <span className="relative z-10 group-hover:text-slate-950 transition-colors duration-200">
                Our Capabilities
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="flex items-center justify-center min-h-130 relative select-none">

          <div className="absolute h-45 w-45 rounded-full border border-slate-200/60 pointer-events-none" />
          <div className="absolute h-90 w-90 rounded-full border border-slate-200/60 pointer-events-none" />

          <motion.div
            className="absolute h-45 w-45 flex items-center justify-center rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          >
            {innerOrbitItems.map((item, index) => {
              const radius = 90;
              const radian = (item.angle * Math.PI) / 180;
              const x = radius * Math.cos(radian);
              const y = radius * Math.sin(radian);

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                >
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] cursor-pointer hover:scale-110 transition-transform p-2"
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 28,
                      ease: "linear",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain pointer-events-none"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent)
                          parent.innerHTML = `<span class="text-slate-800 font-bold text-xs">${item.title.charAt(0)}</span>`;
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            className="absolute h-90 w-90 flex items-center justify-center rounded-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          >
            {outerOrbitItems.map((item, index) => {
              const radius = 180;
              const radian = (item.angle * Math.PI) / 180;
              const x = radius * Math.cos(radian);
              const y = radius * Math.sin(radian);

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 28px)`,
                    top: `calc(50% + ${y}px - 28px)`,
                  }}
                >
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)] cursor-pointer hover:scale-110 transition-transform p-2.5"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 45,
                      ease: "linear",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain pointer-events-none"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent)
                          parent.innerHTML = `<span class="text-slate-800 font-bold text-xs">${item.title.substring(0, 2)}</span>`;
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          <div className="relative z-18 flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] ring-4 ring-slate-50/50 transition-transform duration-300 hover:scale-105">
            <Image
              src="/web.png"
              alt="Web Main System"
              width={46}
              height={46}
              className="h-11 w-11 object-contain filter drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent)
                  parent.innerHTML =
                    '<span class="text-slate-800 font-extrabold text-xl">Web</span>';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
