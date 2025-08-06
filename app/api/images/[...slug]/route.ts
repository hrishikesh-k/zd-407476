import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  return await fetch(
    new URL(req.url.replace('/api/images', '/images'), req.url),
    {
      headers: {
        'x-nf-waf-bypass-token': req.headers.get('x-nf-waf-bypass-token') || '',
      }
    }
  )
}
