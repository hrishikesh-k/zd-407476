import type { Config, Context } from '@netlify/functions'

export default async function(req: Request, context: Context) {
  const url = context.url.searchParams.get('url')
  const w = context.url.searchParams.get('w')

  if (!url || !w) {
    return new Response('Missing required parameters: url or w', {
      status: 400
    })
  }

  const imageUrl = new URL('/.netlify/images', req.url)
  imageUrl.searchParams.set('q', context.url.searchParams.get('q') || '75')
  imageUrl.searchParams.set('url', url)
  imageUrl.searchParams.set('w', w)

  return await fetch(imageUrl, {
    headers: {
      'accept': req.headers.get('accept') || '*/*',
      'x-nf-waf-bypass-token': req.headers.get('x-nf-waf-bypass-token') || ''
    }
  })
}

export const config: Config = {
  path: '/_next/image'
}