<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ friendRequests, friends, friendRequestList, userId } = data);
</script>

<div class="p-4">
  <h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
    Friends
  </h1>

  <div class="mb-4">
    <div class="mb-2 text-center text-lg font-medium">Send Friend Request:</div>
    <form
      action="?/friendRequest"
      method="POST"
      class="mx-auto flex w-1/6 flex-col"
      use:enhance
    >
      <input
        type="text"
        id="userName"
        name="userName"
        placeholder="Enter User Name"
        class="mb-2 rounded border p-2"
      />
      <button
        type="submit"
        class="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >Submit</button
      >
    </form>
  </div>

  <div class="mb-4">
    <div class="mb-2 items-center text-center text-lg font-medium">
      Friends:
    </div>
    {#if friends}
      {#each friends as friend}
        <div class="mb-2 flex items-center justify-center space-x-4">
          <div>{friend.username}</div>
          <div>{friend.email}</div>
          <form
            action="?/removeFriend"
            method="post"
            class="text-red-500"
            use:enhance
          >
            <input
              type="hidden"
              id="friendID"
              name="friendID"
              bind:value={friend.id}
            />
            <button type="submit" class="underline">Remove Friend</button>
          </form>
        </div>
      {/each}
    {/if}
  </div>

  <div>
    <div class="mb-2 text-center text-lg font-medium">Friend Requests:</div>
    {#if friendRequests}
      {#each friendRequests as friendRequest}
        <div class="mb-2 flex items-center justify-center">
          {#if friendRequest.fromId != userId}
            <div class="px-5">{friendRequest.from.email}</div>
            <div>{friendRequest.status}</div>
            <div class="flex gap-2">
              <form action="?/accept" method="POST" use:enhance>
                <input
                  type="hidden"
                  name="requestId"
                  value={friendRequest.id}
                />
                <button
                  class="rounded bg-green-500 p-2 text-white hover:bg-green-600"
                  >Accept</button
                >
              </form>
              <form action="?/decline" method="POST" use:enhance>
                <button
                  class="rounded bg-red-500 p-2 text-white hover:bg-red-600"
                  >Decline</button
                >
              </form>
            </div>
          {/if}
          {#if friendRequest.fromId === userId}
            <div class="px-5">{friendRequest.to.email}</div>
            <div>{friendRequest.status}</div>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>
