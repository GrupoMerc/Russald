# Russald Medical — CLAUDE.md
> Fuente de verdad para Claude en VSCode. Leer completo antes de generar cualquier código.

## Proyecto
- **Sitio:** https://russaldmedical.com
- **Repo:** github.com/GrupoMerc/Russald
- **Deploy:** Vercel (auto-deploy push a main)
- **Stack:** Next.js 15 · App Router · Tailwind CSS v4 · TypeScript strict · Framer Motion

## Figma — fuente de verdad visual
**URL:** https://www.figma.com/design/aJSYRFsGTo30GNSYrtrw1u/Rusald-Medical
**File key:** `aJSYRFsGTo30GNSYrtrw1u`

### Regla absoluta
Cada componente React mapea 1:1 a un node de Figma.
No crear, renombrar ni inventar componentes sin node ID de referencia.
Agregar el node ID como comentario en la línea 1 de cada componente:
```tsx
// Figma node: 2300:705 — Section/Home-Hero
```

### Cómo extraer un componente del Figma
1. Llamar `get_design_context` con Desktop node ID
2. Llamar `get_design_context` con Tablet node ID  
3. Llamar `get_design_context` con Mobile node ID
4. Generar UN solo componente .tsx con las 3 variantes via Tailwind responsive
5. Nunca crear 3 archivos separados por breakpoint

## Tabla de Node IDs — completa y verificada

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

### Página: Weight Loss Surgery (`app/weight-loss-surgery/`) — Figma canvas `2143:7`

| Componente | Archivo | Desktop | Tablet | Mobile |
|---|---|---|---|---|
| WLS-Hero | sections/WlsHero.tsx | `2143:243` | `2201:378` | `2156:222` |
| WLS-Facts-Strip | sections/WlsFactsStrip.tsx | `2143:277` | `2284:888` | `2169:46` |
| WLS-Intro | sections/WlsIntro.tsx | `2143:291` | `2284:902` | `2169:61` |
| WLS-Why | sections/WlsWhy.tsx | `2143:325` | `2208:483` | `2169:93` |
| WLS-Proc | sections/WlsProc.tsx | `2143:358` | `2208:517` | `2169:130` |
| WLS-Float-CTA | WlsFloatCta.tsx | `2143:414` | `2216:550` | `2144:385` |

## Estructura de carpetas
```
src/
├── styles/
│   └── globals.css          ← tokens @theme — NUNCA hardcodear hex en componentes
├── components/
│   ├── ui/                  ← átomos reutilizables
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── SpecialtyCard.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── sections/            ← una sección = un archivo = un node Figma
│   │   ├── HomeHero.tsx
│   │   ├── HomeWho.tsx
│   │   ├── HomeWhy.tsx
│   │   ├── HomeSpecialties.tsx
│   │   ├── BioBreaker.tsx
│   │   ├── HimplantCallout.tsx
│   │   ├── LocationStrip.tsx
│   │   ├── HomeJourney.tsx
│   │   ├── HomeProcedures.tsx
│   │   └── EvalFormSection.tsx
│   └── EvaluationForm.tsx   ← lógica del formulario 2 pasos
├── lib/
│   ├── config.ts            ← ZAPIER_WEBHOOK_URL + LEADS_ENABLED
│   ├── schema.ts            ← JSON-LD functions
│   └── altText.ts           ← alt texts tipados — nunca hardcodear en JSX
└── app/
    ├── layout.tsx
    ├── page.tsx
    ├── sitemap.ts
    ├── robots.ts
    ├── api/leads/route.ts
    └── [slug]/page.tsx
```

## Reglas CSS — seguir estrictamente
- Tokens en `globals.css @theme` — nunca hex en componentes
- Usar `var(--color-*)` para colores de marca
- Tailwind utilities para layout y espaciado
- Todos los font-size en `rem` — nunca `px` en body text
- `backgroundImage` gradients: única excepción para inline styles (copiados de Figma)
- Touch targets: `min-h-[48px] min-w-[48px]` en todos los interactivos

## Tokens del Figma (extraídos — usar en globals.css @theme)
```css
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

## Breakpoints responsive — coincidir con Figma
```
Mobile:  < 640px   → Figma frame 390px  → default (mobile-first)
Tablet:  sm: 640px → Figma frame 834px
Desktop: lg: 1024px → Figma frame 1440px
```

## Accesibilidad — obligatorio en cada componente
- `<html lang="en">` en layout.tsx
- Skip link como primer elemento del body
- `role="main"` en `<main id="main-content">`
- `aria-label="Main navigation"` en `<nav>`
- Cada input: `label[htmlFor]` + `aria-required` + `aria-describedby`
- Imágenes informativas: alt descriptivo en `lib/altText.ts`
- Imágenes decorativas: `alt="" role="presentation"`
- `:focus-visible` con outline 3px en globals.css

## Git workflow — 2 personas
```
main  → producción (russaldmedical.com)
qa    → staging    (qa-russald.vercel.app)
dev   → integración
feat/[componente] → trabajo individual
```
- Nunca push directo a main ni qa
- Siempre branch desde dev
- Nombre de branch = nombre del componente: `feat/home-hero`
- Commit: `feat: HomeHero — Figma node 2300:705`

## PR checklist — antes de merge a qa
- [ ] Componente coincide visualmente con Figma (Desktop + Tablet + Mobile)
- [ ] Sin hex hardcodeados — solo `var(--color-*)`
- [ ] Font sizes en rem
- [ ] Touch targets min-h-[48px]
- [ ] Alt texts en lib/altText.ts
- [ ] aria-label / aria-required en form fields
- [ ] Sin errores TypeScript
- [ ] Lighthouse Accessibility ≥ 95

## Orden de extracción de componentes
1. `ui/Button.tsx` — desde node Hero `2300:705`
2. `ui/Input.tsx` + `ui/Select.tsx`
3. `ui/SpecialtyCard.tsx` — desde node `2298:252`
4. `layout/Header.tsx` — node `116:2`
5. `layout/Nav.tsx` — node `2006:2`
6. `layout/Footer.tsx` — node `2300:810`
7. `app/layout.tsx`
8. `sections/HomeHero.tsx` — node `2300:705`
9. Resto de secciones en orden de la tabla
10. `EvaluationForm.tsx` — corazón del sitio

## Webhook — cableado pero inactivo
`LEADS_ENABLED=false` en dev y local → dry-run (console.log)
`LEADS_ENABLED=true` solo en main cuando el equipo confirme el webhook URL
