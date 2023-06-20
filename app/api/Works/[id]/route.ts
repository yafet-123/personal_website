import Works from "@/models/works";
import { connectToDB } from "@/utils/database";
 
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const individualwork = await Works.findById(params.id).populate("_id")
        if (!individualwork) return new Response("Works Not Found", { status: 404 });
        const formattedWorks = individualwork.map((work) => {
            return {
                ...work.toObject(),
                _id: work._id.toString()
            };
        });

        res.status(200).json(formattedWorks);

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}