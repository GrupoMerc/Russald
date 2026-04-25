// Sub-procedimientos de Hair Restoration
// Fuente: russald_vFinal.html → renderFUE / renderDHI / renderHairPRP

import type { SubProcPageData, SpecWhyItem } from '@/types/spec'

const WHY: readonly SpecWhyItem[] = [
  {
    icon:  '📊',
    title: 'Graft Count Transparency',
    body:  'Your graft count estimate is provided during the remote hair assessment before you travel. You know exactly what will be performed — and at what cost — before committing to anything.',
  },
  {
    icon:  '✏️',
    title: 'Collaborative Hairline Design',
    body:  'Hairline placement and graft distribution are planned together with the surgeon on procedure day. Natural-looking density and recession pattern are central to the design.',
  },
  {
    icon:  '💰',
    title: '50–70% Less Than US & European Clinics',
    body:  'Hair transplant costs in the US and Europe often run $8,000–$20,000+. Russald Medical Center delivers the same FUE and DHI techniques at a significant fraction of that cost.',
  },
  {
    icon:  '🔬',
    title: 'Experienced Hair Restoration Team',
    body:  'Our hair restoration team specializes in FUE and DHI techniques with a track record of natural density outcomes. Graft survival and hairline precision are the standards we work to.',
  },
  {
    icon:  '📱',
    title: 'Remote Assessment Before You Travel',
    body:  'Photos, hair characteristics, degree of loss, and graft count are evaluated remotely before your visit. Your treatment plan is defined before you cross the border.',
  },
  {
    icon:  '📍',
    title: '20 Minutes from San Diego',
    body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. Hair transplant procedures are typically completed in a 2–3 day trip.',
  },
] as const

export const fueData: SubProcPageData = {
  hero: {
    pageLabel:   'FUE Hair Transplant',
    eyebrowTag:  'Hair Restoration · Tijuana, Mexico',
    heading:     'FUE Hair Transplant in Tijuana, Mexico',
    description:
      'FUE (Follicular Unit Extraction) is a minimally invasive hair transplant technique that harvests ' +
      'individual follicular units from the donor area and implants them in thinning or bald areas. ' +
      'At Russald Medical Center in Tijuana, Mexico, FUE is performed with precision extraction, ' +
      'natural hairline planning, and clear graft count transparency.',
    stats: [
      { icon: '⏱️', value: '6–10 hrs',  label: 'Procedure Time'    },
      { icon: '🏨', value: '2–3 days',  label: 'Stay in Tijuana'   },
      { icon: '🩹', value: '5–7 days',  label: 'Initial Recovery'  },
      { icon: '✨', value: '12 mos',    label: 'Full Results'      },
    ],
  },

  facts: [
    { value: '6–10 hrs',  label: 'Procedure Time'   },
    { value: '2–3 days',  label: 'Stay in Tijuana'  },
    { value: '5–7 days',  label: 'Initial Recovery' },
    { value: '12 mos',    label: 'Full Results'     },
  ],

  intro: {
    eyebrow:  'FUE Hair Transplant',
    heading:  'What Is FUE Hair Transplant?',
    paragraphs: [
      'FUE uses a micro-punch tool (0.7–1.0 mm) to individually extract follicular units from the ' +
      'donor area — typically the back and sides of the scalp. These grafts are then implanted in the ' +
      'recipient area using fine incisions made by the physician. FUE leaves no linear scar and allows ' +
      'for shorter post-operative recovery compared to FUT (strip) technique.',
      'Because grafts are extracted one by one, FUE allows for precise control over which follicles ' +
      'are harvested — preserving donor density and enabling natural hairline design. The procedure ' +
      'is performed under local anesthesia and typically takes 6–10 hours depending on graft count.',
      'FUE hair transplant in Tijuana, Mexico at Russald Medical Center is performed at 50–70% below ' +
      'leading US and European clinic pricing. Graft counts are determined based on clinical hair ' +
      'assessment, and the hairline is designed collaboratively with the patient before the procedure begins.',
    ],
    candidatesHeading: '💆  Who Is a Candidate?',
    candidates: [
      'Men and women with androgenetic alopecia (pattern hair loss)',
      'Norwood scale II–VI for men, Ludwig I–II for women',
      'Sufficient donor hair density at the back and sides of the scalp',
      'Stable hair loss — not actively accelerating',
      'Realistic expectations about coverage, density, and timeline',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for FUE Hair Transplant?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'FUE Hair Transplant in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does FUE hair transplant cost in Tijuana, Mexico?',
        a: 'FUE hair transplant in Tijuana costs 50–70% less than in the United States or Europe, where procedures often run $8,000–$20,000+. Pricing is based on graft count, which is determined during your hair assessment.',
      },
      {
        q: 'How many grafts do I need?',
        a: 'Graft requirements depend on the degree of hair loss and the desired density. Ranges typically run from 1,000–2,000 grafts for early recession to 3,000–5,000 grafts for more advanced loss. Your remote hair assessment will provide a specific estimate before you travel.',
      },
      {
        q: 'Why do the transplanted hairs fall out after the procedure?',
        a: 'Transplanted hairs enter a shock-shed phase at 2–6 weeks post-procedure. This is completely normal — the follicle remains intact below the skin. New hair growth begins at 3–4 months, and final results are visible at 12 months.',
      },
      {
        q: 'Is FUE or DHI better?',
        a: 'Both produce excellent results using the same extraction method. The difference is in implantation: FUE creates recipient incisions first, then places grafts. DHI uses the Choi pen for direct simultaneous implantation. DHI offers more precise angle control and is preferred for adding density between existing hair. Your surgeon recommends the most appropriate technique based on your specific hair characteristics.',
      },
      {
        q: 'Can women get a hair transplant?',
        a: 'Yes. Female hair loss patients are evaluated individually based on the pattern of loss, donor density, and goals. Not all patterns of female hair loss are suitable for transplant — candidacy is assessed during the remote consultation.',
      },
    ],
  },
} satisfies SubProcPageData

