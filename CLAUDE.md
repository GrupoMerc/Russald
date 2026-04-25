# Russald Medical — CLAUDE.md
> Fuente de verdad para Claude en VSCode. Leer completo antes de generar cualquier código.

---

## 1. Proyecto

| Campo | Valor |
|---|---|
| Sitio | https://russaldmedical.com |
| Repo | github.com/GrupoMerc/Russald |
| Deploy | Vercel (auto-deploy push a `main`) |
| Stack | Next.js 15 · App Router · Tailwind CSS v4 · TypeScript strict · Framer Motion |
| Equipo | 2 personas — Joe + Claude |

---

## 2. Figma — fuente de verdad visual

**URL:** https://www.figma.com/design/aJSYRFsGTo30GNSYrtrw1u/Rusald-Medical  
**File key:** `aJSYRFsGTo30GNSYrtrw1u`

### Regla absoluta
- Cada componente React mapea 1:1 a un node de Figma.
- No crear, renombrar ni inventar componentes sin node ID de referencia.
- Agregar el node ID como comentario en la línea 1 de cada componente:
```tsx
// Figma node: 2300:705 — Section/Home-Hero · 2323:975 Tablet · 2334:1555 Mobile
```

### Cómo extraer un componente
1. `get_design_context` Desktop → Tablet → Mobile (3 llamadas en paralelo)
2. Generar **un solo** `.tsx` con las 3 variantes via Tailwind responsive
3. Nunca crear 3 archivos separados por breakpoint
4. Adaptar al stack del proyecto — los tokens Figma → `var(--color-*)`, fuentes → variables CSS

---

## 3. Arquitectura de componentes

### Regla de oro: estructura separada de contenido

Los componentes son **moldes visuales**. El contenido va en archivos de datos separados.

```
❌ Mal — contenido hardcodeado en el componente
export default function WlsHero() {
  return <h1>Life-Changing Weight Loss Surgery...</h1>
}

✅ Bien — componente recibe props, datos en lib/pages/
export default function SpecHero({ data }: { data: SpecHeroData }) {
  return <h1>{data.heading}</h1>
}
```

### Tres tipos de componentes

| Tipo | Ubicación | Cuándo usarlo |
|---|---|---|
| **Átomo UI** | `components/ui/` | Button, Input, Select, Card — sin lógica de negocio |
| **Template de sección** | `components/sections/spec/` | Layouts reutilizables entre páginas internas |
| **Sección única** | `components/sections/` | Secciones exclusivas de una sola página (Home-Hero, Bio-Breaker) |

### Páginas internas — patrón obligatorio

Todas las páginas de especialidad (Weight Loss, Plastic Surgery, etc.) comparten el mismo layout de secciones: SpecHero → SpecFactsStrip → SpecIntro → SpecWhy → SpecProc → EvalFormSection.

```
components/sections/spec/
  SpecHero.tsx          ← template genérico, acepta SpecHeroData
  SpecFactsStrip.tsx    ← template genérico, acepta SpecFactData[]
  SpecIntro.tsx         ← template genérico, acepta SpecIntroData
  SpecWhy.tsx           ← template genérico, acepta SpecWhyItem[]
  SpecProc.tsx          ← template genérico, acepta SpecProcItem[]
  SpecFloatCta.tsx      ← reutilizable sin props

lib/pages/
  weightLoss.ts         ← export const wlsData: SpecPageData
  plasticSurgery.ts     ← export const plasticData: SpecPageData
  hairRestoration.ts    ← export const hairData: SpecPageData

app/
  weight-loss/page.tsx  ← import { wlsData } + templates = 15 líneas
  plastic-surgery/page.tsx
```

**Beneficio:** una segunda página interna se crea en < 1 hora. Un cambio de estilo se aplica en todas a la vez.

---

## 4. TypeScript — reglas estrictas

```ts
// ✅ Tipos explícitos para datos de página — en lib/types/spec.ts
export interface SpecHeroData {
  eyebrowTag: string
  heading: string
  description: string
  stats: ReadonlyArray<{ icon: string; value: string; label: string }>
  ctaHref: string
}

export interface SpecPageData {
  hero: SpecHeroData
  facts: SpecFactData[]
  intro: SpecIntroData
  why: SpecWhyItem[]
  procedures: SpecProcItem[]
}
```

- **Nunca `any`** — si no conoces el tipo, usa `unknown` y narrowea
- **`as const`** para arrays de datos estáticos (evita tipos widened)
- **Props explícitas** — nunca prop `data: object` sin tipar
- **`satisfies`** para validar objetos literales contra su tipo sin perder inference
- Server Components no llevan tipos de evento ni hooks — si necesitas onClick/useState → `'use client'`

