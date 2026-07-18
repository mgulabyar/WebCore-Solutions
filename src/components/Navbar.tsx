"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          WebCore <span className="text-cyan-500">Solutions</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-cyan-500"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-200 p-2 text-slate-900 transition hover:bg-slate-100 dark:border-slate-800 dark:text-white dark:hover:bg-slate-900 md:hidden"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-cyan-500"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <ThemeToggle />
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-cyan-500 px-5 py-2 text-center text-sm font-semibold text-slate-950"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
