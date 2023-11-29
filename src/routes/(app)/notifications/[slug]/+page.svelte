<script lang="ts">
  import type { PageData } from "./$types";
  import "./[slug].css";
  import { enhance } from "$app/forms";

  export let data: PageData;
  $: ({ notification } = data);
</script>

<div class="background flex min-h-screen flex-col items-center">
  <div class="flex items-center">
    <a
      href="/notifications"
      class="mb-2 mr-4 text-3xl font-extrabold md:text-4xl lg:text-2xl"
      style="text-align: left">Back</a
    >
    <h1
      class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
    >
      Message
    </h1>
  </div>

  <div class="message-list mx-auto max-w-3xl items-center">
    {#if notification}
      <p>Message: {notification.content}</p>
      <p style="color: inherit;">Sender: {notification.senderName}</p>

      {#if notification.sentAt}
        <p style="color: inherit;">Time: {notification.sentAt}</p>
      {/if}
      <form
        action="?/deleteMessage"
        method="POST"
        use:enhance={() => {
          return async ({ update }) => {
            update({ reset: false });
          };
        }}
        style="border: 4px; border-color: green;"
      >
        <button type="submit" class="chatbuttons-s"> Delete Message </button>
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