---

## 5. Server vs Client Components

Next.js 15 App Router: **todo es Server Component por defecto**. `'use client'` es la excepción.

```
✅ Server Component (sin directiva):
  - Secciones estáticas de contenido
  - Páginas (page.tsx)
  - Layout
  - Componentes que solo reciben props y renderizan HTML

✅ Client Component ('use client'):
  - useState / useEffect / useCallback
  - Formularios con interacción (EvaluationForm)
  - Animaciones Framer Motion (motion.div)
  - Nav con useState para el menú mobile
  - WlsFloatCta (dismiss)
  - Cualquier handler de evento del usuario
```

**Regla práctica:** si el componente no usa hooks ni eventos, no necesita `'use client'`. Cuestiona cada `'use client'` antes de añadirlo.

---

## 6. Imágenes — next/image obligatorio

```tsx
// ✅ Siempre next/image para imágenes informativas
import Image from 'next/image'
<Image
  src="/photos/clinic-exterior.jpg"
  alt={ALT_TEXTS.clinicExterior}   // ← de lib/altText.ts
  width={1440}
  height={547}
  priority                          // ← solo en hero above-the-fold
  className="object-cover w-full"
/>

// ✅ Decorativas — background gradient o div con role="presentation"
<div role="presentation" aria-hidden="true" style={{ backgroundImage: '...' }} />

// ❌ Nunca <img> para contenido informativo
// ❌ Nunca alt="" en imágenes con contenido
```

- `priority` solo en la imagen LCP (hero above-the-fold por página)
- `sizes` siempre en imágenes que cambian de tamaño entre breakpoints
- Alt texts: definir en `lib/altText.ts`, importar — nunca strings inline en JSX

---

## 7. CSS — reglas estrictas

### Tokens — siempre var(--color-*)
```tsx
// ❌ Nunca hex directo en componentes
className="bg-[#0F1C3F]"

// ✅ Siempre token
className="bg-[var(--color-navy)]"
```

### Font sizes — siempre rem
```tsx
// ❌ Nunca px en texto
className="text-[14px]"

// ✅ Rem
className="text-[0.875rem]"
```

### Gradients — única excepción para inline style
```tsx
// ✅ Los gradients copiados de Figma van en style={}
style={{ backgroundImage: 'linear-gradient(18.43deg, ...)' }}

// Para gradients usados en múltiples componentes → clase en globals.css
.spec-hero-gradient { background-image: linear-gradient(...) }
```

### Layout — contenedor estándar por breakpoint
```tsx
// Ancho de contenido estándar — coincidir con Figma
className="w-full px-4 sm:px-8 lg:px-0 lg:w-[980px] lg:mx-auto"
// Mobile:  100% − 32px padding
// Tablet:  100% − 64px padding
// Desktop: 980px centrado (de 1440px total)
```

### Touch targets — obligatorio en todos los interactivos
```tsx
className="min-h-[48px] min-w-[48px]"
```

---

## 8. Performance

### Lazy loading de secciones below-the-fold
```tsx
// En page.tsx — secciones visibles sin scroll: import estático
import WlsHero from '@/components/sections/spec/SpecHero'

// Secciones below the fold: lazy import
import dynamic from 'next/dynamic'
const SpecWhy  = dynamic(() => import('@/components/sections/spec/SpecWhy'))
const SpecProc = dynamic(() => import('@/components/sections/spec/SpecProc'))
```

Regla: las primeras 2 secciones de cada página → import estático. El resto → `dynamic`.

### Framer Motion — solo donde aporta valor
```tsx
// ✅ Motion solo en Client Components — viewport animations para secciones
'use client'
import { motion } from 'framer-motion'

// Patrón estándar: fade-up al entrar en viewport
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>

// ✅ Siempre respetar prefers-reduced-motion
import { useReducedMotion } from 'framer-motion'
const reduced = useReducedMotion()
const variants = reduced ? {} : fadeUp
```

- `viewport={{ once: true }}` siempre — no re-animar en scroll down
- No animar elementos above-the-fold (afecta LCP)
- No wrappear secciones enteras en motion si solo un elemento debe animar

---

## 9. SEO, GEO y AI Schema — estándar obligatorio

