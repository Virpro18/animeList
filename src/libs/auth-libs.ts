import { authOption } from "@/app/api/auth/authOption";
import { getServerSession } from "next-auth";

export const authUserSession = async () => {
  const sessions = await getServerSession(authOption);
  return sessions?.user;
};
