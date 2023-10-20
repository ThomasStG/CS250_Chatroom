<script>
    export let showModal; // boolean

    let dialog; // HTMLDialogElement

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
            <button class="close" autofocus on:click={() => dialog.close()}
                >close</button
            >
        </div>
    </div>
</dialog>

<style>
    .close {
        position: absolute;
        right: 0;
        top: 1;
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
