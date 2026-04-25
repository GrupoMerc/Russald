// Contenido de sub-procedimientos de Plastic Surgery
// Fuente: russald_vFinal.html → renderMommyMakeover / renderTummyTuck / etc.

import type { SubProcPageData, SpecWhyItem } from '@/types/spec'

// Why items son compartidos para toda la especialidad
const WHY: readonly SpecWhyItem[] = [
  {
    icon:  '🏅',
    title: 'Board-Certified Plastic Surgeons',
    body:  'Our plastic surgeons hold board certification in plastic and reconstructive surgery and have trained in techniques recognized by US and international aesthetic standards.',
  },
  {
    icon:  '🎯',
    title: 'Individualized Surgical Planning',
    body:  'No packages, no templates. Your plan is designed around your anatomy, your goals, and what is clinically appropriate — reviewed with you before anything is scheduled.',
  },
  {
    icon:  '💰',
    title: '60–75% Below US Market Pricing',
    body:  'Plastic surgery costs in the US often run $10,000–$30,000+ for combination procedures. Our pricing is transparent and all-inclusive — no surprise surgical fees.',
  },
  {
    icon:  '🛏️',
    title: 'Coordinated Recovery in Tijuana',
    body:  'Most plastic surgery patients stay 4–7 days post-operatively. Your team coordinates daily check-ins, drain management guidance, and discharge criteria before you travel home.',
  },
  {
    icon:  '🌐',
    title: 'English-First Consultation & Follow-Up',
    body:  'From your first consultation to your final post-op check, your entire experience is managed in English by a dedicated Patient Advisor.',
  },
  {
    icon:  '📸',
    title: 'Photo-Based Pre-Op Planning',
    body:  'Before you travel, our team reviews photos and provides a preliminary assessment of candidacy, expectations, and the proposed surgical plan — so nothing is a surprise when you arrive.',
  },
] as const

export const mommyMakeoverData: SubProcPageData = {
  hero: {
    pageLabel:   'Mommy Makeover',
    eyebrowTag:  'Plastic Surgery · Tijuana, Mexico',
    heading:     'Mommy Makeover in Tijuana, Mexico',
    description:
      'A mommy makeover is a customized combination of body contouring procedures designed to address ' +
      'physical changes after pregnancy and childbirth. At Russald Medical Center in Tijuana, Mexico, ' +
      'each plan is built around the patient\'s individual anatomy, goals, and surgical priorities.',
    stats: [
      { icon: '✨', value: 'Custom',    label: 'Combination of Procedures' },
      { icon: '⏱️', value: '4–7 hrs',  label: 'Typical Surgical Time'     },
      { icon: '🏨', value: '5–7 days', label: 'Stay in Tijuana'           },
      { icon: '🏃', value: '6–8 wks',  label: 'Return to Full Activity'   },
    ],
  },

  facts: [
    { value: 'Custom',    label: 'Combination of Procedures' },
    { value: '4–7 hrs',  label: 'Typical Surgical Time'     },
    { value: '5–7 days', label: 'Stay in Tijuana'           },
    { value: '6–8 wks',  label: 'Return to Full Activity'   },
  ],

  intro: {
    eyebrow:  'Mommy Makeover',
    heading:  'What Is a Mommy Makeover?',
    paragraphs: [
      'A mommy makeover is not a single procedure but a personalized surgical plan that typically ' +
      'combines a tummy tuck (abdominoplasty), a breast procedure (lift, augmentation, or reduction), ' +
      'and liposuction in targeted areas. The goal is to address the physical changes the body undergoes ' +
      'during pregnancy, childbirth, and breastfeeding — all in a single surgical session.',
      'Because multiple procedures are combined, the mommy makeover requires careful planning to ensure ' +
      'operative time, anesthesia duration, and recovery requirements are appropriate for each individual ' +
      'patient. Your surgeon reviews and approves the full plan before anything is scheduled.',
      'A mommy makeover in Tijuana, Mexico at Russald Medical Center offers access to an experienced ' +
      'plastic surgery team, modern surgical facilities, and significant cost savings — typically 60–75% ' +
      'below US pricing — with coordinated support from consultation through recovery.',
    ],
    candidatesHeading: '✨  Who Is a Candidate?',
    candidates: [
      'Women who have completed childbearing',
      'At a stable body weight for at least 3–6 months',
      'Non-smokers or committed to stopping at least 4–6 weeks before surgery',
      'Cleared for general anesthesia and the planned combination of procedures',
      'Realistic expectations about outcomes and recovery timeline',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Mommy Makeover?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Mommy Makeover in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does a mommy makeover cost in Tijuana, Mexico?',
        a: 'Mommy makeover pricing depends on the specific combination of procedures included. At Russald Medical Center, total cost is 60–75% less than comparable US clinics. Contact our team with your goals for a personalized quote.',
      },
      {
        q: 'What procedures are typically included in a mommy makeover?',
        a: 'The most common combination includes a tummy tuck, a breast procedure (lift, augmentation, or both), and liposuction of targeted areas. The exact plan is customized based on your anatomy and goals — no fixed packages.',
      },
      {
        q: 'Do I need to be done having children before getting a mommy makeover?',
        a: 'Yes. Future pregnancies can alter the results of the procedures included in your makeover. We recommend waiting until your family is complete before proceeding.',
      },
      {
        q: 'How long is recovery from a mommy makeover?',
        a: 'Most patients return to light activity in 3–4 weeks and full activity in 6–8 weeks. Swelling may take 3–6 months to fully resolve. The recovery timeline depends on which procedures are combined.',
      },
      {
        q: 'Is it safe to combine multiple plastic surgery procedures in one session?',
        a: 'Yes, when performed by an experienced plastic surgeon with appropriate patient selection and safe operative time limits. Your surgeon reviews the combination plan and confirms it is appropriate for your specific health profile.',
      },
    ],
  },
} satisfies SubProcPageData

