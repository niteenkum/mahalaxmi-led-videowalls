"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface FlagshipShowcasesProps {
  onSelectProduct: (name: string) => void;
}

export default function FlagshipShowcases({
  onSelectProduct,
}: FlagshipShowcasesProps) {
  return (
    <section id="showcases" className="w-full">
      {/* 01. Indoor MicroPitch Showcase — Warm Architectural Stone */}
      <div
        id="showcase-indoor"
        className="bg-[#F6F5F0] py-24 sm:py-32 text-[#0B0F17]"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
                <span>01</span>
                <span className="h-px w-6 bg-[#FF5A1F]" />
                <span>Indoor MicroPitch Architecture</span>
              </div>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-5xl leading-[1.06]">
                Pure Black Contrast. Zero Bezel Distraction.
              </h2>
            </div>

            <div className="max-w-md space-y-4">
              <p className="text-base leading-relaxed text-neutral-600">
                Precision die-cast P1.8 &amp; P2.5 walls crafted for executive
                boardrooms, luxury showrooms, auditoriums, and 24/7 command
                centers.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onSelectProduct("Indoor MicroPitch LED Wall (P1.8 / P2.5)")
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-[#090A0F] px-6 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-[#FF5A1F]"
                >
                  Request Indoor Quote
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href="#lineup"
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-xs font-semibold text-[#0B0F17] transition hover:border-[#0B0F17]"
                >
                  Compare Specs
                </a>
              </div>
            </div>
          </div>

          <div className="group relative mt-12 overflow-hidden rounded-[2rem] bg-neutral-900 shadow-[0_32px_64px_-16px_rgba(9,10,15,0.22)]">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/indoor-led-showroom.jpg"
                alt="Mahalaxmi Seamless Indoor MicroPitch LED Video Wall in Executive Boardroom"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>

            {/* Floating Hardware Telemetry Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-7 sm:left-7 sm:right-auto flex flex-wrap items-center gap-3 rounded-2xl border border-white/15 bg-[#090A0F]/80 px-5 py-3 text-white backdrop-blur-xl">
              <span className="font-mono text-xs font-semibold text-[#FF5A1F]">
                P1.86 / P2.5
              </span>
              <span className="h-3.5 w-px bg-white/20" />
              <span className="font-mono text-xs text-neutral-200">
                16-BIT HDR GRAYSCALE
              </span>
              <span className="hidden sm:inline-block h-3.5 w-px bg-white/20" />
              <span className="hidden sm:inline-block font-mono text-xs text-neutral-300">
                FRONT MAGNETIC SERVICE
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-neutral-300/80 pt-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">
                Zero Wall Clearance
              </p>
              <p className="mt-1.5 text-base font-bold text-[#0B0F17]">
                100% Front-Access Modules
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Mount flush against marble or wood paneling — swap modules or
                power supplies from the front in 60 seconds.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">
                Color Calibration
              </p>
              <p className="mt-1.5 text-base font-bold text-[#0B0F17]">
                True-to-Life Uniformity
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Deep matte-black LED masks preserve rich contrast even under
                bright showroom spotlights.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">
                Acoustic Comfort
              </p>
              <p className="mt-1.5 text-base font-bold text-[#0B0F17]">
                Whisper-Quiet Thermal Design
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Fanless aluminum cabinet dissipation keeps boardrooms and
                conference halls completely silent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 02. Outdoor DOOH & 3D Billboard Showcase — Deep Onyx */}
      <div
        id="showcase-outdoor"
        className="relative overflow-hidden bg-[#090A0F] py-24 sm:py-32 text-white"
      >
        <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[#FF5A1F]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
                <span>02</span>
                <span className="h-px w-6 bg-[#FF5A1F]" />
                <span>Outdoor DOOH &amp; 3D Billboards</span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-[-0.025em] sm:text-5xl leading-[1.06]">
                6,500+ Nits. Built to Conquer Harsh Noon Sun.
              </h2>

              <p className="text-base leading-relaxed text-neutral-300">
                Engineered for 45°C+ Indian summers and torrential monsoons.
                Turn high-traffic city junctions and building corners into
                unmissable 2D and naked-eye 90° 3D digital landmarks.
              </p>

              <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div>
                  <p className="font-mono text-2xl font-bold text-[#FF5A1F]">
                    6,500+ Nits
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-400">
                    Sunlight-Legible Louvers
                  </p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-bold text-white">
                    IP65 Sealed
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-400">
                    Monsoon &amp; Highway Dust Proof
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onSelectProduct(
                    "Outdoor LED Billboard / 3D Display (P4 / P6 / P10)"
                  )
                }
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5A1F] px-7 py-3.5 text-xs font-semibold tracking-wide text-white shadow-[0_10px_28px_-6px_rgba(255,90,31,0.5)] transition hover:bg-[#E04812]"
              >
                Get Outdoor Hoarding Quote
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <Image
                  src="/images/outdoor-3d-billboard.jpg"
                  alt="Mahalaxmi 90-degree 3D Outdoor LED Digital Billboard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-[#090A0F]/80 px-4 py-1.5 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                  90° ANAMORPHIC 3D READY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 03. Live Stage & Event Rentals — Soft Titanium Mist */}
      <div
        id="showcase-rental"
        className="bg-[#ECEAE2] py-24 sm:py-32 text-[#0B0F17]"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-15px_rgba(9,10,15,0.2)]">
                <Image
                  src="/images/stage-concert-led.jpg"
                  alt="Mahalaxmi Stage LED Video Wall Rental for Corporate Summits and Concerts"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#090A0F]/80 px-4 py-1.5 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                  3,840 HZ BROADCAST FLICKER-FREE
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
                <span>03</span>
                <span className="h-px w-6 bg-[#FF5A1F]" />
                <span>Stage &amp; Event Rentals</span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-[-0.025em] sm:text-5xl leading-[1.06]">
                Camera-Safe Backdrops for Grand Live Stages.
              </h2>

              <p className="text-base leading-relaxed text-neutral-700">
                Touring-grade magnesium die-cast cabinets with fast-lock rigging
                and 3,840Hz refresh — zero moiré or scan lines on DSLR and live
                broadcast feeds. Delivered with truss, Novastar controllers, and
                dedicated live engineers.
              </p>

              <div className="space-y-2.5 border-l-2 border-[#FF5A1F] pl-4 text-sm font-medium text-[#0B0F17]">
                <p>P2.6 High-Density Indoor &amp; P3.9 All-Weather Touring</p>
                <p>Supports ±10° Concave &amp; Convex Curved Stages</p>
                <p>Concerts, Luxury Weddings, Expos &amp; Corporate Summits</p>
              </div>

              <button
                type="button"
                onClick={() =>
                  onSelectProduct(
                    "Event & Stage LED Screen Rental (P2.6 / P3.9)"
                  )
                }
                className="inline-flex items-center gap-2 rounded-full bg-[#090A0F] px-7 py-3.5 text-xs font-semibold tracking-wide text-white transition hover:bg-[#FF5A1F]"
              >
                Book Rental Production
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 04. Digital Standees & Mobile LED Vans — Warm Stone */}
      <div
        id="showcase-fleet"
        className="bg-[#F6F5F0] py-24 sm:py-32 text-[#0B0F17] border-t border-neutral-200/80"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
                <span>04</span>
                <span className="h-px w-6 bg-[#FF5A1F]" />
                <span>Retail Totems &amp; Roadshow Fleet</span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-[-0.025em] sm:text-5xl leading-[1.06]">
                Plug-and-Play Standees &amp; Mobile LED Vans.
              </h2>

              <p className="text-base leading-relaxed text-neutral-600">
                Stop foot traffic in malls and lobbies with ultra-slim tempered
                glass Digital Standees, or mobilize your message across cities
                with self-powered hydraulic LED Advertising Vans.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    onSelectProduct("Digital LED Standee / Retail Totem")
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF5A1F] px-6 py-3.5 text-xs font-semibold tracking-wide text-white shadow-[0_10px_24px_-6px_rgba(255,90,31,0.45)] transition hover:bg-[#E04812]"
                >
                  Enquire Digital Standees
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectProduct("Mobile LED Advertising Van")}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-xs font-semibold text-[#0B0F17] transition hover:border-[#0B0F17]"
                >
                  Book Mobile LED Van
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-neutral-200 shadow-[0_28px_60px_-15px_rgba(9,10,15,0.18)]">
                <Image
                  src="/images/led-standee-van.jpg"
                  alt="Mahalaxmi Digital LED Standee Totem in Modern Luxury Mall Lobby"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-[#090A0F]/80 px-4 py-1.5 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                  CLOUD CMS + USB PLUG &amp; PLAY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
