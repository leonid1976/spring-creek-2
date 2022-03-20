// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string,
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ message: 'Thank you for your message. It has been sent.', status: 'success' })
  // res.writeHead(302, { Location: '/thank-you' }).end()
  // res.redirect(307, '/thank-you');
  // res.writeHead(302, {
  //   Location: "/thank-you"
  // });

}
