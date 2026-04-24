// Figma node: 2300:705 — Section/Home-Hero (Desktop) · 2323:975 (Tablet) · 2334:1555 (Mobile)
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  /** Mobile: w-full + rounded-lg → tablet+: auto-width + pill */
  block?: boolean
  href?: string
  'aria-label'?: string
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-blue-action)] text-[var(--color-white)] border-transparent hover:bg-[var(--color-blue)]',
  outline:
    'bg-transparent text-[var(--color-white)] border-[1.5px] border-[rgba(255,255,255,0.6)] hover:border-[var(--color-white)]',
  ghost:
    'bg-transparent text-[var(--color-blue-action)] border-transparent hover:bg-[var(--color-blue-action)]/10',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2 text-[0.8125rem]',
  md: 'px-8 py-[0.9375rem] text-[0.9375rem]',
  lg: 'px-10 py-[1.125rem] text-[1rem]',
}

// Mobile (< 640px): full-width + rounded-lg; tablet+ : shrink-0 + pill
const blockClasses = 'w-full rounded-lg sm:w-auto sm:rounded-[var(--radius-btn)]'
const inlineClasses = 'rounded-[var(--radius-btn)]'

const base =
  'inline-flex items-center justify-center min-h-[48px] min-w-[48px] font-["Rethink_Sans",sans-serif] font-bold leading-none whitespace-nowrap transition-colors duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)] disabled:opacity-50 disabled:pointer-events-none'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      block = false,
      href,
      children,
      className = '',
      disabled,
      onClick,
      type = 'button',
      'aria-label': ariaLabel,
      ...rest
    },
    ref
  ) => {
    const classes = [
      base,
      variantClasses[variant],
      sizeClasses[size],
      block ? blockClasses : inlineClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    if (href && !disabled) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
export type { ButtonProps, Variant as ButtonVariant, Size as ButtonSize }
