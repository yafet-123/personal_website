import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/df7hlpjcj";
const folderName = "Portfolio";
const apiKey = process.env.CLOUDAPIKEY;
const apiSecret = process.env.CLOUDINARYSECRET;
const cloudinaryAuth = {
  username: apiKey,
  password: apiSecret,
};

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      `${cloudinaryUrl}/resources/image/upload`,
      {
        auth: cloudinaryAuth,
        params: {
          prefix: folderName,
          type: "upload",
        },
      }
    );

    const retrievedImages = response.data.resources;
    return new Response(JSON.stringify(retrievedImages), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
