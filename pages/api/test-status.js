import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Handle test status updates
    res.status(200).json({ status: 'success' });
  } else {
    res.status(405).end();
  }
}
