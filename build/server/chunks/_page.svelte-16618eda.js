import { c as create_ssr_component, e as escape, d as add_attribute } from './index3-09a7cb96.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let notification;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ notification } = data);
  return `<div class="background flex min-h-screen flex-col items-center"><div class="flex items-center"><a href="/notifications" class="mb-2 mr-4 text-3xl font-extrabold md:text-4xl lg:text-2xl" style="text-align: left">Back</a>
    <h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">Message
    </h1></div>

  <div class="message-list mx-auto max-w-3xl items-center">${notification ? `<p>Message: ${escape(notification.content)}</p>
      <p style="color: inherit;">Sender: ${escape(notification.senderName)}</p>

      ${notification.sentAt ? `<p style="color: inherit;">Time: ${escape(notification.sentAt)}</p>` : ``}
      <form action="?/deleteMessage" method="POST" style="border: 4px; border-color: green;"><button type="submit" class="chatbuttons-s">Delete Message </button>
        <input type="hidden" id="messageId" name="messageId"${add_attribute("value", notification.id, 0)}></form>` : ``}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-16618eda.js.map
