import { redirect } from "@sveltejs/kit";
const SECRET_TURNSTILE_SECRET_KEY = "0x4AAAAAAB2lMws0jcq9LVD2WyH_FIkmXy8";
async function verifyTurnstile(token, remoteip) {
  const formData = new FormData();
  formData.append("secret", SECRET_TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData
  });
  const result = await response.json();
  return result.success === true;
}
const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const turnstileToken = data.get("cf-turnstile-response");
    if (!turnstileToken) {
      return {
        success: false,
        error: "Captcha manquant"
      };
    }
    const isValidCaptcha = await verifyTurnstile(turnstileToken);
    if (!isValidCaptcha) {
      return {
        success: false,
        error: "Captcha invalide"
      };
    }
    cookies.set("verificationSiRobot", "true", {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24
      //24 hours
    });
    throw redirect(303, "/contact");
  }
};
export {
  actions
};
