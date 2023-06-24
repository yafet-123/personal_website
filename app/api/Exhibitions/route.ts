import exhibition from "@/models/exhibition";
import { connectToDB } from "@/utils/database";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDB();

    const exhibitions = await exhibition.find({}).populate("_id");

    return new Response(JSON.stringify(exhibitions), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all exhibitions", { status: 500 });
  }
};
