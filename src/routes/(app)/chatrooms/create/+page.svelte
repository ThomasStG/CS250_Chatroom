<script >
let username = "";
let userNames = [];
let addedUsers = [];

async function SearchUser() {
  console.log("username-", username)  
  try{
      const response = await fetch("/api/searchFriend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      let user = (await response.json()).user;
      console.log("Returned User: ", user);
      console.log(user.id);
      userNames = [...userNames, user.id];
      console.log(userNames)
  } catch(error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
  }
};

function addUser(name){
  addedUsers = [...addedUsers, name];
  console.log("added users: ", addedUsers)
}


async function createRoom() {
  try{
      const response = await fetch("/api/createRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ addedUsers }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      let room = (await response.json()).room;
      console.log("Returned Room: ", room);
  } catch(error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
  }
};

</script>

<div>
  <div>
    <h>Create Chatroom</h>
    <input placeholder="User Name" bind:value={username}/>
    <button type="submit" on:click={SearchUser} >Search</button>
  </div>
  <div>
    {#each userNames as id (id)}
      <p>{id}</p>
      <button on:click={() => addUser(id)}>
        Add to Groupchat
      </button>
    {/each}
  </div>
  <div>

      <h> Added to groupchat:</h>
    {#each addedUsers as id (id)}
      <p>{id}</p>
      <button on:click={createRoom}>Create Groupchat</button>
    {/each}
  </div>
</div>
