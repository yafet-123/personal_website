import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const exhibition = await prisma.Exhibition.findMany({
      orderBy: { exhibition_id: "asc" },
      include: {
        User: {
          select: {
            UserName: true,
          },
        },
      },
    });
    console.log(exhibition)
    const AllExhibition = exhibition.map((data) => ({
      exhibition_id: data.exhibition_id.toString(),
      title: data.title,
      description: data.description,
      date: data.date,
      Image:data.Image,
      type:data.type,
      view:data.view,
      place:data.place,
      CreatedDate: data.CreatedDate,
      ModifiedDate: data.ModifiedDate,
      UserName: data.User.UserName,
    }));
    console.log(exhibition)
    return new Response(JSON.stringify(exhibition), { status: 200 });  
	} catch (error) {
    return new Response("Failed to fetch all exhibitions", { status: 500 });
  }
};
