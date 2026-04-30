# RUSSALD MEDICAL CENTER — PROMPT MAESTRO SEO / GEO / SCHEMA v2.0
## Para Claude for VS Code · Next.js App Router · React · Vercel · Git
## Revisado contra Google Search Central, Next.js Docs y Schema.org (2025)

> **REFERENCIA HISTÓRICA** — Este archivo es un prompt de auditoría SEO puntual,
> no una guía operativa del proyecto. Úsalo para auditorías o como checklist;
> no como fuente de verdad de convenciones de código.
>
> Para el estado actual del proyecto ver [CLAUDE.md](../CLAUDE.md).
> Nota: este archivo usa `siteConfig` en sus ejemplos; el export real es `SITE`.

---

## 🧭 CONTEXTO DEL PROYECTO

Actúa como un **senior technical SEO + Next.js App Router engineer**.
Trabaja **directamente sobre este repositorio** — audita, corrige e implementa.
No des solo recomendaciones. Lee el repo, detecta los archivos correctos, modifica código real.

**Clínica:** Russald Medical Center  
**Ubicación:** Agua Caliente Blvd 4558, Grand Medical Tower, Tijuana, Baja California, México  
**Distancia frontera:** ~20 minutos del cruce San Ysidro / San Diego  
**Dominio producción:** `russaldmedical.com`  
**Stack:** Next.js App Router · React · Vercel · Git  
**Mercado:** Pacientes internacionales — principalmente EE.UU. y Canadá  
**Especialidades (7):** Cirugía bariátrica · Cirugía plástica · Restauración capilar · Salud masculina · Cuidado vascular · Bio-optimización · Ortopedia  
**Procedimientos:** 25+  
**Teléfonos:** MX +52 (664) 906-9268 · US +1 (800) 560-6733  

---

## ⚠️ REGLAS CRÍTICAS — LEE ANTES DE TOCAR NADA

```
✋ NO uses meta keywords como criterio de auditoría para Google Search.
   → Google las ignoró oficialmente desde 2009. No aportan ranking.

✋ NO agregues SearchAction al WebSite schema.
   → Google retiró el Sitelinks Search Box feature. Solo usa WebSite para site name.

✋ NO implementes Speakable schema.
   → Era experimental para Google News/Assistant. No aplica a clínicas.

✋ NO prometás rich result de estrellas para reviews que el negocio controla en su propio sitio.
   → Google considera self-serving review markup. Reporta como riesgo, no como mejora.

✋ NO inventes credenciales médicas, precios, licencias ni claims clínicos.
   → Si falta contenido real, repórtalo como pendiente manual.

✋ NO agregues schema sin contenido visible que lo respalde.
   → Google requiere que structured data describa contenido visible al usuario.

✋ NO uses next lint si el proyecto está en Next.js 16+.
   → Fue removido. Usa: pnpm exec eslint . con eslint-config-next/core-web-vitals.

✋ NO implementes metadata crítica en Client Components.
   → Metadata API de Next.js solo funciona en Server Components.
```

---

## 📋 SISTEMA DE AUDITORÍA

Para cada ítem encontrado, responde:

| Símbolo | Significado |
|---------|-------------|
| ✅ `PASS` | Implementado correctamente |
| ⚠️ `WARN` | Parcial o mejorable |
| ❌ `FAIL` | Ausente o incorrecto |
| 💡 `OPT` | Oportunidad de mejora no bloqueante |
| 🚫 `SKIP` | No aplica a este archivo/página |

**Prioridades:**
- 🔴 CRÍTICO — Bloquea indexación o genera error en Search Console
- 🟡 IMPORTANTE — Afecta ranking y competitividad directamente
- 🟢 OPTIMIZACIÓN — Mejora incremental de rendimiento y citabilidad en IA

---

## ══════════════════════════════════════════
## FASE 0 — INSPECCIÓN INICIAL DEL REPO
## (Ejecutar siempre primero, antes de modificar nada)
## ══════════════════════════════════════════

```
Lee estos archivos en orden:
[ ] package.json                    → versión Next.js, scripts disponibles
[ ] tsconfig.json                   → paths, strictMode
[ ] next.config.js / next.config.ts → imágenes, i18n, redirects existentes
[ ] app/layout.tsx                  → metadataBase, metadata global, fuentes
[ ] app/page.tsx                    → metadata home, H1, schema
[ ] app/**/page.tsx                 → todas las rutas, metadata por ruta
[ ] app/sitemap.ts                  → existencia y cobertura
[ ] app/robots.ts                   → existencia y reglas
[ ] components/ o lib/              → helpers SEO, JSON-LD existentes
[ ] src/config/ o lib/config/       → fuente de verdad de brand/NAP si existe
```

**Construye una matriz de gaps antes de aplicar cambios:**

