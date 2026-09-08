"use client";

import React, { useState } from "react";
import { PortraitMediaPanel } from "./PortraitMediaPanel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface VideoRailItem {
  id: string;
  videoUrl: string;
  badgeLabel: string;
  locationText?: string;
}

const RAIL_VIDEOS: VideoRailItem[] = [
  {
    id: "star-abencoado-1",
    videoUrl: "/videos/star_abencoado_cumbe-colaboracao-ir-fitness-gym-DbdzXdVq8k7.mp4",
    badgeLabel: "FOCO & MENTALIDADE",
    locationText: "Star Abençoado",
  },
  {
    id: "nuno-mourinho-1",
    videoUrl: "/videos/nuno_mourinho1-treino-gluteos-Dbb2EnGN_E1.mp4",
    badgeLabel: "TREINO DE FORÇA",
    locationText: "Nuno Mourinho",
  },
  {
    id: "guift-estudante",
    videoUrl: "/videos/guift.gym-promocao-pacote-estudante-DalH4goIwU1.mp4",
    badgeLabel: "PACOTE ESTUDANTE",
    locationText: "Guift Gym",
  },
  {
    id: "karate-tatami",
    videoUrl: "/videos/irkarateacademy-evento-tatami-friendship-1-Dbk_8f7twuK.mp4",
    badgeLabel: "TATAMI FRIENDSHIP",
    locationText: "IR Karate KSI",
  },
  {
    id: "shop-12-anos",
    videoUrl: "/videos/ir_fitness_shop-comemoracao-aniversario-12-anos-Dc1GKTjD63G.mp4",
    badgeLabel: "12 ANOS DE HISTÓRIA",
    locationText: "IR Nutrition",
  },
  {
    id: "proof-finga",
    videoUrl: "/videos/proof_finga_elitepro-motivacao-disciplina-inverno-DbnhygSN76o.mp4",
    badgeLabel: "DISCIPLINA DE FERRO",
    locationText: "Proof Finga Elite",
  },
];

export const MediaRail: React.FC = () => {
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const railRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!railRef.current) return;
    const distance = 320;
    railRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const handlePlayStateChange = (id: string, isPlaying: boolean) => {
    if (isPlaying) {
      setActivePlayingId(id);
    } else if (activePlayingId === id) {
      setActivePlayingId(null);
    }
  };

  return (
    <div className="relative w-full group">
      {/* Scroll Navigation Controls */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-brand-red transition-all cursor-pointer hidden md:flex items-center justify-center min-h-[44px] min-w-[44px]"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-brand-red transition-all cursor-pointer hidden md:flex items-center justify-center min-h-[44px] min-w-[44px]"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Horizontal Rail Container */}
      <div
        ref={railRef}
        className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-4 px-4 sm:px-8 snap-x snap-mandatory scroll-smooth mx-auto justify-start lg:justify-center max-w-7xl"
      >
        {RAIL_VIDEOS.map((item) => {
          const isThisPlaying = activePlayingId === item.id;
          return (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[260px] xs:w-[280px] sm:w-[320px] transition-transform duration-300 hover:scale-[1.01]"
            >
              <PortraitMediaPanel
                videoUrl={item.videoUrl}
                badgeLabel={item.badgeLabel}
                locationText={item.locationText}
                maxWidthClass="w-full"
                aspectRatioClass="aspect-[9/16]"
                autoPlayOnIntersect={false}
                isExternalControlPlaying={isThisPlaying}
                onPlayStateChange={(playing) => handlePlayStateChange(item.id, playing)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
