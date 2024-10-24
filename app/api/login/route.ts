import { cookies } from 'next/headers'

export async function GET() {
  await (
    await cookies()
  ).set('workshop_auth', 'true', {
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 3600, // 1 hour
    path: '/',
  })
  return Response.json({ isAuthenticated: true })
}
