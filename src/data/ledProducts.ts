export type ProductCategory = "indoor" | "outdoor" | "rental" | "signage";

export interface LedProduct {
  id: string;
  name: string;
  series: string;
  category: ProductCategory;
  pixelPitch: string;
  brightness: string;
  refreshRate: string;
  ipRating: string;
  cabinet: string;
  viewingDistance: string;
  tagline: string;
  highlights: string[];
  applications: string[];
  badge?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedPitch: string;
  metric: string;
}

export const CATEGORY_META: {
  id: ProductCategory;
  label: string;
  shortLabel: string;
  description: string;
}[] = [
  {
    id: "indoor",
    label: "Indoor LED Video Walls",
    shortLabel: "Indoor LED",
    description:
      "Ultra-fine pixel pitch displays engineered for boardrooms, retail flagships, auditoriums, and 24/7 command centers.",
  },
  {
    id: "outdoor",
    label: "Outdoor LED & Billboards",
    shortLabel: "Outdoor LED",
    description:
      "High-brightness, IP65 weather-sealed screens built to stay crystal clear under harsh Indian summer sunlight and monsoon rain.",
  },
  {
    id: "rental",
    label: "Event & Stage Rental Series",
    shortLabel: "Stage Rentals",
    description:
      "Fast-locking die-cast aluminum cabinets for concerts, weddings, exhibitions, and corporate summits across Central India.",
  },
  {
    id: "signage",
    label: "Digital Standees & LED Vans",
    shortLabel: "Standees & Vans",
    description:
      "Plug-and-play floor standees, scrolling message boards, and mobile LED advertising vans for high-reach roadshows.",
  },
];

