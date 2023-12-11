<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ rooms, usr } = data);

  rooms?.forEach((room) => {
    var usrUsername = usr.username; // Replace this with the user's username

    // Escape special characters in the username for regex
    var escapedUsername = usrUsername.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Create a regular expression pattern to match the exact username
    var pattern = new RegExp("\\b" + escapedUsername + "\\b", "g");

    // Replace the exact matching username with an empty string in roomName
    room.name.replace(pattern, "");
  });
</script>

<div>
  <ul class="dark:style-light flex flex-wrap justify-center gap-8">
    <li>
      <h1
        class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      >
        Chat Rooms
      </h1>

      <div class="mx-auto max-w-3xl">
        {#if rooms}
          {#each rooms as room}
            {#if room.Chatroom}
              <a
                href="/chatrooms/{room.id}"
                class="mx-auto mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
              >
                <p class="text-xl text-white">Room Name: {room.name}</p>
              </a>
            {/if}
          {/each}
        {/if}
      </div>

      <div class="text-center">
        <a
          href="/chatrooms/create"
          class="mx-auto block rounded bg-blue-500 p-3 text-white hover:bg-blue-600"
        >
          <p>Create a New Chatroom</p>
        </a>
      </div>
    </li>
    <li>
      <h1
        class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      >
        Direct Messages
      </h1>

      <div class="mx-auto max-w-3xl">
        {#if rooms}
          {#each rooms as room}
            {#if room && room.Chatroom === false}
              <a
                href="/chatrooms/{room.id}"
                class="mx-auto mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
              >
                <p class="text-xl text-white">
                  {#if usr}
                    Friend Name: {room.name
                      .replace(usr.username + " ", "")
                      .replace(" " + usr.username, "")}
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
