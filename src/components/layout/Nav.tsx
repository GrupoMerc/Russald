// Figma node: 2006:2 — Navigation Desktop · 2013:6 Tablet · 2006:3 Mobile
'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Weight Loss', href: '/weight-loss' },
  { label: 'Plastic Surgery', href: '/plastic-surgery' },
  { label: 'Orthopedics', href: '/orthopedics' },
  { label: 'Hair Restoration', href: '/hair-restoration' },
  { label: 'Bio Optimization', href: '/bio-optimization' },
  { label: "Men's Health", href: '/mens-health' },
  { label: 'Our Patients', href: '/our-patients' },
  { label: 'Patient Resources', href: '/patient-resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Our Facilities', href: '/our-facilities' },
] as const

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [close])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav aria-label="Main navigation">

      {/* ── Desktop (lg+): horizontal link bar — centered per Figma 2006:2 ── */}
      <div className="hidden lg:flex items-center justify-center w-full bg-[var(--color-white)] border-b border-[var(--color-border)]">
        {NAV_LINKS.map(({ label, href }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={[
                'flex items-center min-h-[48px] px-[0.9375rem] shrink-0 whitespace-nowrap',
                'font-["Nunito_Sans",sans-serif] font-bold text-[0.78125rem] leading-4',
                'border-b-2 transition-colors duration-150',
                'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
                active
                  ? 'text-[var(--color-blue)] border-[var(--color-blue)]'
                  : 'text-[var(--color-muted)] border-transparent hover:text-[var(--color-blue)]',
              ].join(' ')}
            >
              {label}
            </Link>
          )
        })}
      </div>

      {/* ── Mobile / Tablet (< lg): logo + hamburger bar ── */}
      <div className="flex lg:hidden items-center justify-between bg-[var(--color-white)] border-b border-[var(--color-border)] px-5 py-[0.875rem]">
        <Link
          href="/"
          onClick={close}
          aria-label="Russald Medical Center — home"
          className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Russald Medical Center" width={130} height={33} fetchPriority="high" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex flex-col justify-center items-center gap-[5px] min-h-[48px] min-w-[48px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
        >
          {/* Bar 1 — rotates to form top arm of X */}
          <span
            aria-hidden="true"
            className="block bg-[var(--color-navy)] h-[2px] w-[22px] rounded-[2px] origin-center transition-transform duration-200"
            style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}
          />
          {/* Bar 2 — fades out */}
          <span
            aria-hidden="true"
            className="block bg-[var(--color-navy)] h-[2px] w-[22px] rounded-[2px] transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          {/* Bar 3 — rotates to form bottom arm of X */}
          <span
            aria-hidden="true"
            className="block bg-[var(--color-navy)] h-[2px] w-[22px] rounded-[2px] origin-center transition-transform duration-200"
            style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {open && (
        <div
          id="nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="lg:hidden fixed inset-0 z-[800] flex flex-col bg-[var(--color-white)]"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-[0.875rem] border-b border-[var(--color-border)] shrink-0">
            <Link
              href="/"
              onClick={close}
              aria-label="Russald Medical Center — home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Russald Medical Center" width={130} height={33} />
            </Link>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="flex flex-col justify-center items-center gap-[5px] min-h-[48px] min-w-[48px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              <span aria-hidden="true" className="block bg-[var(--color-navy)] h-[2px] w-[22px] rounded-[2px] origin-center rotate-45 translate-y-[3.5px]" />
              <span aria-hidden="true" className="block bg-[var(--color-navy)] h-[2px] w-[22px] rounded-[2px] origin-center -rotate-45 -translate-y-[3.5px]" />
            </button>
          </div>

          {/* Links list */}
          <ul className="flex flex-col overflow-y-auto flex-1 py-1" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'flex items-center w-full px-6 min-h-[48px]',
                      'font-["Nunito_Sans",sans-serif] font-bold text-[0.9375rem] leading-5',
                      'border-b border-[var(--color-border)]',
                      'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
                      active
                        ? 'text-[var(--color-blue)]'
                        : 'text-[var(--color-charcoal)] hover:text-[var(--color-blue)]',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Drawer CTA */}
          <div className="px-6 py-5 border-t border-[var(--color-border)] shrink-0">
            <Link
              href="#eval-form"
              onClick={close}
              className={[
                'flex items-center justify-center w-full min-h-[48px]',
                'bg-[var(--color-blue-action)] text-[var(--color-white)]',
                'font-["Rethink_Sans",sans-serif] font-bold text-[0.9375rem]',
                'rounded-[var(--radius-btn)]',
                'hover:bg-[var(--color-blue)] transition-colors duration-150',
                'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
              ].join(' ')}
            >
              Book Consultation →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
