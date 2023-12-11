<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";

  export let data: PageData;
  $: ({ userId } = data);

  let username = "";
  let chatname = "";
  let userNames = [];
  let addedUsers = [];

  async function searchUser() {
    try {
      const response = await fetch("/api/searchFriend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      if (!response.ok)
        throw new Error("Network response was not ok " + response.statusText);

      const { user } = await response.json();
      userNames = [...userNames, user.id];
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  }

  function addUser(name) {
    addedUsers = [...addedUsers, name];
  }

  async function createRoom() {
    try {
      addedUsers.push(userId);
      if (chatname.length > 15 || chatname.length < 3)
        throw new Error("Invalid chatname length");

      const response = await fetch("/api/createRoom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addedUsers, chatname }),
      });

      if (!response.ok)
        throw new Error("Network response was not ok " + response.statusText);

      goto("/chatrooms");
    } catch (error) {
      console.error("Fetch operation error:", error);
    }
  }
</script>

<div class="p-4">
  <div class="mb-4">
    <h1 class="text-lg font-semibold">Create Chatroom</h1>
    <div class="mt-2 flex items-center gap-2">
      <input
        class="rounded border p-2"
        placeholder="User Name"
        bind:value={username}
      />
      <button
        class="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        type="submit"
        on:click={searchUser}>Search</button
      >
    </div>
  </div>

  <div class="mb-4">
    {#each userNames as id (id)}
      <div class="flex items-center gap-2">
        <p class="mr-2">{id}</p>
        <button
          class="rounded bg-green-500 p-2 text-white hover:bg-green-600"
          on:click={() => addUser(id)}
        >
          Add to Groupchat
        </button>
      </div>
    {/each}
  </div>

  {#if addedUsers.length > 0}
    <div class="mb-4">
      <h2 class="text-lg font-semibold">Added to groupchat:</h2>
      {#each addedUsers as id (id)}
        <p>{id}</p>
      {/each}
      <div class="mt-2 flex items-center gap-2">
        <h2 class="text-lg font-semibold">Chatroom name</h2>
        <input
          class="rounded border p-2"
          placeholder="Chatname"
          bind:value={chatname}
          maxlength="14"
        />
          <button
            class="rounded bg-purple-500 p-2 text-white hover:bg-purple-600"
            on:click={createRoom}>Create Groupchat</button
          >
      </div>
    </div>
  {/if}
</div>
