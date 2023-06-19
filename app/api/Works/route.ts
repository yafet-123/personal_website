import Works from "@/models/works";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const works = await Works.find({}).populate('_id')

        return new Response(JSON.stringify(works), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all works", { status: 500 })
    }
} 