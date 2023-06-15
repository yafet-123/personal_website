import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const cloudName = process.env.CLOUDNAME;
  const apiKey = process.env.CLOUDAPIKEY;
  const apiSecret = process.env.CLOUDINARYSECRET;
  const url = process.env.CLOUDINARYURL;
  try {
    const imageUpload = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.cloudName}/image/upload/my_upload`,
    ).then((r) => r.json())
    console.log(imageUpload)
    return new Response(JSON.stringify(Allcourses), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
