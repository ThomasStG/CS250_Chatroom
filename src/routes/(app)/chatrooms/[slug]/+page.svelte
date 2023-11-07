<script lang="ts">
  import Modal from "./Modal.svelte";
  import type { PageData } from "./$types";
  import "./[slug].css";

  export let data: PageData;
  let messagetext: String = "";
  let modals: Record<string, boolean> = {};
  $: ({ messages, userId } = data);
</script>

<div class="background flex min-h-screen flex-col items-center">
  <div class="flex items-center">
    <a
      href="/chatrooms"
      class="mb-2 mr-4 text-3xl font-extrabold text-white md:text-4xl lg:text-2xl"
      style="text-align: left">Back</a
    >
    <h1
      class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
    >
      Messages
    </h1>
  </div>

  <div class="mx-auto max-w-3xl items-center">
    {#if messages}
      {#each messages as message}
        <div class="message-list">
          <p class="text-white">Message: {message.content}</p>
          <p class="text-gray-400">Sender: {message.sender.username}</p>

          {#if message.sentAt}
            <p class="text-gray-400">Time: {message.sentAt}</p>
          {/if}
          {#if message.updatedAt}
            <p class="text-gray-400">Updated at: {message.updatedAt}</p>
          {/if}
          {#if userId == message.sender.id}
            <div style="display: flex;">
              <button
                on:click={() => (
                  (modals[message.id] = true), (messagetext = message.content)
                )}
                class="message-button">Edit Message</button
              >
              <form action="?/deleteMessage" method="POST">
                <button type="submit" class="message-button">
                  Delete Message
                </button>
                <input
                  type="hidden"
                  id="messageId"
                  name="messageId"
                  bind:value={message.id}
                />
              </form>
            </div>
            {#if modals[message.id]}
              <Modal bind:showModal={modals[message.id]}>
                <h2 slot="header">Edit Message</h2>
                <div class="modal-size">
                  <body>
                    <form action="?/editMessage" method="POST">
                      <div>
                        <!-- svelte-ignore a11y-autofocus -->
                        <textarea
                          rows="10"
                          cols="44"
                          autofocus
                          id="message"
                          name="message"
                          class="modal-text"
                          bind:value={messagetext}
                        />
                        <!--passes the messageId through a hidden attribute to update the db-->
                        <input
                          type="hidden"
                          id="messageId"
                          name="messageId"
                          bind:value={message.id}
                        />
                      </div>
                      <button class="bottom" type="submit">Submit</button>
                    </form>
                  </body>
                </div>
              </Modal>
            {/if}
          {/if}
        </div>
      {/each}
    {/if}
  </div>
  <div>
    <form
      action="?/sendMessage"
      method="POST"
      class="mx-auto flex h-full max-w-3xl items-center"
    >
      <input
        type="text"
        id="content"
        name="content"
        placeholder="Enter message"
        class="flex-1 rounded-l-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        style="color:black"
      />
      <button
        type="submit"
        class="rounded-r-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        send
      </button>
    </form>
  </div>
</div>
