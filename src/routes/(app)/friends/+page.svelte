<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    $: ({ friendRequests, friends } = data);

    export let form;
</script>

<div>Friends</div>

<div>Send Friend request:</div>

<form action="?/friendRequest" method="POST">
    <input
        type="text"
        id="userName"
        name="userName"
        placeholder="Enter User Name"
    />
    <button type="submit"> Submit</button>
</form>

<div>Friends:</div>
{#each friends as friend}
    <div class="flex" style="justify-content: space-between; max-width: 350px;">
        <div style="max-width: 250px; justify-content: space-between;">
            {friend.username}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            {friend.email}
        </div>
        <form action="?/removeFriend" method="post" style=" color: red;">
            <input
                type="hidden"
                id="friendID"
                name="friendID"
                bind:value={friend.id}
            />
            <button type="submit">Remove Friend</button>
        </form>
    </div>
{/each}
<div>Friends Requests:</div>
{#each friendRequests as friendRequest}
    <div>
        {friendRequest.fromId}
        {friendRequest.from.email}
        {friendRequest.status}
        <form action="?/accept" method="POST">
            <input type="hidden" name="requestId" value={friendRequest.id} />
            <button>Accept</button>
        </form>
        <form action="?/decline" method="Post">
            <button>Decline</button>
        </form>
    </div>
{/each}
