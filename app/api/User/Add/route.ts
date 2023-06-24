import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db.server";
 
export const POST = async (req: NextApiRequest) => {
  const { UserName, email } = await req.json();
  try {
    console.log(email);
    console.log(UserName);
    const data = await prisma.user.create({
      data: {
        UserName: UserName,
        email: email,
      },
    });
    console.log("data");

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new User", { status: 500 });
  }
};
