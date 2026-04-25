// Server Component — never add 'use client'
// Escapa "<" para prevenir XSS en bloques JSON-LD (recomendación Next.js docs)
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
