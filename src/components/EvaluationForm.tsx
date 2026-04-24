'use client'

import { useState, useCallback } from 'react'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'

// ── Types ────────────────────────────────────────────────────────────────────

type Step1 = {
  firstName: string
  lastName: string
  email: string
  phone: string
  procedure: string
  country: string
  contactTime: string
  notes: string
}

type Step2 = {
  weightLbs: string
  heightFt: string
  heightIn: string
  dob: string
  conditions: string[]
  medications: string
  previousSurgeries: string
  smoker: string
  hearAboutUs: string
}

type FormData = Step1 & Step2
type Status = 'idle' | 'submitting' | 'success' | 'error'
type Errors1 = Partial<Record<keyof Step1, string>>
type Errors2 = Partial<Record<Exclude<keyof Step2, 'conditions'>, string>>

// ── Initial state ─────────────────────────────────────────────────────────────

const INIT_STEP1: Step1 = {
  firstName: '', lastName: '', email: '', phone: '',
  procedure: '', country: '', contactTime: '', notes: '',
}

const INIT_STEP2: Step2 = {
  weightLbs: '', heightFt: '', heightIn: '', dob: '',
  conditions: [], medications: '', previousSurgeries: '',
  smoker: '', hearAboutUs: '',
}

// ── Select options ────────────────────────────────────────────────────────────

const procedureOptions = [
  { value: 'gastric-sleeve',        label: 'Gastric Sleeve' },
  { value: 'gastric-bypass',        label: 'Gastric Bypass' },
  { value: 'mini-gastric-bypass',   label: 'Mini Gastric Bypass' },
  { value: 'lap-band',              label: 'Lap-Band' },
  { value: 'bariatric-revision',    label: 'Bariatric Revision' },
  { value: 'mommy-makeover',        label: 'Mommy Makeover' },
  { value: 'tummy-tuck',            label: 'Tummy Tuck' },
  { value: 'liposuction',           label: 'Liposuction' },
  { value: 'bbl',                   label: 'Brazilian Butt Lift (BBL)' },
  { value: 'breast-augmentation',   label: 'Breast Augmentation' },
  { value: 'rhinoplasty',           label: 'Rhinoplasty' },
  { value: 'facelift',              label: 'Facelift' },
  { value: 'fue-hair-transplant',   label: 'FUE Hair Transplant' },
  { value: 'dhi-hair-transplant',   label: 'DHI Hair Transplant' },
  { value: 'male-enhancement',      label: 'Male Enhancement Implant' },
  { value: 'ed-treatment',          label: 'Erectile Dysfunction Treatment' },
  { value: 'trt',                   label: 'Testosterone Replacement Therapy' },
  { value: 'evla',                  label: 'EVLA (Varicose Veins)' },
  { value: 'hgh-therapy',           label: 'HGH Therapy' },
  { value: 'bhrt',                  label: 'BHRT' },
  { value: 'myers-cocktail',        label: 'Myers Cocktail IV' },
  { value: 'other',                 label: 'Other / Not Sure Yet' },
]

const countryOptions = [
  { value: 'us',    label: 'United States' },
  { value: 'ca',    label: 'Canada' },
  { value: 'uk',    label: 'United Kingdom' },
  { value: 'au',    label: 'Australia' },
  { value: 'mx',    label: 'Mexico' },
  { value: 'other', label: 'Other' },
]

const contactTimeOptions = [
  { value: 'morning',   label: 'Morning (8 am – 12 pm)' },
  { value: 'afternoon', label: 'Afternoon (12 pm – 5 pm)' },
  { value: 'evening',   label: 'Evening (5 pm – 8 pm)' },
  { value: 'weekends',  label: 'Weekends' },
  { value: 'anytime',   label: 'Anytime' },
]

const smokerOptions = [
  { value: 'no',          label: 'No' },
  { value: 'yes',         label: 'Yes' },
  { value: 'ex-smoker',   label: 'Ex-smoker (quit > 6 months ago)' },
]

