import prisma from "$lib/database";
import { resolveCname } from "dns";
import type { RequestEvent, RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const { username } = await request.json();

  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  return json({ user }, { status: 201 });
}
