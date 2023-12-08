import { c as create_ssr_component, i as each, e as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rooms;
  let usr;
  let { data } = $$props;
  console.log(2);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ rooms, usr } = data);
  return `<div class="min-h-screen bg-gray-900 py-8" style="margin-right: auto; margin-left: auto;"><h1 class="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">Direct Messages
  </h1>

  <div class="mx-auto max-w-3xl" style="left: 50%; justify-content: center; allign-items: center; display: flex;">${each(rooms, (room) => {
    return `${room && room.Chatroom === false ? `<div class="flex" style="position: relative;"><a href="${"/chatrooms/" + escape(room.id, true)}" class="mb-4 block rounded-lg bg-gray-800 p-6 hover:bg-gray-700"><p class="text-xl text-white">Friend Name: ${escape(room.name = (room.name = room.name.replace("‎", "")).replace(usr.username, ""))}
            </p></a>
        </div>` : ``}`;
  })}</div></div>`;
});
export {
  Page as default
};
