export interface ThemeOption {
  id: string;
  name: string;
  category: "Light & Hybrid" | "Full Dark";
  swatches: [string, string, string];
}

export const THEMES: ThemeOption[] = [
  {
    id: "obsidian-mono",
    name: "Obsidian Monochrome",
    category: "Light & Hybrid",
    swatches: ["#FFFFFF", "#09090B", "#18181B"],
  },
  {
    id: "samsung-cobalt",
    name: "Samsung Royal Cobalt",
    category: "Light & Hybrid",
    swatches: ["#E6EEFB", "#060D21", "#1428A0"],
  },
  {
    id: "alpine-emerald",
    name: "Alpine Emerald",
    category: "Light & Hybrid",
    swatches: ["#E2F0EC", "#061411", "#0F766E"],
  },
  {
    id: "champagne-luxe",
    name: "Champagne & Espresso",
    category: "Light & Hybrid",
    swatches: ["#EFE7DA", "#140E09", "#7C4D1E"],
  },
  {
    id: "crimson-studio",
    name: "Leica Crimson",
    category: "Light & Hybrid",
    swatches: ["#F3EAEA", "#120707", "#DC2626"],
  },
  {
    id: "amethyst-royal",
    name: "Royal Amethyst",
    category: "Light & Hybrid",
    swatches: ["#ECE6FC", "#0D061C", "#6D28D9"],
  },
  {
    id: "porsche-slate",
    name: "Titanium Gunmetal",
    category: "Light & Hybrid",
    swatches: ["#E1E8F0", "#0B111E", "#1E293B"],
  },
  {
    id: "sunset-copper",
    name: "Burnished Copper",
    category: "Light & Hybrid",
    swatches: ["#F5E9DC", "#170B05", "#C2410C"],
  },
  {
    id: "nordic-ocean",
    name: "Nordic Fjord",
    category: "Light & Hybrid",
    swatches: ["#E0F0F8", "#05131E", "#0284C7"],
  },
  {
    id: "rose-burgundy",
    name: "Imperial Burgundy",
    category: "Light & Hybrid",
    swatches: ["#F5E4E9", "#17060B", "#9F1239"],
  },

  {
    id: "arctic-stealth",
    name: "Stealth Dark Mono",
    category: "Full Dark",
    swatches: ["#0A0A0D", "#18181F", "#FFFFFF"],
  },
  {
    id: "onyx-gold",
    name: "Onyx & Champagne Gold",
    category: "Full Dark",
    swatches: ["#0C0A08", "#1E1914", "#D4AF37"],
  },
  {
    id: "midnight-cyber",
    name: "Cyber Neon Cyan",
    category: "Full Dark",
    swatches: ["#060B14", "#121F36", "#06B6D4"],
  },
  {
    id: "matrix-emerald",
    name: "Emerald Carbon Dark",
    category: "Full Dark",
    swatches: ["#050E0B", "#10261E", "#10B981"],
  },
  {
    id: "nebula-violet",
    name: "Ultraviolet Studio",
    category: "Full Dark",
    swatches: ["#090514", "#1B1138", "#8B5CF6"],
  },
  {
    id: "volcanic-ember",
    name: "McLaren Carbon Ember",
    category: "Full Dark",
    swatches: ["#0D0806", "#221712", "#F97316"],
  },
];
