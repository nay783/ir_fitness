"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/i18n/translations";
import { Menu, X, MessageSquare } from "lucide-react";

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: t.nav.home },
    { href: "#pilares", label: t.nav.pillars },
    { href: "#planos", label: t.nav.pricing },
    { href: "#suplementos", label: t.nav.nutrition },
    { href: "#eventos", label: t.nav.events },
    { href: "#estudantes", label: t.nav.students },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/75 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Brand Identity */}
        <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-brand-red/40 group-hover:border-brand-red transition-all shadow-glow-red/40 bg-surface">
            <Image
              src="/images/logo.jpg"
              alt="IR Fitness Gym Logo"
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary group-hover:text-brand-red transition-colors leading-none">
              IR FITNESS <span className="text-brand-red">GYM</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
              MAPUTO • MOÇAMBIQUE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-display uppercase tracking-wider font-semibold text-text-secondary hover:text-brand-red transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageSwitcher />
          <Button href={WHATSAPP_URL} target="_blank" size="sm" className="hidden xl:inline-flex">
            <MessageSquare className="w-4 h-4 mr-1.5" />
            {t.nav.ctaWhatsapp}
          </Button>
        </div>

        {/* Mobile Controls Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-surface border border-border text-text-primary hover:text-brand-red hover:border-brand-red/40 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-border px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-display uppercase tracking-wider font-bold text-text-primary hover:bg-surface-hover hover:text-brand-red transition-all min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-border/50">
            <Button href={WHATSAPP_URL} target="_blank" size="md" className="w-full">
              <MessageSquare className="w-5 h-5 mr-2" />
              {t.nav.ctaWhatsapp}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
