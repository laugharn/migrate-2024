import type { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  const tags = request.nextUrl.searchParams.get('tags')
  if (!tags) {
    return new Response('Unprocessable Entity', { status: 422 })
  }
  tags.split(',').forEach((tag) => {
    revalidateTag(tag)
  })
  return Response.json({ now: Date.now(), revalidated: true })
}
