// Sub-procedimientos de Men's Health
// Fuente: russald_vFinal.html → renderImplant / renderED / renderTRT / renderPShot

import type { SubProcPageData, SpecWhyItem } from '@/types/spec'

const WHY: readonly SpecWhyItem[] = [
  {
    icon:  '🔒',
    title: 'Complete Privacy — First Contact to Discharge',
    body:  'All consultations, communications, and treatments for men\'s health at Russald are handled with complete confidentiality by a dedicated coordinator. Nothing is shared on public channels without your consent.',
  },
  {
    icon:  '🔬',
    title: 'Lab-Based Evaluation — Not Symptom-Only',
    body:  'Hormonal therapies are initiated based on laboratory findings, not symptoms alone. We confirm deficiency before prescribing — this is what separates clinical care from unsupervised programs.',
  },
  {
    icon:  '🏥',
    title: 'Board-Certified Physicians',
    body:  'All procedures and protocols are performed or supervised by licensed, board-certified physicians at Russald Medical Center. Not a wellness spa. Not a supplement company.',
  },
  {
    icon:  '💰',
    title: '60–75% Less Than US Men\'s Health Clinics',
    body:  'Men\'s health clinics in the US charge premium pricing for testosterone therapy, PRP, and surgical procedures. Russald delivers the same clinical standards at a fraction of the cost.',
  },
  {
    icon:  '📱',
    title: 'Remote Initial Consultation Available',
    body:  'Lab evaluation and initial consultation can be completed remotely before you travel. For surgical procedures, the surgeon reviews your case and confirms candidacy before you commit to the visit.',
  },
  {
    icon:  '📍',
    title: '20 Minutes from San Diego',
    body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. Most men\'s health treatments can be completed in a 1–3 day visit.',
  },
] as const

