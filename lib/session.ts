import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
  counter: number;
}

const sessionOptions: SessionOptions = {
  password: process.env.COOKIE_PASSWORD!,
  cookieName: "session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default async function getSession() {
  const cookiesStore = await cookies();
  // const session = await getIronSession<SessionContent>(await cookies(), {
  //   cookieName: "delicious-karrot",
  //   password: process.env.COOKIE_PASSWORD!,
  // });
  const session = await getIronSession<SessionContent>(
    cookiesStore,
    sessionOptions
  );
  return session;
}

// export const getServerActionSession = async () => {
//   const session = await getIronSession<SessionData>(cookies(), sessionOptions)
//   return session
// }
