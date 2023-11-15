import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import prisma from "$lib/database";
import { onMount } from "svelte";

export const load: LayoutServerLoad = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, "/login");
  }
  

  return {
    user: locals.user,
  };
};




  