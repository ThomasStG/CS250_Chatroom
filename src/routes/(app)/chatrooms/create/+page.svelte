<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  export let data: PageData;
  $: ({ userId } = data);
  let username = "";
  let chatname = "";
  let userNames = [];
  let addedUsers = [];

  async function SearchUser() {
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

      let user = (await response.json()).user;
      console.log("Returned User: ", user);
      console.log(user.id);
      userNames = [...userNames, user.id];
      console.log(userNames);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  function addUser(name) {
    addedUsers = [...addedUsers, name];
    console.log("added users: ", addedUsers);
  }

  async function createRoom() {
    try {
      addedUsers.push(userId);
      const response = await fetch("/api/createRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ addedUsers, chatname }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      let room = (await response.json()).room;
      console.log("Returned Room: ", room);
      goto("/chatrooms");
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
</script>

<div>
  <div>
    <h>Create Chatroom</h>
    <input placeholder="User Name" bind:value={username} />
    <button type="submit" on:click={SearchUser}>Search</button>
  </div>
  <div>
    {#each userNames as id (id)}
      <p>{id}</p>
      <button on:click={() => addUser(id)}> Add to Groupchat </button>
    {/each}
  </div>
</div>

<div>
  {#if true}
    <h2>Added to groupchat:</h2>
    {#each addedUsers as id (id)}
      <p>{id}</p>
    {/each}
    <div class="flex" style="gap: 8px;">
      <h2>Chatroom name</h2>
      <input placeholder="Chatname" name="chatname" bind:value={chatname} />
      {#if addedUsers.length > 0 && chatname != ""}
        <button on:click={createRoom}>Create Groupchat</button>
      {/if}
    </div>
  {/if}
</div>
