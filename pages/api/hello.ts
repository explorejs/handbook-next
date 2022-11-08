// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getData } from '../../src/adapters/databaseCall'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const result = await getData()
  res.status(200).json({ data: result })
}


export default handler
