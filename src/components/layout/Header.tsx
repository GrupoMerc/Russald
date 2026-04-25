// Figma node: 116:2 — Header Desktop · 2013:12 Tablet · 118:2 Mobile
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

const TRUST_ITEMS = [
  '🏥 Board-Certified Surgeons',
  '📍 Minutes from San Diego',
  '💰 60–75% Less than US Prices',
  '🌐 English-Speaking Team',
  '🔒 All Consultations Confidential',
] as const

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
      setScrolled(window.scrollY > 4)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'sticky top-0 z-50 w-full flex flex-col bg-[var(--color-white)] ' +
        'transition-shadow duration-200' +
        (scrolled ? ' shadow-[0_2px_16px_rgba(15,28,63,0.10)]' : '')
      }
    >
      {/*
       * Order differs between breakpoints (Figma 118:2 vs 116:2):
       *   Mobile:         Util-Bar → Progress Line → Nav
       *   Tablet/Desktop: Progress Line → Util-Bar → Trust-Bar → (Logo-Row lg) → Nav
       * Controlled via Tailwind `order-*` on a flex-col container.
       */}

      {/* 1 — Scroll Progress Line
            Mobile: order-2 (below Util-Bar)
            Tablet+: order-1 (above everything) */}
      <div
        aria-hidden="true"
        className="order-2 sm:order-1 relative h-[3px] w-full shrink-0 bg-[var(--color-border)]"
      >
        <div
          className="absolute inset-y-0 left-0 h-full"
          style={{
            width: `${scrollProgress}%`,
            backgroundImage:
              'linear-gradient(to right, var(--color-blue), var(--color-gold))',
          }}
        />
      </div>

      {/* 2 — Util-Bar
            Mobile: order-1 (first), text-[10px], px-4, h-[38px]
            Tablet+: order-2, text-[11.5px], px-6, h-[40px] */}
      <div
        className={
          'order-1 sm:order-2 flex items-center justify-between ' +
          'bg-[var(--color-navy)] ' +
          'px-4 sm:px-6 ' +
          'h-[38px] sm:h-[40px]'
        }
      >
        {/* Location text — truncated label on mobile */}
        <div
          className={
            'flex items-center font-["Nunito_Sans",sans-serif] leading-normal ' +
            'text-[0.625rem] sm:text-[0.71875rem]'
          }
        >
          <span className="text-white/55 whitespace-pre">{`📍 Tijuana, Mexico  ·  `}</span>
          <span className="text-white/90 font-bold hidden sm:inline">
            Minutes from San Diego
          </span>
          <span className="text-white/90 font-bold sm:hidden">San Diego</span>
        </div>

        {/* Free Assessment pill CTA */}
        <Link
          href="#eval-form"
          className={
            'flex items-center justify-center bg-[var(--color-blue)] ' +
            'text-[var(--color-white)] font-bold font-["Nunito_Sans",sans-serif] ' +
            'rounded-[20px] whitespace-nowrap min-h-[30px] ' +
            'px-3 text-[0.625rem] sm:px-[14px] sm:text-[0.71875rem] ' +
            'hover:bg-[var(--color-blue-action)] transition-colors duration-150 ' +
            'focus-visible:outline focus-visible:outline-[3px] ' +
            'focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]'
          }
          aria-label="Request a free medical assessment"
        >
          Free Assessment
        </Link>
      </div>

      {/* 3 — Trust-Bar — hidden on mobile (Figma 118:2 omits it) */}
      <div
        aria-label="Trust indicators"
        className={
          'order-3 hidden sm:flex items-center justify-center ' +
          'gap-3 lg:gap-7 ' +
          'bg-[var(--color-charcoal)] px-6 h-[29px] shrink-0'
        }
      >
        {TRUST_ITEMS.map((item) => (
          <span
            key={item}
            className={
              'font-["Nunito_Sans",sans-serif] font-normal ' +
              'text-[0.6875rem] text-white/70 whitespace-nowrap'
            }
          >
            {item}
          </span>
        ))}
      </div>

      {/* 4 — Logo-Row — desktop only; tablet/mobile logo lives inside Nav */}
      <div
        className={
          'order-4 hidden lg:flex items-center justify-between ' +
          'bg-[var(--color-white)] border-b border-[var(--color-border)] ' +
          'px-7 py-[14px] h-[68px] shrink-0'
        }
      >
        <Link
          href="/"
          aria-label="Russald Medical Center — home"
        >
          <Image
            src="/logo.webp"
            alt="Russald Medical Center"
            width={173}
            height={44}
            priority
          />
        </Link>

        <Link
          href="#eval-form"
          className={
            'flex items-center justify-center ' +
            'bg-[var(--color-blue-action)] text-[var(--color-white)] ' +
            'font-["Rethink_Sans",sans-serif] font-bold text-[0.8125rem] ' +
            'rounded-[var(--radius-btn)] px-[22px] min-h-[48px] ' +
            'hover:bg-[var(--color-blue)] transition-colors duration-150 whitespace-nowrap ' +
            'focus-visible:outline focus-visible:outline-[3px] ' +
            'focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]'
          }
        >
          Book Consultation →
        </Link>
      </div>

      {/* 5 — Nav (desktop: inline links · tablet/mobile: hamburger + logo)
              Uncomment import and replace placeholder once Nav.tsx is created */}
      <div className="order-5">
        <Nav />
      </div>
    </header>
  )
}
