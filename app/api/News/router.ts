import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.news.findMany({
      orderBy: { news_id: "asc" },
      include: {
        User: {
          select: {
            UserName: true,
          },
        },
      },
    });
    const Allnews = data.map((data) => ({
      news_id: data.news_id.toString(),
      title: data.title,
      description: data.description,
      link: data.link,
      Image:data.Image,
      CreatedDate: data.CreatedDate,
      ModifiedDate: data.ModifiedDate,
      UserName: data.User.UserName,
    }));
    console.log(Allnews)
    return new Response(JSON.stringify(Allnews), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all news", { status: 500 });
  }
};
