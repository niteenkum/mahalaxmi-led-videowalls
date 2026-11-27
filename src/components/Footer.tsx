"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/data/mahalaxmiContent";

interface FooterProps {
  onLogoClick?: () => void;
}

export default function Footer({ onLogoClick }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-t-stage text-zinc-400">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-10 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="space-y-2">
            <a
              href="#home"
              onClick={(e) => {
                if (onLogoClick) {
                  e.preventDefault();
                  onLogoClick();
                }
              }}
              className="inline-flex items-center gap-3.5 group"
            >
              <div className="relative h-14 w-[84px] shrink-0 overflow-hidden rounded-xl bg-black transition group-hover:scale-[1.03]">
                <Image
                  src="/images/logo.png"
                  alt="Mahalaxmi Visuals Private Limited — LED Video Walls"
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="84px"
                />
              </div>
              <p className="font-display text-base font-bold tracking-[0.14em] uppercase text-white">
                Mahalaxmi LED Video Walls
              </p>
            </a>
            <p className="max-w-md text-xs leading-relaxed text-zinc-400">
              Curved / Flexible Outdoor Displays • Indoor Fixed LEDs • Outdoor
              &amp; Indoor Standees • Pole Mounting Screens • Digital Billboards
              • Drone &amp; Mobile Van LED Walls
            </p>
            <p className="font-mono text-[11px] text-zinc-500">
              {CONTACT_INFO.email} • {CONTACT_INFO.phones.join(" / ")}
            </p>
          </div>

          <div className="flex flex-wrap gap-7 text-xs font-medium">
            <a
              href="#home"
              className="hover:text-t-stage-accent transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="hover:text-t-stage-accent transition-colors"
            >
              Products
            </a>
            <a
              href="#applications"
              className="hover:text-t-stage-accent transition-colors"
            >
              Applications
            </a>
            <a
              href="#technology"
              className="hover:text-t-stage-accent transition-colors"
            >
              Technology
            </a>
            <a
              href="#reviews"
              className="hover:text-t-stage-accent transition-colors"
            >
              Reviews
            </a>
            <a
              href="#about"
              className="hover:text-t-stage-accent transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-t-stage-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Mahalaxmi LED Video Walls (Est. 2022). All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919209167669"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] text-zinc-200 transition hover:border-t-stage-accent hover:text-t-stage-accent"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] text-zinc-200 transition hover:border-t-stage-accent hover:text-white"
            >
              Email Us
            </a>
            <Link
              href="/admin"
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] text-zinc-300 transition hover:border-t-stage-accent hover:text-t-stage-accent"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
