"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
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

  const handleSelectAndScroll = (text: string) => {
    setSelectedRequirement(text);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-t-bg text-t-ink transition-colors">
      <Navbar />
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
      <Footer />

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
