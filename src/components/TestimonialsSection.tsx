"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Plus,
  Minus,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { CLIENT_REVIEWS, FAQ_ITEMS } from "@/data/mahalaxmiContent";

const IMPACT_STATS = [
  { value: "250+", label: "LED Walls Commissioned", sub: "Commercial & OOH" },
  { value: "45,000+", label: "Sq.Ft Active Display Area", sub: "Across India" },
  { value: "3 Hubs", label: "Nagpur • Ahmedabad • KA", sub: "Sales & Fabrication" },
  { value: "99.8%", label: "Commercial Uptime Rating", sub: "24/7 Duty Cycle" },
];

const REVIEW_MEDIA = [
  {
    image: "/images/outdoor-3d-billboard.jpg",
    roiMetric: "2×",
    roiLabel: "Advertiser Slot Bookings",
  },
  {
    image: "/images/indoor-led-showroom.jpg",
    roiMetric: "0 mm",
    roiLabel: "Flush Marble Bezel Gap",
  },
  {
    image: "/images/stage-concert-led.jpg",
    roiMetric: "3,840 Hz",
    roiLabel: "Zero Camera Scan-Lines",
  },
  {
    image: "/images/prod-transparent-indoor.jpg",
    roiMetric: "75%",
    roiLabel: "Natural Daylight Retained",
  },
];

interface TestimonialsSectionProps {
  onEnquire?: (topic: string) => void;
}

export default function TestimonialsSection({
  onEnquire,
}: TestimonialsSectionProps) {
  const [reviewIdx, setReviewIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setReviewIdx((p) => (p + 1) % CLIENT_REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, reviewIdx]);

  const activeReview = CLIENT_REVIEWS[reviewIdx];
  const activeMedia = REVIEW_MEDIA[reviewIdx % REVIEW_MEDIA.length];

  const prevReview = () =>
    setReviewIdx(
      (prev) => (prev - 1 + CLIENT_REVIEWS.length) % CLIENT_REVIEWS.length
    );
  const nextReview = () =>
    setReviewIdx((prev) => (prev + 1) % CLIENT_REVIEWS.length);

  return (
    <section
      id="reviews"
      className="bg-t-surface py-24 sm:py-32 text-t-ink border-t border-t-border transition-colors"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 space-y-28">
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-muted">
                <span className="text-t-accent">04</span>
                <span className="h-px w-6 bg-t-accent" />
                <span>Verified Client Stories</span>
              </div>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-5xl">
                Trusted by Brands &amp; Media Owners
              </h2>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-t-muted mr-1.5">
                0{reviewIdx + 1} / 0{CLIENT_REVIEWS.length}
              </span>
              <button
                type="button"
                onClick={prevReview}
                aria-label="Previous review"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-t-border bg-t-card text-t-ink transition hover:border-t-accent hover:bg-t-accent hover:text-t-accent-fg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                aria-label="Next review"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-t-border bg-t-card text-t-ink transition hover:border-t-accent hover:bg-t-accent hover:text-t-accent-fg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="mt-10 overflow-hidden rounded-[2.5rem] bg-t-stage text-white shadow-2xl border border-t-border"
          >
            <div className="grid grid-cols-2 divide-y divide-white/10 border-b border-white/10 sm:divide-y-0 sm:divide-x lg:grid-cols-4 bg-t-stage-card">
              {IMPACT_STATS.map((stat) => (
                <div key={stat.label} className="p-6 sm:p-8">
                  <p className="font-display text-2xl sm:text-4xl font-bold text-t-stage-accent tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-zinc-200">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReview.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-t-stage-accent" />
                        <span className="font-mono text-[11px] font-semibold text-zinc-200">
                          {activeReview.installedModel}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-t-stage-accent">
                        {Array.from({ length: activeReview.rating }).map(
                          (_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          )
                        )}
                      </div>
                    </div>

                    <blockquote className="font-display text-xl sm:text-2xl lg:text-[1.7rem] font-medium leading-snug text-white">
                      &ldquo;{activeReview.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-t-stage-accent font-display text-sm font-bold text-t-stage-accent-fg">
                        {activeReview.clientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-display text-base font-bold text-white">
                          {activeReview.clientName}
                        </p>
                        <p className="font-mono text-xs text-zinc-400">
                          {activeReview.company} • {activeReview.city}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 border-t border-white/10 pt-6">
                  {CLIENT_REVIEWS.map((rev, idx) => {
                    const isSelected = idx === reviewIdx;
                    return (
                      <button
                        key={rev.id}
                        type="button"
                        onClick={() => setReviewIdx(idx)}
                        className={`relative overflow-hidden rounded-xl border p-3 text-left transition ${
                          isSelected
                            ? "border-white/40 bg-white/[0.08]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/25"
                        }`}
                      >
                        <p className="truncate text-xs font-bold text-white">
                          {rev.company}
                        </p>
                        <p className="truncate font-mono text-[10px] text-zinc-400">
                          {rev.city}
                        </p>
                        {isSelected && !paused && (
                          <span
                            key={`rev-bar-${reviewIdx}`}
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-t-stage-accent animate-progress-5500"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative min-h-[300px] lg:col-span-5 overflow-hidden bg-black">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeMedia.image}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 0.85, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeMedia.image}
                      alt={activeReview.installedModel}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

                <div className="absolute bottom-6 left-6 right-6 z-10 rounded-2xl border border-white/20 bg-black/75 p-5 backdrop-blur-xl flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                      Measured Project Impact
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white">
                      {activeMedia.roiLabel}
                    </p>
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-t-stage-accent">
                    {activeMedia.roiMetric}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: Editorial Split Buyer FAQ Concierge */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-accent">
                Technical &amp; Commercial Clarity
              </p>
              <h3 className="font-display mt-2.5 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
                Frequently Asked Questions
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-t-muted">
                Everything you need to know about pixel pitch selection, monsoon
                protection, CMS scheduling, and turnkey structural AMC.
              </p>
            </div>

            <div className="rounded-3xl border border-t-border bg-t-card p-6 space-y-4 shadow-xs">
              <p className="font-display text-base font-bold text-t-ink">
                Need Custom Load &amp; CAD Drawings?
              </p>
              <p className="text-xs leading-relaxed text-t-muted">
                Our Nagpur &amp; Ahmedabad engineers prepare custom cabinet
                blueprints and power specs within 24 hours.
              </p>
              <a
                href="#contact"
                onClick={() =>
                  onEnquire?.("Request Custom Structural CAD & Power Spec")
                }
                className="inline-flex items-center gap-2 rounded-full bg-t-accent px-5 py-2.5 text-xs font-semibold text-t-accent-fg transition hover:bg-t-accent-hover"
              >
                Ask an Engineer
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3.5">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-3xl border transition-all ${
                    isOpen
                      ? "border-t-accent bg-t-card shadow-md"
                      : "border-t-border bg-t-card/75 hover:border-t-accent/50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 font-mono text-xs font-bold text-t-accent">
                        0{idx + 1}
                      </span>
                      <span className="font-display text-base sm:text-lg font-bold text-t-ink">
                        {faq.q}
                      </span>
                    </div>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-t-accent text-t-accent-fg"
                          : "bg-t-surface text-t-ink"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pl-14 text-sm sm:text-base leading-relaxed text-t-muted">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
