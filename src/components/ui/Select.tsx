// Figma node: 2300:720 — Section/Eval-Form (select fields — same spec as Input)
'use client'

import { useId, type ChangeEventHandler, type FocusEventHandler } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  id?: string
  name?: string
  placeholder?: string
  options: SelectOption[]
  value?: string
  defaultValue?: string
  required?: boolean
  disabled?: boolean
  autoComplete?: string
  error?: string
  className?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  onBlur?: FocusEventHandler<HTMLSelectElement>
}

const labelClass =
  "font-['Nunito_Sans',sans-serif] font-bold text-[0.65625rem] text-[var(--color-blue)] " +
  'tracking-[0.945px] uppercase leading-normal'

const selectBase =
  "w-full appearance-none bg-[var(--color-white)] border-[1.5px] border-[var(--color-border)] " +
  "rounded-[7px] px-[0.8125rem] py-[0.625rem] pr-10 min-h-[48px] " +
  "text-[0.875rem] font-['Nunito_Sans',sans-serif] font-normal " +
  'outline-none transition-colors duration-150 cursor-pointer ' +
  'focus-visible:border-[var(--color-blue)] focus-visible:ring-2 focus-visible:ring-[var(--color-blue)]/15 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed'

const selectError = 'border-red-400 focus-visible:border-red-500 focus-visible:ring-red-200/40'

export default function Select({
  label,
  id: idProp,
  name,
  placeholder,
  options,
  value,
  defaultValue,
  required,
  disabled,
  autoComplete,
  error,
  className = '',
  onChange,
  onBlur,
}: SelectProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const errorId = error ? `${id}-error` : undefined
  const selectClasses = [selectBase, error ? selectError : '', className].filter(Boolean).join(' ')

  const hasValue = value !== undefined ? value !== '' : defaultValue !== ''

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
          {required && <span className="text-[var(--color-blue)] ml-[2px]">*</span>}
        </label>
      )}

      <div className="relative w-full">
        <select
          id={id}
          name={name}
          {...(value !== undefined
            ? { value, onChange }
            : { defaultValue: defaultValue ?? '', onChange })}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          onBlur={onBlur}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={`${selectClasses} ${!hasValue ? 'text-[var(--color-muted)]/60' : 'text-[var(--color-charcoal)]'}`}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* chevron — matches Figma implicit arrow indicator */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--color-muted)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-red-500 text-[0.75rem] leading-snug">
          {error}
        </p>
      )}
    </div>
  )
}

export type { SelectProps, SelectOption }