export const tummyTuckData: SubProcPageData = {
  hero: {
    pageLabel:   'Tummy Tuck',
    eyebrowTag:  'Plastic Surgery · Tijuana, Mexico',
    heading:     'Tummy Tuck in Tijuana, Mexico',
    description:
      'A tummy tuck (abdominoplasty) removes excess abdominal skin and fat while tightening the underlying ' +
      'muscles. At Russald Medical Center in Tijuana, Mexico, the procedure is tailored to each patient\'s ' +
      'anatomy — full, mini, or extended approach.',
    stats: [
      { icon: '⏱️', value: '2–4 hrs',  label: 'Procedure Time'         },
      { icon: '🏨', value: '4–5 days', label: 'Stay in Tijuana'        },
      { icon: '💼', value: '4–6 wks',  label: 'Return to Work'         },
      { icon: '✨', value: '6 mos',    label: 'Full Results Visible'   },
    ],
  },

  facts: [
    { value: '2–4 hrs',  label: 'Procedure Time'       },
    { value: '4–5 days', label: 'Stay in Tijuana'      },
    { value: '4–6 wks',  label: 'Return to Work'       },
    { value: '6 mos',    label: 'Full Results Visible'  },
  ],

  intro: {
    eyebrow:  'Tummy Tuck',
    heading:  'What Is a Tummy Tuck?',
    paragraphs: [
      'Abdominoplasty removes loose skin and excess fat from the lower and middle abdomen, repairs ' +
      'separated abdominal muscles (diastasis recti), and repositions the navel to create a flatter, ' +
      'firmer abdominal contour. It is commonly performed after significant weight loss or following ' +
      'pregnancy.',
      'A full tummy tuck addresses the entire abdomen — above and below the navel — and includes muscle ' +
      'repair and navel repositioning. A mini tummy tuck targets only the lower abdomen and is appropriate ' +
      'for patients with limited excess skin. An extended tummy tuck addresses the flanks and lateral ' +
      'thighs in addition to the abdomen.',
      'Tummy tuck in Tijuana, Mexico at Russald Medical Center provides access to experienced plastic ' +
      'surgeons at 60–75% below US clinic pricing. The international patient process ensures coordinated ' +
      'support from consultation through discharge.',
    ],
    candidatesHeading: '✨  Who Is a Candidate?',
    candidates: [
      'Individuals with excess abdominal skin or laxity',
      'Those with diastasis recti (separated abdominal muscles)',
      'Stable body weight for at least 3–6 months',
      'Non-smokers or willing to stop at least 4–6 weeks before surgery',
      'Not planning future pregnancies',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Tummy Tuck?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Tummy Tuck in Tijuana — Common Questions',
    items: [
      {
        q: 'What is the difference between a full and mini tummy tuck?',
        a: 'A full tummy tuck addresses the entire abdomen — above and below the navel — including muscle repair and navel repositioning. A mini tummy tuck focuses on the lower abdomen only and is appropriate for patients with limited excess skin. Your surgeon recommends the right approach based on your anatomy.',
      },
      {
        q: 'Will a tummy tuck remove stretch marks?',
        a: 'A tummy tuck removes the lower abdominal skin where many stretch marks are located. Stretch marks above the navel are generally not removed but may shift downward depending on the extent of skin excised.',
      },
      {
        q: 'How much does a tummy tuck cost in Tijuana, Mexico?',
        a: 'Tummy tuck surgery at Russald Medical Center costs 60–75% less than US plastic surgery centers, where the procedure commonly runs $8,000–$15,000+. Contact our team for a personalized quote.',
      },
      {
        q: 'Can a tummy tuck be combined with liposuction?',
        a: 'Yes. Combining tummy tuck with liposuction of the flanks or other areas is common and can significantly enhance overall contouring results. Your surgeon evaluates and approves the combination plan.',
      },
      {
        q: 'When will I see final results after a tummy tuck?',
        a: 'Significant improvement is visible within 4–6 weeks as swelling resolves. Final results — including full skin tightening and scar maturation — take approximately 6 months to fully appear.',
      },
    ],
  },
} satisfies SubProcPageData

export const liposuctionData: SubProcPageData = {
  hero: {
    pageLabel:   'Liposuction',
    eyebrowTag:  'Plastic Surgery · Tijuana, Mexico',
    heading:     'Liposuction in Tijuana, Mexico',
    description:
      'Liposuction removes localized fat deposits resistant to diet and exercise, improving body contour ' +
      'in targeted areas. At Russald Medical Center in Tijuana, Mexico, lipo is performed as a standalone ' +
      'procedure or in combination with other body contouring surgeries.',
    stats: [
      { icon: '⏱️', value: '1–3 hrs',   label: 'Procedure Time'     },
      { icon: '🏨', value: '2–3 days',  label: 'Stay in Tijuana'    },
      { icon: '💼', value: '1–2 wks',   label: 'Return to Work'     },
      { icon: '✨', value: '3–6 mos',   label: 'Full Results'       },
    ],
  },

  facts: [
    { value: '1–3 hrs',  label: 'Procedure Time'  },
    { value: '2–3 days', label: 'Stay in Tijuana' },
    { value: '1–2 wks',  label: 'Return to Work'  },
    { value: '3–6 mos',  label: 'Full Results'    },
  ],

  intro: {
    eyebrow:  'Liposuction',
    heading:  'What Is Liposuction?',
    paragraphs: [
      'Liposuction uses a thin tube (cannula) connected to a vacuum to break up and remove fat from ' +
      'targeted areas including the abdomen, flanks, thighs, arms, back, neck, and chin. It is a ' +
      'contouring procedure, not a weight loss surgery, and works best in patients near their goal ' +
      'weight with good skin elasticity.',
      'Multiple areas can be treated in a single session. Volume and target zones are planned based on ' +
      'safety limits, body proportions, and your aesthetic goals. Liposuction is also the first stage ' +
      'of a Brazilian Butt Lift — the harvested fat is processed and transferred to the buttocks.',
      'Liposuction in Tijuana, Mexico at Russald Medical Center provides skilled plastic surgery outcomes ' +
      'at 60–75% less than US clinics. Targeted areas, technique selection, and volume goals are reviewed ' +
      'during consultation to set realistic expectations.',
    ],
    candidatesHeading: '✨  Who Is a Candidate?',
    candidates: [
      'Near goal weight with a stable BMI for at least 3 months',
      'Good skin elasticity in treatment areas',
      'Localized fat deposits resistant to diet and exercise',
      'Non-smokers',
      'Realistic expectations — liposuction is contouring, not weight loss surgery',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Liposuction?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Liposuction in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does liposuction cost in Tijuana, Mexico?',
        a: 'Liposuction pricing at Russald Medical Center depends on the number of areas treated. It is significantly less expensive than US plastic surgery centers. Contact our team for a personalized quote.',
      },
      {
        q: 'Is liposuction a weight loss procedure?',
        a: 'No. Liposuction is a body contouring procedure that removes localized fat in specific areas. It is best suited for patients already near their target weight with stubborn fat that doesn\'t respond to diet and exercise.',
      },
      {
        q: 'How many areas can be treated in one session?',
        a: 'Multiple areas can be treated in a single session. The number of areas and total volume removed are planned based on safety limits and your specific anatomy. Your surgeon will define the plan during consultation.',
      },
      {
        q: 'Will the fat come back after liposuction?',
        a: 'Fat cells removed by liposuction do not return. However, remaining fat cells in other areas can enlarge with significant weight gain. Maintaining a stable weight preserves your liposuction results.',
      },
      {
        q: 'Can liposuction be combined with other procedures?',
        a: 'Yes. Liposuction is commonly combined with tummy tuck, mommy makeover, or BBL (where harvested fat is transferred to the buttocks). Your surgeon evaluates the combination based on surgical time and your health profile.',
      },
    ],
  },
} satisfies SubProcPageData

