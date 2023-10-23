<script lang="ts">
  import Modal from "./Modal.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  let modals: Record<string, boolean> = {};

  $: ({ messages } = data);
</script>

<div class="flex min-h-screen flex-col items-center bg-gray-900 py-8">
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
    {#each messages as message}
      <div class="mb-4 rounded-lg bg-gray-800 p-6">
        <p class="text-white">Message: {message.content}</p>
        <p class="text-gray-400">Sender: {message.sender.username}</p>

        {#if message.receiver}
          <p class="text-gray-400">Receiver: {message.receiver.email}</p>
        {/if}
        {#if message.sentAt}
          <p class="text-gray-400">Time: {message.sentAt}</p>
        {/if}
        {#if message.updatedAt}
          <p class="text-gray-400">Updated at: {message.updatedAt}</p>
        {/if}
        <div style="display: flex;">
          <button
            on:click={() => (modals[message.id] = true)}
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
                    <textarea
                      rows="10"
                      cols="44"
                      id="message"
                      name="message"
                      autofocus
                      class="modal-text"
                      bind:value={message.content}
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
      </div>
    {/each}
  </div>

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
    />
    <button
      type="submit"
      class="rounded-r-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      send
    </button>
  </form>
</div>

<style>
  .message-button {
    color: white;
    border: 2px solid green;
    border-radius: 5px;
    padding: 3px;
    margin-right: 4px;
  }
  .bottom {
    position: absolute;
    top: 1;
    right: 1;
  }
  .close {
    position: absolute;
    right: 0;
    top: 1;
  }
  .modal-size {
    height: 250px;
    width: 400px;
  }
  .modal-text {
    width: 380px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    border: 1px solid #ccc; /* You can adjust the border style as needed */
    border-radius: 4px;
    background-color: #f0f0f0;
    padding: 2.5px;
    color: #333;
    outline: none;
    font-size: 14px;
  }
</style>
