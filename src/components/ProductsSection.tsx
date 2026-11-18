"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { PRODUCTS_DATA } from "@/data/mahalaxmiContent";

interface ProductsSectionProps {
  onEnquire: (productTitle: string) => void;
}

export default function ProductsSection({ onEnquire }: ProductsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProduct = PRODUCTS_DATA[activeIdx];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PRODUCTS_DATA.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, activeIdx]);

  const handlePrev = () => {
    setActiveIdx(
      (prev) => (prev - 1 + PRODUCTS_DATA.length) % PRODUCTS_DATA.length
    );
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % PRODUCTS_DATA.length);
  };

  return (
    <section
      id="products"
      className="bg-t-bg py-24 sm:py-32 text-t-ink transition-colors"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-muted">
              <span className="text-t-accent">01</span>
              <span className="h-px w-6 bg-t-accent" />
              <span>Flagship Display Showcase</span>
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-5xl">
              Our LED Video Wall Products
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className="inline-flex items-center gap-1.5 rounded-full border border-t-border bg-t-surface px-3.5 py-2 font-mono text-[11px] font-semibold text-t-muted transition hover:border-t-accent hover:text-t-ink"
              aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            >
              {isPaused ? (
                <>
                  <Play className="h-3 w-3 text-t-accent" />
                  Paused
                </>
              ) : (
                <>
                  <Pause className="h-3 w-3 text-t-accent" />
                  Auto
                </>
              )}
            </button>
            <span className="font-mono text-xs font-bold text-t-muted mx-1.5">
              0{activeIdx + 1} / 0{PRODUCTS_DATA.length}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous product"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-t-border bg-t-surface text-t-ink transition hover:border-t-accent hover:bg-t-accent hover:text-t-accent-fg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next product"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-t-border bg-t-surface text-t-ink transition hover:border-t-accent hover:bg-t-accent hover:text-t-accent-fg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Animated Split-Screen Spotlight Stage */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-10 overflow-hidden rounded-[2.25rem] border border-t-border bg-t-surface shadow-xl"
        >
          <div className="grid lg:grid-cols-12 items-stretch">
            <div className="relative min-h-[320px] sm:min-h-[450px] lg:col-span-7 overflow-hidden bg-t-stage">
              <AnimatePresence mode="sync">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-4 py-1.5 font-mono text-xs font-semibold text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-t-stage-accent" />
                {activeProduct.tag}
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-wrap items-center gap-3">
                <span className="rounded-xl bg-t-stage-accent px-4 py-1.5 font-mono text-xs font-bold text-t-stage-accent-fg shadow-lg">
                  Pitch: {activeProduct.pitchRange}
                </span>
                <span className="rounded-xl border border-white/20 bg-black/80 px-4 py-1.5 font-mono text-xs font-semibold text-white backdrop-blur-md">
                  Luminance: {activeProduct.brightness}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 bg-t-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.38, ease: "easeOut" }}
                  className="flex flex-1 flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-t-accent">
                      Product 0{activeIdx + 1}
                    </span>
                    <h3 className="font-display mt-2 text-2xl font-bold text-t-ink sm:text-3xl">
                      {activeProduct.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-t-muted">
                      {activeProduct.summary}
                    </p>

                    <div className="mt-6 space-y-2.5 border-t border-t-border pt-5">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-t-muted">
                        Key Engineering Highlights
                      </p>
                      {activeProduct.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2.5 text-sm font-medium text-t-ink"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-t-accent-soft text-t-accent">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-t-border pt-5">
                    <p className="mb-4 text-xs text-t-muted">
                      <strong className="text-t-ink">Ideal For:</strong>{" "}
                      {activeProduct.idealFor}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        onEnquire(`Product Inquiry: ${activeProduct.title}`)
                      }
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-t-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-t-accent-fg transition hover:bg-t-accent-hover"
                    >
                      Request Specs &amp; Pricing
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip with Live Theme-Aware Progress Bar */}
        <div className="no-scrollbar mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {PRODUCTS_DATA.map((prod, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`snap-start group relative flex min-w-[230px] sm:min-w-[250px] flex-1 items-center gap-3.5 overflow-hidden rounded-2xl border p-3 text-left transition-all ${
                  isSelected
                    ? "border-t-accent bg-t-accent-soft shadow-sm"
                    : "border-t-border bg-t-card hover:border-t-accent/50"
                }`}
              >
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-black">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0">
                  <span
                    className={`font-mono text-[10px] font-bold uppercase ${
                      isSelected ? "text-t-accent" : "text-t-muted"
                    }`}
                  >
                    0{idx + 1} • {prod.pitchRange}
                  </span>
                  <p className="truncate text-xs font-bold text-t-ink">
                    {prod.title}
                  </p>
                </div>

                {isSelected && !isPaused && (
                  <span
                    key={`prod-bar-${activeIdx}`}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-t-accent animate-progress-4500"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
