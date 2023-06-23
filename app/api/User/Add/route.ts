import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (request: NextApiRequest) => {
  const { UserName, email } = await request.json();
  try {
    await connectToDB();
    const newUser = new User({ username:UserName, email });
    console.log(newUser)
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new User", { status: 500 });
  }
};
