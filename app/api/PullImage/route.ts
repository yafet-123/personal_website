import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const cloudName = process.env.CLOUDNAME;
  const apiKey = process.env.CLOUDAPIKEY;
  const apiSecret = process.env.CLOUDINARYSECRET;
  try {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload/Portfolio`; 


    const response = await axios.get(url, {
      auth: {
        username: apiKey,
        password: apiSecret
      }
    });
    const retrievedImages = response.data.resources;
    return new Response(JSON.stringify(retrievedImages), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