### 9a. Metadata por página
```tsx
export const metadata: Metadata = {
  title: 'Weight Loss Surgery in Tijuana, Mexico',  // → "... | Russald Medical Center"
  description: 'Benefit-forward, max 155 chars. Incluir procedimiento + ciudad + diferenciador.',
  alternates: { canonical: '/weight-loss' },         // siempre relativo — metadataBase lo resuelve
  openGraph: {
    title:       'Weight Loss Surgery in Tijuana | Russald Medical Center',
    description: '...',
    url:         '/weight-loss',
  },
}
```

### 9b. JSON-LD — 3 scripts obligatorios en toda página de especialidad

Cada `page.tsx` de especialidad debe incluir **los 3 scripts**:

```tsx
import { procedureSchema, breadcrumbSchema, medicalWebPageSchema } from '@/lib/schema'

// 1. MedicalProcedure
const jsonLd = procedureSchema('Weight Loss Surgery', pageData.intro.paragraphs[0], '/weight-loss')

// 2. BreadcrumbList — mejora navegación en Google y citas en AI
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                url: 'https://russaldmedical.com' },
  { name: 'Weight Loss Surgery', url: 'https://russaldmedical.com/weight-loss' },
])

// 3. MedicalWebPage — señal de revisión médica para E-E-A-T y AI
const webPage = medicalWebPageSchema({
  name:        'Weight Loss Surgery in Tijuana, Mexico',
  description: pageData.intro.paragraphs[0],
  path:        '/weight-loss',
  specialty:   'Bariatric Surgery',  // e.g. 'Plastic Surgery', 'Hair Restoration'
})

// En el JSX — nunca en layout.tsx, siempre en page.tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
```

### 9c. Funciones disponibles en `lib/schema.ts`

| Función | Cuándo usar |
|---|---|
| `organizationSchema()` | Solo en `layout.tsx` — global, una vez |
| `procedureSchema(name, desc, path)` | En toda página de especialidad (weight-loss, plastic-surgery…) |
| `breadcrumbSchema(crumbs[])` | En toda página de especialidad y sub-procedimiento |
| `medicalWebPageSchema(params)` | En toda página de especialidad — E-E-A-T + AI citation |
| `contactPageSchema()` | Solo en `/free-evaluation/page.tsx` |

### 9d. GEO — pendientes antes de producción real

Los siguientes campos están comentados en `organizationSchema()` — completar con datos del Google Business Profile:

```ts
// TODO en lib/schema.ts:
geo: { '@type': 'GeoCoordinates', latitude: '32.XXXX', longitude: '-117.XXXX' }
address.streetAddress: 'Ave. [dirección exacta]'
address.postalCode: '220XX'
openingHoursSpecification: [{ dayOfWeek: [...], opens: '09:00', closes: '18:00' }]

// TODO en app/layout.tsx:
<meta name="geo.position" content="32.XXXX;-117.XXXX" />
<meta name="ICBM" content="32.XXXX, -117.XXXX" />
```

### 9e. AI / LLM Optimization (Generative Engine Optimization)

Para que ChatGPT, Perplexity y Google AI Overviews citen a Russald:

- **FAQPage schema** — cuando se construya `/faq`, cada Q&A debe estar en schema `FAQPage > Question > Answer`
- **Primer párrafo de intro** — siempre debe contener: nombre del procedimiento + ciudad + diferenciador de precio + acceso desde EE.UU. (los LLMs citan la primera oración)
- **Datos citables** — porcentajes concretos (`65–75% less`), tiempos (`2–4 hrs`), distancia (`20 min from San Diego`) — nunca frases vagas
- **sameAs** — agregar perfiles verificados cuando estén disponibles: Instagram oficial, Trustpilot, RealSelf
- **Página `/about`** — pendiente de crear; es el anchor de entidad de conocimiento para el knowledge graph

### 9f. Sitemap — reglas de mantenimiento

- **Fechas estáticas**: usar constante `DATES.xxx` en `sitemap.ts`, nunca `new Date()`
- **Actualizar `DATES.procedures`** cada vez que se publique o actualice una página de procedimiento
- **Nueva página de especialidad** → agregar entrada en sitemap con `priority: 0.9` y `changeFrequency: 'weekly'`
- **Nuevo sub-procedimiento** → agregar con `priority: 0.8` y `changeFrequency: 'monthly'`
- **Coming soon** (catch-all): no agregar al sitemap hasta que tenga contenido real

---

## 10. Accesibilidad — obligatorio en cada componente

