import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "devalue";
import { A as Alert } from "../../../../chunks/Alert.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pb-24 md:h-screen"><a href="/" class="mb-8 flex items-center justify-center text-2xl font-semibold lg:mb-10">
    <span style="font-family: Helvetica, sans-serif, Arial">[Squire]</span></a>
  <div class="w-full max-w-xl space-y-8 rounded-md border p-6 shadow sm:p-8" style="background: #202020; border-color:#303040; border-width:5px;"><h2 class="text-2xl font-bold">Sign in to platform</h2>

    ${form?.error?.message ? `${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      type: "danger",
      description: form.error.message
    },
    {},
    {}
  )}` : ``}

    <form class="mt-8 space-y-6" action="?/login" method="POST"><div><label for="email" class="mb-2 block text-sm font-medium">Email
        </label>
        <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></div>

      <div><label for="password" class="mb-2 block text-sm font-medium">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></div>

      <div class="flex items-start"><a href="/forgot-password" class="ml-auto text-sm text-primary-700 hover:underline">Forgot Password?
        </a></div>

      <button type="submit" class="w-full rounded-md bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto">Login to your account
      </button>

      <div class="text-sm font-medium text-gray-500">Don&#39;t have an account?
        <a href="/register" class="text-primary-700 hover:underline">Create account
        </a></div></form></div></div>`;
});
export {
  Page as default
};
