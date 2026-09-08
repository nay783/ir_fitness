"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { PortraitMediaPanel } from "@/components/media/PortraitMediaPanel";
import { ShieldCheck, Truck, Award, ShoppingBag, MessageSquare, MapPin, Sparkles, Tv, ChefHat, UserCheck, Radio, Phone } from "lucide-react";

const SHOP_WHATSAPP_BASE = "https://wa.me/258849675563?text=";

export const SupplementsSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("produtos");
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

  const tabOptions = [
    { id: "produtos", label: language === "PT" ? "Produtos" : "Products", badge: "LOJA" },
    { id: "receitas", label: language === "PT" ? "Receitas & Dicas" : "Recipes & Tips" },
    { id: "atletas", label: language === "PT" ? "Atletas & Recebidos" : "Athletes & Unboxing" },
    { id: "podcast", label: "IR Podcast", badge: "EPISÓDIOS" },
  ];

  const handlePlayStateChange = (id: string, isPlaying: boolean) => {
    if (isPlaying) {
      setActivePlayingId(id);
    } else if (activePlayingId === id) {
      setActivePlayingId(null);
    }
  };

  const productCards = [
    {
      id: "prod-linha-oficial",
      videoUrl: "/videos/ir_fitness_shop-promocao-lancamento-suplementos-DOijVkIiCyC.mp4",
      title: language === "PT" ? "Linha Oficial IR Fitness Nutrition" : "Official IR Fitness Nutrition Line",
      badge: language === "PT" ? "Lançamento Oficial" : "Official Release",
      whatsappMsg: encodeURIComponent("Olá, gostaria de consultar o catálogo completo de suplementos da IR Fitness Shop."),
      ctaLabel: language === "PT" ? "Pedir Catálogo Completo" : "Request Full Catalog",
      description: language === "PT" ? "Qualidade premium formulada para o desempenho de atletas em Maputo." : "Premium quality formulated for athlete performance in Maputo.",
    },
    {
      id: "prod-whey-baunilha",
      videoUrl: "/videos/ir_fitness_shop-promocao-whey-protein-Dcik-LIj2ex.mp4",
      title: "Whey Protein Baunilha IR",
      badge: "20g Proteína / Dose",
      whatsappMsg: encodeURIComponent("Olá, gostaria de encomendar o Whey Protein Baunilha IR."),
      ctaLabel: language === "PT" ? "Pedir Whey Protein Baunilha" : "Order Vanilla Whey Protein",
      description: language === "PT" ? "Alta concentração proteica, excelente digestibilidade e sabor incomparável." : "High protein concentration, great digestibility, and delicious vanilla taste.",
    },
    {
      id: "prod-stack-combo",
      videoUrl: "/videos/ir_fitness_shop-promocao-whey-protein-creatina-DcLZw4gDJOY.mp4",
      title: "Stack Whey + Creatina IR",
      badge: language === "PT" ? "Força & Recuperação" : "Strength & Recovery",
      whatsappMsg: encodeURIComponent("Olá, gostaria de pedir o Combo Whey Protein + Creatina IR."),
      ctaLabel: language === "PT" ? "Pedir Combo Whey + Creatina" : "Order Whey + Creatine Combo",
      description: language === "PT" ? "Combinação imbatível para ganho de massa magra, força explosiva e recuperação rápida." : "Unbeatable combo for lean muscle gains, explosive power, and fast recovery.",
    },
    {
      id: "prod-12-anos",
      videoUrl: "/videos/ir_fitness_shop-comemoracao-aniversario-12-anos-Dc1GKTjD63G.mp4",
      title: language === "PT" ? "12 Anos de Confiança" : "12 Years of Trust",
      badge: "Desde 2014",
      whatsappMsg: encodeURIComponent("Olá, gostaria de falar com um especialista sobre recomendação de suplementos."),
      ctaLabel: language === "PT" ? "Falar com Especialista" : "Talk to a Specialist",
      description: language === "PT" ? "A 1ª loja de suplementos com marca própria em Moçambique desde 2014." : "The 1st proprietary supplement shop in Mozambique since 2014.",
    },
  ];

  const recipesCards = [
    {
      id: "recipe-batido-massa",
      videoUrl: "/videos/guift.gym-dicas-batido-proteico-ganho-massa-Dcy0Aezu-0l.mp4",
      title: language === "PT" ? "Batido de Massa Muscular" : "Muscle Gain Protein Shake",
      badge: "Receita Fit",
      whatsappMsg: encodeURIComponent("Olá, gostaria de dicas e recomendação de pré-treino/pos-treino para hipertrofia."),
      ctaLabel: language === "PT" ? "Pedir Ingredientes via WhatsApp" : "Order Ingredients on WhatsApp",
      description: language === "PT" ? "Aprenda a preparar um batido anabólico hipercalórico com Whey IR." : "Learn how to make a high-protein anabolic shake using IR Whey.",
    },
    {
      id: "recipe-snack-proteico",
      videoUrl: "/videos/ir_fitness_shop-dicas-snack-proteico-DcyBUo5BIiN.mp4",
      title: language === "PT" ? "Snack Proteico Sem Culpa" : "Guilt-Free Protein Snack",
      badge: "Dica Rápida",
      whatsappMsg: encodeURIComponent("Olá, gostaria de encomendar os suplementos para receitas proteicas."),
      ctaLabel: language === "PT" ? "Pedir Proteína para Receitas" : "Order Protein for Recipes",
      description: language === "PT" ? "Receita prática e saudável para manter a dieta sem abdicar do sabor." : "Quick, healthy recipe to stay on track with your nutrition goals.",
    },
  ];

  const athletesCards = [
    {
      id: "athlete-denise",
      videoUrl: "/videos/denise.barata-colaboracao-recebido-ir-fitness-shop-Dc5gdiWtf56.mp4",
      title: "Denise Barata — Atleta & Preparação",
      badge: "Embaixadora IR",
      whatsappMsg: encodeURIComponent("Olá, gostaria de saber os suplementos utilizados pelos atletas da IR Fitness."),
      ctaLabel: language === "PT" ? "Ver Suplementos da Atleta" : "View Athlete Supplements",
      description: language === "PT" ? "Rotina de suplementação e preparação física de alto rendimento." : "High-performance supplementation routine and physical prep.",
    },
    {
      id: "athlete-guift-unboxing",
      videoUrl: "/videos/guift.gym-colaboracao-recebidos-ir-fitness-DcrGkNzyhE9.mp4",
      title: "Unboxing Kit IR Fitness",
      badge: "Recebidos",
      whatsappMsg: encodeURIComponent("Olá, gostaria de encomendar o Kit Completo IR Fitness Nutrition."),
      ctaLabel: language === "PT" ? "Pedir Kit IR Fitness" : "Order IR Fitness Kit",
      description: language === "PT" ? "Abertura oficial do kit de suplementação de alto impacto." : "Unboxing of the high-impact IR supplementation stack.",
    },
    {
      id: "athlete-cardio-strategy",
      videoUrl: "/videos/ir_fitness_shop-colaboracao-cardio-30-minutos-Dc3DYx-EWS0.mp4",
      title: language === "PT" ? "Estratégia de Cardio & Performance" : "Cardio & Performance Strategy",
      badge: "Dica de Treino",
      whatsappMsg: encodeURIComponent("Olá, gostaria de orientação sobre termogénicos e cardio."),
      ctaLabel: language === "PT" ? "Consultar Termogénicos" : "Consult Fat Burners",
      description: language === "PT" ? "Como otimizar a queima de gordura mantendo a massa magra." : "How to optimize fat loss while maintaining lean muscle mass.",
    },
  ];

  const podcastCards = [
    {
      id: "pod-denise-fisiculturismo",
      videoUrl: "/videos/ir_fitness_shop-podcast-denise-barata-fisiculturismo-Dci-dfwlKpI.mp4",
      title: language === "PT" ? "Episódio Fisiculturismo & Evolução" : "Bodybuilding & Evolution Episode",
      badge: "IR Podcast",
      whatsappMsg: encodeURIComponent("Olá, vi o podcast e gostaria de tirar dúvidas sobre nutrição desportiva."),
      ctaLabel: language === "PT" ? "Falar com a Equipa do Podcast" : "Talk with Podcast Team",
      description: language === "PT" ? "Conversa profunda sobre mentalidade, treinos intensos e nutrição." : "Deep dive conversation into mindset, intense workouts, and nutrition.",
    },
    {
      id: "pod-musculacao-ciclismo",
      videoUrl: "/videos/irpodcastmz-clips-musculacao-ou-ciclismo-DcA-VJVD8hB.mp4",
      title: language === "PT" ? "Musculação vs Ciclismo" : "Strength Training vs Cycling",
      badge: "Alta Performance",
      whatsappMsg: encodeURIComponent("Olá, gostaria de recomendação de suplementação para desportos de endurance e força."),
      ctaLabel: language === "PT" ? "Suplementos p/ Endurance" : "Endurance Supplements",
      description: language === "PT" ? "Comparativo de gasto calórico, recuperação e suplementação adaptada." : "Comparing energy expenditure, recovery, and adapted nutrition.",
    },
    {
      id: "pod-disciplina-neuro",
      videoUrl: "/videos/ir_fitness_shop-motivacao-neurocirurgia-aprendizagem-DbtGYH4oGPK.mp4",
      title: language === "PT" ? "Disciplina & Aprendizagem Contínua" : "Discipline & Continuous Learning",
      badge: "Mentalidade de Elite",
      whatsappMsg: encodeURIComponent("Olá, gostaria de saber mais sobre a linha de foco e pré-treinos da IR Fitness."),
      ctaLabel: language === "PT" ? "Consultar Pré-Treinos" : "Explore Pre-Workouts",
      description: language === "PT" ? "Construção de resiliência mental e foco inabalável." : "Building mental resilience and unwavering focus.",
    },
  ];

  return (
    <section id="suplementos" className="py-16 md:py-24 bg-background-elevated border-t border-border relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-brand-red/10 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-muted text-brand-red border border-brand-red/30">
            <ShoppingBag className="w-4 h-4 text-brand-red" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              IR FITNESS NUTRITION SHOP
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-primary">
            {language === "PT" ? "SUPLEMENTAÇÃO DE ELITE EM MAPUTO" : "PREMIUM SPORTS NUTRITION IN MAPUTO"}
          </h2>

          <p className="text-sm sm:text-base text-text-secondary">
            {language === "PT"
              ? "Assista aos vídeos demonstrativos, descubra receitas e encomende diretamente com os nossos especialistas."
              : "Watch video showcases, explore recipes, and order directly with our nutrition specialists."}
          </p>

          {/* Brand Credibility Badges Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono font-semibold text-text-primary">
              <Award className="w-4 h-4 text-brand-red" />
              <span>12 Anos a Transformar Resultados</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono font-semibold text-text-primary">
              <ShieldCheck className="w-4 h-4 text-brand-red" />
              <span>1ª Marca Moçambicana</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono font-semibold text-text-primary">
              <Truck className="w-4 h-4 text-brand-red" />
              <span>Entregas Grátis em Maputo</span>
            </div>
          </div>
        </div>

        {/* Tab Filter Switcher */}
        <div className="flex justify-center">
          <Tabs tabs={tabOptions} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        {/* Tab 1: Produtos */}
        {activeTab === "produtos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-start lg:justify-center max-w-7xl animate-fadeIn">
            {productCards.map((card) => {
              const isThisPlaying = activePlayingId === card.id;
              return (
                <div key={card.id} className="bg-surface rounded-3xl p-4 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all space-y-4">
                  <PortraitMediaPanel
                    videoUrl={card.videoUrl}
                    posterUrl="/images/logo.jpg"
                    badgeLabel={card.badge}
                    locationText="IR NUTRITION"
                    maxWidthClass="w-full"
                    aspectRatioClass="aspect-[9/16]"
                    autoPlayOnIntersect={false}
                    isExternalControlPlaying={isThisPlaying}
                    onPlayStateChange={(playing) => handlePlayStateChange(card.id, playing)}
                  />
                  <div className="space-y-2 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase text-text-primary leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button
                        href={`${SHOP_WHATSAPP_BASE}${card.whatsappMsg}`}
                        target="_blank"
                        size="sm"
                        variant="primary"
                        className="w-full"
                      >
                        <MessageSquare className="w-4 h-4 mr-1.5" />
                        {card.ctaLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Receitas & Dicas */}
        {activeTab === "receitas" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-start lg:justify-center max-w-7xl animate-fadeIn">
            {recipesCards.map((card) => {
              const isThisPlaying = activePlayingId === card.id;
              return (
                <div key={card.id} className="bg-surface rounded-3xl p-4 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all space-y-4">
                  <PortraitMediaPanel
                    videoUrl={card.videoUrl}
                    posterUrl="/images/logo.jpg"
                    badgeLabel={card.badge}
                    locationText="RECEITAS FIT"
                    maxWidthClass="w-full"
                    aspectRatioClass="aspect-[9/16]"
                    autoPlayOnIntersect={false}
                    isExternalControlPlaying={isThisPlaying}
                    onPlayStateChange={(playing) => handlePlayStateChange(card.id, playing)}
                  />
                  <div className="space-y-2 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase text-text-primary leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button
                        href={`${SHOP_WHATSAPP_BASE}${card.whatsappMsg}`}
                        target="_blank"
                        size="sm"
                        variant="outline"
                        className="w-full"
                      >
                        <MessageSquare className="w-4 h-4 mr-1.5" />
                        {card.ctaLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Atletas & Recebidos */}
        {activeTab === "atletas" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-start lg:justify-center max-w-7xl animate-fadeIn">
            {athletesCards.map((card) => {
              const isThisPlaying = activePlayingId === card.id;
              return (
                <div key={card.id} className="bg-surface rounded-3xl p-4 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all space-y-4">
                  <PortraitMediaPanel
                    videoUrl={card.videoUrl}
                    posterUrl="/images/logo.jpg"
                    badgeLabel={card.badge}
                    locationText="ATLETAS IR"
                    maxWidthClass="w-full"
                    aspectRatioClass="aspect-[9/16]"
                    autoPlayOnIntersect={false}
                    isExternalControlPlaying={isThisPlaying}
                    onPlayStateChange={(playing) => handlePlayStateChange(card.id, playing)}
                  />
                  <div className="space-y-2 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase text-text-primary leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button
                        href={`${SHOP_WHATSAPP_BASE}${card.whatsappMsg}`}
                        target="_blank"
                        size="sm"
                        variant="outline"
                        className="w-full"
                      >
                        <MessageSquare className="w-4 h-4 mr-1.5" />
                        {card.ctaLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: IR Podcast */}
        {activeTab === "podcast" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-start lg:justify-center max-w-7xl animate-fadeIn">
            {podcastCards.map((card) => {
              const isThisPlaying = activePlayingId === card.id;
              return (
                <div key={card.id} className="bg-surface rounded-3xl p-4 border border-border flex flex-col justify-between hover:border-brand-red/40 transition-all space-y-4">
                  <PortraitMediaPanel
                    videoUrl={card.videoUrl}
                    posterUrl="/images/logo.jpg"
                    badgeLabel={card.badge}
                    locationText="IR PODCAST"
                    maxWidthClass="w-full"
                    aspectRatioClass="aspect-[9/16]"
                    autoPlayOnIntersect={false}
                    isExternalControlPlaying={isThisPlaying}
                    onPlayStateChange={(playing) => handlePlayStateChange(card.id, playing)}
                  />
                  <div className="space-y-2 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase text-text-primary leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button
                        href={`${SHOP_WHATSAPP_BASE}${card.whatsappMsg}`}
                        target="_blank"
                        size="sm"
                        variant="outline"
                        className="w-full"
                      >
                        <MessageSquare className="w-4 h-4 mr-1.5" />
                        {card.ctaLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner: Free Personalized Guidance & Counter Pickup */}
        <div className="bg-surface border border-brand-red/40 rounded-3xl p-6 sm:p-8 shadow-glow-red/20 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-muted text-brand-red text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Aconselhamento Personalizado Gratuito</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-text-primary">
                {language === "PT" ? "DÚVIDAS SOBRE O TEU STACK DE SUPLEMENTOS?" : "QUESTIONS ABOUT YOUR SUPPLEMENT STACK?"}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary max-w-2xl">
                {language === "PT"
                  ? "Fale diretamente com os nossos especialistas via WhatsApp ou visite uma das nossas 3 lojas físicas em Maputo."
                  : "Talk directly with our nutrition team on WhatsApp or visit one of our 3 retail stores in Maputo."}
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <Button
                href={`${SHOP_WHATSAPP_BASE}${encodeURIComponent("Olá, gostaria de aconselhamento personalizado gratuito sobre a suplementação ideal para os meus objetivos.")}`}
                target="_blank"
                size="lg"
                variant="primary"
                className="w-full md:w-auto"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {language === "PT" ? "Falar com Nutricionista / Loja" : "Consult Shop Specialist"}
              </Button>
            </div>
          </div>
        </div>

        {/* 3-Column Official Retail Stores Grid */}
        <div className="space-y-6 pt-4 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-muted text-brand-red border border-brand-red/30 text-xs font-mono font-bold uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>{language === "PT" ? "Lojas Físicas IR Fitness Shop" : "IR Fitness Shop Physical Stores"}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-text-primary">
              {language === "PT" ? "NOSSAS LOJAS EM MAPUTO" : "OUR STORES IN MAPUTO"}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary max-w-xl">
              {language === "PT"
                ? "Visite as nossas 3 lojas oficiais em Maputo para levantamento imediato ou aconselhamento presencial."
                : "Visit our 3 official retail locations in Maputo for instant pickup or in-person guidance."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: LOJA POLANA */}
            <div className="bg-surface border border-border p-6 rounded-2xl hover:border-brand-red/40 transition-all flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold uppercase text-text-primary group-hover:text-brand-red transition-colors">
                    LOJA POLANA
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-brand-red-muted text-brand-red border border-brand-red/20">
                    Maputo
                  </span>
                </div>
                <div className="space-y-2.5 text-xs text-text-secondary">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>Av. Eduardo Mondlane, 324 — Maputo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="font-mono font-bold text-text-primary">+258 84 650 7470</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-text-muted">
                    <Truck className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>Entregas Grátis em Maputo</span>
                  </div>
                </div>
              </div>
              <Button
                href="https://wa.me/258846507470?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20os%20suplementos%20na%20Loja%20Polana."
                target="_blank"
                size="sm"
                variant="primary"
                className="w-full justify-center min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {language === "PT" ? "Falar c/ Loja Polana" : "Contact Polana Branch"}
              </Button>
            </div>

            {/* Card 2: LOJA COOP */}
            <div className="bg-surface border border-border p-6 rounded-2xl hover:border-brand-red/40 transition-all flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold uppercase text-text-primary group-hover:text-brand-red transition-colors">
                    LOJA COOP
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-brand-red-muted text-brand-red border border-brand-red/20">
                    Maputo
                  </span>
                </div>
                <div className="space-y-2.5 text-xs text-text-secondary">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>Av. Vladimir Lenine, 2177 — Maputo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="font-mono font-bold text-text-primary">+258 82 739 5099</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-text-muted">
                    <Truck className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>Entregas Grátis em Maputo</span>
                  </div>
                </div>
              </div>
              <Button
                href="https://wa.me/258827395099?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20os%20suplementos%20na%20Loja%20Coop."
                target="_blank"
                size="sm"
                variant="primary"
                className="w-full justify-center min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {language === "PT" ? "Falar c/ Loja Coop" : "Contact Coop Branch"}
              </Button>
            </div>

            {/* Card 3: LOJA GYM (Balcão do Ginásio) */}
            <div className="bg-surface border border-border p-6 rounded-2xl hover:border-brand-red/40 transition-all flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold uppercase text-text-primary group-hover:text-brand-red transition-colors">
                    LOJA GYM
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-brand-red-muted text-brand-red border border-brand-red/20">
                    Balcão Ginásio
                  </span>
                </div>
                <div className="space-y-2.5 text-xs text-text-secondary">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>Av. Josina Machel, 153 — Maputo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="font-mono font-bold text-text-primary">+258 84 967 5563</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-text-muted">
                    <Truck className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>Entregas Grátis em Maputo</span>
                  </div>
                </div>
              </div>
              <Button
                href="https://wa.me/258849675563?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20os%20suplementos%20no%20balc%C3%A3o%20do%20Gin%C3%A1sio."
                target="_blank"
                size="sm"
                variant="primary"
                className="w-full justify-center min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {language === "PT" ? "Falar c/ Balcão Gym" : "Contact Gym Counter"}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
