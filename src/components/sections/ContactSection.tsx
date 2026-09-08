"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Clock, Phone, MapPin, Instagram, Navigation, MessageSquare, ExternalLink, ShoppingBag } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();

  const isPt = language === "PT";

  const googleMapsUrl =
    "https://www.google.com/maps/place/IR+Fitness+Gym/@-25.9680464,32.5658879,1358m/data=!3m1!1e3!4m6!3m5!1s0x1ee69b108e614f9f:0x1ef8eda9b5c9652b!8m2!3d-25.9680342!4d32.5710478!16s%2Fg%2F11t_kc4bk6";

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=-25.9680342,32.5710478&hl=pt-MZ&z=17&output=embed";

  const whatsappReceptionUrl =
    "https://wa.me/258846879562?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20IR%20Fitness%20Gym.";

  const whatsappShopUrl =
    "https://wa.me/258849675563?text=Ol%C3%A1!%20Gostaria%20de%20encomendar%20suplementos%20na%20IR%20Fitness%20Shop.";

  return (
    <section id="contacto" className="py-16 md:py-24 bg-background border-t border-border relative overflow-hidden">
      {/* Background Decorative Radial Glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-muted text-brand-red border border-brand-red/30">
            <Navigation className="w-4 h-4 text-brand-red" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              {isPt ? "LOCALIZAÇÃO & HORÁRIO" : "LOCATION & HOURS"}
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-text-primary">
            {isPt ? "ENCONTRA-NOS EM MAPUTO." : "FIND US IN MAPUTO."}
          </h2>

          <p className="text-sm sm:text-base text-text-secondary">
            {isPt
              ? "O próximo treino começa aqui. Visita o IR Fitness Gym na Avenida Josina Machel ou entra em contacto direto com a nossa equipa."
              : "Your next workout starts here. Visit IR Fitness Gym on Avenida Josina Machel or contact our team directly."}
          </p>
        </div>

        {/* 12-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column — 5 Columns: Informational Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Card 1: Horário de Funcionamento */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-brand-red-muted text-brand-red border border-brand-red/30">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                      {isPt ? "HORÁRIO DE FUNCIONAMENTO" : "OPERATING HOURS"}
                    </h3>
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {isPt ? "Aberto Todos os Dias" : "Open Daily"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Schedule Item Rows with High-contrast Badges */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-border/40">
                  <span className="text-text-secondary font-medium">
                    {isPt ? "Segunda a Sexta" : "Monday to Friday"}
                  </span>
                  <span className="font-mono font-bold text-brand-red bg-brand-red-muted px-2.5 py-1 rounded-md border border-brand-red/20 text-xs">
                    05h00 às 22h00
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-border/40">
                  <span className="text-text-secondary font-medium">
                    {isPt ? "Sábado" : "Saturday"}
                  </span>
                  <span className="font-mono font-bold text-brand-red bg-brand-red-muted px-2.5 py-1 rounded-md border border-brand-red/20 text-xs">
                    06h00 às 14h00
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-border/40">
                  <span className="text-text-secondary font-medium">
                    {isPt ? "Domingo" : "Sunday"}
                  </span>
                  <span className="font-mono font-bold text-brand-red bg-brand-red-muted px-2.5 py-1 rounded-md border border-brand-red/20 text-xs">
                    08h00 às 13h00
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-text-secondary font-medium">
                    {isPt ? "Feriados" : "Holidays"}
                  </span>
                  <span className="font-mono font-bold text-brand-red bg-brand-red-muted px-2.5 py-1 rounded-md border border-brand-red/20 text-xs">
                    08h00 às 12h00
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Contactos Diretos */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border shadow-xl space-y-5">
              <div className="flex items-center gap-3 border-b border-border/80 pb-4">
                <div className="p-3 rounded-2xl bg-brand-red-muted text-brand-red border border-brand-red/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                    {isPt ? "CONTACTOS DIRECTOS" : "DIRECT CONTACTS"}
                  </h3>
                  <span className="text-xs font-mono text-text-muted">
                    {isPt ? "Atendimento, Inscrições & Suplementação" : "Support, Registrations & Supplements"}
                  </span>
                </div>
              </div>

              {/* Action Rows with Specific Line Purposes */}
              <div className="space-y-3">
                {/* Reception Line */}
                <a
                  href={whatsappReceptionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-muted border border-border hover:border-brand-red/50 hover:bg-surface-hover transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-red shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono text-text-muted uppercase font-bold tracking-wider">
                        {isPt ? "RECEPÇÃO & INFORMAÇÕES" : "RECEPTION & INFORMATION"}
                      </span>
                      <span className="font-mono font-bold text-text-primary group-hover:text-brand-red transition-colors text-sm">
                        +258 84 687 9562
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-brand-red transition-colors shrink-0" />
                </a>

                {/* Supplements / IR Fitness Shop Line */}
                <a
                  href={whatsappShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-muted border border-border hover:border-brand-red/50 hover:bg-surface-hover transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-4 h-4 text-brand-red shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono text-text-muted uppercase font-bold tracking-wider">
                        {isPt ? "SUPORTE & SUPLEMENTOS (IR FITNESS SHOP)" : "SUPPLEMENT SUPPORT (IR FITNESS SHOP)"}
                      </span>
                      <span className="font-mono font-bold text-text-primary group-hover:text-brand-red transition-colors text-sm">
                        +258 84 967 5563
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-brand-red transition-colors shrink-0" />
                </a>

                {/* WhatsApp Direct Support Action Button */}
                <Button
                  href={whatsappReceptionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="primary"
                  className="w-full justify-center py-3 text-sm tracking-wider uppercase font-bold mt-2 min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {isPt ? "Falar no WhatsApp Directo" : "Chat on Direct WhatsApp"}
                </Button>

                {/* Dual Instagram Links */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href="https://www.instagram.com/ir.fitness.gym"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface-muted border border-border hover:border-brand-red/50 hover:bg-surface-hover transition-all group min-h-[44px]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-4 h-4 text-brand-red shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-text-muted uppercase font-bold">
                          {isPt ? "Ginásio Oficial" : "Official Gym"}
                        </span>
                        <span className="font-mono font-bold text-xs text-text-primary group-hover:text-brand-red transition-colors">
                          @ir.fitness.gym
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-brand-red transition-colors shrink-0" />
                  </a>

                  <a
                    href="https://www.instagram.com/ir_fitness_shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface-muted border border-border hover:border-brand-red/50 hover:bg-surface-hover transition-all group min-h-[44px]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-4 h-4 text-brand-red shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-text-muted uppercase font-bold">
                          {isPt ? "Suplementação" : "Nutrition"}
                        </span>
                        <span className="font-mono font-bold text-xs text-text-primary group-hover:text-brand-red transition-colors">
                          @ir_fitness_shop
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-brand-red transition-colors shrink-0" />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column — 7 Columns: Expansive Map & Bottom Action Bar */}
          <div className="lg:col-span-7 flex">
            <div className="bg-surface rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col w-full h-full min-h-[460px]">
              
              {/* Map Embed Container */}
              <div className="relative w-full flex-1 min-h-[360px] bg-surface-muted">
                <iframe
                  title="IR Fitness Gym Google Maps Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(0.85) contrast(1.2) invert(0.9)",
                    position: "absolute",
                    inset: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  {...({ fetchPriority: "low" } as any)}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Action Bar */}
              <div className="p-5 sm:p-6 bg-surface border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-mono uppercase text-brand-red font-bold tracking-wider">
                      {isPt ? "ENDEREÇO FÍSICO" : "PHYSICAL ADDRESS"}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-text-primary leading-snug">
                      Av. Josina Machel, Praceta Louis Trachaut 153, Bairro Central — Maputo
                    </span>
                  </div>
                </div>

                <div className="w-full sm:w-auto shrink-0">
                  <Button
                    href={googleMapsUrl}
                    target="_blank"
                    size="md"
                    variant="primary"
                    className="w-full sm:w-auto min-h-[44px]"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {isPt ? "Obter Direções" : "Get Directions"}
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

