import Works from "@/models/works";
import { connectToDB } from "@/utils/database";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDB();

    const works = await Works.find({}).populate("_id");
    console.log(works);
    return new Response(JSON.stringify(works), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all works", { status: 500 });
  }
};
