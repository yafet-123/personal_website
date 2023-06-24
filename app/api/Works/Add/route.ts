import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const POST = async (request:NextApiRequest) => {
	const { title, exhibitions, image,description, user_id  } = await request.json();
    try {
        const data = await prisma.SelectedWorks.create({
          data: {
            title,
            exhibitions,
            Image:image,
            description,
            user_id:Number(user_id),
          },
        });
        return new Response(JSON.stringify(data), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
