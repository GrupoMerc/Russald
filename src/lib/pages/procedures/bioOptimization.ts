// Sub-procedimientos de Bio Optimization & Performance Medicine
// Fuente: russald_vFinal.html → renderHGH / renderBHRT / renderTRT / renderMyers / renderNAD / renderPRP

import type { SubProcPageData, SpecWhyItem } from '@/types/spec'

const WHY: readonly SpecWhyItem[] = [
  {
    icon:  '🔬',
    title: 'Lab-Based — Not Symptom-Guessing',
    body:  'Every hormonal protocol at Russald starts with a comprehensive lab panel. We confirm the deficiency before prescribing. This is clinical care, not a subscription wellness service.',
  },
  {
    icon:  '🏥',
    title: 'Physician-Supervised Programs',
    body:  'All bio optimization protocols at Russald are overseen by licensed, board-certified physicians. No wellness spa, no unsupervised peptide seller — physician evaluation, prescription, and monitoring.',
  },
  {
    icon:  '💰',
    title: '60–75% Less Than US Hormone Clinics',
    body:  'US longevity and hormone clinics charge premium pricing for TRT, HGH, BHRT, and IV therapies. Russald delivers the same clinical standards at a significant fraction of that cost.',
  },
  {
    icon:  '📱',
    title: 'Remote Consultation Available',
    body:  'Lab evaluation and initial consultation for hormonal therapies can be initiated remotely before you travel. Protocols are developed by our physician team based on your lab results.',
  },
  {
    icon:  '🔄',
    title: 'Integrated Protocols — Not Isolated Treatments',
    body:  'Bio optimization at Russald is approached as a system: hormonal balance, cellular energy (NAD IV), nutrient repletion (Myers), and regenerative treatments can be combined in a single visit for a comprehensive protocol.',
  },
  {
    icon:  '📍',
    title: '20 Minutes from San Diego',
    body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. IV therapies can be completed in a day trip. Hormonal protocols are initiated in-clinic and managed remotely.',
  },
] as const

