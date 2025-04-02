// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  destinations: {
    id: number;
    name: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ destinations:[
    { id: 1, name: "Paris, France" },
    { id: 2, name: "Tokyo, Japan" },
    { id: 3, name: "New York, USA" },
  ] });
}
