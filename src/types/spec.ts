// Tipos para páginas internas de especialidad (Spec-page templates)

export interface SpecStat {
  readonly icon: string
  readonly value: string
  readonly label: string
}

export interface SpecFact {
  readonly value: string
  readonly label: string
}

export interface SpecWhyItem {
  readonly icon: string
  readonly title: string
  readonly body: string
}

export interface SpecProcItem {
  readonly icon: string
  readonly title: string
  readonly category: string
  readonly href?: string
}

export interface SpecHeroData {
  readonly pageLabel: string       // breadcrumb + aria — "Weight Loss Surgery"
  readonly eyebrowTag: string      // pill sobre el H1 — "Bariatric Surgery · Tijuana"
  readonly heading: string
  readonly description: string
  readonly stats: ReadonlyArray<SpecStat>
}

export interface SpecIntroData {
  readonly eyebrow: string         // sobre el H2 — "Weight Loss Surgery"
  readonly heading: string
  readonly paragraphs: ReadonlyArray<string>
  readonly candidatesHeading: string
  readonly candidates: ReadonlyArray<string>
  readonly disclaimer: string
}

export interface SpecWhyData {
  readonly eyebrow: string         // "Why Russald Medical Center"
  readonly heading: string         // "Why Choose Us for Weight Loss Surgery?"
  readonly items: ReadonlyArray<SpecWhyItem>
}

export interface SpecProcData {
  readonly eyebrow: string
  readonly heading: string
  readonly description: string
  readonly procedures: ReadonlyArray<SpecProcItem>
}

export interface SpecFaqItem {
  readonly q: string
  readonly a: string
}

export interface SpecFaqData {
  readonly eyebrow: string
  readonly heading: string
  readonly items: ReadonlyArray<SpecFaqItem>
}

export interface SpecPageData {
  readonly hero: SpecHeroData
  readonly facts: ReadonlyArray<SpecFact>
  readonly intro: SpecIntroData
  readonly why: SpecWhyData
  readonly proc: SpecProcData
  readonly faq: SpecFaqData
}

// Sub-procedure pages — same layout as SpecPageData but without the procedures grid
export interface SubProcPageData {
  readonly hero:  SpecHeroData
  readonly facts: ReadonlyArray<SpecFact>
  readonly intro: SpecIntroData
  readonly why:   SpecWhyData
  readonly faq:   SpecFaqData
}
