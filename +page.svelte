<script lang="ts">
    import { User } from "carbon-icons-svelte";

    let user = null;
    let username = "";

    async function blockUser() {
        console.log("Block button clicked");
        try {
            const response = await fetch("/api/blockUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }

            user = (await response.json()).user;
            console.log("User blocked: ", user.username);
        } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
        }
    }
</script>

<div>
    <div>Block User</div>
    <form action="">
        <input placeholder="username" bind:value={username} />
        <button type="submit" on:click={blockUser}>Block User</button>
    </form>

    {#if user}
        <div>User blocked: {user.username}</div>
    {/if}
</div>
</script>
