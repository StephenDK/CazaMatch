import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful sign in:
    async signIn({ profile }) {
      // 1. Connect to database
      // 2. Check if the user exists
      // 3. If not, create the user
      // 4. Return true to allow sign in
    },
    // Session callback function that modify the session object
    async session({ session }) {
      // 1. Get the user from the database
      // 2. Assign user id from the session
      // 3. Return session
    },
  },
};
