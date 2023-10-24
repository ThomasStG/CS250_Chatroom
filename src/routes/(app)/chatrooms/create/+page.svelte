<script lang="ts">
    import { User } from "carbon-icons-svelte";

    let user = null;
    let username = "";
    let userNames = [];

    async function addUser() {
        if (user && user.username) {
            userNames.push(user.username);
            console.log("User added: ", user.username);
        }
    }

    function testFunc() {
        console.log("tester");
    }

    async function searchUser() {
        console.log("button hit");
        try {
            const response = await fetch("/api/searchFriend", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            });

            if (!response.ok) {
                throw new Error(
                    "Network response was not ok " + response.statusText
                );
            }

            user = (await response.json()).user;
            console.log("Returned User: ", user);
            console.log(user.username);

            // After user is retrieved, you can call addUser to add the username
            addUser();
        } catch (error) {
            console.error(
                "There has been a problem with your fetch operation:",
                error
            );
        }
    }
</script>

<div>
    <div>Search UserNames</div>
    <form action="">
        <input placeholder="username" bind:value={username} />
        <button type="submit" on:click={searchUser}>search</button>
        {#if user}
            <div>User: {user.username}</div>
            <input type="hidden" id="name" bind:value={user.id} />
            <button type="submit">add to groupchat</button>
        {/if}
    </form>
    <form action="?/createChatroom" method="POST">
        <input placeholder="Chatroom Name" id="chatname" name="chatname" />
        <input type="hidden" id="users" name="users" bind:value={userNames} />
        <button type="submit">Create</button>
    </form>
    <div />
</div>
