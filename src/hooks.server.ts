import type { Handle } from "@sveltejs/kit";
import db from "$lib/database";

export const handle: Handle = async ({ event, resolve }) => {
  // get cookies from browser
  const session = event.cookies.get("session");

  if (!session) {
    // if there is no session load page as normal
    return await resolve(event);
  }

  // find the user based on the session
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { id: true, email: true, lightTheme: true, },
  });

  // if `user` exists set `event.locals`
  if (user) {
    event.locals.user = {
      id: user.id, // Store the userId in locals
      email: user.email,
      lightTheme: user.lightTheme
    };
  }

  // load page as normal
  return await resolve(event);
};
