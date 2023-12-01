<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ rooms, usr } = data);
</script>

<div>
  <ul class="flex flex-wrap justify-center gap-8 dark:style-light">
    <li>
      <h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
        Chat Rooms
      </h1>

      <div class="mx-auto max-w-3xl">
        {#if rooms}
          {#each rooms as room}
            {#if room.Chatroom}
              <a href="/chatrooms/{room.id}" class="block mx-auto mb-4 rounded-lg bg-gray-800 p-6 hover:bg-gray-700">
                <p class="text-xl text-white">Room Name: {room.name}</p>
              </a>
            {/if}
          {/each}
        {/if}
      </div>

      <div class="text-center">
        <a href="/chatrooms/create" class="block mx-auto p-3 rounded bg-blue-500 text-white hover:bg-blue-600">
          <p>Create a New Chatroom</p>
        </a>
      </div>
    </li>
    <li>
      <h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
        Direct Messages
      </h1>

      <div class="mx-auto max-w-3xl">
        {#if rooms}
          {#each rooms as room}
            {#if room && room.Chatroom === false}
              <a href="/chatrooms/{room.id}" class="block mx-auto mb-4 rounded-lg bg-gray-800 p-6 hover:bg-gray-700">
                <p class="text-xl text-white">
                  {#if usr}
                    Friend Name: {room.name.replace("‎", "").replace(usr.username, "")}
                  {/if}
                </p>
              </a>
            {/if}
          {/each}
        {/if}
      </div>
    </li>
  </ul>
</div>