| Área | Estado | Riesgo | Acción | Prioridad |
|------|--------|--------|--------|-----------|
| metadataBase | ... | ... | ... | 🔴/🟡/🟢 |
| canonical | ... | ... | ... | ... |
| hreflang | ... | ... | ... | ... |
| JSON-LD global | ... | ... | ... | ... |
| FAQ schema | ... | ... | ... | ... |
| sitemap | ... | ... | ... | ... |
| robots | ... | ... | ... | ... |
| NAP consistencia | ... | ... | ... | ... |

---

## ══════════════════════════════════════════
## FASE 1 — FUENTE ÚNICA DE VERDAD (site.config.ts)
## ══════════════════════════════════════════

**Si no existe, créala. Si existe pero está incompleta, complétala.**
Todo metadata, schema, footer y contact debe leer de aquí — nunca hardcodear.

```typescript
// src/config/site.ts  (o  lib/site-config.ts)

export const siteConfig = {
  // Identidad de marca
  name: 'Russald Medical Center',
  alternateName: ['Russald Medical', 'Russald Clinic'],
  legalName: 'Russald Medical S.A. de C.V.',

  // URLs
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://russaldmedical.com',
  ogImage: '/og/home.jpg',
  logo: '/logo.png',

  // Contacto
  phone: {
    mx: '+526649069268',
    us: '+18005606733',
    mxDisplay: '+52 (664) 906-9268',
    usDisplay: '+1 (800) 560-6733',
  },
  email: 'info@russaldmedical.com',

  // Dirección (NAP exacto — debe ser idéntico en sitio, schema y GBP)
  address: {
    street: 'Agua Caliente Blvd 4558, Grand Medical Tower',
    locality: 'Tijuana',
    region: 'Baja California',
    postalCode: '22014',
    country: 'MX',
    countryName: 'Mexico',
  },

  // Geolocalización
  geo: {
    latitude: 32.5027,
    longitude: -117.0038,
  },

  // Mapas
  mapsUrl: 'https://maps.app.goo.gl/XcHtSmXG86e888GP7',
  gbpUrl: 'https://maps.app.goo.gl/XcHtSmXG86e888GP7', // Google Business Profile

  // Redes sociales
  social: {
    instagram: 'https://www.instagram.com/russaldmedical',
    facebook: 'https://www.facebook.com/russaldmedical',
    youtube: 'https://www.youtube.com/@russaldmedical',
    // twitter / tiktok si aplica
  },

  // Locales
  locales: {
    default: 'en-US',
    supported: ['en-US', 'es-MX'],
  },

  // Especialidades (para schema y footer)
  specialties: [
    'Bariatric Surgery',
    'Plastic Surgery',
    'Hair Restoration',
    "Men's Health",
    'Vascular Surgery',
    'Bio-Optimization',
    'Orthopedics',
  ],

  // Horarios (si son públicos y verificables)
  hours: {
    weekdays: { opens: '09:00', closes: '18:00' },
    // saturday, sunday si aplica
  },
} as const
```

**Checklist Fase 1:**
```
[ ] ¿Existe src/config/site.ts (o equivalente)?
[ ] ¿El nombre legal coincide con Google Business Profile?
[ ] ¿El NAP (Name, Address, Phone) en siteConfig es IDÉNTICO al footer del sitio?
[ ] ¿El NAP es IDÉNTICO al Google Business Profile?
[ ] ¿Se importa siteConfig en layout.tsx y en los schemas JSON-LD?
[ ] ¿Las coordenadas geo son correctas para Tijuana BC?
[ ] ¿Los teléfonos usan formato E.164 en el schema y formato legible en el UI?
```

---

## ══════════════════════════════════════════
## FASE 2 — METADATA GLOBAL (app/layout.tsx)
## ══════════════════════════════════════════

```typescript
// app/layout.tsx — Patrón de referencia

import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  // OBLIGATORIO: sin esto, los canonical relativos fallan en build
  metadataBase: new URL(siteConfig.url),

  title: {
    default: 'Russald Medical Center | World-Class Surgery in Tijuana, Mexico',
    template: '%s | Russald Medical Center',
  },

  description:
    'Multi-specialty medical center in Tijuana, 20 min from San Diego. ' +
    'Board-certified surgeons. Bariatric, plastic surgery, hair restoration & more. ' +
    '60–75% less than US prices. Free evaluation.',

  // SIN meta keywords — no aportan ranking en Google Search

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-MX': '/es-mx',         // Solo si existe la versión en español
      'x-default': '/',
      // NOTA: No usar 'es-419' — no es un código hreflang válido para Google
    },
  },

  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Russald Medical Center | World-Class Surgery in Tijuana, Mexico',
    description:
      'Multi-specialty medical center in Tijuana, 20 min from San Diego. ' +
      'Board-certified surgeons. 60–75% less than US prices.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Russald Medical Center reception — modern clinic in Tijuana, Mexico',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Russald Medical Center | Surgery in Tijuana, Mexico',
    description:
      'Board-certified surgeons in Tijuana. 60–75% less than US. Free evaluation.',
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}
```