export const bblData: SubProcPageData = {
  hero: {
    pageLabel:   'Brazilian Butt Lift',
    eyebrowTag:  'Plastic Surgery · Tijuana, Mexico',
    heading:     'Brazilian Butt Lift (BBL) in Tijuana, Mexico',
    description:
      'A Brazilian Butt Lift uses fat harvested from your own body through liposuction and strategically ' +
      'transfers it to the buttocks to enhance shape, volume, and proportion. At Russald Medical Center ' +
      'in Tijuana, Mexico, BBL is performed with a focus on natural-looking results and current safety protocols.',
    stats: [
      { icon: '⏱️', value: '3–5 hrs',  label: 'Procedure Time'    },
      { icon: '🏨', value: '3–5 days', label: 'Stay in Tijuana'   },
      { icon: '💼', value: '2–3 wks',  label: 'Return to Work'    },
      { icon: '✨', value: '6 mos',    label: 'Full Results'      },
    ],
  },

  facts: [
    { value: '3–5 hrs',  label: 'Procedure Time'  },
    { value: '3–5 days', label: 'Stay in Tijuana' },
    { value: '2–3 wks',  label: 'Return to Work'  },
    { value: '6 mos',    label: 'Full Results'    },
  ],

  intro: {
    eyebrow:  'Brazilian Butt Lift',
    heading:  'What Is a Brazilian Butt Lift?',
    paragraphs: [
      'BBL is a two-stage body contouring procedure. First, fat is harvested via liposuction from donor ' +
      'areas — typically the abdomen, flanks, thighs, or back. The fat is then processed and injected ' +
      'into the subcutaneous layer of the buttocks to create fullness, projection, and improved shape. ' +
      'Only suprafascial (above-muscle) fat placement is performed at Russald Medical Center, in line ' +
      'with current safety guidelines.',
      'Approximately 60–70% of transferred fat typically survives long-term. Final results are visible ' +
      'at around 6 months, once swelling has resolved and fat integration is complete. Avoiding direct ' +
      'pressure on the buttocks for 6–8 weeks post-op is essential to maximize fat survival.',
      'BBL in Tijuana, Mexico at Russald Medical Center offers access to experienced plastic surgeons ' +
      'with 60–75% cost savings compared to US clinics, and a coordinated experience designed for ' +
      'international patients.',
    ],
    candidatesHeading: '✨  Who Is a Candidate?',
    candidates: [
      'Sufficient donor fat in the abdomen, flanks, or thighs for harvest',
      'Realistic expectations about fat survival (typically 60–70% of transferred fat persists)',
      'Stable weight for at least 3 months',
      'Non-smokers',
      'Ability to avoid sitting directly on the buttocks for 6–8 weeks post-operatively',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for BBL?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Brazilian Butt Lift in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does a BBL cost in Tijuana, Mexico?',
        a: 'BBL at Russald Medical Center costs 60–75% less than US plastic surgery centers. Exact pricing depends on the donor areas and volume. Contact our team for a personalized quote.',
      },
      {
        q: 'How long does the fat last after a BBL?',
        a: 'Fat that survives the transfer — typically 60–70% — is permanent. The final result stabilizes at around 6 months after surgery, once swelling has resolved and fat integration is complete.',
      },
      {
        q: 'Why can\'t I sit after a BBL?',
        a: 'Direct pressure on the transferred fat during early healing can reduce fat survival. Specialized BBL pillows allow safe seating by placing weight on the thighs rather than the buttocks. Most patients require this precaution for 6–8 weeks.',
      },
      {
        q: 'Is BBL safe in Tijuana, Mexico?',
        a: 'Yes, when performed by an experienced plastic surgeon following current safety guidelines. At Russald Medical Center, fat is injected into the subcutaneous (above-muscle) layer only — which significantly reduces the primary risk associated with this procedure.',
      },
      {
        q: 'What if I don\'t have enough donor fat for a BBL?',
        a: 'Sufficient donor fat is required for a safe and effective BBL. If photo review suggests limited donor volume, our team will advise during the consultation process whether BBL is appropriate or recommend alternative approaches.',
      },
    ],
  },
} satisfies SubProcPageData

