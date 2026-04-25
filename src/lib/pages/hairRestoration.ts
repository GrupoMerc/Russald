// Contenido de la página Hair Restoration
// Usa los mismos templates SpecPageData que Weight Loss y Plastic Surgery

import type { SpecPageData } from '@/types/spec'

export const hairData = {
  hero: {
    pageLabel:   'Hair Restoration',
    eyebrowTag:  'Hair Transplant Surgery · Tijuana, Mexico',
    heading:     'Natural Hair Restoration: FUE & DHI Transplants Near San Diego',
    description:
      'Russald Medical Center performs FUE, DHI, and PRP hair restoration for men and women — ' +
      'using advanced follicular extraction techniques that deliver permanent, natural-looking results ' +
      'at 60–70% less than US and Canadian prices, minutes from the San Diego border.',
    stats: [
      { icon: '💰', value: '60–70%',    label: 'Less Than US Cost'   },
      { icon: '🕐', value: '6–8 hrs',   label: 'Typical FUE Session' },
      { icon: '🏨', value: '1–2 days',  label: 'Stay in Tijuana'     },
      { icon: '✂️', value: 'No Linear Scar', label: 'FUE & DHI Method' },
    ],
  },

  facts: [
    { value: '60–70%',         label: 'Less Than US Cost'   },
    { value: '6–8 hrs',        label: 'Typical FUE Session' },
    { value: '1–2 days',       label: 'Stay in Tijuana'     },
    { value: 'No Linear Scar', label: 'FUE & DHI Method'    },
  ],

  intro: {
    eyebrow: 'Hair Restoration',
    heading: 'Permanent Results: Advanced Transplant Techniques, Accessible Pricing',
    paragraphs: [
      'Hair transplant surgery at Russald Medical Center uses FUE (Follicular Unit Extraction) and DHI ' +
      '(Direct Hair Implantation) — the two gold-standard techniques for permanent hair restoration that ' +
      'leave no linear scar and allow for a natural distribution of grafts. Each case is planned by a ' +
      'certified hair restoration specialist who maps donor density and recipient zone design before ' +
      'a single graft is extracted.',
      'FUE involves individually harvesting follicular units from the donor area and implanting them ' +
      'into thinning or bald zones. DHI adds a direct implantation step using a Choi implanter pen, ' +
      'allowing for higher density and more precise angle control — particularly for hairline refinement. ' +
      'Both techniques are performed under local anesthesia on an outpatient basis.',
      'For patients traveling from the United States, Tijuana is one of the most accessible hair ' +
      'transplant destinations in the world — approximately 20 minutes from the San Diego border crossing. ' +
      'Most patients complete the procedure and return home within 1–2 days, with no visible signs of ' +
      'surgery beyond minor redness that resolves within the first week.',
    ],
    candidatesHeading: '📋  Who Is a Candidate?',
    candidates: [
      'Men and women with androgenetic alopecia (pattern baldness) and stable hair loss for at least one year',
      'Patients with adequate donor hair density in the occipital and temporal zones',
      'Adults in good general health without active scalp conditions, autoimmune alopecia, or uncontrolled hormonal disorders',
      'Non-smokers, or patients willing to stop at least 2 weeks before and after the procedure',
      'Patients with realistic expectations — final results take 10–14 months to fully emerge',
    ],
    disclaimer:
      '⚠️  All procedures require a medical evaluation to determine candidacy. The information ' +
      'on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Us for Hair Restoration?',
    items: [
      {
        icon: '🔬',
        title: 'FUE & DHI Certified Specialists',
        body:  'Our hair restoration team is trained in both FUE and DHI extraction techniques — the same methods used by top clinics in Turkey, the US, and Europe, at a fraction of the cost.',
      },
      {
        icon: '📐',
        title: 'Personalized Graft Planning',
        body:  'Every case begins with a microscopic donor density assessment and a custom hairline design. Graft count, angle, and distribution are mapped before any extraction begins.',
      },
      {
        icon: '💰',
        title: '60–70% Less Than US & Canadian Pricing',
        body:  'A 2,000-graft FUE session that costs $8,000–$15,000 in the United States is available at Russald Medical Center at a significantly lower price — with no compromise on technique or materials.',
      },
      {
        icon: '🛫',
        title: 'Drive Across — No Flights Needed',
        body:  'The San Diego border crossing is approximately 20 minutes away. Most hair restoration patients cross in the morning, complete the procedure, and return home the same day or the next morning.',
      },
      {
        icon: '📋',
        title: 'Complete Aftercare Kit & Protocol',
        body:  'Every patient receives a written post-procedure protocol, medicated shampoo kit, and a scheduled remote follow-up at 1 month and 6 months to track graft survival and growth progress.',
      },
      {
        icon: '🌐',
        title: 'English-Speaking Coordination',
        body:  'Your patient coordinator manages the full process in English — from initial photo assessment through post-procedure check-ins. You will have a clear picture of every step before you arrive.',
      },
    ],
  },

  proc: {
    eyebrow:     'Hair Restoration Procedures',
    heading:     'Available Hair Restoration Procedures',
    description: 'Each procedure page includes clinical detail, candidacy criteria, the step-by-step process, recovery timeline, pricing context, and answers to the most common patient questions.',
    procedures: [
      { icon: '💈', title: 'FUE Hair Transplant',       category: 'Surgical Hair Restoration',    href: '/hair-restoration/fue' },
      { icon: '💉', title: 'DHI Hair Transplant',       category: 'Surgical Hair Restoration',    href: '/hair-restoration/dhi' },
      { icon: '🩸', title: 'PRP Hair Treatment',        category: 'Regenerative Hair Therapy',    href: '/hair-restoration/prp' },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Hair Restoration in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does a hair transplant cost in Tijuana at Russald Medical Center?',
        a: 'Hair transplant procedures at Russald Medical Center cost 60–75% less than comparable procedures in the United States. Pricing is based on the number of grafts required, which is determined during your evaluation. Your coordinator provides a detailed quote with no hidden fees.',
      },
      {
        q: 'What is the difference between FUE and DHI hair transplants?',
        a: 'FUE (Follicular Unit Extraction) extracts individual follicular units from the donor area and implants them using a pre-made channel technique. DHI (Direct Hair Implantation) uses a specialized implanter pen to place grafts directly without pre-made channels, which can allow for denser packing and more precise angle control. Your surgeon will recommend the appropriate technique based on your hair loss pattern, donor density, and goals.',
      },
      {
        q: 'Am I a candidate for a hair transplant?',
        a: 'Good candidates have stable hair loss (not actively progressing), adequate donor hair density at the back and sides of the scalp, and realistic expectations about coverage. A pre-operative evaluation including photographs and scalp assessment determines candidacy. Hair transplants do not stop future loss — your surgeon will discuss medical management alongside the procedure.',
      },
      {
        q: 'How long does recovery take after a hair transplant?',
        a: 'Most patients can return to desk work within 3–5 days. The transplanted area will shed within 2–4 weeks — this is normal and expected. New growth typically becomes visible at 3–4 months, with final results at 12–18 months. Your discharge instructions detail exactly what to expect at each stage.',
      },
      {
        q: 'Will the transplanted hair look natural?',
        a: 'Natural results depend on graft placement angle, direction, and density — all of which are controlled by the surgical team during implantation. Russald Medical Center\'s hair restoration surgeons design the hairline and distribution based on your facial structure and existing hair pattern. The transplanted follicles are your own hair and grow permanently.',
      },
      {
        q: 'Does PRP work as a standalone treatment for hair loss?',
        a: 'PRP (Platelet-Rich Plasma) therapy can slow hair loss and stimulate dormant follicles in early-stage hair loss, but it does not replace lost follicles. It is most effective as a maintenance or adjunct treatment alongside a hair transplant or medical therapy. Multiple sessions spaced 4–6 weeks apart are typically required for best results.',
      },
    ],
  },
} satisfies SpecPageData
