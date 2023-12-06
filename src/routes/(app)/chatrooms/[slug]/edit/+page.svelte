<script lang="ts">
  import type { PageData } from "./$types";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  export let data: PageData;
  $: ({ room, userId } = data);
  let username = "";
  let userNames = [];

  async function searchUser() {
    console.log("username-", username);
    try {
      const response = await fetch("/api/searchFriend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const { user } = await response.json();
      console.log("Returned User: ", user);
      if (room && room.users && room.users.length > 0) {
        // Use .some() method to check if the user is already in the room
        if (room.users.some((users) => users.id === user.id)) {
          console.log("Error: User is already in the room");
        } else {
          userNames = [...userNames, user.id];
        }
        console.log(userNames);
      } else {
        console.log("Room or users data is undefined or empty");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  async function updateRoom() {
    try {
      const id = userNames[0];
      console.log(id);
      const response = await fetch("/api/editRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ addedUsers: userNames, chatId: room.id }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const { room: updatedRoom } = await response.json();
      console.log("Updated Room: ", updatedRoom);
    } catch (error) {
      console.error("Error updating room:", error);
    }
  }
</script>

{#if room && room.name}
  <a href="/chatrooms/{room.id}">back</a>
  <h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
    Edit Chatroom: {room.name || "Unnamed Room"}
  </h1>

  <div
    style="display: flex; flex-direction: column; align-items: center; height: 100vh;"
  >
    <form
      action="?/rename"
      method="POST"
      use:enhance={() => {
        return async ({ update }) => {
          update({ reset: false });
        };
      }}
      class="flex"
      style="margin-bottom: 12px;"
    >
      <input
        id="newName"
        name="newName"
        bind:value={room.name}
        maxlength="15"
      />
      <button id="renamebutton" type="submit">Rename</button>
    </form>

    <div class="mb-2 text-2xl">Add user to chatroom</div>
    <div>
      <form on:submit|preventDefault={searchUser}>
        <input type="text" id="newUser" name="newUser" bind:value={username} />
        <button type="submit">Search</button>
      </form>

      {#if userNames.length > 0}
        <p>{userNames[0]}</p>
        <button on:click={updateRoom}>Add to Groupchat</button>
      {/if}
    </div>

    <form
      action="?/exit"
      method="POST"
      use:enhance={() => {
        return async ({ update }) => {
          update({ reset: false });
        };
      }}
    >
      <input type="hidden" name="room" bind:value={room.id} />
      <button type="submit" id="chatexit" class="chatbuttons">Exit Room</button>
    </form>
  </div>
{/if}
