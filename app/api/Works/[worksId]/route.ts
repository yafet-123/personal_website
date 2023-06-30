import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const GET = async (request, { params }) => {
  try {
    const data = await prisma.SelectedWorks.findUnique({
      where: {
        selectedWorks_id: Number(params.worksId),
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

export const PATCH = async (request, { params }) => {
  const { title, description } = await request.json();

  try {
    const existingWork = await prisma.SelectedWorks.findUnique({
      where: {
        selectedWorks_id: Number(params.worksId),
      },
    });

    if (!existingWork) {
      return new Response("Work not found", { status: 404 });
    }

    // Update the prompt with new data
    const data = await prisma.SelectedWorks.update({
      where: { selectedWorks_id: Number(params.worksId) },
      data: {
        title,
        description,
      },
    });

    return new Response("Successfully updated the Work", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Work", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const data = await prisma.SelectedWorks.delete({
      where: { selectedWorks_id: Number(params.worksId) },
    });

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
