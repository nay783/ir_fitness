# Master Website Architecture & Design System Blueprint

> **Reusable Blueprint & Technical Specification**  
> *Derived from the production-grade 365 Fitness Next.js application.*  
> Use this document as an authoritative design, performance, i18n, and responsive architecture template for building future web applications.

---

## 1. Core Architecture & Tech Stack

```text
WEB APP FRAMEWORK   : Next.js 15+ (App Router / Static Export Ready)
STYLING ENGINE     : Tailwind CSS 3.4+ / PostCSS
LANGUAGE           : TypeScript 5.0+ (Strict Type Checking)
ICONOGRAPHY        : Lucide React (Lucide Icons)
STATE & I18N       : React Context + LocalStorage Persistence
MEDIA ENGINE       : FFmpeg Transcoded H.264 MP4 (+faststart) + WebP Image Posters
DEPLOYMENT TARGET  : Vercel / Cloudflare Pages / Static Hosting
```

---

## 2. Design System & Theme Tokens

### A. Color Palette (`tailwind.config.ts` / CSS Variables)

```css
:root {
  /* Surface & Background Hierarchy */
  --background: #080808;             /* Deep main canvas */
  --background-elevated: #0d0d0d;    /* Alternating section background */
  --surface: #111111;                /* Card and container surface */
  --surface-hover: #171717;          /* Interactive hover surface */

  /* Brand Accents */
  --brand-yellow: #f2e33a;           /* High-contrast signature brand accent */
  --brand-yellow-hover: #fff04a;     /* Primary button hover state */
  --brand-yellow-muted: rgba(242, 227, 58, 0.15);

  /* Typography Colors */
  --text-primary: #f5f5f5;           /* Primary text / headlines */
  --text-secondary: #a8a8a8;         /* Subtitles & paragraph body text */
  --text-muted: #737373;             /* Metadata, tags, & small captions */

  /* Borders & Dividers */
  --border: rgba(255, 255, 255, 0.12);
  --border-strong: rgba(255, 255, 255, 0.20);
}
```

### B. Typography Tokens

- **Display & Headlines (`font-display`):** `Bebas Neue` / `Barlow Condensed`
  - Uppercase, athletic, high-impact condensed style.
  - Line height: `0.88` to `0.92`.
  - Letter spacing: `tracking-tight` or `tracking-wide`.
- **Body & Controls (`font-sans` / `font-mono`):** `Inter` / `Manrope` / `JetBrains Mono`
  - High-legibility sans-serif for paragraph copy, buttons, pricing details, and navigation links.

---

## 3. Component Architecture & Code Templates

### 1. Universal Responsive Button (`src/components/ui/Button.tsx`)

```tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  target,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display uppercase tracking-wider font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] whitespace-nowrap min-w-0 max-w-full min-h-[44px]";

  const variants = {
    primary:
      "bg-brand-yellow text-black hover:bg-brand-yellow-hover shadow-[0_0_25px_rgba(242,227,58,0.25)] border border-brand-yellow",
    secondary:
      "bg-surface text-text-primary hover:bg-surface-hover border border-border hover:border-border-strong",
    outline:
      "bg-transparent text-text-primary border border-border hover:border-brand-yellow hover:text-brand-yellow",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface/50",
  };

  const sizes = {
    sm: "text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md gap-1.5",
    md: "text-xs sm:text-base px-3.5 sm:px-6 py-2.5 rounded-lg gap-2",
    lg: "text-xs sm:text-lg px-4 sm:px-8 py-3 rounded-xl gap-2.5",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return <button className={combinedClasses} {...props}>{children}</button>;
};
```

---

### 2. Mobile-Optimized Grid Tabs (`src/components/ui/Tabs.tsx`)

```tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: Array<{ id: string; label: string; badge?: string }>;
  activeTab: string;
  onChange: (id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div
      role="tablist"
      className="grid grid-cols-2 w-full sm:w-auto sm:inline-flex items-center p-1 sm:p-1.5 rounded-xl bg-surface border border-border gap-1 sm:gap-2"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex items-center justify-center gap-1 sm:gap-2 min-w-0 px-2 sm:px-5 py-2.5 rounded-lg font-display uppercase text-xs sm:text-base font-bold transition-all whitespace-nowrap min-h-[44px]",
              isActive
                ? "bg-brand-yellow text-black shadow-lg"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            <span className="truncate">{tab.label}</span>
            {tab.badge && (
              <span className={cn(
                "text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-mono hidden xs:inline-block",
                isActive ? "bg-black/20 text-black" : "bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30"
              )}>
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
```

---

### 3. Native 9:16 Portrait Video Panel (`src/components/media/PortraitMediaPanel.tsx`)

