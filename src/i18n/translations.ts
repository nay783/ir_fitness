export type Language = "PT" | "EN";

export interface TranslationDictionary {
  nav: {
    home: string;
    pillars: string;
    pricing: string;
    nutrition: string;
    events: string;
    students: string;
    contact: string;
    ctaWhatsapp: string;
  };
  hero: {
    supertitle: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badgeHero: string;
    statsYears: string;
    statsYearsLabel: string;
    statsCommunity: string;
    statsCommunityLabel: string;
    statsLocation: string;
    statsLocationLabel: string;
  };
  pillars: {
    title: string;
    subtitle: string;
    tabGym: string;
    tabNutrition: string;
    tabEvents: string;
    gym: {
      tag: string;
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      cta: string;
    };
    nutrition: {
      tag: string;
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      cta: string;
    };
    events: {
      tag: string;
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      cta: string;
    };
  };
  pricing: {
    tag: string;
    title: string;
    subtitle: string;
    tabFullDay: string;
    tabFlexible: string;
    tabPersonal: string;
    fullDay: {
      monthlyTitle: string;
      monthlyPrice: string;
      monthlyPeriod: string;
      monthlyDesc: string;
      semestralTitle: string;
      semestralPrice: string;
      semestralPeriod: string;
      semestralDesc: string;
      semestralBadge: string;
      annualTitle: string;
      annualPrice: string;
      annualPeriod: string;
      annualDesc: string;
      annualBadge: string;
    };
    flexible: {
      dailyTitle: string;
      dailyPrice: string;
      dailyDesc: string;
      weeklyTitle: string;
      weeklyPrice: string;
      weeklyDesc: string;
      ecoTitle: string;
      ecoPrice: string;
      ecoDesc: string;
      familyTitle: string;
      familyPrice: string;
      familyDesc: string;
    };
    personal: {
      p1xTitle: string;
      p1xPrice: string;
      p1xDesc: string;
      p3xTitle: string;
      p3xPrice: string;
      p3xDesc: string;
      p5xTitle: string;
      p5xPrice: string;
      p5xDesc: string;
      p5xBadge: string;
    };
    ctaSelect: string;
  };
  eventShowcase: {
    tag: string;
    title: string;
    description: string;
    ticketNonMember: string;
    ticketNonMemberVal: string;
    ticketMember: string;
    ticketMemberVal: string;
    highlightsTitle: string;
    h1: string;
    h2: string;
    h3: string;
    cta: string;
  };
  studentPass: {
    tag: string;
    title: string;
    description: string;
    badge: string;
    perk1: string;
    perk2: string;
    perk3: string;
    cta: string;
  };
  communityRail: {
    tag: string;
    title: string;
    subtitle: string;
  };
  hours: {
    title: string;
    monFriLabel: string;
    monFriTime: string;
    satLabel: string;
    satTime: string;
    sunLabel: string;
    sunTime: string;
    holidayLabel: string;
    holidayTime: string;
  };
  footer: {
    tagline: string;
    hoursBadge: string;
    quickLinks: string;
    contactsTitle: string;
    addressTitle: string;
    addressVal: string;
    addressStreet: string;
    phoneMain: string;
    phoneSecondary: string;
    instagram: string;
    rights: string;
    guardrailNote: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  PT: {
    nav: {
      home: "Início",
      pillars: "Pilares",
      pricing: "Planos & Tarifas",
      nutrition: "Suplementação",
      events: "Eventos",
      students: "Estudantes",
      contact: "Contacto",
      ctaWhatsapp: "Contactar WhatsApp",
    },
    hero: {
      supertitle: "ESPECIALISTAS EM ALTA PERFORMANCE",
      headline: "ONDE CADA TREINO É UMA VITÓRIA.",
      subheadline:
        "Não é apenas onde treinas — é como te sentes quando treinas. Equipamento profissional, ambiente eletrizante, comunidade focada e suplementação de elite em Maputo.",
      ctaPrimary: "Agendar Treino Experimental",
      ctaSecondary: "Conhecer a Suplementação",
      badgeHero: "ALTA PERFORMANCE MAPUTO",
      statsYears: "12 Anos",
      statsYearsLabel: "História & Tradição",
      statsCommunity: "5.4K+",
      statsCommunityLabel: "Atletas & Comunidade",
      statsLocation: "Maputo",
      statsLocationLabel: "Moçambique",
    },
    pillars: {
      title: "PILARES DO ECOSSISTEMA IR",
      subtitle: "Uma infraestrutura integral desenhada para máxima performance, disciplina e estilo de vida.",
      tabGym: "Treino de Rendimento",
      tabNutrition: "IR Nutrition (12 Anos)",
      tabEvents: "Music & Gym Experience",
      gym: {
        tag: "PILAR 01 — GINÁSIO DE ALTO RENDIMENTO",
        title: "Treino de Força & Biomecânica Precisa",
        description:
          "Supere os seus limites com maquinário de ponta, biomecânica precisa e um ambiente desenhado para quem leva a evolução a sério.",
        feature1: "Equipamentos profissionais de carga guiada e pesos livres",
        feature2: "Zonas dedicadas de hipertrofia, força bruta e condicionamento",
        feature3: "Ambiente motivacional de alta intensidade com acompanhamento",
        cta: "Consultar Pacotes de Treino no WhatsApp",
      },
      nutrition: {
        tag: "PILAR 02 — IR FITNESS NUTRITION SHOP",
        title: "12 Anos de História & Nutrição de Elite",
        description:
          "Potencialize a recuperação com Whey Protein Baunilha e Creatina de marca própria, além das marcas internacionais líderes no mercado.",
        feature1: "Whey Protein Baunilha IR & Creatina Micronizada de marca própria",
        feature2: "12 anos de reputação inabalável em Maputo (desde 2014)",
        feature3: "Aconselhamento especializado em suplementação e performance",
        cta: "Pedir Suplementos via WhatsApp",
      },
      events: {
        tag: "PILAR 03 — MUSIC & GYM EXPERIENCE",
        title: "Treino & Música ao Vivo",
        description:
          "Onde a batida encontra o esforço físico. Treinos coletivos com DJs ao vivo, degustação de suplementos e convites para amigos.",
        feature1: "Sets ao vivo com os melhores DJs de Maputo durante o treino",
        feature2: "Degustação de pré-treinos e bebidas energéticas",
        feature3: "Passe VIP para trazer 1 convidado grátis (exclusivo sócios)",
        cta: "Garantir Ingresso para o Próximo Evento",
      },
    },
    pricing: {
      tag: "MEMBRESIA & PLANOS OFICIAIS",
      title: "PLANOS DESENHADOS PARA A TUA EVOLUÇÃO",
      subtitle: "Escolha a modalidade que melhor se adapta à sua rotina e objetivos de treino.",
      tabFullDay: "Full Day (Passes Principais)",
      tabFlexible: "Planos Flexíveis",
      tabPersonal: "Personal Trainer",
      fullDay: {
        monthlyTitle: "Passe Mensal Full Day",
        monthlyPrice: "2.950 MT",
        monthlyPeriod: "/mês",
        monthlyDesc: "Acesso ilimitado ao ginásio, equipamentos de musculação e zona de cardio.",
        semestralTitle: "Passe Semestral Full Day",
        semestralPrice: "2.360 MT",
        semestralPeriod: "/mês",
        semestralDesc: "Cobrança semestral com 20% de economia garantida para atletas consistentes.",
        semestralBadge: "MAIS POPULAR",
        annualTitle: "Passe Anual Full Day",
        annualPrice: "2.065 MT",
        annualPeriod: "/mês",
        annualDesc: "O melhor valor por mês com compromisso anual de alta performance.",
        annualBadge: "MELHOR VALOR",
      },
      flexible: {
        dailyTitle: "Passe Diário (Avulso)",
        dailyPrice: "500 MT",
        dailyDesc: "Ideal para treinos pontuais, visitantes ou sessões experimentais.",
        weeklyTitle: "Passe Semanal",
        weeklyPrice: "1.500 MT",
        weeklyDesc: "7 dias seguidos de acesso livre para quem está de passagem ou férias.",
        ecoTitle: "Plano Económico (Off-Peak)",
        ecoPrice: "2.250 MT",
        ecoDesc: "Acesso exclusivo no horário das 09h00 às 16h00 de segunda a sexta.",
        familyTitle: "Plano Família",
        familyPrice: "2.750 MT",
        familyDesc: "Tarifa mensal preferencial por pessoa para membros do mesmo agregado familiar.",
      },
      personal: {
        p1xTitle: "Personal Training — 1x / semana",
        p1xPrice: "3.000 MT",
        p1xDesc: "4 sessões mensais com acompanhamento técnico individualizado.",
        p3xTitle: "Personal Training — 3x / semana",
        p3xPrice: "6.000 MT",
        p3xDesc: "12 sessões mensais com planeamento personalizado de treino e carga.",
        p5xTitle: "Personal Training — 5x / semana",
        p5xPrice: "8.000 MT",
        p5xDesc: "20 sessões mensais de alto rendimento com apoio nutricional e biomecânico.",
        p5xBadge: "MÁXIMO RENDIMENTO",
      },
      ctaSelect: "Aderir ao Plano via WhatsApp",
    },
    eventShowcase: {
      tag: "EVENTO EXCLUSIVO",
      title: "MUSIC & GYM EXPERIENCE VOL. 2",
      description:
        "O IR FITNESS GYM transforma o treino numa celebração coletiva. Com DJs convidados no comando da música, degustação de energéticos e pré-treinos, vive o pico da tua energia.",
      ticketNonMember: "Entrada Geral (Não Sócios)",
      ticketNonMemberVal: "500 MT",
      ticketMember: "Vantagem para Sócios",
      ticketMemberVal: "GRÁTIS + 1 Convidado",
      highlightsTitle: "O que te espera no evento:",
      h1: "DJs ao vivo no ginásio ao longo de toda a sessão",
      h2: "Estações de degustação de Whey & Pré-Treino IR Nutrition",
      h3: "Ambiente comunitário e sessão fotográfica de alta energia",
      cta: "Inscrever-me no Próximo Evento (500 MT / Grátis para Sócios)",
    },
    studentPass: {
      tag: "PACOTE ESTUDANTE",
      title: "CONDIÇÕES ESPECIAIS PARA ESTUDANTES",
      description:
        "Mantém o foco nos estudos e a disciplina no corpo. Apresenta o teu cartão de estudante e beneficia de tarifas e vantagens exclusivas no IR Fitness Gym.",
      badge: "PACOTE ACADÉMICO",
      perk1: "Desconto exclusivo no passe mensal mediante ID de estudante",
      perk2: "Acesso total à sala de musculação e zona de cardio",
      perk3: "Horários flexíveis adaptados à tua rotina universitária",
      cta: "Solicitar Pacote Estudante via WhatsApp",
    },
    communityRail: {
      tag: "ATLETAS & COMUNIDADE",
      title: "HISTÓRIAS DE SUPERAÇÃO NO GINÁSIO",
      subtitle:
        "Toca nos vídeos para sentir o ritmo do IR Fitness Gym. Treinos reais, atletas dedicados e a energia do nosso ginásio.",
    },
    hours: {
      title: "Horário de Funcionamento",
      monFriLabel: "Segunda a Sexta",
      monFriTime: "05h00 às 22h00",
      satLabel: "Sábado",
      satTime: "06h00 às 14h00",
      sunLabel: "Domingo",
      sunTime: "08h00 às 13h00",
      holidayLabel: "Feriados",
      holidayTime: "08h00 às 12h00",
    },
    footer: {
      tagline: "Especialistas em alta performance. Onde cada treino é uma vitória.",
      hoursBadge: "Seg-Sexta: 05h-22h | Sáb: 06h-14h | Dom: 08h-13h",
      quickLinks: "Navegação Rápida",
      contactsTitle: "Contactos Directos",
      addressTitle: "Endereço Oficial",
      addressVal: "Praceta Louis Trachaut 153, Bairro Central - Maputo",
      addressStreet: "Avenida Josina Machel, Praceta Louis Trachaut 153, Bairro Central - Maputo",
      phoneMain: "+258 84 687 9562 (Recepção & Informações)",
      phoneSecondary: "+258 84 967 5563 (Suporte & Suplementos)",
      instagram: "@ir.fitness.gym | @ir_fitness_shop",
      rights: "IR Fitness Gym. Todos os direitos reservados.",
      guardrailNote: "Informações e tarifários oficiais verificados.",
    },
  },
  EN: {
    nav: {
      home: "Home",
      pillars: "Pillars",
      pricing: "Membership Plans",
      nutrition: "Supplements",
      events: "Events",
      students: "Students",
      contact: "Contact",
      ctaWhatsapp: "Contact WhatsApp",
    },
    hero: {
      supertitle: "HIGH-PERFORMANCE SPECIALISTS",
      headline: "WHERE EVERY WORKOUT IS A VICTORY.",
      subheadline:
        "It's not just where you train — it's how you feel when you train. Elite equipment, electric atmosphere, focused community, and premium supplementation in Maputo.",
      ctaPrimary: "Book Free Trial Workout",
      ctaSecondary: "Explore Supplements",
      badgeHero: "HIGH PERFORMANCE MAPUTO",
      statsYears: "12 Years",
      statsYearsLabel: "History & Heritage",
      statsCommunity: "5.4K+",
      statsCommunityLabel: "Athletes & Community",
      statsLocation: "Maputo",
      statsLocationLabel: "Mozambique",
    },
    pillars: {
      title: "PILLARS OF THE IR ECOSYSTEM",
      subtitle: "A complete performance facility designed for maximum physical results, discipline, and athletic lifestyle.",
      tabGym: "High-Performance Gym",
      tabNutrition: "IR Nutrition (12 Yrs)",
      tabEvents: "Music & Gym Experience",
      gym: {
        tag: "PILLAR 01 — HIGH-PERFORMANCE GYM FLOOR",
        title: "Heavy Strength & Precise Biomechanics",
        description:
          "Shatter your plateaus with professional-grade strength machines, precise biomechanics, and a culture built for real physical evolution.",
        feature1: "Professional pin-select and plate-loaded resistance equipment",
        feature2: "Dedicated zones for muscle hypertrophy, raw power, and conditioning",
        feature3: "High-energy training atmosphere with expert guidance",
        cta: "Inquire Gym Memberships on WhatsApp",
      },
      nutrition: {
        tag: "PILLAR 02 — IR FITNESS NUTRITION SHOP",
        title: "12 Years of Trusted Sports Nutrition",
        description:
          "Accelerate recovery with our proprietary Vanilla Whey Protein and Micronized Creatine alongside top international nutrition brands.",
        feature1: "Proprietary IR Vanilla Whey Protein & Micronized Creatine",
        feature2: "12 years of operational excellence in Maputo (Est. 2014)",
        feature3: "Specialized sports nutrition advice and supplement guidance",
        cta: "Order Supplements via WhatsApp",
      },
      events: {
        tag: "PILLAR 03 — MUSIC & GYM EXPERIENCE",
        title: "Workout Meets Live Beats",
        description:
          "Where heavy lifting meets live DJ sets. Group sessions with resident sound artists, supplement tastings, and free guest passes.",
        feature1: "Live DJ sets by Maputo's top artists right on the gym floor",
        feature2: "Free pre-workout and protein sampling stations",
        feature3: "1 free guest pass per active member for every event",
        cta: "Reserve Pass for Next Event",
      },
    },
    pricing: {
      tag: "OFFICIAL MEMBERSHIPS & RATES",
      title: "MEMBERSHIP PLANS BUILT FOR RESULTS",
      subtitle: "Choose the plan that fits your training frequency, schedule, and athletic goals.",
      tabFullDay: "Full Day Plans",
      tabFlexible: "Flexible Passes",
      tabPersonal: "Personal Trainer",
      fullDay: {
        monthlyTitle: "Full Day Monthly Pass",
        monthlyPrice: "2,950 MT",
        monthlyPeriod: "/month",
        monthlyDesc: "Unlimited full-day access to gym floor, free weights, and cardio equipment.",
        semestralTitle: "Full Day Semestral Pass",
        semestralPrice: "2,360 MT",
        semestralPeriod: "/month",
        semestralDesc: "Billed semi-annually with guaranteed 20% savings for committed athletes.",
        semestralBadge: "MOST POPULAR",
        annualTitle: "Full Day Annual Pass",
        annualPrice: "2,065 MT",
        annualPeriod: "/month",
        annualDesc: "Our best monthly rate for dedicated athletes with an annual membership.",
        annualBadge: "BEST VALUE",
      },
      flexible: {
        dailyTitle: "Day Pass (Single Entry)",
        dailyPrice: "500 MT",
        dailyDesc: "Perfect for single drop-in workouts, visitors, or trial sessions.",
        weeklyTitle: "Weekly Pass",
        weeklyPrice: "1,500 MT",
        weeklyDesc: "7 consecutive days of full gym access for visitors or travelers.",
        ecoTitle: "Off-Peak Pass (09h-16h)",
        ecoPrice: "2,250 MT",
        ecoDesc: "Exclusive access between 09:00 and 16:00, Monday through Friday.",
        familyTitle: "Family Pass",
        familyPrice: "2,750 MT",
        familyDesc: "Discounted monthly rate per person for members of the same household.",
      },
      personal: {
        p1xTitle: "Personal Trainer — 1x / week",
        p1xPrice: "3,000 MT",
        p1xDesc: "4 monthly sessions with dedicated 1-on-1 coaching.",
        p3xTitle: "Personal Trainer — 3x / week",
        p3xPrice: "6,000 MT",
        p3xDesc: "12 monthly sessions with tailored workout programming and load progression.",
        p5xTitle: "Personal Training — 5x / week",
        p5xPrice: "8,000 MT",
        p5xDesc: "20 high-performance monthly sessions with biomechanical & recovery support.",
        p5xBadge: "MAX PERFORMANCE",
      },
      ctaSelect: "Join Plan via WhatsApp",
    },
    eventShowcase: {
      tag: "FEATURED EVENT",
      title: "MUSIC & GYM EXPERIENCE VOL. 2",
      description:
        "IR FITNESS GYM merges high-intensity lifting with community celebration. Live guest DJs, supplement samplings, and electric social energy on the gym floor.",
      ticketNonMember: "General Pass (Non-Members)",
      ticketNonMemberVal: "500 MT",
      ticketMember: "Active Member Perk",
      ticketMemberVal: "FREE + 1 Guest Pass",
      highlightsTitle: "What to expect at the event:",
      h1: "Live DJ sets directly on the gym floor throughout the session",
      h2: "Tasting bars featuring IR Nutrition Whey Protein & Pre-Workout",
      h3: "High-octane community vibe and professional event photos",
      cta: "Register for Next Event (500 MT / Free for Members)",
    },
    studentPass: {
      tag: "STUDENT PACKAGE",
      title: "DEDICATED STUDENT GYM RATES",
      description:
        "Balance your academic focus with physical discipline. Present your valid university ID to access exclusive student training packages at IR Fitness Gym.",
      badge: "ACADEMIC DISCOUNT",
      perk1: "Exclusive membership rate discount with student ID",
      perk2: "Full access to gym floor, free weights, and cardio equipment",
      perk3: "Flexible access hours matching student schedules",
      cta: "Claim Student Rate via WhatsApp",
    },
    communityRail: {
      tag: "ATHLETES & COMMUNITY",
      title: "REAL WORKOUTS, REAL DEDICATION",
      subtitle: "Tap any clip to experience the atmosphere at IR Fitness Gym. Real athletes and strength training.",
    },
    hours: {
      title: "Operating Hours",
      monFriLabel: "Monday to Friday",
      monFriTime: "05:00 to 22:00",
      satLabel: "Saturday",
      satTime: "06:00 to 14:00",
      sunLabel: "Sunday",
      sunTime: "08:00 to 13:00",
      holidayLabel: "Holidays",
      holidayTime: "08:00 to 12:00",
    },
    footer: {
      tagline: "High-performance specialists. Where every workout is a victory.",
      hoursBadge: "Mon-Fri: 05h-22h | Sat: 06h-14h | Sun: 08h-13h",
      quickLinks: "Quick Navigation",
      contactsTitle: "Direct Contacts",
      addressTitle: "Official Address",
      addressVal: "Praceta Louis Trachaut 153, Bairro Central - Maputo",
      addressStreet: "Avenida Josina Machel, Praceta Louis Trachaut 153, Bairro Central - Maputo",
      phoneMain: "+258 84 687 9562 (Reception & Info)",
      phoneSecondary: "+258 84 967 5563 (Support & Supplements)",
      instagram: "@ir.fitness.gym | @ir_fitness_shop",
      rights: "IR Fitness Gym. All rights reserved.",
      guardrailNote: "Verified official information & membership plans.",
    },
  },
};

export const WHATSAPP_URL =
  "https://wa.me/258846879562?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20IR%20Fitness%20Gym";

export const PHONE_PRIMARY = "+258 84 687 9562";
export const PHONE_SECONDARY = "+258 84 967 5563";
