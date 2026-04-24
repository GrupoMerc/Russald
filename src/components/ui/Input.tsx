// Figma node: 2300:720 — Section/Eval-Form · 2323:988 (Tablet) · 2334:1568 (Mobile)
'use client'

import { useId, type HTMLInputTypeAttribute, type ChangeEventHandler, type FocusEventHandler } from 'react'

interface BaseProps {
  label?: string
  id?: string
  name?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  required?: boolean
  disabled?: boolean
  autoComplete?: string
  error?: string
  className?: string
}

interface InputFieldProps extends BaseProps {
  rows?: never
  type?: HTMLInputTypeAttribute
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
}

interface TextareaFieldProps extends BaseProps {
  rows: number
  type?: never
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
}

type InputProps = InputFieldProps | TextareaFieldProps

const labelClass =
  "font-['Nunito_Sans',sans-serif] font-bold text-[0.65625rem] text-[var(--color-blue)] " +
  'tracking-[0.945px] uppercase leading-normal'

const fieldBase =
  "w-full bg-[var(--color-white)] border-[1.5px] border-[var(--color-border)] rounded-[7px] " +
  "px-[0.8125rem] py-[0.625rem] min-h-[48px] text-[0.875rem] font-['Nunito_Sans',sans-serif] " +
  'font-normal text-[var(--color-charcoal)] placeholder:text-[var(--color-muted)]/60 ' +
  'outline-none transition-colors duration-150 ' +
  'focus-visible:border-[var(--color-blue)] focus-visible:ring-2 focus-visible:ring-[var(--color-blue)]/15 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed'

const fieldError = 'border-red-400 focus-visible:border-red-500 focus-visible:ring-red-200/40'

export default function Input(props: InputProps) {
  const { label, id: idProp, error, className = '', required, disabled } = props
  const generatedId = useId()
  const id = idProp ?? generatedId
  const errorId = error ? `${id}-error` : undefined
  const fieldClasses = [fieldBase, error ? fieldError : '', className].filter(Boolean).join(' ')

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
          {required && <span className="text-[var(--color-blue)] ml-[2px]">*</span>}
        </label>
      )}

      {'rows' in props && typeof props.rows === 'number' ? (
        <textarea
          id={id}
          name={props.name}
          rows={props.rows}
          placeholder={props.placeholder}
          value={props.value}
          defaultValue={props.defaultValue}
          required={required}
          disabled={disabled}
          autoComplete={props.autoComplete}
          onChange={props.onChange}
          onBlur={props.onBlur}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={`${fieldClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={(props as InputFieldProps).name}
          type={(props as InputFieldProps).type ?? 'text'}
          placeholder={props.placeholder}
          value={props.value}
          defaultValue={props.defaultValue}
          required={required}
          disabled={disabled}
          autoComplete={props.autoComplete}
          onChange={(props as InputFieldProps).onChange}
          onBlur={(props as InputFieldProps).onBlur}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={fieldClasses}
        />
      )}

      {error && (
        <p id={errorId} role="alert" className="text-red-500 text-[0.75rem] leading-snug">
          {error}
        </p>
      )}
    </div>
  )
}

export type { InputProps, InputFieldProps, TextareaFieldProps }
