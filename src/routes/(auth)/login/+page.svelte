<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
  import Alert from "$lib/components/Alert.svelte";
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pb-24 md:h-screen">
  <a href="/" class="mb-8 flex items-center justify-center text-2xl font-semibold lg:mb-10">
  <a href="/" class="mb-8 flex items-center justify-center text-2xl font-semibold lg:mb-10" style="color:#c34a2c">
    <!-- <img src="/images/logo.svg" class="mr-4 h-11" alt="FlowBite Logo" /> -->
    <span>Flowbite</span>
    <span>[Squire]</span>
  </a>
  <div class="w-full max-w-xl space-y-8 rounded-md border p-6 shadow sm:p-8">
    <h2 class="text-2xl font-bold text-gray-900">Sign in to platform</h2>
    <h2 class="text-2xl font-bold text-yellow-900" style="color:#c34a2c">[sign_into_squire]</h2>

    {#if form?.error?.message}
      <Alert type="danger" description={form.error.message} />
@@ -37,43 +37,44 @@
      }}
    >
      <div>
        <label for="email" class="mb-2 block text-sm font-medium text-gray-900"> Email </label>
        <label for="email" class="mb-2 block text-sm font-bold text-yellow-900" style="color:#c34a2c"> [email] </label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          class="block w-full rounded-md border border-black-300 bg-coral-50 p-2.5 text-purple-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        />
      </div>

      <div>
        <label for="password" class="mb-2 block text-sm font-medium text-gray-900">Password</label>
        <label for="password" class="mb-2 block text-sm font-bold text-yellow-900" style="color:#c34a2c">[password]</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          class="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          class="block w-full rounded-md border border-black-300 bg-coral-50 p-2.5 text-purple-900 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        />
      </div>

      <div class="flex items-start">
        <a href="/forgot-password" class="ml-auto text-sm text-primary-700 hover:underline"> Forgot Password? </a>
        <a href="/forgot-password" class="ml-auto text-sm text-yellow-700 hover:underline"> Forgot Password? </a>
      </div>

      <button
        type="submit"
        class="w-full rounded-md bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto"
        class="w-full rounded-md bg-red-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto"
        style="background-color:#c34a2c"
      >
        Login to your account
      </button>

      <div class="text-sm font-medium text-gray-500">
      <div class="text-sm font-medium text-yellow-500">
        Don't have an account?
        <a href="/register" class="text-primary-700 hover:underline"> Create account </a>
        <a href="/register" class="text-red-700 hover:underline"> Create account! </a>
      </div>
    </form>
  </div>
</div>
