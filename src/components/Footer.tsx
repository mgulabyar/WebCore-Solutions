"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiSend, FiMessageCircle } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "API Integration", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/portfolio" },
      { label: "Careers", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/blog" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Support", href: "/contact" },
      { label: "Privacy Policy", href: "/process" },
      { label: "Terms of Service", href: "/process" },
    ],
  },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/gulab-yar-fullstack-developer/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/mgulabyar", label: "GitHub" },
  { icon: FaXTwitter, href: "https://x.com/home", label: "X (Twitter)" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="relative w-full overflow-hidden">
      <style>{`
        /* MAIN CONTAINER - LEFT COLUMN (Enters from RIGHT screen edge) */
        .wc-float-left {
          opacity: 0;
          transform: translateX(120vw) translateY(0);
          will-change: transform, opacity;
          transition: opacity 1s ease-out,
            transform 2.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wc-float-left.wc-reveal-active {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        /* MAIN CONTAINER - RIGHT COLUMN (Enters from LEFT screen edge) */
        .wc-float-right {
          opacity: 0;
          transform: translateX(-120vw) translateY(0);
          will-change: transform, opacity;
          transition: opacity 1s ease-out,
            transform 2.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wc-float-right.wc-reveal-active {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        /* BOTTOM SECTIONS - Enter from sides */
        .wc-float-bottom-left {
          opacity: 0;
          transform: translateX(150vw) translateY(30px);
          will-change: transform, opacity;
          transition: opacity 0.9s ease-out,
            transform 2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wc-float-bottom-left.wc-reveal-active {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .wc-float-bottom-right {
          opacity: 0;
          transform: translateX(-150vw) translateY(30px);
          will-change: transform, opacity;
          transition: opacity 0.9s ease-out,
            transform 2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wc-float-bottom-right.wc-reveal-active {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .wc-signature-line {
          position: relative;
        }
        .wc-signature-line::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          height: 1px;
          width: 0%;
          background: linear-gradient(90deg, transparent, #0076ff, transparent);
          transition: width 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
        }
        .wc-signature-line.wc-reveal-active::after {
          width: 100%;
        }

        .wc-subscribe-btn {
          position: relative;
          overflow: hidden;
        }
        .wc-subscribe-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .wc-subscribe-btn:hover::before {
          left: 130%;
        }

        @media (prefers-reduced-motion: reduce) {
          .wc-float-left,
          .wc-float-right,
          .wc-float-bottom-left,
          .wc-float-bottom-right {
            transition: none;
            transform: none;
            opacity: 1;
          }
          .wc-signature-line::after {
            transition: none;
            width: 100%;
          }
        }
      `}</style>

      <div className="relative bg-neutral-900 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-center md:text-left text-xs text-neutral-400">
              © {new Date().getFullYear()} WebCore Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                <Link
                  key={item}
                  href="/process"
                  className="text-xs text-neutral-400 hover:text-[#0076FF] transition-colors duration-300 relative group"
                >
                  <span className="relative inline-block">
                    {item}
                    <span className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#0076FF] transition-all duration-350 ease-out origin-center w-0 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white pt-16 sm:pt-20 pb-14 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10 opacity-50" />
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#0076FF]/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-600/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Top Section - LEFT & RIGHT columns */}
          <div
            className={`wc-signature-line grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-14 lg:pb-16 border-b border-neutral-800 ${
              isVisible ? "wc-reveal-active" : ""
            }`}
          >
            {/* LEFT COLUMN - Enters from RIGHT screen edge */}
            <div
              style={{ transitionDelay: "0ms" }}
              className={`wc-float-left ${isVisible ? "wc-reveal-active" : ""} space-y-4`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0062D6] to-[#0B3C95] shadow-lg ring-1 ring-[#0062D6]/20">
                  <span className="text-2xl font-semibold text-white">W</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    WebCore Solutions
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium">
                    Building Digital Excellence
                  </p>
                </div>
              </div>

              <p className="text-sm text-neutral-400 max-w-lg leading-relaxed">
                We engineer high-performance web applications, scalable platforms, and polished interfaces that help businesses move faster and grow with confidence.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/50 text-neutral-400 text-sm transition-all duration-300 hover:border-[#0076FF] hover:bg-gradient-to-br hover:from-[#0076FF] hover:to-[#0B3C95] hover:text-white hover:shadow-lg hover:shadow-[#0076FF]/20 hover:-translate-y-0.5"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN - Enters from LEFT screen edge */}
            <div
              style={{ transitionDelay: "200ms" }}
              className={`wc-float-right ${isVisible ? "wc-reveal-active" : ""} lg:pl-12`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <FiSend className="h-5 w-5 text-[#0076FF]" />
                <h4 className="text-base font-semibold text-white uppercase tracking-wider">
                  Stay Updated
                </h4>
              </div>

              <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
                Subscribe to our newsletter for the latest insights, tech trends, and exclusive updates. Get actionable advice and step-by-step blueprints to build and scale your digital systems. No spam, unsubscribe anytime.
              </p>

              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg">
                <div className="relative flex-1 group">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500 group-focus-within:text-[#0076FF] transition-colors duration-300" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-full border border-neutral-700 bg-neutral-800/50 pl-12 pr-5 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:border-[#0076FF] focus:outline-none focus:ring-2 focus:ring-[#0076FF]/20 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="wc-subscribe-btn group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0076FF] to-[#0B3C95] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:from-[#0B3C95] hover:to-[#0076FF] hover:shadow-none active:scale-95"
                >
                  Subscribe
                  <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </form>

              {subscribed && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                  <span>✓</span> Successfully subscribed! Welcome aboard.
                </div>
              )}
            </div>
          </div>

          {/* Bottom Sections - 2 left (from right), 2 right (from left) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pt-12">
            {/* Services - Left side, enters from RIGHT */}
            <div
              style={{ transitionDelay: "500ms" }}
              className={`wc-float-bottom-left ${isVisible ? "wc-reveal-active" : ""}`}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Services
              </h4>
              <ul className="space-y-3.5">
                {["Web Development", "Mobile Apps", "Cloud Solutions", "UI/UX Design", "API Integration"].map(
                  (label) => (
                    <li key={label}>
                      <Link
                        href="/services"
                        className="text-sm text-neutral-400 hover:text-[#0076FF] transition-colors duration-300 relative group"
                      >
                        <span className="relative inline-block">
                          {label}
                          <span className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#0076FF] transition-all duration-350 ease-out origin-center w-0 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company - Left side, enters from RIGHT */}
            <div
              style={{ transitionDelay: "650ms" }}
              className={`wc-float-bottom-left ${isVisible ? "wc-reveal-active" : ""}`}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Company
              </h4>
              <ul className="space-y-3.5">
                {["About Us", "Our Work", "Careers", "Blog", "Contact"].map((label) => (
                  <li key={label}>
                    <Link
                      href="/about"
                      className="text-sm text-neutral-400 hover:text-[#0076FF] transition-colors duration-300 relative group"
                    >
                      <span className="relative inline-block">
                        {label}
                        <span className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#0076FF] transition-all duration-350 ease-out origin-center w-0 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Right side, enters from LEFT */}
            <div
              style={{ transitionDelay: "800ms" }}
              className={`wc-float-bottom-right ${isVisible ? "wc-reveal-active" : ""}`}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Resources
              </h4>
              <ul className="space-y-3.5">
                {["Documentation", "Case Studies", "Support", "Privacy Policy", "Terms of Service"].map(
                  (label) => (
                    <li key={label}>
                      <Link
                        href="/blog"
                        className="text-sm text-neutral-400 hover:text-[#0076FF] transition-colors duration-300 relative group"
                      >
                        <span className="relative inline-block">
                          {label}
                          <span className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#0076FF] transition-all duration-350 ease-out origin-center w-0 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact - Right side, enters from LEFT */}
            <div
              style={{ transitionDelay: "950ms" }}
              className={`wc-float-bottom-right ${isVisible ? "wc-reveal-active" : ""}`}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-800/50 border border-neutral-700 hover:border-[#0076FF]/50 transition-colors duration-300">
                    <FiMapPin className="h-4 w-4 text-neutral-500 hover:text-[#0076FF] transition-colors duration-300" />
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Faisalabad, Punjab, Pakistan
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-800/50 border border-neutral-700 hover:border-[#0076FF]/50 transition-colors duration-300">
                    <FiPhone className="h-4 w-4 text-neutral-500 hover:text-[#0076FF] transition-colors duration-300" />
                  </div>
                  <a
                    href="tel:+923468016921"
                    className="text-sm text-neutral-400 hover:text-[#0076FF] transition-colors duration-300 relative group"
                  >
                    <span className="relative inline-block">
                      +92 346 8016921
                      <span className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#0076FF] transition-all duration-350 ease-out origin-center w-0 group-hover:w-full" />
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-800/50 border border-neutral-700 hover:border-[#0076FF]/50 transition-colors duration-300">
                    <FiMail className="h-4 w-4 text-neutral-500 hover:text-[#0076FF] transition-colors duration-300" />
                  </div>
                  <a
                    href="mailto:mgulabyaarmgulabyaar@gmail.com"
                    className="text-sm text-neutral-400 hover:text-[#0076FF] transition-colors duration-300 relative group break-all"
                  >
                    <span className="relative inline-block">
                      mgulabyaarmgulabyaar@gmail.com
                      <span className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#0076FF] transition-all duration-350 ease-out origin-center w-0 group-hover:w-full" />
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-800/50 border border-neutral-700 hover:border-[#10B981]/50 transition-colors duration-300">
                    <FiMessageCircle className="h-4 w-4 text-neutral-500 hover:text-[#10B981] transition-colors duration-300" />
                  </div>
                  <a
                    href="https://wa.me/923468016921"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-[#10B981] transition-colors duration-300 relative group"
                  >
                    <span className="relative inline-block">
                      Chat on WhatsApp
                      <span className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#10B981] transition-all duration-350 ease-out origin-center w-0 group-hover:w-full" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}