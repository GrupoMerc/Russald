import { NextResponse } from 'next/server'
import { ZAPIER_WEBHOOK_STEP1, ZAPIER_WEBHOOK_STEP2, LEADS_ENABLED } from '@/lib/config'

export async function POST(request: Request) {
  const body = await request.json() as Record<string, unknown>
  const step = body.step as number

  if (!LEADS_ENABLED) {
    console.log(`[leads dry-run step ${step}]`, body)
    return NextResponse.json({ ok: true, dryRun: true })
  }

  const webhookUrl = step === 2 ? ZAPIER_WEBHOOK_STEP2 : ZAPIER_WEBHOOK_STEP1

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: `Webhook URL for step ${step} not configured` },
      { status: 500 }
    )
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 })
}
