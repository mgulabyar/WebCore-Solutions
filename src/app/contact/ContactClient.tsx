/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  MessageCircle,
} from "lucide-react";

type OfficeInfo = { label: string; value: string };

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
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0062D6]">
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Let’s start your next project.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Tell us about your idea, timeline, and goals. We’ll get back with a clear next step.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <h2 className="text-xl font-semibold text-slate-900">Get in touch</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                We usually reply within one business day.
              </p>

              <div className="mt-6 space-y-4">
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
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-linear-to-br from-[#0062D6] to-[#0B3C95] p-6 text-white shadow-[0_12px_35px_rgba(0,98,214,0.18)]">
              <h3 className="text-lg font-semibold">Services we cover</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] md:p-10">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                <Field label="Email" name="email" value={form.email} onChange={onChange} type="email" required />
                <Field label="Subject" name="subject" value={form.subject} onChange={onChange} required />
                <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
                <Field label="Company" name="company" value={form.company} onChange={onChange} />
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#0062D6] focus:bg-white"
                  >
                    <option value="">Select service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={7}
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
                className="inline-flex items-center gap-2 rounded-lg bg-[#0062D6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0051b3] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
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