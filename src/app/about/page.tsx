/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Gulab Yar",
    role: "SEO Specialist & Founder",
    bio: "Visionary leader managing search engine optimization and scalable web architectures. Expert in advanced Office add ins, driving organic traffic growth, and delivering robust digital solutions that guarantee long term market dominance and exceptional client satisfaction across global modern business platforms.",
    image: "/team/Asfand.png",
    linkedin: "https://www.linkedin.com/in/gulab-yar-fullstack-developer/",
    github: "https://github.com/mgulabyar",
    website: "https://stackoverflow.com",
  },
  {
    name: "Zuryab Gill",
    role: "Senior Frontend Developer",
    bio: "Frontend engineering specialist dedicated to creating pixel perfect, highly responsive, and interactive user interfaces. Expert in React, Next js, and modern CSS frameworks, focusing on seamless user journeys, smooth fluid animations, and optimized website speed across all modern devices.",
    image: "/team/Asfand.png",
    linkedin: "#",
    github: "#",
    website: "#",
  },
  {
    name: "Shabana",
    role: "Full-Stack Developer",
    bio: "Versatile systems engineer handling both complex server side application logic and modern client side integrations. Expert in secure API development, relational databases, and cloud infrastructures, ensuring optimal end to end performance, flawless application flow, and rock solid architectural security frameworks.",
    image: "/team/Asfand.png",
    linkedin: "#",
    github: "#",
    website: "#",
  },
  {
    name: "Asfand Yar",
    role: "Lead UI/UX Designer",
    bio: "Creative design strategist transforming complex workflows into intuitive, beautiful, and highly engaging user experiences. Expert in user research, wireframing, interactive prototyping, and building scalable component libraries that establish consistent visual branding across all digital enterprise products.",
    image: "/team/Gulab.png",
    linkedin: "#",
    github: "#",
    website: "#",
  },
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:shadow-[0_30px_60px_rgba(0,98,214,0.15)]">
      <div className="team-card-photo relative h-72 w-full flex-shrink-0 sm:h-80">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/team/placeholder.png";
          }}
        />

        <div className="team-card-overlay absolute inset-0" />

        <div className="team-social absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2.5">
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={member.name + " GitHub"}
            className="team-social-item-1 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B1220]/90 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-[#0062D6]"
          >
            <FaGithub className="h-4 w-4" />
          </a>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={member.name + " LinkedIn"}
            className="team-social-item-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0062D6] text-white transition-colors duration-300 hover:bg-[#0B3C95]"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>

          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={member.name + " Website"}
            className="team-social-item-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white transition-colors duration-300 hover:bg-orange-600"
          >
            <FaGlobe className="h-4 w-4" />
          </a>
        </div>
      </div>

   
    </div>
  );
}

function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          el.classList.add("about-reveal-active");
        } else {
          el.classList.remove("about-reveal-active");
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fbfcfe] py-14 lg:py-20">
      <style>{`
        .team-card-overlay {
          background: rgba(0, 98, 214, 0);
          transition: background-color 0.4s ease;
        }
        .team-card-photo:hover .team-card-overlay {
          background: rgba(0, 98, 214, 0.28);
        }

        .team-social {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .team-card-photo:hover .team-social {
          opacity: 1;
          transform: translateY(0);
        }
        .team-social-item-1 { transition-delay: 0.05s; }
        .team-social-item-2 { transition-delay: 0.12s; }
        .team-social-item-3 { transition-delay: 0.19s; }

        .team-carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          gap: 1.25rem;
          padding-bottom: 0.5rem;
        }
        .team-carousel::-webkit-scrollbar {
          height: 6px;
        }
        .team-carousel::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        .team-carousel-item {
          flex: 0 0 82%;
          scroll-snap-align: center;
        }
        @media (min-width: 480px) {
          .team-carousel-item {
            flex: 0 0 60%;
          }
        }
      `}</style>

      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div
          ref={ref}
          className="about-float-right mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-800 lg:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 lg:text-base">
            Meet the skilled experts at WebCore Solutions who are dedicated to
            crafting high-performance web applications that make a real
            difference. Our team is driven by innovation and precision,
            consistently going above and beyond to deliver solutions that
            streamline workflows and enhance productivity.
          </p>
        </div>

        {/* Small screens: horizontal carousel */}
        <div className="team-carousel md:hidden">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-carousel-item flex">
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Medium and up: grid */}
        <div className="hidden items-stretch md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
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
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#0062D6]">
            About Us
          </span>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-800 lg:text-4xl">
            About WebCore Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 lg:mx-0 lg:text-lg">
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
          <img
            src="/team.png"
            alt="Our team at work"
            className="relative z-10 w-full max-w-md rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
          />
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

        @keyframes about-force-visible {
          to { opacity: 1; transform: none; }
        }
        .about-float-left,
        .about-float-right {
          animation: about-force-visible 0.01s 2.5s forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-float-left,
          .about-float-right {
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