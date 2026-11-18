"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import {
  APPLICATIONS_DATA,
  type ApplicationItem,
} from "@/data/mahalaxmiContent";

interface ApplicationsSectionProps {
  onEnquire: (topic: string) => void;
}

export default function ApplicationsSection({
  onEnquire,
}: ApplicationsSectionProps) {
  const [expandedIdx, setExpandedIdx] = useState(0);
  const [modalApp, setModalApp] = useState<ApplicationItem | null>(null);

  return (
    <section
      id="applications"
      className="bg-t-surface py-24 sm:py-32 text-t-ink border-t border-t-border transition-colors"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-muted">
              <span className="text-t-accent">02</span>
              <span className="h-px w-6 bg-t-accent" />
              <span>Interactive Sector Gallery</span>
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-5xl">
              Applications Across Industries
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-t-muted">
            Hover or click any architectural panel below to inspect how
            Mahalaxmi LED systems power stadiums, XR broadcast stages, malls,
            and command centers.
          </p>
        </div>

        {/* Desktop: Interactive Expanding Horizontal Accordion */}
        <div className="mt-12 hidden lg:flex h-[540px] w-full gap-3.5">
          {APPLICATIONS_DATA.map((app, idx) => {
            const isExpanded = idx === expandedIdx;
            return (
              <div
                key={app.id}
                onMouseEnter={() => setExpandedIdx(idx)}
                onClick={() => setExpandedIdx(idx)}
                className={`relative cursor-pointer overflow-hidden rounded-[2rem] bg-t-stage transition-all duration-500 ease-out ${
                  isExpanded
                    ? "flex-[4.2] shadow-2xl"
                    : "flex-[0.85] opacity-90 hover:opacity-100"
                }`}
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    isExpanded ? "scale-100 opacity-85" : "scale-110 opacity-55"
                  }`}
                  sizes="(max-width: 1440px) 50vw, 700px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/25" />

                <div className="absolute top-5 left-5 flex items-center gap-2.5">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full font-mono text-xs font-bold transition ${
                      isExpanded
                        ? "bg-t-stage-accent text-t-stage-accent-fg"
                        : "bg-black/60 text-white border border-white/20 backdrop-blur-md"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  {isExpanded && (
                    <span className="rounded-full border border-white/20 bg-black/75 px-3.5 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                      {app.category}
                    </span>
                  )}
                </div>

                {!isExpanded && (
                  <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
                    <p
                      className="font-display text-sm font-bold tracking-wider uppercase text-white whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {app.title}
                    </p>
                  </div>
                )}

                {isExpanded && (
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <div className="max-w-xl space-y-3">
                      <span className="inline-block rounded-md bg-t-stage-accent px-2.5 py-1 font-mono text-[11px] font-bold text-t-stage-accent-fg">
                        Recommended Pitch: {app.recommendedPitch}
                      </span>
                      <h3 className="font-display text-2xl font-bold sm:text-3xl">
                        {app.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-200">
                        {app.summary}
                      </p>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalApp(app);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-t-stage-accent px-5 py-2.5 text-xs font-semibold text-t-stage-accent-fg transition opacity-95 hover:opacity-100"
                        >
                          Read More
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onEnquire(`Application Inquiry: ${app.title}`);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet: Swipeable Snap Carousel */}
        <div className="no-scrollbar mt-10 flex lg:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {APPLICATIONS_DATA.map((app, idx) => (
            <div
              key={app.id}
              className="snap-start min-w-[85vw] sm:min-w-[380px] overflow-hidden rounded-[2rem] border border-t-border bg-t-card shadow-md flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full bg-t-stage">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
                <span className="absolute top-3.5 left-3.5 rounded-full bg-black/80 px-3 py-1 font-mono text-[10px] font-bold text-white backdrop-blur-md">
                  0{idx + 1} • {app.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-t-ink">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-t-muted">
                    {app.summary}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-t-border flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-t-accent">
                    {app.recommendedPitch}
                  </span>
                  <button
                    type="button"
                    onClick={() => setModalApp(app)}
                    className="inline-flex items-center gap-1 rounded-full bg-t-accent px-4 py-2 text-xs font-semibold text-t-accent-fg"
                  >
                    Read More
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalApp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setModalApp(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-t-border bg-t-card text-t-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-t-stage">
              <Image
                src={modalApp.image}
                alt={modalApp.title}
                fill
                className="object-cover"
                sizes="700px"
              />
              <button
                type="button"
                onClick={() => setModalApp(null)}
                className="absolute top-4 right-4 rounded-full bg-black/75 p-2 text-white hover:bg-white hover:text-black transition"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-7 sm:p-9 space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-t-accent">
                {modalApp.category} • Recommended {modalApp.recommendedPitch}
              </span>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                {modalApp.title}
              </h3>
              <p className="text-sm leading-relaxed text-t-ink">
                {modalApp.summary}
              </p>
              <p className="text-sm leading-relaxed text-t-muted">
                {modalApp.details}
              </p>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const title = modalApp.title;
                    setModalApp(null);
                    onEnquire(`Application Solution: ${title}`);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-t-accent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-t-accent-fg hover:bg-t-accent-hover"
                >
                  Request Custom Solution
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setModalApp(null)}
                  className="rounded-full border border-t-border px-6 py-3 text-xs font-semibold text-t-muted hover:text-t-ink"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
