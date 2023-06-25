import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const works = await prisma.SelectedWorks.findMany({
      orderBy: { ModifiedDate: "desc" },
      include: {
        User: {
          select: {
            email: true,
          },
        },
      },
    });
    const Allworks = works.map((data) => ({
      selectedWorks_id: data.selectedWorks_id,
      title: data.title,
      description: data.description,
      exhibitions: data.exhibitions,
      Image:data.Image,
      CreatedDate: data.CreatedDate,
      ModifiedDate: data.ModifiedDate,
      UserName: data.User.UserName,
    }));
    
    return new Response(JSON.stringify(works), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all works", { status: 500 });
  }
};
