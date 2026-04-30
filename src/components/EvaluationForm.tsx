'use client'

import { useState } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────
type ProcType = 's' | 'm'
type Stage    = 'step1' | 'step2' | 'success'

interface Props {
  defaultProcedure?: string  // "Label|type" e.g. "Gastric Sleeve|s"
  showHeader?:       boolean
}

// ── Static data ───────────────────────────────────────────────────────────────
const PROC_GROUPS = [
  { group: 'Weight Loss Surgery', procs: [
    'Gastric Sleeve|s','Gastric Bypass|s','Mini Gastric Bypass|s','Lap-Band|s','Bariatric Revision|s',
  ]},
  { group: 'Plastic Surgery', procs: [
    'Mommy Makeover|s','Tummy Tuck|s','Liposuction|s','Brazilian Butt Lift (BBL)|s',
    'Breast Augmentation|s','Rhinoplasty|s','Facelift|s','Arm Lift|s','Thigh Lift|s',
    'Male Enhancement Implant|s',
  ]},
  { group: 'Orthopedics', procs: [
    'Knee Replacement|s','Hip Replacement|s','ACL Repair|s','Spine Surgery|s','Wound Washout|s',
  ]},
  { group: "Men's Health", procs: [
    'Erectile Dysfunction|s','Testosterone Therapy (TRT)|s',
  ]},
  { group: 'Vascular Care', procs: [
    'EVLA Vein Treatment|s','Sclerotherapy|s',
  ]},
  { group: 'Hormone Optimization', procs: [
    'BHRT|s','HGH Therapy (Norditropin)|s','Bio Optimization Protocol|s',
  ]},
  { group: 'IV Therapy & Wellness', procs: [
    'NAD IV|m','Myers Cocktail IV|m','Glutathione IV|m','Anti-Aging IV|m',
  ]},
  { group: 'Regenerative & Aesthetic', procs: [
    'PRP Facial|m','P-Shot PRP|m','PRP Joint Therapy|m','Microneedling|m','Botox|m',
  ]},
] as const

const STATE_MAP: Record<string, readonly string[]> = {
  US: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
       'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
       'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
       'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
       'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
       'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
       'Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
  CA: ['Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland and Labrador',
       'Northwest Territories','Nova Scotia','Nunavut','Ontario','Prince Edward Island',
       'Quebec','Saskatchewan','Yukon'],
  MX: ['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas',
       'Chihuahua','Ciudad de México','Coahuila','Colima','Durango','Estado de México',
       'Guanajuato','Guerrero','Hidalgo','Jalisco','Michoacán','Morelos','Nayarit',
       'Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosí',
       'Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'],
}

const CONDITIONS = [
  { value: 'Diabetes/Pre-diabetes', label: 'Diabetes / Pre-diabetes' },
  { value: 'Hypertension',          label: 'Hypertension' },
  { value: 'Heart disease',         label: 'Heart disease' },
  { value: 'Kidney disease',        label: 'Kidney disease' },
  { value: 'Thyroid disorder',      label: 'Thyroid disorder' },
  { value: 'none',                  label: 'None of the above' },
] as const

