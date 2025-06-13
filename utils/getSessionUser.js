import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export const getSessionUser = async () => {
  // Get the session passing in auth options
  const session = await getServerSession(authOptions);
  // Check session and check session user
  // Return null is no session or no session user
  if (!session || !session.user) {
    return null;
  }
  // Otherwise, return session user and user id
  return {
    user: session.user,
    userId: session.user.id,
  };
};
