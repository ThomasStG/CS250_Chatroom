<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const deleteButton = document.getElementById("delete");
    const confirm = document.getElementById("confirm");
    const cancel = document.getElementById("cancel");
    const bodytheme = document.getElementById("docbody");
    const darkmode = document.getElementById("darkmode");
    const chatbtn = document.getElementById("Nav-Chat");
    const sendbtn = document.getElementById("Nav-Send");
    const friendbtn = document.getElementById("Nav-Friend");
    const notifybtn = document.getElementById("Nav-Notify");
    const globalChat = document.getElementById("global-chat");
    const styleScript = document.getElementById("styleScript");
    var theme = document.getElementsByTagName("link")[0];

    // Add a click event listener to the button.
    if (deleteButton && cancel && confirm) {
      deleteButton.addEventListener("click", () => {
        // Toggle the "hidden" class on the element to show/hide it.
        cancel.classList.remove("hidden");
        confirm.classList.remove("hidden");
        console.log("pressed");
      });
      confirm.addEventListener("click", () => {
        cancel.classList.add("hidden");
        confirm.classList.add("hidden");
      });
    }

    if (
      bodytheme &&
      darkmode &&
      chatbtn &&
      sendbtn &&
      friendbtn &&
      notifybtn &&
      globalChat
    ) {
      darkmode.addEventListener("click", () => {
        //bodytheme.classList.toggle("style-light");
        document.body.classList.toggle("style-light");
        chatbtn.classList.toggle("dark");
        chatbtn.classList.toggle("light");
        sendbtn.classList.toggle("dark");
        sendbtn.classList.toggle("light");
        friendbtn.classList.toggle("dark");
        friendbtn.classList.toggle("light");
        notifybtn.classList.toggle("dark");
        notifybtn.classList.toggle("light");
        globalChat.classList.toggle("dark");
        globalChat.classList.toggle("light");
      });
    }
  });
</script>

<div class="background">
  <div>
    <h1
      class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl"
    >
      Settings
    </h1>
    <form
      action="#"
      class="settings"
      style="margin-left: 2vw; margin-top: 3vh;"
    >
      <div class="setting-item">
        <p>Dark Mode</p>
        <button id="darkmode" class="item">Turn on/off</button>
      </div>
      <div class="setting-item">
        <p class="item">Change Username</p>
        <form action="?/changeName" method="POST">
          <input
            type="text"
            name="username"
            id="username"
            class="input item"
            placeholder="New username"
            maxlength="14"
          />
          <button type="submit" class="item">submit</button>
        </form>
      </div>
      <div>
        <form action="?/changePass" method="POST">
          <input
            type="password"
            name="old-pass"
            id="old-pass"
            class="input item"
            placeholder="Old Password"
          />
          <input
            type="password"
            name="new-pass"
            id="new-pass"
            class="input item"
            placeholder="New Password"
          />
          <button type="submit" class="item">submit</button>
        </form>
      </div>
      <div class="setting-item">
        <form action="?/deleteAccount" method="POST">
          <button id="delete" type="button" class="item">Delete Account</button>
          <button id="confirm" type="button" class="item hidden">
            Cancel
          </button>
          <button id="cancel" type="submit" class="item hidden">
            Confirm
          </button>
        </form>
      </div>
    </form>
  </div>
</div>

<style>
  .input {
    width: 10vw;
  }
  .setting-item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 1%;
  }
  .item {
    /* Adjust the margin to control space */
    margin-right: 10px; /* This adds space between items */
  }
  .setting-item:last-child {
    margin-right: 0px;
  }
  .settings {
    justify-content: space-around;
    gap: 5px;
  }
  .hidden {
    display: none;
  }
</style>
