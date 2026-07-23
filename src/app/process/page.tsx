"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Layout,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers3,
  Repeat,
  Target,
  Sparkles,
  MonitorSmartphone,
  GitBranch,
  Gauge,
  BellRing,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Research",
    subtitle: "Understanding Your Vision",
    description:
      "We begin by understanding your business, users, goals, and technical constraints. This stage helps us define the right direction before any design or code starts.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    deliverables: [
      "Requirements gathering",
      "Market research",
      "Competitor analysis",
      "User personas",
    ],
  },
  {
    id: 2,
    title: "Strategic Planning",
    subtitle: "Blueprint for Success",
    description:
      "We turn ideas into a structured roadmap with timelines, milestones, architecture decisions, and delivery priorities so the project stays focused and efficient.",
    icon: Layout,
    color: "from-blue-600 to-indigo-500",
    deliverables: [
      "Project roadmap",
      "Technical architecture",
      "Timeline & milestones",
      "Resource allocation",
    ],
  },
  {
    id: 3,
    title: "Design & Prototyping",
    subtitle: "Bringing Ideas to Life",
    description:
      "We design intuitive interfaces and user flows that feel polished, modern, and easy to use. Prototypes help validate the experience before development begins.",
    icon: PenTool,
    color: "from-indigo-600 to-purple-500",
    deliverables: [
      "UI/UX design",
      "Interactive prototypes",
      "Design system",
      "User flow diagrams",
    ],
  },
  {
    id: 4,
    title: "Development & Integration",
    subtitle: "Building with Precision",
    description:
      "We build scalable features using clean architecture, reusable components, and reliable integrations to keep the product fast, maintainable, and future-ready.",
    icon: Code2,
    color: "from-purple-600 to-pink-500",
    deliverables: [
      "Clean codebase",
      "API integrations",
      "Database optimization",
      "Performance optimization",
    ],
  },
  {
    id: 5,
    title: "Testing & Quality Assurance",
    subtitle: "Perfection in Every Detail",
    description:
      "We test across devices, edge cases, and real usage paths to catch issues early and ensure the product works consistently before launch.",
    icon: TestTube2,
    color: "from-pink-600 to-rose-500",
    deliverables: [
      "Functional testing",
      "Performance testing",
      "Security checks",
      "Bug fixes",
    ],
  },
  {
    id: 6,
    title: "Launch & Deployment",
    subtitle: "Going Live with Confidence",
    description:
      "We handle deployment carefully so the launch is smooth, stable, and professionally managed with minimal risk and downtime.",
    icon: Rocket,
    color: "from-rose-600 to-orange-500",
    deliverables: [
      "Server setup",
      "Domain configuration",
      "SSL certificates",
      "Launch checklist",
    ],
  },
  {
    id: 7,
    title: "Support & Maintenance",
    subtitle: "Long-term Partnership",
    description:
      "After launch, we keep the product healthy with ongoing support, updates, monitoring, and improvements so it continues to perform well.",
    icon: LifeBuoy,
    color: "from-orange-600 to-amber-500",
    deliverables: [
      "24/7 support",
      "Regular updates",
      "Performance monitoring",
      "Feature enhancements",
    ],
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle2,
    title: "Proven Methodology",
    description:
      "A refined workflow that keeps projects organized, predictable, and high quality.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Clear timelines and structured execution help us deliver without unnecessary delays.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "You stay informed with clear updates, feedback loops, and direct collaboration.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description:
      "Every phase includes QA checks so the final product feels reliable and polished.",
  },
  {
    icon: Zap,
    title: "Agile Approach",
    description:
      "We adapt quickly when priorities change without losing clarity or momentum.",
  },
];

