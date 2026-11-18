"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/mahalaxmiContent";

const MARQUEE_ITEMS = [
  "L-SHAPED 3D OUTDOOR DISPLAYS",
  "INDOOR FIXED MICROPITCH WALLS",
  "PLUG & PLAY DIGITAL STANDEES",
  "HIGHWAY DIGITAL BILLBOARDS",
  "ADVANCED TRANSPARENT LED MESH",
  "INDOOR TRANSPARENT GLASS LED",
  "3,840 HZ BROADCAST REFRESH",
  "NAGPUR HQ • AHMEDABAD MANUFACTURING • KARNATAKA BRANCH",
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);

  return (
    <section id="home" className="w-full">
      <div className="relative min-h-[86vh] w-full overflow-hidden bg-t-stage text-white flex flex-col justify-between">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.82, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.headline}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-t-stage via-t-stage/75 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-t-stage via-transparent to-t-stage/40" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-20 pb-12 sm:px-8 lg:px-12 lg:pt-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-3xl space-y-6"
            >
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/55 px-4 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-t-stage-accent animate-pulse" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-200">
                  {currentSlide.eyebrow}
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.04]">
                {currentSlide.headline}
                <span className="mt-1.5 block text-t-stage-accent">
                  {currentSlide.accentLine}
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                {currentSlide.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={currentSlide.ctaHref}
                  className="inline-flex items-center gap-2.5 rounded-full bg-t-stage-accent px-7 py-4 text-sm font-semibold text-t-stage-accent-fg shadow-lg transition opacity-95 hover:opacity-100"
                >
                  {currentSlide.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#estimator"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.08] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/[0.16]"
                >
                  Calculate Screen Size
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/15 pt-6">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 flex-1 max-w-2xl">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="text-left group"
                  >
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/15 mb-2.5">
                      {isActive && (
                        <div
                          key={`hero-bar-${activeIndex}`}
                          className="h-full w-full rounded-full bg-t-stage-accent animate-progress-5500"
                        />
                      )}
                    </div>
                    <p className="font-mono text-[11px] font-bold text-t-stage-accent">
                      0{idx + 1} • {slide.statValue}
                    </p>
                    <p
                      className={`mt-0.5 text-xs font-medium truncate transition ${
                        isActive
                          ? "text-zinc-200"
                          : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      {slide.statLabel}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2.5 self-end">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white backdrop-blur-md transition hover:bg-t-stage-accent hover:text-t-stage-accent-fg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white backdrop-blur-md transition hover:bg-t-stage-accent hover:text-t-stage-accent-fg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Infinite Marquee */}
      <div className="overflow-hidden border-b border-t-border bg-t-stage py-3.5 text-white">
        <div className="animate-marquee flex items-center gap-10">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-3 font-mono text-[11px] font-semibold tracking-[0.16em] text-zinc-300 whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-t-stage-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
