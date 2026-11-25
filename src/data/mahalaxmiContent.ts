export interface ProductVariant {
  id: string;
  badgeLabel: string;
  title: string;
  tag: string;
  pitchRange: string;
  brightness: string;
  image: string;
  summary: string;
  features: string[];
  idealFor: string;
}

export interface ProductItem {
  id: string;
  title: string;
  tag: string;
  pitchRange: string;
  brightness: string;
  image: string;
  summary: string;
  features: string[];
  idealFor: string;
  variants?: ProductVariant[];
}

export interface ApplicationItem {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  details: string;
  recommendedPitch: string;
}

export interface MaterialPillar {
  id: string;
  title: string;
  code: string;
  points: string[];
}

export interface VisionaryMember {
  name: string;
  role: string;
  initials: string;
  department: string;
  image: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "curved-flexible-outdoor",
    title: "Curved / Flexible Outdoor LED Display",
    tag: "3D Curved & Anamorphic",
    pitchRange: "P4 / P6 / P8",
    brightness: "6,500+ Nits",
    image: "/images/outdoor-3d-billboard.jpg",
    summary:
      "Bring architectural facades to life with our Curved, Flexible & 90° Outdoor LED Displays. Engineered to wrap seamlessly around building corners, columns, and contours with naked-eye 3D depth day or night.",
    features: [
      "IP65 Weatherproof & Monsoon Sealed",
      "6,500+ Nits Unparalleled Daylight Brightness",
      "Seamless Curved, Flexible & 90° Corner Splicing",
      "Long-Lasting Commercial Durability",
    ],
    idealFor: "City junctions, curved building facades, stadiums & public landmarks",
  },
  {
    id: "indoor-fixed",
    title: "Indoor Fixed LED Display",
    tag: "Zero-Bezel MicroPitch",
    pitchRange: "P1.5 / P1.8 / P2.5",
    brightness: "1,000 Nits",
    image: "/images/indoor-led-showroom.jpg",
    summary:
      "Transform any indoor setting with our state-of-the-art Fixed LED Displays. Sharp, vivid, bezel-free visuals tailored for corporate, educational, and luxury retail spaces.",
    features: [
      "Crystal-Clear Ultra-HD Resolution",
      "Energy-Efficient Silent Thermal Design",
      "Slim Front-Serviceable Magnetic Modules",
      "Easy Cloud & Novastar Content Management",
    ],
    idealFor: "Malls, executive boardrooms, auditoriums & luxury showrooms",
  },
  {
    id: "digital-standees",
    title: "Digital Standees",
    tag: "Plug & Play Totem",
    pitchRange: "P1.8 / P2.5",
    brightness: "1,000 Nits",
    image: "/images/led-standee-van.jpg",
    summary:
      "Elevate high-traffic indoor environments with sleek freestanding LED Digital Standees. Instant USB, Wi-Fi, and cloud CMS playback that stops walk-in footfall.",
    features: [
      "Ultra-Slim Tempered Glass Frame",
      "High-Resolution Vibrant Color Accuracy",
      "Remote Cloud CMS & USB Plug-and-Play",
      "Portable Lockable Base for Easy Repositioning",
    ],
    idealFor: "Retail stores, hotel lobbies, exhibitions, clinics & corporate events",
    variants: [
      {
        id: "indoor-standees",
        badgeLabel: "Indoor Standees",
        title: "Digital Standees",
        tag: "Plug & Play Totem",
        pitchRange: "P1.8 / P2.5",
        brightness: "1,000 Nits",
        image: "/images/led-standee-van.jpg",
        summary:
          "Elevate high-traffic indoor environments with sleek freestanding LED Digital Standees. Instant USB, Wi-Fi, and cloud CMS playback that stops walk-in footfall.",
        features: [
          "Ultra-Slim Tempered Glass Frame",
          "High-Resolution Vibrant Color Accuracy",
          "Remote Cloud CMS & USB Plug-and-Play",
          "Portable Lockable Base for Easy Repositioning",
        ],
        idealFor:
          "Retail stores, hotel lobbies, exhibitions, clinics & corporate events",
      },
      {
        id: "outdoor-standees",
        badgeLabel: "Outdoor • Waterproof",
        title: "Outdoor Digital Standees",
        tag: "Waterproof • IP65",
        pitchRange: "P2 / P2.5 / P3 / P4",
        brightness: "5,500+ Nits • Waterproof",
        image: "/images/prod-outdoor-standee.jpg",
        summary:
          "Command open-air footfall rain or shine with Waterproof Outdoor Digital Standees (P2 / P2.5 / P3 / P4). Ultra-bright, weather-sealed freestanding LED totems engineered for direct sunlight and monsoon resilience.",
        features: [
          "100% Waterproof IP65 Weather-Sealed Enclosure",
          "Outdoor Pitch Options: P2 / P2.5 / P3 / P4",
          "5,500+ Nits Sunlight-Legible Anti-Glare Display",
          "Heavy-Duty Anti-Corrosion Base & Cloud CMS",
        ],
        idealFor:
          "High-street storefronts, petrol pumps, outdoor plazas, malls & open-air events",
      },
    ],
  },
  {
    id: "outdoor-pole-billboards",
    title: "Outdoor Pole Mounting Screen",
    tag: "DOOH Unipole Series",
    pitchRange: "P4 / P6 / P8 / P10",
    brightness: "7,000 Nits",
    image: "/images/prod-digital-billboard.jpg",
    summary:
      "Maximize roadside media ROI with engineered Outdoor Pole Mounting Screens. Built for street poles, highway unipoles, and urban corridors with ultra-bright visuals and real-time cloud campaign updates.",
    features: [
      "Wind-Load Certified Unipole & Street-Pole Mounting",
      "P4 / P6 / P8 / P10 Pitch Flexibility",
      "7,000 Nits High-Impact Sunlight-Legible Visuals",
      "Smart Auto-Brightness Sensors & Remote Scheduling",
    ],
    idealFor: "Highway unipoles, city street poles, arterial medians & transit hubs",
    variants: [
      {
        id: "outdoor-pole-mounting",
        badgeLabel: "Pole Mounting Screen",
        title: "Outdoor Pole Mounting Screen",
        tag: "DOOH Unipole Series",
        pitchRange: "P4 / P6 / P8 / P10",
        brightness: "7,000 Nits",
        image: "/images/prod-digital-billboard.jpg",
        summary:
          "Maximize roadside media ROI with engineered Outdoor Pole Mounting Screens. Built for street poles, highway unipoles, and urban corridors with ultra-bright visuals and real-time cloud campaign updates.",
        features: [
          "Wind-Load Certified Unipole & Street-Pole Mounting",
          "P4 / P6 / P8 / P10 Pitch Flexibility",
          "7,000 Nits High-Impact Sunlight-Legible Visuals",
          "Smart Auto-Brightness Sensors & Remote Scheduling",
        ],
        idealFor:
          "Highway unipoles, city street poles, arterial medians & transit hubs",
      },
      {
        id: "digital-billboards",
        badgeLabel: "Digital Billboards",
        title: "Digital Billboards",
        tag: "Large-Format DOOH",
        pitchRange: "P4 / P6 / P8 / P10",
        brightness: "7,000+ Nits",
        image: "/images/prod-highway-billboard.jpg",
        summary:
          "Dominate skylines and expressways with monumental large-format Digital Billboards engineered for structural steel hoardings, rooftops, and gantry installations with seamless 24/7 cloud ad playback.",
        features: [
          "Large-Format Structural Steel & Rooftop Integration",
          "Real-Time Multi-Advertiser Remote Ad Scheduling",
          "Heavy-Duty IP65 MS/Aluminum Weatherproof Cabinets",
          "Smart Ambient Auto-Brightness & Power Management",
        ],
        idealFor:
          "Expressway gantries, commercial rooftops, city squares & prime OOH hoardings",
      },
    ],
  },
  {
    id: "advanced-transparent",
    title: "Advanced Transparent LED",
    tag: "Architectural Mesh",
    pitchRange: "P3.9–7.8",
    brightness: "5,000 Nits",
    image: "/images/prod-transparent-outdoor.jpg",
    summary:
      "Experience the future of architectural media with Outdoor Transparent LED Curtain Displays — turning glass skyscraper facades into luminous landmarks without blocking natural light.",
    features: [
      "Up to 75% Structural Glass Transparency",
      "Ultra-Lightweight Wind-Load Resistant Frame",
      "High-Brightness Daylight Visibility",
      "Preserves Interior Daylight & Sightlines",
    ],
    idealFor: "Glass curtain-wall buildings, commercial towers & landmark facades",
  },
  {
    id: "indoor-transparent",
    title: "Indoor Fixed Transparent LED",
    tag: "Crystal Glass Series",
    pitchRange: "P2.8 / P3.9",
    brightness: "2,500 Nits",
    image: "/images/prod-transparent-indoor.jpg",
    summary:
      "Unleash the potential of luxury retail storefronts, glass elevators, and mall atriums with holographic-style Indoor Fixed Transparent LED glass displays.",
    features: [
      "Sleek Floating Holographic Visual Effect",
      "Zero Obstruction to Storefront Displays",
      "Modular Slim Aluminum Extrusion Frame",
      "Fast Modular Installation & Maintenance",
    ],
    idealFor: "Luxury boutiques, jewellery storefronts, auto showrooms & atriums",
  },
  {
    id: "drone-led-walls",
    title: "Drone LED Walls",
    tag: "Aerial Sky Media",
    pitchRange: "P10 / P16 / P25 Mesh",
    brightness: "5,500+ Nits",
    image: "/images/prod-drone-led-wall.jpg",
    summary:
      "Take brand storytelling into the sky with ultra-lightweight airborne Drone LED Walls. Built with wind-permeable flexible LED mesh for high-impact aerial activations, concerts, and grand launches.",
    features: [
      "Ultra-Lightweight Carbon & Flexible Mesh Screen",
      "Wind-Permeable Aerodynamic Grid Architecture",
      "5,500+ Nits High-Visibility Dusk & Night Brilliance",
      "Wireless Real-Time Video & Brand Sync Control",
    ],
    idealFor: "Grand product launches, mega concerts, festivals, stadiums & city skyline shows",
  },
  {
    id: "mobile-van-led-wall",
    title: "Mobile Van LED Wall",
    tag: "Roadshow Fleet Series",
    pitchRange: "P3 / P4 / P6",
    brightness: "6,000+ Nits",
    image: "/images/prod-mobile-van-led.jpg",
    summary:
      "Take dynamic outdoor advertising straight to your audience with turnkey Mobile Van LED Walls. Featuring hydraulic-elevated IP65 outdoor LED screens, onboard silent power, and integrated PA audio.",
    features: [
      "3-Side or Hydraulic-Elevated IP65 Outdoor Screens",
      "6,000+ Nits Crystal-Clear Direct-Sunlight Display",
      "Built-In Silent DG Power & Integrated PA Sound",
      "Live Camera Feed, Cloud CMS & GPS Route Tracking",
    ],
    idealFor: "Brand roadshows, product launches, election campaigns, real estate & rural drives",
  },
];

