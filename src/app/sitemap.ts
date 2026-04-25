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
    { url: `${BASE}/patient-resources`, lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/our-facilities`,    lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/faq`,               lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/about`,             lastModified: DATES.support, changeFrequency: 'monthly', priority: 0.7 },

    // ── Legal ─────────────────────────────────────────────────────────────────
    { url: `${BASE}/legal/terms`,              lastModified: DATES.legal,      changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/legal/privacy`,            lastModified: DATES.legal,      changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/legal/medical-disclaimer`, lastModified: DATES.legal,      changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/legal/booking`,            lastModified: DATES.legal,      changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/legal/disputes`,           lastModified: DATES.legal,      changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/legal/cross-border`,       lastModified: DATES.legal,      changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/legal/assessment`,         lastModified: DATES.legal,      changeFrequency: 'yearly',  priority: 0.3 },

    // ── Sub-procedimientos Weight Loss ────────────────────────────────────────
    { url: `${BASE}/weight-loss/gastric-sleeve`,      lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/weight-loss/gastric-bypass`,      lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/weight-loss/mini-gastric-bypass`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/weight-loss/lap-band`,            lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/weight-loss/bariatric-revision`,  lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },

    // ── Sub-procedimientos Plastic Surgery ────────────────────────────────────
    { url: `${BASE}/plastic-surgery/mommy-makeover`,      lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/tummy-tuck`,          lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/liposuction`,         lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/bbl`,                 lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/breast-augmentation`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/rhinoplasty`,         lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plastic-surgery/facelift`,            lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },

    // ── Sub-procedimientos Hair Restoration ───────────────────────────────────
    { url: `${BASE}/hair-restoration/fue`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hair-restoration/dhi`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/hair-restoration/prp`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },

    // ── Sub-procedimientos Men's Health ───────────────────────────────────────
    { url: `${BASE}/mens-health/implant`,              lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/mens-health/erectile-dysfunction`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/mens-health/testosterone`,         lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/mens-health/p-shot`,               lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },

    // ── Sub-procedimientos Vascular Care ─────────────────────────────────────
    { url: `${BASE}/vascular-care/evla`,          lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/vascular-care/sclerotherapy`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },

    // ── Sub-procedimientos Bio Optimization ──────────────────────────────────
    { url: `${BASE}/bio-optimization/hgh`,            lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/bio-optimization/bhrt`,           lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/bio-optimization/trt`,            lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/bio-optimization/myers-cocktail`, lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/bio-optimization/nad-iv`,         lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/bio-optimization/prp`,            lastModified: DATES.procedures, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
