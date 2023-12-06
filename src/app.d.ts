// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    user: {
      email: string;
      id: int;
    };
    foundUser: {
      username: string;
      id: int;
    };
  }

  interface Error {
    message: string;
  }

  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
}
