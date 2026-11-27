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

interface NavbarProps {
  onLogoClick?: () => void;
}

export default function Navbar({ onLogoClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white transition-colors">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
        {/* Brand Identity — Seamless on Dark Black Background */}
        <a
          href="#home"
          onClick={(e) => {
            if (onLogoClick) {
              e.preventDefault();
              setMobileOpen(false);
              onLogoClick();
            }
          }}
          className="flex items-center group shrink-0"
        >
          <div className="relative h-14 w-[84px] sm:h-16 sm:w-[96px] shrink-0 overflow-hidden transition group-hover:scale-[1.03]">
            <Image
              src="/images/logo.png"
              alt="Mahalaxmi Visuals Private Limited — LED Video Walls"
              fill
              unoptimized
              className="object-contain"
              sizes="96px"
            />
          </div>
        </a>

        {/* Clean Center Navigation */}
        <nav className="hidden xl:flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] px-2 py-1.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-zinc-300 transition hover:bg-white/15 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-t-stage-accent px-5 py-2.5 text-xs font-semibold tracking-wide text-t-stage-accent-fg transition opacity-95 hover:opacity-100"
          >
            Get Quote
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="xl:hidden rounded-xl border border-white/15 bg-white/[0.06] p-2.5 text-white"
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
        <div className="xl:hidden border-t border-white/10 bg-black px-5 py-6 space-y-2 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-t-stage-accent py-3 text-sm font-semibold text-t-stage-accent-fg"
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
