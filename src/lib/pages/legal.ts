// Contenido de páginas legales
// Fuente: russald_vFinal.html → renderLegal()

export interface LegalSection { readonly heading: string; readonly body: string }
export interface LegalPage {
  readonly slug:        string
  readonly title:       string
  readonly lastUpdated: string
  readonly sections:    readonly LegalSection[]
}

export const legalPages: readonly LegalPage[] = [
  {
    slug:        'terms',
    title:       'Terms and Conditions',
    lastUpdated: 'April 2025',
    sections: [
      {
        heading: '1. Introduction',
        body: 'These Terms and Conditions govern your access to and use of the Russald Medical Center website and associated services provided by MedicalMex. By using this website or submitting any evaluation, you agree to these terms in full. If you do not agree, please discontinue use immediately.',
      },
      {
        heading: '2. Nature of Services',
        body: 'Russald Medical Center is the licensed medical practice responsible for all clinical services, procedures, and physician-patient relationships. MedicalMex provides non-clinical patient coordination services — including scheduling, pre-travel logistics, communication support, and administrative coordination — and does not practice medicine.',
      },
      {
        heading: '3. Educational Purpose Only',
        body: 'Information published on this website — including procedure descriptions, candidacy guidelines, recovery timelines, and pricing estimates — is provided for educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. No content on this website creates a physician-patient relationship.',
      },
      {
        heading: '4. Free Assessment & Pre-Travel Evaluation',
        body: 'Our Free Assessment tool is an automated pre-screening system based on self-reported information. Results are preliminary only and do not constitute medical clearance, a confirmed candidacy determination, or a treatment recommendation. A positive assessment result means only that your profile meets the general criteria for a further medical evaluation.',
      },
      {
        heading: '5. Pre-Travel Evaluation & In-Person Confirmation',
        body: 'A final medical evaluation by the treating physician is required before any procedure is confirmed. Preliminary assessments and cost estimates are subject to revision based on in-person consultation and clinical findings. All final candidacy determinations and treatment plans are made by licensed physicians at Russald Medical Center.',
      },
      {
        heading: '6. Treatment Design, Consent & Clinical Adjustments',
        body: 'All treatment plans are approved and consented by the patient and physician before any procedure begins. Physicians may adjust a treatment plan based on real-time clinical findings — including anesthesia evaluation, pre-operative lab results, or findings during the procedure itself. Such adjustments are made in the interest of patient safety and require consent when feasible.',
      },
      {
        heading: '7. Patient Rights & Responsibilities',
        body: 'Patients have the right to full information about their procedure, to ask questions, and to seek independent medical opinions. Patients are responsible for providing accurate and complete health information. Medical outcomes vary between individuals; results shown in educational materials or patient stories are not guarantees of the same outcome for any specific patient.',
      },
      {
        heading: '8. Payments, Commitment & Financial Responsibility',
        body: 'A confirmed booking represents a financial commitment to proceed with the scheduled services. Fraudulent dispute or chargeback claims that misrepresent the nature of services provided may result in collection proceedings and be reported to relevant financial authorities. Payment obligations remain in full unless a cancellation is processed in accordance with the Booking & Cancellation Policy.',
      },
      {
        heading: '9. Pricing Structure & Geographic Variability',
        body: 'Pricing for services may vary based on the patient\'s location, service structure, and any applicable coordination fees. All pricing is quoted in USD unless otherwise specified. Detailed cost breakdowns are provided during the evaluation process before any commitment is required.',
      },
      {
        heading: '10. Cancellations and Refunds',
        body: 'Cancellation and refund eligibility is governed by the Booking & Cancellation Policy. Please review that policy before confirming your booking.',
      },
      {
        heading: '11. Travel Compliance and Conduct',
        body: 'Patients are responsible for complying with all applicable travel, immigration, and customs regulations when traveling to and from Mexico. Bringing controlled substances, prescription medications without documentation, or prohibited items across the border is the sole responsibility of the patient.',
      },
      {
        heading: '12. Data, Privacy & AI Use',
        body: 'Russald Medical Center and MedicalMex may use automated systems and AI tools to assist in processing questionnaire responses and preliminary assessments. Data collection and use is governed by the Privacy Policy. Services are conducted in Mexico and governed by applicable Mexican privacy regulations.',
      },
      {
        heading: '13. Limitation of Liability',
        body: 'MedicalMex is not liable for the medical services provided by Russald Medical Center. Russald Medical Center is not liable for outcome variability inherent to surgical or medical procedures when care is delivered within accepted clinical standards. Neither entity is liable for travel disruptions, accommodation issues, or third-party service failures.',
      },
      {
        heading: '14. Right to Refuse Service',
        body: 'Russald Medical Center and MedicalMex reserve the right to refuse, postpone, or discontinue services for any patient whose clinical profile presents unacceptable risk, who does not meet candidacy criteria, or whose conduct is disruptive, abusive, or non-compliant with these terms.',
      },
      {
        heading: '15. Governing Law',
        body: 'All medical services are performed in Mexico and are governed by Mexican law and the regulations of the State of Baja California. Any disputes arising from non-clinical coordination services provided by MedicalMex are governed by applicable law in the jurisdiction of service delivery.',
      },
      {
        heading: '16. Modifications',
        body: 'These Terms and Conditions may be updated at any time without prior notice. Continued use of this website following any update constitutes acceptance of the revised terms. We recommend reviewing this page periodically.',
      },
      {
        heading: '17. Contact',
        body: 'For questions regarding these Terms and Conditions, contact us at legal@russaldmedical.com.',
      },
    ],
  },

  {
    slug:        'privacy',
    title:       'Privacy Policy',
    lastUpdated: 'April 2025',
    sections: [
      {
        heading: '1. Introduction',
        body: 'This Privacy Policy describes how Russald Medical Center and MedicalMex collect, use, store, and protect information submitted through this website and associated communication channels.',
      },
      {
        heading: '2. Information We Collect',
        body: 'We collect personal information (name, email, phone, location), health-related information submitted through questionnaires and evaluations, photos submitted for assessment purposes, and technical data (IP address, browser type, pages visited) through standard web analytics.',
      },
      {
        heading: '3. How Information Is Collected',
        body: 'Information is collected through online forms, pre-evaluation questionnaires, photo uploads, direct email or SMS communication, WhatsApp messaging, and scheduling tools. You are not required to submit personal information to browse this website.',
      },
      {
        heading: '4. Use of AI and Automated Systems',
        body: 'We may use automated systems and AI tools to assist in reviewing submitted questionnaires and photos and generating preliminary assessment results. These tools assist our team and do not replace physician evaluation. Automated results are never final medical determinations.',
      },
      {
        heading: '5. Purpose of Data Use',
        body: 'Your data is used to conduct pre-evaluations and candidacy assessments, coordinate scheduling and logistics, communicate with you about your care, improve our services, and maintain appropriate medical and coordination records.',
      },
      {
        heading: '6. Medical & Coordination Data Sharing',
        body: 'Data submitted through MedicalMex coordination channels may be shared with Russald Medical Center physicians for the purpose of clinical evaluation and treatment planning. Data is not sold or shared with unaffiliated third parties for marketing purposes.',
      },
      {
        heading: '7. Cross-Border Data Handling',
        body: 'Your data may be processed and stored on servers located in Mexico and/or the United States. Privacy laws in these jurisdictions may differ from those in your country of residence. By submitting information, you consent to this cross-border handling.',
      },
      {
        heading: '8. Communication Consent',
        body: 'By submitting a form or evaluation on this website, you consent to being contacted via phone, email, SMS, and WhatsApp regarding your evaluation, scheduling, and care coordination. You may opt out of marketing communications at any time.',
      },
      {
        heading: '9. Data Security',
        body: 'Services are conducted in Mexico and are not governed by HIPAA. We apply reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss. However, no internet transmission is fully secure.',
      },
      {
        heading: '10. Data Retention',
        body: 'We retain your data only as long as necessary for operational purposes and legal compliance. You may request deletion of your personal data by contacting legal@russaldmedical.com, subject to legal retention requirements.',
      },
      {
        heading: '11. Third-Party Tools and Platforms',
        body: 'We use third-party service providers for CRM, communication, scheduling, and analytics. These providers have access to data only as necessary to perform their functions and are bound by appropriate data agreements.',
      },
      {
        heading: '12. Cookies and Tracking',
        body: 'This website may use cookies and similar tracking technologies to improve user experience and analyze traffic. You can adjust cookie preferences through your browser settings.',
      },
      {
        heading: '13. Changes to This Policy',
        body: 'This Privacy Policy may be updated periodically. Continued use of our services following any update constitutes acceptance of the revised policy.',
      },
      {
        heading: '14. Contact',
        body: 'For privacy inquiries, data deletion requests, or questions about how your information is handled, contact us at legal@russaldmedical.com.',
      },
    ],
  },

  {
    slug:        'medical-disclaimer',
    title:       'Medical Disclaimer',
    lastUpdated: 'April 2025',
    sections: [
      {
        heading: '1. Scope of This Disclaimer',
        body: 'All information published on this website — including procedure descriptions, candidacy criteria, recovery guidelines, clinical outcomes, and educational content — is provided for informational and educational purposes only. It does not constitute medical advice, medical diagnosis, or medical treatment. It should not be used as a substitute for consultation with a qualified, licensed physician.',
      },
      {
        heading: '2. Pre-Travel & Remote Evaluations',
        body: 'Pre-travel evaluations, online assessments, and preliminary candidacy results are based on self-reported information and are preliminary in nature. They are subject to revision or reversal following in-person clinical evaluation. A remote or digital assessment is not a medical clearance and does not guarantee that a procedure will be performed.',
      },
      {
        heading: '3. Who Performs Medical Services',
        body: 'All surgical procedures, clinical evaluations, and medical treatments are performed by licensed physicians at Russald Medical Center, a medical facility operating in Tijuana, Baja California, Mexico under applicable Mexican medical licensing and regulatory frameworks.',
      },
      {
        heading: '4. Role of MedicalMex',
        body: 'MedicalMex provides non-clinical patient coordination services — scheduling, logistics, and communication support. MedicalMex does not provide medical advice, does not participate in clinical decision-making, and is not responsible for medical outcomes or the quality of clinical care delivered by Russald Medical Center.',
      },
      {
        heading: '5. Patient Responsibilities',
        body: 'Patients are responsible for seeking independent medical advice if they have concerns about their health or suitability for any procedure. Patients must provide complete and accurate health information. Withholding relevant medical history may affect clinical outcomes and patient safety.',
      },
      {
        heading: '6. Acceptance',
        body: 'By using this website, submitting any form, or engaging with our services, you acknowledge that no physician-patient relationship exists until an in-person consultation is completed with a Russald Medical Center physician, and that all content on this website is for educational purposes only.',
      },
    ],
  },

  {
    slug:        'booking',
    title:       'Booking, Cancellation & Refund Policy',
    lastUpdated: 'April 2025',
    sections: [
      {
        heading: '1. Booking and Reservation',
        body: 'A procedure date is confirmed only upon completion of the booking process, which includes submission of required health documentation, pre-operative evaluation clearance, and payment of a deposit. A booking confirmation is issued in writing once all requirements are met.',
      },
      {
        heading: '2. Deposits and Commitment',
        body: 'A deposit is required to secure your procedure date. This deposit represents a commitment to proceed with the scheduled services and initiates preparation on our part — including scheduling surgical staff, reserving facility time, and preparing pre-operative materials. Deposits are not held speculatively.',
      },
      {
        heading: '3. Payment Structure',
        body: 'Pricing may include components for medical services, coordination, and logistics, depending on the service arrangement. Full payment structure and amounts are provided in your written quote before any deposit is required. All pricing is quoted in USD.',
      },
      {
        heading: '4. Rescheduling Policy',
        body: 'Rescheduling requests must be submitted within timelines specified in your booking confirmation. Rescheduling outside the specified window may result in forfeiture of the deposit. Rescheduling is subject to availability and may not be possible for all procedure dates.',
      },
      {
        heading: '5. Cancellation Policy',
        body: 'Deposits are refundable if a cancellation is submitted 15 or more days before the scheduled procedure date. Cancellations made fewer than 15 days before the procedure date are non-refundable. The 15-day threshold is calculated from the date written cancellation is received, not the date of initial request.',
      },
      {
        heading: '6. Refund Policy',
        body: 'Refunds for eligible cancellations are processed within 30 or more business days depending on payment method. Administrative and logistics costs incurred on your behalf prior to cancellation (pre-operative materials, third-party scheduling) may be deducted from refundable amounts.',
      },
      {
        heading: '7. Changes in Treatment Plan',
        body: 'Preliminary treatment plans are subject to revision based on in-person clinical evaluation. If a physician determines that a different procedure is indicated, or that a planned procedure cannot be safely performed, you will be advised and a revised plan will be proposed. Changes require your informed consent before proceeding.',
      },
      {
        heading: '8. Travel-Related Considerations',
        body: 'Patients are responsible for arranging travel to and from Tijuana. Failure to appear for a scheduled procedure without prior notice constitutes a late cancellation and the deposit is non-refundable. Travel insurance is recommended.',
      },
      {
        heading: '9. Right to Refuse Service',
        body: 'Russald Medical Center reserves the right to refuse or postpone a procedure at any time if clinical evaluation reveals unacceptable risk, if the patient is not compliant with pre-operative requirements, or if conduct is incompatible with safe care delivery.',
      },
      {
        heading: '10. Outstanding Payments',
        body: 'All outstanding balances for services rendered remain the full financial responsibility of the patient. Unpaid amounts may be referred to collection proceedings through MedicalMex.',
      },
      {
        heading: '11. Agreement',
        body: 'Payment of a deposit or receipt of a booking confirmation constitutes agreement to this Booking, Cancellation & Refund Policy in its entirety.',
      },
    ],
  },

  {
    slug:        'disputes',
    title:       'Dispute Resolution Policy',
    lastUpdated: 'April 2025',
    sections: [
      {
        heading: '1. How to Submit a Dispute',
        body: 'Disputes or concerns regarding services received must be submitted in writing to dispute@russaldmedical.com. Your submission must include your full name, contact information, procedure date, and a clear description of the concern.',
      },
      {
        heading: '2. Review Process',
        body: 'Each dispute is assigned a designated representative who will review your case. For medical concerns, your case may be reviewed in collaboration with the treating physician or clinical team. We may contact you for additional information, documentation, or photographs during the review.',
      },
      {
        heading: '3. Review Timeline',
        body: 'We aim to acknowledge dispute submissions within 5 business days. Resolution timelines vary depending on the complexity of the case and may extend to 30 or more days for matters requiring clinical review or coordination with multiple parties.',
      },
      {
        heading: '4. Required Cooperation',
        body: 'A complete and good-faith review requires patient cooperation, including timely responses to requests for documentation, photos, videos, or medical records from independent providers. Failure to provide requested information may limit our ability to complete the review.',
      },
      {
        heading: '5. Good Faith Resolution',
        body: 'All resolutions are based on clinical evaluation, accepted medical standards, and available documentation. Aesthetic surgical procedures inherently involve subjective outcomes and do not guarantee specific visual results. Resolution determinations reflect medical standards and documented clinical care.',
      },
      {
        heading: '6. Conduct During Active Review',
        body: 'We ask that patients allow the formal review process to be completed before drawing final conclusions or pursuing external escalation. Premature escalation may complicate resolution and prolong the process.',
      },
      {
        heading: '7. Public Statements and Fair Representation',
        body: 'Public statements — including online reviews and social media — must be truthful and not misleading. Russald Medical Center reserves the right to respond to public statements with contextual information and relevant documentation to ensure accurate representation of care delivered.',
      },
      {
        heading: '8. Misuse and Bad Faith Claims',
        body: 'Disputes submitted in bad faith — including refusal to cooperate, fabricated claims, or threats of false negative reviews to obtain financial concessions — may result in termination of the review process and referral to appropriate legal channels.',
      },
      {
        heading: '9. Non-Interference with Medical Judgment',
        body: 'The dispute resolution process does not override physician medical judgment or clinical decisions. Disputes regarding clinical outcomes are assessed against accepted standards of care, not patient expectations alone.',
      },
      {
        heading: '10. Mediation',
        body: 'For disputes that cannot be resolved through our internal process, we commit to good-faith mediation in Mexico before any formal legal action is initiated by either party.',
      },
    ],
  },

  {
    slug:        'cross-border',
    title:       'Cross-Border Care Acknowledgment',
    lastUpdated: 'April 2025',
    sections: [
      {
        heading: '1. Acknowledgment of International Care',
        body: 'By seeking medical care at Russald Medical Center in Tijuana, Mexico, you voluntarily choose to receive medical services outside your country of residence. You acknowledge the cross-border nature of this care and its implications for legal jurisdiction, regulatory oversight, and continuity of care.',
      },
      {
        heading: '2. Jurisdiction and Regulatory Framework',
        body: 'All medical services are performed in Mexico and governed by Mexican federal and state medical regulations. Regulatory standards, licensing requirements, and patient rights frameworks in Mexico may differ from those in your country of residence. Physicians at Russald Medical Center are licensed under Mexican law.',
      },
      {
        heading: '3. Role of MedicalMex',
        body: 'MedicalMex provides non-clinical coordination services to facilitate your care at Russald Medical Center. MedicalMex is not a medical provider and is not liable for clinical outcomes, physician decisions, or the quality of medical care delivered in Mexico.',
      },
      {
        heading: '4. Pre-Travel Evaluation Limitations',
        body: 'Pre-travel evaluations conducted remotely — through questionnaires, photos, or video consultation — are preliminary assessments based on self-reported information. Final candidacy determination, diagnosis, and treatment planning occur during in-person consultation with the treating physician in Mexico.',
      },
      {
        heading: '5. Travel Responsibility',
        body: 'You are responsible for complying with all applicable travel and immigration requirements to enter Mexico and return to your country of residence. You must possess valid travel documents. Bringing controlled substances, undeclared medications, or prohibited items across the border is your sole responsibility.',
      },
      {
        heading: '6. Variability of Treatment and Outcomes',
        body: 'Treatment recommendations may be revised based on in-person clinical findings. Adjustments to your planned procedure require your informed consent. Medical and surgical outcomes vary between individuals and are not guaranteed.',
      },
      {
        heading: '7. Logistics and Third-Party Services',
        body: 'Russald Medical Center and MedicalMex are not responsible for travel disruptions, accommodation issues, transportation delays, or failures of any third-party service provider engaged in connection with your trip.',
      },
      {
        heading: '8. Communication and Expectations',
        body: 'All final medical decisions — including whether to proceed with a procedure — are made in-person by your treating physician. Pre-travel communications establish preliminary expectations only and do not constitute binding clinical commitments.',
      },
      {
        heading: '9. Acceptance',
        body: 'By submitting an evaluation, scheduling a procedure, or traveling to Russald Medical Center for care, you confirm that you understand and accept the cross-border nature of the services and the terms described in this acknowledgment.',
      },
    ],
  },

  {
    slug:        'assessment',
    title:       'Free Assessment Disclaimer',
    lastUpdated: 'April 2025',
    sections: [
      {
        heading: '1. Nature of the Free Assessment',
        body: 'The Free Assessment tool available on this website is a digital pre-screening system. It is not a medical evaluation, medical consultation, or clinical diagnosis. Results are generated based on general eligibility criteria and self-reported information submitted by the user.',
      },
      {
        heading: '2. Pre-Screening vs. Medical Evaluation',
        body: 'A "pre-screening" or "assessment" result is distinct from a medical evaluation. A Free Assessment reviews publicly applicable general criteria — age range, BMI range, absence of absolute contraindications — and does not substitute for the clinical evaluation performed by a licensed physician. The Free Assessment is performed without access to your complete medical history, laboratory results, or imaging.',
      },
      {
        heading: '3. Qualification Results Are Not Medical Opinions',
        body: 'A positive or encouraging assessment result does not mean you are medically cleared for a procedure, guaranteed acceptance as a patient, or that a procedure is recommended for your specific health situation. All of these determinations require a physician-conducted evaluation.',
      },
      {
        heading: '4. Self-Reported Information',
        body: 'The accuracy of assessment results depends entirely on the accuracy of information you provide. Russald Medical Center and MedicalMex are not responsible for assessment results that are inaccurate, misleading, or inappropriate due to incomplete or incorrect self-reported information.',
      },
      {
        heading: '5. Limitation of Liability',
        body: 'Neither Russald Medical Center nor MedicalMex is liable for any decision made — including travel plans, financial commitments, or health decisions — based solely or primarily on a Free Assessment result.',
      },
      {
        heading: '6. Next Steps',
        body: 'A positive Free Assessment result is an invitation to proceed to a Medical Evaluation conducted by our clinical team. Only after completing the Medical Evaluation — including review of health history, laboratory results, and in-person physician consultation — can candidacy for any procedure be confirmed.',
      },
      {
        heading: '7. Acceptance',
        body: 'By using the Free Assessment tool, you acknowledge and agree that its results are preliminary, non-clinical, and not a substitute for professional medical advice or evaluation.',
      },
    ],
  },
] as const
