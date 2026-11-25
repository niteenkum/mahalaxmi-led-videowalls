"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  FileSpreadsheet,
} from "lucide-react";
import { COMPANY_OFFICES, CONTACT_INFO } from "@/data/mahalaxmiContent";

const MAP_QUERIES = [
  "Dixit+Nagar,+Nagpur,+Maharashtra,+India",
  "Ahmedabad,+Gujarat+382430,+India",
  "Davangere,+Karnataka+577001,+India",
];

const QUICK_CHIPS = [
  "Curved / Flexible Outdoor",
  "Indoor Fixed Wall",
  "Outdoor Pole Screen",
  "Digital Billboard",
  "Outdoor Standee",
  "Drone LED Wall",
  "Mobile Van LED",
  "Transparent LED",
];

interface ContactSectionProps {
  selectedRequirement: string;
}

export default function ContactSection({
  selectedRequirement,
}: ContactSectionProps) {
  const [officeIdx, setOfficeIdx] = useState(0);
  const [selectedChip, setSelectedChip] = useState("Indoor Fixed Wall");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(selectedRequirement);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedRequirement) {
      setMessage(selectedRequirement);
      setSubmitted(false);
    }
  }, [selectedRequirement]);

  const handleChipClick = (chip: string) => {
    setSelectedChip(chip);
    if (
      !message.trim() ||
      QUICK_CHIPS.some((c) => message === `Interested in: ${c}`)
    ) {
      setMessage(`Interested in: ${chip}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || submitting) return;
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          category: selectedChip,
          message,
        }),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Failed to submit inquiry");
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please retry."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const activeOffice = COMPANY_OFFICES[officeIdx];

  return (
    <section
      id="contact"
      className="bg-t-surface py-24 sm:py-32 text-t-ink border-t border-t-border transition-colors"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-t-muted">
              <span className="text-t-accent">06</span>
              <span className="h-px w-6 bg-t-accent" />
              <span>Direct Engineering Concierge</span>
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-5xl">
              Start Your LED Wall Project
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-t-muted">
            Connect directly with our Nagpur Head Office, Ahmedabad Cabinet
            Fabrication Plant, or Karnataka Regional Branch.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-t-border bg-t-card shadow-2xl">
          <div className="grid lg:grid-cols-12 items-stretch">
            {/* Left 5 Cols: Dark Command Hub */}
            <div className="bg-t-stage p-8 sm:p-11 text-white lg:col-span-5 flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Pan-India Network
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[10px] font-semibold text-t-stage-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-t-stage-accent animate-pulse" />
                    GST Verified
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 rounded-2xl border border-white/10 bg-t-stage-card p-1.5">
                  {["Nagpur HQ", "Ahmedabad", "Karnataka"].map((tab, i) => {
                    const active = officeIdx === i;
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setOfficeIdx(i)}
                        className={`relative rounded-xl py-2.5 font-mono text-[11px] font-bold transition ${
                          active
                            ? "text-t-stage-accent-fg"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="activeOfficePill"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                            className="absolute inset-0 rounded-xl bg-t-stage-accent"
                          />
                        )}
                        <span className="relative z-10">{tab}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-2xl border border-white/10 bg-t-stage-card p-5 space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-t-stage-accent" />
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        {activeOffice.label}
                      </p>
                      <p className="mt-0.5 font-display text-lg font-bold text-white">
                        {activeOffice.location}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                        {activeOffice.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, "")}`}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-t-stage-card px-4 py-3.5 transition hover:border-white/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-t-stage-accent">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase text-zinc-400">
                          Direct Sales &amp; Survey Line
                        </p>
                        <p className="font-mono text-xs font-bold text-white">
                          {CONTACT_INFO.phones[0]} /{" "}
                          {CONTACT_INFO.phones[1].replace("+91 ", "")}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-white" />
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-t-stage-card px-4 py-3.5 transition hover:border-white/40"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-t-stage-accent">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase text-zinc-400">
                          Official Tender &amp; Inquiry Desk
                        </p>
                        <p className="truncate font-mono text-xs font-bold text-white">
                          {CONTACT_INFO.email}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition group-hover:text-white" />
                  </a>
                </div>
              </div>

              <div className="relative z-10 pt-2">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black h-44 group">
                  <iframe
                    key={MAP_QUERIES[officeIdx]}
                    title={`Mahalaxmi ${activeOffice.location} Map`}
                    src={`https://www.google.com/maps?q=${MAP_QUERIES[officeIdx]}&output=embed`}
                    className="h-full w-full border-0 grayscale contrast-125 invert-[0.9] transition duration-500 group-hover:grayscale-0 group-hover:invert-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Theme-Aware Proposal Form */}
            <div className="p-8 sm:p-12 lg:col-span-7 bg-t-card flex flex-col justify-between">
              {submitted ? (
                <div className="h-full py-20 text-center flex flex-col items-center justify-center space-y-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-t-accent text-t-accent-fg shadow-lg">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-t-ink">
                    Proposal Request Received
                  </h3>
                  <p className="mx-auto max-w-md text-sm leading-relaxed text-t-muted">
                    Thank you, <span className="font-semibold text-t-ink">{name}</span>.
                    Our display engineer will contact you on{" "}
                    <span className="font-mono font-bold text-t-accent">
                      {phone}
                    </span>{" "}
                    with custom cabinet specifications and pricing.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full bg-t-accent px-7 py-3 text-xs font-semibold uppercase tracking-wider text-t-accent-fg hover:bg-t-accent-hover"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-t-ink">
                      Request Custom Quote &amp; Site Survey
                    </h3>
                    <p className="mt-1.5 text-sm text-t-muted">
                      Select a display category or describe your custom wall
                      dimensions below.
                    </p>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-t-muted mb-2.5">
                      1. Select Display Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_CHIPS.map((chip) => {
                        const isSelected = selectedChip === chip;
                        return (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => handleChipClick(chip)}
                            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                              isSelected
                                ? "bg-t-accent text-t-accent-fg shadow-xs"
                                : "border border-t-border bg-t-surface text-t-muted hover:border-t-accent hover:text-t-ink"
                            }`}
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-t-muted mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-2xl border border-t-border bg-t-surface/70 px-4 py-3.5 text-sm text-t-ink placeholder:text-t-muted/60 outline-none transition focus:border-t-accent focus:bg-t-card"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-t-muted mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full rounded-2xl border border-t-border bg-t-surface/70 px-4 py-3.5 text-sm text-t-ink placeholder:text-t-muted/60 outline-none transition focus:border-t-accent focus:bg-t-card"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-t-muted mb-2">
                      Business Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-2xl border border-t-border bg-t-surface/70 px-4 py-3.5 text-sm text-t-ink placeholder:text-t-muted/60 outline-none transition focus:border-t-accent focus:bg-t-card"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-t-muted mb-2">
                      Project Brief / Target Dimensions
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. 20ft × 10ft Outdoor Billboard in Nagpur, or Indoor P2.5 Conference Wall..."
                      className="w-full rounded-2xl border border-t-border bg-t-surface/70 px-4 py-3.5 text-sm text-t-ink placeholder:text-t-muted/60 outline-none transition focus:border-t-accent focus:bg-t-card"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 rounded-2xl bg-t-surface p-3.5 text-[11px] font-medium text-t-ink">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-t-accent" />
                      Free Site Survey
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FileSpreadsheet className="h-3.5 w-3.5 shrink-0 text-t-accent" />
                      24-Hr CAD Layout
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-t-accent" />
                      Factory Pricing
                    </span>
                  </div>

                  {errorMsg && (
                    <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-medium text-red-700">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-t-accent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-t-accent-fg shadow-lg transition hover:bg-t-accent-hover disabled:opacity-60"
                  >
                    {submitting ? "Sending Inquiry..." : "Send Inquiry & Book Survey"}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
