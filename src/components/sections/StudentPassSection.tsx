"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/Button";
import { PortraitMediaPanel } from "@/components/media/PortraitMediaPanel";
import { WHATSAPP_URL } from "@/i18n/translations";
import { GraduationCap, CheckCircle, Sparkles } from "lucide-react";

export const StudentPassSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="estudantes" className="py-16 md:py-24 bg-background-elevated border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Portrait Video Showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center w-full">
              <PortraitMediaPanel
                videoUrl="/videos/guift.gym-promocao-pacote-estudante-DalH4goIwU1.mp4"
                posterUrl="/images/logo.jpg"
                badgeLabel="PACOTE ESTUDANTE"
                locationText="UNIVERSITÁRIOS"
                maxWidthClass="w-full max-w-[340px] sm:max-w-[360px]"
              />
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-muted text-brand-red border border-brand-red/30">
                <GraduationCap className="w-4 h-4 text-brand-red" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  {t.studentPass.tag}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-primary">
                {t.studentPass.title}
              </h2>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                {t.studentPass.description}
              </p>

              <div className="space-y-3 pt-2">
                {[t.studentPass.perk1, t.studentPass.perk2, t.studentPass.perk3].map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-text-primary font-medium">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href={WHATSAPP_URL} target="_blank" size="lg" variant="primary" className="w-full sm:w-auto">
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t.studentPass.cta}
                </Button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
