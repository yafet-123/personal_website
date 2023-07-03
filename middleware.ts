import { withAuth } from "next-auth/middleware"

export default withAuth(
  async function middleware(req) {
    console.log(req.nextauth.user) // Access the user object

    const userId = req.nextauth.user?.id
    if (userId) {
      const user = await prisma.user.findUnique({
        where: { user_id: userId },
      })
      console.log(user) // Access specific user properties
    }
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
)

export const config = { matcher: ["/Admin"] }