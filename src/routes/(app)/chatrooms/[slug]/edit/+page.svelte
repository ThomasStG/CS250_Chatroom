<script lang="ts">
  import type { PageData } from "./$types";
  import { enhance } from "$app/forms";
  export let data: PageData;
  $: ({ room } = data);
</script>

{#if room && room.name}
<a href="/chatrooms/{room.id}">back</a>
<h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
  Edit Chatroom: {room.name || 'Unnamed Room'}
</h1>


<div
  style="display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;">
    <div class="mb-2 text-2xl">Change Chatroom Name</div>
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
      //TODO: use the searchFriend API to add a single user at a time to the
      chatroom (parseInt(params.slug))
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