const hearAboutOptions = [
  { value: 'google',       label: 'Google search' },
  { value: 'social-media', label: 'Social media' },
  { value: 'referral',     label: 'Friend or family referral' },
  { value: 'youtube',      label: 'YouTube' },
  { value: 'doctor',       label: 'Referred by a doctor' },
  { value: 'other',        label: 'Other' },
]

const conditionsList = [
  { value: 'type2-diabetes',  label: 'Type 2 Diabetes' },
  { value: 'hypertension',    label: 'Hypertension' },
  { value: 'sleep-apnea',     label: 'Sleep Apnea' },
  { value: 'high-cholesterol', label: 'High Cholesterol' },
  { value: 'gerd',            label: 'GERD / Acid Reflux' },
  { value: 'heart-disease',   label: 'Heart Disease' },
  { value: 'none',            label: 'None of the above' },
]

// ── Validation ────────────────────────────────────────────────────────────────

function validate1(d: Step1): Errors1 {
  const e: Errors1 = {}
  if (!d.firstName.trim()) e.firstName = 'Required'
  if (!d.lastName.trim()) e.lastName = 'Required'
  if (!d.email.trim()) e.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Enter a valid email'
  if (!d.procedure) e.procedure = 'Please select a procedure'
  if (!d.country) e.country = 'Please select your country'
  if (!d.contactTime) e.contactTime = 'Please select a preferred time'
  return e
}

// ── Submission ────────────────────────────────────────────────────────────────

async function submitLead(data: FormData): Promise<void> {
  const res = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(`Request failed ${res.status}`)
}

// ── Stepper badge ─────────────────────────────────────────────────────────────

function StepBadge({
  num, label, state,
}: {
  num: number
  label: string
  state: 'active' | 'done' | 'pending'
}) {
  const bgClass =
    state === 'active' ? 'bg-[var(--color-blue)]' :
    state === 'done'   ? 'bg-emerald-500' :
                         'bg-[var(--color-border)]'

  const textClass =
    state === 'pending' ? 'text-[var(--color-muted)]' : 'text-[var(--color-white)]'

  return (
    <div className="flex flex-col items-center gap-[3px]">
      <div
        className={`flex size-7 items-center justify-center rounded-[14px] ${bgClass}`}
        aria-current={state === 'active' ? 'step' : undefined}
      >
        {state === 'done' ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <span className={`font-['Nunito_Sans',sans-serif] text-[0.75rem] font-extrabold ${textClass}`}>
            {num}
          </span>
        )}
      </div>
      <span className="font-['Nunito_Sans',sans-serif] text-[0.625rem] font-bold uppercase tracking-[0.8px] text-[var(--color-muted)]">
        {label}
      </span>
    </div>
  )
}

// ── Label style shared with Input/Select ─────────────────────────────────────

const labelClass =
  "font-['Nunito_Sans',sans-serif] font-bold text-[0.65625rem] text-[var(--color-blue)] " +
  'tracking-[0.945px] uppercase leading-normal'

// ── Main component ────────────────────────────────────────────────────────────

