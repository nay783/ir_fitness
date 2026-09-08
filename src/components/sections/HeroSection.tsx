"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/i18n/translations";
import { Dumbbell, Award, MapPin, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-24 pb-20">
      
      {/* 1. Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/posters/ir.fitness.gym-comunidade-experiencia-treino-DcipHsvAepo.jpg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-90 z-0"
      >
        <source src="/videos/ir.fitness.gym-comunidade-experiencia-treino-DcipHsvAepo.mp4" type="video/mp4" />
      </video>

      {/* 2. Dual-Layer Scrim & Grading Overlay */}
      {/* Dark Scrim - High Contrast Text Readability */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] z-10 pointer-events-none" />

      {/* Radial Brand Glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(225,29,72,0.18) 0%, transparent 75%)",
        }}
      />

      {/* Bottom Edge Gradient Fade for Seamless Transition */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent z-15 pointer-events-none" />

      {/* 3. Centered Content Container */}
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-20 space-y-8 flex flex-col items-center justify-center">
        
        {/* Supertitle Badge: Semi-transparent dark pill container with crisp white text & pulsing crimson dot */}
        <div className="inline-flex items-center gap-2.5 bg-black/60 border border-brand-red/50 px-4 py-1.5 rounded-full shadow-glow-red/30 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
          <span className="text-white font-mono text-xs sm:text-sm tracking-widest font-bold uppercase">
            {t.hero.supertitle}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-text-primary leading-[0.92] text-balance max-w-4xl">
          ONDE CADA TREINO{" "}
          <span className="bg-gradient-to-r from-brand-red via-brand-red-hover to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(225,29,72,0.5)]">
            É UMA VITÓRIA.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-text-secondary max-w-2xl mx-auto font-normal leading-relaxed text-center">
          {t.hero.subheadline}
        </p>

        {/* Dual Centered CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
          <Button href={WHATSAPP_URL} target="_blank" size="lg" variant="primary" className="w-full sm:w-auto min-w-[240px]">
            <Dumbbell className="w-5 h-5 mr-2" />
            {t.hero.ctaPrimary}
          </Button>
          <Button href="#suplementos" size="lg" variant="outline" className="w-full sm:w-auto min-w-[220px]">
            <Sparkles className="w-5 h-5 mr-2 text-brand-red" />
            {t.hero.ctaSecondary}
          </Button>
        </div>

        {/* 3-Column Centered Metrics Row */}
        <div className="w-full max-w-3xl mx-auto pt-10 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
          
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 text-brand-red">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
                {t.hero.statsYears}
              </span>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-text-muted uppercase mt-0.5 tracking-wider">
              {t.hero.statsYearsLabel}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-x border-white/10 px-2">
            <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              {t.hero.statsCommunity}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-text-muted uppercase mt-0.5 tracking-wider">
              {t.hero.statsCommunityLabel}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-text-primary">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" />
              <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
                {t.hero.statsLocation}
              </span>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-text-muted uppercase mt-0.5 tracking-wider">
              {t.hero.statsLocationLabel}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
