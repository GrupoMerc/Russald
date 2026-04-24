import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center px-6 py-20 text-center">
      <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
        404
      </p>
      <div className="h-3" aria-hidden="true" />
      <h1 className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.75rem]">
        Page Not Found
      </h1>
      <div className="h-4" aria-hidden="true" />
      <p className="max-w-[420px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="h-8" aria-hidden="true" />
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
        >
          Go Home
        </Link>
        <Link
          href="/#eval-form"
          className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border-[1.5px] border-[var(--color-border)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-[var(--color-navy)] transition-colors hover:border-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
        >
          Free Assessment
        </Link>
      </div>
    </section>
  )
}
