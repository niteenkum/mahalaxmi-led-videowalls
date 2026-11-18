"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  CATEGORY_META,
  LED_PRODUCTS,
  type ProductCategory,
} from "@/data/ledProducts";

interface ProductLineupProps {
  onSelectProduct: (productName: string) => void;
}

export default function ProductLineup({ onSelectProduct }: ProductLineupProps) {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("indoor");

  const filteredProducts = LED_PRODUCTS.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section
      id="lineup"
      className="bg-[#090A0F] py-24 sm:py-32 text-white border-t border-white/[0.08]"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
              Hardware Specification Matrix
            </p>
            <h2 className="font-display mt-2.5 text-3xl font-bold tracking-[-0.025em] sm:text-5xl">
              Compare Models &amp; Pixel Pitches
            </h2>
          </div>

          {/* Sleek Segmented Switcher */}
          <div className="inline-flex flex-wrap gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5">
            {CATEGORY_META.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition ${
                    isActive
                      ? "bg-[#FF5A1F] text-white shadow-[0_6px_20px_-4px_rgba(255,90,31,0.55)]"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {cat.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#12141D] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/60"
            >
              {/* Top hover accent line */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-[#FF5A1F] to-[#F7C99B] transition-transform duration-300 origin-left group-hover:scale-x-100" />

              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-lg border border-[#FF5A1F]/30 bg-[#FF5A1F]/15 px-3 py-1 font-mono text-xs font-bold text-[#FF5A1F]">
                    {product.pixelPitch}
                  </span>
                  {product.badge && (
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-5 text-xl font-bold text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-neutral-400">
                  {product.series}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {product.tagline}
                </p>

                <dl className="mt-6 divide-y divide-white/[0.07] border-y border-white/[0.07] text-xs">
                  <div className="flex justify-between py-2.5">
                    <dt className="text-neutral-400">Peak Brightness</dt>
                    <dd className="font-mono font-semibold text-white">
                      {product.brightness}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-neutral-400">Refresh Rate</dt>
                    <dd className="font-mono font-semibold text-white">
                      {product.refreshRate}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-neutral-400">Ingress Rating</dt>
                    <dd className="font-mono font-semibold text-white">
                      {product.ipRating}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-neutral-400">Optimal Viewing</dt>
                    <dd className="font-mono font-semibold text-[#F7C99B]">
                      {product.viewingDistance}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6">
                <p className="mb-4 text-[11px] text-neutral-400">
                  {product.applications.join(" • ")}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectProduct(product.name)}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-xs font-semibold text-white transition group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]"
                >
                  Request Datasheet &amp; Quote
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
