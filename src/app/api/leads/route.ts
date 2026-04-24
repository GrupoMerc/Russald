import { NextResponse } from 'next/server'
import { ZAPIER_WEBHOOK_URL, LEADS_ENABLED } from '@/lib/config'

export async function POST(request: Request) {
  const body = await request.json() as Record<string, unknown>

  if (!LEADS_ENABLED) {
    console.log('[leads dry-run]', body)
    return NextResponse.json({ ok: true, dryRun: true })
  }

  if (!ZAPIER_WEBHOOK_URL) {
    return NextResponse.json(
      { ok: false, error: 'Webhook URL not configured' },
      { status: 500 }
    )
  }

  const res = await fetch(ZAPIER_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 })
}
