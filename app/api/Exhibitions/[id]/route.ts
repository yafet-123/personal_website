import exhibition from "@/models/exhibition";
import { connectToDB } from "@/utils/database";
 
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const individualexhibition = await exhibition.findById(params.id).populate("_id")
        if (!individualexhibition) return new Response("exhibition Not Found", { status: 404 });

        return new Response(JSON.stringify(individualexhibition), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}