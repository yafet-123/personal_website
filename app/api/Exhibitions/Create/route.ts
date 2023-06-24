import exhibition from "@/models/exhibition";
import { connectToDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (request:NextApiRequest) => {
	const { title ,descreption ,image ,date } = await request.json();
    try {
        await connectToDB();
        const newexhibition = new exhibition({title ,descreption ,image ,date})

        await newexhibition.save();
        return new Response(JSON.stringify(newexhibition), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
