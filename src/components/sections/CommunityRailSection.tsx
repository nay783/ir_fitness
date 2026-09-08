"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { MediaRail } from "@/components/media/MediaRail";
import { Flame } from "lucide-react";

export const CommunityRailSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-muted text-brand-red border border-brand-red/30">
            <Flame className="w-4 h-4 text-brand-red" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              {t.communityRail.tag}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-primary">
            {t.communityRail.title}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl">
            {t.communityRail.subtitle}
          </p>
        </div>
      </div>

      <MediaRail />
    </section>
  );
};
