import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const GET = async (request, { params }) => {
  try {
    const data = await prisma.Exhibition.findUnique({
      where: {
        exhibition_id: Number(params.exhibitionId),
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
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { title ,descreption ,date } = await request.json();

  try {
    const existingExhibitions = await prisma.Exhibition.findUnique({
      where: {
        exhibition_id: Number(params.exhibitionId),
      },
    });

    if (!existingExhibitions) {
      return new Response("Exhibition not found", { status: 404 });
    }

    // Update the prompt with new data
    const data = await prisma.Exhibition.update({
      where: { exhibition_id: Number(params.exhibitionId) },
      data: {
        title,
        description:descreption,
        date,
        type
      },
    });

    return new Response("Successfully updated the Exhibition", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Exhibition", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const data = await prisma.Exhibition.delete({
      where: { exhibition_id: Number(params.exhibitionId) },
    });

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
