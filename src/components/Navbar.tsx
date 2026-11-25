"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Applications", href: "#applications" },
  { label: "Technology", href: "#technology" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-t-border/80 bg-t-bg/90 backdrop-blur-xl text-t-ink transition-colors">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
        {/* Brand Identity */}
        <a href="#home" className="flex items-center group shrink-0">
          <div className="relative h-11 w-[132px] sm:h-12 sm:w-36 shrink-0 overflow-hidden rounded-xl bg-black border border-t-border/60 shadow-xs transition group-hover:scale-[1.03]">
            <Image
              src="/images/logo.png"
              alt="Mahalaxmi Visuals Private Limited — LED Video Walls"
              fill
              unoptimized
              className="object-contain"
              sizes="144px"
            />
          </div>
        </a>

        {/* Clean Center Navigation */}
        <nav className="hidden xl:flex items-center gap-1 rounded-full border border-t-border bg-t-surface px-2 py-1.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-t-muted transition hover:bg-t-card hover:text-t-ink hover:shadow-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-t-accent px-5 py-2.5 text-xs font-semibold tracking-wide text-t-accent-fg transition hover:bg-t-accent-hover"
          >
            Get Quote
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="xl:hidden rounded-xl border border-t-border bg-t-surface p-2.5 text-t-ink"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-t-border bg-t-bg px-5 py-6 space-y-2 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-t-muted hover:bg-t-surface hover:text-t-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-t-accent py-3 text-sm font-semibold text-t-accent-fg"
            >
              Get Quote
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
