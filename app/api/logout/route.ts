import { cookies } from 'next/headers'

export async function GET() {
  await (await cookies()).delete('workshop_auth')

  return Response.json({ isAuthenticated: false })
}
