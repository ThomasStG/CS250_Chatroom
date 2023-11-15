import prisma from "$lib/database";
import type { RequestEvent, RequestHandler } from "./$types";

export async function POST({ request, locals, url }: RequestEvent) {
  try {
    // Ensure Content-Type is set to application/json
    const contentType = request.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      return {
        status: 400,
        body: { error: "Invalid Content-Type. Expected application/json." },
      };
    }

    // Parse JSON
    const rawData = await request.text();
    const data = JSON.parse(rawData);
    const { username } = data;
    console.log(data);
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    let val;
    if (user) {
      if (user.lightTheme === false) {
        val = true;
      } else {
        val = false;
      }

      await prisma.user.update({
        where: {
          username: username,
        },
        data: {
          lightTheme: val,
        },
      });
    }

    return {
      status: 200,
      body: { message: "Theme toggled successfully" },
    };
  } catch (err) {
    console.error("Error toggling theme:", err);
    return {
      status: 500,
      body: { error: "Internal Server Error" },
    };
  }
}
