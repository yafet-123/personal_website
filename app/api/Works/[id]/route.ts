import Works from "@/models/works";
import { connectToDB } from "@/utils/database";
 
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const individualwork = await Works.findById(params.id).populate("_id")
        if (!individualwork) return new Response("Works Not Found", { status: 404 });
        return new Response(JSON.stringify(individualwork), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}