**Checklist Fase 2:**
```
[ ] ¿metadataBase está definida en el layout raíz?
[ ] ¿title.template usa '%s | Russald Medical Center'?
[ ] ¿El title default tiene menos de 60 caracteres?
[ ] ¿La description tiene entre 120–160 caracteres?
[ ] ¿alternates.canonical está definida?
[ ] ¿Los hreflang solo incluyen códigos válidos? (en-US, es-MX, x-default)
[ ] ¿og:image tiene dimensiones 1200x630 y alt text descriptivo?
[ ] ¿og:site_name es exactamente "Russald Medical Center"?
[ ] ¿twitter:card es "summary_large_image"?
[ ] ¿NO hay meta keywords en el objeto metadata?
[ ] ¿robots tiene googleBot con max-image-preview: large?
[ ] ¿verification.google usa variable de entorno (no hardcodeada)?
[ ] ¿El <html> tag tiene lang="en-US"?
```

---

## ══════════════════════════════════════════
## FASE 3 — METADATA POR RUTA (generateMetadata)
## ══════════════════════════════════════════

```typescript
// app/weight-loss/gastric-sleeve/page.tsx — Ejemplo de referencia

import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Gastric Sleeve Surgery in Tijuana, Mexico',
  // ↑ El template del layout agrega " | Russald Medical Center" automáticamente
  // Resultado: "Gastric Sleeve Surgery in Tijuana, Mexico | Russald Medical Center"
  // Total: ~65 chars ← Aceptable con template

  description:
    'Board-certified gastric sleeve surgery in Tijuana, 20 min from San Diego. ' +
    '$4,500–$6,500 USD all-inclusive — 60–75% less than US prices. Free evaluation.',

  alternates: {
    canonical: '/weight-loss/gastric-sleeve',
    languages: {
      'en-US': '/weight-loss/gastric-sleeve',
      'es-MX': '/es-mx/perdida-de-peso/manga-gastrica', // Solo si existe
      'x-default': '/weight-loss/gastric-sleeve',
    },
  },

  openGraph: {
    // CLÍNICA MÉDICA: usar 'website' para páginas de procedimiento/servicio.
    // 'article' requiere article:published_time + article:author — sin esos campos
    // el tipo queda incompleto y los parsers lo ignoran. 'website' es semánticamente
    // correcto para páginas de servicio y no requiere metadatos adicionales.
    // Reservar 'article' solo para posts de blog con fecha y autor explícitos.
    url: `${siteConfig.url}/weight-loss/gastric-sleeve`,
    title: 'Gastric Sleeve Surgery in Tijuana, Mexico | Russald Medical Center',
    description:
      'Board-certified gastric sleeve surgery in Tijuana. ' +
      '$4,500–$6,500 USD all-inclusive. Free evaluation.',
    images: [
      {
        url: '/og/gastric-sleeve.jpg',
        width: 1200,
        height: 630,
        alt: 'Gastric sleeve surgery patient consultation at Russald Medical Center, Tijuana',
      },
    ],
  },
}
```

**Patrón de Headings para páginas de procedimiento:**
```
H1: [Procedimiento] in Tijuana, Mexico          ← Incluye keyword + ubicación
  H2: What Is [Procedimiento]?
  H2: Am I a Candidate?
  H2: How Much Does [Procedimiento] Cost in Mexico?   ← Pregunta de alta intención
  H2: What to Expect: Surgery & Recovery
  H2: Why Choose Russald Medical Center?
  H2: Frequently Asked Questions               ← FAQ visible = base para FAQ schema
    H3: [Pregunta 1]
    H3: [Pregunta 2]
    H3: [Pregunta 3]
```

**Checklist por ruta:**
```
[ ] ¿El title es único para esta página (no copia el de otra)?
[ ] ¿El title incluye el nombre del procedimiento + "Tijuana" o "Mexico"?
[ ] ¿La description menciona precio específico o rango (no solo "affordable")?
[ ] ¿canonical usa ruta relativa limpia (el metadataBase la hace absoluta)?
[ ] ¿Los hreflang son recíprocos? (en-US apunta a es-MX y viceversa)
[ ] ¿El H1 contiene keyword de intención de búsqueda?
[ ] ¿Hay exactamente UN H1 por página?
[ ] ¿La jerarquía H1→H2→H3 es lógica sin saltos?
[ ] ¿El title y el H1 son consistentes (no idénticos, pero alineados)?
[ ] ¿og:title coincide temáticamente con title SEO?
[ ] ¿og:image tiene alt text específico para este procedimiento?
[ ] ¿og:type es 'website' (NO 'article') para páginas de procedimiento/servicio?
    → 'article' solo si la página tiene article:published_time + article:author explícitos
```

