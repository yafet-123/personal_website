import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const GET = async (request, { params }) => {
  try {
    const data = await prisma.Exhibition.findUnique({
      where: {
        exhibition_id: Number(params.id),
      },
      include: {
        User: {
          select: {
            email: true,
          },
        },
      },
    });
    console.log(data)
    
    if (!data) return new Response("Prompt Not Found", { status: 404 });
    // const oneExhibitionData = {
    //   exhibition_id: data.exhibition_id.toString(),
    //   title: data.title,
    //   description: data.description,
    //   date: data.date,
    //   Image:data.Image,
    //   type:data.type,
    //   view:data.view,
    //   CreatedDate: data.CreatedDate,
    //   ModifiedDate: data.ModifiedDate,
    //   UserName: data.User.UserName,
    // };
    // console.log(oneExhibitionData)
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
