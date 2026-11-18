import { Building2, Factory, MapPin } from "lucide-react";
import {
  VISIONARIES_TEAM,
  COMPANY_OFFICES,
} from "@/data/mahalaxmiContent";

const OFFICE_ICONS = [Building2, Factory, MapPin];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-t-bg py-24 sm:py-32 text-t-ink border-t border-t-border transition-colors"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 space-y-24">
        <div className="grid gap-10 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[2.25rem] border border-white/10 bg-t-stage p-8 sm:p-11 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                <span className="text-t-stage-accent">05</span>
                <span className="h-px w-6 bg-t-stage-accent" />
                <span>About Mahalaxmi</span>
              </div>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-5xl leading-[1.06]">
                Our Story
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300">
                Built on precision engineering, in-house cabinet manufacturing,
                and uncompromising visual reliability.
              </p>
            </div>

            <div className="relative z-10 mt-10 border-t border-white/10 pt-6 flex items-baseline justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  Established
                </p>
                <p className="font-display text-3xl font-bold text-t-stage-accent">
                  2022
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  Network
                </p>
                <p className="font-display text-lg font-bold text-white">
                  MH • GJ • KA
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="rounded-[2.25rem] border border-t-border bg-t-surface p-8 sm:p-10 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-t-ink">
                Established in <strong>2022</strong>,{" "}
                <strong>Mahalaxmi LED Video Walls</strong> has rapidly emerged
                as a trusted name in India&apos;s commercial LED display
                industry. Our journey began with a clear vision: combining
                next-generation LED display modules with in-house structural
                fabrication and dependable after-sales support.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-t-muted">
                From fine-pitch indoor display walls and crystal transparent
                glass screens to monumental 90° L-shaped outdoor 3D video walls,
                we empower events, advertising networks, retail flagships,
                command centers, and hospitality venues pan-India.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {COMPANY_OFFICES.map((office, idx) => {
                const Icon = OFFICE_ICONS[idx] ?? MapPin;
                return (
                  <div
                    key={office.label}
                    className="rounded-2xl border border-t-border bg-t-card p-5 transition hover:border-t-accent hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-t-accent-soft text-t-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-t-muted">
                        HUB 0{idx + 1}
                      </span>
                    </div>
                    <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-wider text-t-accent">
                      {office.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-t-ink">
                      {office.location}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Meet The Visionaries */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-t-accent">
                Executive Leadership
              </p>
              <h3 className="font-display mt-2 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
                Meet the Visionaries
              </h3>
            </div>
            <p className="max-w-md text-sm text-t-muted">
              The leadership, engineering, and operations minds guiding every
              Mahalaxmi LED deployment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {VISIONARIES_TEAM.map((member, i) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-3xl border border-t-border bg-t-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-t-accent hover:bg-t-card hover:shadow-xl"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 scale-x-0 bg-t-accent transition-transform duration-300 origin-left group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-t-accent font-display text-lg font-bold text-t-accent-fg transition group-hover:scale-105">
                    {member.initials}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-t-muted">
                    0{i + 1}
                  </span>
                </div>

                <h4 className="font-display mt-6 text-base font-bold text-t-ink">
                  {member.name}
                </h4>
                <p className="mt-1 font-mono text-xs font-bold text-t-accent">
                  {member.role}
                </p>
                <p className="mt-2 border-t border-t-border pt-2.5 text-[11px] text-t-muted">
                  {member.department}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