export const breastAugmentationData: SubProcPageData = {
  hero: {
    pageLabel:   'Breast Augmentation',
    eyebrowTag:  'Plastic Surgery · Tijuana, Mexico',
    heading:     'Breast Augmentation in Tijuana, Mexico',
    description:
      'Breast augmentation enhances breast volume and shape using implants tailored to the patient\'s ' +
      'anatomy and aesthetic goals. At Russald Medical Center in Tijuana, Mexico, implant selection, ' +
      'pocket placement, and incision approach are personalized during your consultation.',
    stats: [
      { icon: '⏱️', value: '1–2 hrs',  label: 'Procedure Time'    },
      { icon: '🏨', value: '3–4 days', label: 'Stay in Tijuana'   },
      { icon: '💼', value: '1–2 wks',  label: 'Return to Work'    },
      { icon: '✨', value: '3–6 mos',  label: 'Full Results'      },
    ],
  },

  facts: [
    { value: '1–2 hrs',  label: 'Procedure Time'  },
    { value: '3–4 days', label: 'Stay in Tijuana' },
    { value: '1–2 wks',  label: 'Return to Work'  },
    { value: '3–6 mos',  label: 'Full Results'    },
  ],

  intro: {
    eyebrow:  'Breast Augmentation',
    heading:  'What Is Breast Augmentation?',
    paragraphs: [
      'Breast augmentation uses silicone or saline implants to increase breast size, improve symmetry, ' +
      'or restore volume lost after weight loss or breastfeeding. Implants are placed either under the ' +
      'breast tissue (subglandular) or under the chest muscle (submuscular or dual-plane) through an ' +
      'incision under the breast, around the nipple, or in the armpit.',
      'Implant selection — size, profile, shape, and material — is determined based on your existing ' +
      'breast tissue, chest width, skin envelope, and aesthetic goals. There is no universal "correct" ' +
      'implant — sizing is a collaborative decision made during consultation using your measurements and ' +
      'goal photos.',
      'Breast augmentation in Tijuana, Mexico at Russald Medical Center provides access to experienced ' +
      'plastic surgeons and quality implants at 60–75% below US pricing. Implant options, sizing, and ' +
      'surgical approach are discussed in detail before any procedure is scheduled.',
    ],
    candidatesHeading: '✨  Who Is a Candidate?',
    candidates: [
      'Adults with fully developed breasts seeking increased volume or improved symmetry',
      'Those looking to restore volume lost after weight loss or breastfeeding',
      'Stable weight for at least 3 months',
      'Non-smokers',
      'Not currently pregnant or breastfeeding',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Breast Augmentation?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Breast Augmentation in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does breast augmentation cost in Tijuana, Mexico?',
        a: 'Breast augmentation at Russald Medical Center costs 60–75% less than US plastic surgery centers, where the procedure commonly runs $6,000–$12,000+. Pricing depends on implant type and surgical approach. Contact our team for a personalized quote.',
      },
      {
        q: 'Silicone or saline implants — which is better?',
        a: 'Silicone gel implants are more commonly used for their natural feel and appearance. Saline implants offer the advantage of size adjustability and require a smaller incision. Your surgeon will discuss the pros and cons of each option based on your anatomy and goals.',
      },
      {
        q: 'How long do breast implants last?',
        a: 'Modern breast implants are not considered lifetime devices. They may need replacement or revision after 10–20 years depending on the patient, implant type, and whether any complications arise. Regular follow-up is recommended.',
      },
      {
        q: 'Will I be able to breastfeed after breast augmentation?',
        a: 'Most women can breastfeed after breast augmentation, though this depends on the incision site, implant placement, and individual anatomy. This will be discussed in detail during your consultation.',
      },
      {
        q: 'Can breast augmentation be combined with a breast lift?',
        a: 'Yes. Augmentation with a simultaneous lift is a common combination for patients with both volume loss and ptosis (sagging). Your surgeon evaluates whether a combined approach is appropriate based on your breast tissue and skin envelope.',
      },
    ],
  },
} satisfies SubProcPageData

