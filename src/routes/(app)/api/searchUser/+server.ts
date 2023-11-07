// src/routes/api/searchUser.ts
import prisma from "$lib/database";
import type { RequestEvent, RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export async function POST({ request, locals, url }: RequestEvent) {
  try {
    const rawData = await request.text();
    const data = JSON.parse(rawData);
    const { username } = data;

    const user = await prisma.user.findUnique({
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
