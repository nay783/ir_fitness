"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
  badge?: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, className }) => {
  return (
    <div
      role="tablist"
      className={cn(
        "grid grid-cols-2 sm:grid-cols-4 w-full sm:w-auto sm:inline-flex items-center p-1.5 rounded-2xl bg-surface border border-border gap-1.5 shadow-xl",
        className
      )}
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
              "flex items-center justify-center gap-2 min-w-0 px-3 sm:px-5 py-3 rounded-xl font-display uppercase text-xs sm:text-sm md:text-base font-bold transition-all duration-300 min-h-[44px] cursor-pointer select-none",
              isActive
                ? "bg-brand-red text-white shadow-glow-red"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-hover/80"
            )}
          >
            <span className="truncate">{tab.label}</span>
            {tab.badge && (
              <span
                className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full font-mono hidden xs:inline-block",
                  isActive
                    ? "bg-black/30 text-white border border-white/20"
                    : "bg-brand-red-muted text-brand-red border border-brand-red/30"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
