// Sub-procedimientos de Vascular Care
// Fuente: russald_vFinal.html → renderEVLA / renderSclerotherapy

import type { SubProcPageData, SpecWhyItem } from '@/types/spec'

const WHY: readonly SpecWhyItem[] = [
  {
    icon:  '🔬',
    title: 'Specialist Vascular Physicians',
    body:  'Our vascular team specializes in minimally invasive venous treatments. EVLA is performed under ultrasound guidance — the same technique standard at leading US vascular centers.',
  },
  {
    icon:  '🏥',
    title: 'Outpatient — No Hospitalization',
    body:  'Both EVLA and sclerotherapy are performed in our outpatient facility under local anesthesia. No general anesthesia, no hospital admission, no overnight stay required.',
  },
  {
    icon:  '💰',
    title: '60–75% Below US Vascular Clinic Pricing',
    body:  'EVLA in the US commonly costs $3,000–$7,000 per leg without insurance. At Russald Medical Center, the same ultrasound-guided procedure is available at a fraction of that cost.',
  },
  {
    icon:  '🚶',
    title: 'Same-Day Ambulation',
    body:  'Patients walk immediately after EVLA and sclerotherapy. A compression garment is applied at the clinic. Most patients return to normal activity within 1–2 days.',
  },
  {
    icon:  '📡',
    title: 'Duplex Ultrasound Evaluation',
    body:  'Candidacy for EVLA requires vein mapping with duplex ultrasound to identify the source of reflux. This evaluation is part of the pre-treatment workup at Russald.',
  },
  {
    icon:  '📍',
    title: 'Minutes from San Diego',
    body:  'Vascular treatment at Russald Medical Center can be completed in a single day trip for most San Diego-area patients, or a short 1–2 day visit for those traveling from further.',
  },
] as const

export const evlaData: SubProcPageData = {
  hero: {
    pageLabel:   'EVLA — Varicose Vein Treatment',
    eyebrowTag:  'Vascular Care · Tijuana, Mexico',
    heading:     'EVLA Varicose Vein Treatment in Tijuana, Mexico',
    description:
      'EVLA (Endovenous Laser Ablation) is a minimally invasive treatment for varicose veins that uses ' +
      'laser energy to close and eliminate diseased veins. At Russald Medical Center in Tijuana, Mexico, ' +
      'it is performed under local anesthesia with minimal downtime.',
    stats: [
      { icon: '⏱️', value: '45–90 min', label: 'Procedure Time' },
      { icon: '🏠', value: 'Same Day',  label: 'Return Home'    },
      { icon: '💼', value: '1–3 days',  label: 'Back to Work'   },
      { icon: '✨', value: 'Low',       label: 'Downtime'       },
    ],
  },

  facts: [
    { value: '45–90 min', label: 'Procedure Time' },
    { value: 'Same Day',  label: 'Return Home'    },
    { value: '1–3 days',  label: 'Back to Work'   },
    { value: 'Low',       label: 'Downtime'       },
  ],

  intro: {
    eyebrow:  'EVLA — Varicose Vein Treatment',
    heading:  'What Is EVLA (Endovenous Laser Ablation)?',
    paragraphs: [
      'EVLA involves inserting a thin laser fiber through a small puncture into the affected vein. ' +
      'Laser energy is delivered along the length of the vein, heating and sealing it shut. Blood is ' +
      'then naturally rerouted through healthier veins. The procedure is performed under local anesthesia ' +
      '(tumescent technique) and typically requires no hospitalization.',
      'EVLA targets the source of varicose veins — venous reflux in the great saphenous or small ' +
      'saphenous vein. By closing the incompetent vein, the downstream varicosities are relieved of ' +
      'the pressure that caused them. Residual spider veins and small surface vessels can be treated ' +
      'with sclerotherapy as a complementary procedure.',
      'EVLA in Tijuana, Mexico at Russald Medical Center offers effective, minimally invasive vein care ' +
      'at a significantly lower cost than US vein clinics. The procedure is suitable for US patients ' +
      'traveling specifically for vein treatment or combining it with another procedure at Russald.',
    ],
    candidatesHeading: '🦵  Who Is a Candidate?',
    candidates: [
      'Great saphenous or small saphenous vein incompetence confirmed on duplex ultrasound',
      'Symptomatic varicose veins: aching, heaviness, swelling, or skin changes',
      'No active deep vein thrombosis (DVT) in the treated leg',
      'Able to walk and wear compression stockings post-procedure',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for EVLA Vein Treatment?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'EVLA Vein Treatment in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does EVLA cost in Tijuana, Mexico?',
        a: 'EVLA vein treatment in Tijuana is significantly less expensive than at US vein clinics, where costs commonly run $3,000–$7,000 per leg without insurance. Contact our team for current pricing.',
      },
      {
        q: 'Is EVLA painful?',
        a: 'EVLA is performed under local tumescent anesthesia, which numbs the area around the vein. Most patients report mild pressure or warmth during the procedure with minimal discomfort.',
      },
      {
        q: 'How many EVLA treatments do I need?',
        a: 'Most patients require 1–2 sessions depending on the number and size of affected veins. Spider veins and residual small veins may be treated with sclerotherapy as a complementary procedure.',
      },
      {
        q: 'Will my varicose veins come back after EVLA?',
        a: 'EVLA permanently closes the treated vein. New varicose veins can develop in other veins over time, particularly with prolonged standing, pregnancy, or genetic predisposition.',
      },
    ],
  },
} satisfies SubProcPageData

