import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../../../../chunks/index3.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let room;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ room } = data);
  return `${room && room.name ? `<a href="${"/chatrooms/" + escape(room.id, true)}">back</a>
<h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">Edit Chatroom: ${escape(room.name || "Unnamed Room")}</h1>


<div style="display: flex; flex-direction: column; align-items: center; height: 100vh;"><div class="mb-2 text-2xl">Change Chatroom Name</div>
    <form action="?/rename" method="POST" class="flex" style="margin-bottom: 12px;"><input id="newName" name="newName" maxlength="15"${add_attribute("value", room.name, 0)}>
      <button id="renamebutton" type="submit">Rename</button></form>
    <div class="mb-2 text-2xl">Add user to chatroom</div>
    <div>//TODO: use the searchFriend API to add a single user at a time to the
      chatroom (parseInt(params.slug))
    </div>

    <form action="?/exit" method="POST"><input type="hidden" name="room"${add_attribute("value", room.id, 0)}>
      <button type="submit" id="chatexit" class="chatbuttons">Exit Room</button></form></div>` : ``}`;
});
export {
  Page as default
};
