<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ rooms, usr } = data);
  console.log(2);
</script>

<div
  class="min-h-screen bg-gray-900 py-8"
  style="margin-right: auto; margin-left: auto;"
>
  <h1
    class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
  >
    Direct Messages
  </h1>

  <div
    class="mx-auto max-w-3xl"
    style="left: 50%; justify-content: center; allign-items: center; display: flex;"
  >
    {#each rooms as room}
      {#if room && room.Chatroom === false}
        <div class="flex" style="position: relative;">
          <a
            href="/chatrooms/{room.id}"
            class="mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
          >
            <p class="text-xl text-white">
              Friend Name: {(room.name = (room.name = room.name.replace(
                "‎",
                ""
              )).replace(usr.username, ""))}
            </p>
          </a>
        </div>
      {/if}
    {/each}
  </div>
</div>
