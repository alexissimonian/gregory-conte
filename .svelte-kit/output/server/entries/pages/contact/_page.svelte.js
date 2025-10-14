import { e as escape_html } from "../../../chunks/escaping.js";
import "clsx";
const PUBLIC_PHONE_NUMBER = "06-19-39-01-68";
const PUBLIC_EMAIL_ADDRESS = "simoniangregory@gmail.com";
function _page($$payload) {
  $$payload.out.push(`<div class="faux-body"><section><header><h2>Contactez-moi !</h2></header> <div><p>Je serais ravi d'échanger avec vous. <br/> Appelez-moi au numéro suivant <strong>${escape_html(PUBLIC_PHONE_NUMBER)}</strong>.</p> <p>Ou envoyez-moi un email à <strong>${escape_html(PUBLIC_EMAIL_ADDRESS)}</strong></p></div></section></div>`);
}
export {
  _page as default
};
