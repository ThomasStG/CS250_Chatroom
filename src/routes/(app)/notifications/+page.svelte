<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ userId, notifications } = data);
</script>

<div class="background">
  <h1>Notifications</h1>
  <div style="margin-left:auto; margin-right:auto; width:35%;">
    <div style="display: flex; flex-direction: column; justify-content:center;">
      {#each notifications as notification}
        <div class="list">
          <div>
            <a href="/notifications/{notification.id}" class="chatbuttons">
              <p>sender: {notification.senderName}</p>
              <p>sent at: {notification.sentAt}</p>
            </a>
          </div>
        </div>
      {/each}
      {#if notifications.length == 0}
        <span
          style="text-align:center; font-size:x-large"
          class="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent"
          >No Notifications Yet!</span
        >
      {/if}
    </div>
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
</style>
