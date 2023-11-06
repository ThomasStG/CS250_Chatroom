<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
  $: ({ userId, notifications } = data);
</script>

<div class="background">
  <h1>Notifications</h1>
  <div style="display: flex; justify-content:center;">
    {#each notifications as notification}
    <ul class="list">
      <div class="flex" style="position: relative; flex-direction:column;">
        <a
          href="/chatrooms"
          class="mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
        >
          <p>sender: {notification.senderName}</p>
          <p>sent at: {notification.sentAt}</p>
        </a>
      </div>
    </ul>
    {/each}
  </div>
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 80px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
  .list-item {
    margin-left: auto;
    margin-right: auto;
  }
</style>
