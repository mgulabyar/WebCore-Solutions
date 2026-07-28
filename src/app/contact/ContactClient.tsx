/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

type OfficeInfo = { label: string; value: string };

function ContactHero() {
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(textEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-16">
      <style>{`
        .contact-hero-left {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
        }
        .contact-hero-left.contact-hero-active {
          opacity: 1;
          transform: translateY(0);
        }
        .contact-hero-right {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 1.05s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }
        .contact-hero-right.contact-hero-active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>

      <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-blue-50/70 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-3 sm:px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div
          ref={textRef}
          className={`contact-hero-left ${isVisible ? "contact-hero-active" : ""} text-center lg:text-left`}
        >
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl md:text-4xl">
            Let&apos;s start your next project.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:mx-0">
            Tell us about your idea, timeline, and goals. Whether it&apos;s a new web application, a custom
            integration, or a full digital platform, our team is ready to turn your vision into a working
            product. Reach out and we&apos;ll get back with a clear next step.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="https://wa.me/923468016921"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0062D6] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0051b3] sm:px-5"
            >
              <MessageCircle className="h-4 w-4" />
              Call on WhatsApp
            </a>

            <a
              href="mailto:mubeen.dev356@gmail.com?subject=Contact%20Request&body=Hi%20Mubeen,%20I%20want%20to%20discuss%20a%20project."
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#0062D6] hover:text-[#0062D6] sm:px-5"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
          </div>
        </div>

        <div
          ref={mediaRef}
          className={`contact-hero-right ${isVisible ? "contact-hero-active" : ""} relative flex items-center justify-center`}
        >
          <div className="absolute inset-0 mx-auto h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
          <img
            src="/contact-us.png"
            alt="Contact WebCore Solutions"
            className="relative z-10 w-full max-w-xs sm:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default function ContactClient({
  officeInfo,
  services,
}: {
  officeInfo: OfficeInfo[];
  services: string[];
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return (
      form.name.trim() &&
      form.email.trim() &&
      form.subject.trim() &&
      form.message.trim() &&
      !loading
    );
  }, [form, loading]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Message could not be sent.");
      }

      setSuccess("Your message has been sent successfully.");
      setForm({
        name: "",
        email: "",
        subject: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <ContactHero />

      <section className="mx-auto max-w-7xl px-3 py-10 sm:px-4 md:px-8 md:py-14 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-6">
              <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Get in touch</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                We usually reply within one business day.
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-[#0062D6]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <a className="text-sm text-slate-600 hover:text-[#0062D6]" href="mailto:mubeen.dev356@gmail.com">
                      {officeInfo[0].value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-[#0062D6]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
                    <a
                      className="text-sm text-slate-600 hover:text-[#0062D6]"
                      href="https://wa.me/923468016921"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {officeInfo[1].value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#0062D6]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Location</p>
                    <p className="text-sm text-slate-600">{officeInfo[2].value}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#0062D6]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Response time</p>
                    <p className="text-sm text-slate-600">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-[#0062D6] to-[#0B3C95] p-4 text-white shadow-[0_12px_35px_rgba(0,98,214,0.18)] sm:p-6">
              <h3 className="text-lg font-semibold">Services we cover</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                    {item}
                  </span>
                ))}
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">Web Development</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">Frontend Engineering</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">Backend Integration</span>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-6 md:p-10">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                <Field label="Email" name="email" value={form.email} onChange={onChange} type="email" required />
                <Field label="Subject" name="subject" value={form.subject} onChange={onChange} required />
                <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
                <Field label="Company" name="company" value={form.company} onChange={onChange} />
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Service</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm outline-none transition focus:border-[#0062D6] focus:bg-white"
                    >
                      <option value="">Select service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-800" />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0062D6] focus:bg-white"
                />
              </div>

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex items-center gap-2 rounded-full bg-[#0062D6] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0051b3] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="pb-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 lg:px-12">
          <Link href="/blog" className="text-sm font-semibold text-[#0062D6] hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0062D6] focus:bg-white"
      />
    </div>
  );
}