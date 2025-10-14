import { x as attr, v as pop, t as push } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let turnstileToken = "";
  $$payload.out.push(`<div class="faux-body"><section><form method="POST"><div></div> <input type="hidden" name="cf-turnstile-response"${attr("value", turnstileToken)}/></form></section></div>`);
  pop();
}
export {
  _page as default
};
