// Figma node: 2143:414 — Overlay/Float-CTA · 2216:550 Tablet · 2144:385 Mobile
'use client'

import { useState } from 'react'

export default function WlsFloatCta() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-50 w-[320px] bg-[var(--color-white)] rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2),0px_8px_32px_0px_rgba(29,86,196,0.4)] px-4 py-[14px] flex flex-col gap-2.5"
      role="complementary"
      aria-label="Free evaluation offer"
    >
      {/* dismiss */}
      <div className="flex justify-end">
        <button
          onClick={() => setDismissed(true)}
          className="font-['Nunito_Sans',sans-serif] font-normal text-[0.6875rem] text-[var(--color-muted)]/80 hover:text-[var(--color-muted)] transition-colors min-h-[48px] min-w-[48px] flex items-center justify-end focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
          aria-label="Dismiss this offer"
        >
          Not now
        </button>
      </div>

      {/* CTA button */}
      <a
        href="#eval-form"
        onClick={() => setDismissed(true)}
        className="flex items-center gap-3 px-4 py-[14px] rounded-[10px] shadow-[0px_4px_12px_0px_rgba(29,86,196,0.3)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
        style={{
          backgroundImage: 'linear-gradient(to right, #0a9882, #1d56c4)',
        }}
        aria-label="Request free evaluation — no commitment, English-speaking team"
      >
        {/* pulse dot */}
        <span
          className="shrink-0 w-2.5 h-2.5 rounded-full bg-white/90 animate-pulse"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="font-['Rethink_Sans',sans-serif] font-bold text-white text-[0.875rem] leading-[1.125rem]">
            Request Free Evaluation
          </span>
          <span className="font-['Nunito_Sans',sans-serif] font-normal text-white/75 text-[0.6875rem] leading-[0.9375rem]">
            No commitment · English team
          </span>
        </div>
      </a>
    </div>
  )
}
