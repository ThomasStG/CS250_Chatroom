import { d as db } from "./database-637f9b59.js";
import "dns";
import { j as json } from "./index-0087e825.js";
import "@prisma/client";

async function POST({ request }) {
  const { username } = await request.json();
  const user = await db.user.findUnique({
    where: { username },
  });
  return json({ user }, { status: 201 });
}

export { POST };
//# sourceMappingURL=_server.ts-e34f9098.js.map
