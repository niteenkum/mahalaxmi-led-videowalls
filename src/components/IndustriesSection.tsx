import {
  Building2,
  Megaphone,
  ShoppingBag,
  Music,
  MonitorCheck,
  Truck,
} from "lucide-react";
import { INDUSTRIES } from "@/data/ledProducts";

const ICON_MAP: Record<string, typeof Building2> = {
  corporate: Building2,
  ooh: Megaphone,
  retail: ShoppingBag,
  events: Music,
  control: MonitorCheck,
  roadshow: Truck,
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20 sm:py-24 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
            Deployment Verticals
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Transforming Spaces Across Every Industry
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Whether it&apos;s a 40-foot highway hoarding, a luxury showroom
            facade, or a 3-day corporate summit, we handle fabrication,
            installation, and AMC.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((item) => {
            const Icon = ICON_MAP[item.id] ?? Building2;
            return (
              <div
                key={item.id}
                className="group rounded-3xl border border-slate-200 bg-slate-50/60 p-6 transition hover:bg-white hover:shadow-xl hover:border-blue-200"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-slate-950 p-3 text-white transition group-hover:bg-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    {item.metric}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Recommended Pitch</span>
                  <span className="font-mono font-bold text-slate-900">
                    {item.recommendedPitch}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