export const dhiData: SubProcPageData = {
  hero: {
    pageLabel:   'DHI Hair Transplant',
    eyebrowTag:  'Hair Restoration · Tijuana, Mexico',
    heading:     'DHI Hair Transplant in Tijuana, Mexico',
    description:
      'DHI (Direct Hair Implantation) uses a specialized implanter pen (Choi pen) to directly implant ' +
      'extracted follicular units without creating pre-made incisions. At Russald Medical Center in ' +
      'Tijuana, Mexico, DHI is offered for selected cases where precision placement and density are ' +
      'the primary goals.',
    stats: [
      { icon: '⏱️', value: '6–10 hrs',  label: 'Procedure Time'    },
      { icon: '🏨', value: '2–3 days',  label: 'Stay in Tijuana'   },
      { icon: '🩹', value: '5–7 days',  label: 'Initial Recovery'  },
      { icon: '✨', value: '12 mos',    label: 'Full Results'      },
    ],
  },

  facts: [
    { value: '6–10 hrs',  label: 'Procedure Time'   },
    { value: '2–3 days',  label: 'Stay in Tijuana'  },
    { value: '5–7 days',  label: 'Initial Recovery' },
    { value: '12 mos',    label: 'Full Results'     },
  ],

  intro: {
    eyebrow:  'DHI Hair Transplant',
    heading:  'What Is DHI Hair Transplant?',
    paragraphs: [
      'In DHI, follicles are extracted using the same FUE micro-punch technique. Rather than placing ' +
      'them into pre-made recipient incisions, each graft is loaded into the Choi implanter pen and ' +
      'inserted directly into the scalp in a single motion. This allows precise control over the angle, ' +
      'depth, and direction of each implanted follicle at the moment of placement.',
      'DHI may be preferred for adding density between existing hairs — since the pen can be guided ' +
      'between follicles without creating preliminary incisions that could disrupt surrounding grafts. ' +
      'It is also well-suited for precise hairline work requiring specific angle and direction.',
      'DHI hair transplant in Tijuana, Mexico at Russald Medical Center offers the same Choi pen ' +
      'technique used at leading clinics worldwide at 50–70% below international pricing.',
    ],
    candidatesHeading: '💆  Who Is a Candidate for DHI?',
    candidates: [
      'Patients prioritizing density enhancement between existing hair',
      'Those with specific hairline design goals requiring precise follicle direction',
      'Good general hair transplant candidacy: sufficient donor supply, stable hair loss',
      'Patients evaluated and recommended for DHI over FUE based on hair characteristics',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for DHI Hair Transplant?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'DHI Hair Transplant in Tijuana — Common Questions',
    items: [
      {
        q: 'What is the difference between DHI and FUE?',
        a: 'Both use the same extraction method. The difference is implantation: FUE creates recipient incisions first, then places grafts into them. DHI loads each graft directly into the Choi pen and implants simultaneously, allowing more precise control of angle, depth, and direction.',
      },
      {
        q: 'How much does DHI hair transplant cost in Tijuana, Mexico?',
        a: 'DHI hair transplant in Tijuana is significantly less expensive than leading hair restoration clinics internationally. Pricing is graft-count based — contact our team for a quote after your remote assessment.',
      },
      {
        q: 'Is DHI available for women?',
        a: 'Yes. DHI is particularly useful for female pattern hair loss where density improvement between existing hairs is the goal. The Choi pen allows implantation without disrupting surrounding follicles.',
      },
      {
        q: 'Does DHI hurt?',
        a: 'The procedure is performed under local anesthesia. The numbing process involves small injections that cause brief discomfort. Once numb, most patients report mild pressure during the procedure.',
      },
      {
        q: 'How long do DHI results last?',
        a: 'DHI transplanted follicles are harvested from the donor zone, which is genetically resistant to DHT. Once successfully implanted, the transplanted hair is permanent in the recipient area.',
      },
    ],
  },
} satisfies SubProcPageData

export const hairPrpData: SubProcPageData = {
  hero: {
    pageLabel:   'Hair PRP',
    eyebrowTag:  'Hair Restoration · Tijuana, Mexico',
    heading:     'Hair PRP Therapy in Tijuana, Mexico',
    description:
      'Hair PRP (platelet-rich plasma) therapy uses growth factors from your own blood to stimulate ' +
      'hair follicle activity, improve scalp circulation, and support hair density. At Russald Medical ' +
      'Center in Tijuana, Mexico, it is offered as a standalone treatment or as a complement to ' +
      'hair transplant surgery.',
    stats: [
      { icon: '⏱️', value: '45–60 min', label: 'Session Time'     },
      { icon: '🏠', value: 'Same Day',  label: 'Return Home'      },
      { icon: '🔄', value: '3 sessions', label: 'Typical Course'  },
      { icon: '✨', value: '3–6 mos',   label: 'Results Timeline' },
    ],
  },

  facts: [
    { value: '45–60 min', label: 'Session Time'     },
    { value: 'Same Day',  label: 'Return Home'      },
    { value: '3 sessions', label: 'Typical Course'  },
    { value: '3–6 mos',   label: 'Results Timeline' },
  ],

  intro: {
    eyebrow:  'Hair PRP',
    heading:  'What Is Hair PRP Therapy?',
    paragraphs: [
      'Hair PRP involves drawing a small blood sample, spinning it in a centrifuge to concentrate ' +
      'platelets and growth factors, and injecting the resulting plasma across the scalp in areas of ' +
      'thinning. The growth factors (including PDGF, TGF, and VEGF) are believed to prolong the ' +
      'anagen (growth) phase of the hair cycle, reduce follicle miniaturization, and stimulate ' +
      'dormant follicles in early-stage hair loss.',
      'PRP is not a hair transplant — it does not create new follicles in bald areas. It is most ' +
      'effective for slowing progressive hair loss and improving density in areas where follicles ' +
      'are still active. It is commonly used as post-transplant maintenance to support graft survival.',
      'Hair PRP in Tijuana, Mexico at Russald Medical Center is significantly less expensive than ' +
      'at US dermatology or hair restoration clinics and can be completed in a single visit — making ' +
      'it practical for patients traveling for other procedures as well.',
    ],
    candidatesHeading: '💆  Who Is a Candidate?',
    candidates: [
      'Early to moderate androgenetic alopecia with active follicles',
      'Patients seeking a non-surgical approach to slowing hair loss',
      'Those looking to maintain or complement hair transplant results',
      'Selected alopecia areata cases — evaluated individually',
      'Realistic expectations: PRP supports hair health, it does not regrow fully lost hair',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Hair PRP?',
    items: [
      {
        icon:  '💉',
        title: 'Same-Day Outpatient Procedure',
        body:  'Hair PRP requires no hospitalization and no recovery time. The procedure takes 45–60 minutes and patients return home or to their hotel the same day.',
      },
      {
        icon:  '💰',
        title: 'Significantly Less Than US Clinics',
        body:  'Hair PRP sessions in the US often cost $700–$1,500 per session. Russald Medical Center delivers the same treatment at a significantly lower cost per session — or as part of a combined protocol during a hair transplant visit.',
      },
      {
        icon:  '🔬',
        title: 'Used in Transplant Protocols',
        body:  'PRP is incorporated into hair transplant procedures at Russald — applied to grafts during the transplant session and recommended as post-transplant maintenance. It is an integrated part of hair restoration care.',
      },
      {
        icon:  '🔄',
        title: 'Flexible Scheduling',
        body:  'Hair PRP sessions can be scheduled during any visit to Tijuana — on their own, alongside another procedure, or as a follow-up to a hair transplant.',
      },
      {
        icon:  '🩸',
        title: 'Your Own Blood — No Foreign Substances',
        body:  'PRP uses your own blood, processed and concentrated. There is no risk of allergic reaction to foreign substances.',
      },
      {
        icon:  '📍',
        title: '20 Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border. Hair PRP sessions can be completed in a single day trip.',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Hair PRP in Tijuana — Common Questions',
    items: [
      {
        q: 'How many Hair PRP sessions do I need?',
        a: 'A standard initial course is 3 sessions spaced 4–6 weeks apart, followed by maintenance sessions every 3–6 months. Frequency depends on your degree of loss, response, and goals.',
      },
      {
        q: 'Can Hair PRP regrow hair I have already lost?',
        a: 'Hair PRP is most effective for slowing active hair loss and improving density in areas where follicles are still present and active. It is not effective in areas of complete baldness where follicles are no longer viable.',
      },
      {
        q: 'How much does Hair PRP cost in Tijuana, Mexico?',
        a: 'Hair PRP sessions at Russald Medical Center are significantly less expensive than US hair restoration and dermatology clinics. Contact our team for current session pricing.',
      },
      {
        q: 'Can Hair PRP be combined with a hair transplant?',
        a: 'Yes. PRP is commonly applied to grafts during a hair transplant procedure and recommended as post-transplant maintenance to support graft survival and density. Many patients schedule PRP during their transplant visit.',
      },
    ],
  },
} satisfies SubProcPageData