- `<html lang="en">` en layout.tsx
- Skip link como primer elemento del body
- `role="main"` + `id="main-content"` en `<main>`
- `aria-label="Main navigation"` en `<nav>`
- Cada `<section>` debe tener `aria-labelledby` apuntando a su heading
- Heading hierarchy: **una sola `<h1>` por página** — las secciones usan `<h2>`, `<h3>`
- Inputs: `<label htmlFor>` + `aria-required` + `aria-describedby` para errores
- Imágenes informativas: alt descriptivo en `lib/altText.ts`
- Imágenes decorativas: `alt="" role="presentation"`
- `:focus-visible` con `outline: 3px solid var(--color-blue-action)` — ya en globals.css
- `aria-current="page"` en el nav link activo
- Listas de tarjetas: `role="list"` en contenedor, `role="listitem"` en cada hijo

---

## 11. Estructura de carpetas — objetivo

```
src/
├── styles/
│   └── globals.css              ← tokens @theme + clases de gradient
├── types/
│   └── spec.ts                  ← interfaces SpecHeroData, SpecPageData, etc.
├── lib/
│   ├── config.ts                ← env vars (ZAPIER_WEBHOOK_URL, LEADS_ENABLED)
│   ├── schema.ts                ← JSON-LD: organizationSchema, medicalProcedureSchema
│   ├── altText.ts               ← alt texts tipados — nunca strings inline en JSX
│   └── pages/                   ← datos de contenido por página
│       ├── weightLoss.ts
│       ├── plasticSurgery.ts
│       └── hairRestoration.ts
├── components/
│   ├── ui/                      ← átomos sin lógica de negocio
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── SpecialtyCard.tsx
│   ├── layout/                  ← chrome del sitio
│   │   ├── Header.tsx
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── spec/                ← templates reutilizables para páginas internas
│   │   │   ├── SpecHero.tsx         (refactor de WlsHero)
│   │   │   ├── SpecFactsStrip.tsx   (refactor de WlsFactsStrip)
│   │   │   ├── SpecIntro.tsx        (refactor de WlsIntro)
│   │   │   ├── SpecWhy.tsx          (refactor de WlsWhy)
│   │   │   ├── SpecProc.tsx         (refactor de WlsProc)
│   │   │   └── SpecFloatCta.tsx     (refactor de WlsFloatCta)
│   │   ├── HomeHero.tsx         ← secciones únicas de Home
│   │   ├── HomeWho.tsx
│   │   ├── HomeWhy.tsx
│   │   ├── HomeSpecialties.tsx
│   │   ├── BioBreaker.tsx
│   │   ├── HimplantCallout.tsx
│   │   ├── LocationStrip.tsx
│   │   ├── HomeJourney.tsx
│   │   ├── HomeProcedures.tsx
│   │   └── EvalFormSection.tsx  ← compartida entre Home y páginas internas
│   ├── EvaluationForm.tsx       ← lógica del formulario 2 pasos ('use client')
│   └── SpecFloatCta.tsx         ← widget flotante ('use client')
└── app/
    ├── layout.tsx
    ├── page.tsx                  ← Home
    ├── sitemap.ts
    ├── robots.ts
    ├── api/leads/route.ts
    ├── weight-loss/page.tsx
    ├── plastic-surgery/page.tsx
    ├── hair-restoration/page.tsx
    └── [...slug]/page.tsx        ← catch-all para páginas aún no construidas
```

---

## 12. Tokens del Figma

```css
/* globals.css @theme */
--color-navy:        #0F1C3F;
--color-charcoal:    #0F172A;
--color-blue:        #1D56C4;
--color-blue-action: #2563EB;
--color-blue-light:  #93C5FD;
--color-gold:        #B5862A;
--color-muted:       #64748B;
--color-border:      #E2E8F0;
--color-white:       #FFFFFF;
--color-ice:         #F8FAFC;
--font-display:      'Rethink Sans', sans-serif;
--font-body:         'Nunito Sans', sans-serif;
--radius-btn:        50px;
--radius-card:       12px;
```

---

## 13. Breakpoints responsive — coincidir con Figma

| Breakpoint | Tailwind | Figma frame | Contenido |
|---|---|---|---|
| Mobile | default (< 640px) | 390px | 100% − px-4 |
| Tablet | `sm:` 640px | 834px | 100% − px-8 |
| Desktop | `lg:` 1024px | 1440px | 980px centrado |

---

## 14. Tabla de Node IDs — Home

