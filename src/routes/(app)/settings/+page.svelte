<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import { onMount } from "svelte";
  $: ({ user, userId } = data);

  onMount(() => {
    const deleteButton = document.getElementById("delete");
    const confirm = document.getElementById("confirm");
    const cancel = document.getElementById("cancel");
    const message = document.getElementById("message");

    // Add a click event listener to the button.
    if (deleteButton && cancel && confirm) {
      deleteButton.addEventListener("click", () => {
        // Toggle the "hidden" class on the element to show/hide it.
        cancel.classList.remove("hidden");
        confirm.classList.remove("hidden");
        message?.classList.remove("hidden");
        console.log("pressed");
      });
      confirm.addEventListener("click", () => {
        cancel.classList.add("hidden");
        confirm.classList.add("hidden");
        message?.classList.add("hidden");
      });
    }
  });
</script>

<div class="background">
  <div>
    <h1
      class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
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
        <label class="switch">
          <input type="checkbox" id="darkmode" />
          <span class="slider round item" />
        </label>
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
          />
          <button type="submit" class="item">submit</button>
        </form>
      </div>
      <div>
        <form action="?/changePass" method="POST">
          <input
            type="text"
            name="old-pass"
            id="old-pass"
            class="input item"
            placeholder="Old Password"
          />
          <input
            type="text"
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
          <button id="cancel" type="button" class="item hidden">
            Confirm
          </button>
          <!--will convert to a submit button once logic for deletion is fixed-->
          <div id="message" class="item hidden">
            This feature is not implemented yet!
          </div>
        </form>
      </div>
    </form>
  </div>
</div>

<!--
  dark vs light mode
  change username
  change password
  delete account
-->

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
  .switch {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  .hidden {
    display: none;
  }
</style>
