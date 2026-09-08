# 07. Search Engine Optimization & Structured Data

## Metadata Configuration (`src/app/layout.tsx`)
- **Site Title:** IR Fitness Gym | Especialistas em Alta Performance | Maputo
- **Meta Description (PT):** Ginásio de alta performance em Maputo, Moçambique. Treino de força, artes marciais com a IR Karate Academy (KSI) e suplementação desportiva IR Fitness Shop.
- **Meta Description (EN):** High-performance gym in Maputo, Mozambique. Elite strength training, martial arts with IR Karate Academy (KSI), and IR Fitness Shop sports nutrition.
- **Keywords:** IR Fitness Gym, Ginásio Maputo, Academia Karate Maputo, KSI Moçambique, IR Fitness Shop, Suplementos Maputo, Treino de Alta Performance, Music and Gym Experience.

## OpenGraph & Twitter Cards
- **og:title:** IR Fitness Gym | Onde Cada Treino É Uma Vitória
- **og:description:** Treino de alto rendimento, artes marciais e suplementação desportiva de referência em Maputo.
- **og:image:** `/images/og-ir-fitness.jpg`
- **og:locale:** `pt_MZ`
- **og:locale:alternate:** `en_US`

## Schema.org Structured Data (`JSON-LD`)
```json
{
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "ExerciseGym",
  "name": "IR Fitness Gym",
  "image": "[https://irfitnessgym.co.mz/images/logo.jpg](https://irfitnessgym.co.mz/images/logo.jpg)",
  "telephone": "+258846879562",
  "url": "[https://irfitnessgym.co.mz](https://irfitnessgym.co.mz)",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Maputo",
    "addressCountry": "MZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.9680342,
    "longitude": 32.5710478
  },
  "hasMap": "https://www.google.com/maps/place/IR+Fitness+Gym/@-25.9680464,32.5658879,1358m/data=!3m1!1e3!4m6!3m5!1s0x1ee69b108e614f9f:0x1ef8eda9b5c9652b!8m2!3d-25.9680342!4d32.5710478!16s%2Fg%2F11t_kc4bk6",
  "slogan": "Especialistas em alta performance. Onde cada treino é uma vitória.",
  "department": [
    {
      "@type": "Store",
      "name": "IR Fitness Shop — Loja Polana",
      "address": "Av. Eduardo Mondlane, 324 — Maputo",
      "telephone": "+258846507470",
      "description": "Suplementos e nutrição desportiva — Loja Polana."
    },
    {
      "@type": "Store",
      "name": "IR Fitness Shop — Loja Coop",
      "address": "Av. Vladimir Lenine, 2177 — Maputo",
      "telephone": "+258827395099",
      "description": "Suplementos e nutrição desportiva — Loja Coop."
    },
    {
      "@type": "Store",
      "name": "IR Fitness Shop — Loja Gym (Balcão do Ginásio)",
      "address": "Av. Josina Machel, 153 — Maputo",
      "telephone": "+258849675563",
      "description": "Suplementos e nutrição desportiva — Balcão do Ginásio."
    }
  ]
}