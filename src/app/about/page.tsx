/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect } from "react";
import {
  ArrowRight} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Gulab Yar",
    role: "Founder & Lead Developer",
    bio: "Full-stack expert with 8+ years of experience building scalable web apps and Office add-ins.",
    image: "/team/M_Gulab_Yar.png",
    social: {
      linkedin: "https://www.linkedin.com/in/gulab-yar-fullstack-developer/",
      github: "https://github.com/mgulabyar",
      twitter: "https://x.com/home",
    },
  },
  {
    name: "Zuryab Gill",
    role: "Frontend Developer",
    bio: "React & Next.js specialist focused on pixel-perfect UI and smooth animations.",
    image: "/team/zuryab.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Team Member 3",
    role: "Backend Developer",
    bio: "Node.js, Python, and database architect ensuring scalable, secure systems.",
    image: "/team/M_Gulab_Yar.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Team Member 4",
    role: "UI/UX Designer",
    bio: "Crafting intuitive, beautiful interfaces with a focus on user experience.",
    image: "/team/zuryab.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];



function SectionReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("about-reveal-active");
        } else {
          el.classList.remove("about-reveal-active");
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    const mediaEl = mediaRef.current;
    if (!textEl || !mediaEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-reveal-active");
          } else {
            entry.target.classList.remove("about-reveal-active");
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(textEl);
    observer.observe(mediaEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-24 lg:pb-24">
      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
        <div
          ref={textRef}
          className="about-float-left text-center lg:text-left"
        >

          <h1 className="text-3xl font-semibold tracking-tight text-slate-800 lg:text-4xl">
            About Us
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-md leading-relaxed text-slate-600 lg:mx-0 lg:text-lg">
            Welcome to <span className="font-semibold text-[#02408b]">WebCore Solutions</span>.
            We specialize in building high-performance web applications, custom
            platforms, and scalable digital solutions designed to streamline your
            workflows and boost productivity. With a focus on innovation and
            quality, we help businesses grow with confidence.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0062D6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-[#0B3C95] hover:shadow-xl hover:shadow-blue-500/25 active:scale-95"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div
          ref={mediaRef}
          className="about-float-right relative flex items-center justify-center"
        >
          <div className="absolute" />
          <img
            src="/team.png"
            alt="Our team at work"
            className="relative z-10 w-full max-w- rounded-2xl lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}



function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("about-reveal-active");
        } else {
          el.classList.remove("about-reveal-active");
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fbfcfe] py-16 lg:py-24">
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div
          ref={ref}
          className="about-float-right mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Our Team
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-800 lg:text-3xl">
            Meet the People Behind AddinExpert
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 lg:text-base">
            A team of passionate developers, designers, and problem solvers
            dedicated to building exceptional digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <SectionReveal
              key={member.name}
              className={`about-float-${idx % 2 === 0 ? "right" : "left"}`}
              delay={idx * 70}
            >
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_12px_rgba(15,23,42,0.03)] transition-all duration-500 hover:border-blue-100 hover:shadow-[0_20px_45px_rgba(0,98,214,0.07)]">
                <div className="mb-4 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/team/placeholder.png";
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#0062D6]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {member.bio}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0062D6] hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0062D6] hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}




export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbfcfe]">
      <style>{`
        .about-float-left {
          opacity: 0;
          transform: translateX(80px);
          will-change: transform, opacity;
          transition: opacity 0.9s ease-out,
            transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .about-float-left.about-reveal-active {
          opacity: 1;
          transform: translateX(0);
        }

        .about-float-right {
          opacity: 0;
          transform: translateX(-80px);
          will-change: transform, opacity;
          transition: opacity 0.9s ease-out,
            transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .about-float-right.about-reveal-active {
          opacity: 1;
          transform: translateX(0);
        }

        .about-float-bottom {
          opacity: 0;
          transform: translateY(40px);
          will-change: transform, opacity;
          transition: opacity 0.9s ease-out,
            transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .about-float-bottom.about-reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Safety fallback: if JS/observer fails for any reason, content still shows */
        @keyframes about-force-visible {
          to { opacity: 1; transform: none; }
        }
        .about-float-left,
        .about-float-right,
        .about-float-bottom {
          animation: about-force-visible 0.01s 2.5s forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-float-left,
          .about-float-right,
          .about-float-bottom {
            transition: none;
            transform: none;
            opacity: 1;
            animation: none;
          }
        }
      `}</style>

      <HeroSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
