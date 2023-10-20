<script lang="ts">
    let username = '';
    let targetUsername = '';
    let message = '';
    let chatMessages: { username: string; message: string }[] = [];
  
    async function searchUser() {
      // Simulated API call to fetch user data
      // Replace this with actual API calls
      const response = await fetch('/api/searchFriend', { // initiate a POST request to the '/api/searchFriend' endpoint with the provided username data
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
  
      if (response.ok) { //handles the response from a network request 
        const data = await response.json();
        user = data.user;
        chatMessages.push({ username: 'System', message: `You are now chatting with ${user.username}` });
      } else {
        console.error('Network response was not ok');
      }
    }
  
    function sendMessage() { //allows user to send a message
      if (message && targetUsername) {
        chatMessages.push({ username, message });
        message = '';
      }
    }
  </script>
  
  <div>
    <div>Direct Messaging</div>
  
    <div>Enter your username:</div>
    <input placeholder="Your username" bind:value={username} />
  
    <div>Search for a user to chat with:</div>
    <input placeholder="Target username" bind:value={targetUsername} />
    <button on:click={searchUser}>Search</button>
  
    {#if chatMessages.length > 0}
      <div>Chat Messages:</div>
      <ul>
        {#each chatMessages as { username, message }, (messageId)}
          <li>{username}: {message}</li>
        {/each}
      </ul>
    {/if}
  
    <div>Send a message:</div>
    <input placeholder="Message" bind:value={message} />
    <button on:click={sendMessage}>Send</button>
  </div>
  