"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Zap,
  Maximize2,
} from "lucide-react";
import { MATERIAL_SCIENCE_PILLARS } from "@/data/mahalaxmiContent";

const BENTO_CARDS = [
  {
    ...MATERIAL_SCIENCE_PILLARS[0],
    metric: "99.4% DCI-P3",
    metricSub: "Color Gamut",
    headline: "Quantum-Dot & Nano Semiconductor Diodes",
    desc: "2D/3D nano-engineered substrates with flip-chip SMD/COB packaging deliver pure blacks and wide 160° viewing cones.",
    image: "/images/tech-material-qd.jpg",
    wide: true,
  },
  {
    ...MATERIAL_SCIENCE_PILLARS[1],
    metric: "16-Bit HDR",
    metricSub: "Signal Pipeline",
    headline: "Embedded GPU & Multi-Window Multiplexing",
    desc: "Pixel-level chromaticity calibration keeps skin tones and gradients natural even at 20% indoor brightness.",
    image: "/images/tech-software-gpu.jpg",
    wide: false,
  },
  {
    ...MATERIAL_SCIENCE_PILLARS[2],
    metric: "3,840 Hz",
    metricSub: "Refresh Rate",
    headline: "Common-Cathode Micro-LED Drive ICs",
    desc: "Dedicated PWM silicon eliminates camera scan lines while cutting power draw and heat by up to 30%.",
    image: "/images/tech-drive-ic.jpg",
    wide: false,
  },
  {
    ...MATERIAL_SCIENCE_PILLARS[3],
    metric: "< 0.1 mm",
    metricSub: "Seam Tolerance",
    headline: "Sub-2mm Micro-Spacing & Custom Forms",
    desc: "Scale effortlessly across flat boardrooms, 90° L-shaped 3D corners, curved stages, and transparent glass facades.",
    image: "/images/prod-transparent-indoor.jpg",
    wide: true,
  },
];

const HARDWARE_SPECS = [
  {
    icon: Maximize2,
    code: "01",
    title: "±0.1mm CNC Fast-Locks",
    desc: "Precision quick-lock pins pull adjacent cabinets completely flush — zero visible grid seams across giant walls.",
  },
  {
    icon: Zap,
    code: "02",
    title: "Dual-Channel Power Hub",
    desc: "Tool-free rear power & signal enclosure ensures uninterrupted 24/7 commercial uptime and clean internal routing.",
  },
  {
    icon: Wrench,
    code: "03",
    title: "60-Second Front Service",
    desc: "Vacuum-magnetic front modules pop out effortlessly for instant maintenance without rear wall clearance.",
  },
  {
    icon: ShieldCheck,
    code: "04",
    title: "Ahmedabad Sheet-Metal Build",
    desc: "Heavy-duty powder-coated MS and anodized aluminum frames built in-house for extreme structural longevity.",
  },
];

const VIEWING_PRESETS = [
  {
    pitch: "P1.86",
    mm: 1.86,
    minM: 1.8,
    defaultDist: 3.5,
    sweetSpot: "1.8m – 15m",
    density: "288,906 px/m²",
    venue: "Executive Boardrooms & Control Rooms",
    image: "/images/app-control-room.jpg",
  },
  {
    pitch: "P2.5",
    mm: 2.5,
    minM: 2.5,
    defaultDist: 5.0,
    sweetSpot: "2.5m – 22m",
    density: "160,000 px/m²",
    venue: "Retail Showrooms, Lobbies & Banquet Halls",
    image: "/images/indoor-led-showroom.jpg",
  },
  {
    pitch: "P4.0",
    mm: 4.0,
    minM: 4.0,
    defaultDist: 8.0,
    sweetSpot: "4.0m – 35m",
    density: "62,500 px/m²",
    venue: "Shopping Malls, Storefronts & Live Stages",
    image: "/images/stage-concert-led.jpg",
  },
  {
    pitch: "P6.67",
    mm: 6.67,
    minM: 6.5,
    defaultDist: 12.0,
    sweetSpot: "6.5m – 65m",
    density: "22,500 px/m²",
    venue: "90° L-Shaped 3D Corners & City Junctions",
    image: "/images/outdoor-3d-billboard.jpg",
  },
  {
    pitch: "P10.0",
    mm: 10.0,
    minM: 10.0,
    defaultDist: 18.0,
    sweetSpot: "10m – 120m+",
    density: "10,000 px/m²",
    venue: "Highway Digital Billboards & Sports Stadiums",
    image: "/images/prod-digital-billboard.jpg",
  },
];

interface TechnologySectionProps {
  onEnquire: (topic: string) => void;
}

