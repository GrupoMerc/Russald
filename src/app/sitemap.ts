import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://russaldmedical.com'

// Fechas estáticas por sección — actualizar al publicar cambios significativos
const DATES = {
  home:        '2026-04-25',
  specialties: '2026-04-25',
  procedures:  '2026-04-25',
  support:     '2026-01-01',
  legal:       '2026-01-01',
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
    { url: `${BASE}/bio-optimization`,    lastModified: DATES.specialties, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/orthopedics`,         lastModified: DATES.specialties, changeFrequency: 'monthly', priority: 0.8 },

    // ── Weight Loss — procedimientos ─────────────────────────────────────────
    { url: `${BASE}/weight-loss/gastric-sleeve`,      lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/weight-loss/gastric-bypass`,      lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/weight-loss/mini-gastric-bypass`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/weight-loss/lap-band`,            lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/weight-loss/bariatric-revision`,  lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },

    // ── Plastic Surgery — procedimientos ─────────────────────────────────────
    { url: `${BASE}/plastic-surgery/mommy-makeover`,     lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/tummy-tuck`,         lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/liposuction`,        lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/bbl`,                lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/breast-augmentation`,lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/rhinoplasty`,        lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/facelift`,           lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },

    // ── Hair & Regenerative ───────────────────────────────────────────────────
    { url: `${BASE}/hair-restoration/fue`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hair-restoration/dhi`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/hair-restoration/prp`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },

    // ── Men's Health ──────────────────────────────────────────────────────────
    { url: `${BASE}/mens-health/implant`,              lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/mens-health/erectile-dysfunction`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/mens-health/testosterone`,         lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/mens-health/evla`,                 lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/mens-health/sclerotherapy`,        lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },

    // ── Bio-Optimization ─────────────────────────────────────────────────────
    { url: `${BASE}/bio-optimization/bhrt`,          lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/bio-optimization/hgh`,           lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/bio-optimization/myers-cocktail`,lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },

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
}
