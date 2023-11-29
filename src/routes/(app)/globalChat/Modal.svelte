<script>
  export let showModal;

  import "./[slug].css";
  let dialog;

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <slot name="header" />
    <hr />
    <slot />
    <hr />
    <!-- svelte-ignore a11y-autofocus -->
    <div>
      <button class="close" on:click={() => dialog.close()}>X</button>
    </div>
  </div>
</dialog>

<style>
  .close {
    position: absolute;
    right: 4px;
    top: 0;
  }
  dialog {
    border-radius: 0.2em;
    border: none;
    padding: 0;
  }
  button {
    display: block;
  }
</style>
