import { r as redirect } from "../../../chunks/index.js";
import "../../../chunks/database.js";
const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, "/login");
  }
  return {
    user: locals.user
  };
};
export {
  load
};
