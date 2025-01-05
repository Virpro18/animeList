import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export const authUserSession = async () => {
  const sessions = await getServerSession(authOption);
  return sessions?.user;
};
