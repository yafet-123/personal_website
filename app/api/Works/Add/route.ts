import Works from "@/models/works";
import { connectToDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (request:NextApiRequest) => {

	const { title, exhibitions, image,description, user_id  } = await request.json();
    try {
        await connectToDB();
    	const newWork = new Works({ title, exhibitions, descreption:description, image, creator:user_id });
    	console.log(newWork)
    	await newWork.save();
        return new Response(JSON.stringify(newWork), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
