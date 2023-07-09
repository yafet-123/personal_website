import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const count = await prisma.Exhibition.findMany({
      include:{
         _count:{
          select:{
            exhibition_id:true
          }
        },
      }
    });
    return new Response(JSON.stringify(count), { status: 200 });  
	} catch (error) {
    return new Response("Failed to fetch all exhibitions", { status: 500 });
  }
};