// ── Specialty map (CRM) ───────────────────────────────────────────────────────
const SPECIALTY_MAP: Record<string, string> = {
  'Gastric Sleeve':              'Weight Loss Surgery',
  'Gastric Bypass':              'Weight Loss Surgery',
  'Mini Gastric Bypass':         'Weight Loss Surgery',
  'Lap-Band':                    'Weight Loss Surgery',
  'Bariatric Revision':          'Weight Loss Surgery',
  'Mommy Makeover':              'Plastic Surgery',
  'Tummy Tuck':                  'Plastic Surgery',
  'Liposuction':                 'Plastic Surgery',
  'Brazilian Butt Lift (BBL)':   'Plastic Surgery',
  'Breast Augmentation':         'Plastic Surgery',
  'Rhinoplasty':                 'Plastic Surgery',
  'Facelift':                    'Plastic Surgery',
  'Arm Lift':                    'Plastic Surgery',
  'Thigh Lift':                  'Plastic Surgery',
  'Male Enhancement Implant':    "Men's Health",
  'Knee Replacement':            'Orthopedics',
  'Hip Replacement':             'Orthopedics',
  'ACL Repair':                  'Orthopedics',
  'Spine Surgery':               'Orthopedics',
  'Wound Washout':               'Vascular',
  'Erectile Dysfunction':        "Men's Health",
  'Testosterone Therapy (TRT)':  "Men's Health",
  'EVLA Vein Treatment':         'Vascular',
  'Sclerotherapy':               'Vascular',
  'BHRT':                        'Bio-Optimization',
  'HGH Therapy (Norditropin)':   'Bio-Optimization',
  'Bio Optimization Protocol':   'Bio-Optimization',
  'NAD IV':                      'Bio-Optimization',
  'Myers Cocktail IV':           'Bio-Optimization',
  'Glutathione IV':              'Bio-Optimization',
  'Anti-Aging IV':               'Bio-Optimization',
  'PRP Facial':                  'Skin & Regenerative',
  'P-Shot PRP':                  "Men's Health",
  'PRP Joint Therapy':           'Orthopedics',
  'Microneedling':               'Skin & Regenerative',
  'Botox':                       'Skin & Regenerative',
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function parseProcValue(v: string): { label: string; type: ProcType } {
  const idx = v.lastIndexOf('|')
  return {
    label: idx > 0 ? v.slice(0, idx) : v,
    type:  (idx > 0 ? v.slice(idx + 1) : 's') as ProcType,
  }
}

// ── Style constants ───────────────────────────────────────────────────────────
const CARD  = 'w-full overflow-hidden rounded-[16px] bg-[var(--color-white)] shadow-[0_2px_24px_rgba(15,28,63,.08),0_1px_4px_rgba(15,28,63,.04)]'
const LBL   = "mb-[6px] block font-['Nunito_Sans',sans-serif] text-[0.65625rem] font-bold uppercase tracking-[0.12em] text-[#097BB4]"
const LSEC  = "border-t border-[var(--color-border)] pt-4 font-['Nunito_Sans',sans-serif] text-[0.625rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]"
const SBTN  = "btn-form-primary mt-1 flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-[8px] bg-[#097BB4] font-['Nunito_Sans',sans-serif] text-[0.9375rem] font-bold tracking-[0.01em] text-white transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)] disabled:opacity-60"
const LEGAL = "text-center font-['Nunito_Sans',sans-serif] text-[0.6875rem] leading-[1.6] text-[var(--color-muted)]"
const CHEVRON_BG = { backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }

function inpCls(err?: string) {
  return `w-full rounded-[7px] border bg-white px-[13px] py-[10px] font-['Nunito_Sans',sans-serif] text-[0.84375rem] text-[var(--color-charcoal)] outline-none transition-all placeholder:text-[#B0B0B8] placeholder:text-[0.8125rem] ${
    err
      ? 'border-red-400 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,.08)]'
      : 'border-[var(--color-border)] focus:border-[#097BB4] focus:shadow-[0_0_0_3px_rgba(9,123,180,.08)]'
  }`
}

function selCls(err?: string) {
  return `${inpCls(err)} cursor-pointer appearance-none pr-9`
}

function ErrMsg({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="mt-[3px] font-['Nunito_Sans',sans-serif] text-[0.6875rem] text-red-500">{msg}</p>
}

// ── Sub-components ────────────────────────────────────────────────────────────
function CardHeader() {
  return (
    <div className="bg-[var(--color-navy)] px-8 py-7">
      <p className="font-['Rethink_Sans',sans-serif] text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-white/50">
        Russald Medical Center · Tijuana, Mexico
      </p>
      <h2 className="mt-[6px] font-['Rethink_Sans',sans-serif] text-[1.375rem] font-bold text-white">
        Clinical Evaluation Form
      </h2>
      <p className="mt-1 font-['Nunito_Sans',sans-serif] text-[0.8125rem] leading-[1.6] text-white/55">
        Confidential · Reviewed by our clinical team within 24 hours
      </p>
    </div>
  )
}

function StepDot({ num, label, state }: {
  num: number; label: string; state: 'active' | 'done' | 'pending'
}) {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div
        className={`flex size-[30px] shrink-0 items-center justify-center rounded-full font-['Rethink_Sans',sans-serif] text-[0.75rem] font-bold transition-all ${
          state === 'pending'
            ? 'bg-[var(--color-border)] text-[var(--color-muted)]'
            : 'bg-[#097BB4] text-white shadow-[0_0_0_4px_rgba(9,123,180,.15)]'
        }`}
        aria-current={state === 'active' ? 'step' : undefined}
      >
        {state === 'done'
          ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><polyline points="1.5,6 4.5,9 10.5,3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          : num}
      </div>
      <span className="font-['Nunito_Sans',sans-serif] text-[0.625rem] font-bold uppercase tracking-[0.06em] text-[var(--color-muted)] whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

function PillGroup({ options, value, onChange }: {
  options:  ReadonlyArray<{ label: string; value: string; warn?: boolean }>
  value:    string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-[7px]" role="group">
      {options.map(opt => {
        const sel = value === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-[7px] border px-[14px] py-[7px] font-['Nunito_Sans',sans-serif] text-[0.78125rem] leading-[1.35] transition-all ${
              sel && opt.warn
                ? 'border-[var(--color-gold)] bg-[#fbf4e6] font-medium text-[var(--color-gold)]'
                : sel
                ? 'border-[#097BB4] bg-[#EAF4FB] font-medium text-[#054E78]'
                : 'border-[var(--color-border)] text-[var(--color-muted)] hover:border-[#097BB4] hover:text-[#097BB4]'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function EvaluationForm({ defaultProcedure = '', showHeader = false }: Props) {
  const [stage, setStage] = useState<Stage>('step1')

  // Step 1 fields
  const [firstName,    setFirstName]    = useState('')
  const [lastName,     setLastName]     = useState('')
  const [email,        setEmail]        = useState('')
  const [phone,        setPhone]        = useState('')
  const [procedure,    setProcedure]    = useState(defaultProcedure)
  const [country,      setCountry]      = useState('')
  const [state,        setState]        = useState('')
  const [otherCountry, setOtherCountry] = useState('')
  const [contactTime,  setContactTime]  = useState('')
  const [notes,        setNotes]        = useState('')

  // Step 2 fields
  const [height,             setHeight]             = useState('')
  const [weight,             setWeight]             = useState('')
  const [smokingStatus,      setSmokingStatus]      = useState('')
  const [conditions,         setConditions]         = useState<string[]>([])
  const [cancerHistory,      setCancerHistory]      = useState('')
  const [cancerDetail,       setCancerDetail]       = useState('')
  const [bloodThinners,      setBloodThinners]      = useState('None')
  const [bloodThinnersOther, setBloodThinnersOther] = useState('')
  const [prevSurgery,        setPrevSurgery]        = useState('No')
  const [prevSurgeryDetail,  setPrevSurgeryDetail]  = useState('')
  const [timeline,           setTimeline]           = useState('')

  // UI
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')

  // Derived
  const { label: procLabel, type: procType } = parseProcValue(procedure)
  const stateList  = STATE_MAP[country] ?? []
  const showState  = country === 'US' || country === 'CA' || country === 'MX'
  const showOther  = country === 'OTHER'
  const stateLabel = country === 'CA' ? 'Province' : 'State'

  const clearErr = (field: string) =>
    setErrors(prev => { const n = { ...prev }; delete n[field]; return n })

  function validate1(): Record<string, string> {
    const e: Record<string, string> = {}
    if (!firstName.trim()) e.firstName = 'Required'
    if (!lastName.trim())  e.lastName  = 'Required'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
    if (!phone.trim() || !/^\+?[\d\s\-\(\)]{7,20}$/.test(phone.trim())) e.phone = 'Enter a valid phone number'
    if (!procedure)        e.procedure = 'Please select a procedure'
    if (!country)          e.country   = 'Please select your country'
    if (!contactTime)      e.contactTime = 'Please select a time'
    return e
  }

  function goToStep2(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate1()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    // Fire step 1 webhook — non-blocking, user proceeds regardless
    void fetch('/api/leads', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        step: 1,
        firstName, lastName, email, phone,
        procedure: procLabel, procType,
        specialty: SPECIALTY_MAP[procLabel] ?? '',
        country, state, otherCountry, contactTime, notes,
      }),
    })
    if (procType === 'm') { void submitForm(); return }
    setStage('step2')
    document.getElementById('eval-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  async function submitForm(e?: React.FormEvent) {
    e?.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/api/leads', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          step: 2,
          email, // identifier to update the lead in Zapier
          procedure: procLabel,
          height, weight, smokingStatus, conditions,
          cancerHistory, cancerDetail,
          bloodThinners, bloodThinnersOther,
          prevSurgery, prevSurgeryDetail, timeline,
        }),
      })
      setStage('success')
    } catch {
      setStatus('error')
    }
  }

  function toggleCondition(val: string) {
    if (val === 'none') {
      setConditions(prev => prev.includes('none') ? [] : ['none'])
      return
    }
    setConditions(prev => {
      const without = prev.filter(c => c !== 'none' && c !== val)
      return prev.includes(val) ? without : [...without, val]
    })
  }

  // ── Success ───────────────────────────────────────────────────────────────────
  if (stage === 'success') {
    return (
      <div className={CARD}>
        {showHeader && <CardHeader />}
        <div className="px-7 py-10 text-center sm:px-8">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-[#E1F5EE]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold text-[var(--color-navy)]">
            Clinical Evaluation Recommended
          </h2>
          <p className="mx-auto mt-2 max-w-[400px] font-['Nunito_Sans',sans-serif] text-[0.8125rem] leading-[1.7] text-[var(--color-muted)]">
            Based on what you shared, your profile qualifies for this procedure. A Patient Advisor will reach out within 24 hours to schedule your clinical evaluation.
          </p>
          <a
            href={`https://wa.me/18582644121?text=Hi%2C%20I%20just%20completed%20my%20evaluation%20for%20${encodeURIComponent(procLabel)}%20and%20I%27d%20like%20to%20schedule.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-[9px] rounded-[8px] bg-[#25D366] px-6 py-[11px] font-['Nunito_Sans',sans-serif] text-[0.875rem] font-medium text-white transition-colors hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Schedule via WhatsApp
          </a>
          <p className="mt-3 font-['Nunito_Sans',sans-serif] text-[0.75rem] text-[var(--color-muted)]">
            US: +1 (800) 560-6733 · MX: +52 (664) 906-9268
          </p>
          <p className="mt-4 border-t border-[var(--color-border)] pt-4 font-['Nunito_Sans',sans-serif] text-[0.6875rem] leading-[1.65] text-[var(--color-muted)]">
            ⚕️ This assessment does not constitute a medical determination of candidacy. Final eligibility is determined by the treating physician during your clinical evaluation.
          </p>
        </div>
      </div>
    )
  }

  // Shared stepper
  const stepper = (
    <div className="mb-[26px] flex items-start" aria-label="Form progress">
      <StepDot num={1} label="Your Info"       state={stage === 'step1' ? 'active' : 'done'} />
      <div
        className={`mt-[14px] h-[2px] flex-1 rounded-[2px] transition-all ${stage !== 'step1' ? 'bg-[#097BB4]' : 'bg-[var(--color-border)]'}`}
        aria-hidden="true"
      />
      <StepDot num={2} label="Medical Profile" state={stage === 'step2' ? 'active' : 'pending'} />
    </div>
  )

  // ── Step 1 ────────────────────────────────────────────────────────────────────
  if (stage === 'step1') {
    return (
      <div className={CARD}>
        {showHeader && <CardHeader />}
        <div className="px-6 py-7 sm:px-8">
          {stepper}

          <h3 className="font-['Rethink_Sans',sans-serif] text-[1.1875rem] font-bold text-[var(--color-navy)]">
            Tell us about you
          </h3>
          <p className="mt-[3px] font-['Nunito_Sans',sans-serif] text-[0.78125rem] text-[var(--color-muted)]">
            Step 1 of 2 · Takes about 2 minutes.
          </p>

          <form onSubmit={goToStep2} noValidate className="mt-[22px] flex flex-col gap-[14px]">

            {/* Name */}
            <div className="grid grid-cols-2 gap-[10px]">
              <div>
                <label htmlFor="ef-fn" className={LBL}>First Name *</label>
                <input id="ef-fn" className={inpCls(errors.firstName)} value={firstName} onChange={e => { setFirstName(e.target.value); clearErr('firstName') }} placeholder="Jane" autoComplete="given-name" />
                <ErrMsg msg={errors.firstName} />
              </div>
              <div>
                <label htmlFor="ef-ln" className={LBL}>Last Name *</label>
                <input id="ef-ln" className={inpCls(errors.lastName)} value={lastName} onChange={e => { setLastName(e.target.value); clearErr('lastName') }} placeholder="Smith" autoComplete="family-name" />
                <ErrMsg msg={errors.lastName} />
              </div>
            </div>

            {/* Email / Phone */}
            <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
              <div>
                <label htmlFor="ef-em" className={LBL}>Email *</label>
                <input id="ef-em" type="email" className={inpCls(errors.email)} value={email} onChange={e => { setEmail(e.target.value); clearErr('email') }} placeholder="jane@email.com" autoComplete="email" />
                <ErrMsg msg={errors.email} />
              </div>
              <div>
                <label htmlFor="ef-ph" className={LBL}>Phone / WhatsApp *</label>
                <input id="ef-ph" type="tel" className={inpCls(errors.phone)} value={phone} onChange={e => { setPhone(e.target.value); clearErr('phone') }} placeholder="+1 (555) 000-0000" autoComplete="tel" />
                <ErrMsg msg={errors.phone} />
              </div>
            </div>

            {/* Procedure */}
            <div>
              <label htmlFor="ef-proc" className={LBL}>Procedure of Interest *</label>
              <select id="ef-proc" className={selCls(errors.procedure)} style={CHEVRON_BG} value={procedure} onChange={e => { setProcedure(e.target.value); clearErr('procedure') }}>
                <option value="">— Select a procedure —</option>
                {PROC_GROUPS.map(g => (
                  <optgroup key={g.group} label={g.group}>
                    {g.procs.map(p => {
                      const { label } = parseProcValue(p)
                      return <option key={p} value={p}>{label}</option>
                    })}
                  </optgroup>
                ))}
              </select>
              <ErrMsg msg={errors.procedure} />
            </div>

            {/* Country + State */}
            <div className="flex flex-col gap-[10px]">
              <div className={`grid gap-[10px] ${showState ? 'grid-cols-2' : 'grid-cols-1'}`}>
                <div>
                  <label htmlFor="ef-country" className={LBL}>Country *</label>
                  <select id="ef-country" className={selCls(errors.country)} style={CHEVRON_BG} value={country} onChange={e => { setCountry(e.target.value); setState(''); clearErr('country') }}>
                    <option value="">— Select —</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="MX">Mexico</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <ErrMsg msg={errors.country} />
                </div>
                {showState && (
                  <div>
                    <label htmlFor="ef-state" className={LBL}>{stateLabel}</label>
                    <select id="ef-state" className={selCls()} style={CHEVRON_BG} value={state} onChange={e => setState(e.target.value)}>
                      <option value="">— Select —</option>
                      {stateList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                )}
              </div>
              {showOther && (
                <input className={inpCls()} value={otherCountry} onChange={e => setOtherCountry(e.target.value)} placeholder="Please enter your country" />
              )}
            </div>

            {/* Contact time pills */}
            <div>
              <p className={LBL}>Best Time to Contact *</p>
              <PillGroup
                options={[
                  { label: 'Morning (9am–12pm)',  value: 'Morning' },
                  { label: 'Afternoon (12–5pm)',  value: 'Afternoon' },
                  { label: 'Evening (5–8pm)',     value: 'Evening' },
                  { label: 'Anytime',             value: 'Anytime' },
                ]}
                value={contactTime}
                onChange={v => { setContactTime(v); clearErr('contactTime') }}
              />
              <ErrMsg msg={errors.contactTime} />
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="ef-notes" className={LBL}>
                Brief Goals or Notes{' '}
                <span className="ml-1 text-[0.5625rem] normal-case font-normal tracking-normal text-[var(--color-muted)]">Optional</span>
              </label>
              <textarea id="ef-notes" rows={2} className={inpCls()} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Briefly describe your goals or situation…" />
            </div>

            {/* Honeypot */}
            <input type="text" name="_hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <button type="submit" className={SBTN}>
              Continue to Medical Profile →
            </button>
            <p className={LEGAL}>
              🔒 Confidential. Step 2 collects basic medical info to prepare your case for clinical review.
            </p>
          </form>
        </div>
      </div>
    )
  }

  // ── Step 2 ────────────────────────────────────────────────────────────────────
  return (
    <div className={CARD}>
      {showHeader && <CardHeader />}
      <div className="px-6 py-7 sm:px-8">
        {stepper}

        {/* Back + procedure badge */}
        <div className="mb-[18px] flex items-center gap-3">
          <button
            type="button"
            onClick={() => setStage('step1')}
            className="font-['Nunito_Sans',sans-serif] text-[0.78125rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-navy)]"
          >
            ← Back
          </button>
          <div className="inline-flex items-center gap-[7px] rounded-[20px] border border-[#097BB4] bg-[#EAF4FB] px-3 py-[4px]">
            <div className="size-[6px] shrink-0 rounded-full bg-[#097BB4]" aria-hidden="true" />
            <span className="font-['Nunito_Sans',sans-serif] text-[0.71875rem] font-medium text-[#054E78]">{procLabel}</span>
          </div>
        </div>

        <h3 className="font-['Rethink_Sans',sans-serif] text-[1.1875rem] font-bold text-[var(--color-navy)]">Medical Profile</h3>
        <p className="mt-[3px] font-['Nunito_Sans',sans-serif] text-[0.78125rem] text-[var(--color-muted)]">
          Step 2 of 2 · A few quick questions to prepare your evaluation.
        </p>

        <form onSubmit={submitForm} noValidate className="mt-[22px] flex flex-col gap-[14px]">

          {/* Physical */}
          <p className={LSEC}>Physical profile</p>
          <div className="grid grid-cols-2 gap-[10px]">
            <div>
              <label htmlFor="ef-ht" className={LBL}>Height</label>
              <input id="ef-ht" className={inpCls()} value={height} onChange={e => setHeight(e.target.value)} placeholder='5&apos;7" or 170 cm' />
            </div>
            <div>
              <label htmlFor="ef-wt" className={LBL}>Current Weight</label>
              <input id="ef-wt" className={inpCls()} value={weight} onChange={e => setWeight(e.target.value)} placeholder="185 lbs or 84 kg" />
            </div>
          </div>

          {/* Lifestyle */}
          <p className={LSEC}>Lifestyle</p>
          <div>
            <p className={LBL}>Smoking Status</p>
            <PillGroup
              options={[
                { label: 'Non-smoker',                     value: 'Non-smoker' },
                { label: 'Former smoker (quit 6+ months)', value: 'Former smoker' },
                { label: 'Current smoker',                 value: 'Current smoker', warn: true },
              ]}
              value={smokingStatus}
              onChange={setSmokingStatus}
            />
          </div>

          {/* Medical history */}
          <p className={LSEC}>Medical history</p>

          <div>
            <p className={LBL}>
              Major medical conditions{' '}
              <span className="ml-1 text-[0.5625rem] normal-case font-normal tracking-normal text-[var(--color-muted)]">Select all that apply</span>
            </p>
            <div className="grid grid-cols-2 gap-[7px]">
              {CONDITIONS.map(({ value: v, label: l }) => {
                const sel = conditions.includes(v)
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => toggleCondition(v)}
                    className={`flex items-center gap-[9px] rounded-[7px] border px-3 py-[9px] text-left transition-all ${sel ? 'border-[#097BB4] bg-[#EAF4FB]' : 'border-[var(--color-border)] hover:border-[#097BB4]'}`}
                  >
                    <div className={`flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-all ${sel ? 'border-[#097BB4] bg-[#097BB4]' : 'border-[var(--color-border)]'}`}>
                      {sel && <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><polyline points="1.5,5 4,7.5 8.5,2" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <span className={`font-['Nunito_Sans',sans-serif] text-[0.78125rem] ${sel ? 'font-medium text-[#054E78]' : 'text-[var(--color-muted)]'}`}>{l}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <p className={LBL}>Cancer history</p>
            <PillGroup
              options={[
                { label: 'No',           value: 'No' },
                { label: 'Yes',          value: 'Yes' },
                { label: 'In remission', value: 'In remission' },
              ]}
              value={cancerHistory}
              onChange={setCancerHistory}
            />
            {cancerHistory === 'Yes' && (
              <input className={`${inpCls()} mt-[9px]`} value={cancerDetail} onChange={e => setCancerDetail(e.target.value)} placeholder="Type of cancer, year of diagnosis, current status…" />
            )}
          </div>

          <div>
            <p className={LBL}>Current blood thinners</p>
            <PillGroup
              options={[
                { label: 'None',             value: 'None' },
                { label: 'Aspirin (daily)',  value: 'Aspirin' },
                { label: 'Warfarin/Coumadin', value: 'Warfarin' },
                { label: 'Eliquis/Xarelto', value: 'Eliquis/Xarelto' },
                { label: 'Plavix',           value: 'Plavix' },
                { label: 'Other',            value: 'Other' },
              ]}
              value={bloodThinners}
              onChange={setBloodThinners}
            />
            {bloodThinners === 'Other' && (
              <input className={`${inpCls()} mt-[9px]`} value={bloodThinnersOther} onChange={e => setBloodThinnersOther(e.target.value)} placeholder="Please specify medication name and dosage…" />
            )}
          </div>

          <div>
            <p className={LBL}>Previous surgery in area of interest?</p>
            <PillGroup
              options={[
                { label: 'No',  value: 'No' },
                { label: 'Yes', value: 'Yes' },
              ]}
              value={prevSurgery}
              onChange={setPrevSurgery}
            />
            {prevSurgery === 'Yes' && (
              <input className={`${inpCls()} mt-[9px]`} value={prevSurgeryDetail} onChange={e => setPrevSurgeryDetail(e.target.value)} placeholder="Procedure, approximate year, facility (brief)…" />
            )}
          </div>

          {/* Intent */}
          <p className={LSEC}>Intent</p>
          <div>
            <p className={LBL}>When are you thinking of moving forward?</p>
            <PillGroup
              options={[
                { label: 'In the next month',    value: 'Next month' },
                { label: 'In the next 3 months', value: 'Next 3 months' },
                { label: 'In the next 6 months', value: 'Next 6 months' },
                { label: 'Just exploring',       value: 'Exploring' },
              ]}
              value={timeline}
              onChange={setTimeline}
            />
          </div>

          {status === 'error' && (
            <p role="alert" className="rounded-[7px] bg-red-50 px-4 py-3 text-center font-['Nunito_Sans',sans-serif] text-[0.8125rem] text-red-600">
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          <button type="submit" disabled={status === 'submitting'} className={SBTN}>
            {status === 'submitting' ? 'Submitting…' : 'Submit Evaluation Request ✓'}
          </button>
          <p className={LEGAL}>
            ⚕️ This assessment does not constitute a medical determination of candidacy. Final eligibility is determined by the treating physician.
          </p>
        </form>
      </div>
    </div>
  )
}
