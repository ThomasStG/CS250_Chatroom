<script lang="ts">
    import { User } from "carbon-icons-svelte";
  
    let username = '';
    let user = null;
  
    async function searchUser() {
    console.log("button hit");
    try {
        const response = await fetch('/api/searchFriend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        user = (await response.json()).user;
        console.log("Returned User: ", user);
        console.log(user.username);

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

  </script>
  
  <div>
    <div>Search UserNames</div>

    <input placeholder="username" bind:value={username}/>
    <button type="submit" on:click={searchUser}>search</button>
    {#if user}

        <form method="post">
            <div>User: {user.username}</div>

            <input type="hidden" bind:value={user.username} name="username"/>
            <button type="submit">add to groupchat</button>

        </form>
    {/if}

    
  </div>
