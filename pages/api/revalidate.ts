import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await res.revalidate(req.query.path as string)
    return res.json({ revalidated: true })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

export default handler
