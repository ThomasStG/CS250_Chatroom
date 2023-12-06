import { r as redirect, f as fail } from "../../../../chunks/index.js";
import bcrypt from "bcrypt";
import { d as db } from "../../../../chunks/database.js";
const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/");
  }
};
const register = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email");
    const username = data.get("username");
    const password = data.get("password");
    const passwordConfirmation = data.get("password-confirmation");
    console.log(data);
    if (typeof email !== "string" || typeof username !== "string" || !username || typeof password !== "string" || !email || !password) {
      return fail(400, {
        error: { message: "email and password are required." }
      });
    }
    if (password !== passwordConfirmation) {
      return fail(400, {
        error: { message: "Password confirmation doesn't match." }
      });
    }
    const user = await db.user.findUnique({ where: { email } });
    if (user) {
      return fail(400, { error: { message: "email already exists." } });
    }
    await db.user.create({
      data: {
        email,
        username,
        passwordHash: await bcrypt.hash(password, 10),
        userAuthToken: crypto.randomUUID()
      }
    });
  } catch (err) {
    console.error(err);
    return fail(500, {
      error: {
        message: "There was an issue with registering. That username may be taken."
      }
    });
  }
  throw redirect(303, "/login");
};
const actions = { register };
export {
  actions,
  load
};
