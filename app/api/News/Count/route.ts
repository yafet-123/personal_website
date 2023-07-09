import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const GET = async () => {
  try {
    const counts = await prisma.news.count()
    return new Response(JSON.stringify(counts), { status: 200 });  
	} catch (error) {
    return new Response("Failed to fetch news Count", { status: 500 });
  }
};
