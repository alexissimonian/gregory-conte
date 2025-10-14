import { redirect } from "@sveltejs/kit";
async function handle({ event, resolve }) {
  const verified = event.cookies.get("verificationSiRobot");
  if (event.url.pathname.includes("contact")) {
    if (!verified) {
      throw redirect(303, "/verify-turnstile");
    }
  }
  return resolve(event);
}
export {
  handle
};