export const sclerotherapyData: SubProcPageData = {
  hero: {
    pageLabel:   'Sclerotherapy',
    eyebrowTag:  'Vascular Care · Tijuana, Mexico',
    heading:     'Sclerotherapy for Spider Veins in Tijuana, Mexico',
    description:
      'Sclerotherapy is a minimally invasive treatment for spider veins and small varicose veins that ' +
      'uses a sclerosing solution injected directly into affected veins, causing them to collapse and ' +
      'gradually fade. At Russald Medical Center in Tijuana, Mexico, it is performed in an outpatient setting.',
    stats: [
      { icon: '⏱️', value: '20–45 min', label: 'Session Time'     },
      { icon: '🏠', value: 'Same Day',  label: 'Return Home'      },
      { icon: '💼', value: '1 day',     label: 'Return to Work'   },
      { icon: '✨', value: '2–6 wks',   label: 'Results Visible'  },
    ],
  },

  facts: [
    { value: '20–45 min', label: 'Session Time'    },
    { value: 'Same Day',  label: 'Return Home'     },
    { value: '1 day',     label: 'Return to Work'  },
    { value: '2–6 wks',   label: 'Results Visible' },
  ],

  intro: {
    eyebrow:  'Sclerotherapy',
    heading:  'What Is Sclerotherapy?',
    paragraphs: [
      'Sclerotherapy involves injecting a chemical agent (sclerosant) into spider veins or small ' +
      'varicose veins, irritating the vessel wall and causing the vein to seal shut. The treated vein ' +
      'is absorbed by the body over the following weeks, gradually fading from view. Multiple sessions ' +
      'may be required depending on the extent of involvement.',
      'Sclerotherapy is the gold standard for spider veins (telangiectasias) on the legs — small red, ' +
      'blue, or purple vessels visible at the skin surface. It is also used for reticular veins and ' +
      'small varicose veins not suitable for laser ablation. When combined with EVLA, it provides ' +
      'comprehensive treatment for both the underlying reflux and the surface appearance.',
      'Sclerotherapy in Tijuana, Mexico at Russald Medical Center is offered at significantly lower ' +
      'cost than US vein clinics. It is commonly performed alongside EVLA for comprehensive vein treatment ' +
      'and can be completed in a single outpatient visit.',
    ],
    candidatesHeading: '🦵  Who Is a Candidate?',
    candidates: [
      'Spider veins (telangiectasias) on the legs',
      'Small varicose veins not appropriate for laser ablation',
      'No active skin infection at treatment sites',
      'Not currently pregnant',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Sclerotherapy?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Sclerotherapy in Tijuana — Common Questions',
    items: [
      {
        q: 'How many sclerotherapy sessions do I need?',
        a: 'Most patients require 2–4 sessions for comprehensive spider vein treatment. Sessions are typically spaced 4–6 weeks apart.',
      },
      {
        q: 'Does sclerotherapy hurt?',
        a: 'Most patients describe a mild burning or stinging sensation during injection that resolves quickly. The procedure is well-tolerated without anesthesia.',
      },
      {
        q: 'How much does sclerotherapy cost in Tijuana, Mexico?',
        a: 'Sclerotherapy in Tijuana is significantly less expensive than at US vein clinics. Contact our team for current session pricing.',
      },
      {
        q: 'Can I combine sclerotherapy with EVLA?',
        a: 'Yes. EVLA treats the underlying incompetent vein, and sclerotherapy clears residual spider veins and reticular veins. The combination provides the most comprehensive cosmetic and functional vein result.',
      },
    ],
  },
} satisfies SubProcPageData
