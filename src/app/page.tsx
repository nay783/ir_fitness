"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SupplementsSection } from "@/components/sections/SupplementsSection";
import { EventShowcaseSection } from "@/components/sections/EventShowcaseSection";
import { StudentPassSection } from "@/components/sections/StudentPassSection";
import { CommunityRailSection } from "@/components/sections/CommunityRailSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <HeroSection />
        <PillarsSection />
        <PricingSection />
        <SupplementsSection />
        <EventShowcaseSection />
        <StudentPassSection />
        <CommunityRailSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