export const rhinoplastyData: SubProcPageData = {
  hero: {
    pageLabel:   'Rhinoplasty',
    eyebrowTag:  'Plastic Surgery · Tijuana, Mexico',
    heading:     'Rhinoplasty in Tijuana, Mexico',
    description:
      'Rhinoplasty reshapes the nose for aesthetic refinement, proportion improvement, or selected ' +
      'structural concerns. At Russald Medical Center in Tijuana, Mexico, the surgical approach — ' +
      'open or closed — is selected based on the degree of change desired and the patient\'s anatomy.',
    stats: [
      { icon: '⏱️', value: '2–4 hrs', label: 'Procedure Time'   },
      { icon: '🏨', value: '5–7 days', label: 'Stay in Tijuana' },
      { icon: '💼', value: '2 wks',   label: 'Return to Work'   },
      { icon: '✨', value: '12 mos',  label: 'Final Results'    },
    ],
  },

  facts: [
    { value: '2–4 hrs',  label: 'Procedure Time'  },
    { value: '5–7 days', label: 'Stay in Tijuana' },
    { value: '2 wks',    label: 'Return to Work'  },
    { value: '12 mos',   label: 'Final Results'   },
  ],

  intro: {
    eyebrow:  'Rhinoplasty',
    heading:  'What Is Rhinoplasty?',
    paragraphs: [
      'Rhinoplasty involves modifying the bone, cartilage, and soft tissue of the nose. Common goals ' +
      'include reducing the dorsal bridge, refining the tip, correcting a deviated septum, improving ' +
      'symmetry, or narrowing the nasal base. Open rhinoplasty uses a small incision across the ' +
      'columella (the strip between the nostrils) for full visualization. Closed rhinoplasty uses ' +
      'only internal incisions, leaving no external scar.',
      'Rhinoplasty requires significant patience — the nose swells significantly after surgery and ' +
      'final refinement can take 12 months to fully emerge. About 70% of swelling resolves in the ' +
      'first 3 months; the remaining 30%, particularly at the tip, resolves slowly over the year.',
      'Rhinoplasty in Tijuana, Mexico at Russald Medical Center provides access to experienced plastic ' +
      'surgeons specializing in nasal surgery at 60–75% below US clinic pricing. Both primary and ' +
      'revision rhinoplasty cases are evaluated.',
    ],
    candidatesHeading: '✨  Who Is a Candidate?',
    candidates: [
      'Adults with fully developed nasal structure (typically 18 years or older)',
      'Specific aesthetic or functional concerns with the nose',
      'Realistic expectations — final results take 12 months to fully appear',
      'Non-smokers',
      'No active skin conditions affecting the nose',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Rhinoplasty?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Rhinoplasty in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does rhinoplasty cost in Tijuana, Mexico?',
        a: 'Rhinoplasty at Russald Medical Center costs 60–75% less than US plastic surgery centers, where the procedure commonly runs $8,000–$15,000+. Pricing depends on complexity and approach. Contact our team for a personalized quote.',
      },
      {
        q: 'What is the difference between open and closed rhinoplasty?',
        a: 'Open rhinoplasty uses a small external incision across the columella for full visualization of nasal structures — preferred for more complex reshaping. Closed rhinoplasty uses only internal incisions with no visible external scar — suitable for more limited modifications. The right approach is determined by the complexity of changes needed.',
      },
      {
        q: 'How long is recovery from rhinoplasty?',
        a: 'The nasal splint is removed at 7–10 days. Most social swelling resolves in 3–4 weeks. Tip swelling and final refinement take up to 12 months to fully appear. Patience is an important part of rhinoplasty outcomes.',
      },
      {
        q: 'Do you perform revision rhinoplasty in Tijuana?',
        a: 'Yes. Revision rhinoplasty cases are evaluated individually. They require more detailed pre-operative planning, carry higher complexity, and are disclosed as such before proceeding.',
      },
      {
        q: 'Can rhinoplasty improve breathing?',
        a: 'Yes. When a deviated septum or internal structural issue is contributing to breathing difficulty, septoplasty or structural rhinoplasty can address both aesthetic and functional concerns simultaneously. This is evaluated during consultation.',
      },
    ],
  },
} satisfies SubProcPageData