---

## ══════════════════════════════════════════
## FASE 4 — JSON-LD / STRUCTURED DATA
## ══════════════════════════════════════════

### 4.0 Helper reutilizable (implementar una vez)

```typescript
// components/JsonLd.tsx

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escapa "<" para prevenir XSS — SIEMPRE incluir
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

// Uso: <JsonLd data={mySchema} />
// IMPORTANTE: Renderizar en Server Component, no en Client Component
// Next.js recomienda <script> nativo para JSON-LD, NO next/script
```

---

### 4.1 Schema por TIPO DE PÁGINA

> **Regla de oro:** Solo implementa schema respaldado por contenido visible en esa página.

#### HOME (`app/page.tsx`) — WebSite + Organization + MedicalBusiness

```typescript
// schemas/home-schema.ts
import { siteConfig } from '@/config/site'

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite: Solo para site name disambiguation. SIN SearchAction.
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      url: `${siteConfig.url}/`,
      // ← NO incluir potentialAction/SearchAction (feature retirada por Google)
    },

    // Organization: Entidad legal y presencia web
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: `${siteConfig.url}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
      sameAs: Object.values(siteConfig.social),
    },

    // MedicalBusiness: Hereda de LocalBusiness — señal local SEO crítica
    {
      '@type': 'MedicalBusiness',
      '@id': `${siteConfig.url}/#clinic`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      telephone: siteConfig.phone.mx,
      email: siteConfig.email,
      priceRange: '$$',
      currenciesAccepted: 'USD, MXN',
      paymentAccepted: 'Cash, Credit Card, Wire Transfer',
      medicalSpecialty: siteConfig.specialties,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      hasMap: siteConfig.mapsUrl,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: siteConfig.hours.weekdays.opens,
          closes: siteConfig.hours.weekdays.closes,
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'AdministrativeArea', name: 'Baja California, Mexico' },
      ],
      availableLanguage: ['English', 'Spanish'],
      parentOrganization: { '@id': `${siteConfig.url}/#organization` },
    },
  ],
}
```

**Checklist Schema Home:**
```
[ ] ¿WebSite tiene @id, name, url y alternateName?
[ ] ¿WebSite NO tiene potentialAction/SearchAction?
[ ] ¿Organization tiene @id, name, legalName, logo, sameAs?
[ ] ¿MedicalBusiness tiene NAP completo (name, address, phone)?
[ ] ¿address.addressCountry es "MX" (código ISO, no "Mexico")?
[ ] ¿geo.latitude/longitude corresponde a Tijuana?
[ ] ¿areaServed menciona USA, Canada y Baja California?
[ ] ¿availableLanguage incluye "English" (crítico para turismo médico)?
[ ] ¿Se usa @graph para agrupar schemas relacionados?
[ ] ¿Los @id son URLs absolutas estables con fragmento (#website, #clinic)?
```

---

#### CONTACTO / UBICACIÓN — MedicalBusiness completo

```typescript
// Para /contact o /our-facilities
// Reutiliza el nodo MedicalBusiness del @graph del home
// Agrega: instrucciones de llegada desde San Diego en contenido visible
```

```
Checklist Contact/Location:
[ ] ¿La página tiene NAP completo en texto visible (no solo en schema)?
[ ] ¿Hay un embed o enlace claro a Google Maps / GBP?
[ ] ¿Hay instrucciones de cómo llegar desde cruce San Ysidro?
[ ] ¿Hay instrucciones desde Aeropuerto Internacional de Tijuana (TIJ)?
[ ] ¿El teléfono US (+1 800...) es visible y clickeable (tel:)?
[ ] ¿El MedicalBusiness schema de esta página es idéntico al de home?
```

---

#### PÁGINA DE PROCEDIMIENTO — MedicalProcedure + FAQPage

```typescript
// schemas/procedure-schema.ts

// MedicalProcedure: Schema semántico válido de Schema.org
// NOTA: No es un rich result dedicado de Google — aporta comprensión
// semántica para LLMs (ChatGPT, Perplexity, Gemini) y señal contextual.
export function buildProcedureSchema(procedure: {
  name: string
  alternateName?: string
  description: string
  bodyLocation: string
  preparation: string
  howPerformed: string
  followup: string
  indication: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: procedure.name,
    alternateName: procedure.alternateName,
    procedureType: 'Surgical',
    description: procedure.description,
    bodyLocation: procedure.bodyLocation,
    preparation: procedure.preparation,
    howPerformed: procedure.howPerformed,
    followup: procedure.followup,
    indication: {
      '@type': 'MedicalIndication',
      name: procedure.indication,
    },
    provider: {
      // Referencia al nodo ya definido en home — evita duplicar datos
      '@id': `${siteConfig.url}/#clinic`,
    },
  }
}

// FAQPage: SÍ es un rich result soportado por Google
// REGLA ESTRICTA: Solo incluir preguntas/respuestas que estén
// visibles en la página como texto HTML. No marcar contenido oculto.
export function buildFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }
}
```

**Ejemplo de FAQs de alta intención para procedimientos bariátricos:**
```typescript
const gastricSleeveFaqs = [
  {
    q: 'How much does gastric sleeve surgery cost in Tijuana?',
    a: 'Gastric sleeve surgery at Russald Medical Center costs $4,500–$6,500 USD all-inclusive — surgeon fees, anesthesia, hospital stay, and post-op care — compared to $15,000–$25,000 in the United States, representing savings of 60–75%.'
  },
  {
    q: 'Is gastric sleeve surgery safe in Mexico?',
    a: 'Yes. Russald Medical Center\'s bariatric surgeons are board-certified and operate in a fully equipped facility in Tijuana. Every patient undergoes complete medical evaluation before any procedure. Safety protocols follow international standards.'
  },
  {
    q: 'How long do I need to stay in Tijuana after gastric sleeve?',
    a: 'Most patients stay 3–5 days in Tijuana after gastric sleeve surgery before returning home. Your English-speaking coordinator manages discharge instructions and remote follow-up.'
  },
  {
    q: 'Do I need a passport to cross the border for surgery in Tijuana?',
    a: 'Yes. A valid US passport or passport card is required to cross the US–Mexico border at San Ysidro. The Russald team provides crossing instructions and logistics support.'
  },
  {
    q: 'Will my insurance cover bariatric surgery in Mexico?',
    a: 'Most US insurance plans do not cover procedures performed abroad. However, the savings at Russald Medical Center — 60–75% less than US prices — typically make the out-of-pocket cost comparable to or less than a US copay with insurance.'
  },
]
```

**Checklist Schema Procedimiento:**
```
[ ] ¿Existe MedicalProcedure schema en la página?
[ ] ¿description del procedimiento tiene al menos 80 palabras?
[ ] ¿procedureType está definido ("Surgical", "Noninvasive", etc.)?
[ ] ¿provider hace referencia al @id del clinic (no duplica datos)?
[ ] ¿Existe FAQPage schema en la página?
[ ] ¿Las preguntas del FAQPage coinciden EXACTAMENTE con H3 visibles en la página?
[ ] ¿Las respuestas del FAQPage son texto visible, no oculto?
[ ] ¿Las respuestas mencionan "Russald Medical Center" y "Tijuana"?
[ ] ¿Las respuestas incluyen datos específicos (precio, duración, distancia)?
[ ] ¿Hay al menos 4 preguntas con intención transaccional (costo, seguridad, recuperación)?
[ ] ¿Se valida en Rich Results Test? → https://search.google.com/test/rich-results
```

---

#### PÁGINA DE MÉDICO — Physician

```typescript
// Solo implementar si existe un perfil real, verificable y completo
// No inventar especialidades, licencias ni afiliaciones

