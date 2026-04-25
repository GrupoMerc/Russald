// Contenido de la página Weight Loss Surgery
// Figma canvas: 2143:7

import type { SpecPageData } from '@/types/spec'

export const wlsData = {
  hero: {
    pageLabel:   'Weight Loss Surgery',
    eyebrowTag:  'Bariatric Surgery · Tijuana, Mexico',
    heading:     'Life-Changing Weight Loss Surgery: Minutes from San Diego',
    description:
      'Russald Medical Center performs the full spectrum of bariatric procedures: gastric sleeve, ' +
      'gastric bypass, mini bypass, Lap-Band, and revision surgery — at a fraction of US costs, ' +
      'with the same surgical standards and a coordinated international patient experience.',
    stats: [
      { icon: '⚖️', value: '65–75%',       label: 'Less Than US Cost'   },
      { icon: '🕐', value: '2–4 hrs',       label: 'Typical Procedure'  },
      { icon: '🏨', value: '2–5 days',      label: 'Stay in Tijuana'    },
      { icon: '🔬', value: 'Laparoscopic',  label: 'Minimally Invasive' },
    ],
  },

  facts: [
    { value: '65–75%',       label: 'Less Than US Cost'   },
    { value: '2–4 hrs',      label: 'Typical Procedure'  },
    { value: '2–5 days',     label: 'Stay in Tijuana'    },
    { value: 'Laparoscopic', label: 'Minimally Invasive' },
  ],

  intro: {
    eyebrow: 'Weight Loss Surgery',
    heading: 'A Surgical Solution: When Everything Else Has Failed',
    paragraphs: [
      'Bariatric surgery is not cosmetic and it is not a last resort — it is a medically established ' +
      'intervention for patients whose weight poses documented risks to their health. At Russald Medical ' +
      'Center, every bariatric patient undergoes a full pre-operative evaluation including bloodwork, ' +
      'cardiac clearance, and a nutritional consultation before a procedure date is ever scheduled.',
      'We perform gastric sleeve (VSG), Roux-en-Y gastric bypass, mini gastric bypass, Lap-Band, and ' +
      'revision surgery for patients whose prior procedure has not delivered the expected result. Our ' +
      'bariatric team includes fellowship-trained surgeons who perform these procedures laparoscopically, ' +
      'minimizing incision size, recovery time, and complication risk.',
      'For US patients, Tijuana represents one of the most accessible destinations for bariatric care ' +
      'in the world — approximately 20 minutes from the San Diego border crossing. You can complete the ' +
      'full procedure and return home within a week.',
    ],
    candidatesHeading: '📋  Who Is a Candidate?',
    candidates: [
      'BMI of 35 or higher, or BMI 30+ with obesity-related conditions such as type 2 diabetes, hypertension, or sleep apnea',
      'Adults who have not achieved sustainable results through diet and exercise',
      'Patients without active untreated eating disorders or specific contraindicated conditions',
      'Non-smokers, or patients willing to stop at least 4–6 weeks prior to surgery',
      'Commitment to dietary and lifestyle changes post-surgery — surgery is a tool, not a cure',
    ],
    disclaimer:
      '⚠️  All procedures require a medical evaluation to determine candidacy. The information ' +
      'on this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Us for Weight Loss Surgery?',
    items: [
      {
        icon: '🏥',
        title: 'Fellowship-Trained Surgeons',
        body:  'Our bariatric team includes surgeons with postgraduate fellowship training in bariatric and metabolic surgery — the same credential required by leading US centers.',
      },
      {
        icon: '🔬',
        title: 'Full Pre-Op Workup Required',
        body:  'Blood work, cardiac clearance, and nutritional assessment are completed before surgery is scheduled. We do not skip steps — your safety is the baseline.',
      },
      {
        icon: '💰',
        title: '65–75% Less Than US Pricing',
        body:  'The average gastric sleeve costs $15,000–$25,000 in the United States without insurance. At Russald Medical Center, the same procedure costs a fraction of that — no hidden fees.',
      },
      {
        icon: '🛫',
        title: 'Accessible from the US Southwest',
        body:  'No flights. No long travel. The San Diego border is approximately 20 minutes away. Most US patients drive across and return home within a week.',
      },
      {
        icon: '📋',
        title: 'Structured Post-Op Protocol',
        body:  'Written discharge instructions, dietary progression guidelines, supplement protocols, and scheduled remote follow-up are included with every procedure.',
      },
      {
        icon: '🌐',
        title: 'English-Speaking Coordination',
        body:  'Your assigned coordinator manages your case entirely in English — from first contact through post-operative follow-up. You will never navigate the system alone.',
      },
    ],
  },

  proc: {
    eyebrow:     'Weight Loss Surgery Procedures',
    heading:     'Available Weight Loss Surgery Procedures',
    description: 'Each procedure page includes full clinical information, candidacy criteria, the step-by-step process, recovery timeline, pricing context, and answers to the most common patient questions.',
    procedures: [
      { icon: '⚖️', title: 'Gastric Sleeve',       category: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/gastric-sleeve'      },
      { icon: '⚖️', title: 'Gastric Bypass',        category: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/gastric-bypass'      },
      { icon: '⚖️', title: 'Mini Gastric Bypass',   category: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/mini-gastric-bypass' },
      { icon: '⚖️', title: 'Lap-Band',              category: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/lap-band'            },
      { icon: '⚖️', title: 'Bariatric Revision',    category: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/bariatric-revision'  },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Weight Loss Surgery in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does weight loss surgery cost in Tijuana at Russald Medical Center?',
        a: 'Bariatric procedures at Russald Medical Center cost 65–75% less than the US average. The exact price depends on the procedure type and your clinical profile — your coordinator provides a detailed, itemized quote after your evaluation. There are no hidden facility fees.',
      },
      {
        q: 'Am I a candidate for bariatric surgery?',
        a: 'General criteria include a BMI of 35 or higher, or BMI 30+ with obesity-related conditions such as type 2 diabetes, hypertension, or sleep apnea. You should also have a documented history of unsuccessful diet and exercise attempts and a commitment to post-operative dietary changes. Every patient is evaluated individually — your pre-op workup determines final candidacy before a date is scheduled.',
      },
      {
        q: 'Is it safe to have bariatric surgery in Mexico?',
        a: 'Safety depends on the facility, the surgical team, and the pre-operative protocols in place — not the country. Russald Medical Center\'s bariatric surgeons hold fellowship training equivalent to leading US programs. No procedure is scheduled without a complete pre-operative evaluation including bloodwork and cardiac clearance. We operate in a fully equipped facility and provide structured written discharge instructions and remote follow-up for every patient.',
      },
      {
        q: 'How long does recovery take after bariatric surgery?',
        a: 'Most patients spend 2–5 days in Tijuana following the procedure. Laparoscopic techniques reduce incision size and recovery time significantly. You can expect to return to light activity within 2–3 weeks and most normal activities within 4–6 weeks. Dietary progression — liquid, soft, then solid food — takes approximately 6–8 weeks and is detailed in your written discharge instructions.',
      },
      {
        q: 'Do I need to travel to Tijuana for a consultation before surgery?',
        a: 'No in-person pre-consultation is required. Your coordinator collects your health history, current medications, and any prior diagnostic results by phone or email. If you are a viable candidate, your pre-operative workup is completed in Tijuana on arrival — typically the day before your scheduled procedure.',
      },
      {
        q: 'What happens if I have complications after I return home?',
        a: 'You receive written discharge instructions and a scheduled remote follow-up before you leave. Your coordinator remains reachable for questions after you return. If you need immediate care, seek it at your nearest US emergency facility and share your discharge summary — provided in both English and Spanish — with the treating team. We coordinate with your local provider as needed.',
      },
      {
        q: 'Does US health insurance cover weight loss surgery in Mexico?',
        a: 'Most US insurance plans do not cover elective procedures performed outside the country. A small number of self-insured employers offer medical tourism benefits — check your Summary Plan Description or contact your HR department. In most cases, the out-of-pocket cost at Russald Medical Center is still substantially lower than US pricing even after accounting for deductibles and out-of-pocket maximums.',
      },
      {
        q: 'What is the difference between gastric sleeve and gastric bypass?',
        a: 'Gastric sleeve (VSG) removes approximately 75–80% of the stomach, creating a narrow tube that limits intake and reduces hunger hormone production. Gastric bypass (Roux-en-Y) creates a small stomach pouch and reroutes part of the small intestine, combining restriction with a degree of malabsorption. Bypass typically produces greater weight loss and stronger improvement in type 2 diabetes, but involves higher surgical complexity and a longer recovery. Your surgeon will recommend the appropriate procedure based on your BMI, comorbidities, and surgical history.',
      },
    ],
  },
} satisfies SpecPageData
