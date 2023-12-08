import { d as db } from "../../../../../chunks/database.js";
import "dns";
import { j as json } from "../../../../../chunks/index.js";
async function POST({ request }) {
  const { username } = await request.json();
  const user = await db.user.findUnique({
    where: { username }
  });
  return json({ user }, { status: 201 });
}
export {
  POST
};
