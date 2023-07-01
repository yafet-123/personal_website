import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";
import { NextResponse } from 'next/server';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await prisma.User.findMany({
      orderBy: { ModifiedDate: "desc" },
    });
    const Allusers = users.map((data) => ({
      user_id: data.user_id,
      email: data.email,
      CreatedDate: data.CreatedDate,
      ModifiedDate: data.ModifiedDate,
      UserName: data.UserName,
    }));
    console.log(Allusers)
    return NextResponse.json(users);
  } catch (error) {
    return new Response("Failed to fetch all users", { status: 500 });
  }
};
