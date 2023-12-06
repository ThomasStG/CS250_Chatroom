import { d as db } from "../../../../../chunks/database.js";
import { f as fail } from "../../../../../chunks/index.js";
const load = async ({ request, cookies }) => {
  const foundUserCookie = cookies.get("foundUser");
  return {
    foundUserCookie
  };
};
const actions = {
  findUser: async ({ request, cookies }) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const { userName } = formData;
      const foundUser = await db.user.findUnique({
        where: {
          username: String(userName)
        }
      });
      console.log(foundUser);
      if (!foundUser) {
        return fail(404, { error: { message: "User not found" } });
      }
      if (foundUser) {
        cookies.set("foundUser", JSON.stringify(foundUser));
      }
      return {
        body: {
          foundUser
        }
      };
    } catch (err) {
      console.error(err);
      return fail(500, {
        error: { message: "Internal Server Error: finding user" }
      });
    }
  }
};
export {
  actions,
  load
};
