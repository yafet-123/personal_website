import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

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
    const AllExhibition = exhibition.map((data) => ({
      exhibition_id: data.exhibition_id.toString(),
      title: data.title,
      description: data.description,
      date: data.date,
      Image:data.Image,
      CreatedDate: data.CreatedDate,
      ModifiedDate: data.ModifiedDate,
      UserName: data.User.UserName,
    }));
    
    return new Response(JSON.stringify(AllExhibition), { status: 200 });  
	} catch (error) {
    return new Response("Failed to fetch all exhibitions", { status: 500 });
  }
};
