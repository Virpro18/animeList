import githubAuth from "next-auth/providers/github";

export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.NEXT_SECRET_GITHUB_CLIENT!,
      clientSecret: process.env.NEXT_SECRET_GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
};

