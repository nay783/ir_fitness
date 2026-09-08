"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Tabs } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { PortraitMediaPanel } from "@/components/media/PortraitMediaPanel";
import { WHATSAPP_URL } from "@/i18n/translations";
import { Dumbbell, ShoppingBag, Music, CheckCircle2 } from "lucide-react";

export const PillarsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("gym");

  const tabOptions = [
    { id: "gym", label: t.pillars.tabGym },
    { id: "nutrition", label: t.pillars.tabNutrition, badge: "12 YRS" },
    { id: "events", label: t.pillars.tabEvents, badge: "LIVE" },
  ];

  const pillarData = {
    gym: {
      tag: t.pillars.gym.tag,
      title: t.pillars.gym.title,
      description: t.pillars.gym.description,
      features: [t.pillars.gym.feature1, t.pillars.gym.feature2, t.pillars.gym.feature3],
      cta: t.pillars.gym.cta,
      videoUrl: "/videos/guift.gym-treino-superiores-DbBSQ-uyT6x.mp4",
      icon: Dumbbell,
      badge: "ALTA PERFORMANCE",
    },
    nutrition: {
      tag: t.pillars.nutrition.tag,
      title: t.pillars.nutrition.title,
      description: t.pillars.nutrition.description,
      features: [t.pillars.nutrition.feature1, t.pillars.nutrition.feature2, t.pillars.nutrition.feature3],
      cta: t.pillars.nutrition.cta,
      videoUrl: "/videos/ir_fitness_shop-promocao-whey-protein-baunilha-DbIdxnslKhl.mp4",
      icon: ShoppingBag,
      badge: "12 ANOS HERITAGE",
    },
    events: {
      tag: t.pillars.events.tag,
      title: t.pillars.events.title,
      description: t.pillars.events.description,
      features: [t.pillars.events.feature1, t.pillars.events.feature2, t.pillars.events.feature3],
      cta: t.pillars.events.cta,
      videoUrl: "/videos/ir.fitness.gym-evento-music-gym-experience-vol2-Db7gdkQiGqZ.mp4",
      icon: Music,
      badge: "LIVE DJS & BEATS",
    },
  };

  const currentPillar = pillarData[activeTab as keyof typeof pillarData];
  const IconComponent = currentPillar.icon;

  return (
    <section id="pilares" className="py-16 md:py-24 bg-background-elevated border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red bg-brand-red-muted px-3.5 py-1 rounded-full border border-brand-red/30">
            ECOSSISTEMA IR FITNESS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-primary">
            {t.pillars.title}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <Tabs tabs={tabOptions} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        {/* Pillar Details Card */}
        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border shadow-2xl transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand-red-muted text-brand-red border border-brand-red/30">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-red font-bold">
                  {currentPillar.tag}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-primary">
                {currentPillar.title}
              </h3>

              <p className="text-base text-text-secondary leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="space-y-3 pt-2">
                {currentPillar.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-text-primary font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href={WHATSAPP_URL} target="_blank" size="lg" variant="primary" className="w-full sm:w-auto">
                  {currentPillar.cta}
                </Button>
              </div>
            </div>

            {/* Right Video Showcase */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <PortraitMediaPanel
                key={activeTab}
                videoUrl={currentPillar.videoUrl}
                badgeLabel={currentPillar.badge}
                locationText="IR FITNESS"
                maxWidthClass="w-full max-w-[340px] sm:max-w-[360px]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
