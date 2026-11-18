"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ScreenCalculatorProps {
  onSelectConfig: (summary: string) => void;
}

export default function ScreenCalculator({
  onSelectConfig,
}: ScreenCalculatorProps) {
  const [environment, setEnvironment] = useState<"indoor" | "outdoor">("indoor");
  const [widthFt, setWidthFt] = useState(16);
  const [heightFt, setHeightFt] = useState(9);
  const [distanceM, setDistanceM] = useState(5);

  const recommendedPitch = (() => {
    if (environment === "indoor") {
      if (distanceM <= 3) return { label: "P1.86", mm: 1.86, nits: "800 Nits" };
      if (distanceM <= 6) return { label: "P2.5", mm: 2.5, nits: "1,000 Nits" };
      return { label: "P4.0", mm: 4.0, nits: "1,200 Nits" };
    }
    if (distanceM <= 6) return { label: "P4.0", mm: 4.0, nits: "5,500 Nits" };
    if (distanceM <= 12) return { label: "P6.67", mm: 6.67, nits: "6,500 Nits" };
    return { label: "P10.0", mm: 10.0, nits: "7,000 Nits" };
  })();

  const resX = Math.round((widthFt * 304.8) / recommendedPitch.mm);
  const resY = Math.round((heightFt * 304.8) / recommendedPitch.mm);
  const areaSqFt = widthFt * heightFt;
  const estCabinets = Math.max(4, Math.round(areaSqFt / 2.7));

  const scale = Math.min(250 / widthFt, 140 / heightFt);
  const previewW = Math.max(64, Math.round(widthFt * scale));
  const previewH = Math.max(42, Math.round(heightFt * scale));

  const configSummary = `${environment.toUpperCase()} ${widthFt}ft × ${heightFt}ft (${areaSqFt} sq.ft, ~${estCabinets} cabinets) — Recommended ${recommendedPitch.label}`;

  return (
    <section
      id="estimator"
      className="bg-t-bg py-24 sm:py-32 text-t-ink transition-colors"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2.25rem] border border-t-border bg-t-surface shadow-xl">
          <div className="grid lg:grid-cols-12">
            <div className="p-8 sm:p-12 lg:col-span-7 space-y-8 bg-t-card">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-accent">
                  Interactive Wall Configurator
                </p>
                <h2 className="font-display mt-2.5 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
                  Plan Your Custom Wall Size &amp; Pitch
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-t-muted">
                  Dial in your target wall width, height, and closest viewer
                  distance to compute native pixel resolution and cabinet count.
                </p>
              </div>

              <div className="inline-flex rounded-2xl border border-t-border bg-t-surface p-1.5">
                {(["indoor", "outdoor"] as const).map((env) => (
                  <button
                    key={env}
                    type="button"
                    onClick={() => setEnvironment(env)}
                    className={`rounded-xl px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
                      environment === env
                        ? "bg-t-accent text-t-accent-fg shadow-sm"
                        : "text-t-muted hover:text-t-ink"
                    }`}
                  >
                    {env} Wall
                  </button>
                ))}
              </div>

              <div className="grid gap-7 sm:grid-cols-3 pt-2">
                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-medium text-t-muted">
                      Wall Width
                    </span>
                    <span className="font-mono text-sm font-bold text-t-ink">
                      {widthFt} ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={50}
                    value={widthFt}
                    onChange={(e) => setWidthFt(Number(e.target.value))}
                    className="led-slider w-full"
                  />
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-medium text-t-muted">
                      Wall Height
                    </span>
                    <span className="font-mono text-sm font-bold text-t-ink">
                      {heightFt} ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={30}
                    value={heightFt}
                    onChange={(e) => setHeightFt(Number(e.target.value))}
                    className="led-slider w-full"
                  />
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-medium text-t-muted">
                      Min Viewing Dist.
                    </span>
                    <span className="font-mono text-sm font-bold text-t-accent">
                      {distanceM} m
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={25}
                    value={distanceM}
                    onChange={(e) => setDistanceM(Number(e.target.value))}
                    className="led-slider w-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-t-stage p-8 sm:p-12 text-white lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="relative flex h-48 items-center justify-center rounded-2xl border border-white/10 bg-t-stage-card p-4 overflow-hidden">
                  <div
                    style={{ width: previewW, height: previewH }}
                    className="relative overflow-hidden rounded-md border-2 border-t-stage-accent shadow-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <Image
                      src={
                        environment === "indoor"
                          ? "/images/indoor-led-showroom.jpg"
                          : "/images/outdoor-3d-billboard.jpg"
                      }
                      alt="Scaled LED Wall Preview"
                      fill
                      className="object-cover opacity-80"
                      sizes="260px"
                    />
                    <span className="relative z-10 rounded bg-black/75 px-2 py-0.5 font-mono text-[11px] font-bold text-white backdrop-blur-xs">
                      {widthFt}′ × {heightFt}′
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      Recommended Pitch
                    </p>
                    <p className="font-display mt-1 text-4xl font-bold text-t-stage-accent">
                      {recommendedPitch.label}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      Luminance
                    </p>
                    <p className="font-mono mt-1 text-sm font-bold text-white">
                      {recommendedPitch.nits}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Active Screen Area</span>
                    <span className="font-mono font-semibold text-white">
                      {areaSqFt} sq.ft (~{estCabinets} Cabinets)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Native Pixel Matrix</span>
                    <span className="font-mono font-semibold text-t-stage-accent">
                      {resX.toLocaleString()} × {resY.toLocaleString()} px
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectConfig(configSummary)}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-t-stage-accent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-t-stage-accent-fg transition opacity-95 hover:opacity-100"
              >
                Get Pricing for This Wall
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