export const APPLICATIONS_DATA: ApplicationItem[] = [
  {
    id: "ooh-roadside",
    title: "Out-of-Home & Roadside Advertising",
    category: "DOOH Media",
    image: "/images/hero-flagship-wall.jpg",
    summary:
      "Command attention at busy city intersections and highways with weather-sealed, ultra-bright 2D and 3D digital hoardings.",
    details:
      "Designed for 24/7 continuous outdoor operation with IP65 front protection, wide 160° viewing angles, and remote multi-advertiser slot scheduling.",
    recommendedPitch: "P4 / P6 / P10",
  },
  {
    id: "events-live",
    title: "Events, Concerts & Live Productions",
    category: "Stage & Rental",
    image: "/images/stage-concert-led.jpg",
    summary:
      "High-refresh touring LED cabinets engineered to transform concert stages, grand weddings, expos, and public rallies.",
    details:
      "Fast-locking die-cast magnesium panels with 3,840Hz flicker-free refresh ensure flawless camera capture and rapid rigging for straight or curved stages.",
    recommendedPitch: "P2.6 / P3.91",
  },
  {
    id: "retail-malls",
    title: "Retail Environments & Shopping Malls",
    category: "Commercial Retail",
    image: "/images/app-retail-mall.jpg",
    summary:
      "Dynamic atrium walls, storefront windows, and digital standees crafted to elevate brand prestige and drive walk-in conversions.",
    details:
      "True-to-life 16-bit color calibration ensures fashion, jewellery, and lifestyle visuals pop with cinema-grade richness.",
    recommendedPitch: "P1.8 / P2.5 / Transparent",
  },
  {
    id: "control-rooms",
    title: "Control Rooms & Command Centers",
    category: "Mission Critical",
    image: "/images/app-control-room.jpg",
    summary:
      "Seamless bezel-free monitoring walls for security operations, smart-city traffic control, utilities, and defense command centers.",
    details:
      "Redundant power/signal architecture and ultra-fine pixel pitches enable crisp multi-source telemetry viewing without eye fatigue.",
    recommendedPitch: "P1.2 / P1.5 / P1.8",
  },
  {
    id: "broadcast-studios",
    title: "Broadcast Studios & Virtual Production",
    category: "XR & Television",
    image: "/images/app-broadcast-xr.jpg",
    summary:
      "Curved fine-pitch LED volumes for newsrooms, corporate broadcast studios, and camera-tracked virtual sets.",
    details:
      "Ultra-high 3,840Hz–7,680Hz refresh rates, wide DCI-P3 color gamut, and anti-moiré matte black masks eliminate scan lines on studio cameras.",
    recommendedPitch: "P1.5 / P1.8 / P2.6",
  },
  {
    id: "stadiums-arenas",
    title: "Stadiums & Sports Arenas",
    category: "Sports & Venues",
    image: "/images/app-stadium-arena.jpg",
    summary:
      "Giant live scoreboards, instant replay walls, and impact-protected perimeter ribbon boards for immersive spectator energy.",
    details:
      "Soft protective module masks, weatherproof IP65 enclosures, and ultra-high contrast keep every replay sharp across the entire stadium bowl.",
    recommendedPitch: "P6 / P8 / P10",
  },
];

