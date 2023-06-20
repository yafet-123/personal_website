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
        res.status(200).json(formattedWorks);
    } catch (error) {
        return new Response("Failed to fetch all works", { status: 500 })
    }
} 