// Figma node: 2006:2 — Navigation Desktop · 2013:6 Tablet · 2006:3 Mobile
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavChild = { label: string; href: string }
type NavItem  = { label: string; href: string; children?: NavChild[] }

const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Weight Loss',
    href:  '/weight-loss',
    children: [
      { label: 'Gastric Sleeve',     href: '/weight-loss/gastric-sleeve'      },
      { label: 'Gastric Bypass',     href: '/weight-loss/gastric-bypass'      },
      { label: 'Mini Gastric Bypass', href: '/weight-loss/mini-gastric-bypass' },
      { label: 'Lap-Band',           href: '/weight-loss/lap-band'            },
      { label: 'Bariatric Revision', href: '/weight-loss/bariatric-revision'  },
    ],
  },
  {
    label: 'Plastic Surgery',
    href:  '/plastic-surgery',
    children: [
      { label: 'Rhinoplasty',         href: '/plastic-surgery/rhinoplasty'         },
      { label: 'Facelift',            href: '/plastic-surgery/facelift'            },
      { label: 'Blepharoplasty',      href: '/plastic-surgery/blepharoplasty'      },
      { label: 'Breast Augmentation', href: '/plastic-surgery/breast-augmentation' },
      { label: 'Breast Reduction',    href: '/plastic-surgery/breast-reduction'    },
      { label: 'Liposuction',         href: '/plastic-surgery/liposuction'         },
      { label: 'Tummy Tuck',          href: '/plastic-surgery/tummy-tuck'          },
      { label: 'Brazilian Butt Lift', href: '/plastic-surgery/bbl'                 },
      { label: 'Mommy Makeover',      href: '/plastic-surgery/mommy-makeover'      },
    ],
  },
  { label: 'Orthopedics', href: '/orthopedics' },
  {
    label: 'Hair Restoration',
    href:  '/hair-restoration',
    children: [
      { label: 'FUE Hair Transplant', href: '/hair-restoration/fue' },
      { label: 'DHI Hair Transplant', href: '/hair-restoration/dhi' },
      { label: 'PRP Hair Treatment',  href: '/hair-restoration/prp' },
    ],
  },
  {
    label: 'Bio Optimization',
    href:  '/bio-optimization',
    children: [
      { label: 'HGH Therapy',          href: '/bio-optimization/hgh'            },
      { label: 'BHRT',                 href: '/bio-optimization/bhrt'           },
      { label: 'Testosterone (TRT)',   href: '/bio-optimization/trt'            },
      { label: 'Myers Cocktail IV',    href: '/bio-optimization/myers-cocktail' },
      { label: 'NAD IV Therapy',       href: '/bio-optimization/nad-iv'         },
      { label: 'PRP Therapy',          href: '/bio-optimization/prp'            },
    ],
  },
  {
    label: "Men's Health",
    href:  '/mens-health',
    children: [
      { label: 'Male Enhancement Implant',    href: '/mens-health/implant'              },
      { label: 'Erectile Dysfunction',        href: '/mens-health/erectile-dysfunction' },
      { label: 'Testosterone Therapy (TRT)',  href: '/mens-health/testosterone'         },
      { label: 'P-Shot (Priapus Shot)',       href: '/mens-health/p-shot'              },
    ],
  },
  {
    label: 'Vascular Care',
    href:  '/vascular-care',
    children: [
      { label: 'EVLA (Varicose Veins)', href: '/vascular-care/evla'          },
      { label: 'Sclerotherapy',         href: '/vascular-care/sclerotherapy' },
    ],
  },
  { label: 'Our Patients',      href: '/our-patients'      },
  { label: 'Patient Resources', href: '/patient-resources' },
  { label: 'FAQ',               href: '/faq'               },
  { label: 'Our Facilities',    href: '/our-facilities'    },
]