```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PortraitMediaPanelProps {
  videoUrl: string;
  posterUrl: string;
  badgeLabel: string;
  locationText?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  maxWidthClass?: string;
}

export const PortraitMediaPanel: React.FC<PortraitMediaPanelProps> = ({
  videoUrl,
  posterUrl,
  badgeLabel,
  locationText,
  objectPosition = "center",
  objectFit = "cover",
  maxWidthClass = "max-w-[340px] xs:max-w-[360px] sm:max-w-[380px]",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface group mx-auto",
        maxWidthClass
      )}
    >
      <Image
        src={posterUrl}
        alt={badgeLabel}
        fill
        sizes="(max-width: 768px) 90vw, 400px"
        className={cn(
          "w-full h-full transition-opacity duration-700 pointer-events-none z-0",
          objectFit === "cover" ? "object-cover" : "object-contain"
        )}
        style={{ objectPosition }}
      />

      {isVisible && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterUrl}
          className={cn(
            "absolute inset-0 w-full h-full filter brightness-95 transition-transform duration-700 group-hover:scale-[1.02] z-0",
            objectFit === "cover" ? "object-cover" : "object-contain"
          )}
          style={{ objectPosition }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-10" />

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
        <span className="text-[11px] font-bold px-3 py-1 bg-brand-yellow text-black rounded-md shadow-md">
          {badgeLabel}
        </span>
        {locationText && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {locationText}
          </span>
        )}
      </div>
    </div>
  );
};
```

---

## 4. Internationalization & Bilingual Architecture

### A. Translation Context Provider (`src/i18n/LanguageContext.tsx`)

```tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationDictionary, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const STORAGE_KEY = "app-language-choice";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("pt");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved === "en" || saved === "pt") setLanguageState(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    try { localStorage.setItem(STORAGE_KEY, language); } catch (e) {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = language === "pt" ? "pt-MZ" : "en";
    }
  }, [language, isMounted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
```

### B. Segmented Control Switcher (`src/components/ui/LanguageSwitcher.tsx`)

```tsx
"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface border border-border backdrop-blur-md text-xs font-display font-bold uppercase select-none min-h-[38px]", className)}>
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        aria-label="Mudar idioma para português"
        className={cn("px-2 py-1 rounded transition-colors cursor-pointer", language === "pt" ? "text-brand-yellow bg-black/40 font-bold" : "text-text-secondary hover:text-text-primary")}
      >
        PT
      </button>
      <span className="text-border-strong text-[11px]">|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch language to English"
        className={cn("px-2 py-1 rounded transition-colors cursor-pointer", language === "en" ? "text-brand-yellow bg-black/40 font-bold" : "text-text-secondary hover:text-text-primary")}
      >
        EN
      </button>
    </div>
  );
};
```

---

## 5. Performance & Media Pipeline Rules

### 1. FFmpeg Compression Commands
```bash
# 1. Transcode video with H.264 + faststart metadata flag (progressive streaming)
ffmpeg -y -i input.mp4 -vf "scale=720:1280" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart -an output-optimized.mp4

# 2. Extract representative WebP poster frame at 2.0s
ffmpeg -y -ss 00:00:02 -i input.mp4 -vframes 1 -vf "scale=720:1280" poster.webp
```

### 2. Media Preloading Rules
- **Hero Video:** `preload="metadata"` with responsive `<source media="(max-width: 767px)" src="mobile.mp4" />` and immediate poster image.
- **Below-the-Fold Videos:** `preload="none"` with `IntersectionObserver` auto-play/pause when in/out of viewport.
- **Interactive Reels Rail:** WebP poster images rendered initially; load video on demand during hover/interaction.

---

## 6. Page-Level Mobile Overflow Guard

Add this rule to root layout elements (`layout.tsx` `body` and `main`):

```tsx
<body className="bg-background text-text-primary antialiased selection:bg-brand-yellow selection:text-black overflow-x-hidden">
  <main className="min-h-screen overflow-x-hidden">
    {children}
  </main>
</body>
```

- **Page Horizontal Scroll:** **STRICTLY DISALLOWED**.
- **Internal Content Rails:** Horizontal scrolling (`overflow-x-auto`) permitted only inside dedicated carousel components (`MediaRail.tsx`).

---

## 7. Execution & QA Checklist

- [x] **0 Compilation & TypeScript Errors** (`npm run build`).
- [x] **Zero Page Overflow** on `320px`, `360px`, `375px`, `390px`, `412px`, `430px`, and `480px`.
- [x] **Touch Target Validation:** Minimum `44px` height on all buttons and inputs.
- [x] **Single Active Reel Enforcer:** Global event listener ensuring only one video plays at a time.
- [x] **Dynamic Google Maps Place Embed:** Official business place listing embedded without competing red generic pins.
- [x] **SEO Schema.org:** `ExerciseGym` JSON-LD definition synced with location coordinates.
- [x] **Bilingual i18n:** Immediate in-place translation switching (`PT` default, `EN` secondary) with `localStorage` persistence.
