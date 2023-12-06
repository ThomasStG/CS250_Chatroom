import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { A as Alert } from "../../../../chunks/Alert.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pb-24 md:h-screen"><a href="/" class="mb-8 flex items-center justify-center text-2xl font-semibold lg:mb-10"><img src="/favicon.png" class="mr-4 h-11" alt="Squire Logo">
    <span>[Squire]</span></a>
  
  <div class="w-full max-w-xl space-y-8 rounded-md border p-6 shadow sm:p-8" style="background: #202020; border-color:#303040; border-width:5px;"><h2 class="text-2xl font-bold">Create a new account</h2>

    ${form?.error?.message ? `${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      type: "danger",
      description: form.error.message
    },
    {},
    {}
  )}` : ``}

    <form action="?/register" method="POST" class="mt-8 space-y-6"><div><label for="email" class="mb-2 block text-sm font-medium">Email
        </label>
        <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></div>
      <div><label for="username" class="mb-2 block text-sm font-medium" maxlength="14">User-Name
        </label>
        <input id="username" name="username" type="text" required class="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 focus:border-primary-500 focus:ring-primary-500 sm:text-sm text-gray-900"></div>

      <div><label for="password" class="mb-2 block text-sm font-medium">Password
        </label>
        <input id="password" name="password" type="password" autocomplete="new-password" required class="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></div>

      <div><label for="confirm-password" class="mb-2 block text-sm font-medium">Confirm password
        </label>
        <input id="password-confirmation" name="password-confirmation" type="password" autocomplete="new-password" required class="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></div>

      <button type="submit" class="w-full rounded-md bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto">Create account
      </button>

      <div class="text-sm font-medium text-gray-500">Already have an account? <a href="/login" class="text-primary-700 hover:underline">Login</a></div></form></div></div>`;
});
export {
  Page as default
};
