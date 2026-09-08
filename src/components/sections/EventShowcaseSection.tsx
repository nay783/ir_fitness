"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/Button";
import { PortraitMediaPanel } from "@/components/media/PortraitMediaPanel";
import { WHATSAPP_URL } from "@/i18n/translations";
import { Music, Ticket, Gift, Radio, Check } from "lucide-react";

export const EventShowcaseSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="eventos" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-red/15 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface border border-brand-red/40 rounded-3xl p-6 sm:p-12 shadow-glow-red/20 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Showcase Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Event Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red text-white">
                <Radio className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  {t.eventShowcase.tag}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-text-primary leading-[0.95]">
                {t.eventShowcase.title}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                {t.eventShowcase.description}
              </p>

              {/* Pricing & Member Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className="p-4 rounded-2xl bg-surface-muted border border-border flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-brand-red-muted text-brand-red">
                    <Ticket className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase block">
                      {t.eventShowcase.ticketNonMember}
                    </span>
                    <span className="font-display text-2xl font-bold text-brand-red">
                      {t.eventShowcase.ticketNonMemberVal}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-red-muted/30 border border-brand-red/40 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-brand-red text-white">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase block">
                      {t.eventShowcase.ticketMember}
                    </span>
                    <span className="font-display text-xl font-bold text-text-primary">
                      {t.eventShowcase.ticketMemberVal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted block">
                  {t.eventShowcase.highlightsTitle}
                </span>
                <div className="space-y-2">
                  {[t.eventShowcase.h1, t.eventShowcase.h2, t.eventShowcase.h3].map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-brand-red" />
                      <span className="text-sm sm:text-base text-text-primary">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Button href={WHATSAPP_URL} target="_blank" size="lg" variant="primary" className="w-full sm:w-auto">
                  <Music className="w-5 h-5 mr-2" />
                  {t.eventShowcase.cta}
                </Button>
              </div>

            </div>

            {/* Right Portrait Video Panel */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <PortraitMediaPanel
                videoUrl="/videos/ir.fitness.gym-evento-music-gym-experience-vol2-Db7gdkQiGqZ.mp4"
                posterUrl="/images/logo.jpg"
                badgeLabel="MUSIC & GYM EXPERIENCE"
                locationText="LIVE SESSION"
                maxWidthClass="w-full max-w-[340px] sm:max-w-[370px]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