export const LED_PRODUCTS: LedProduct[] = [
  {
    id: "indoor-p18",
    name: "Mahalaxmi MicroPitch P1.8",
    series: "Boardroom & Control Series",
    category: "indoor",
    pixelPitch: "P1.86",
    brightness: "800 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP30 Indoor",
    cabinet: "Die-Cast Aluminum (Front Service)",
    viewingDistance: "1.8m – 15m",
    badge: "Ultra-HD",
    tagline: "Razor-sharp close-range clarity with deep black contrast.",
    highlights: [
      "Zero-bezel seamless modular splicing",
      "16-bit grayscale & wide 160° viewing angle",
      "Magnetic front-serviceable modules for tight walls",
    ],
    applications: ["Executive Boardrooms", "Control Rooms", "Broadcast Studios"],
  },
  {
    id: "indoor-p25",
    name: "Mahalaxmi ProView P2.5",
    series: "Commercial Indoor Flagship",
    category: "indoor",
    pixelPitch: "P2.5",
    brightness: "1,000 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP30 Indoor",
    cabinet: "Slim MS / Die-Cast Cabinet",
    viewingDistance: "2.5m – 25m",
    badge: "Most Popular",
    tagline: "The industry benchmark for showrooms, lobbies, and banquet halls.",
    highlights: [
      "True-to-life color uniformity across large walls",
      "Fanless silent operation for quiet indoor venues",
      "24/7 continuous commercial duty rating",
    ],
    applications: ["Corporate Lobbies", "Jewellery & Auto Showrooms", "Auditoriums"],
  },
  {
    id: "indoor-p4",
    name: "Mahalaxmi VenueMax P4",
    series: "Large Hall Series",
    category: "indoor",
    pixelPitch: "P4.0",
    brightness: "1,200 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP40 Indoor",
    cabinet: "Custom MS / Aluminum Frame",
    viewingDistance: "4m – 40m",
    tagline: "Cost-effective big-screen impact for malls, temples, and halls.",
    highlights: [
      "High contrast ratio for vibrant video playback",
      "Flexible wall-mount, hanging, or curved rigs",
      "Low power draw with smart brightness control",
    ],
    applications: ["Shopping Malls", "Convention Centers", "Multiplexes"],
  },
  {
    id: "outdoor-p4",
    name: "Mahalaxmi SunMax P4",
    series: "High-Res Outdoor Series",
    category: "outdoor",
    pixelPitch: "P4.0",
    brightness: "5,500 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP65 Front / IP54 Rear",
    cabinet: "Weatherproof MS Cabinet",
    viewingDistance: "4m – 50m",
    badge: "Sunlight Ready",
    tagline: "Crisp outdoor branding for high-street storefronts and plazas.",
    highlights: [
      "Anti-glare louver mask for direct noon sunlight",
      "Dual-fan thermal management for 45°C+ summers",
      "Auto-dimming ambient light sensor support",
    ],
    applications: ["High-Street Facades", "Hospital & Mall Exteriors", "Petrol Pumps"],
  },
  {
    id: "outdoor-p6",
    name: "Mahalaxmi Titan OOH P6",
    series: "DOOH & 3D Billboard Series",
    category: "outdoor",
    pixelPitch: "P6.67",
    brightness: "6,500 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP65 Weatherproof",
    cabinet: "Heavy-Duty MS / Aluminum",
    viewingDistance: "6m – 80m",
    badge: "Best Seller",
    tagline: "Built for city-center digital hoardings and 3D anamorphic displays.",
    highlights: [
      "6,500+ nits peak luminance cuts through direct sun",
      "Rugged IP65 sealing against heavy monsoon & dust",
      "90° L-shape corner cabinet option for 3D billboards",
    ],
    applications: ["Highway Hoardings", "3D Corner Billboards", "City Squares"],
  },
  {
    id: "outdoor-p10",
    name: "Mahalaxmi MegaBoard P10",
    series: "Long-Distance Highway Series",
    category: "outdoor",
    pixelPitch: "P10.0",
    brightness: "7,000 Nits",
    refreshRate: "1920 / 3840 Hz",
    ipRating: "IP65 Weatherproof",
    cabinet: "Reinforced MS Cabinet",
    viewingDistance: "10m – 150m+",
    tagline: "Maximum visibility and ROI for massive highway unipoles and stadiums.",
    highlights: [
      "Ultra-bright DIP/SMD options for extreme reach",
      "Energy-efficient power architecture",
      "Quick rear-access maintenance doors",
    ],
    applications: ["Highway Unipoles", "Stadium Perimeters", "Toll Plazas"],
  },
  {
    id: "rental-p26",
    name: "Mahalaxmi StagePro P2.6",
    series: "Live Production & Broadcast",
    category: "rental",
    pixelPitch: "P2.6",
    brightness: "1,500 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP30 / IP54",
    cabinet: "500×500mm Die-Cast Magnesium",
    viewingDistance: "2.5m – 30m",
    badge: "Camera Safe",
    tagline: "Flicker-free live event backdrops for corporate summits & weddings.",
    highlights: [
      "Fast-lock rigging system — rapid setup & teardown",
      "Corner protectors to prevent transit damage",
      "Zero scan lines on DSLR & broadcast cameras",
    ],
    applications: ["Corporate Conferences", "Luxury Weddings", "Product Launches"],
  },
  {
    id: "rental-p39",
    name: "Mahalaxmi ConcertFlex P3.9",
    series: "Indoor / Outdoor Touring",
    category: "rental",
    pixelPitch: "P3.91",
    brightness: "4,500 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP65 Outdoor Rated",
    cabinet: "500×1000mm Die-Cast",
    viewingDistance: "4m – 60m",
    badge: "All-Weather Rental",
    tagline: "Curved & straight touring panels for mega concerts and festivals.",
    highlights: [
      "Supports ±10° concave & convex curve locks",
      "High brightness handles open-air evening & day shows",
      "Available with truss, processor & on-site technician",
    ],
    applications: ["Music Concerts", "Trade Expos", "Political & Public Rallies"],
  },
  {
    id: "signage-standee",
    name: "Mahalaxmi Digital Standee",
    series: "Retail & Hospitality Totem",
    category: "signage",
    pixelPitch: "P1.8 / P2.5 / LCD",
    brightness: "1,000 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP30 Indoor",
    cabinet: "Tempered Glass + CNC Frame",
    viewingDistance: "1m – 12m",
    badge: "Plug & Play",
    tagline: "Sleek freestanding digital posters with USB, Wi-Fi & CMS scheduling.",
    highlights: [
      "Slim portable frame with lockable caster wheels",
      "Update promos remotely via cloud CMS or USB",
      "Tempered anti-scratch protective front glass",
    ],
    applications: ["Retail Stores", "Hotel Lobbies", "Clinics & Restaurants"],
  },
  {
    id: "signage-van",
    name: "Mahalaxmi Mobile LED Van",
    series: "Roadshow & Campaign Fleet",
    category: "signage",
    pixelPitch: "P4 / P6 Outdoor",
    brightness: "6,000 Nits",
    refreshRate: "3840 Hz",
    ipRating: "IP65 Weatherproof",
    cabinet: "Hydraulic Lift Vehicle Rig",
    viewingDistance: "4m – 60m",
    badge: "High Reach",
    tagline: "Take your brand directly to markets, colleges, and rural hubs.",
    highlights: [
      "3-side or hydraulic-elevated outdoor LED screens",
      "Built-in silent DG power & PA sound system",
      "Live camera feed + GPS route campaign tracking",
    ],
    applications: ["Brand Activations", "Election & Govt Campaigns", "Real Estate"],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "corporate",
    title: "Corporate & Boardrooms",
    subtitle: "Seamless Executive Visuals",
    description:
      "Replace multi-screen bezels with unified MicroPitch LED walls for townhalls, boardrooms, and reception lobbies.",
    recommendedPitch: "P1.5 – P2.5",
    metric: "Zero Bezel",
  },
  {
    id: "ooh",
    title: "DOOH & 3D Billboards",
    subtitle: "Unmissable City Landmarks",
    description:
      "High-nit, monsoon-proof outdoor hoardings engineered for 24/7 commercial advertising ROI across highways and junctions.",
    recommendedPitch: "P4 – P10",
    metric: "6,500+ Nits",
  },
  {
    id: "retail",
    title: "Retail, Malls & Showrooms",
    subtitle: "Stop Foot Traffic Instantly",
    description:
      "Vibrant storefront walls and digital standees that turn window shoppers into walk-in buyers for jewellery, fashion, and auto.",
    recommendedPitch: "P2.5 – P4",
    metric: "160° Viewing",
  },
  {
    id: "events",
    title: "Concerts, Weddings & Expos",
    subtitle: "Turnkey Rental Production",
    description:
      "Rapid-rigging stage backdrops with Novastar processors, trussing, and dedicated on-site technicians across Central India.",
    recommendedPitch: "P2.6 – P3.9",
    metric: "3840Hz Live",
  },
  {
    id: "control",
    title: "Command & Control Centers",
    subtitle: "Mission-Critical Precision",
    description:
      "24/7 flicker-free monitoring walls for smart-city surveillance, traffic control, and industrial plant dashboards.",
    recommendedPitch: "P1.2 – P1.8",
    metric: "100,000 Hrs",
  },
  {
    id: "roadshow",
    title: "Mobile LED Van Campaigns",
    subtitle: "Hyper-Local Moving Media",
    description:
      "Self-powered LED trucks with integrated audio for high-impact product launches, real-estate drives, and public awareness.",
    recommendedPitch: "P4 – P6",
    metric: "360° Mobility",
  },
];
