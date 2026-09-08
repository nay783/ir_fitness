"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { Instagram, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isPt = language === "PT";

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": "IR Fitness Gym",
    "image": "https://irfitnessgym.co.mz/images/logo.jpg",
    "telephone": "+258846879562",
    "url": "https://irfitnessgym.co.mz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Josina Machel, Praceta Louis Trachaut 153, Bairro Central",
      "addressLocality": "Maputo",
      "addressCountry": "MZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.9680342,
      "longitude": 32.5710478
    },
    "hasMap": "https://www.google.com/maps/place/IR+Fitness+Gym/@-25.9680464,32.5658879,1358m/data=!3m1!1e3!4m6!3m5!1s0x1ee69b108e614f9f:0x1ef8eda9b5c9652b!8m2!3d-25.9680342!4d32.5710478!16s%2Fg%2F11t_kc4bk6",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "05:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "06:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "slogan": "Especialistas em alta performance. Onde cada treino é uma vitória.",
    "department": [
      {
        "@type": "Store",
        "name": "IR Fitness Shop — Loja Polana",
        "address": "Av. Eduardo Mondlane, 324 — Maputo",
        "telephone": "+258846507470"
      },
      {
        "@type": "Store",
        "name": "IR Fitness Shop — Loja Coop",
        "address": "Av. Vladimir Lenine, 2177 — Maputo",
        "telephone": "+258827395099"
      },
      {
        "@type": "Store",
        "name": "IR Fitness Shop — Loja Gym (Balcão do Ginásio)",
        "address": "Av. Josina Machel, 153 — Maputo",
        "telephone": "+258849675563"
      }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-white/[0.08] relative">
      {/* Embedded JSON-LD Structured Data Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
        
        {/* Left Side: Logo + Copyright (Single flex line) */}
        <div className="flex items-center gap-3 shrink-0 text-center md:text-left">
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative w-6 h-6 rounded-md overflow-hidden border border-brand-red/60 bg-surface shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="IR Fitness Logo"
                fill
                className="object-cover"
                sizes="24px"
              />
            </div>
            <span className="font-display font-bold tracking-tight text-text-primary text-xs sm:text-sm whitespace-nowrap">
              IR FITNESS <span className="text-brand-red">GYM</span>
            </span>
          </div>
          <span className="hidden sm:inline text-text-muted/60 shrink-0">•</span>
          <p className="text-[11px] sm:text-xs text-text-muted whitespace-nowrap font-medium">
            {isPt
              ? "© 2026 IR Fitness Gym. Todos os direitos reservados. Maputo, Moçambique."
              : "© 2026 IR Fitness Gym. All rights reserved. Maputo, Mozambique."}
          </p>
        </div>

        {/* Center: Developer Credit */}
        <div className="shrink-0 text-center text-[11px] sm:text-xs text-text-muted whitespace-nowrap font-medium">
          <span>{isPt ? "Desenvolvido por " : "Developed by "}</span>
          <span className="font-semibold text-text-secondary hover:text-brand-red transition-colors cursor-pointer border-b border-transparent hover:border-brand-red">
            NCAI Consultorias e Serviços, EI
          </span>
        </div>

        {/* Right Side: Social Handles & Back to Top Anchor */}
        <div className="shrink-0 flex items-center gap-3 text-[11px] sm:text-xs whitespace-nowrap">
          <div className="flex items-center gap-3 border-r border-border/60 pr-3">
            <a
              href="https://www.instagram.com/ir.fitness.gym"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-red transition-colors font-mono font-medium text-[11px] sm:text-xs whitespace-nowrap"
            >
              <Instagram className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>@ir.fitness.gym</span>
            </a>
            <a
              href="https://www.instagram.com/ir_fitness_shop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-red transition-colors font-mono font-medium text-[11px] sm:text-xs whitespace-nowrap"
            >
              <Instagram className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>@ir_fitness_shop</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-secondary hover:text-brand-red transition-colors font-medium px-2 py-1 rounded-md hover:bg-surface-muted min-h-[44px] whitespace-nowrap"
          >
            <span>{isPt ? "Voltar ao Início" : "Back to Top"}</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-red shrink-0" />
          </button>
        </div>

      </div>
    </footer>
  );
};


