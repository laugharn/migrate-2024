'use server'

import { cookies } from 'next/headers'

export async function login() {
  await (
    await cookies()
  ).set('workshop_auth', 'true', {
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 3600, // 1 hour
    path: '/',
  })

  return { isAuthenticated: true }
}

export async function logout() {
  await (await cookies()).delete('workshop_auth')

  return { isAuthenticated: false }
}
