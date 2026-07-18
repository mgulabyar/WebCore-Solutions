/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-4 sm:px-4 lg:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
        >
          <img src="/webcore.png" alt="WebCore Solutions" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium py-1 transition-colors duration-300 group ${
                  isActive
                    ? "text-[#0076FF]"
                    : "text-neutral-600 hover:text-[#0076FF]"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#0076FF] transition-all duration-350 ease-out origin-center ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[#0076FF] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:bg-[#0B3C95] hover:shadow-lg hover:shadow-blue-500/10 active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5   transition-all duration-300 hover:bg-neutral-100/80 active:scale-95 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span 
            className={`h-0.5 w-5 rounded-full bg-neutral-700 transition-all duration-300 ease-in-out ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`} 
          />
          <span 
            className={`h-0.5 w-5 rounded-full bg-neutral-700 transition-all duration-200 ease-in-out ${
              menuOpen ? "opacity-0 scale-90" : ""
            }`} 
          />
          <span 
            className={`h-0.5 w-5 rounded-full bg-neutral-700 transition-all duration-300 ease-in-out ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`} 
          />
        </button>
      </div>

      <div 
        className={`grid transition-all duration-350 ease-in-out md:hidden ${
          menuOpen 
            ? "grid-rows-[1fr] opacity-100 border-t border-neutral-100" 
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 bg-white px-5 py-5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium py-1 transition-colors duration-200 ${
                    isActive ? "text-[#0076FF]" : "text-neutral-600 hover:text-[#0076FF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#0076FF] px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B3C95]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
