<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    $: ({ rooms } = data);
</script>

<div>
    <h1>Chat Rooms</h1>
    <div>
        {#each rooms as room}
            <a href="/chatroom/{room.id}">
                <p>Room Name: {room.name}</p>
            </a>
        {/each}
    </div>
</div>
