import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'

const BASE = SITE.url

// Fechas estáticas por sección — actualizar al publicar cambios significativos
const DATES = {
  home:          '2026-04-25',
  specialties:   '2026-04-25',
  procedures:    '2026-04-25',
  vascularCare:  '2026-04-25',
  support:       '2026-04-25',
  legal:         '2026-04-25',
} as const

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Páginas principales ──────────────────────────────────────────────────
    { url: BASE,                          lastModified: DATES.home,        changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/free-evaluation`,     lastModified: DATES.home,        changeFrequency: 'monthly', priority: 0.9 },

    // ── Páginas de especialidad ──────────────────────────────────────────────
    { url: `${BASE}/weight-loss`,         lastModified: DATES.specialties, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/plastic-surgery`,     lastModified: DATES.specialties, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/hair-restoration`,    lastModified: DATES.specialties, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/mens-health`,         lastModified: DATES.specialties, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/vascular-care`,       lastModified: DATES.vascularCare, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/bio-optimization`,    lastModified: DATES.specialties, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/orthopedics`,         lastModified: DATES.specialties, changeFrequency: 'monthly', priority: 0.8 },

    // ── About / Soporte ───────────────────────────────────────────────────────
    { url: `${BASE}/medical-team`,      lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/our-patients`,      lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/patient-resources`, lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/our-facilities`,    lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/faq`,               lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.6 },

    // ── Legal ─────────────────────────────────────────────────────────────────
    { url: `${BASE}/legal/terms`,              lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/privacy`,            lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/medical-disclaimer`, lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/booking`,            lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/disputes`,           lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/cross-border`,       lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/assessment`,         lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // ── Sub-procedimientos — descomentar cuando cada page.tsx exista ────────────
  // Regla: no agregar al sitemap hasta que la ruta tenga contenido real
  // (catch-all [...slug] no cuenta — ver CLAUDE.md §9f)
  //
  // Weight Loss
  // { url: `${BASE}/weight-loss/gastric-sleeve`,      ... priority: 0.8 },
  // { url: `${BASE}/weight-loss/gastric-bypass`,      ... priority: 0.8 },
  // { url: `${BASE}/weight-loss/mini-gastric-bypass`, ... priority: 0.8 },
  // { url: `${BASE}/weight-loss/lap-band`,            ... priority: 0.7 },
  // { url: `${BASE}/weight-loss/bariatric-revision`,  ... priority: 0.7 },
  //
  // Plastic Surgery
  // { url: `${BASE}/plastic-surgery/mommy-makeover`,      ... priority: 0.8 },
  // { url: `${BASE}/plastic-surgery/tummy-tuck`,          ... priority: 0.8 },
  // { url: `${BASE}/plastic-surgery/liposuction`,         ... priority: 0.8 },
  // { url: `${BASE}/plastic-surgery/bbl`,                 ... priority: 0.8 },
  // { url: `${BASE}/plastic-surgery/breast-augmentation`, ... priority: 0.8 },
  // { url: `${BASE}/plastic-surgery/rhinoplasty`,         ... priority: 0.8 },
  // { url: `${BASE}/plastic-surgery/facelift`,            ... priority: 0.7 },
  //
  // Hair & Regenerative
  // { url: `${BASE}/hair-restoration/fue`, ... priority: 0.8 },
  // { url: `${BASE}/hair-restoration/dhi`, ... priority: 0.7 },
  // { url: `${BASE}/hair-restoration/prp`, ... priority: 0.6 },
  //
  // Men's Health
  // { url: `${BASE}/mens-health/implant`,              ... priority: 0.8 },
  // { url: `${BASE}/mens-health/erectile-dysfunction`, ... priority: 0.7 },
  // { url: `${BASE}/mens-health/testosterone`,         ... priority: 0.7 },
  //
  // Vascular Care  ← clasificación corregida (antes estaban bajo /mens-health/)
  // { url: `${BASE}/vascular-care/evla`,          ... priority: 0.7 },
  // { url: `${BASE}/vascular-care/sclerotherapy`, ... priority: 0.6 },
  //
  // Bio-Optimization
  // { url: `${BASE}/bio-optimization/bhrt`,           ... priority: 0.7 },
  // { url: `${BASE}/bio-optimization/hgh`,            ... priority: 0.7 },
  // { url: `${BASE}/bio-optimization/myers-cocktail`, ... priority: 0.6 },
}
