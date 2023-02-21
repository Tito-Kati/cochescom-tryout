import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: string
}

export default function handler(request: NextApiRequest, response: NextApiResponse<Data>) {
  response.status(200)
    .json({ status: 'Ok!' })
}
