import db from "$/lib/database";
import { fail } from "@sveltejs/kit";
import prisma from "$lib/database";

function get_user_messages(name: string) {
    const user = await db.user.findUnique({
        where: { username: session },
    });
}
