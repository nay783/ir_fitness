"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { WHATSAPP_URL } from "@/i18n/translations";
import { Check, Star, Zap, UserCheck, Calendar, ShieldCheck } from "lucide-react";

export const PricingSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("fullday");

  const tabOptions = [
    { id: "fullday", label: t.pricing.tabFullDay, badge: "BEST VALUE" },
    { id: "flexible", label: t.pricing.tabFlexible },
    { id: "personal", label: t.pricing.tabPersonal, badge: "1-ON-1" },
  ];

  return (
    <section id="planos" className="py-16 md:py-24 bg-background border-t border-border relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red bg-brand-red-muted px-3.5 py-1 rounded-full border border-brand-red/30">
            {t.pricing.tag}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-primary">
            {t.pricing.title}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs tabs={tabOptions} activeTab={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Tab 1: Full Day Plans */}
        {activeCategory === "fullday" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch animate-fadeIn">
            
            {/* Mensal */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all group">
              <div className="space-y-4">
                <span className="text-xs font-mono text-text-muted uppercase font-bold tracking-wider block">
                  PASSE MENSAL
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-text-primary">
                  {t.pricing.fullDay.monthlyTitle}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-red">
                    {t.pricing.fullDay.monthlyPrice}
                  </span>
                  <span className="text-sm font-mono text-text-secondary">
                    {t.pricing.fullDay.monthlyPeriod}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pt-2">
                  {t.pricing.fullDay.monthlyDesc}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="space-y-2 border-t border-border/60 pt-4 text-xs sm:text-sm text-text-primary">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Acesso Livre Todos os Dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Maquinário & Pesos Livres</span>
                  </div>
                </div>
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20aderir%20ao%20Passe%20Mensal%20Full%20Day%20(2.950%20MT)`}
                  target="_blank"
                  size="md"
                  variant="outline"
                  className="w-full"
                >
                  {t.pricing.ctaSelect}
                </Button>
              </div>
            </div>

            {/* Semestral (Highlighted) */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border-2 border-brand-red shadow-glow-red/30 flex flex-col justify-between relative transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-red text-white text-[11px] font-mono font-bold uppercase tracking-widest shadow-md flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                {t.pricing.fullDay.semestralBadge}
              </div>

              <div className="space-y-4 pt-2">
                <span className="text-xs font-mono text-brand-red uppercase font-bold tracking-wider block">
                  PASSE SEMESTRAL (ECONOMIA 20%)
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-text-primary">
                  {t.pricing.fullDay.semestralTitle}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-red">
                    {t.pricing.fullDay.semestralPrice}
                  </span>
                  <span className="text-sm font-mono text-text-secondary">
                    {t.pricing.fullDay.semestralPeriod}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pt-2">
                  {t.pricing.fullDay.semestralDesc}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="space-y-2 border-t border-border/60 pt-4 text-xs sm:text-sm text-text-primary">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Desconto de 20% Garantido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Acesso Total Full Day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                    <span>1 Convite Grátis p/ Eventos</span>
                  </div>
                </div>
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20aderir%20ao%20Passe%20Semestral%20Full%20Day%20(2.360%20MT%2Fm%C3%Aas)`}
                  target="_blank"
                  size="md"
                  variant="primary"
                  className="w-full"
                >
                  {t.pricing.ctaSelect}
                </Button>
              </div>
            </div>

            {/* Anual */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-text-muted uppercase font-bold tracking-wider block">
                    PASSE ANUAL
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-brand-red-muted text-brand-red border border-brand-red/30">
                    {t.pricing.fullDay.annualBadge}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-text-primary">
                  {t.pricing.fullDay.annualTitle}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-red">
                    {t.pricing.fullDay.annualPrice}
                  </span>
                  <span className="text-sm font-mono text-text-secondary">
                    {t.pricing.fullDay.annualPeriod}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pt-2">
                  {t.pricing.fullDay.annualDesc}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="space-y-2 border-t border-border/60 pt-4 text-xs sm:text-sm text-text-primary">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Melhor Tarifa Mensal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                    <span>Acesso Total 365 Dias</span>
                  </div>
                </div>
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20aderir%20ao%20Passe%20Anual%20Full%20Day%20(2.065%20MT%2Fm%C3%Aas)`}
                  target="_blank"
                  size="md"
                  variant="outline"
                  className="w-full"
                >
                  {t.pricing.ctaSelect}
                </Button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Flexible Plans */}
        {activeCategory === "flexible" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch animate-fadeIn">
            
            {/* Diária */}
            <div className="bg-surface rounded-3xl p-6 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono text-text-muted uppercase font-bold">TREINO AVULSO</span>
                <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                  {t.pricing.flexible.dailyTitle}
                </h3>
                <div className="font-display text-3xl font-extrabold text-brand-red">
                  {t.pricing.flexible.dailyPrice}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {t.pricing.flexible.dailyDesc}
                </p>
              </div>
              <div className="pt-6">
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20um%20Passe%20Di%C3%A1rio%20(500%20MT)`}
                  target="_blank"
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  Comprar Diária
                </Button>
              </div>
            </div>

            {/* Semanal */}
            <div className="bg-surface rounded-3xl p-6 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono text-text-muted uppercase font-bold">7 DIAS SEGUIDOS</span>
                <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                  {t.pricing.flexible.weeklyTitle}
                </h3>
                <div className="font-display text-3xl font-extrabold text-brand-red">
                  {t.pricing.flexible.weeklyPrice}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {t.pricing.flexible.weeklyDesc}
                </p>
              </div>
              <div className="pt-6">
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20um%20Passe%20Semanal%20(1.500%20MT)`}
                  target="_blank"
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  Comprar Semanal
                </Button>
              </div>
            </div>

            {/* Económico */}
            <div className="bg-surface rounded-3xl p-6 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-red uppercase font-bold">HORÁRIO OFF-PEAK (09h-16h)</span>
                <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                  {t.pricing.flexible.ecoTitle}
                </h3>
                <div className="font-display text-3xl font-extrabold text-brand-red">
                  {t.pricing.flexible.ecoPrice}
                  <span className="text-xs font-mono text-text-muted font-normal"> /mês</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {t.pricing.flexible.ecoDesc}
                </p>
              </div>
              <div className="pt-6">
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Econ%C3%B3mico%20(2.250%20MT)`}
                  target="_blank"
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  Aderir Económico
                </Button>
              </div>
            </div>

            {/* Família */}
            <div className="bg-surface rounded-3xl p-6 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all">
              <div className="space-y-3">
                <span className="text-xs font-mono text-text-muted uppercase font-bold">GRUPO FAMILIAR</span>
                <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                  {t.pricing.flexible.familyTitle}
                </h3>
                <div className="font-display text-3xl font-extrabold text-brand-red">
                  {t.pricing.flexible.familyPrice}
                  <span className="text-xs font-mono text-text-muted font-normal"> /pess/mês</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {t.pricing.flexible.familyDesc}
                </p>
              </div>
              <div className="pt-6">
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20inscrever%20a%20minha%20fam%C3%ADlia%20no%20Plano%20Fam%C3%ADlia%20(2.750%20MT)`}
                  target="_blank"
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  Aderir Família
                </Button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Personal Trainer */}
        {activeCategory === "personal" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch animate-fadeIn">
            
            {/* 1x / semana */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all">
              <div className="space-y-4">
                <span className="text-xs font-mono text-text-muted uppercase font-bold">ACOMPANHAMENTO 1X/SEM</span>
                <h3 className="font-display text-2xl font-bold uppercase text-text-primary">
                  {t.pricing.personal.p1xTitle}
                </h3>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-brand-red">
                  {t.pricing.personal.p1xPrice}
                  <span className="text-xs font-mono text-text-muted font-normal"> /mês</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t.pricing.personal.p1xDesc}
                </p>
              </div>

              <div className="pt-6">
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20Personal%20Trainer%201x%2Fsemana%20(3.000%20MT)`}
                  target="_blank"
                  size="md"
                  variant="outline"
                  className="w-full"
                >
                  {t.pricing.ctaSelect}
                </Button>
              </div>
            </div>

            {/* 3x / semana */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-brand-red/50 shadow-glow-red/20 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-brand-red uppercase font-bold">RECOMENDADO</span>
                <h3 className="font-display text-2xl font-bold uppercase text-text-primary">
                  {t.pricing.personal.p3xTitle}
                </h3>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-brand-red">
                  {t.pricing.personal.p3xPrice}
                  <span className="text-xs font-mono text-text-muted font-normal"> /mês</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t.pricing.personal.p3xDesc}
                </p>
              </div>

              <div className="pt-6">
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20Personal%20Trainer%203x%2Fsemana%20(6.000%20MT)`}
                  target="_blank"
                  size="md"
                  variant="primary"
                  className="w-full"
                >
                  {t.pricing.ctaSelect}
                </Button>
              </div>
            </div>

            {/* 5x / semana */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-text-muted uppercase font-bold">INTENSIVO PRO</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-brand-red-muted text-brand-red border border-brand-red/30">
                    {t.pricing.personal.p5xBadge}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-text-primary">
                  {t.pricing.personal.p5xTitle}
                </h3>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-brand-red">
                  {t.pricing.personal.p5xPrice}
                  <span className="text-xs font-mono text-text-muted font-normal"> /mês</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t.pricing.personal.p5xDesc}
                </p>
              </div>

              <div className="pt-6">
                <Button
                  href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20Personal%20Trainer%205x%2Fsemana%20(8.000%20MT)`}
                  target="_blank"
                  size="md"
                  variant="outline"
                  className="w-full"
                >
                  {t.pricing.ctaSelect}
                </Button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
