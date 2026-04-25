// Contenido de la página Men's Health
// Fuente: russald_vFinal.html → specialty 'mens-health'

import type { SpecPageData } from '@/types/spec'

export const mensHealthData = {
  hero: {
    pageLabel:   "Men's Health",
    eyebrowTag:  "Men's Health & Urology · Tijuana, Mexico",
    heading:     'Private. Effective. Permanent.',
    description:
      'From the permanent Male Enhancement Implant program to testosterone replacement and ' +
      'regenerative P-Shot therapy — Russald Medical Center\'s men\'s health program addresses ' +
      'root causes, not symptoms. Confidential from first contact to discharge.',
    stats: [
      { icon: '🔒', value: 'Featured',     label: 'Male Enhancement Implant' },
      { icon: '🤝', value: 'Confidential', label: 'All Consultations'        },
      { icon: '💰', value: '60–75%',       label: 'Less Than US Pricing'     },
      { icon: '🔬', value: 'Root-Cause',   label: 'Clinical Approach'        },
    ],
  },

  facts: [
    { value: 'Featured',     label: 'Male Enhancement Implant' },
    { value: 'Confidential', label: 'All Consultations'        },
    { value: '60–75%',       label: 'Less Than US Pricing'     },
    { value: 'Root-Cause',   label: 'Clinical Approach'        },
  ],

  intro: {
    eyebrow: "Men's Health",
    heading: "Men's Health Is Medical Health",
    paragraphs: [
      'Russald Medical Center\'s men\'s health program spans the full spectrum — from our Male Enhancement ' +
      'Implant program for men seeking permanent cosmetic enhancement, to testosterone replacement therapy ' +
      'for confirmed hormonal deficiency, to regenerative P-Shot PRP for vascular erectile health.',
      'Before any treatment is initiated, a full hormonal panel and clinical evaluation are completed. ' +
      'Our team identifies whether symptoms are primarily vascular, hormonal, neurological, or a ' +
      'combination — and the treatment plan is built accordingly. All consultations are handled with ' +
      'complete discretion.',
      'For patients considering our Male Enhancement Implant program, coordination is handled privately ' +
      'from first inquiry through discharge, with a dedicated team member managing your case from ' +
      'start to finish.',
    ],
    candidatesHeading: '🧬  What We Treat',
    candidates: [
      'Severe organic ED — Male Enhancement Implant (featured program)',
      'Post-prostatectomy erectile dysfunction',
      'Erectile dysfunction — vasculogenic, hormonal, and mixed etiology',
      'Low testosterone (hypogonadism) confirmed by lab panel',
      'Reduced libido and sexual performance decline',
      'Fatigue, brain fog, and mood changes from hormonal imbalance',
      'Muscle loss and body composition changes linked to androgen deficiency',
    ],
    disclaimer:
      '⚠️  All treatments require a clinical evaluation to determine candidacy. The information ' +
      'on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: "Why Choose Russald for Men's Health?",
    items: [
      {
        icon: '🔒',
        title: 'Complete Privacy — Discreet Coordination',
        body:  'Our Male Enhancement Implant program is handled with full discretion from first contact through discharge. No social media presence for this procedure. All coordination is managed by a dedicated, private team member.',
      },
      {
        icon: '🔬',
        title: 'Root-Cause Clinical Evaluation',
        body:  'Treatment begins with a full hormonal panel and clinical history review. We identify whether ED or performance decline is driven by vascular, hormonal, or neurological factors — then treat the cause.',
      },
      {
        icon: '🏥',
        title: 'Surgical and Regenerative Options',
        body:  'Male Enhancement Implant for permanent cosmetic enhancement. P-Shot PRP for vascular health. TRT for confirmed hormonal deficiency. Our team identifies the right path for each patient.',
      },
      {
        icon: '💰',
        title: '40–75% Below US Pricing',
        body:  'Male enhancement implant surgery in the US costs $25,000–$40,000+ out of pocket. Russald\'s all-inclusive program starts at $18,000. TRT and P-Shot are 60–75% less than US men\'s health clinic pricing.',
      },
      {
        icon: '📱',
        title: 'Remote Pre-Evaluation Available',
        body:  'Initial consultation and lab review can be conducted remotely before travel. You arrive with a defined treatment plan already in place, minimizing your time on-site.',
      },
      {
        icon: '📍',
        title: 'Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. A one-day or overnight visit is sufficient for most treatment sessions.',
      },
    ],
  },

  proc: {
    eyebrow:     "Men's Health Procedures",
    heading:     "Available Men's Health Procedures",
    description: 'Each procedure page includes full clinical information, candidacy criteria, the step-by-step process, recovery timeline, pricing context, and answers to the most common patient questions.',
    procedures: [
      { icon: '🔒', title: 'Male Enhancement Implant',        category: "Men's Health & Urology", href: '/mens-health/implant'              },
      { icon: '🧬', title: 'Erectile Dysfunction Treatment',  category: "Men's Health & Urology", href: '/mens-health/erectile-dysfunction' },
      { icon: '⚡', title: 'Testosterone Replacement Therapy', category: "Men's Health & Urology", href: '/mens-health/testosterone'         },
      { icon: '💉', title: 'P-Shot (Priapus Shot)',           category: "Men's Health & Urology", href: '/mens-health/p-shot'              },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: "Men's Health in Tijuana — Common Questions",
    items: [
      {
        q: 'How private is the consultation process for men\'s health at Russald?',
        a: 'Completely private. All inquiries — especially for the Male Enhancement Implant program — are handled by a dedicated coordinator with full discretion. This procedure is not advertised on social media. From first contact through discharge, your case is managed privately.',
      },
      {
        q: 'What is the Male Enhancement Implant and how does it work?',
        a: 'It is a subcutaneous silicone sleeve surgically placed beneath the penile skin through a small scrotal incision. It wraps around the shaft above the erectile tissue, permanently increasing girth and improving flaccid length. It has no pump, no inflation mechanism, and no moving parts. Natural erections are fully preserved because the implant sits above, not inside, the erectile tissue.',
      },
      {
        q: 'How much does the Male Enhancement Implant cost in Tijuana?',
        a: 'The all-inclusive program at Russald Medical Center is $18,000 to $22,000 USD. This includes surgeon fee, the FDA-cleared silicone implant, anesthesia, facility, and private coordination. US clinic pricing for the same procedure typically ranges from $25,000 to $40,000 with limited availability.',
      },
      {
        q: 'Is the Male Enhancement Implant FDA cleared?',
        a: 'Yes. The subcutaneous silicone sleeve used in our program is FDA-cleared for cosmetic penile augmentation. FDA clearance confirms the device meets safety and effectiveness standards for its indicated use.',
      },
      {
        q: 'How do I know if I need testosterone replacement therapy (TRT)?',
        a: 'Low testosterone is confirmed through morning serum testosterone testing — ideally two samples on separate days. Symptoms alone are not sufficient to start TRT. A full hormonal panel including testosterone, LH, FSH, estradiol, hematocrit, and PSA is required before any protocol is initiated.',
      },
      {
        q: 'Can low testosterone cause erectile dysfunction?',
        a: 'Yes. Testosterone deficiency is one of several potential contributors to erectile dysfunction. A full evaluation assesses hormonal, vascular, and other factors to identify the underlying cause — treatment is then directed at the specific driver, not symptoms alone.',
      },
      {
        q: 'Do I need to travel to Tijuana for a consultation before treatment?',
        a: 'No. Initial consultations can be completed remotely — our coordinator collects your health history, lab results, and goals by phone or WhatsApp. If you are a viable candidate, your pre-treatment workup is completed on arrival in Tijuana, minimizing your time on-site.',
      },
      {
        q: 'What is the P-Shot and who is it for?',
        a: 'The P-Shot (Priapus Shot) uses platelet-rich plasma (PRP) derived from your own blood, injected into targeted areas after topical numbing. It is used as a non-surgical, regenerative option for men with mild to moderate erectile dysfunction or those seeking to combine regenerative therapy with other men\'s health treatments. Results are typically seen at 4–8 weeks.',
      },
    ],
  },
} satisfies SpecPageData
