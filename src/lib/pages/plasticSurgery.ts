// Contenido de la página Plastic Surgery
// Figma canvas: 4068:2014 — file JDTx8NHZfyljUTJPpxy3SZ

import type { SpecPageData } from '@/types/spec'

export const plasticData = {
  hero: {
    pageLabel:   'Plastic Surgery',
    eyebrowTag:  'Aesthetic & Reconstructive Surgery · Tijuana, Mexico',
    heading:     'Board-Certified Plastic Surgery: Premium Results at a Fraction of US Cost',
    description:
      'Russald Medical Center offers the full spectrum of aesthetic and reconstructive procedures — ' +
      'rhinoplasty, breast surgery, body contouring, facial rejuvenation, and more — performed by ' +
      'board-certified plastic surgeons in a fully accredited facility, minutes from the San Diego border.',
    stats: [
      { icon: '💰', value: '50–70%',       label: 'Less Than US Cost'      },
      { icon: '🕐', value: '2–6 hrs',       label: 'Typical Procedure'     },
      { icon: '🏨', value: '1–7 days',      label: 'Stay in Tijuana'       },
      { icon: '🏅', value: 'Board-Certified', label: 'Plastic Surgeons'    },
    ],
  },

  facts: [
    { value: '50–70%',         label: 'Less Than US Cost'   },
    { value: '2–6 hrs',        label: 'Typical Procedure'   },
    { value: '1–7 days',       label: 'Stay in Tijuana'     },
    { value: 'Board-Certified', label: 'Plastic Surgeons'   },
  ],

  intro: {
    eyebrow: 'Plastic Surgery',
    heading: 'Precision Aesthetics: Surgical Results You Can Trust',
    paragraphs: [
      'Plastic surgery at Russald Medical Center is performed by board-certified surgeons trained in ' +
      'aesthetic and reconstructive procedures. Every patient consultation begins with a detailed ' +
      'evaluation — reviewing anatomy, goals, medical history, and realistic outcome expectations — ' +
      'before any surgical plan is confirmed. We do not offer cookie-cutter results.',
      'Our facility is fully equipped for procedures ranging from minimally invasive facial work to ' +
      'complex multi-area body contouring. We offer rhinoplasty, breast augmentation and reduction, ' +
      'liposuction, abdominoplasty, Brazilian butt lift, facelift, blepharoplasty, and mommy makeover ' +
      'packages, all performed under the supervision of certified anesthesiologists.',
      'For patients traveling from the United States, Tijuana offers an exceptional combination of ' +
      'surgical quality and cost efficiency. The full procedure, recovery stay, and post-operative ' +
      'follow-up can be completed within days of crossing the border — no long-haul flights required.',
    ],
    candidatesHeading: '📋  Who Is a Candidate?',
    candidates: [
      'Adults in good general health with realistic expectations about surgical outcomes',
      'Non-smokers, or patients willing to stop at least 4–6 weeks before and after surgery',
      'Patients at or near their target weight — particularly important for body contouring procedures',
      'Individuals without active infections, uncontrolled chronic conditions, or bleeding disorders',
      'Women who are not pregnant or breastfeeding and who have completed their family planning (for mommy makeover)',
    ],
    disclaimer:
      '⚠️  All procedures require a medical consultation to confirm candidacy. The information ' +
      'on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Us for Plastic Surgery?',
    items: [
      {
        icon: '🏅',
        title: 'Board-Certified Plastic Surgeons',
        body:  'Every procedure is performed by surgeons certified in plastic and reconstructive surgery — trained to international standards and credentialed by recognized medical boards.',
      },
      {
        icon: '🏥',
        title: 'Accredited Surgical Facility',
        body:  'Our operating rooms meet strict safety and hygiene standards. Certified anesthesiologists manage every case. You are not trading quality for cost — you are eliminating overhead.',
      },
      {
        icon: '💰',
        title: '50–70% Less Than US Pricing',
        body:  'A rhinoplasty that costs $8,000–$15,000 in the United States is available at Russald Medical Center at a fraction of that price — with the same surgeon credentials and facility standards.',
      },
      {
        icon: '🛫',
        title: 'Minutes from the US Border',
        body:  'No international flights. The San Diego border crossing is approximately 20 minutes away. Most patients drive over, complete their procedure and recovery, and return home within a week.',
      },
      {
        icon: '📋',
        title: 'Structured Pre- and Post-Op Care',
        body:  'Pre-operative labs, anesthesia clearance, post-surgical garments, written recovery instructions, and scheduled follow-up appointments are coordinated as part of every procedure.',
      },
      {
        icon: '🌐',
        title: 'English-Speaking Coordination',
        body:  'Your patient coordinator manages the entire process in English — from initial consultation and quote through discharge instructions and remote follow-up. Nothing gets lost in translation.',
      },
    ],
  },

  proc: {
    eyebrow:     'Plastic Surgery Procedures',
    heading:     'Available Plastic Surgery Procedures',
    description: 'Each procedure page includes clinical detail, candidacy criteria, step-by-step process, recovery timeline, pricing context, and answers to the most common patient questions.',
    procedures: [
      { icon: '👃', title: 'Rhinoplasty',           category: 'Facial Surgery',        href: '/plastic-surgery/rhinoplasty'           },
      { icon: '✨', title: 'Facelift',               category: 'Facial Surgery',        href: '/plastic-surgery/facelift'              },
      { icon: '👁️', title: 'Blepharoplasty',         category: 'Facial Surgery',        href: '/plastic-surgery/blepharoplasty'        },
      { icon: '👙', title: 'Breast Augmentation',    category: 'Breast Surgery',        href: '/plastic-surgery/breast-augmentation'   },
      { icon: '🩹', title: 'Breast Reduction',       category: 'Breast Surgery',        href: '/plastic-surgery/breast-reduction'      },
      { icon: '💪', title: 'Liposuction',            category: 'Body Contouring',       href: '/plastic-surgery/liposuction'           },
      { icon: '🔷', title: 'Tummy Tuck',             category: 'Body Contouring',       href: '/plastic-surgery/tummy-tuck'           },
      { icon: '🍑', title: 'Brazilian Butt Lift',    category: 'Body Contouring',       href: '/plastic-surgery/brazilian-butt-lift'  },
      { icon: '🌟', title: 'Mommy Makeover',         category: 'Combined Procedures',   href: '/plastic-surgery/mommy-makeover'       },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Plastic Surgery in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does plastic surgery cost in Tijuana compared to the United States?',
        a: 'Plastic surgery procedures at Russald Medical Center cost 60–75% less than comparable procedures in the US. Prices vary by procedure and clinical complexity — your coordinator provides a detailed quote after your evaluation. There are no hidden facility fees.',
      },
      {
        q: 'Are the surgeons at Russald Medical Center board-certified?',
        a: 'Yes. Our plastic surgeons are certified by the Mexican Council of Plastic, Aesthetic, and Reconstructive Surgery (CMCPER) — the Mexican equivalent of the American Board of Plastic Surgery. They hold additional fellowship training and have performed thousands of procedures combined.',
      },
      {
        q: 'Is it safe to have plastic surgery in Mexico?',
        a: 'Safety depends on the facility and surgical team, not the country. Russald Medical Center operates in a fully equipped surgical suite, requires a pre-operative workup for every patient, and follows structured post-operative protocols. We do not perform same-day surgery without appropriate clinical evaluation.',
      },
      {
        q: 'How long do I need to stay in Tijuana after plastic surgery?',
        a: 'Recovery time varies by procedure. Most patients stay 3–7 days following the surgery before returning home. Your coordinator provides a specific timeline based on your procedure and recovery progress. You will receive written discharge instructions before you leave.',
      },
      {
        q: 'Can I combine multiple procedures in one visit?',
        a: 'Yes — combining procedures such as liposuction and tummy tuck, or breast augmentation with a lift, is common and reduces total downtime. Your surgeon will evaluate the safety of combining procedures based on anesthesia time, your health status, and recovery considerations. Not all combinations are appropriate for every patient.',
      },
      {
        q: 'Will my results look natural?',
        a: 'Natural-looking results depend on the surgical plan, technique, and the skill of the surgeon. At Russald Medical Center, your surgeon reviews your goals during the consultation and explains what is anatomically achievable. We do not use a one-size-fits-all approach — your proportions, existing tissue, and desired outcome all factor into the surgical plan.',
      },
    ],
  },
} satisfies SpecPageData