| Componente | Archivo | Desktop | Tablet | Mobile |
|---|---|---|---|---|
| Header completo | layout/Header.tsx | `116:2` | `2013:12` | `118:2` |
| Util-Bar | layout/Header.tsx | `2300:877` | `2321:894` | `2334:1549` |
| Trust-Bar | layout/Header.tsx | `2300:883` | `2321:900` | — (oculto) |
| Logo-Row | layout/Header.tsx | `2300:894` | — (en Nav) | — (en Nav) |
| Navigation | layout/Nav.tsx | `2006:2` | `2013:6` | `2006:3` |
| Home-Hero | sections/HomeHero.tsx | `2300:705` | `2323:975` | `2334:1555` |
| Home-Who | sections/HomeWho.tsx | `2298:721` | `2330:1076` | `2337:1721` |
| Home-Why | sections/HomeWhy.tsx | `2298:755` | `2330:1110` | `2337:1755` |
| Home-Specialties | sections/HomeSpecialties.tsx | `2298:795` | `2330:1152` | `2337:1791` |
| Bio-Breaker | sections/BioBreaker.tsx | `2298:875` | `2330:1233` | `2337:1871` |
| HIMPLANT-Callout | sections/HimplantCallout.tsx | `2298:939` | `2330:1297` | `2337:1934` |
| Location-Strip | sections/LocationStrip.tsx | `2298:951` | `2330:1309` | `2337:1946` |
| Home-Journey | sections/HomeJourney.tsx | `2298:970` | `2330:1326` | `2337:1964` |
| Home-Procedures | sections/HomeProcedures.tsx | `2298:1011` | `2330:1367` | `2337:2003` |
| Eval-Form | sections/EvalFormSection.tsx | `2300:720` | `2323:988` | `2334:1568` |
| Footer | layout/Footer.tsx | `2300:810` | `2322:909` | `2334:1658` |

## 14b. Tabla de Node IDs — Weight Loss Surgery (canvas `2143:7`)

| Componente | Archivo destino | Desktop | Tablet | Mobile |
|---|---|---|---|---|
| Spec-Hero | sections/spec/SpecHero.tsx | `2143:243` | `2201:378` | `2156:222` |
| Spec-Facts-Strip | sections/spec/SpecFactsStrip.tsx | `2143:277` | `2284:888` | `2169:46` |
| Spec-Intro | sections/spec/SpecIntro.tsx | `2143:291` | `2284:902` | `2169:61` |
| Spec-Why | sections/spec/SpecWhy.tsx | `2143:325` | `2208:483` | `2169:93` |
| Spec-Proc | sections/spec/SpecProc.tsx | `2143:358` | `2208:517` | `2169:130` |
| Spec-Float-CTA | SpecFloatCta.tsx | `2143:414` | `2216:550` | `2144:385` |

---

## 15. Git workflow

```
main  → producción (russaldmedical.com)
qa    → staging    (qa-russald.vercel.app)
dev   → integración
feat/[componente] → trabajo individual
```

- Nunca push directo a `main` ni `qa`
- Siempre branch desde `dev`
- Nombre de branch: `feat/weight-loss` · `feat/spec-templates` · `fix/nav-links`
- Commit: `feat: SpecHero template — Figma node 2143:243`

---

## 16. PR checklist — antes de merge a qa

- [ ] Coincide visualmente con Figma (Desktop + Tablet + Mobile)
- [ ] Sin hex hardcodeados — solo `var(--color-*)`
- [ ] Font sizes en `rem`
- [ ] Touch targets `min-h-[48px]`
- [ ] `<h1>` única por página, jerarquía h2/h3 correcta
- [ ] Alt texts en `lib/altText.ts`
- [ ] `aria-labelledby` en cada `<section>`
- [ ] Sin errores TypeScript (`tsc --noEmit` limpio)
- [ ] Imágenes con `<Image>` de next/image
- [ ] `'use client'` solo donde es necesario
- [ ] Lighthouse Accessibility ≥ 95

---

## 17. Webhook — cableado pero inactivo

```
LEADS_ENABLED=false  → dev y local → dry-run (console.log)
LEADS_ENABLED=true   → main únicamente, cuando el equipo confirme el URL
```

---

## 18. Backlog

> Regla: solo tareas pendientes — las terminadas se eliminan. El historial queda en `git log`.
> Actualizar al cerrar cada sesión de trabajo.

| Tarea | Estado | Notas |
|---|---|---|
| `/mens-health` page | En QA — revisar visualmente | Contenido del HTML vFinal |
| `/vascular-care` page | En QA — revisar visualmente | Contenido del HTML vFinal |
| `/bio-optimization` page | Pendiente | |
| `/about` full | Pendiente | Placeholder Coming Soon listo |
| `og-image.jpg` 1200×630 | Pendiente | Necesita diseño — actualmente usa placeholder |
| Trustpilot / RealSelf en `sameAs` | Pendiente | Agregar a `site.ts` cuando haya perfil verificado |
| `qa` → `main` merge | Listo para merge | Revisar QA staging primero |
