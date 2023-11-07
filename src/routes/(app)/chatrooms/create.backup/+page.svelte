<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: ({ foundUserCookie } = data);
</script>

<div>
  <h1>Add ChatRoom</h1>
  <form action="?/findUser" method="post">
    <input
      placeholder="Search for user"
      type="text"
      id="userName"
      name="userName"
    />
    <button type="submit">search</button>
  </form>

  {#each foundUserCookie as foundUserCookie}
    {foundUserCookie.username}
  {/each}
  //list users found and add
  <form>
    <input placeholder="ChatRoom Name" />
    <button>Submit</button>
  </form>
  //list users in chatroom
</div>