export function buildPhysicianSchema(doctor: {
  name: string
  jobTitle: string
  specialty: string
  image: string
  profileUrl: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    jobTitle: doctor.jobTitle,
    medicalSpecialty: doctor.specialty,
    image: `${siteConfig.url}${doctor.image}`,
    url: `${siteConfig.url}${doctor.profileUrl}`,
    worksFor: {
      '@id': `${siteConfig.url}/#clinic`,
    },
  }
}
```

```
Checklist Physician:
[ ] ¿Solo se implementa si el médico tiene perfil con contenido real?
[ ] ¿name, jobTitle y medicalSpecialty son verificables?
[ ] ¿worksFor referencia al @id del clinic?
[ ] ¿NO se inventan licencias ni board certifications?
```

---

#### TESTIMONIOS / REVIEWS — Manejo correcto

```
⚠️ ADVERTENCIA SOBRE REVIEW SCHEMA:

Google puede mostrar Review rich results (estrellas) para ciertos tipos
de schema, PERO:
- No muestra estrellas para reviews que el propio negocio controla en su sitio.
- Forzar AggregateRating para self-serving reviews puede ser penalizado.

RECOMENDACIÓN para Russald:
✅ Muestra testimonios visibles en HTML — son valiosos para E-E-A-T
✅ Enlaza a Google Business Profile para reviews verificadas de terceros
✅ Si tienes reseñas en plataformas externas (Healthgrades, RealSelf),
   enlaza a ellas y añade el schema solo en esas páginas externas
