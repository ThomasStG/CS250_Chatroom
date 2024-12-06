import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/database";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request, locals }) => {
    const userId = locals.user.id;
    if (!userId) {
        return fail(403, { error: { message: "Invalid user." } });
    }

    try {
        const rooms = await prisma.room.findMany({
            where: { users: { some: { id: userId, }, }, },
            include: { users: { select: { email: true }, }, },
        })
        return { rooms, };
    }
    catch (err) {
        console.error(err);
        return fail(500, { error: { message: "failed to fetch rooms." } });
    }
}