<script>
  let currentIndex = 0;
  const items = [
    "SquireFriendsTutorial.png",
    "SquireNotificationTutorial.png",
    "SquireGlobalChatTutorial.png",
    "SquireChatroomTutorial.png",
  ];

  function next() {
    currentIndex = (currentIndex + 1) % items.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
  }
</script>

<div class="mb-4 text-center text-3xl font-extrabold md:text-5xl lg:text-6xl">
  <span
    class="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent"
    >[ Squire ]</span
  > Chat Application.
</div>

<div class="text-white-500 text-center text-lg font-normal lg:text-xl">
  <p>
    A chat application that allows you to open group conversations or one on one
    conversations with your friends, or even make new friends on the anonymous
    global chatroom!
  </p>
</div>

<div class="carousel-container">
  <div class="carousel">
    {#each items as image, i (image)}
      <div
        class="carousel-item"
        style="transform: translateX({-currentIndex * 100}%)"
      >
        <img src={image} alt={`Image ${i + 1}`} />
      </div>
    {/each}
  </div>

  <div class="carousel-buttons">
    <button on:click={prev}>Previous</button>
    <button on:click={next}>Next</button>
  </div>
</div>

<style>
  .carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .carousel {
    display: flex;
    overflow: hidden;
    width: 100%;
    margin-top: 20px; /* Adjust the margin as needed */
  }

  .carousel-item {
    flex: 0 0 100%;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    transition: transform 0.5s ease;
    text-align: center; /* Center the text */
  }

  .carousel-item img {
    max-width: 90%;
    max-height: 90%; /* Ensure the image doesn't exceed the container height */
    width: auto; /* Maintain the aspect ratio of the image */
    height: auto; /* Maintain the aspect ratio of the image */
    border: 4px solid rgb(143, 94, 2); /* Add an orange border to the image */
    border-radius: 8px; /* Optional: Add border-radius for rounded corners */
  }

  .carousel-buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px; /* Adjust the margin as needed */
  }

  .carousel-buttons button {
    margin: 0 10px; /* Adjust the margin as needed */
  }
</style>
