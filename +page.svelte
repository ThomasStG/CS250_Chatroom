<script lang="ts">
  import type { PageData } from "./$types";
  import "./chatrooms.css";
  import { enhance } from "$app/forms";
  export let data: PageData;

  $: ({ rooms, usr, blockedUsers } = data);
  const theme = "background";

  // Function to check if a user is blocked
  const isBlocked = (userId) => blockedUsers.some((blockedUser) => blockedUser.blockedUserId === userId);

  // Filter out blocked users
  const filteredRooms = rooms.filter((room) => {
    if (room.Chatroom) {
      // For chatrooms, no need to filter users
      return true;
    } else {
      // For direct messages, filter out blocked users
      const [user1, user2] = room.users;
      return !(isBlocked(user1.id) || isBlocked(user2.id));
    }
  });
</script>

<div class={theme}>
  <ul class="f">
    <li>
      <h1
        class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      >
        Chat Rooms
      </h1>

      <div class="mx-auto max-w-3xl">
        {#if filteredRooms}
          {#each filteredRooms as room}
            {#if room.Chatroom}
              <div
                class="flex"
                style="position: relative; justify-content: center;"
              >
                <a
                  href="/chatrooms/{room.id}"
                  id="chatbutton"
                  class="chatbuttons"
                >
                  <p class="text-xl">Room Name: {room.name}</p>
                </a>
              </div>
            {/if}
          {/each}
        {/if}
      </div>
      <div class="flex">
        <a href="/chatrooms/create" class="chatbuttons mx-auto"
          ><p>Create a New Chatroom</p></a
        >
      </div>
    </li>
    <li>
      <h1
        class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
      >
        Direct Messages
      </h1>

      <div
        class="mx-auto max-w-3xl"
        style="left: 50%; justify-content: center; align-items: center; display: flex; flex-direction:column;"
      >
        {#if filteredRooms}
          {#each filteredRooms as room}
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
                    {#if usr}
                      Friend Name: {(room.name = (room.name = room.name.replace(
                        "‎",
                        ""
                      )).replace(usr.username, ""))}
                    {/if}
                  </p>
                </a>
              </div>
            {/if}
          {/each}
        {/if}
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
