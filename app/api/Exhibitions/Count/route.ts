import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const counts = await prisma.Exhibition.count()
    return new Response(JSON.stringify(counts), { status: 200 });  
	} catch (error) {
    return new Response("Failed to fetch all exhibitions", { status: 500 });
  }
};
