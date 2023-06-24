import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";

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
    res.json(Allusers);
  } catch (error) {
    res.json({ error: "Failed to fetch all users" });
  }
};