export const MATERIAL_SCIENCE_PILLARS: MaterialPillar[] = [
  {
    id: "material",
    code: "01",
    title: "Material",
    points: [
      "2D / 3D Nano Semiconductor Materials",
      "Quantum Dot Color Enhancement",
      "High-Efficiency QD LED Chips",
    ],
  },
  {
    id: "software",
    code: "02",
    title: "Software",
    points: [
      "Embedded GPU Signal Processing",
      "Multi-Window Image Multiplexing",
      "Pixel-Level Color & Luminance Calibration",
    ],
  },
  {
    id: "drive",
    code: "03",
    title: "Drive",
    points: [
      "Micro LED Dedicated Control Architecture",
      "3,840Hz Ultra-High Refresh Drive ICs",
      "Smart Energy-Saving Common Cathode PWM",
    ],
  },
  {
    id: "applications",
    code: "04",
    title: "Applications",
    points: [
      "Sub-2mm Micro Spacing Pixel Pitch",
      "Zero-Bezel Modular Cabinet Splicing",
      "Indoor, Outdoor, Curved & Transparent Forms",
    ],
  },
];

export const VISIONARIES_TEAM: VisionaryMember[] = [
  {
    name: "Ramandeep Singh",
    role: "Founder & CEO",
    initials: "RS",
    department: "Executive Leadership",
    image: "/images/team-ramandeep.jpg",
  },
  {
    name: "Rita Chinchghare",
    role: "Managing Head",
    initials: "RC",
    department: "Operations & Delivery",
    image: "/images/team-rita.jpg",
  },
  {
    name: "G. Suresh Balkrishna",
    role: "Account Head",
    initials: "SB",
    department: "Finance & Enterprise Accounts",
    image: "/images/team-suresh.jpg",
  },
];

