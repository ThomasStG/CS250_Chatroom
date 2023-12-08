import { c as create_ssr_component } from "../../../../chunks/index3.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><form action="?/send" method="POST"><input type="text" name="content" id="content" placeholder="Notification">
    <input type="text" name="id" id="id" placeholder="Id">
    <input type="text" name="sender" id="sender" placeholder="Sender Name">
    <button type="submit" class="item">send</button></form></div>`;
});
export {
  Page as default
};
