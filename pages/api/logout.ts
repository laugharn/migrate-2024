import type { NextApiRequest, NextApiResponse } from 'next'
import { serializeCookie } from '@/lib/cookie'

type Data = {
  isAuthenticated: boolean
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.setHeader(
    'Set-Cookie',
    serializeCookie('workshop_auth', 'true', {
      // httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: -1,
      path: '/',
    }),
  )

  res.status(200).json({ isAuthenticated: false })
}

export default handler
