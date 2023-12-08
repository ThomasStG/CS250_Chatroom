import { c as create_ssr_component, d as add_attribute, i as each, e as escape } from "../../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let username = "";
  let chatname = "";
  let userNames = [];
  let addedUsers = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-4"><div class="mb-4"><h1 class="text-lg font-semibold">Create Chatroom</h1>
    <div class="flex gap-2 items-center mt-2"><input class="border p-2 rounded" placeholder="User Name"${add_attribute("value", username, 0)}>
      <button class="bg-blue-500 text-white rounded p-2 hover:bg-blue-600" type="submit">Search</button></div></div>

  <div class="mb-4">${each(userNames, (id) => {
    return `<div class="flex gap-2 items-center"><p class="mr-2">${escape(id)}</p>
        <button class="bg-green-500 text-white rounded p-2 hover:bg-green-600">Add to Groupchat </button>
      </div>`;
  })}</div>

  ${addedUsers.length > 0 ? `<div class="mb-4"><h2 class="text-lg font-semibold">Added to groupchat:</h2>
      ${each(addedUsers, (id) => {
    return `<p>${escape(id)}</p>`;
  })}
      <div class="flex gap-2 items-center mt-2"><h2 class="text-lg font-semibold">Chatroom name</h2>
        <input class="border p-2 rounded" placeholder="Chatname" maxlength="14"${add_attribute("value", chatname, 0)}>
        ${``}</div></div>` : ``}</div>`;
});
export {
  Page as default
};
