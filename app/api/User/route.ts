import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectToDB()

        const users = await User.find({}).populate('_id')
        console.log(users)
        return new Response(JSON.stringify(users), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all users", { status: 500 })
    }
} 