❌ NO añadas AggregateRating schema para las reseñas de tu propio sitio
   esperando ver estrellas en Google Search
```

---

## ══════════════════════════════════════════
## FASE 5 — SEO TÉCNICO: IMÁGENES, PERFORMANCE, SITEMAP
## ══════════════════════════════════════════

### 5.1 Imágenes

```
[ ] ¿Todas las imágenes usan next/image?
[ ] ¿Las imágenes hero tienen priority={true}?
[ ] ¿Todas las imágenes tienen atributo alt no vacío?
[ ] ¿El alt describe la imagen con contexto clínico/geográfico?
    ✅ "Gastric sleeve operating room at Russald Medical Center, Tijuana"
    ❌ "surgery" / "image1" / ""
[ ] ¿Los nombres de archivos son descriptivos?
    ✅ gastric-sleeve-russald-tijuana.webp
    ❌ IMG_3421.jpg / photo.png
[ ] ¿Se usan formatos WebP o AVIF?
[ ] ¿Las imágenes below-the-fold usan lazy loading (default en next/image)?
[ ] ¿Se definen width y height explícitos para prevenir CLS?
```

### 5.2 Core Web Vitals

```
[ ] ¿LCP < 2.5s? → Hero image con priority, formatos modernos, CDN Vercel
[ ] ¿CLS < 0.1?  → Dimensiones explícitas en imágenes y fuentes
[ ] ¿INP < 200ms? → Minimizar JS en thread principal
[ ] ¿Se usa next/font para cargar fuentes? (evita layout shift por fuentes externas)
[ ] ¿Los scripts de terceros usan strategy="lazyOnload"?
[ ] ¿next.config.js tiene optimizaciones de imagen configuradas?
```

### 5.3 Sitemap dinámico

```typescript
// app/sitemap.ts — Patrón de referencia

import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

