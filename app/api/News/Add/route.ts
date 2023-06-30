import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const POST = async (request:NextApiRequest) => {
	const { title ,description ,link ,image, user_id } = await request.json();
    try {
    	const data = await prisma.news.create({
          data: {
            title,
            description,
            link,
            Image:image,
            user_id:Number(user_id),
          },
        });
        return new Response(JSON.stringify(data), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
