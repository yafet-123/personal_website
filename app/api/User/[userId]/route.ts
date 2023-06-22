import User from "@/models/user";
import { connectToDB } from "@/utils/database";
 
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const individualuser = await User.findById(params.id).populate("_id")
        if (!individualuser) return new Response("User Not Found", { status: 404 });
        return new Response(JSON.stringify(individualuser), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
  const { UserName, email } = await request.json();

  try {
    await connectToDB();
    // Find the existing user by ID
    const existingUser = await User.findById(params.id);

    if (!existingUser) {
        return new Response("User not found", { status: 404 });
    }

        // Update the prompt with new data
    existingUser.UserName = UserName;
    existingUser.email = email;

    await existingUser.save();

    return new Response("Successfully updated the User", { status: 200 });
  } catch (error) {
    return new Response("Error Updating User", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const data = await prisma.User.delete({
      where: { user_id: Number(params.userId) },
    });

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
