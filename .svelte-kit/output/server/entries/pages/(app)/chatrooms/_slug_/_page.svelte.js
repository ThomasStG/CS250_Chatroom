import { c as create_ssr_component, d as add_attribute, e as escape, i as each, v as validate_component } from "../../../../../chunks/index3.js";
import "devalue";
const _slug_ = "";
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".close.svelte-e9s364{position:absolute;right:4px;top:0}dialog.svelte-e9s364{border-radius:0.2em;border:none;padding:0}button.svelte-e9s364{display:block}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css);
  return `
<dialog class="svelte-e9s364"${add_attribute("this", dialog, 0)}>
  <div>${slots.header ? slots.header({}) : ``}
    <hr>
    ${slots.default ? slots.default({}) : ``}
    <hr>
    
    <div><button class="close svelte-e9s364">X</button></div></div>
</dialog>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let messages;
  let roomName;
  let userId;
  let roomId;
  let { data } = $$props;
  let modals = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ messages, roomName, userId, roomId } = data);
    $$rendered = `<div class="background flex min-h-screen flex-col items-center">${roomName && roomName.name ? `<h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">Room: ${escape(roomName.name)}</h1>
  <div class="flex items-center"><a href="/chatrooms" class="mb-2 mr-4 text-3xl font-extrabold md:text-4xl lg:text-2xl" style="text-align: left">Back</a>
    <h1 class="mb-4 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">Messages
    </h1>
    <a href="${escape(roomId, true) + "/edit"}">edit</a></div>` : ``}
  <div class="mx-auto max-w-3xl items-center">${messages ? `${each(messages, (message) => {
      return `<div class="message-list"><p>Message: ${escape(message.content)}</p>

          ${message.sentAt ? `<p>Time: ${escape(message.sentAt)}</p>` : ``}
          ${message.updatedAt ? `<p>Updated at: ${escape(message.updatedAt)}</p>` : ``}
          ${userId == message.sender.id ? `<div style="display: flex;"><button class="message-button">Edit Message</button>
              <form action="?/deleteMessage" method="POST"><button type="submit" class="message-button">Delete Message
                </button>
                <input type="hidden" id="messageId" name="messageId"${add_attribute("value", message.id, 0)}>
              </form></div>
            ${modals[message.id] ? `${validate_component(Modal, "Modal").$$render(
        $$result,
        { showModal: modals[message.id] },
        {
          showModal: ($$value) => {
            modals[message.id] = $$value;
            $$settled = false;
          }
        },
        {
          header: () => {
            return `<h2 slot="header">Edit Message</h2>`;
          },
          default: () => {
            return `<div class="modal-size"><body><form action="?/editMessage" method="POST"><div>
                        <textarea rows="10" cols="44" autofocus id="message" name="message" class="modal-text">${escape("")}</textarea>
                        
                        <input type="hidden" id="messageId" name="messageId"${add_attribute("value", message.id, 0)}></div>
                      <button class="bottom" type="submit">Submit</button></form>
                  </body></div>
              `;
          }
        }
      )}` : ``}` : ``}
        </div>`;
    })}` : ``}</div>
  <div><form action="?/sendMessage" method="POST" class="mx-auto flex h-full max-w-3xl items-center" id="sendForm"><input type="text" id="content" name="content" placeholder="Enter message" class="flex-1 rounded-l-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required>
      <button type="submit" id="submit" class="rounded-r-lg bg-blue-500 px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" style="color:inherit">send
      </button></form></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
