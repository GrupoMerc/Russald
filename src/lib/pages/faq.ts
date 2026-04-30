// Contenido de la página FAQ global
// Fuente: russald_vFinal.html → renderFAQ()

export interface FaqItem { readonly q: string; readonly a: string }
export interface FaqCategory {
  readonly icon: string
  readonly heading: string
  readonly items: readonly FaqItem[]
}

export const faqHero = {
  eyebrow:     'Patient FAQ',
  heading:     'Frequently Asked Questions',
  description:
    'Answers to the most common questions about procedures, preparation, recovery, logistics, ' +
    'and what to expect at Russald Medical Center in Tijuana, Mexico.',
} as const

export const faqCategories: readonly FaqCategory[] = [
  {
    icon: '🏥',
    heading: 'General',
    items: [
      {
        q: 'Is it safe to have surgery in Tijuana, Mexico?',
        a: 'Tijuana is the most-visited medical tourism destination in the world, with an established infrastructure of internationally accredited hospitals and board-certified physicians. All surgical procedures at Russald Medical Center are performed by licensed, board-certified specialists in a fully equipped facility. A pre-operative medical evaluation is required before any procedure is approved — we do not proceed without confirming candidacy.',
      },
      {
        q: 'How far is Russald Medical Center from San Diego?',
        a: 'Russald Medical Center is approximately 20 minutes from the San Diego border crossing via the Otay Mesa or San Ysidro port of entry. We are located at Agua Caliente Boulevard 4558, C2 level of Grand Medical Tower, Tijuana, Baja California, Mexico.',
      },
      {
        q: 'Does Russald Medical Center have English-speaking staff?',
        a: 'Yes. All patient communication is conducted in English from first contact through discharge. Each patient is assigned a dedicated English-speaking Patient Advisor who coordinates scheduling, pre-operative logistics, and post-operative follow-up.',
      },
      {
        q: 'How much less expensive are procedures in Tijuana compared to the US?',
        a: 'Procedures at Russald Medical Center are typically 60–75% less than equivalent procedures at US hospitals or surgery centers. The cost difference reflects structural healthcare economics — physician salaries, facility overhead, and regulatory costs in Mexico — not differences in clinical quality, credentials, or technology.',
      },
      {
        q: 'Do I need a passport to cross the border?',
        a: 'Yes. A valid US passport, passport card, or SENTRI card is required to cross the border into Mexico and return to the United States. We recommend confirming your documents are current before scheduling travel.',
      },
    ],
  },
  {
    icon: '📋',
    heading: 'Before Your Procedure',
    items: [
      {
        q: 'What happens during the initial consultation process?',
        a: 'The process begins remotely: you submit a health questionnaire and, for some procedures, photos or documents. Our team reviews your profile and provides a preliminary cost breakdown and candidacy assessment. A final in-person medical evaluation by the treating physician is required before any procedure is scheduled or confirmed.',
      },
      {
        q: 'What pre-operative tests are required?',
        a: 'Pre-operative requirements vary by procedure. Surgical procedures typically require a blood panel, cardiac clearance, and nutritional or anesthesia evaluation. Some tests can be completed at your US physician\'s office and sent to us in advance. Your Patient Advisor provides a complete pre-op checklist once candidacy is confirmed.',
      },
      {
        q: 'How do I prepare for my procedure in Tijuana?',
        a: 'Your coordinator provides a comprehensive pre-operative guide covering dietary restrictions, medication adjustments, documents to bring, border crossing logistics, and what to pack. For surgical procedures, patients must be non-smokers or have stopped smoking at least 4–6 weeks before the procedure date.',
      },
      {
        q: 'Can I get a price quote before traveling?',
        a: 'Yes. A personalized cost estimate is provided as part of the pre-evaluation process before you commit to any travel. Russald Medical Center uses all-inclusive pricing — the quote covers surgeon fees, anesthesia, facility, and standard post-operative care. There are no hidden surgical fees.',
      },
    ],
  },
  {
    icon: '⚖️',
    heading: 'Weight Loss Surgery',
    items: [
      {
        q: 'What is the difference between gastric sleeve and gastric bypass?',
        a: 'Gastric sleeve removes approximately 75–80% of the stomach, creating a tube-shaped stomach that restricts food intake and reduces hunger hormones (ghrelin). Gastric bypass both restricts the stomach and reroutes the small intestine, producing stronger metabolic effects — including more significant improvement in type 2 diabetes. Bypass typically achieves greater total weight loss but involves a more complex surgery with a longer recovery.',
      },
      {
        q: 'How long do I need to stay in Tijuana after bariatric surgery?',
        a: 'Gastric sleeve patients typically stay 2–4 days post-operatively. Gastric bypass and more complex bariatric procedures require 3–5 days. Your discharge is based on clinical criteria, not a fixed calendar — your surgeon confirms when it is safe to travel.',
      },
      {
        q: 'Will I need to follow a special diet after bariatric surgery?',
        a: 'Yes. Bariatric surgery requires a structured dietary progression: clear liquids → full liquids → pureed → soft foods → regular foods over several weeks. Long-term, patients follow a protein-first eating approach and take vitamin and mineral supplements for life to prevent nutritional deficiencies. Your care team provides a complete dietary protocol at discharge.',
      },
    ],
  },
  {
    icon: '✨',
    heading: 'Plastic Surgery',
    items: [
      {
        q: 'How long do I need to stay in Tijuana after plastic surgery?',
        a: 'Recovery stay requirements vary by procedure. Liposuction typically requires 2–3 days post-operatively. Tummy tuck and BBL require 4–5 days. Mommy makeover and more extensive combinations require 5–7 days. Your surgeon confirms the minimum stay based on your specific procedure and clinical status at discharge.',
      },
      {
        q: 'Can I combine multiple plastic surgery procedures in one visit?',
        a: 'Yes. Many patients combine procedures in a single surgical session — tummy tuck with liposuction, breast augmentation with a lift, or a full mommy makeover combining multiple body areas. Combinations are evaluated individually based on your health profile, body composition, and the estimated operative time. Your surgeon recommends what is safe and appropriate for your case.',
      },
      {
        q: 'When will I see the final results of my plastic surgery?',
        a: 'Significant improvement is typically visible within 4–6 weeks as swelling resolves. Final results for body contouring procedures (tummy tuck, BBL, liposuction) are fully apparent at 3–6 months. More extensive procedures or combinations may take up to 12 months to show the complete outcome as residual swelling and tissue remodeling complete.',
      },
    ],
  },
  {
    icon: '💆',
    heading: 'Hair Restoration',
    items: [
      {
        q: 'Are hair transplant results permanent?',
        a: 'Yes. Transplanted follicles are harvested from the donor zone at the back and sides of the scalp — an area genetically resistant to the DHT hormone responsible for pattern hair loss. Once transplanted, these follicles retain their DHT-resistant characteristics and remain permanent in the recipient area.',
      },
      {
        q: 'What is the difference between FUE and DHI hair transplant?',
        a: 'FUE (Follicular Unit Extraction) extracts individual follicular units from the donor area using a precision punch tool and implants them into recipient sites created by the surgeon. DHI (Direct Hair Implantation) uses a specialized implanter pen (Choi pen) to extract and implant follicles simultaneously, allowing greater control over angle, direction, and density. DHI is particularly suited for hairline design and higher-density areas.',
      },
      {
        q: 'How long does recovery take after a hair transplant?',
        a: 'Small scabs form around transplanted follicles and shed naturally over 7–10 days. Most patients return to desk work within 3–5 days. Strenuous physical activity should be avoided for 2–4 weeks. Transplanted hairs shed after 2–6 weeks (expected — the follicle remains). Visible new growth begins at 3–4 months; final results are apparent at 9–12 months.',
      },
    ],
  },
  {
    icon: '💳',
    heading: 'Payment & Logistics',
    items: [
      {
        q: 'What payment methods does Russald Medical Center accept?',
        a: 'We accept major credit cards, wire transfers, and cash in USD or MXN. A deposit is required to confirm your procedure date; the balance is due at the time of service. All pricing is quoted in USD for international patients.',
      },
      {
        q: 'Does US health insurance cover procedures at Russald Medical Center?',
        a: 'In most cases, US health insurance does not cover elective procedures performed in Mexico. Some bariatric procedures may be partially covered depending on your specific plan — contact your insurer to verify. Procedures are eligible for payment with HSA (Health Savings Account) and FSA (Flexible Spending Account) funds in most cases. We provide detailed invoices for documentation and reimbursement requests.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Deposits are refundable if a procedure is cancelled 15 or more days before the scheduled date. Cancellations made fewer than 15 days before the procedure date are non-refundable. Rescheduling must be requested within specified timelines. Full details are available in our Booking & Cancellation Policy.',
      },
    ],
  },
] as const
