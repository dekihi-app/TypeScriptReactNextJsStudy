// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

type HelloResponse = {
  name: string;
};

// /api/helloで呼ばれた時のAPIの挙動を実装する
const handler = (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  // ステータス200で{"name": "John Doe"}を返す
  res.status(200).json({ name: 'John Doe' });
};

export default handler;
