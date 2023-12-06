import { c as create_ssr_component, i as each, e as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rooms;
  let usr;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ rooms, usr } = data);
  return `<div><ul class="flex flex-wrap justify-center gap-8 dark:style-light"><li><h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">Chat Rooms
      </h1>

      <div class="mx-auto max-w-3xl">${rooms ? `${each(rooms, (room) => {
    return `${room.Chatroom ? `<a href="${"/chatrooms/" + escape(room.id, true)}" class="block mx-auto mb-4 rounded-lg bg-gray-800 p-6 hover:bg-gray-700"><p class="text-xl text-white">Room Name: ${escape(room.name)}</p>
              </a>` : ``}`;
  })}` : ``}</div>

      <div class="text-center"><a href="/chatrooms/create" class="block mx-auto p-3 rounded bg-blue-500 text-white hover:bg-blue-600"><p>Create a New Chatroom</p></a></div></li>
    <li><h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">Direct Messages
      </h1>

      <div class="mx-auto max-w-3xl">${rooms ? `${each(rooms, (room) => {
    return `${room && room.Chatroom === false ? `<a href="${"/chatrooms/" + escape(room.id, true)}" class="block mx-auto mb-4 rounded-lg bg-gray-800 p-6 hover:bg-gray-700"><p class="text-xl text-white">${usr ? `Friend Name: ${escape(room.name.replace("‎", "").replace(usr.username, ""))}` : ``}</p>
              </a>` : ``}`;
  })}` : ``}</div></li></ul></div>`;
});
export {
  Page as default
};
