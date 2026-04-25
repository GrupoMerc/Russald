// Contenido de la página Vascular Care
// Fuente: russald_vFinal.html → specialty 'vascular'

import type { SpecPageData } from '@/types/spec'

export const vascularData = {
  hero: {
    pageLabel:   'Vascular Care',
    eyebrowTag:  'Vascular Care · Tijuana, Mexico',
    heading:     'Minimally Invasive Vascular Treatment: No Surgery Required',
    description:
      'EVLA (Endovenous Laser Ablation) and sclerotherapy for varicose veins and spider veins — ' +
      'performed by specialist physicians at Russald Medical Center in Tijuana, Mexico. ' +
      'Effective, outpatient-friendly treatment at 60–75% below US vascular clinic pricing.',
    stats: [
      { icon: '🏥', value: 'Outpatient',         label: 'No Hospitalization'   },
      { icon: '🩸', value: 'EVLA & Sclero',      label: 'Techniques Available' },
      { icon: '💰', value: '60–75%',             label: 'Less Than US Clinics' },
      { icon: '🚶', value: 'Same Day',            label: 'Return to Ambulation' },
    ],
  },

  facts: [
    { value: 'Outpatient',    label: 'No Hospitalization'   },
    { value: 'EVLA & Sclero', label: 'Techniques Available' },
    { value: '60–75%',        label: 'Less Than US Clinics' },
    { value: 'Same Day',      label: 'Return to Ambulation' },
  ],

  intro: {
    eyebrow: 'Vascular Care',
    heading: 'Treating Varicose Veins: Where Comfort Meets Clinical Results',
    paragraphs: [
      'Varicose veins and chronic venous insufficiency affect millions of adults — causing pain, swelling, ' +
      'heaviness, and progressive skin changes when left untreated. Both EVLA and sclerotherapy are ' +
      'minimally invasive, clinically proven outpatient procedures that address the underlying venous ' +
      'reflux without general anesthesia or hospitalization.',
      'EVLA uses laser energy delivered via a catheter inside the affected vein to close it permanently, ' +
      'redirecting blood flow through healthy veins. It is the gold standard for treating larger varicose ' +
      'veins and great saphenous vein reflux. Sclerotherapy involves injecting a sclerosant agent directly ' +
      'into smaller varicose or spider veins, causing them to collapse and fade — typically over 2–6 weeks.',
      'Both procedures are performed under local anesthesia, require no hospital stay, and allow patients ' +
      'to walk immediately after treatment. Most patients return to normal activity within 1–2 days.',
    ],
    candidatesHeading: '🩸  Who Should Consider Treatment?',
    candidates: [
      'Visible varicose veins with associated leg pain, heaviness, or swelling',
      'Spider veins causing cosmetic concern or discomfort',
      'Chronic venous insufficiency confirmed by duplex ultrasound',
      'Skin changes near the ankle indicating advanced venous disease',
      'Patients who have tried compression therapy without adequate relief',
      'Post-thrombotic patients cleared for ablation by vascular evaluation',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to determine candidacy. The information ' +
      'on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Vascular Care?',
    items: [
      {
        icon: '🩸',
        title: 'Specialist Vascular Physicians',
        body:  'Our vascular team specializes in minimally invasive venous treatments. EVLA is performed under ultrasound guidance — the same technique standard at leading US vascular centers.',
      },
      {
        icon: '🏥',
        title: 'Outpatient — No Hospitalization',
        body:  'Both EVLA and sclerotherapy are performed in our outpatient facility under local anesthesia. No general anesthesia, no hospital admission, no overnight stay required.',
      },
      {
        icon: '💰',
        title: '60–75% Below US Vascular Clinic Pricing',
        body:  'EVLA in the US commonly costs $3,000–$7,000 per leg without insurance. At Russald Medical Center, the same ultrasound-guided procedure is available at a fraction of that cost.',
      },
      {
        icon: '🚶',
        title: 'Same-Day Ambulation',
        body:  'Patients walk immediately after EVLA and sclerotherapy. A compression garment is applied at the clinic. Most patients return to normal activity within 1–2 days.',
      },
      {
        icon: '🔬',
        title: 'Duplex Ultrasound Evaluation',
        body:  'Candidacy for EVLA requires vein mapping with duplex ultrasound to identify the source of reflux. This evaluation is part of the pre-treatment workup at Russald.',
      },
      {
        icon: '📍',
        title: 'Minutes from San Diego',
        body:  'Vascular treatment at Russald Medical Center can be completed in a single day trip for most San Diego-area patients, or a short 1–2 day visit for those traveling from further.',
      },
    ],
  },

  proc: {
    eyebrow:     'Vascular Care Procedures',
    heading:     'Available Vascular Care Procedures',
    description: 'Each procedure page includes full clinical information, candidacy criteria, the step-by-step process, recovery timeline, pricing context, and answers to the most common patient questions.',
    procedures: [
      { icon: '🩸', title: 'EVLA (Varicose Veins)', category: 'Vascular Care', href: '/vascular-care/evla'          },
      { icon: '💉', title: 'Sclerotherapy',          category: 'Vascular Care', href: '/vascular-care/sclerotherapy' },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Vascular Care in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does EVLA varicose vein treatment cost in Tijuana?',
        a: 'EVLA at Russald Medical Center costs 60–75% less than US vascular clinics, where the procedure commonly runs $3,000–$7,000 per leg without insurance. Your coordinator provides a detailed quote after your duplex ultrasound evaluation determines the extent of treatment needed.',
      },
      {
        q: 'Is EVLA painful?',
        a: 'EVLA is performed under local tumescent anesthesia, which numbs the area around the vein. Most patients report mild pressure or warmth during the procedure with minimal discomfort. Walking begins immediately after, and patients are discharged the same day.',
      },
      {
        q: 'Do I need to stay overnight in Tijuana for vascular treatment?',
        a: 'No. Both EVLA and sclerotherapy are outpatient procedures — you walk out of the clinic the same day. Most San Diego-area patients treat it as a day trip. Those traveling from further typically stay 1–2 nights.',
      },
      {
        q: 'What is the difference between EVLA and sclerotherapy?',
        a: 'EVLA uses laser energy delivered via a thin catheter to permanently close larger varicose veins and incompetent saphenous veins. Sclerotherapy uses a chemical injection to eliminate smaller varicose and spider veins. The two procedures complement each other — EVLA addresses the root reflux, sclerotherapy clears the remaining surface veins.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'EVLA typically requires 1–2 sessions depending on the number of veins affected. Sclerotherapy may require 2–4 sessions spaced 4–6 weeks apart for comprehensive spider vein clearance. Your treatment plan is defined after duplex ultrasound vein mapping.',
      },
      {
        q: 'Will varicose veins come back after treatment?',
        a: 'EVLA and sclerotherapy permanently close the treated veins — they do not reopen. However, new varicose veins can develop over time in other veins, particularly with prolonged standing, pregnancy, or genetic predisposition. Most patients maintain results with compression stockings and activity modifications.',
      },
      {
        q: 'Can I combine vascular treatment with another procedure at Russald?',
        a: 'Yes. Sclerotherapy in particular is commonly combined with other outpatient procedures during the same visit. EVLA combination depends on your overall clinical evaluation. Your coordinator can advise on scheduling based on your specific treatment plan.',
      },
    ],
  },
} satisfies SpecPageData
