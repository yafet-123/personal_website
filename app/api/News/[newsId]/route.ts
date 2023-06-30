import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

export const GET = async (request, { params }) => {
  try {
    const data = await prisma.news.findUnique({
      where: {
        news_id: Number(params.newsId),
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
  const { title ,description ,link } = await request.json();

  try {
    const existingnews = await prisma.news.findUnique({
      where: {
        news_id: Number(params.newsId),
      },
    });

    if (!existingnews) {
      return new Response("news not found", { status: 404 });
    }

    // Update the prompt with new data
    const data = await prisma.news.update({
      where: { news_id: Number(params.newsId) },
      data: {
        title,
        description,
        link,
      },
    });

    return new Response("Successfully updated the news", { status: 200 });
  } catch (error) {
    return new Response("Error Updating news", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const data = await prisma.news.delete({
      where: { news_id: Number(params.newsId) },
    });

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
