import Works from "@/models/works";
import { connectToDB } from "@/utils/database";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectToDB()

        const works = await Works.find({}).populate('_id')
        const formattedWorks = works.map((work) => {
            return {
                ...work.toObject(),
                _id: work._id.toString()
            };
        });
        console.log(formattedWorks)
        return new Response(JSON.stringify(formattedWorks), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all works", { status: 500 })
    }
} 