export const implantData: SubProcPageData = {
  hero: {
    pageLabel:   'Male Enhancement Implant',
    eyebrowTag:  'Men\'s Health · Tijuana, Mexico',
    heading:     'Male Enhancement Implant Surgery in Tijuana, Mexico',
    description:
      'A subcutaneous silicone implant placed beneath the penile skin for permanent girth enhancement ' +
      'and improved flaccid length. FDA-cleared device. No pump, no inflation, no moving parts. ' +
      'Natural erections fully preserved. Complete privacy from first contact to discharge.',
    stats: [
      { icon: '💰', value: '$18–22K',    label: 'All-Inclusive USD'  },
      { icon: '⏱️', value: '45–60 min', label: 'Procedure Time'     },
      { icon: '🏠', value: 'Same Day',  label: 'Discharge'          },
      { icon: '🏃', value: '6–8 wks',  label: 'To Full Recovery'   },
    ],
  },

  facts: [
    { value: '$18–22K',    label: 'All-Inclusive USD'  },
    { value: '45–60 min', label: 'Procedure Time'     },
    { value: 'Same Day',  label: 'Discharge'          },
    { value: '6–8 wks',  label: 'To Full Recovery'   },
  ],

  intro: {
    eyebrow:  'Male Enhancement Implant',
    heading:  'What Is the Male Enhancement Implant?',
    paragraphs: [
      'The Male Enhancement Implant is a subcutaneous silicone sleeve placed beneath the penile skin ' +
      'through a small scrotal incision. It wraps 270 degrees around the shaft, sitting above the ' +
      'erectile tissue so that natural erections are fully preserved. The implant is solid medical-grade ' +
      'silicone — no pump, no fluid reservoir, no inflation mechanism. It is a permanent aesthetic enhancement.',
      'Girth increases of 1 to 2 inches in circumference are typical, with noticeable improvement in ' +
      'flaccid length. The device is FDA-cleared for cosmetic penile augmentation, custom-trimmed by ' +
      'the surgeon to each patient\'s anatomy at the time of surgery, and available in sizes L, XL, ' +
      'and XXL. It can be removed if ever desired.',
      'In the United States, this procedure typically costs $18,000–$24,000 with limited clinic ' +
      'availability. Russald Medical Center in Tijuana offers the same FDA-cleared implant at ' +
      '$18,000–$22,000 all-inclusive, 20 minutes from San Diego, with a dedicated private ' +
      'coordination program and a board-certified urological surgeon experienced in the procedure.',
    ],
    candidatesHeading: '🔒  Who Is a Candidate?',
    candidates: [
      'Men seeking permanent cosmetic girth enhancement and improved flaccid length',
      'Circumcised men — or those willing to undergo circumcision prior to the implant',
      'Adults 21 years of age or older',
      'No prior penile enhancement surgeries, fillers, or fat transfers',
      'Non-smokers or those who have stopped smoking well in advance of surgery',
      'Realistic expectations for cosmetic improvement — this is not an ED treatment',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. This procedure ' +
      'is for cosmetic augmentation only — it does not treat erectile dysfunction. The information ' +
      'on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Male Enhancement Implant?',
    items: [
      {
        icon:  '🔒',
        title: 'Private Evaluation — No Public Advertising',
        body:  'All inquiries are handled by a dedicated coordinator with full discretion. This procedure is not advertised on social media. First contact through discharge is managed privately via WhatsApp.',
      },
      {
        icon:  '🏥',
        title: 'Board-Certified Urological Surgeon',
        body:  'The procedure is performed by a board-certified urological surgeon with experience in the penile implant technique. You are reviewed by the surgeon remotely before travel is confirmed.',
      },
      {
        icon:  '✅',
        title: 'FDA-Cleared Device',
        body:  'The silicone sleeve implant is FDA-cleared for cosmetic penile augmentation. Available in L, XL, and XXL — custom-trimmed to your anatomy by the surgeon on procedure day.',
      },
      {
        icon:  '💰',
        title: '$18,000–$22,000 All-Inclusive',
        body:  'US clinic pricing for the same procedure ranges from $18,000–$24,000 with limited availability. Our all-inclusive price covers surgeon fee, the implant, anesthesia, facility, and private coordination.',
      },
      {
        icon:  '🏠',
        title: 'Same-Day Discharge',
        body:  'The procedure takes 45–60 minutes under general anesthesia. Most patients are discharged the same day. A JP drain is placed at the incision site and typically stays 2–3 days.',
      },
      {
        icon:  '📍',
        title: '20 Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. The procedure typically requires a 2–3 day trip from the US.',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Male Enhancement Implant in Tijuana — Common Questions',
    items: [
      {
        q: 'What is the Male Enhancement Implant and how does it work?',
        a: 'It is a subcutaneous silicone sleeve surgically placed beneath the penile skin through a small scrotal incision. It wraps around the shaft above the erectile tissue, permanently increasing girth and improving flaccid length. It has no pump, no inflation mechanism, and no moving parts. Natural erections are fully preserved because the implant sits above — not inside — the erectile tissue.',
      },
      {
        q: 'Is the device FDA-cleared?',
        a: 'Yes. The silicone sleeve implant is FDA-cleared for cosmetic penile augmentation. FDA clearance confirms the device meets safety and effectiveness standards for its indicated use.',
      },
      {
        q: 'How much does male enhancement implant surgery cost in Tijuana?',
        a: 'The all-inclusive program at Russald Medical Center is $18,000–$22,000 USD. This includes the surgeon fee, the silicone implant, anesthesia, facility, and private coordination. US clinic pricing for the same procedure typically ranges from $18,000–$24,000.',
      },
      {
        q: 'Does the implant affect natural erections?',
        a: 'No. The implant is placed subcutaneously, above the erectile tissue. It does not enter or modify the corpora cavernosa. Natural erections are fully preserved. Most patients report normal erectile function well within the recovery period.',
      },
      {
        q: 'Do I need to be circumcised?',
        a: 'Yes. Circumcision is required before the implant procedure. If you are not circumcised, a circumcision can be performed at Russald as a preparatory step before scheduling the implant.',
      },
      {
        q: 'Can the implant be removed?',
        a: 'Yes. The implant can be removed laparoscopically if desired. The procedure is designed to be permanent, but it is not irreversible.',
      },
      {
        q: 'How private is the consultation process?',
        a: 'Completely private. All inquiries are handled by a dedicated coordinator with full discretion. This procedure is not advertised on public social media channels. The entire process from first contact through discharge is managed privately.',
      },
    ],
  },
} satisfies SubProcPageData

export const edData: SubProcPageData = {
  hero: {
    pageLabel:   'Erectile Dysfunction',
    eyebrowTag:  'Men\'s Health · Tijuana, Mexico',
    heading:     'Erectile Dysfunction Treatment in Tijuana, Mexico',
    description:
      'Erectile dysfunction affects millions of men and has a variety of contributing causes — hormonal, ' +
      'vascular, neurological, and psychological. At Russald Medical Center in Tijuana, Mexico, we offer ' +
      'a personalized, physician-guided evaluation and treatment approach with complete confidentiality.',
    stats: [
      { icon: '🔒', value: 'Private',   label: 'Confidential Consultations' },
      { icon: '🔬', value: 'Multiple',  label: 'Treatment Options'          },
      { icon: '📱', value: 'Remote',    label: 'Initial Consult Available'  },
      { icon: '📍', value: 'Tijuana',   label: 'In-Person Treatment'        },
    ],
  },

  facts: [
    { value: 'Private',  label: 'Confidential'     },
    { value: 'Multiple', label: 'Treatment Options' },
    { value: 'Remote',   label: 'Initial Consult'  },
    { value: '1–2 visits', label: 'Typical Process' },
  ],

  intro: {
    eyebrow:  'Erectile Dysfunction',
    heading:  'How We Approach ED Treatment',
    paragraphs: [
      'ED treatment at Russald Medical Center begins with a thorough evaluation to identify contributing ' +
      'factors — including testosterone levels, vascular function, medication history, and lifestyle ' +
      'factors. Based on the evaluation, treatment may include testosterone optimization (TRT), ' +
      'P-Shot (PRP injection), or other physician-directed approaches. There is no single treatment ' +
      'for ED — the best outcomes come from addressing the specific underlying cause.',
      'Many men with ED have an undiagnosed hormonal component. Low testosterone is one of several ' +
      'treatable contributors that a proper lab evaluation will identify. If TRT is indicated, it ' +
      'is initiated based on confirmed lab findings — not assumptions.',
      'Men\'s health treatment in Tijuana, Mexico at Russald Medical Center offers the same quality ' +
      'of care as US men\'s health clinics at 60–75% below US pricing. Remote initial consultations ' +
      'allow men to begin the process privately before deciding to travel.',
    ],
    candidatesHeading: '🔒  Who Should Consider Evaluation?',
    candidates: [
      'Men experiencing erectile dysfunction of any degree',
      'Those with possible hormonal contributing factors (fatigue, low libido, reduced muscle)',
      'Patients who have not responded adequately to oral medications',
      'Men seeking a regenerative or non-pharmaceutical approach',
    ],
    disclaimer:
      '⚠️  All evaluations and treatments require physician oversight. The information on this ' +
      'page is for educational purposes only and does not constitute medical advice.',
  },

  why: { eyebrow: 'Why Russald Medical Center', heading: 'Why Choose Russald for ED Treatment?', items: WHY },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Erectile Dysfunction Treatment in Tijuana — Common Questions',
    items: [
      {
        q: 'Is the consultation for ED treatment confidential?',
        a: 'Yes. All consultations, communications, and treatments for men\'s health at Russald Medical Center are handled with complete confidentiality and professionalism by a dedicated coordinator.',
      },
      {
        q: 'Can low testosterone cause erectile dysfunction?',
        a: 'Yes. Testosterone deficiency is one of several potential contributors to ED. A full lab evaluation assesses hormonal, vascular, and other factors to identify the contributing cause before treatment is recommended.',
      },
      {
        q: 'What is the P-Shot?',
        a: 'The P-Shot (Priapus Shot) uses PRP (platelet-rich plasma) from your own blood, injected into specific areas to promote tissue regeneration and improved vascular function. It is used in selected men\'s sexual health treatment plans.',
      },
      {
        q: 'Do I need to travel to Tijuana for treatment?',
        a: 'The initial consultation and lab evaluation can be done remotely. In-person treatment is performed at our Tijuana facility. Most treatment plans are completed in 1–2 visits.',
      },
    ],
  },
} satisfies SubProcPageData

export const testosteroneData: SubProcPageData = {
  hero: {
    pageLabel:   'Testosterone Therapy',
    eyebrowTag:  'Men\'s Health · Tijuana, Mexico',
    heading:     'Testosterone Replacement Therapy (TRT) in Tijuana, Mexico',
    description:
      'Testosterone replacement therapy (TRT) is a physician-supervised treatment for men with ' +
      'clinically confirmed low testosterone. At Russald Medical Center in Tijuana, Mexico, ' +
      'TRT protocols are based on laboratory evaluation and tailored to each patient\'s clinical picture.',
    stats: [
      { icon: '🔬', value: 'Lab-Based',  label: 'Diagnosis Required'   },
      { icon: '📊', value: 'Ongoing',    label: 'Monitoring Program'   },
      { icon: '📱', value: 'Remote',     label: 'Initial Consult'      },
      { icon: '💉', value: 'Multiple',   label: 'Delivery Methods'     },
    ],
  },

  facts: [
    { value: 'Lab-Based', label: 'Diagnosis Required'  },
    { value: 'Ongoing',   label: 'Monitoring Program'  },
    { value: 'Remote',    label: 'Initial Consult'     },
    { value: 'Multiple',  label: 'Delivery Methods'    },
  ],

  intro: {
    eyebrow:  'Testosterone Replacement Therapy',
    heading:  'What Is TRT?',
    paragraphs: [
      'TRT involves restoring testosterone to physiologic levels through physician-prescribed delivery ' +
      'methods — including injectable testosterone (most common), topical gels, or pellets. Treatment ' +
      'is initiated based on confirmed low testosterone on lab testing combined with clinical symptoms. ' +
      'Ongoing monitoring of testosterone levels, hematocrit, PSA, and other markers is required ' +
      'throughout treatment.',
      'Symptoms of testosterone deficiency include fatigue, reduced libido, loss of muscle mass, ' +
      'increased body fat, brain fog, mood changes, and erectile dysfunction. Not all of these symptoms ' +
      'are caused by low T — proper lab evaluation distinguishes hormonal contributors from other causes.',
      'TRT in Tijuana, Mexico at Russald Medical Center is offered at significantly lower cost than US ' +
      'men\'s health or hormone therapy clinics. Remote initial consultations are available, and protocols ' +
      'are developed based on lab results reviewed by our physician team.',
    ],
    candidatesHeading: '🔬  Who Is a Candidate for TRT?',
    candidates: [
      'Men with confirmed low serum testosterone on morning lab testing (ideally two samples)',
      'Symptoms of testosterone deficiency: fatigue, low libido, reduced muscle, brain fog',
      'No active prostate cancer',
      'Men who desire TRT after informed discussion of benefits, risks, and fertility implications',
    ],
    disclaimer:
      '⚠️  TRT requires physician evaluation, lab confirmation, and ongoing monitoring. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: { eyebrow: 'Why Russald Medical Center', heading: 'Why Choose Russald for TRT?', items: WHY },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'TRT in Tijuana — Common Questions',
    items: [
      {
        q: 'How do I know if I need TRT?',
        a: 'Low testosterone is confirmed through morning serum testosterone testing — ideally on two separate occasions. Symptoms alone are not sufficient to start TRT. A full lab evaluation including LH, FSH, estradiol, and PSA is part of the workup.',
      },
      {
        q: 'Is TRT safe?',
        a: 'TRT is safe for appropriate candidates when monitored by a physician. Potential risks include effects on fertility, hematocrit elevation, and estradiol balance. These are managed through regular monitoring labs at 6–8 weeks after initiation and every 3–6 months ongoing.',
      },
      {
        q: 'Will TRT affect my fertility?',
        a: 'TRT suppresses natural testosterone production and can significantly reduce sperm production. Men who desire future fertility should discuss alternatives such as clomiphene or HCG before starting TRT.',
      },
      {
        q: 'How much does TRT cost in Tijuana, Mexico?',
        a: 'TRT through Russald Medical Center is significantly less expensive than US men\'s health clinics. Contact our team for current pricing based on protocol and monitoring requirements.',
      },
      {
        q: 'Can I start TRT remotely?',
        a: 'Lab evaluation can be initiated remotely. The prescription and protocol are managed by our physician team after lab results are reviewed. In-person visits are scheduled based on your protocol requirements.',
      },
    ],
  },
} satisfies SubProcPageData

export const pShotData: SubProcPageData = {
  hero: {
    pageLabel:   'P-Shot',
    eyebrowTag:  'Men\'s Health · Tijuana, Mexico',
    heading:     'P-Shot (Priapus Shot) in Tijuana, Mexico',
    description:
      'The P-Shot uses platelet-rich plasma (PRP) derived from your own blood to support male ' +
      'sexual health and function. At Russald Medical Center in Tijuana, Mexico, it is used in ' +
      'selected men\'s sexual wellness treatment plans as a non-surgical, regenerative option.',
    stats: [
      { icon: '⏱️', value: '30–45 min', label: 'Procedure Time' },
      { icon: '🏠', value: 'Same Day', label: 'Return Home'    },
      { icon: '🩹', value: 'Minimal',  label: 'Downtime'       },
      { icon: '✨', value: '4–8 wks',  label: 'Results Timeline' },
    ],
  },

  facts: [
    { value: '30–45 min', label: 'Procedure Time'   },
    { value: 'Same Day',  label: 'Return Home'      },
    { value: 'Minimal',   label: 'Downtime'         },
    { value: '4–8 wks',   label: 'Results Timeline' },
  ],

  intro: {
    eyebrow:  'P-Shot',
    heading:  'What Is the P-Shot?',
    paragraphs: [
      'The P-Shot (Priapus Shot) involves drawing a small blood sample, concentrating the PRP via ' +
      'centrifuge, and injecting the platelet-rich solution into targeted areas after topical numbing. ' +
      'The growth factors in PRP are believed to promote tissue regeneration, improve vascular response, ' +
      'and support sexual function over a 4–8 week period.',
      'The P-Shot is a supportive treatment used as part of a broader sexual health plan. It is not a ' +
      'cure for erectile dysfunction and works best in combination with hormonal optimization and other ' +
      'physician-directed approaches when clinically indicated.',
      'P-Shot treatment in Tijuana, Mexico at Russald Medical Center is significantly less expensive ' +
      'than at US men\'s health or regenerative clinics and can be completed in a single visit.',
    ],
    candidatesHeading: '🔒  Who Is a Candidate?',
    candidates: [
      'Men seeking a non-surgical, regenerative approach to sexual wellness',
      'Those with mild to moderate ED as part of a broader treatment plan',
      'Men interested in combining PRP with hormonal optimization',
      'Realistic expectations about the degree and timeline of results',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: { eyebrow: 'Why Russald Medical Center', heading: 'Why Choose Russald for the P-Shot?', items: WHY },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'P-Shot in Tijuana — Common Questions',
    items: [
      {
        q: 'Does the P-Shot hurt?',
        a: 'Topical numbing is applied before the injection. Most patients report minimal discomfort during the procedure. The process is well-tolerated on an outpatient basis.',
      },
      {
        q: 'How many P-Shot sessions do I need?',
        a: 'Most patients complete 1–2 sessions. A single session is often recommended initially, with reassessment at 6–8 weeks to evaluate response and determine whether a follow-up is indicated.',
      },
      {
        q: 'Is the P-Shot a permanent solution for ED?',
        a: 'The P-Shot is not a cure for erectile dysfunction. It is a supportive treatment that may improve vascular function and tissue health over time. Results vary by individual. It works best as part of a comprehensive evaluation and treatment plan.',
      },
      {
        q: 'How much does the P-Shot cost in Tijuana, Mexico?',
        a: 'The P-Shot at Russald Medical Center is significantly less expensive than US men\'s health and regenerative clinics. Contact our team for current pricing.',
      },
    ],
  },
} satisfies SubProcPageData
