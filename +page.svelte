<script lang="ts">
  let username = '';
  let user = null;
  let chatMessages: { username: string; message: string }[] = [];

  async function searchUser() {
    // Simulated API call to fetch user data
    // Replace this with actual API calls
    const response = await fetch('/api/searchFriend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    if (response.ok) {
      const data = await response.json();
      user = data.user;
      chatMessages.push({ username: 'System', message: `You are now chatting with ${user.username}` });
    } else {
      console.error('Network response was not ok');
    }
  }

  function sendMessage(event: Event) {
    event.preventDefault();
    const messageContent = (event.target as HTMLFormElement).content.value;
    chatMessages.push({ username, message: messageContent });
    (event.target as HTMLFormElement).content.value = ''; 
  }
</script>

<div>
  <div>Direct Messaging</div>
  <form action="?/sendMessage" method="POST" on:submit={sendMessage} class="max-w-3xl mx-auto flex items-center">
    <input
      type="text"
      id="content"
      name="content"
      placeholder="Enter message"
      class="flex-1 p-2 rounded-l-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Send
    </button>
  </form>
</div>