const procedures = [
  '/weight-loss/gastric-sleeve',
  '/weight-loss/gastric-bypass',
  '/weight-loss/mini-gastric-bypass',
  '/weight-loss/lap-band',
  '/weight-loss/bariatric-revision',
  '/plastic-surgery/mommy-makeover',
  '/plastic-surgery/tummy-tuck',
  '/plastic-surgery/liposuction',
  '/plastic-surgery/bbl',
  '/plastic-surgery/breast-augmentation',
  '/plastic-surgery/rhinoplasty',
  '/plastic-surgery/facelift',
  '/plastic-surgery/arm-lift',
  '/plastic-surgery/thigh-lift',
  '/hair-restoration/fue',
  '/hair-restoration/dhi',
  '/hair-restoration/prp',
  '/mens-health/implant',
  '/mens-health/erectile-dysfunction',
  '/mens-health/testosterone',
  '/vascular-care/evla',
  '/vascular-care/sclerotherapy',
  '/bio-optimization/hgh',
  '/bio-optimization/bhrt',
  '/bio-optimization/myers-cocktail',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/weight-loss`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/plastic-surgery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hair-restoration`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/mens-health`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/vascular-care`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/bio-optimization`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...procedures.map(path => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/our-facilities`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/our-patients`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Páginas legales — visibles pero baja prioridad
    { url: `${base}/legal/privacy`, changeFrequency: 'yearly' as const, priority: 0.2 },
  ]
}
```

```
Checklist Sitemap & Robots:
[ ] ¿Existe app/sitemap.ts generado en Next.js (no XML manual)?
[ ] ¿El sitemap cubre TODOS los procedimientos (25+)?
[ ] ¿El sitemap está registrado en Google Search Console?
[ ] ¿El sitemap está registrado en Bing Webmaster Tools?
[ ] ¿Existe app/robots.ts con reglas correctas?
[ ] ¿Los robots permiten indexación de todas las páginas de contenido?
[ ] ¿Las páginas /legal/* están en noindex (opcional pero recomendado)?
```

---

## ══════════════════════════════════════════
## FASE 6 — GEO: LOCAL SEO + OPTIMIZACIÓN PARA IA
## ══════════════════════════════════════════

### 6.1 Local SEO — NAP y Señales Geográficas

```
[ ] ¿El NAP visible en el footer ES IDÉNTICO a:
    - Schema MedicalBusiness
    - Google Business Profile (GBP)
    - Directorios médicos externos (Healthgrades, RealSelf, Zocdoc)?
[ ] ¿La dirección siempre se escribe igual?
    → "Agua Caliente Blvd 4558, Grand Medical Tower, Tijuana, BC 22014, México"
[ ] ¿Los teléfonos US y MX son visibles y clickeables (href="tel:")?
[ ] ¿Hay enlace claro al Google Business Profile / Google Maps?
[ ] ¿Las páginas de procedimiento mencionan "Tijuana" en H1 o H2?
[ ] ¿Existe contenido sobre logística US → México?
    (cruce fronterizo, transporte, alojamiento, acompañante)
```

### 6.2 GEO — Optimización para Modelos de IA (LLMs)

> **Contexto importante:** Google no tiene un "AI schema" especial para aparecer
> en sus funciones de IA. Lo que sí existe es una estrategia de contenido que
> hace que LLMs (ChatGPT, Perplexity, Gemini, Claude) citen y recomienden tu sitio.
> Los LLMs priorizan contenido factual, específico, bien estructurado y citable.

**Principios GEO para Russald:**

```
FACTICIDAD Y ESPECIFICIDAD:
[ ] ¿Los precios son rangos específicos? (no "affordable" — sí "$4,500–$6,500 USD")
[ ] ¿La distancia es específica? ("~20 minutos del cruce San Ysidro")
[ ] ¿Las estadísticas tienen fuente? ("patients lose 60–70% excess weight — ASMBS")
[ ] ¿La duración de cirugías es concreta? ("1.5–2 hours under general anesthesia")
[ ] ¿El tiempo de recuperación es específico? ("3–5 days in Tijuana before return")

ESTRUCTURA ANSWER-FIRST (respuesta antes del contexto):
[ ] ¿Las secciones empiezan con la respuesta directa, no con relleno?
    ✅ "Gastric sleeve costs $4,500–$6,500 at Russald. Here's what's included..."
    ❌ "When it comes to weight loss surgery costs, many factors..."
[ ] ¿Las FAQs son preguntas reales que los usuarios escriben en Google/ChatGPT?
[ ] ¿Hay comparativas explícitas? ("México vs EE.UU.", "Manga vs Bypass")
[ ] ¿Hay contenido de "cuándo NO eres candidato"? (aumenta credibilidad)

AUTORIDAD DE ENTIDAD:
[ ] ¿"Russald Medical Center" aparece con nombre completo consistente?
[ ] ¿"Tijuana, Baja California, Mexico" aparece en forma larga en páginas clave?
[ ] ¿"20 minutes from San Diego border crossing" o equivalente aparece en home?
[ ] ¿Hay página /about o /who-we-are con historia y misión verificable?
[ ] ¿Las certificaciones médicas se nombran específicamente?
    (ej: nombre del consejo certificador, no solo "board certified")

ENLACES INTERNOS CONTEXTUALES:
[ ] ¿Los enlaces internos usan anchor text descriptivo?
    ✅ "learn about gastric sleeve recovery"
    ❌ "click here" / "learn more"
[ ] ¿Cada especialidad enlaza a sus procedimientos individuales?
[ ] ¿Cada procedimiento tiene enlace de regreso a su categoría (breadcrumb)?
[ ] ¿No hay páginas huérfanas (sin ningún enlace entrante)?
```

**Queries de alta prioridad que el sitio debe responder explícitamente:**
```
"best bariatric surgeon in tijuana"               → /weight-loss + perfiles médicos
"is surgery safe in tijuana mexico"               → /why-russald o /faq
"gastric sleeve cost tijuana vs usa"              → /weight-loss/gastric-sleeve
"how to get to tijuana for medical tourism"       → /patient-resources
"plastic surgery medical tourism tijuana"         → /plastic-surgery
"hair transplant tijuana near san diego"          → /hair-restoration/fue
"mommy makeover tijuana"                          → /plastic-surgery/mommy-makeover
"is it safe to cross to tijuana for surgery"      → /patient-resources o /faq
```

### 6.3 E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

> E-E-A-T es la forma en que Google y los LLMs evalúan si un sitio médico
> merece ser citado. Todos los ítems deben estar en contenido HTML visible.

```
EXPERIENCE (Experiencia demostrada):
[ ] ¿Hay casos de pacientes reales con resultados medibles?
[ ] ¿Hay fotos/videos antes-después con consentimiento explícito?
[ ] ¿Se especifican años de experiencia del equipo?

EXPERTISE (Pericia clínica):
[ ] ¿Cada médico tiene página individual con CV, formación y especialidad?
[ ] ¿Los artículos tienen autor identificado (médico del equipo)?
[ ] ¿Se citan guías médicas reconocidas? (ASMBS, ASPS, ISHRS, etc.)

AUTHORITATIVENESS (Autoridad):
[ ] ¿Hay backlinks de directorios médicos reconocidos?
    (Healthgrades, RealSelf, Zocdoc, Vitals, MDsave)
[ ] ¿Hay membresías en asociaciones médicas listadas?
[ ] ¿Hay menciones en medios de turismo médico?

TRUSTWORTHINESS (Confianza):
[ ] ¿HTTPS activo con certificado válido?
[ ] ¿Política de privacidad actualizada y visible?
[ ] ¿Disclaimer médico claro en cada página de procedimiento?
[ ] ¿Número de registro de la clínica visible?
[ ] ¿Información de contacto verificable en cada página?
[ ] ¿Los precios incluyen desglose (no solo "all-inclusive")?
```

---

## ══════════════════════════════════════════
## FASE 7 — VERIFICACIÓN TÉCNICA
## ══════════════════════════════════════════

Ejecutar en este orden después de cada ronda de cambios:

```bash
# 1. Lint (NO uses next lint si estás en Next.js 16+)
pnpm exec eslint . --ext .ts,.tsx

# 2. Type check
pnpm exec tsc --noEmit

# 3. Build
pnpm build

# Si usas npm: npm run lint / npm run build
# Si usas yarn: yarn lint / yarn build
```

**Validaciones manuales sobre Preview URL de Vercel:**

| Herramienta | Para qué | URL |
|-------------|---------|-----|
| Rich Results Test | FAQ, LocalBusiness | search.google.com/test/rich-results |
| Schema Markup Validator | WebSite, site name, MedicalProcedure | validator.schema.org |
| URL Inspection | Render, indexabilidad | Google Search Console |
| PageSpeed Insights | Core Web Vitals real | pagespeed.web.dev |

> **Nota:** Rich Results Test NO soporta validación de site name (WebSite schema).
> Para eso usar Schema Markup Validator directamente.

---

## ══════════════════════════════════════════
## FASE 8 — RESUMEN FINAL REQUERIDO
## ══════════════════════════════════════════

Al terminar, entrega:

```
1. TABLA DE ISSUES CORREGIDOS
   Área | Estado antes | Estado después | Archivo modificado

2. ARCHIVOS MODIFICADOS
   Lista exacta de archivos tocados con descripción del cambio

3. METADATA Y SCHEMA IMPLEMENTADO
   Por ruta: qué metadata y qué schemas quedaron activos

4. RUTAS PENDIENTES Y RAZÓN
   Qué páginas siguen sin completar y por qué

5. VALIDACIONES MANUALES RECOMENDADAS
   Qué validar en la preview URL y con qué herramienta

6. RIESGOS NO IMPLEMENTADOS AUTOMÁTICAMENTE
   Qué no se implementó y por qué (contenido faltante, riesgo de penalización, etc.)

7. RESULTADOS DE VERIFICACIÓN TÉCNICA
   Output de eslint, tsc y build
```

---

## ══════════════════════════════════════════
## CRITERIOS DE ACEPTACIÓN
## ══════════════════════════════════════════

El trabajo está completo cuando:

```
✅ site.config.ts existe con NAP completo y centralizado
✅ metadataBase está definida en layout raíz
✅ canonical y hreflang son consistentes en rutas clave
✅ JSON-LD por tipo de página (home, procedimiento, FAQ)
✅ NO hay SearchAction, Speakable ni meta keywords en el código
✅ NO hay Review/AggregateRating self-serving sin advertencia
✅ El schema tiene respaldo en contenido HTML visible
✅ next/image usado en todas las imágenes críticas
✅ sitemap.ts cubre los 25+ procedimientos
✅ robots.ts permite indexación correcta
✅ ESLint, TypeCheck y Build documentados (sin errores críticos)
✅ Resumen final permite abrir PR y revisar rápido
```

---

## ══════════════════════════════════════════
## REFERENCIA RÁPIDA DE KEYWORDS
## ══════════════════════════════════════════

| Ruta | Keyword principal | Keyword secundaria |
|------|------------------|-------------------|
| / (home) | medical tourism tijuana | surgery near san diego mexico |
| /weight-loss | weight loss surgery tijuana | bariatric surgery tijuana |
| /weight-loss/gastric-sleeve | gastric sleeve tijuana | gastric sleeve mexico cost |
| /weight-loss/gastric-bypass | gastric bypass tijuana | |
| /plastic-surgery | plastic surgery tijuana | |
| /plastic-surgery/mommy-makeover | mommy makeover tijuana | |
| /plastic-surgery/bbl | bbl tijuana | brazilian butt lift mexico |
| /hair-restoration/fue | hair transplant tijuana | fue hair transplant mexico |
| /mens-health/implant | male enhancement tijuana | himplant tijuana |
| /bio-optimization | hormone therapy tijuana | bio optimization tijuana |
| /faq | surgery in tijuana safe | medical tourism mexico faq |

---

*Russald Medical Center — SEO/GEO/Schema Prompt v2.0*  
*Actualizado contra: Google Search Central 2025 · Next.js App Router Docs · Schema.org*  
*Stack: Next.js App Router · React · Vercel · Git*  
*Mercado: Turismo médico internacional EE.UU. / Canadá → Tijuana, México*
