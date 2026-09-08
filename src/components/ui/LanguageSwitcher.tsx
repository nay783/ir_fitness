"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  const options: Language[] = ["PT", "EN"];

  return (
    <div className={cn("inline-flex items-center bg-surface border border-border rounded-lg p-1 gap-1", className)}>
      <Globe className="w-3.5 h-3.5 text-text-muted ml-1.5 hidden sm:block" />
      {options.map((lang) => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            className={cn(
              "px-2.5 py-1 text-xs font-mono font-bold rounded-md transition-all min-h-[36px] flex items-center justify-center cursor-pointer",
              isActive
                ? "bg-brand-red text-white shadow-sm"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
            )}
            aria-label={`Switch language to ${lang}`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
};