export const COMPANY_OFFICES = [
  {
    label: "Head Office (GST Verified)",
    location: "Nagpur, Maharashtra",
    address:
      "Plot No 61, Tribhuwan Co, Behind Dixit Nagar, Nagpur, Maharashtra, India",
  },
  {
    label: "Manufacturing Unit",
    location: "Ahmedabad, Gujarat",
    address:
      "Fabrication Work & Sheet Metal Item Manufacturing, Ahmedabad, Gujarat - 382430",
  },
  {
    label: "Branch Office",
    location: "Davangere / Bengaluru, Karnataka",
    address: "Bengaluru / Davangere - 577001, Karnataka, India",
  },
];

export const CONTACT_INFO = {
  phones: ["+91 92091 67669", "+91 80553 37448"],
  email: "mahalaxmiledvideo@gmail.com",
  established: "2022",
};

export interface HeroSlide {
  id: string;
  eyebrow: string;
  headline: string;
  accentLine: string;
  description: string;
  image: string;
  statLabel: string;
  statValue: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  company: string;
  city: string;
  installedModel: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    eyebrow: "90° Anamorphic Outdoor Architecture",
    headline: "Welcome to Mahalaxmi.",
    accentLine: "Transforming Spaces with Brilliance.",
    description:
      "Weatherproof L-Shaped 3D Outdoor Displays and 7,000-Nit Digital Billboards engineered to dominate city junctions day and night.",
    image: "/images/hero-flagship-wall.jpg",
    statLabel: "Peak Outdoor Luminance",
    statValue: "6,500+ Nits • IP65",
    ctaLabel: "Explore Outdoor Displays",
    ctaHref: "#products",
  },
  {
    id: "slide-2",
    eyebrow: "Zero-Bezel Indoor & Crystal Transparent Series",
    headline: "Cinema-Grade Clarity.",
    accentLine: "Seamless From Every Angle.",
    description:
      "Transform boardrooms, luxury malls, and glass storefronts with P1.8 Fixed MicroPitch walls and 75%-transparency glass LED mesh.",
    image: "/images/indoor-led-showroom.jpg",
    statLabel: "Ultra-Fine Pixel Spacing",
    statValue: "P1.5 – P2.5 • 16-Bit HDR",
    ctaLabel: "View Indoor & Transparent",
    ctaHref: "#products",
  },
  {
    id: "slide-3",
    eyebrow: "Mission-Critical & Live Stage Engineering",
    headline: "Built for 24/7 Duty.",
    accentLine: "Trusted Across Pan-India.",
    description:
      "Backed by our Nagpur Head Office, Ahmedabad Cabinet Manufacturing Unit, and Karnataka Branch — delivering precision from blueprint to AMC.",
    image: "/images/app-control-room.jpg",
    statLabel: "Broadcast Refresh Rate",
    statValue: "3,840 Hz Flicker-Free",
    ctaLabel: "Discover Our Technology",
    ctaHref: "#technology",
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "rev-1",
    clientName: "Saurabh Deshmukh",
    company: "Apex Outdoor Media",
    city: "Nagpur, MH",
    installedModel: "L-Shaped P6 Outdoor Display (30×15 ft)",
    quote:
      "Even in peak May afternoon sunlight in Nagpur, the brightness and 90-degree corner seam on our Mahalaxmi L-shaped hoarding look razor sharp. Advertiser bookings doubled within two months.",
    rating: 5,
  },
  {
    id: "rev-2",
    clientName: "Priya Kulkarni",
    company: "Kulkarni Jewellers Flagship",
    city: "Pune, MH",
    installedModel: "Indoor Fixed P2.5 + Digital Standees",
    quote:
      "Zero bezel lines and accurate gold color reproduction were critical for our showroom. Their team mounted the P2.5 wall flush into our marble interior with clean front-access maintenance.",
    rating: 5,
  },
  {
    id: "rev-3",
    clientName: "Vikramaditya Patel",
    company: "Horizon Events & Productions",
    city: "Ahmedabad, GJ",
    installedModel: "Touring Stage LED Cabinets (P2.6 & P3.9)",
    quote:
      "Having their sheet-metal and cabinet fabrication unit right in Ahmedabad gave us unmatched build quality. Zero scan-lines on wedding DSLR cameras and super fast rigging.",
    rating: 5,
  },
  {
    id: "rev-4",
    clientName: "Karthik Gowda",
    company: "Metro Retail Plaza",
    city: "Davangere / Bengaluru, KA",
    installedModel: "Indoor Transparent LED Glass Wall",
    quote:
      "The transparent LED facade lets natural daylight into our atrium while running vibrant 3D promos all evening. Local support from their Karnataka branch made commissioning effortless.",
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How do I choose between P1.8, P2.5, P4, P6, and P10 pixel pitches?",
    a: "Pixel pitch depends on the closest viewing distance. For boardrooms and showrooms (2–3m), P1.8 or P2.5 gives seamless Ultra-HD clarity. For large halls or storefronts (4–5m), P4 is ideal. For roadside billboards and stadiums (6–15m+), P6 to P10 delivers maximum brightness and ROI.",
  },
  {
    q: "Are your outdoor LED displays protected against heavy monsoon rain and summer heat?",
    a: "Yes. Our L-Shaped Outdoor Displays and Digital Billboards feature IP65 waterproof front modules, conformal-coated PCBs, and high-airflow cabinets engineered in our Ahmedabad fabrication unit to handle 45°C+ Indian summers and heavy monsoons.",
  },
  {
    q: "How is content updated on Digital Standees and LED Video Walls?",
    a: "You can update videos, graphics, and live feeds effortlessly via USB plug-and-play, Wi-Fi mobile app, HDMI/Novastar controller, or centralized cloud CMS scheduling across multiple city locations.",
  },
  {
    q: "Do you provide structural fabrication, installation, and after-sales AMC?",
    a: "Yes — we handle end-to-end execution: site survey, CAD structural load drawings, in-house sheet-metal/die-cast cabinet manufacturing, Novastar calibration, and responsive AMC support from Nagpur, Ahmedabad, and Karnataka.",
  },
];
