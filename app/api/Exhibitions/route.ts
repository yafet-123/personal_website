import exhibition from "@/models/exhibition";
import { connectToDB } from "@/utils/database";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectToDB()

        const exhibitions = await exhibition.find({}).populate('_id')
        const formattedexhibition = exhibitions.map((exhibition) => {
            return {
                ...exhibition.toObject(),
                _id: exhibition._id.toString()
            };
        });
        res.status(200).json(formattedexhibition);
    } catch (error) {
        return new Response("Failed to fetch all exhibitions", { status: 500 })
    }
} 