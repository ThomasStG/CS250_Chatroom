import { d as db } from "../../../../../chunks/database.js";
import "../../../../../chunks/index.js";
async function POST({ request, locals, url }) {
  try {
    const rawData = await request.text();
    const data = JSON.parse(rawData);
    const { username } = data;
    const user = await db.user.findUnique({
      where: { username },
    });
    if (!user) {
      return { status: 404, body: { error: "User not found" } };
    }
    return { status: 200, body: user };
  } catch (error) {
    console.error(error);
    return { status: 500, body: { error: "Server error" } };
  }
}
export { POST };
