// Contenido de la página Bio Optimization
// Fuente: russald_vFinal.html → renderBioOptimization() + specialty 'bio-opt'

import type { SpecPageData } from '@/types/spec'

export const bioData = {
  hero: {
    pageLabel:   'Bio Optimization',
    eyebrowTag:  'Medical Wellness · Tijuana, Mexico',
    heading:     'Optimize Your Biology. Elevate Your Performance.',
    description:
      'Personalized medical protocols designed to improve energy, hormonal balance, cognitive ' +
      'performance, and long-term health. At Russald Medical Center we combine regenerative medicine, ' +
      'hormone optimization, and IV therapies — structured into distinct protocols for men and women, ' +
      'each with a 12-month treatment timeline.',
    stats: [
      { icon: '💉', value: 'IV Therapy',   label: 'NAD · Myers · Glutathione'  },
      { icon: '⚗️', value: 'Hormones',     label: 'TRT · BHRT · HGH'          },
      { icon: '🧬', value: 'Regenerative', label: 'PRP · Stem Cells'           },
      { icon: '✨', value: 'Aesthetic',    label: 'Botox · Fillers · Peels'    },
    ],
  },

  facts: [
    { value: 'IV Therapy',   label: 'NAD · Myers · Glutathione' },
    { value: 'Hormones',     label: 'TRT · BHRT · HGH'         },
    { value: 'Regenerative', label: 'PRP · Stem Cells'          },
    { value: 'Aesthetic',    label: 'Botox · Fillers · Peels'   },
  ],

  intro: {
    eyebrow: 'Bio Optimization',
    heading: 'What Is Bio Optimization?',
    paragraphs: [
      'Bio optimization is a medical approach designed to improve how the body functions at a cellular, ' +
      'metabolic, and hormonal level. Instead of waiting for disease to appear, bio optimization focuses ' +
      'on restoring balance and enhancing biological performance through advanced diagnostics and ' +
      'targeted therapies.',
      'Today\'s high-performance lifestyles place enormous pressure on the body. Long working hours, ' +
      'chronic stress, poor sleep, environmental toxins, and constant cognitive demand gradually disrupt ' +
      'the systems that regulate energy, metabolism, and hormonal balance — leading to fatigue, reduced ' +
      'focus, hormonal imbalance, slower recovery, and premature aging.',
      'Each of our protocols is built around a specific profile: a clearly defined picture of who you ' +
      'are, what your body needs, and what biological goals matter most to you. Treatment plans are then ' +
      'refined with your actual lab results and health history before any therapy is initiated.',
    ],
    candidatesHeading: '⚡  What We Address',
    candidates: [
      'Energy systems — mitochondrial health and cellular ATP production',
      'Hormonal axis — testosterone, estrogen, cortisol, and thyroid regulation',
      'Cellular repair — NAD+, PRP, stem cell therapy, and regenerative medicine',
      'Neurotransmitters — cognitive performance, mood, and mental clarity',
      'Body composition — metabolism, muscle preservation, and fat regulation',
      'Immune resilience — antioxidant support, detoxification, and micronutrient repletion',
    ],
    disclaimer:
      '⚠️  All protocols require a clinical evaluation and lab panel before treatment is initiated. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Bio Optimization?',
    items: [
      {
        icon: '📋',
        title: 'Personalized Protocols — Not Generic Plans',
        body:  'Every patient is assigned a protocol based on their age bracket, clinical profile, and lab results. We do not offer one-size-fits-all wellness packages. Your protocol is customized before treatment begins.',
      },
      {
        icon: '🔬',
        title: 'Lab-Based — No Treatment Without Evaluation',
        body:  'Hormonal therapies, HGH, and TRT are initiated only after proper lab evaluation. We identify deficiencies before prescribing — not symptoms alone. This is what separates clinical bio optimization from wellness trends.',
      },
      {
        icon: '💉',
        title: 'Full Therapy Menu Under One Roof',
        body:  'IV therapy, hormone optimization, regenerative procedures (PRP, stem cells), and aesthetic treatments are all available at Russald Medical Center. Combine multiple therapies in a single visit.',
      },
      {
        icon: '💰',
        title: '60–75% Less Than US Longevity Clinics',
        body:  'Hormone optimization, IV therapy, and regenerative treatments at US functional medicine or longevity clinics are expensive and often not covered by insurance. Russald delivers the same clinical standards at a fraction of the cost.',
      },
      {
        icon: '📱',
        title: 'Remote Initial Consultation Available',
        body:  'Lab evaluation and protocol planning can begin remotely before you travel. You arrive with a defined treatment plan already in place, minimizing your time on-site.',
      },
      {
        icon: '📍',
        title: 'Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. Most bio optimization sessions can be completed in a single day trip or a short 1–2 day visit.',
      },
    ],
  },

  proc: {
    eyebrow:     'Bio Optimization Therapies',
    heading:     'Available Bio Optimization Treatments',
    description: 'Each treatment page includes full clinical information, candidacy criteria, the protocol structure, monitoring requirements, pricing context, and answers to the most common patient questions.',
    procedures: [
      { icon: '⚡', title: 'HGH Therapy',                  category: 'Hormone Optimization',    href: '/bio-optimization/hgh'           },
      { icon: '⚗️', title: 'BHRT (Bioidentical Hormones)',  category: 'Hormone Optimization',    href: '/bio-optimization/bhrt'          },
      { icon: '⚡', title: 'Testosterone Replacement (TRT)', category: 'Hormone Optimization',    href: '/bio-optimization/trt'           },
      { icon: '💉', title: 'Myers Cocktail IV',             category: 'IV Therapy',              href: '/bio-optimization/myers-cocktail' },
      { icon: '💉', title: 'NAD IV Therapy',                category: 'IV Therapy',              href: '/bio-optimization/nad-iv'         },
      { icon: '🧬', title: 'PRP Therapy',                   category: 'Regenerative Medicine',   href: '/bio-optimization/prp'           },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Bio Optimization in Tijuana — Common Questions',
    items: [
      {
        q: 'What is bio optimization and how is it different from general wellness?',
        a: 'Bio optimization is a physician-supervised medical approach that uses lab diagnostics to identify specific deficiencies in your hormonal, metabolic, and cellular systems — then applies targeted therapies to restore them. Unlike general wellness programs, every protocol at Russald is based on your actual lab results, not generic symptom lists or supplements.',
      },
      {
        q: 'Do I need a lab evaluation before starting any treatment?',
        a: 'Yes. Hormonal therapies (TRT, BHRT, HGH), and most protocol-based treatments require a lab panel before any prescription is issued. IV therapies and some aesthetic treatments have a shorter intake process, but all patients undergo a health review before treatment is administered.',
      },
      {
        q: 'How does the protocol selection process work?',
        a: 'Protocols are assigned based on your age bracket, clinical profile, and biological goals. Once your lab results are reviewed, the physician refines the protocol to your specific deficiencies and priorities. You receive a structured 12-month treatment timeline with defined visit milestones.',
      },
      {
        q: 'Can I do just one IV therapy session without committing to a full protocol?',
        a: 'Yes. IV therapies such as Myers Cocktail, Glutathione, and Vitamin C IV are available as standalone treatments without enrolling in a full bio optimization protocol. They are also commonly combined with surgical recovery or other procedures during a Tijuana visit.',
      },
      {
        q: 'What is the difference between TRT and HGH therapy?',
        a: 'Testosterone replacement therapy (TRT) addresses sex hormone deficiency — targeting fatigue, low libido, muscle loss, and metabolic decline caused by low testosterone. HGH therapy addresses growth hormone deficiency, which affects body composition, tissue repair, and metabolic rate. They target different hormonal axes and are prescribed based on different lab findings. Some patients are candidates for both.',
      },
      {
        q: 'How much does bio optimization cost in Tijuana compared to the US?',
        a: 'Bio optimization at Russald Medical Center costs 60–75% less than US functional medicine or longevity clinics, where protocols and ongoing monitoring can run $5,000–$15,000+ per year. Pricing varies by treatment type and protocol scope — your coordinator provides a detailed quote after your evaluation.',
      },
      {
        q: 'Can I combine bio optimization treatments with a surgical procedure?',
        a: 'Yes. Many patients schedule IV therapy, PRP treatments, or consultation sessions during the same trip as a surgical procedure. Bio optimization treatments that involve injections or infusions are typically scheduled as a separate visit to ensure proper recovery sequencing. Your coordinator will advise on timing.',
      },
      {
        q: 'Is bio optimization safe?',
        a: 'When physician-supervised and based on proper lab evaluation, bio optimization therapies are safe for appropriate candidates. Risks vary by treatment — hormonal therapies require ongoing monitoring of lab markers, while IV therapies carry minimal risk. All treatments at Russald are administered or supervised by licensed physicians.',
      },
    ],
  },
} satisfies SpecPageData
