<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  console.log(2);
  $: ({ rooms, usr } = data);
  const theme = "background";
</script>

<div
  class="min-h-screen py-8 {theme}"
  style="margin-right: auto; margin-left: auto; min-height: 100vh; padding-top: 2rem; padding-bottom: 2rem;"
>
  <ul class="f">
    <li>
      <h1
        class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
      >
        Chat Rooms
      </h1>

      <div class="mx-auto max-w-3xl">
        {#each rooms as room}
          {#if room.Chatroom}
            <div class="flex" style="position: relative;">
              <a
                href="/chatrooms/{room.id}"
                class="mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
              >
                <p class="text-xl text-white">Room Name: {room.name}</p>
              </a>
              <form action="?/delete" method="POST">
                <input type="hidden" name="room" bind:value={room.id} />
                <button
                  type="submit"
                  class="mb-4 block rounded-lg bg-gray-800 p-6 text-xl text-white hover:bg-gray-700"
                  >Delete</button
                >
              </form>
            </div>
          {/if}
        {/each}
      </div>
      <div class="flex">
        <a
          href="/chatrooms/create"
          class="mx-auto mb-4 block max-w-3xl rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
          ><p style="color: white;">Create a New Chatroom</p></a
        >
      </div>
    </li>
    <li>
      <h1
        class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
      >
        Direct Messages
      </h1>

      <div
        class="mx-auto max-w-3xl"
        style="left: 50%; justify-content: center; align-items: center; display: flex;"
      >
        {#each rooms as room}
          {#if room && room.Chatroom === false}
            <div class="flex" style="position: relative;">
              <a
                href="/chatrooms/{room.id}"
                class="mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
              >
                <div class="hidden">
                  {(room.name =
                    room.users[0].username + "‎" + room.users[1].username)}
                </div>
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
    </li>
  </ul>
</div>

<style>
  .center {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .f {
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
</style>
