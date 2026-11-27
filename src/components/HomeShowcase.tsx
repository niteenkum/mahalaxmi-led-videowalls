"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { THEMES } from "@/data/themes";
import Navbar from "@/components/Navbar";
import LogoPreloader from "@/components/LogoPreloader";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import TechnologySection from "@/components/TechnologySection";
import ScreenCalculator from "@/components/ScreenCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomeShowcase() {
  const [selectedRequirement, setSelectedRequirement] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [loaderKey, setLoaderKey] = useState(0);

  useEffect(() => {
    if (!showLoader) return;
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showLoader, loaderKey]);

  const handleLogoReload = () => {
    setLoaderKey((k) => k + 1);
    setShowLoader(true);
    window.scrollTo({ top: 0, behavior: "instant" });
    if (window.location.hash !== "#home") {
      window.history.replaceState(null, "", "#home");
    }
  };

  useEffect(() => {
    let cancelled = false;
    fetch("/api/theme", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { themeId?: string } | null) => {
        if (cancelled) return;
        const themeId =
          data?.themeId && THEMES.some((t) => t.id === data.themeId)
            ? data.themeId
            : "obsidian-mono";
        document.documentElement.setAttribute("data-theme", themeId);
      })
      .catch(() => {
        if (!cancelled) {
          document.documentElement.setAttribute("data-theme", "obsidian-mono");
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSelectAndScroll = (text: string) => {
    setSelectedRequirement(text);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-t-bg text-t-ink transition-colors">
      <LogoPreloader visible={showLoader} runKey={loaderKey} />
      <Navbar onLogoClick={handleLogoReload} />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection onEnquire={handleSelectAndScroll} />
        <ApplicationsSection onEnquire={handleSelectAndScroll} />
        <TechnologySection onEnquire={handleSelectAndScroll} />
        <ScreenCalculator onSelectConfig={handleSelectAndScroll} />
        <TestimonialsSection onEnquire={handleSelectAndScroll} />
        <AboutSection />
        <ContactSection selectedRequirement={selectedRequirement} />
      </main>
      <Footer onLogoClick={handleLogoReload} />

      {/* Theme-Aware Floating WhatsApp Concierge Pill */}
      <a
        href="https://wa.me/919209167669?text=Hi%20Mahalaxmi%20LED%20Video%20Walls%2C%20I%20would%20like%20to%20enquire%20about%20an%20LED%20display."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-t-accent px-5 py-3 text-xs font-semibold text-t-accent-fg shadow-xl transition hover:scale-105 hover:bg-t-accent-hover"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
