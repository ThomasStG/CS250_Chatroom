import { c as create_ssr_component, a as subscribe, b as set_store_value, e as escape, d as add_attribute, v as validate_component, n as null_to_empty } from './index3-09a7cb96.js';
import { w as writable } from './index2-a29f3bef.js';
import { c as clsx } from './clsx.m-2bb6df4b.js';
import avatar from 'gradient-avatar';

function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const metadata = writable({});
const site = {
  name: "[Squire]",
  description: "Our project for CS250 using sveltekit, prisma, and tailwind"
};
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email } = $$props;
  let { size } = $$props;
  const userAvatar = (email2) => avatar(email2, size);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div class="overflow-clip rounded-full"><!-- HTML_TAG_START -->${userAvatar(email)}<!-- HTML_TAG_END --></div>`;
});
const css = {
  code: ".dark.svelte-18hhbin{color:white}.light.svelte-18hhbin{color:black}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let showMenu = false;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css);
  return `<nav style="position: fixed; top: 0; left: 0; width: 100%;"><div style="padding: 1rem; lg:padding: 1.25rem; lg:padding-left: 3rem; max-height: 2rem;"><div style="display: flex; align-items: center; justify-content: space-between; max-height: 2rem;"><div style="margin-left: 0.5rem; display: flex; align-items: center; justify-content: flex-start;"><a href="/" class="flex items-center space-x-2">
          <img src="favicon.png">
          <span class="text-md helvetica self-center whitespace-nowrap font-semibold" style="font-family: Helvetica, sans-serif;">[Squire]
          </span></a></div>
      <div style="display: flex; gap: 16px; justify-content: center;"><a class="btn dark svelte-18hhbin" href="/chatrooms" id="Nav-Chat">Chatrooms</a>
        <a class="btn dark svelte-18hhbin" href="/friends" id="Nav-Friend">Friends</a>
        <a class="btn dark svelte-18hhbin" href="/notifications" id="Nav-Notify">Notifications</a>
        ${user.id == 2 ? `<a class="btn dark svelte-18hhbin" href="/sendNot" id="Nav-Send">send</a>` : ``}
        <a class="btn dark svelte-18hhbin" href="/globalChat" id="global-chat">global-chat</a></div>
      <div class="flex items-center">
        <div class="relative ml-3 flex items-center"><div><button type="button" class="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2"><span class="sr-only">Open user menu</span>
              ${validate_component(Avatar, "Avatar").$$render($$result, { email: user.email, size: 32 }, {}, {})}</button></div>
          
          <div class="${escape(null_to_empty(clsx("fixed right-5 top-9 z-50 my-4 list-none divide-y divide-gray-100 rounded border bg-white text-base shadow-lg", { visible: showMenu, invisible: !showMenu })), true) + " svelte-18hhbin"}" id="dropdown-2"><div class="px-4 py-3" role="none">
              <p class="truncate text-sm font-medium text-gray-900" role="none">${escape(user.email)}</p></div>
            <ul class="py-1" role="none"><li><a href="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a></li>
              <li><a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log out</a></li></ul></div></div></div></div></div>
</nav>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="container mx-auto px-4 pt-24" style="height: 100%; width: 100%">${slots.default ? slots.default({}) : ``}</div></main>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let description;
  let $metadata, $$unsubscribe_metadata;
  $$unsubscribe_metadata = subscribe(metadata, (value) => $metadata = value);
  let { data } = $$props;
  beforeNavigate(() => {
    set_store_value(metadata, $metadata = {}, $metadata);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  title = $metadata.title ? $metadata.title + " | " + site.name : site.name;
  description = $metadata.description ?? site.description;
  $$unsubscribe_metadata();
  return `${$$result.head += `<!-- HEAD_svelte-1law5hj_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><!-- HEAD_svelte-1law5hj_END -->`, ""}

<div class="min-h-full">${validate_component(Navbar, "Navbar").$$render($$result, { user: data.user }, {}, {})}
  ${validate_component(Main, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c0332a13.js.map