export const faceliftData: SubProcPageData = {
  hero: {
    pageLabel:   'Facelift',
    eyebrowTag:  'Plastic Surgery · Tijuana, Mexico',
    heading:     'Facelift in Tijuana, Mexico',
    description:
      'A facelift (rhytidectomy) addresses visible signs of aging in the lower face, jawline, and neck — ' +
      'including sagging skin, deep creases, and jowls. At Russald Medical Center in Tijuana, Mexico, ' +
      'the procedure is tailored to each patient\'s anatomy for natural-looking, lasting results.',
    stats: [
      { icon: '⏱️', value: '3–5 hrs',  label: 'Procedure Time'   },
      { icon: '🏨', value: '5–7 days', label: 'Stay in Tijuana'  },
      { icon: '💼', value: '2–3 wks',  label: 'Return to Work'   },
      { icon: '✨', value: '12 mos',   label: 'Final Results'    },
    ],
  },

  facts: [
    { value: '3–5 hrs',  label: 'Procedure Time'  },
    { value: '5–7 days', label: 'Stay in Tijuana' },
    { value: '2–3 wks',  label: 'Return to Work'  },
    { value: '12 mos',   label: 'Final Results'   },
  ],

  intro: {
    eyebrow:  'Facelift',
    heading:  'What Is a Facelift?',
    paragraphs: [
      'A facelift tightens the underlying SMAS layer — the muscle and connective tissue of the face — ' +
      'and removes excess skin to restore a more youthful facial contour. Modern facelift techniques ' +
      'focus on volume redistribution and natural facial movement rather than the tight, pulled ' +
      'appearance associated with older approaches. It commonly addresses the cheeks, jowls, and ' +
      'neck simultaneously.',
      'The procedure is performed under general or local anesthesia with sedation, and incisions are ' +
      'hidden in the hairline and natural creases around the ears. With proper healing, scarring is ' +
      'minimally visible and continues to fade over 12 months.',
      'Facelift surgery in Tijuana, Mexico at Russald Medical Center provides access to experienced ' +
      'facial plastic surgeons at 60–75% below US costs — with the same coordinated international ' +
      'patient process used across all Russald specialties.',
    ],
    candidatesHeading: '✨  Who Is a Candidate?',
    candidates: [
      'Adults with visible facial sagging, jowls, or neck laxity',
      'Skin with sufficient elasticity for a good surgical result',
      'Non-smokers — smoking significantly impairs wound healing',
      'Stable weight for at least 3 months',
      'Realistic expectations about scope and longevity of results',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Facelift?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Facelift in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does a facelift cost in Tijuana, Mexico?',
        a: 'Facelift surgery at Russald Medical Center costs 60–75% less than US plastic surgery centers, where the procedure commonly runs $12,000–$25,000+. Contact our team for a personalized quote based on your goals and anatomy.',
      },
      {
        q: 'How long does a facelift last?',
        a: 'A facelift turns back the clock by approximately 7–10 years and results typically last 7–10 years, though this varies by individual aging pattern, genetics, lifestyle, and skin care. A well-executed facelift looks natural — not "done."',
      },
      {
        q: 'Can a facelift be combined with other facial procedures?',
        a: 'Yes. Facelift is commonly combined with blepharoplasty (eyelid surgery), brow lift, or facial fat grafting for more comprehensive rejuvenation. The combination is evaluated based on surgical time and your specific anatomy.',
      },
      {
        q: 'Is there visible scarring after a facelift?',
        a: 'Incisions are placed in the hairline and natural creases around the ears. With proper healing, scars are minimally visible and continue to fade over 12 months. An experienced plastic surgeon places incisions to be well-concealed.',
      },
      {
        q: 'What is the difference between a mini facelift and a full facelift?',
        a: 'A mini facelift involves shorter incisions and focuses on the lower face and jawline only — with less downtime. A full facelift addresses the cheeks, jowls, and neck more comprehensively. The right approach depends on the extent of sagging and your goals.',
      },
    ],
  },
} satisfies SubProcPageData