const extraHighlights = [
  {
    icon: Layers3,
    title: "Scalable Architecture",
    desc: "Built to grow with new features, teams, and higher usage.",
  },
  {
    icon: Repeat,
    title: "Iteration Friendly",
    desc: "Structured for feedback cycles so improvements can be added cleanly.",
  },
  {
    icon: Target,
    title: "Goal Focused",
    desc: "Every step stays tied to measurable business outcomes.",
  },
  {
    icon: Sparkles,
    title: "Premium Finish",
    desc: "Visual polish and micro-details that make the product feel top-tier.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Everywhere",
    desc: "A consistent experience across mobile, tablet, and desktop.",
  },
  {
    icon: GitBranch,
    title: "Maintainable Code",
    desc: "Readable structure and reusable logic for long-term support.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    desc: "Fast load times, smooth interactions, and efficient rendering.",
  },
  {
    icon: BellRing,
    title: "Post-Launch Care",
    desc: "Monitoring and updates after delivery keep everything stable.",
  },
];

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof processSteps)[0];
  index: number;
  isLast: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.22 });

  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-8 top-20 bottom-0 hidden w-0.5 bg-linear-to-b from-blue-200 via-blue-100 to-transparent lg:block" />
      )}

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: -70, y: 12, scale: 0.99 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
        transition={{
          duration: 1.1,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex items-start gap-6 lg:gap-8"
      >
        <motion.div
          className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${step.color} shadow-[0_18px_40px_rgba(0,98,214,0.16)] lg:h-20 lg:w-20`}
          whileHover={{ scale: 1.06, rotate: 3 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <step.icon className="h-8 w-8 text-white lg:h-10 lg:w-10" strokeWidth={1.6} />
          <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
            <span className="text-xs font-semibold text-[#0062D6]">{step.id}</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="group flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-500 hover:border-blue-100 hover:shadow-[0_24px_50px_rgba(0,98,214,0.08)] lg:p-7"
        >
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#0062D6] lg:text-xl">
              {step.title}
            </h3>
            <span className="hidden h-2 w-2 rounded-full bg-blue-400 sm:block" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {step.subtitle}
            </p>
          </div>

          <p className="mb-6 max-w-3xl leading-relaxed text-slate-600">
            {step.description}
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {step.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-sm text-slate-600"
              >
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#0062D6]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function WhyChooseUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.025]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 70, y: 12 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Why Our Process Works
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 lg:text-3xl">
            Built on Trust, Clarity, and Quality
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60, y: 14 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.9, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_4px_14px_rgba(15,23,42,0.03)] transition-all duration-500 hover:border-blue-100 hover:shadow-[0_22px_50px_rgba(0,98,214,0.08)] lg:p-7"
            >
              <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0062D6] to-[#0B3C95] shadow-[0_16px_40px_rgba(0,98,214,0.16)] transition-transform duration-300 group-hover:scale-108">
                <item.icon className="h-7 w-7 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#0062D6]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraHighlightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.16 });

  return (
    <section className="relative overflow-hidden bg-[#fbfcfe] py-16 lg:py-24">
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -45, y: -35 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Added Value
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 lg:text-3xl">
            More Than a Delivery Process
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 lg:text-base">
            These are the extra qualities that make the workflow feel premium,
            structured, and dependable from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {extraHighlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40, y: -30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.9, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_4px_12px_rgba(15,23,42,0.03)] transition-all duration-500 hover:border-blue-100 hover:shadow-[0_20px_45px_rgba(0,98,214,0.07)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0062D6] transition-transform duration-300 group-hover:scale-108">
                <item.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#0062D6]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0062D6] to-[#0B3C95] py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12"
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white lg:text-4xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-blue-100 lg:text-base">
          Let&apos;s turn your idea into a polished digital experience with a clear
          plan, premium execution, and long-term support.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0062D6] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function ProcessPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.28 });

  return (
    <div className="flex min-h-screen flex-col bg-[#fbfcfe]">
      <section className="relative overflow-hidden pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-12"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0062D6]">
            Our Workflow
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
            Our Process
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            From concept to launch — a proven workflow that delivers exceptional
            results, keeps communication transparent, and maintains quality at
            every stage.
          </p>
        </motion.div>
      </section>

      <section className="relative overflow-hidden py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col gap-10 lg:gap-14">
            {processSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <ExtraHighlightsSection />
      <CTASection />
      <Footer />
    </div>
  );
}