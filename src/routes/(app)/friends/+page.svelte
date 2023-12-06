<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ friendRequests, friends, userId } = data);
</script>

<div class="p-4">
  <h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
    Friends
  </h1>

  <div class="mb-4">
    <div class="text-center text-lg font-medium mb-2">Send Friend Request:</div>
    <form action="?/friendRequest" method="POST" class="w-1/6 mx-auto flex flex-col" use:enhance={() => {
            return async ({ update }) => {
              update({ reset: false });
            };
          }}>
      <input type="text" id="userName" name="userName" placeholder="Enter User Name" class="p-2 border rounded mb-2" />
      <button type="submit" class="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Submit</button>
    </form>
  </div>

  <div class="mb-4">
    <div class="text-center text-lg font-medium mb-2">Friends:</div>
    {#if friends}
      {#each friends as friend}
        <div class="flex justify-between items-center mb-2">
          <div>{friend.username}</div>
          <div>{friend.email}</div>
          <form action="?/removeFriend" method="post" class="text-red-500" use:enhance={() => {
            return async ({ update }) => {
              update({ reset: false });
            };
          }}>
            <input type="hidden" id="friendID" name="friendID" bind:value={friend.id} />
            <button type="submit" class="underline">Remove Friend</button>
          </form>
        </div>
      {/each}
    {/if}
  </div>

  <div>
    <div class="text-center text-lg font-medium mb-2">Friend Requests:</div>
    {#if friendRequests}
      {#each friendRequests as friendRequest}
        <div class="flex items-center justify-center mb-2">
          <div class="px-5">{friendRequest.from.email}</div>
          <div>{friendRequest.status}</div>
          {#if friendRequest.fromId != userId}
            <div class="flex gap-2">
              <form action="?/accept" method="POST" use:enhance={() => {
            return async ({ update }) => {
              update({ reset: false });
            };
          }}>
                <input type="hidden" name="requestId" value={friendRequest.id} />
                <button class="bg-green-500 text-white rounded p-2 hover:bg-green-600">Accept</button>
              </form>
              <form action="?/decline" method="POST" use:enhance={() => {
            return async ({ update }) => {
              update({ reset: false });
            };
          }}>
                <button class="bg-red-500 text-white rounded p-2 hover:bg-red-600">Decline</button>
              </form>
            </div>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>

