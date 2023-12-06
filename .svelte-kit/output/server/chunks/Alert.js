import { c as create_ssr_component, d as add_attribute, e as escape } from "./index3.js";
import clsx from "clsx";
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description } = $$props;
  let { type } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div${add_attribute(
    "class",
    clsx("mb-4 rounded-lg p-4  text-sm", {
      "bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800": type == "danger",
      "bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800": type == "success",
      "bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800": type == "info",
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800": type == "warning"
    }),
    0
  )} role="alert">${title && title != "" ? `<span class="font-medium">${escape(title)}!</span>` : ``}

  ${escape(description)}</div>`;
});
export {
  Alert as A
};
