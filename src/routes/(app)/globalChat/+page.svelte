<script lang="ts">
  import Modal from "./Modal.svelte";
  import type { PageData } from "./$types";
  import "./[slug].css";
  import { enhance } from "$app/forms";

  export let data: PageData;
  let messagetext: String = "";
  let modals: Record<string, boolean> = {};
  $: ({ messages, userId } = data);

  const clearInput = () => {
    const inputElement = <HTMLInputElement>document.getElementById("content");
    if (inputElement) {
      inputElement.value = "";
    }
  };

  // Submit event handler for the form
  const handleSubmit = async () => {
    // Handle the form submission here (e.g., send the data to the server)
    // ...

    // Clear the input field
    clearInput();

    // Programmatically trigger the form submission
    const form = <HTMLFormElement>document.getElementById("sendForm");
    if (form) {
      form.submit();
    }
  };
</script>

<div class="background flex min-h-screen flex-col items-center">
  <div class="flex items-center">
    <h1
      class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
    >
      Messages
    </h1>
  </div>

  <div class="mx-auto max-w-3xl items-center">
    {#if messages}
      {#each messages as message}
        <div class="message-list">
          <p>Message: {message.content}</p>

          {#if message.sentAt}
            <p>Time: {message.sentAt}</p>
          {/if}
          {#if message.updatedAt}
            <p>Updated at: {message.updatedAt}</p>
          {/if}
          {#if userId == message.sender.id}
            <div style="display: flex;">
              <button
                on:click={() => (
                  (modals[message.id] = true), (messagetext = message.content)
                )}
                class="message-button">Edit Message</button
              >
              <form
                action="?/deleteMessage"
                method="POST"
                use:enhance={() => {
                  return async ({ update }) => {
                    update({ reset: false });
                  };
                }}
              >
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
                    <form
                      action="?/editMessage"
                      method="POST"
                      use:enhance={() => {
                        return async ({ update }) => {
                          update({ reset: false });
                        };
                      }}
                    >
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
      id="sendForm"
      use:enhance={() => {
        return async ({ update }) => {
          update({ reset: false });
        };
      }}
      on:submit={handleSubmit}
    >
      <input
        type="text"
        id="content"
        name="content"
        placeholder="Enter message"
        class="flex-1 rounded-l-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button
        type="submit"
        id="submit"
        class="rounded-r-lg bg-blue-500 px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        style="color:inherit"
      >
        send
      </button>
    </form>
  </div>
</div>
