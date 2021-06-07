import { SiteClient } from "datocms-client";
import { NextApiResponse, NextApiRequest } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new SiteClient("bcfcad25ff57662470001b1055e599");

  await client.items.update(req.query.pid, {
    price: req.body.price,
  });

  res.end();
}

export default handler;
