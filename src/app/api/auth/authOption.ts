import githubAuth from "next-auth/providers/github";
import { Session, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend type Session jika diperlukan
interface CustomSession extends Session {
  user?: DefaultSession["user"]
}

export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.NEXT_SECRET_GITHUB_CLIENT!,
      clientSecret: process.env.NEXT_SECRET_GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async session({ 
      session, 
      token 
    }: { 
      session: CustomSession; 
      token: JWT;
    }): Promise<CustomSession> {
      if (session.user?.image) {
        session.user.image = `${session.user.image}?t=${Date.now()}`;
      }
      return session;
    }
  }
};