import { K as bind_props, v as pop, t as push } from "./index2.js";
import { j as fallback } from "./utils2.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import { e as escape_html } from "./escaping.js";
import "clsx";
import "./state.svelte.js";
function GregButton($$payload, $$props) {
  push();
  let page = fallback($$props["page"], "contact");
  let label = fallback($$props["label"], "Contactez-moi");
  $$payload.out.push(`<button class="svelte-izmy53">${escape_html(label)}</button>`);
  bind_props($$props, { page, label });
  pop();
}
export {
  GregButton as G
};
