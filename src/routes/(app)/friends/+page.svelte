<script lang="ts">
  import type { PageData } from "./$types";
  import "./friend.css";
  export let data: PageData;

  $: ({ friendRequests, friends, userId } = data);

  export let form;
</script>

<div class="background">
  <div class="content">
    <h1
      class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
    >
      Friends
    </h1>
    <body>
      <div>
        <div class="div-padding">Send Friend request:</div>
        <div style="width:15% margin: 0 auto;">
          <form
            action="?/friendRequest"
            method="POST"
            style="display: flex; flex-direction: column;"
          >
            <div style="margin: 0 auto;">
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter User Name"
                style="width:100%;"
              />
            </div>
            <button type="submit"> Submit</button>
          </form>
        </div>

        <div class="div-padding">Friends:</div>
        {#each friends as friend}
          <div class="element-flex">
            <div>
              {friend.username}
            </div>
            <div>{friend.email}</div>
            <form action="?/removeFriend" method="post" style=" color: red;">
              <input
                type="hidden"
                id="friendID"
                name="friendID"
                bind:value={friend.id}
              />
              <button type="submit" style="display:contents"
                >Remove Friend</button
              >
            </form>
          </div>
        {/each}
        <div class="div-padding">Friends Requests:</div>
        {#each friendRequests as friendRequest}
          <div class="element-flex">
            <div>{friendRequest.fromId}</div>
            <div>{friendRequest.from.email}</div>
            <div>{friendRequest.status}</div>
            {#if friendRequest.fromId != userId}
              <form action="?/accept" method="POST">
                <input
                  type="hidden"
                  name="requestId"
                  value={friendRequest.id}
                />
                <button>Accept</button>
              </form>
              <form action="?/decline" method="Post">
                <button>Decline</button>
              </form>
            {/if}
          </div>
        {/each}
      </div>
    </body>
  </div>
</div>
