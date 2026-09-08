"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX, Play } from "lucide-react";

interface PortraitMediaPanelProps {
  videoUrl: string;
  posterUrl?: string;
  badgeLabel: string;
  locationText?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  maxWidthClass?: string;
  aspectRatioClass?: string;
  autoPlayOnIntersect?: boolean;
  onPlayStateChange?: (isPlaying: boolean) => void;
  isExternalControlPlaying?: boolean;
}

export const PortraitMediaPanel: React.FC<PortraitMediaPanelProps> = ({
  videoUrl,
  posterUrl,
  badgeLabel,
  locationText,
  objectPosition = "center",
  objectFit = "cover",
  maxWidthClass = "max-w-[340px] xs:max-w-[360px] sm:max-w-[380px]",
  aspectRatioClass = "aspect-[9/16]",
  autoPlayOnIntersect = true,
  onPlayStateChange,
  isExternalControlPlaying,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Deriving the exact extracted video frame poster thumbnail
  const effectivePosterUrl = React.useMemo(() => {
    if (posterUrl && posterUrl !== "/images/logo.jpg") {
      return posterUrl;
    }
    if (videoUrl.startsWith("/videos/")) {
      const filename = videoUrl.replace("/videos/", "").replace(/\.mp4$/i, "");
      return `/posters/${filename}.jpg`;
    }
    return posterUrl || "/images/logo.jpg";
  }, [posterUrl, videoUrl]);

  useEffect(() => {
    if (!autoPlayOnIntersect) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          if (videoRef.current) {
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
                onPlayStateChange?.(true);
              })
              .catch(() => {
                setIsPlaying(false);
              });
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
          setIsPlaying(false);
          onPlayStateChange?.(false);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [autoPlayOnIntersect, onPlayStateChange]);

  useEffect(() => {
    if (isExternalControlPlaying !== undefined && videoRef.current) {
      if (isExternalControlPlaying) {
        setHasIntersected(true);
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isExternalControlPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasIntersected(true);
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      onPlayStateChange?.(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          onPlayStateChange?.(true);
        })
        .catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface group mx-auto select-none",
        aspectRatioClass,
        maxWidthClass
      )}
    >
      {/* Extracted Video Frame Poster Image (Always rendered first for instant UI response) */}
      <Image
        src={effectivePosterUrl}
        alt={badgeLabel}
        fill
        sizes="(max-width: 768px) 90vw, 400px"
        className={cn(
          "w-full h-full transition-opacity duration-700 pointer-events-none z-0 filter brightness-95",
          objectFit === "cover" ? "object-cover" : "object-contain",
          isPlaying ? "opacity-0" : "opacity-100"
        )}
        style={{ objectPosition }}
      />

      {/* Video Player — Strictly preload="none", attached on intersection */}
      <video
        ref={videoRef}
        muted={isMuted}
        loop
        playsInline
        preload="none"
        poster={effectivePosterUrl}
        className={cn(
          "absolute inset-0 w-full h-full filter brightness-95 transition-transform duration-700 group-hover:scale-[1.02] z-0",
          objectFit === "cover" ? "object-cover" : "object-contain"
        )}
        style={{ objectPosition }}
      >
        {hasIntersected && <source src={videoUrl} type="video/mp4" />}
      </video>

      {/* Subtle Bottom & Top Overlays */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-10" />

      {/* Controls Bar Overlay */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-brand-red transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
        {!isPlaying && (
          <div className="p-4 rounded-full bg-brand-red/90 text-white shadow-glow-red border border-white/30 transform transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          </div>
        )}
      </div>

      {/* Bottom Information & Badges */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        <span className="text-[11px] font-display uppercase tracking-wider font-bold px-3 py-1 bg-brand-red text-white rounded-md shadow-md border border-brand-red-hover">
          {badgeLabel}
        </span>
        {locationText && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {locationText}
          </span>
        )}
      </div>
    </div>
  );
};
