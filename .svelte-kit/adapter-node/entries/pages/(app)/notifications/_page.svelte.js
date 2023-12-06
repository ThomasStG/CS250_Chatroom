import { c as create_ssr_component, i as each, e as escape } from "../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".list.svelte-1uwsb12{display:flex;flex-direction:column;gap:80px;flex-wrap:wrap;justify-content:center;align-items:flex-start}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userId;
  let notifications;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ userId, notifications } = data);
  return `<div class="background"><h1>Notifications</h1>
  <div style="margin-left:auto; margin-right:auto; width:35%;"><div style="display: flex; flex-direction: column; justify-content:center;">${each(notifications, (notification) => {
    return `<div class="list svelte-1uwsb12"><div><a href="${"/notifications/" + escape(notification.id, true)}" class="chatbuttons"><p>sender: ${escape(notification.senderName)}</p>
              <p>sent at: ${escape(notification.sentAt)}</p>
            </a></div>
        </div>`;
  })}
      ${notifications.length == 0 ? `<span style="text-align:center; font-size:x-large" class="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">No Notifications Yet!</span>` : ``}</div></div>
</div>`;
});
export {
  Page as default
};