export default function EvaluationForm() {
  const [step, setStep]       = useState<1 | 2>(1)
  const [s1, setS1]           = useState<Step1>(INIT_STEP1)
  const [s2, setS2]           = useState<Step2>(INIT_STEP2)
  const [e1, setE1]           = useState<Errors1>({})
  const [e2]                  = useState<Errors2>({})
  const [status, setStatus]   = useState<Status>('idle')

  // Step 1 field change
  const onS1Change = useCallback(
    (field: keyof Step1) =>
      (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setS1((prev) => ({ ...prev, [field]: evt.target.value }))
        setE1((prev) => ({ ...prev, [field]: undefined }))
      },
    [],
  )

  // Step 2 field change
  const onS2Change = useCallback(
    (field: Exclude<keyof Step2, 'conditions'>) =>
      (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setS2((prev) => ({ ...prev, [field]: evt.target.value }))
      },
    [],
  )

  // Conditions checkbox toggle
  const toggleCondition = useCallback((value: string) => {
    setS2((prev) => {
      if (value === 'none') return { ...prev, conditions: ['none'] }
      const without = prev.conditions.filter((c) => c !== 'none' && c !== value)
      return {
        ...prev,
        conditions: prev.conditions.includes(value)
          ? without
          : [...without, value],
      }
    })
  }, [])

  // Step 1 → Step 2
  const handleStep1Submit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const errors = validate1(s1)
      if (Object.keys(errors).length > 0) {
        setE1(errors)
        return
      }
      setStep(2)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [s1],
  )

  // Step 2 → Submit
  const handleStep2Submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setStatus('submitting')
      try {
        await submitLead({ ...s1, ...s2 })
        setStatus('success')
      } catch {
        setStatus('error')
      }
    },
    [s1, s2],
  )

  // ── Success screen ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="w-full shrink-0 rounded-[14px] bg-[var(--color-white)] px-5 py-10 text-center shadow-[0px_20px_60px_0px_rgba(0,0,0,0.25)] sm:px-7 lg:w-[420px] lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-full bg-emerald-50">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M6 16l7 7 13-13" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="font-['Rethink_Sans',sans-serif] text-[1.375rem] font-bold text-[var(--color-navy)]">
            Evaluation Submitted!
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] leading-[1.65] text-[var(--color-muted)]">
            Thank you, <strong className="text-[var(--color-navy)]">{s1.firstName}</strong>. Our team will
            review your case and contact you within 1 business day — often the same day.
          </p>
          <p className="font-['Nunito_Sans',sans-serif] text-[0.75rem] leading-[1.65] text-[var(--color-muted)]">
            Check your inbox at <strong>{s1.email}</strong> for a confirmation.
          </p>
        </div>
      </div>
    )
  }

  // ── Shared stepper ──────────────────────────────────────────────────────────
  const stepper = (
    <div className="flex items-center gap-2" aria-label="Form progress">
      <StepBadge num={1} label="Your Info"       state={step === 1 ? 'active' : 'done'} />
      <div className="mx-1 h-[2px] flex-1 rounded-[2px] bg-[var(--color-border)]" aria-hidden="true" />
      <StepBadge num={2} label="Medical Profile" state={step === 2 ? 'active' : 'pending'} />
    </div>
  )

  // ── Step 1 ──────────────────────────────────────────────────────────────────
  if (step === 1) {
    return (
      <div className="w-full shrink-0 rounded-[14px] bg-[var(--color-white)] px-5 py-8 shadow-[0px_20px_60px_0px_rgba(0,0,0,0.25)] sm:px-7 lg:w-[420px] lg:px-8">
        {stepper}

        <div className="h-[22px]" />

        <p className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold text-[var(--color-navy)]">
          Start Your Evaluation
        </p>
        <div className="h-[3px]" />
        <p className="font-['Nunito_Sans',sans-serif] text-[0.781rem] font-normal leading-[1.6] text-[var(--color-muted)]">
          Step 1 of 2: Tell us who you are and what you&apos;re looking for.
        </p>

        <div className="h-[22px]" />

        <form onSubmit={handleStep1Submit} noValidate className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-[10px]">
            <Input
              label="First Name"
              name="firstName"
              placeholder="Jane"
              required
              autoComplete="given-name"
              value={s1.firstName}
              onChange={onS1Change('firstName') as React.ChangeEventHandler<HTMLInputElement>}
              error={e1.firstName}
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Smith"
              required
              autoComplete="family-name"
              value={s1.lastName}
              onChange={onS1Change('lastName') as React.ChangeEventHandler<HTMLInputElement>}
              error={e1.lastName}
            />
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:gap-[10px]">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="jane@email.com"
              required
              autoComplete="email"
              value={s1.email}
              onChange={onS1Change('email') as React.ChangeEventHandler<HTMLInputElement>}
              error={e1.email}
            />
            <Input
              label="Phone / WhatsApp"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              autoComplete="tel"
              value={s1.phone}
              onChange={onS1Change('phone') as React.ChangeEventHandler<HTMLInputElement>}
            />
          </div>

          <Select
            label="Procedure of Interest"
            name="procedure"
            placeholder="- Select a procedure -"
            options={procedureOptions}
            required
            value={s1.procedure}
            onChange={onS1Change('procedure') as React.ChangeEventHandler<HTMLSelectElement>}
            error={e1.procedure}
          />

          <Select
            label="Country"
            name="country"
            placeholder="- Select country -"
            options={countryOptions}
            required
            autoComplete="country"
            value={s1.country}
            onChange={onS1Change('country') as React.ChangeEventHandler<HTMLSelectElement>}
            error={e1.country}
          />

          <Select
            label="Best Time to Contact"
            name="contactTime"
            placeholder="- Select -"
            options={contactTimeOptions}
            required
            value={s1.contactTime}
            onChange={onS1Change('contactTime') as React.ChangeEventHandler<HTMLSelectElement>}
            error={e1.contactTime}
          />

          <Input
            label="Brief Goals or Notes"
            name="notes"
            rows={3}
            placeholder="Briefly describe your goals or situation…"
            value={s1.notes}
            onChange={onS1Change('notes') as React.ChangeEventHandler<HTMLTextAreaElement>}
          />

          <button
            type="submit"
            className="mt-1 flex h-[50px] w-full items-center justify-center rounded-[8px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] font-bold tracking-[0.45px] text-[var(--color-white)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            style={{
              backgroundImage: 'linear-gradient(7.99deg, rgb(29,86,196) 39.675%, rgb(37,99,235) 110.4%)',
              boxShadow: '0px 4px 14px 0px rgba(29,86,196,0.3)',
            }}
          >
            Continue to Medical Profile →
          </button>
        </form>

        <div className="h-3" />
        <p className="text-center font-['Nunito_Sans',sans-serif] text-[0.656rem] font-normal leading-[1.65] text-[var(--color-muted)]">
          🔒 Confidential. Step 2 collects basic medical info to prepare your case for clinical review.
        </p>
      </div>
    )
  }

  // ── Step 2 ──────────────────────────────────────────────────────────────────
  return (
    <div className="w-full shrink-0 rounded-[14px] bg-[var(--color-white)] px-5 py-8 shadow-[0px_20px_60px_0px_rgba(0,0,0,0.25)] sm:px-7 lg:w-[420px] lg:px-8">
      {stepper}

      <div className="h-[22px]" />

      <p className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold text-[var(--color-navy)]">
        Medical Profile
      </p>
      <div className="h-[3px]" />
      <p className="font-['Nunito_Sans',sans-serif] text-[0.781rem] font-normal leading-[1.6] text-[var(--color-muted)]">
        Step 2 of 2: Basic health information for our clinical team.
      </p>

      <div className="h-[22px]" />

      <form onSubmit={handleStep2Submit} noValidate className="flex flex-col gap-3">

        {/* Weight + Height */}
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-[10px]">
          <Input
            label="Weight (lbs)"
            name="weightLbs"
            type="number"
            placeholder="180"
            value={s2.weightLbs}
            onChange={onS2Change('weightLbs') as React.ChangeEventHandler<HTMLInputElement>}
            error={e2.weightLbs}
          />
          <div className="flex flex-1 flex-col gap-1">
            <span className={labelClass}>Height</span>
            <div className="flex gap-[6px]">
              <Input
                label=""
                name="heightFt"
                type="number"
                placeholder="5 ft"
                value={s2.heightFt}
                onChange={onS2Change('heightFt') as React.ChangeEventHandler<HTMLInputElement>}
              />
              <Input
                label=""
                name="heightIn"
                type="number"
                placeholder="6 in"
                value={s2.heightIn}
                onChange={onS2Change('heightIn') as React.ChangeEventHandler<HTMLInputElement>}
              />
            </div>
          </div>
        </div>

        {/* Date of Birth */}
        <Input
          label="Date of Birth"
          name="dob"
          type="date"
          autoComplete="bday"
          value={s2.dob}
          onChange={onS2Change('dob') as React.ChangeEventHandler<HTMLInputElement>}
        />

        {/* Health conditions — checkbox list */}
        <fieldset className="flex flex-col gap-[6px]">
          <legend className={`mb-[2px] ${labelClass}`}>
            Current Health Conditions
          </legend>
          {conditionsList.map((c) => (
            <label
              key={c.value}
              className="flex cursor-pointer items-center gap-[10px] rounded-[7px] border border-[var(--color-border)] px-[0.8125rem] py-[0.625rem] text-[0.875rem] font-['Nunito_Sans',sans-serif] text-[var(--color-charcoal)] transition-colors has-[:checked]:border-[var(--color-blue)] has-[:checked]:bg-[var(--color-blue)]/5"
            >
              <input
                type="checkbox"
                value={c.value}
                checked={s2.conditions.includes(c.value)}
                onChange={() => toggleCondition(c.value)}
                className="size-4 accent-[var(--color-blue)]"
              />
              {c.label}
            </label>
          ))}
        </fieldset>

        {/* Medications */}
        <Input
          label="Current Medications"
          name="medications"
          rows={2}
          placeholder="List any medications you take regularly, or write 'None'"
          value={s2.medications}
          onChange={onS2Change('medications') as React.ChangeEventHandler<HTMLTextAreaElement>}
        />

        {/* Previous surgeries */}
        <Input
          label="Previous Surgeries"
          name="previousSurgeries"
          rows={2}
          placeholder="List any prior surgeries, or write 'None'"
          value={s2.previousSurgeries}
          onChange={onS2Change('previousSurgeries') as React.ChangeEventHandler<HTMLTextAreaElement>}
        />

        {/* Smoker */}
        <Select
          label="Do You Smoke?"
          name="smoker"
          placeholder="- Select -"
          options={smokerOptions}
          value={s2.smoker}
          onChange={onS2Change('smoker') as React.ChangeEventHandler<HTMLSelectElement>}
        />

        {/* How did you hear about us */}
        <Select
          label="How Did You Hear About Us?"
          name="hearAboutUs"
          placeholder="- Select -"
          options={hearAboutOptions}
          value={s2.hearAboutUs}
          onChange={onS2Change('hearAboutUs') as React.ChangeEventHandler<HTMLSelectElement>}
        />

        {/* Error state */}
        {status === 'error' && (
          <p role="alert" className="rounded-[7px] bg-red-50 px-4 py-3 text-center font-['Nunito_Sans',sans-serif] text-[0.8125rem] text-red-600">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        {/* Actions */}
        <div className="mt-1 flex flex-col gap-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex h-[50px] w-full items-center justify-center rounded-[8px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] font-bold tracking-[0.45px] text-[var(--color-white)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)] disabled:opacity-60"
            style={{
              backgroundImage: 'linear-gradient(7.99deg, rgb(29,86,196) 39.675%, rgb(37,99,235) 110.4%)',
              boxShadow: '0px 4px 14px 0px rgba(29,86,196,0.3)',
            }}
          >
            {status === 'submitting' ? 'Submitting…' : 'Submit My Evaluation →'}
          </button>

          <button
            type="button"
            onClick={() => setStep(1)}
            disabled={status === 'submitting'}
            className="flex h-10 w-full items-center justify-center rounded-[8px] font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-normal text-[var(--color-muted)] transition-colors hover:text-[var(--color-navy)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)] disabled:opacity-60"
          >
            ← Back to Step 1
          </button>
        </div>
      </form>

      <div className="h-3" />
      <p className="text-center font-['Nunito_Sans',sans-serif] text-[0.656rem] font-normal leading-[1.65] text-[var(--color-muted)]">
        🔒 Your information is fully confidential and never shared with third parties.
      </p>
    </div>
  )
}
