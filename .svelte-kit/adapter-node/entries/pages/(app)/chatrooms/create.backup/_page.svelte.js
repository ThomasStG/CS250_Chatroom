import { c as create_ssr_component, i as each, e as escape } from "../../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let foundUserCookie;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ foundUserCookie } = data);
  return `<div><h1>Add ChatRoom</h1>
  <form action="?/findUser" method="post"><input placeholder="Search for user" type="text" id="userName" name="userName">
    <button type="submit">search</button></form>

  ${each(foundUserCookie, (foundUserCookie2) => {
    return `${escape(foundUserCookie2.username)}`;
  })}
  //list users found and add
  <form><input placeholder="ChatRoom Name">
    <button>Submit</button></form>
  //list users in chatroom
</div>`;
});
export {
  Page as default
};