export const hghData: SubProcPageData = {
  hero: {
    pageLabel:   'HGH Therapy',
    eyebrowTag:  'Bio Optimization · Tijuana, Mexico',
    heading:     'HGH Therapy in Tijuana, Mexico',
    description:
      'HGH therapy is a physician-supervised treatment for patients with clinically evaluated growth ' +
      'hormone deficiency or related concerns. At Russald Medical Center in Tijuana, Mexico, HGH ' +
      'treatment is initiated only after proper medical evaluation and is not appropriate for all patients.',
    stats: [
      { icon: '🧪', value: 'Lab-Based',   label: 'Evaluation Required' },
      { icon: '👨‍⚕️', value: 'Supervised', label: 'Physician-Prescribed' },
      { icon: '💉', value: 'Injectable',  label: 'Delivery Method'      },
      { icon: '📊', value: 'Ongoing',     label: 'Monitoring Required'  },
    ],
  },

  facts: [
    { value: 'Lab-Based',   label: 'Evaluation Required' },
    { value: 'Supervised',  label: 'Physician-Prescribed' },
    { value: 'Injectable',  label: 'Delivery Method'      },
    { value: 'Ongoing',     label: 'Monitoring Required'  },
  ],

  intro: {
    eyebrow:  'HGH Therapy',
    heading:  'What Is HGH Therapy?',
    paragraphs: [
      'Human growth hormone (HGH) is produced by the pituitary gland and regulates metabolism, body ' +
      'composition, and tissue repair. HGH therapy involves physician-prescribed subcutaneous injections ' +
      'of recombinant HGH. It may be indicated in patients with documented growth hormone deficiency ' +
      'and is used in some performance and longevity medicine contexts under physician supervision. ' +
      'Russald Medical Center does not prescribe HGH for non-medical performance enhancement.',
      'Candidacy for HGH therapy requires a complete evaluation including IGF-1 testing, fasting insulin, ' +
      'glucose, and clinical assessment. Protocol, dosing, and monitoring intervals are determined by ' +
      'the physician based on lab findings and patient presentation.',
      'HGH therapy in Tijuana, Mexico at Russald Medical Center is offered under the same standards of ' +
      'care as US hormone clinics at a significantly lower cost. Full lab evaluation and physician review ' +
      'are required before any HGH protocol is prescribed.',
    ],
    candidatesHeading: '🧬  Who Is a Candidate?',
    candidates: [
      'Patients with clinically evaluated and documented growth hormone deficiency',
      'Selected patients in physician-supervised longevity and performance medicine programs',
      'Adults who have undergone complete evaluation including IGF-1 testing',
      'Not appropriate for active cancer patients, patients with diabetic retinopathy, or use without clinical evaluation',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for HGH Therapy?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'HGH Therapy in Tijuana — Common Questions',
    items: [
      {
        q: 'Who is a candidate for HGH therapy?',
        a: 'HGH therapy is appropriate for patients with clinically documented growth hormone deficiency or in selected physician-supervised performance medicine programs. It is not appropriate for general anti-aging use without a proper medical evaluation.',
      },
      {
        q: 'Is HGH therapy legal in Mexico?',
        a: 'Yes. HGH therapy prescribed by a licensed physician in Mexico is legal and regulated under Mexican health law.',
      },
      {
        q: 'What is the difference between HGH and testosterone therapy?',
        a: 'Testosterone therapy addresses sex hormone deficiency. HGH therapy addresses growth hormone deficiency. They target different hormonal axes and are prescribed based on different lab findings and clinical presentations. Some patients may be candidates for both.',
      },
      {
        q: 'How much does HGH therapy cost in Tijuana, Mexico?',
        a: 'HGH therapy in Tijuana, Mexico is significantly less expensive than at US longevity or hormone clinics. Contact our team for current pricing based on protocol and dosage.',
      },
    ],
  },
} satisfies SubProcPageData

export const bhrtData: SubProcPageData = {
  hero: {
    pageLabel:   'BHRT',
    eyebrowTag:  'Bio Optimization · Tijuana, Mexico',
    heading:     'Bioidentical Hormone Replacement Therapy in Tijuana, Mexico',
    description:
      'Bioidentical hormone replacement therapy (BHRT) uses hormones molecularly identical to those ' +
      'produced by the body to address hormonal imbalance, perimenopause and menopause symptoms, and ' +
      'hormone-related decline. At Russald Medical Center in Tijuana, Mexico, BHRT is prescribed based ' +
      'on symptom review and comprehensive lab evaluation.',
    stats: [
      { icon: '🧪', value: 'Lab Panel',    label: 'Evaluation Required'  },
      { icon: '👤', value: 'Personalized', label: 'Individualized Protocol' },
      { icon: '📱', value: 'Remote',       label: 'Initial Consult Available' },
      { icon: '📊', value: 'Ongoing',      label: 'Monitoring Included'  },
    ],
  },

  facts: [
    { value: 'Lab Panel',    label: 'Evaluation Required'     },
    { value: 'Personalized', label: 'Individualized Protocol' },
    { value: 'Remote',       label: 'Initial Consult Avail.'  },
    { value: 'Ongoing',      label: 'Monitoring Included'     },
  ],

  intro: {
    eyebrow:  'BHRT',
    heading:  'What Is Bioidentical Hormone Replacement Therapy (BHRT)?',
    paragraphs: [
      'BHRT may include estrogen (estradiol), progesterone, testosterone, DHEA, and other hormones ' +
      'depending on the patient\'s lab results, symptoms, and goals. Unlike synthetic hormone therapy, ' +
      'bioidentical hormones are derived from plant sources and chemically modified to match the body\'s ' +
      'natural hormones. They are delivered via cream, patch, pellet, or injection depending on the ' +
      'hormone and patient preference.',
      'Treatment is initiated based on a comprehensive hormonal panel including sex hormones, thyroid, ' +
      'and adrenal markers — reviewed by a physician who then develops an individualized protocol. ' +
      'Follow-up labs at 8–12 weeks and ongoing quarterly monitoring are standard.',
      'BHRT in Tijuana, Mexico at Russald Medical Center is offered at a significantly lower cost than ' +
      'US functional medicine or hormone therapy clinics. Remote consultations allow patients to begin ' +
      'the evaluation process before deciding to travel for in-person treatment.',
    ],
    candidatesHeading: '🧬  Who Is a Candidate?',
    candidates: [
      'Women experiencing perimenopause or menopause symptoms (hot flashes, sleep disturbance, mood changes, libido decline)',
      'Patients with documented hormonal deficiencies on lab testing',
      'Men with testosterone-related concerns evaluated under the TRT protocol',
      'Patients who prefer bioidentical over synthetic hormone preparations',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for BHRT?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'BHRT in Tijuana — Common Questions',
    items: [
      {
        q: 'What is the difference between BHRT and conventional HRT?',
        a: 'Conventional HRT uses synthetic or animal-derived hormones that may not be identical to human hormones. BHRT uses hormones that are chemically identical to those naturally produced by the human body, derived from plant sources.',
      },
      {
        q: 'Is BHRT safe?',
        a: 'BHRT is considered safe for appropriate candidates when prescribed and monitored by a physician. Risk-benefit discussion is part of the consultation process, including cardiovascular and breast health considerations.',
      },
      {
        q: 'Can I start BHRT remotely?',
        a: 'Yes. Lab evaluation and initial consultation can be completed remotely. Our physician team reviews labs and develops your protocol based on results.',
      },
      {
        q: 'How much does BHRT cost in Tijuana, Mexico?',
        a: 'BHRT through Russald Medical Center in Tijuana, Mexico is significantly less expensive than US hormone therapy clinics. Contact our team for current pricing.',
      },
    ],
  },
} satisfies SubProcPageData

export const bioTrtData: SubProcPageData = {
  hero: {
    pageLabel:   'Testosterone Therapy (TRT)',
    eyebrowTag:  'Bio Optimization · Tijuana, Mexico',
    heading:     'Testosterone Replacement Therapy in Tijuana, Mexico',
    description:
      'Testosterone replacement therapy (TRT) is a physician-supervised treatment for men with ' +
      'clinically low testosterone levels. At Russald Medical Center in Tijuana, Mexico, TRT protocols ' +
      'are based on laboratory evaluation and tailored to each patient\'s clinical picture.',
    stats: [
      { icon: '🧪', value: 'Lab-Based',  label: 'Diagnosis Required'    },
      { icon: '📊', value: 'Ongoing',    label: 'Monitoring Program'     },
      { icon: '📱', value: 'Remote',     label: 'Initial Consult Avail.' },
      { icon: '💉', value: 'Multiple',   label: 'Delivery Methods'       },
    ],
  },

  facts: [
    { value: 'Lab-Based', label: 'Diagnosis Required'    },
    { value: 'Ongoing',   label: 'Monitoring Program'    },
    { value: 'Remote',    label: 'Initial Consult Avail.' },
    { value: 'Multiple',  label: 'Delivery Methods'      },
  ],

  intro: {
    eyebrow:  'Testosterone Therapy (TRT)',
    heading:  'What Is Testosterone Replacement Therapy (TRT)?',
    paragraphs: [
      'TRT involves restoring testosterone to physiologic levels through physician-prescribed delivery ' +
      'methods including injectable testosterone (most common), topical gels, or pellets. Treatment is ' +
      'initiated based on confirmed low testosterone on lab testing combined with clinical symptoms. ' +
      'Ongoing monitoring of testosterone levels, hematocrit, PSA, and other markers is required ' +
      'throughout treatment.',
      'Low testosterone affects energy, body composition, libido, cognitive clarity, and mood. Symptoms ' +
      'alone are not sufficient to diagnose low T — lab confirmation on two separate morning draws is ' +
      'the clinical standard. Russald initiates treatment only after lab confirmation.',
      'TRT in Tijuana, Mexico at Russald Medical Center is offered at significantly lower cost than US ' +
      'men\'s health or hormone therapy clinics. Remote initial consultations are available, and protocols ' +
      'are developed based on lab results reviewed by our physician team.',
    ],
    candidatesHeading: '🧬  Who Is a Candidate?',
    candidates: [
      'Men with confirmed low serum testosterone on morning lab testing',
      'Symptoms of low T: fatigue, low libido, reduced muscle mass, brain fog, mood changes',
      'No active prostate cancer',
      'Patients who have completed informed discussion of benefits and risks including effects on fertility',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for TRT?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'TRT in Tijuana — Common Questions',
    items: [
      {
        q: 'How do I know if I need TRT?',
        a: 'Low testosterone is confirmed through morning serum testosterone testing (ideally two samples on separate days). Symptoms alone are not sufficient to start TRT. Lab evaluation is required.',
      },
      {
        q: 'Is TRT safe?',
        a: 'TRT is safe for appropriate candidates when monitored by a physician. Potential risks include effects on fertility, hematocrit elevation, and estradiol balance. These are managed through regular monitoring.',
      },
      {
        q: 'Will TRT affect my fertility?',
        a: 'TRT suppresses natural testosterone production and can significantly reduce sperm production. Men who desire future fertility should discuss alternatives (such as clomiphene or HCG) before starting TRT.',
      },
      {
        q: 'Can I start TRT remotely?',
        a: 'Lab evaluation can be initiated remotely. Prescription and protocol are managed by our physician team after labs are reviewed.',
      },
      {
        q: 'How much does TRT cost in Tijuana, Mexico?',
        a: 'TRT through Russald Medical Center in Tijuana is significantly less expensive than through US men\'s health clinics. Contact our team for current pricing.',
      },
    ],
  },
} satisfies SubProcPageData

export const myersData: SubProcPageData = {
  hero: {
    pageLabel:   'Myers Cocktail IV',
    eyebrowTag:  'Bio Optimization · Tijuana, Mexico',
    heading:     'Myers Cocktail IV in Tijuana, Mexico',
    description:
      'Myers Cocktail IV is an intravenous infusion of vitamins and minerals including B vitamins, ' +
      'vitamin C, magnesium, and calcium, used to support energy, immune function, and recovery. ' +
      'At Russald Medical Center in Tijuana, Mexico, IV therapies are administered under physician oversight.',
    stats: [
      { icon: '⏱️', value: '30–60 min', label: 'Infusion Time'      },
      { icon: '🏠', value: 'Same Day',  label: 'Return Home'         },
      { icon: '🏥', value: 'Outpatient', label: 'No Hospitalization' },
      { icon: '✨', value: 'Immediate', label: 'Hydration Effect'    },
    ],
  },

  facts: [
    { value: '30–60 min', label: 'Infusion Time'      },
    { value: 'Same Day',  label: 'Return Home'         },
    { value: 'Outpatient', label: 'No Hospitalization' },
    { value: 'Immediate', label: 'Hydration Effect'    },
  ],

  intro: {
    eyebrow:  'Myers Cocktail IV',
    heading:  'What Is Myers Cocktail IV?',
    paragraphs: [
      'The Myers Cocktail was developed by physician John Myers and contains B vitamins (B1, B2, B3, ' +
      'B5, B6, B12), magnesium, calcium, and vitamin C in an intravenous saline solution. IV delivery ' +
      'bypasses the digestive system, achieving higher blood concentrations than oral supplementation. ' +
      'It is used as a supportive therapy for fatigue, immune support, athletic recovery, jet lag, ' +
      'and general wellness.',
      'The infusion takes 30–60 minutes and requires no recovery time. Patients leave the clinic the ' +
      'same day and have no activity restrictions. Myers Cocktail is commonly combined with other bio ' +
      'optimization treatments or scheduled as a recovery support day during a longer visit.',
      'IV therapy in Tijuana, Mexico at Russald Medical Center is significantly less expensive than at ' +
      'US IV therapy lounges or functional medicine clinics. It can be combined with other treatments ' +
      'during a visit to Tijuana.',
    ],
    candidatesHeading: '💊  Who Is a Candidate?',
    candidates: [
      'Patients experiencing fatigue, burnout, or stress',
      'Those seeking immune support or nutrient repletion',
      'Athletes looking for recovery support',
      'Patients combining IV therapy with another procedure at Russald Medical Center',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Myers Cocktail IV?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Myers Cocktail IV in Tijuana — Common Questions',
    items: [
      {
        q: 'How often should I get a Myers Cocktail IV?',
        a: 'Frequency depends on goals. Some patients receive infusions weekly during periods of illness or intense activity. Maintenance infusions every 2–4 weeks are common. Our team will recommend based on your situation.',
      },
      {
        q: 'What does a Myers Cocktail IV feel like?',
        a: 'Most patients report a sense of warmth during the magnesium portion of the infusion. Some notice a mild taste of vitamins. The process is generally well-tolerated.',
      },
      {
        q: 'Can I combine Myers Cocktail with other treatments in Tijuana?',
        a: 'Yes. IV therapy is commonly combined with other bio optimization treatments or scheduled during a recovery day following a surgical procedure.',
      },
      {
        q: 'How much does Myers Cocktail IV cost in Tijuana, Mexico?',
        a: 'IV therapy at Russald Medical Center in Tijuana is significantly less expensive than US IV therapy providers. Contact our team for current pricing.',
      },
    ],
  },
} satisfies SubProcPageData

export const nadData: SubProcPageData = {
  hero: {
    pageLabel:   'NAD IV Therapy',
    eyebrowTag:  'Bio Optimization · Tijuana, Mexico',
    heading:     'NAD IV Therapy in Tijuana, Mexico',
    description:
      'NAD IV therapy delivers nicotinamide adenine dinucleotide (NAD⁺) directly into the bloodstream ' +
      'to restore mitochondrial function, improve cellular energy production, and support cognitive ' +
      'clarity. At Russald Medical Center in Tijuana, Mexico, NAD IV is available as a standalone ' +
      'session or as part of a bio optimization protocol.',
    stats: [
      { icon: '⏱️', value: '90–180 min', label: 'Session Duration'   },
      { icon: '🏠', value: 'Same Day',   label: 'Return Home'         },
      { icon: '🔄', value: '2–4 sessions', label: 'Initial Protocol' },
      { icon: '📅', value: 'Quarterly',  label: 'Maintenance'         },
    ],
  },

  facts: [
    { value: '90–180 min',  label: 'Session Duration'   },
    { value: 'Same Day',    label: 'Return Home'         },
    { value: '2–4 sessions', label: 'Initial Protocol'  },
    { value: 'Quarterly',   label: 'Maintenance'         },
  ],

  intro: {
    eyebrow:  'NAD IV Therapy',
    heading:  'What Is NAD IV Therapy?',
    paragraphs: [
      'NAD⁺ (nicotinamide adenine dinucleotide) is a coenzyme present in every cell — essential for ' +
      'energy metabolism, DNA repair, and the activation of longevity proteins called sirtuins. By age ' +
      '50, NAD⁺ levels drop by 50% or more. IV delivery bypasses the digestive system entirely, ' +
      'achieving blood concentrations impossible with oral supplements.',
      'NAD IV supports mitochondrial function and ATP energy production, reduces oxidative stress, ' +
      'improves cognitive clarity and mental stamina, and activates sirtuin pathways associated with ' +
      'healthy aging. It is also used clinically in addiction recovery support and post-illness ' +
      'neurological recovery protocols.',
      'NAD IV therapy in Tijuana, Mexico at Russald Medical Center is significantly less expensive ' +
      'than US NAD clinics, which typically charge $500–$1,500 per session. Initial protocols typically ' +
      'include 2–4 sessions over one to two weeks, followed by quarterly maintenance.',
    ],
    candidatesHeading: '🧬  Who Is a Candidate?',
    candidates: [
      'High performers seeking cognitive and physical peak',
      'Patients in bio optimization protocols',
      'Post-illness or post-surgery recovery support',
      'Individuals with chronic fatigue or metabolic concerns',
      'Anyone experiencing the effects of accelerated biological aging',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for NAD IV Therapy?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'NAD IV Therapy in Tijuana — Common Questions',
    items: [
      {
        q: 'What does NAD IV therapy do for the body?',
        a: 'NAD IV restores intracellular NAD⁺ levels to support mitochondrial function (energy production), DNA repair, sirtuin activation (longevity proteins), and neurological performance. It is used clinically in addiction recovery, neurological support, and cellular aging protocols.',
      },
      {
        q: 'How long does a NAD IV session take?',
        a: 'A standard NAD IV session runs 90–180 minutes depending on the dose. It is administered slowly to minimize flushing, which is a normal and transient side effect.',
      },
      {
        q: 'Is NAD IV safe?',
        a: 'Yes. NAD IV is a well-established therapy administered at Russald by trained clinical staff. Common transient effects during infusion include mild flushing, warmth, and nausea — these resolve quickly and are dose-dependent.',
      },
      {
        q: 'How often should I get NAD IV therapy?',
        a: 'Protocols vary. Initial cycles often include 2–4 sessions over one to two weeks, followed by quarterly maintenance. Your physician at Russald will design a schedule based on your protocol and health goals.',
      },
      {
        q: 'How much does NAD IV therapy cost in Tijuana, Mexico?',
        a: 'NAD IV therapy at Russald Medical Center in Tijuana is significantly less expensive than US NAD clinics, which typically charge $500–$1,500 per session. Contact our team for current pricing.',
      },
    ],
  },
} satisfies SubProcPageData

export const bioPrpData: SubProcPageData = {
  hero: {
    pageLabel:   'PRP Therapy',
    eyebrowTag:  'Bio Optimization · Tijuana, Mexico',
    heading:     'PRP Therapy in Tijuana, Mexico',
    description:
      'PRP (platelet-rich plasma) therapy uses concentrated growth factors from your own blood to ' +
      'stimulate tissue regeneration, accelerate healing, and support cellular repair. At Russald ' +
      'Medical Center in Tijuana, Mexico, PRP is used across hair restoration, men\'s health, joint ' +
      'care, and general bio optimization protocols.',
    stats: [
      { icon: '⏱️', value: '30–60 min', label: 'Procedure Time'   },
      { icon: '🏠', value: 'Same Day',  label: 'Return Home'       },
      { icon: '🩸', value: 'Autologous', label: 'Your Own Blood'   },
      { icon: '✨', value: '2–4 wks',   label: 'Results Begin'     },
    ],
  },

  facts: [
    { value: '30–60 min', label: 'Procedure Time' },
    { value: 'Same Day',  label: 'Return Home'     },
    { value: 'Autologous', label: 'Your Own Blood' },
    { value: '2–4 wks',   label: 'Results Begin'   },
  ],

  intro: {
    eyebrow:  'PRP Therapy',
    heading:  'What Is PRP (Platelet-Rich Plasma) Therapy?',
    paragraphs: [
      'PRP involves drawing a small blood sample, spinning it in a centrifuge to concentrate platelets ' +
      'and growth factors (including VEGF, PDGF, TGF, and EGF), and injecting the resulting plasma into ' +
      'the treatment area. Growth factors stimulate cellular repair, neovascularization, and tissue ' +
      'regeneration at the injection site. Because PRP uses your own blood, there is no risk of ' +
      'allergic reaction to foreign substances.',
      'PRP is used across multiple applications at Russald Medical Center: hair restoration (scalp ' +
      'injections to stimulate follicle activity), men\'s health (P-Shot for vascular erectile support), ' +
      'and joint or soft tissue recovery protocols. The same core technology is tailored to the target ' +
      'tissue and clinical goal.',
      'PRP in Tijuana, Mexico at Russald Medical Center is significantly less expensive than at US ' +
      'regenerative medicine, dermatology, or orthopaedic clinics. Sessions are completed in a single ' +
      'outpatient visit with no recovery time required.',
    ],
    candidatesHeading: '🩸  Who Is a Candidate?',
    candidates: [
      'Patients seeking hair density improvement or scalp follicle support',
      'Men addressing vascular erectile function (P-Shot protocol)',
      'Patients with joint or soft tissue conditions appropriate for PRP',
      'Anyone looking to incorporate regenerative growth factor therapy into a bio optimization protocol',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. ' +
      'The information on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for PRP Therapy?',
    items:   WHY,
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'PRP Therapy in Tijuana — Common Questions',
    items: [
      {
        q: 'What conditions can PRP therapy treat?',
        a: 'PRP is used for hair loss (scalp injections), erectile dysfunction support (P-Shot), joint and soft tissue recovery, and general bio optimization protocols. The target area and application determine the protocol.',
      },
      {
        q: 'How many PRP sessions do I need?',
        a: 'Session count depends on the application. Hair PRP typically involves 3 sessions spaced 4–6 weeks apart. Joint or soft tissue protocols may require 2–3 sessions. Your physician will determine the appropriate course.',
      },
      {
        q: 'Is PRP safe?',
        a: 'Yes. PRP uses your own blood, processed to concentrate growth factors. There is no risk of allergic reaction to foreign substances. Mild swelling or soreness at the injection site for 24–48 hours is normal.',
      },
      {
        q: 'How much does PRP therapy cost in Tijuana, Mexico?',
        a: 'PRP therapy at Russald Medical Center in Tijuana is significantly less expensive than US regenerative medicine, dermatology, or orthopaedic clinics. Contact our team for current pricing by application.',
      },
    ],
  },
} satisfies SubProcPageData
