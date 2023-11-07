<script lang="ts">
  import type { PageData } from "./$types";
  //import "./[slug].css";
  import { enhance } from "$app/forms";

  export let data: PageData;
  $: ({ notification } = data);
</script>

<div class="background flex min-h-screen flex-col items-center">
  <div class="flex items-center">
    <a
      href="/notifications"
      class="mb-2 mr-4 text-3xl font-extrabold text-white md:text-4xl lg:text-2xl"
      style="text-align: left">Back</a
    >
    <h1
      class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
    >
      Message
    </h1>
  </div>

  <div class="mx-auto max-w-3xl items-center">
    {#if notification}
      <p class="text-white">Message: {notification.content}</p>
      <p class="text-gray-400">Sender: {notification.senderName}</p>

      {#if notification.sentAt}
        <p class="text-gray-400">Time: {notification.sentAt}</p>
      {/if}
      <form action="?/deleteMessage" method="POST">
        <button type="submit" class="message-button"> Delete Message </button>
        <input
          type="hidden"
          id="messageId"
          name="messageId"
          bind:value={notification.id}
        />
      </form>
    {/if}
  </div>
</div>
