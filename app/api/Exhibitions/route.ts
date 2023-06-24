import exhibition from "@/models/exhibition";
import { connectToDB } from "@/utils/database";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDB();

    const exhibitions = await exhibition.find({}).populate("_id");
    const formattedexhibition = exhibitions.map((exhibition) => {
      return {
        ...exhibition.toObject(),
        _id: exhibition._id.toString(),
      };
    });
    return new Response(JSON.stringify(formattedexhibition), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all exhibitions", { status: 500 });
  }
};
