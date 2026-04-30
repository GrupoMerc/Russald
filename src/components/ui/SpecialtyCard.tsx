// Figma node: 2298:252 — ui/SpecialtyCard (Weight Loss Surgery sample)
import Image from 'next/image'

interface SpecialtyCardProps {
  title: string
  description: string
  procedureCount: number
  image?: string
  imageAlt?: string
  href?: string
  className?: string
}

export default function SpecialtyCard({
  title,
  description,
  procedureCount,
  image,
  imageAlt,
  href,
  className = '',
}: SpecialtyCardProps) {
  const card = (
    <article
      className={
        'group bg-[var(--color-white)] border border-[var(--color-border)] rounded-[var(--radius-card)] ' +
        'overflow-hidden flex flex-col w-full transition-shadow duration-200 ' +
        'hover:shadow-[var(--shadow-card-hover-lg)] ' +
        className
      }
    >
      {/* Photo area */}
      <div className="relative h-[235px] w-full overflow-hidden shrink-0">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          // Gradient placeholder — matches Figma photo area
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(36.87deg, rgb(200,216,240) 39.675%, rgb(216,230,248) 75.035%, rgb(192,212,238) 110.4%)',
            }}
            aria-hidden="true"
          >
            <span
              className={
                "font-['Nunito_Sans',sans-serif] font-bold text-[0.625rem] " +
                'text-[rgba(122,156,196,0.7)] tracking-[1.2px] uppercase select-none'
              }
            >
              {title}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[5px] px-[1.125rem] pt-4 pb-5">
        <p
          className={
            "font-['Nunito_Sans',sans-serif] font-extrabold text-[0.9375rem] " +
            'text-[var(--color-blue-action)] leading-[1.3]'
          }
        >
          {title}
        </p>
        <p
          className={
            "font-['Nunito_Sans',sans-serif] font-normal text-[0.78125rem] " +
            'text-[var(--color-muted)] leading-[1.65]'
          }
        >
          {description}
        </p>
        <div className="h-1 w-full" aria-hidden="true" />
        {/* Procedure count badge */}
        <span
          className={
            'self-start inline-flex items-center bg-[var(--color-blue-action)] ' +
            "rounded-[var(--radius-btn)] px-[0.875rem] py-[0.4375rem] " +
            "font-['Nunito_Sans',sans-serif] font-bold text-[0.65625rem] " +
            'text-[var(--color-white)] tracking-[0.525px] uppercase whitespace-nowrap'
          }
        >
          {procedureCount} PROCEDURES →
        </span>
      </div>
    </article>
  )

  if (href) {
    return (
      <a href={href} className="block focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)] rounded-[var(--radius-card)]">
        {card}
      </a>
    )
  }

  return card
}

export type { SpecialtyCardProps }