export default function TechnologySection({
  onEnquire,
}: TechnologySectionProps) {
  const [selectedPitchIdx, setSelectedPitchIdx] = useState(1);
  const [viewerDist, setViewerDist] = useState(VIEWING_PRESETS[1].defaultDist);

  const activePitch = VIEWING_PRESETS[selectedPitchIdx];
  const isRetinaFused = viewerDist >= activePitch.minM;

  const pixelGridOpacity = isRetinaFused
    ? 0
    : Math.min(
        0.72,
        ((activePitch.minM - viewerDist) / activePitch.minM) * 0.85 + 0.18
      );
  const gridCellPx = Math.max(4, Math.round(activePitch.mm * 1.6));

  const minThresholdX = 46 + (activePitch.minM / 25) * 284;
  const viewerRadarX = 46 + (Math.min(25, viewerDist) / 25) * 284;

  const handleSelectPitch = (idx: number) => {
    setSelectedPitchIdx(idx);
    setViewerDist(VIEWING_PRESETS[idx].defaultDist);
  };

  return (
    <section id="technology" className="w-full">
      {/* PART A: Discover Cutting-Edge Technology — Asymmetric Macro Bento Grid */}
      <div className="bg-t-bg py-24 sm:py-32 text-t-ink transition-colors">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-muted">
                <span className="text-t-accent">03</span>
                <span className="h-px w-6 bg-t-accent" />
                <span>Material Science &amp; Core Stack</span>
              </div>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-5xl">
                Discover Cutting-Edge Technology
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-t-muted">
              Four tightly integrated hardware disciplines — from microscopic
              quantum-dot wafers to custom-milled modular frames.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {BENTO_CARDS.map((card) =>
              card.wide ? (
                <article
                  key={card.id}
                  className="group relative min-h-[430px] sm:min-h-[470px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-t-stage text-white lg:col-span-7 flex flex-col justify-between p-7 sm:p-10 shadow-xl"
                >
                  <Image
                    src={card.image}
                    alt={card.headline}
                    fill
                    className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />

                  <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                    <span className="rounded-full border border-white/20 bg-black/65 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                      {card.code} • {card.title}
                    </span>

                    <div className="rounded-2xl border border-white/20 bg-black/65 px-4 py-2.5 text-right backdrop-blur-md">
                      <p className="font-display text-xl sm:text-2xl font-bold text-t-stage-accent leading-none">
                        {card.metric}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                        {card.metricSub}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 max-w-xl space-y-4 pt-16">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl leading-tight">
                      {card.headline}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-200">
                      {card.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {card.points.map((pt) => (
                        <span
                          key={pt}
                          className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[11px] font-medium text-white backdrop-blur-md"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ) : (
                <article
                  key={card.id}
                  className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-t-stage text-white lg:col-span-5 flex flex-col justify-between shadow-xl"
                >
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black">
                    <Image
                      src={card.image}
                      alt={card.headline}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-t-stage via-transparent to-black/30" />

                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/20 bg-black/70 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        {card.code} • {card.title}
                      </span>
                      <span className="rounded-full bg-t-stage-accent px-3 py-1 font-mono text-xs font-bold text-t-stage-accent-fg">
                        {card.metric}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between p-7 sm:p-8 pt-4 space-y-5">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug text-white">
                        {card.headline}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                        {card.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                      {card.points.map((pt) => (
                        <span
                          key={pt}
                          className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[11px] text-zinc-200"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>

      {/* PART B: Experience Our LED Display Technology */}
      <div className="bg-t-stage py-24 sm:py-32 text-white border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-stage-accent">
                In-House Structural Engineering
              </p>
              <h3 className="font-display mt-2.5 text-3xl font-bold tracking-[-0.025em] sm:text-5xl">
                Experience Our LED Display Technology
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              Precision die-cast aluminum and custom sheet-metal cabinets
              engineered at our Ahmedabad manufacturing plant for lifetime
              flatness.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-white/10 bg-t-stage-card">
            <div className="relative aspect-[16/8] min-h-[260px] w-full overflow-hidden bg-black">
              <Image
                src="/images/tech-cabinet-hardware.jpg"
                alt="Mahalaxmi Precision CNC Die-Cast Aluminum LED Cabinet Architecture"
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-t-stage-card via-transparent to-black/35" />

              <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-white/20 bg-black/80 px-4 py-1.5 font-mono text-[11px] font-semibold text-t-stage-accent backdrop-blur-md">
                  CNC DIE-CAST &amp; SHEET-METAL ARCHITECTURE
                </span>
                <span className="rounded-full border border-white/15 bg-black/80 px-4 py-1.5 font-mono text-[11px] text-zinc-200 backdrop-blur-md">
                  100,000 HRS DIODE LIFESPAN
                </span>
              </div>
            </div>

            <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
              {HARDWARE_SPECS.map((spec) => {
                const Icon = spec.icon;
                return (
                  <div key={spec.code} className="p-7 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-t-stage-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-zinc-500">
                        {spec.code}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-bold text-white">
                      {spec.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {spec.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* PART C: Minimum Viewing Distance — Cinema Retina Fusion & Optical Radar Simulator */}
      <div className="bg-t-surface py-24 sm:py-32 text-t-ink border-t border-t-border transition-colors">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-accent">
                Interactive Retina Acuity Simulator
              </p>
              <h3 className="font-display mt-2.5 text-3xl font-bold tracking-[-0.025em] sm:text-5xl">
                Minimum Viewing Distance
              </h3>
              <p className="mt-3 text-sm sm:text-base text-t-muted">
                Choose a pixel pitch and scrub the live observer distance to see
                the exact threshold where individual LEDs fuse into seamless
                retina clarity.
              </p>
            </div>

            <div className="inline-flex flex-wrap gap-1.5 rounded-2xl border border-t-border bg-t-card p-1.5 shadow-sm">
              {VIEWING_PRESETS.map((preset, idx) => {
                const isSelected = idx === selectedPitchIdx;
                return (
                  <button
                    key={preset.pitch}
                    type="button"
                    onClick={() => handleSelectPitch(idx)}
                    className={`rounded-xl px-4 py-2.5 font-mono text-xs font-bold transition ${
                      isSelected
                        ? "bg-t-accent text-t-accent-fg shadow-sm"
                        : "text-t-muted hover:bg-t-surface hover:text-t-ink"
                    }`}
                  >
                    {preset.pitch}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-t-border bg-t-stage text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="relative min-h-[380px] sm:min-h-[480px] lg:col-span-7 overflow-hidden bg-black flex flex-col justify-between p-6 sm:p-8">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activePitch.pitch}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 0.88, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activePitch.image}
                      alt={activePitch.venue}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </motion.div>
                </AnimatePresence>

                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: pixelGridOpacity,
                    backgroundImage:
                      "radial-gradient(rgba(0,0,0,0.85) 1.2px, transparent 1.2px), linear-gradient(to right, rgba(0,0,0,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.55) 1px, transparent 1px)",
                    backgroundSize: `${gridCellPx}px ${gridCellPx}px`,
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/45" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/75 px-4 py-2 backdrop-blur-xl">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isRetinaFused
                          ? "bg-t-stage-accent"
                          : "bg-amber-400 animate-pulse"
                      }`}
                    />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      {isRetinaFused
                        ? `Retina Fusion Locked (${viewerDist.toFixed(1)}m)`
                        : `Pixels Visible at ${viewerDist.toFixed(1)}m — Step to ${activePitch.minM}m+`}
                    </span>
                  </div>

                  <div className="hidden sm:flex flex-col items-center rounded-2xl border border-white/20 bg-black/80 p-3 backdrop-blur-xl">
                    <div className="grid grid-cols-4 gap-1.5 p-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-t-stage-accent"
                        />
                      ))}
                    </div>
                    <span className="mt-1.5 font-mono text-[10px] font-bold text-zinc-300">
                      {activePitch.mm} mm Pitch
                    </span>
                  </div>
                </div>

                <div className="relative z-10 space-y-4">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-t-stage-accent">
                      Target Deployment Venue
                    </span>
                    <h4 className="font-display mt-1 text-2xl sm:text-3xl font-bold text-white">
                      {activePitch.venue}
                    </h4>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                    <div className="rounded-2xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5 backdrop-blur-md">
                      <p className="font-mono text-[10px] uppercase text-zinc-400">
                        Diode Density
                      </p>
                      <p className="mt-0.5 font-mono text-xs sm:text-sm font-bold text-white">
                        {activePitch.density}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5 backdrop-blur-md">
                      <p className="font-mono text-[10px] uppercase text-zinc-400">
                        Sweet Spot
                      </p>
                      <p className="mt-0.5 font-mono text-xs sm:text-sm font-bold text-white">
                        {activePitch.sweetSpot}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5 backdrop-blur-md">
                      <p className="font-mono text-[10px] uppercase text-zinc-400">
                        Viewing Cone
                      </p>
                      <p className="mt-0.5 font-mono text-xs sm:text-sm font-bold text-white">
                        160° H / 160° V
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-white/10 bg-t-stage-card p-7 sm:p-10 lg:col-span-5 flex flex-col justify-between space-y-7">
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                        Active Model
                      </p>
                      <p className="font-display text-3xl font-bold text-t-stage-accent">
                        {activePitch.pitch}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                        Min Fusion Threshold
                      </p>
                      <p className="font-mono text-lg font-bold text-white">
                        {activePitch.minM.toFixed(1)} Meters
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-t-stage p-4">
                    <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      <span>Top-Down 160° Dispersion Cone</span>
                      <span>Scale: 0m – 25m</span>
                    </div>

                    <svg
                      viewBox="0 0 360 170"
                      className="w-full h-auto"
                      role="img"
                      aria-label="Top-down optical viewing cone rangefinder"
                    >
                      <defs>
                        <linearGradient
                          id="coneGrad"
                          x1="0%"
                          y1="50%"
                          x2="100%"
                          y2="50%"
                        >
                          <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                        </linearGradient>
                      </defs>

                      <polygon
                        points="42,85 342,14 342,156"
                        fill="url(#coneGrad)"
                      />

                      {[5, 10, 15, 20, 25].map((m) => {
                        const x = 46 + (m / 25) * 284;
                        return (
                          <g key={m}>
                            <line
                              x1={x}
                              y1="20"
                              x2={x}
                              y2="150"
                              stroke="rgba(255,255,255,0.08)"
                              strokeDasharray="3 3"
                            />
                            <text
                              x={x}
                              y="164"
                              textAnchor="middle"
                              fill="rgba(255,255,255,0.38)"
                              fontSize="9"
                              fontFamily="monospace"
                            >
                              {m}m
                            </text>
                          </g>
                        );
                      })}

                      <line
                        x1="44"
                        y1="85"
                        x2="338"
                        y2="85"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                      />

                      <line
                        x1={minThresholdX}
                        y1="22"
                        x2={minThresholdX}
                        y2="148"
                        stroke="var(--t-stage-accent)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <text
                        x={minThresholdX}
                        y="15"
                        textAnchor="middle"
                        fill="var(--t-stage-accent)"
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        MIN {activePitch.minM}m
                      </text>

                      <rect
                        x="34"
                        y="46"
                        width="8"
                        height="78"
                        rx="3"
                        fill="var(--t-stage-accent)"
                      />

                      <g
                        style={{
                          transform: `translateX(${viewerRadarX}px)`,
                          transition: "transform 120ms ease-out",
                        }}
                      >
                        <circle
                          cx="0"
                          cy="85"
                          r="13"
                          fill={
                            isRetinaFused
                              ? "rgba(255,255,255,0.2)"
                              : "rgba(251,191,36,0.25)"
                          }
                        />
                        <circle
                          cx="0"
                          cy="85"
                          r="6"
                          fill={
                            isRetinaFused ? "var(--t-stage-accent)" : "#FBBF24"
                          }
                        />
                        <rect
                          x="-22"
                          y="56"
                          width="44"
                          height="18"
                          rx="5"
                          fill="#FFFFFF"
                        />
                        <text
                          x="0"
                          y="68"
                          textAnchor="middle"
                          fill="#09090B"
                          fontSize="9.5"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {viewerDist.toFixed(1)}m
                        </text>
                      </g>
                    </svg>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-zinc-300">
                        Test Observer Distance
                      </span>
                      <span className="font-mono text-sm font-bold text-t-stage-accent">
                        {viewerDist.toFixed(1)} Meters
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={25}
                      step={0.5}
                      value={viewerDist}
                      onChange={(e) => setViewerDist(Number(e.target.value))}
                      className="led-slider-dark w-full"
                    />
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() =>
                          setViewerDist(
                            Math.max(
                              1,
                              Number((activePitch.minM * 0.5).toFixed(1))
                            )
                          )
                        }
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-400 transition hover:border-white/30 hover:text-white"
                      >
                        Test Close (
                        {Math.max(
                          1,
                          Number((activePitch.minM * 0.5).toFixed(1))
                        )}
                        m)
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewerDist(activePitch.minM)}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-400 transition hover:border-white/30 hover:text-white"
                      >
                        At Threshold ({activePitch.minM}m)
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewerDist(activePitch.defaultDist)}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-400 transition hover:border-white/30 hover:text-white"
                      >
                        Sweet Spot ({activePitch.defaultDist}m)
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onEnquire(
                      `Pitch Inquiry: ${activePitch.pitch} (Observer distance ~${viewerDist.toFixed(1)}m, ${activePitch.venue})`
                    )
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-t-stage-accent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-t-stage-accent-fg transition opacity-95 hover:opacity-100"
                >
                  Enquire {activePitch.pitch} Display
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