// Small chevron SVG — no external icon dependency
function Chevron({ className }: { className?: string }) {
  return (
    <svg
      width="10" height="6" viewBox="0 0 10 6"
      fill="none" aria-hidden="true"
      className={className}
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Nav() {
  const pathname  = usePathname()
  const [open, setOpen]         = useState(false)
  const [openItem, setOpenItem] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    setOpenItem(null)
  }, [])

  // Close drawer on route change
  useEffect(() => { close() }, [pathname, close])

  // Keyboard: Escape closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [close])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav aria-label="Main navigation" ref={navRef}>

      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:flex items-center justify-center w-full bg-[var(--color-white)] border-b border-[var(--color-border)]">
        {NAV_LINKS.map((item) => {
          const active = isActive(item.href)

          if (!item.children) {
            return (
              <Link
                key={item.href}
                href={item.href}
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
                {item.label}
              </Link>
            )
          }

          // Item with dropdown
          return (
            <div key={item.href} className="relative group self-stretch flex items-stretch">
              {/* Main label — navigates to specialty page */}
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                aria-haspopup="true"
                className={[
                  'flex items-center gap-1 min-h-[48px] px-[0.9375rem] shrink-0 whitespace-nowrap',
                  'font-["Nunito_Sans",sans-serif] font-bold text-[0.78125rem] leading-4',
                  'border-b-2 transition-colors duration-150',
                  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
                  active
                    ? 'text-[var(--color-blue)] border-[var(--color-blue)]'
                    : 'text-[var(--color-muted)] border-transparent hover:text-[var(--color-blue)]',
                ].join(' ')}
              >
                {item.label}
                <Chevron className="transition-transform duration-150 group-hover:rotate-180 shrink-0" />
              </Link>

              {/* Dropdown panel */}
              <div
                role="menu"
                className={[
                  'absolute top-full left-0 z-[900]',
                  'min-w-[220px] bg-[var(--color-white)]',
                  'border border-[var(--color-border)] rounded-b-[8px]',
                  'shadow-[0_8px_24px_rgba(15,28,63,0.10)]',
                  'pointer-events-none opacity-0 translate-y-[-4px]',
                  'group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0',
                  'group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0',
                  'transition-all duration-150',
                  'py-1',
                ].join(' ')}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    className={[
                      'flex items-center px-4 min-h-[40px]',
                      'font-["Nunito_Sans",sans-serif] font-semibold text-[0.75rem] whitespace-nowrap',
                      'transition-colors duration-100',
                      'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-blue-action)]',
                      pathname === child.href
                        ? 'text-[var(--color-blue)] bg-[var(--color-ice)]'
                        : 'text-[var(--color-charcoal)] hover:text-[var(--color-blue)] hover:bg-[var(--color-ice)]',
                    ].join(' ')}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Mobile / Tablet (< lg): hamburger bar ── */}
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
          <span aria-hidden="true" className="block bg-[var(--color-navy)] h-[2px] w-[22px] rounded-[2px] origin-center transition-transform duration-200" style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span aria-hidden="true" className="block bg-[var(--color-navy)] h-[2px] w-[22px] rounded-[2px] transition-opacity duration-200" style={{ opacity: open ? 0 : 1 }} />
          <span aria-hidden="true" className="block bg-[var(--color-navy)] h-[2px] w-[22px] rounded-[2px] origin-center transition-transform duration-200" style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
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
            <Link href="/" onClick={close} aria-label="Russald Medical Center — home">
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
            {NAV_LINKS.map((item) => {
              const active      = isActive(item.href)
              const isExpanded  = openItem === item.href

              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? 'page' : undefined}
                      className={[
                        'flex items-center w-full px-6 min-h-[48px]',
                        'font-["Nunito_Sans",sans-serif] font-bold text-[0.9375rem] leading-5',
                        'border-b border-[var(--color-border)]',
                        'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
                        active ? 'text-[var(--color-blue)]' : 'text-[var(--color-charcoal)] hover:text-[var(--color-blue)]',
                      ].join(' ')}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }

              // Item with accordion
              return (
                <li key={item.href} className="border-b border-[var(--color-border)]">
                  <div className="flex items-stretch">
                    {/* Label — navigates to specialty page */}
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? 'page' : undefined}
                      className={[
                        'flex items-center flex-1 px-6 min-h-[48px]',
                        'font-["Nunito_Sans",sans-serif] font-bold text-[0.9375rem] leading-5',
                        'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
                        active ? 'text-[var(--color-blue)]' : 'text-[var(--color-charcoal)] hover:text-[var(--color-blue)]',
                      ].join(' ')}
                    >
                      {item.label}
                    </Link>

                    {/* Accordion toggle */}
                    <button
                      type="button"
                      onClick={() => setOpenItem(isExpanded ? null : item.href)}
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                      className="flex items-center justify-center min-h-[48px] min-w-[48px] text-[var(--color-muted)] hover:text-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
                    >
                      <Chevron className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Sub-links */}
                  {isExpanded && (
                    <ul className="bg-[var(--color-ice)] border-t border-[var(--color-border)]" role="list">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className={[
                              'flex items-center w-full pl-10 pr-6 min-h-[44px]',
                              'font-["Nunito_Sans",sans-serif] font-semibold text-[0.8125rem]',
                              'border-b border-[var(--color-border)] last:border-b-0',
                              'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
                              pathname === child.href
                                ? 'text-[var(--color-blue)]'
                                : 'text-[var(--color-muted)] hover:text-[var(--color-blue)]',
                            ].join(' ')}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Drawer CTA */}
          <div className="px-6 py-5 border-t border-[var(--color-border)] shrink-0">
            <Link
              href="/free-evaluation"
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
