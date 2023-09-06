import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  // we only use this endpoint for the api
  // and don't need to see the page

  if (!cookies.get("session")) {
    throw redirect(302, "/");
  }

  // eat the cookie
  cookies.set("session", "", {
    path: "/",
    expires: new Date(0),
  });

  // redirect the user
  throw redirect(302, "/login");
};
