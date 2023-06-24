import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const GET = async (request, { params }) => {
  try {
    const data = await prisma.SelectedWorks.findUnique({
      where: {
        selectedWorks_id: Number(params.id),
      },
      include: {
        User: {
          select: {
            email: true,
          },
        },
      },
    });

    if (!data) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
