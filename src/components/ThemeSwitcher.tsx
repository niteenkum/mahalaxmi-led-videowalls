"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Palette, RefreshCw } from "lucide-react";
import { THEMES } from "@/data/themes";

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState("obsidian-mono");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mahalaxmi-theme");
    if (saved && THEMES.some((t) => t.id === saved)) {
      setActiveTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "obsidian-mono");
    }
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const applyTheme = (id: string) => {
    setActiveTheme(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("mahalaxmi-theme", id);
  };

  const cycleNextTheme = () => {
    const idx = THEMES.findIndex((t) => t.id === activeTheme);
    const next = THEMES[(idx + 1) % THEMES.length];
    applyTheme(next.id);
  };

  const current = THEMES.find((t) => t.id === activeTheme) ?? THEMES[0];
  const lightThemes = THEMES.filter((t) => t.category === "Light & Hybrid");
  const darkThemes = THEMES.filter((t) => t.category === "Full Dark");

  return (
    <div ref={containerRef} className="relative flex items-center gap-1.5">
      {/* Main Theme Studio Dropdown Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-t-border bg-t-surface px-3.5 py-2 text-xs font-semibold text-t-ink transition hover:border-t-accent"
        aria-label="Open theme selector"
      >
        <Palette className="h-3.5 w-3.5 text-t-accent" />
        <span className="hidden sm:inline max-w-[115px] truncate">
          {current.name}
        </span>
        <span className="flex items-center -space-x-1">
          {current.swatches.map((hex, i) => (
            <span
              key={`${current.id}-${i}`}
              style={{ backgroundColor: hex }}
              className="h-3 w-3 rounded-full ring-1 ring-black/15"
            />
          ))}
        </span>
      </button>

      {/* 1-Click Quick Next Theme Button */}
      <button
        type="button"
        onClick={cycleNextTheme}
        title="Cycle next theme (16 total)"
        aria-label="Cycle next theme"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-t-border bg-t-surface text-t-ink transition hover:border-t-accent hover:bg-t-accent hover:text-t-accent-fg"
      >
        <RefreshCw className="h-3.5 w-3.5" />
      </button>

      {/* Popover Panel */}
      {open && (
        <div className="absolute right-0 top-12 z-50 w-[330px] sm:w-[440px] max-h-[80vh] overflow-y-auto rounded-3xl border border-t-border bg-t-card p-5 text-t-ink shadow-2xl">
          <div className="flex items-center justify-between border-b border-t-border pb-3.5">
            <div>
              <p className="font-display text-sm font-bold text-t-ink">
                Theme Studio (16 Presets)
              </p>
              <p className="text-[11px] text-t-muted">
                Instant live preview — saved automatically
              </p>
            </div>
            <span className="rounded-full bg-t-accent px-2.5 py-0.5 font-mono text-[10px] font-bold text-t-accent-fg">
              {THEMES.findIndex((t) => t.id === activeTheme) + 1} /{" "}
              {THEMES.length}
            </span>
          </div>

          {/* Group 1: Light & Hybrid */}
          <div className="mt-4">
            <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-t-muted">
              Light &amp; Hybrid Studio (10)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {lightThemes.map((t) => {
                const selected = t.id === activeTheme;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => applyTheme(t.id)}
                    className={`flex items-center justify-between gap-2 rounded-2xl border px-3 py-2.5 text-left transition ${
                      selected
                        ? "border-t-accent bg-t-accent-soft"
                        : "border-t-border bg-t-surface/50 hover:border-t-accent/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex shrink-0 -space-x-1">
                        {t.swatches.map((hex, i) => (
                          <span
                            key={i}
                            style={{ backgroundColor: hex }}
                            className="h-3.5 w-3.5 rounded-full ring-1 ring-black/20"
                          />
                        ))}
                      </span>
                      <span className="truncate text-xs font-semibold text-t-ink">
                        {t.name}
                      </span>
                    </div>
                    {selected && (
                      <Check className="h-3.5 w-3.5 shrink-0 text-t-accent" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 2: Full Dark Cinema */}
          <div className="mt-5 border-t border-t-border pt-4">
            <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-t-muted">
              Full Dark Cinema (6)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {darkThemes.map((t) => {
                const selected = t.id === activeTheme;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => applyTheme(t.id)}
                    className={`flex items-center justify-between gap-2 rounded-2xl border px-3 py-2.5 text-left transition ${
                      selected
                        ? "border-t-accent bg-t-accent-soft"
                        : "border-t-border bg-t-surface/50 hover:border-t-accent/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex shrink-0 -space-x-1">
                        {t.swatches.map((hex, i) => (
                          <span
                            key={i}
                            style={{ backgroundColor: hex }}
                            className="h-3.5 w-3.5 rounded-full ring-1 ring-white/25"
                          />
                        ))}
                      </span>
                      <span className="truncate text-xs font-semibold text-t-ink">
                        {t.name}
                      </span>
                    </div>
                    {selected && (
                      <Check className="h-3.5 w-3.5 shrink-0 text-t-accent" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
