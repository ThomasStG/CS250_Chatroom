<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    $: ({ rooms, usr } = data);
    console.log(2);
</script>

<div
    class="min-h-screen bg-gray-900 py-8"
    style="margin-right: auto; margin-left: auto;"
>
    <h1
        class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
    >
        Direct Messages
    </h1>

    <div class="mx-auto max-w-3xl">
        {#each rooms as room}
            {(room.name = room.name.replace("‎", ""))}
            {#if room && room.Chatroom === false}
                {console.log(usr)}

                <div class="flex" style="position: relative;">
                    <a
                        href="/chatrooms/{room.id}"
                        class="mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
                    >
                        <p class="text-xl text-white">
                            Friend Name: {(room.name = room.name.replace(
                                usr.username,
                                ""
                            ))}
                        </p>
                    </a>
                    <!--<form action="?/delete" method="POST">
                    <input type="hidden" name="room" bind:value={room.id} />
                    <button
                        type="submit"
                        class="mb-4 block rounded-lg bg-gray-800 p-6 text-xl text-white hover:bg-gray-700"
                        >Delete</button
                    >
                </form>-->
                </div>
            {/if}
        {/each}
    </div>
    <!--<div class="flex">
        <a
            href="/chatrooms/create"
            class="mx-auto mb-4 block max-w-3xl rounded-lg bg-gray-800 p-6 hover:bg-gray-700"
            ><p style="color: white;">Create a New Chatroom</p></a
        >
    </div>-->
</div>
