import { Shield, Sun, Wrench, Zap, Maximize2, Radio } from "lucide-react";

const TECH_PILLARS = [
  {
    icon: Maximize2,
    title: "Seamless Modular Cabinets",
    badge: "Zero Bezel",
    description:
      "Precision CNC die-cast aluminum and custom MS cabinets lock together with sub-millimeter tolerances — eliminating ugly LCD grid lines for any custom aspect ratio.",
    wide: true,
  },
  {
    icon: Sun,
    title: "6,500+ Nits Sunlight Legibility",
    badge: "Anti-Glare",
    description:
      "High-luminance SMD & DIP LEDs paired with deep louver masks keep billboards razor-sharp even at 1 PM in peak summer.",
    wide: false,
  },
  {
    icon: Shield,
    title: "IP65 Monsoon & Dust Proof",
    badge: "All-Weather",
    description:
      "Silicone-sealed front modules and conformal-coated PCBs withstand heavy Indian monsoons, humidity, and highway dust.",
    wide: false,
  },
  {
    icon: Radio,
    title: "3840Hz Broadcast Refresh Rate",
    badge: "Camera Safe",
    description:
      "Ultra-high refresh driver ICs eliminate moiré and scan-line flicker on DSLR, mobile, and live TV broadcast cameras.",
    wide: false,
  },
  {
    icon: Wrench,
    title: "Front & Rear Serviceability",
    badge: "Fast Maintenance",
    description:
      "Magnetic front-access modules allow instant power supply or card swaps in under 60 seconds without dismantling the wall.",
    wide: false,
  },
  {
    icon: Zap,
    title: "Smart Power & 100,000-Hr Lifespan",
    badge: "24/7 Rated",
    description:
      "High-efficiency power supplies and ambient brightness sensors cut electricity bills while delivering 24/7 commercial reliability.",
    wide: true,
  },
];

export default function TechHighlights() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#06080F] py-20 sm:py-24 text-white led-matrix-bg"
    >
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Display Engineering
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Engineered Like Flagship Cinema. Built for Indian Conditions.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Every Mahalaxmi LED wall combines high-contrast black-matrix LEDs,
            Novastar/Colorlight processing, and structural-grade fabrication.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TECH_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/[0.06] ${
                  pillar.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-500/15 p-3 text-cyan-300 border border-blue-400/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
