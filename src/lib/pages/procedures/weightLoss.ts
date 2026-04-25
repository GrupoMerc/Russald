// Contenido de sub-procedimientos de Weight Loss Surgery
// Fuente: russald_vFinal.html → renderGastricSleeve / renderGastricBypass / etc.

import type { SubProcPageData } from '@/types/spec'

export const gastricSleeveData: SubProcPageData = {
  hero: {
    pageLabel:   'Gastric Sleeve',
    eyebrowTag:  'Weight Loss Surgery · Tijuana, Mexico',
    heading:     'Gastric Sleeve Surgery in Tijuana, Mexico',
    description:
      'The gastric sleeve (VSG) is the most commonly performed weight loss surgery in the world. ' +
      'At Russald Medical Center in Tijuana, Mexico, we offer this procedure with individualized ' +
      'evaluation, experienced surgical oversight, and a structured post-operative support plan.',
    stats: [
      { icon: '⚖️', value: '75%',     label: 'Avg. Excess Weight Lost' },
      { icon: '⏱️', value: '2–3 hrs', label: 'Procedure Time'          },
      { icon: '🏨', value: '2–4 days', label: 'Stay in Tijuana'         },
      { icon: '🏃', value: '4–6 wks', label: 'Return to Full Activity'  },
    ],
  },

  facts: [
    { value: '75%',      label: 'Avg. Excess Weight Lost' },
    { value: '2–3 hrs',  label: 'Procedure Time'          },
    { value: '2–4 days', label: 'Stay in Tijuana'         },
    { value: '4–6 wks',  label: 'Return to Full Activity' },
  ],

  intro: {
    eyebrow:  'Gastric Sleeve',
    heading:  'What Is Gastric Sleeve Surgery?',
    paragraphs: [
      'Gastric sleeve surgery, also known as sleeve gastrectomy or VSG, removes approximately 75–80% ' +
      'of the stomach, leaving a sleeve-shaped pouch about the size of a banana. This restricts how ' +
      'much food you can eat, reduces hunger hormones (ghrelin), and supports significant, long-term ' +
      'weight loss without rerouting the digestive tract.',
      'Because the small intestine is left intact, vitamin absorption is largely preserved compared to ' +
      'gastric bypass. The sleeve produces powerful results through restriction and hormonal changes ' +
      'alone — making it the most widely performed bariatric procedure globally.',
      'Gastric sleeve in Tijuana, Mexico is performed by board-certified bariatric surgeons at ' +
      'Russald Medical Center at 65–75% less than US hospital costs — without compromising surgical ' +
      'quality, anesthesia standards, or post-operative care.',
    ],
    candidatesHeading: '⚖️  Who Is a Candidate?',
    candidates: [
      'BMI of 35 or higher, or BMI 30+ with obesity-related health conditions',
      'Adults who have not achieved sustainable results through diet and exercise alone',
      'Patients without active untreated eating disorders or absolute contraindications',
      'Non-smokers or patients who stop smoking at least 4–6 weeks before surgery',
      'Commitment to dietary and lifestyle changes post-surgery',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. The information on ' +
      'this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Gastric Sleeve?',
    items: [
      {
        icon:  '💰',
        title: '65–75% Less Than US Hospitals',
        body:  'Gastric sleeve in the United States commonly costs $15,000–$25,000+ without insurance. Russald Medical Center delivers the same laparoscopic technique at a fraction of that cost — a structural difference in healthcare economics, not quality.',
      },
      {
        icon:  '🏥',
        title: 'Board-Certified Bariatric Surgeon',
        body:  'All sleeve gastrectomy procedures are performed by a fellowship-trained, board-certified bariatric surgeon with over 1,200 bariatric cases. You know exactly who your surgeon is before you travel.',
      },
      {
        icon:  '🔬',
        title: 'Pre-Op Evaluation Included',
        body:  'Blood work, cardiac clearance, and nutritional assessment are completed before your procedure is scheduled. We do not proceed without confirming you are medically appropriate for surgery.',
      },
      {
        icon:  '🚶',
        title: 'Same-Day Ambulation',
        body:  'Most patients are up and walking the same day as surgery. Early ambulation reduces complication risk and supports a faster recovery. Discharge criteria are clinical, not calendar-based.',
      },
      {
        icon:  '📱',
        title: 'Remote Follow-Up Available',
        body:  'Post-operative support continues remotely after you return home. Written discharge instructions and a dietary progression protocol are provided at discharge, and your team is reachable for follow-up questions.',
      },
      {
        icon:  '📍',
        title: '20 Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. The gastric sleeve procedure is typically complete in a 3–5 day trip from the US.',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Gastric Sleeve in Tijuana — Common Questions',
    items: [
      {
        q: 'How much does gastric sleeve cost in Tijuana, Mexico?',
        a: 'Gastric sleeve at Russald Medical Center costs 65–75% less than US hospitals, where the procedure commonly runs $15,000–$25,000+ without insurance. Contact our team for a personalized quote based on your case.',
      },
      {
        q: 'Is gastric sleeve surgery safe in Tijuana?',
        a: 'Yes. Gastric sleeve is performed laparoscopically by board-certified bariatric surgeons in a fully equipped surgical facility. Pre-operative evaluation is required before any procedure is approved. As with any surgery, risks are reviewed in detail during your consultation.',
      },
      {
        q: 'How long do I need to stay in Tijuana after gastric sleeve?',
        a: 'Most patients stay 2–4 days post-operatively in Tijuana before returning home. Discharge is based on clinical criteria — your surgeon confirms when it is safe to travel.',
      },
      {
        q: 'Will I keep the weight off after gastric sleeve?',
        a: 'Long-term results depend significantly on adherence to dietary changes and lifestyle modifications. The sleeve provides a structural tool for weight loss — behavioral commitment is essential for sustained results. Most patients lose 60–75% of their excess weight within the first 12–18 months.',
      },
      {
        q: 'What is the difference between gastric sleeve and gastric bypass?',
        a: 'Gastric sleeve removes a portion of the stomach only, leaving the digestive tract intact. Gastric bypass creates a small stomach pouch AND reroutes the small intestine, producing stronger metabolic effects. Bypass is often preferred for patients with type 2 diabetes or higher BMI.',
      },
      {
        q: 'Can I combine gastric sleeve with other procedures?',
        a: 'In selected cases, combining procedures during the same surgical session may be possible. This is evaluated on a case-by-case basis based on surgical time, anesthesia safety, and your overall health profile.',
      },
    ],
  },
} satisfies SubProcPageData

export const gastricBypassData: SubProcPageData = {
  hero: {
    pageLabel:   'Gastric Bypass',
    eyebrowTag:  'Weight Loss Surgery · Tijuana, Mexico',
    heading:     'Gastric Bypass Surgery in Tijuana, Mexico',
    description:
      'Gastric bypass (Roux-en-Y) is one of the most effective bariatric procedures for long-term weight ' +
      'loss and metabolic improvement. At Russald Medical Center in Tijuana, Mexico, it is performed ' +
      'laparoscopically with careful pre-operative evaluation and post-operative support.',
    stats: [
      { icon: '⚖️', value: '80%',     label: 'Avg. Excess Weight Lost' },
      { icon: '⏱️', value: '2–4 hrs', label: 'Procedure Time'          },
      { icon: '🏨', value: '3–5 days', label: 'Stay in Tijuana'         },
      { icon: '🏃', value: '6–8 wks', label: 'Return to Full Activity'  },
    ],
  },

  facts: [
    { value: '80%',      label: 'Avg. Excess Weight Lost' },
    { value: '2–4 hrs',  label: 'Procedure Time'          },
    { value: '3–5 days', label: 'Stay in Tijuana'         },
    { value: '6–8 wks',  label: 'Return to Full Activity' },
  ],

  intro: {
    eyebrow:  'Gastric Bypass',
    heading:  'What Is Gastric Bypass Surgery?',
    paragraphs: [
      'Gastric bypass (Roux-en-Y) creates a small stomach pouch and reroutes the small intestine to ' +
      'connect directly to it, bypassing a large portion of the stomach and duodenum. This dual ' +
      'mechanism — restriction and malabsorption — produces stronger metabolic effects than sleeve alone, ' +
      'including significant improvement in type 2 diabetes, hypertension, and sleep apnea.',
      'Because the procedure reroutes the digestive tract, lifelong vitamin and mineral supplementation ' +
      'is required to prevent nutritional deficiencies. This is a key difference from gastric sleeve ' +
      'and an important factor in candidacy evaluation.',
      'Gastric bypass in Tijuana, Mexico at Russald Medical Center is performed using the same ' +
      'laparoscopic Roux-en-Y technique as major US bariatric centers — at 65–75% of the US cost.',
    ],
    candidatesHeading: '⚖️  Who Is a Candidate?',
    candidates: [
      'BMI of 40 or higher, or BMI 35+ with significant comorbidities (type 2 diabetes, hypertension)',
      'Patients with type 2 diabetes who may benefit from metabolic surgery',
      'Those who have not achieved results with sleeve or other prior interventions',
      'Patients cleared for general anesthesia and laparoscopic surgery',
      'Commitment to lifelong vitamin supplementation and dietary follow-up',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. The information on ' +
      'this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Gastric Bypass?',
    items: [
      {
        icon:  '⚖️',
        title: 'Strongest Metabolic Results Available',
        body:  'Gastric bypass produces the most significant metabolic improvement of all bariatric procedures — including remission of type 2 diabetes, resolution of hypertension, and improvement of sleep apnea. It is the gold standard for patients with significant metabolic comorbidities.',
      },
      {
        icon:  '💰',
        title: '65–75% Less Than US Hospital Rates',
        body:  'Gastric bypass in the US commonly costs $20,000–$35,000+ without insurance. Russald Medical Center offers the same laparoscopic Roux-en-Y technique at a significant fraction of that cost.',
      },
      {
        icon:  '🏥',
        title: 'Experienced Complex Laparoscopic Team',
        body:  'Bypass is a more technically complex procedure than sleeve. Our fellowship-trained bariatric surgeons perform bypass routinely — not as an occasional case. Experience matters in complex laparoscopic bariatric surgery.',
      },
      {
        icon:  '🔬',
        title: 'Full Pre-Op Workup Required',
        body:  'Labs, cardiac clearance, nutritional consultation, and H. pylori testing are completed before bypass is scheduled. We do not approve bypass candidacy without a complete pre-operative evaluation.',
      },
      {
        icon:  '💊',
        title: 'Supplement Protocol Provided',
        body:  'Lifelong vitamin B12, iron, calcium, and multivitamin supplementation is required after gastric bypass. Your care team provides a complete protocol and explains monitoring requirements before discharge.',
      },
      {
        icon:  '📍',
        title: '20 Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. Gastric bypass typically requires a 4–6 day trip from the US including hospital stay.',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Gastric Bypass in Tijuana — Common Questions',
    items: [
      {
        q: 'What is the difference between gastric sleeve and gastric bypass?',
        a: 'Gastric sleeve removes a portion of the stomach, leaving the digestive tract intact. Gastric bypass creates a small stomach pouch AND reroutes the small intestine, producing stronger metabolic effects — including more significant diabetes improvement. Bypass typically achieves greater total weight loss but is a more complex surgery with a longer recovery.',
      },
      {
        q: 'How much does gastric bypass cost in Tijuana, Mexico?',
        a: 'Gastric bypass at Russald Medical Center costs 65–75% less than US hospitals, where the procedure commonly runs $20,000–$35,000+ without insurance. Contact our team for a personalized quote after your evaluation.',
      },
      {
        q: 'Do I need to take vitamins after gastric bypass?',
        a: 'Yes. Lifelong vitamin supplementation is required after gastric bypass due to reduced absorption of B12, iron, calcium, and fat-soluble vitamins. Your care team provides a specific supplementation protocol and monitoring schedule at discharge.',
      },
      {
        q: 'Can type 2 diabetes improve after gastric bypass?',
        a: 'Yes. Gastric bypass produces significant metabolic effects — many patients see substantial improvement or full remission of type 2 diabetes, sometimes before significant weight loss occurs. This metabolic response is one of the primary reasons bypass is recommended over sleeve for patients with significant diabetes.',
      },
      {
        q: 'Is gastric bypass reversible?',
        a: 'Gastric bypass is technically reversible but is considered a permanent procedure. Reversal is rarely performed and typically only in cases of serious complications. It should be approached as a lifelong anatomical change.',
      },
      {
        q: 'How long do I need to stay in Tijuana after gastric bypass?',
        a: 'Gastric bypass patients typically stay 3–5 days post-operatively. Bypass requires a longer monitoring period than sleeve due to the complexity of the procedure. Discharge is based on clinical criteria — your surgeon confirms when it is safe to travel.',
      },
    ],
  },
} satisfies SubProcPageData

export const miniBypassData: SubProcPageData = {
  hero: {
    pageLabel:   'Mini Gastric Bypass',
    eyebrowTag:  'Weight Loss Surgery · Tijuana, Mexico',
    heading:     'Mini Gastric Bypass in Tijuana, Mexico',
    description:
      'The mini gastric bypass (single anastomosis gastric bypass) is a streamlined bypass technique ' +
      'that creates a long, narrow stomach pouch connected to the small intestine at a single point. ' +
      'At Russald Medical Center in Tijuana, Mexico, it is offered for selected patients based on medical evaluation.',
    stats: [
      { icon: '⚖️', value: '70–80%',      label: 'Excess Weight Lost'    },
      { icon: '⏱️', value: '1.5–2.5 hrs', label: 'Procedure Time'        },
      { icon: '🏨', value: '2–3 days',     label: 'Stay in Tijuana'       },
      { icon: '🏃', value: '4–6 wks',      label: 'Return to Full Activity' },
    ],
  },

  facts: [
    { value: '70–80%',       label: 'Excess Weight Lost'     },
    { value: '1.5–2.5 hrs',  label: 'Procedure Time'         },
    { value: '2–3 days',     label: 'Stay in Tijuana'        },
    { value: '4–6 wks',      label: 'Return to Full Activity' },
  ],

  intro: {
    eyebrow:  'Mini Gastric Bypass',
    heading:  'What Is Mini Gastric Bypass?',
    paragraphs: [
      'The mini gastric bypass (MGB), also called single anastomosis gastric bypass (SAGB), involves ' +
      'creating a long, narrow stomach pouch and connecting it to the small intestine approximately ' +
      '150–200 cm from the start of the jejunum using a single connection (anastomosis). This ' +
      'simplifies the traditional Roux-en-Y bypass while maintaining significant weight loss and ' +
      'metabolic benefits.',
      'With only one intestinal connection instead of two, the mini bypass involves a shorter ' +
      'operative time and technically simpler surgical steps compared to Roux-en-Y gastric bypass — ' +
      'while producing comparable weight loss outcomes in appropriate candidates.',
      'Candidacy for mini bypass is evaluated carefully. Patients with significant ' +
      'gastroesophageal reflux (GERD) are generally not candidates, as the single connection design ' +
      'carries a different reflux risk profile than Roux-en-Y.',
    ],
    candidatesHeading: '⚖️  Who Is a Candidate?',
    candidates: [
      'BMI typically 35–55',
      'Patients seeking bypass-level metabolic effects with a simplified surgical technique',
      'No significant history of gastroesophageal reflux (GERD) that would contraindicate the procedure',
      'Cleared as appropriate candidates by our bariatric team after full evaluation',
      'Commitment to lifelong vitamin supplementation and dietary follow-up',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. The information on ' +
      'this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Mini Gastric Bypass?',
    items: [
      {
        icon:  '⏱️',
        title: 'Shorter Operative Time Than Standard Bypass',
        body:  'The single anastomosis design reduces operative time compared to Roux-en-Y — which translates to less time under general anesthesia. For appropriate candidates, this is a meaningful clinical advantage.',
      },
      {
        icon:  '⚖️',
        title: 'Bypass-Level Weight Loss Results',
        body:  'Mini gastric bypass produces 70–80% excess weight loss in typical candidates — comparable to Roux-en-Y gastric bypass — while offering a technically simplified procedure.',
      },
      {
        icon:  '💰',
        title: '65–75% Less Than US Hospital Rates',
        body:  'Bariatric surgery in the United States is expensive and often not covered by insurance for this procedure type. Russald Medical Center delivers the same technique at a significantly lower cost.',
      },
      {
        icon:  '🔬',
        title: 'Careful Candidacy Screening',
        body:  'Not every patient is appropriate for mini bypass — GERD history, anatomy, and prior procedures all affect candidacy. Our team evaluates each case individually and will recommend the best-fit procedure for your profile.',
      },
      {
        icon:  '💊',
        title: 'Supplement Protocol Provided',
        body:  'Lifelong vitamin supplementation is required after mini bypass, as with all bypass procedures. Your care team provides a complete protocol at discharge.',
      },
      {
        icon:  '📍',
        title: '20 Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. Mini bypass typically requires a 3–4 day trip from the US.',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Mini Gastric Bypass in Tijuana — Common Questions',
    items: [
      {
        q: 'What is the difference between mini gastric bypass and regular gastric bypass?',
        a: 'The mini gastric bypass (single anastomosis) uses one intestinal connection instead of two, making it technically simpler with a shorter operative time. Both produce significant weight loss. The right choice depends on your anatomy, reflux history, and clinical profile — determined during evaluation.',
      },
      {
        q: 'Who is a good candidate for mini gastric bypass in Tijuana?',
        a: 'Patients with a BMI of approximately 35–55, without significant GERD, who are seeking bypass-level results. Final candidacy is determined by our bariatric team after full evaluation including your medical history and clinical profile.',
      },
      {
        q: 'Is mini gastric bypass safe?',
        a: 'Yes, when performed by an experienced bariatric surgeon and with appropriate patient selection. As with all bariatric procedures, risks are reviewed in detail during your consultation. Patient selection is critical — we do not perform mini bypass on patients who are not suitable candidates.',
      },
      {
        q: 'How much does mini gastric bypass cost in Tijuana, Mexico?',
        a: 'Mini gastric bypass at Russald Medical Center costs significantly less than US bariatric centers. Contact our team for a specific quote based on your case.',
      },
      {
        q: 'Do I need to take vitamins after mini gastric bypass?',
        a: 'Yes. Lifelong vitamin supplementation is required after mini bypass due to the bypass component of the procedure. Your care team provides a complete supplement protocol at discharge.',
      },
    ],
  },
} satisfies SubProcPageData

export const lapBandData: SubProcPageData = {
  hero: {
    pageLabel:   'Lap-Band',
    eyebrowTag:  'Weight Loss Surgery · Tijuana, Mexico',
    heading:     'Lap-Band Surgery in Tijuana, Mexico',
    description:
      'The Lap-Band is an adjustable gastric banding procedure that places a silicone band around the ' +
      'upper portion of the stomach to restrict food intake. At Russald Medical Center in Tijuana, Mexico, ' +
      'it is offered for selected patients where this approach is clinically appropriate.',
    stats: [
      { icon: '🔧', value: 'Adjustable', label: 'Band Setting'        },
      { icon: '⏱️', value: '1–2 hrs',   label: 'Procedure Time'      },
      { icon: '🏨', value: '1–2 days',  label: 'Stay in Tijuana'     },
      { icon: '🏃', value: '2–3 wks',   label: 'Return to Activity'  },
    ],
  },

  facts: [
    { value: 'Adjustable', label: 'Band Setting'       },
    { value: '1–2 hrs',    label: 'Procedure Time'     },
    { value: '1–2 days',   label: 'Stay in Tijuana'    },
    { value: '2–3 wks',    label: 'Return to Activity' },
  ],

  intro: {
    eyebrow:  'Lap-Band',
    heading:  'What Is Lap-Band Surgery?',
    paragraphs: [
      'The Lap-Band procedure involves placing an adjustable silicone band around the upper portion of ' +
      'the stomach, creating a small pouch that slows food passage and restricts intake. The band is ' +
      'connected to a port placed under the skin, allowing the restriction to be tightened or loosened ' +
      'via saline fills during follow-up visits.',
      'The Lap-Band is the most reversible of the major bariatric options. It does not remove or ' +
      'permanently alter any part of the stomach or digestive tract — the band can be removed ' +
      'laparoscopically if needed.',
      'Lap-Band requires consistent long-term follow-up for optimal results. Band fill adjustments ' +
      'are typically required every 4–8 weeks initially. Patients who are unable to commit to ' +
      'regular follow-up appointments tend to see poorer long-term outcomes with this approach.',
    ],
    candidatesHeading: '⚖️  Who Is a Candidate?',
    candidates: [
      'BMI of 30–40 in selected cases',
      'Patients who prefer a reversible, adjustable surgical option',
      'Those who cannot tolerate more extensive bariatric procedures due to health factors',
      'Patients who understand and can commit to regular post-operative band adjustments',
      'Individuals for whom sleeve or bypass is contraindicated',
    ],
    disclaimer:
      '⚠️  All procedures require a clinical evaluation to confirm candidacy. The information on ' +
      'this page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Lap-Band?',
    items: [
      {
        icon:  '🔄',
        title: 'Fully Reversible Procedure',
        body:  'The Lap-Band can be removed laparoscopically at any time. No stomach tissue is removed or permanently altered. This reversibility is the primary clinical advantage for patients who require or prefer this approach.',
      },
      {
        icon:  '🔧',
        title: 'Adjustable Restriction',
        body:  'Band fills allow the restriction to be customized over time — tightened for greater restriction or loosened if needed. This flexibility allows the band to adapt to your changing weight loss needs.',
      },
      {
        icon:  '💰',
        title: '65–75% Less Than US Costs',
        body:  'Lap-Band surgery in the United States can cost $10,000–$20,000+ without insurance. Russald Medical Center provides the same procedure at a significantly lower cost for international patients.',
      },
      {
        icon:  '🏥',
        title: 'Outpatient-Friendly Recovery',
        body:  'Lap-Band involves a shorter hospital stay than sleeve or bypass — typically 1–2 days. Most patients return to light work within 1–2 weeks and resume full activity within 3 weeks.',
      },
      {
        icon:  '🔬',
        title: 'Honest Candidacy Evaluation',
        body:  'Lap-Band is not the right choice for every patient. Our team evaluates whether band, sleeve, or bypass is most appropriate for your specific BMI, health profile, and lifestyle — and will recommend accordingly.',
      },
      {
        icon:  '📍',
        title: '20 Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. Lap-Band typically requires a 2–3 day trip from the US.',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Lap-Band in Tijuana — Common Questions',
    items: [
      {
        q: 'Is the Lap-Band reversible?',
        a: 'Yes. The Lap-Band can be removed laparoscopically. It is the most reversible of the major bariatric options — no stomach tissue is permanently removed or rerouted.',
      },
      {
        q: 'How often does the band need adjustment?',
        a: 'Band fills (adjustments) are typically performed every 4–8 weeks initially until optimal restriction is achieved. Frequency decreases once the ideal setting is established. Regular follow-up is essential for good Lap-Band outcomes.',
      },
      {
        q: 'Does the Lap-Band produce the same weight loss as gastric sleeve?',
        a: 'Generally, no. The Lap-Band typically produces less total weight loss than sleeve or bypass and requires more consistent long-term follow-up to achieve optimal results. Your surgeon will discuss realistic expectations during your evaluation.',
      },
      {
        q: 'Can I get a revision if the Lap-Band stops working?',
        a: 'Yes. Lap-Band revision to sleeve or bypass is a common procedure at Russald Medical Center. If your band is not producing adequate results or has developed complications, revision surgery can be evaluated.',
      },
      {
        q: 'How much does Lap-Band cost in Tijuana, Mexico?',
        a: 'Lap-Band surgery at Russald Medical Center costs significantly less than US hospitals and surgery centers. Contact our team for a personalized quote based on your case.',
      },
    ],
  },
} satisfies SubProcPageData

export const bariatricRevisionData: SubProcPageData = {
  hero: {
    pageLabel:   'Bariatric Revision',
    eyebrowTag:  'Weight Loss Surgery · Tijuana, Mexico',
    heading:     'Bariatric Revision Surgery in Tijuana, Mexico',
    description:
      'Bariatric revision surgery addresses insufficient weight loss, weight regain, or complications ' +
      'following a previous weight loss procedure. At Russald Medical Center in Tijuana, Mexico, ' +
      'revision cases receive a detailed clinical evaluation before any procedure is recommended or planned.',
    stats: [
      { icon: '🔬', value: 'Case-Specific', label: 'Procedure Type'            },
      { icon: '📋', value: 'Detailed',      label: 'Pre-Op Evaluation Required' },
      { icon: '🏨', value: '3–5 days',      label: 'Estimated Stay'            },
      { icon: '⏱️', value: 'Varies',        label: 'Recovery Timeline'         },
    ],
  },

  facts: [
    { value: 'Case-Specific', label: 'Procedure Type'             },
    { value: 'Detailed',      label: 'Pre-Op Evaluation Required' },
    { value: '3–5 days',      label: 'Estimated Stay'             },
    { value: 'Varies',        label: 'Recovery Timeline'          },
  ],

  intro: {
    eyebrow:  'Bariatric Revision',
    heading:  'What Is Bariatric Revision Surgery?',
    paragraphs: [
      'Bariatric revision refers to a surgical procedure performed to modify, convert, or repair a ' +
      'previous weight loss surgery. Common revisions include: sleeve to bypass conversion, Lap-Band ' +
      'removal with conversion to sleeve or bypass, and pouch or outlet repair after gastric bypass. ' +
      'Each revision case is anatomically and clinically unique.',
      'Revision surgery is technically more complex than primary bariatric surgery. The altered anatomy ' +
      'from a previous procedure introduces additional surgical considerations that require an experienced ' +
      'bariatric team and thorough pre-operative evaluation — including imaging and endoscopy in most cases.',
      'Revision bariatric surgery in Tijuana, Mexico at Russald Medical Center is approached with the ' +
      'same rigor as primary procedures. Many patients who had their original procedure in Mexico or ' +
      'the US seek revision care here.',
    ],
    candidatesHeading: '🔬  Who Should Consider Revision?',
    candidates: [
      'Patients with insufficient weight loss after a prior bariatric procedure',
      'Those experiencing significant weight regain after initially successful surgery',
      'Patients with Lap-Band complications such as band erosion, slippage, or port failure',
      'Individuals with severe acid reflux (GERD) after gastric sleeve',
      'Patients with structural issues after sleeve or bypass surgery',
    ],
    disclaimer:
      '⚠️  All revision procedures require a detailed clinical evaluation including your surgical ' +
      'history, imaging, and often endoscopy before any plan is proposed. The information on this ' +
      'page is for educational purposes only and does not constitute medical advice.',
  },

  why: {
    eyebrow: 'Why Russald Medical Center',
    heading: 'Why Choose Russald for Bariatric Revision?',
    items: [
      {
        icon:  '🏥',
        title: 'Experienced With Complex Revision Cases',
        body:  'Revision surgery requires surgeons who routinely operate on altered bariatric anatomy. Our bariatric team has experience with sleeve-to-bypass conversions, band removals, and pouch repairs — not just primary procedures.',
      },
      {
        icon:  '🔬',
        title: 'Full Pre-Op Workup Before Any Plan',
        body:  'No revision is proposed without a complete review: original procedure records, weight history, labs, and imaging. Upper endoscopy or contrast study may be required to evaluate your current anatomy before a surgical plan is developed.',
      },
      {
        icon:  '📋',
        title: 'Procedure Matched to Your Anatomy',
        body:  'The specific revision approach — sleeve to bypass, band removal and conversion, pouch repair — is determined based on your individual anatomy, original procedure, symptoms, and goals. There is no one-size-fits-all revision.',
      },
      {
        icon:  '💰',
        title: '65–75% Less Than US Revision Costs',
        body:  'Bariatric revision in the US can cost $20,000–$40,000+, often with limited insurance coverage. Russald Medical Center provides the same laparoscopic revision techniques at a significantly lower cost.',
      },
      {
        icon:  '🗣️',
        title: 'Transparent About What Is and Isn\'t Possible',
        body:  'Not every revision request is appropriate for every patient. Our team provides honest candidacy assessments — including cases where revision may not offer significant benefit or where the risk-benefit profile doesn\'t support proceeding.',
      },
      {
        icon:  '📍',
        title: '20 Minutes from San Diego',
        body:  'Russald Medical Center is approximately 20 minutes from the San Diego border crossing. Revision cases typically require a 4–6 day trip from the US.',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Bariatric Revision in Tijuana — Common Questions',
    items: [
      {
        q: 'Can I get a revision after gastric sleeve in Tijuana?',
        a: 'Yes. Sleeve to gastric bypass conversion is one of the most common revisions performed. Detailed evaluation — including endoscopy and lab work — is required to confirm anatomy and candidacy before any revision is planned.',
      },
      {
        q: 'How do I know if I need a bariatric revision?',
        a: 'Common reasons include: weight regain after initially successful surgery, failure to lose expected weight, severe acid reflux after sleeve, band erosion or slippage, or structural complications after bypass. Our team evaluates your specific history and current status to determine whether revision is appropriate.',
      },
      {
        q: 'Is bariatric revision more complex than primary surgery?',
        a: 'Yes. Revision surgery involves operating on anatomy that has already been altered by a previous procedure — which increases technical complexity and the importance of surgical experience. Pre-operative evaluation is more extensive than for primary bariatric procedures.',
      },
      {
        q: 'Is bariatric revision more expensive than primary surgery?',
        a: 'Revision surgery typically involves longer operative time and more complex planning, which can affect pricing. The exact cost depends on the specific revision required. Contact our team for a quote after your pre-operative evaluation.',
      },
      {
        q: 'How long do I need to stay in Tijuana for bariatric revision?',
        a: 'Bariatric revision patients typically stay 3–5 days post-operatively, though this depends on the nature and complexity of the specific revision performed. Discharge criteria are clinical — your surgeon confirms when it is safe to travel.',
      },
    ],
  },
} satisfies SubProcPageData
