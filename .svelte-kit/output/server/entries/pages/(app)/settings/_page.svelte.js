import { c as create_ssr_component } from "../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".input.svelte-q4yqv2{width:10vw}.setting-item.svelte-q4yqv2{display:flex;align-items:center;gap:5px;padding-bottom:1%}.item.svelte-q4yqv2{margin-right:10px}.setting-item.svelte-q4yqv2:last-child{margin-right:0px}.settings.svelte-q4yqv2{justify-content:space-around;gap:5px}.hidden.svelte-q4yqv2{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="background"><div><h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">Settings
    </h1>
    <form action="#" class="settings svelte-q4yqv2" style="margin-left: 2vw; margin-top: 3vh;"><div class="setting-item svelte-q4yqv2"><p>Dark Mode</p>
        <button id="darkmode" class="item svelte-q4yqv2">Turn on/off</button></div>
      <div class="setting-item svelte-q4yqv2"><p class="item svelte-q4yqv2">Change Username</p>
        <form action="?/changeName" method="POST"><input type="text" name="username" id="username" class="input item svelte-q4yqv2" placeholder="New username" maxlength="14">
          <button type="submit" class="item svelte-q4yqv2">submit</button></form></div>
      <div><form action="?/changePass" method="POST"><input type="password" name="old-pass" id="old-pass" class="input item svelte-q4yqv2" placeholder="Old Password">
          <input type="password" name="new-pass" id="new-pass" class="input item svelte-q4yqv2" placeholder="New Password">
          <button type="submit" class="item svelte-q4yqv2">submit</button></form></div>
      <div class="setting-item svelte-q4yqv2"><form action="?/deleteAccount" method="POST"><button id="delete" type="button" class="item svelte-q4yqv2">Delete Account</button>
          <button id="confirm" type="button" class="item hidden svelte-q4yqv2">Cancel
          </button>
          <button id="cancel" type="submit" class="item hidden svelte-q4yqv2">Confirm
          </button></form></div></form></div>
</div>`;
});
export {
  Page as default
};
