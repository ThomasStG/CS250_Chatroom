import { c as create_ssr_component, i as each, e as escape, d as add_attribute } from "../../../../chunks/index3.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let friendRequests;
  let friends;
  let userId;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ friendRequests, friends, userId } = data);
  return `<div class="p-4"><h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">Friends
  </h1>

  <div class="mb-4"><div class="text-center text-lg font-medium mb-2">Send Friend Request:</div>
    <form action="?/friendRequest" method="POST" class="w-1/6 mx-auto flex flex-col"><input type="text" id="userName" name="userName" placeholder="Enter User Name" class="p-2 border rounded mb-2">
      <button type="submit" class="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Submit</button></form></div>

  <div class="mb-4"><div class="text-center text-lg font-medium mb-2">Friends:</div>
    ${friends ? `${each(friends, (friend) => {
    return `<div class="flex justify-between items-center mb-2"><div>${escape(friend.username)}</div>
          <div>${escape(friend.email)}</div>
          <form action="?/removeFriend" method="post" class="text-red-500"><input type="hidden" id="friendID" name="friendID"${add_attribute("value", friend.id, 0)}>
            <button type="submit" class="underline">Remove Friend</button></form>
        </div>`;
  })}` : ``}</div>

  <div><div class="text-center text-lg font-medium mb-2">Friend Requests:</div>
    ${friendRequests ? `${each(friendRequests, (friendRequest) => {
    return `<div class="flex items-center justify-center mb-2"><div class="px-5">${escape(friendRequest.from.email)}</div>
          <div>${escape(friendRequest.status)}</div>
          ${friendRequest.fromId != userId ? `<div class="flex gap-2"><form action="?/accept" method="POST"><input type="hidden" name="requestId"${add_attribute("value", friendRequest.id, 0)}>
                <button class="bg-green-500 text-white rounded p-2 hover:bg-green-600">Accept</button></form>
              <form action="?/decline" method="POST"><button class="bg-red-500 text-white rounded p-2 hover:bg-red-600">Decline</button></form>
            </div>` : ``}
        </div>`;
  })}` : ``}</div></div>`;
});
export {
  Page as default
};
