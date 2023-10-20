<script lang="ts">
  import Modal from "./Modal.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  let modals: Record<string, boolean> = {};

  $: ({ messages } = data);
</script>

<div class="min-h-screen bg-gray-900 py-8">
  <h1
    class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
  >
    Messages
  </h1>

  <div class="mx-auto max-w-3xl">
    {#each messages as message}
      <div class="mb-4 rounded-lg bg-gray-800 p-6">
        <p class="text-white">Message: {message.content}</p>
        <p class="text-gray-400">Sender: {message.sender.email}</p>

        {#if message.receiver}
          <p class="text-gray-400">Receiver: {message.receiver.email}</p>
        {/if}
        {#if message.sentAt}
          <p class="text-gray-400">Time: {message.sentAt}</p>
        {/if}

        <button
          on:click={() => (modals[message.id] = true)}
          style="color: white; border: 2px solid green; border-radius: 5px; padding: 3px;"
          >Edit Message</button
        >
        {#if modals[message.id]}
          <!-- Use bind:showModal to control the Modal component -->
          <Modal bind:showModal={modals[message.id]}>
            <h2 slot="header">Edit Message</h2>
            <div class="modal-size">
              <body>
                <form action="?/editMessage" method="POST">
                  <!--use a new url extension to update the db-->
                  <div>
                    <textarea
                      rows="10"
                      cols="44"
                      id="message"
                      name="message"
                      autofocus
                      style="width:380px; display: block; margin-left: auto; margin-right: auto;"
                      class="block h-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
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
    class="mx-auto flex max-w-3xl items-center"
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
      Send
    </button>
  </form>
</div>

<style>
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
</style>
