"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  "Web Applications",
  "Business Websites",
  "Dashboard Systems",
  "Brand Platforms",
];

const orbitItems = [
  { src: "/angular.png", title: "Angular", angle: 0 },
  { src: "/nextjs.png", title: "Next.js", angle: 60 },
  { src: "/asp.net.png", title: "ASP.NET", angle: 120 },
  { src: "/react.png", title: "React", angle: 180 },
  { src: "/nodejs.png", title: "Node.js", angle: 240 },
  { src: "/tailwind.png", title: "Tailwind", angle: 300 },
];

export default function TechHeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 overflow-hidden">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        
        {/* Left Side: Text and Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl z-10"
        >
          <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            WebCore Solutions
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We build modern digital products for growing businesses.
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We design and develop fast, reliable, and professional websites that help companies build trust, generate leads, and scale with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              href="#"
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

        {/* Right Side: Fixed Orbiting Showcase */}
        <div className="flex items-center justify-center min-h-[500px] relative">
          
          {/* Static Track Lines (Fixed inline pixels calculation) */}
          <div className="absolute h-45 w-[180px] rounded-full border border-slate-200/80 pointer-events-none" />
          <div className="absolute h-[360px] w-[360px] rounded-full border border-slate-200/80 pointer-events-none" />

          {/* Main Orbit Spinner Ring */}
          <motion.div 
            className="absolute h-[360px] w-[360px] flex items-center justify-center rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {orbitItems.map((item, index) => {
              const radius = 180; // 360px circle ka radius
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
                  {/* White Circular Planet Containers */}
                  <motion.div 
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] cursor-pointer hover:scale-110 transition-transform overflow-hidden p-2.5"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                  >
                    {/* FIXED: Span text ki jagah asli Next.js Image lagayi ha */}
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain select-none pointer-events-none"
                      onError={(e) => {
                        // Fail-safe logic: Agar koi png file missing ho to title ka pehla alphabet dikh jaye
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-slate-800 font-bold text-sm">${item.title.charAt(0)}</span>`;
                        }
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Center Main Locked Logo (Python Core) */}
          <div className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-slate-950 shadow-[0_15px_45px_rgba(0,0,0,0.12)] ring-4 ring-slate-50 transition-transform duration-300 hover:scale-105">
            <Image
              src="/python.png" 
              alt="Python Core"
              width={44}
              height={44}
              className="h-11 w-11 object-contain filter drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) parent.innerHTML = '<span class="text-white font-extrabold text-xl">Py</span>';
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
