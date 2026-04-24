export const altText = {
  logo:              'Russald Medical Center',
  drRussald:         'Dr. Russald — Lead Surgeon at Russald Medical Center',
  facilityExterior:  'Russald Medical Center exterior, Tijuana Mexico',
  facilityOR:        'State-of-the-art operating room at Russald Medical Center',
  clinicInterior:    'Clinic interior at Russald Medical Center, Tijuana',
  patientConsult:    'Patient consultation at Russald Medical Center',
  heroClinic:        'Russald Medical Center reception — modern clinic in Tijuana, Mexico',
} as const

export type AltTextKey = keyof typeof altText
