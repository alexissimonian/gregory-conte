<script>
    import { onMount } from "svelte";
    import { PUBLIC_TURNSTILE_SITE_KEY } from "$env/static/public";

    let turnstileToken = "";
    let turnstileContainer;

    onMount(() => {
        // Charger le script Turnstile
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            // @ts-ignore
            window.turnstile.render(turnstileContainer, {
                sitekey: PUBLIC_TURNSTILE_SITE_KEY,
                callback: function (token) {
                    turnstileToken = token;
                },
                theme: "light",
            });
        };
    });

    function handleSubmit(event) {
        if (!turnstileToken) {
            event.preventDefault();
            alert("Veuillez compléter le captcha");
            return;
        }
    }
</script>

<header>
    <h1>Contact</h1>
</header>
<section>
    <div id="contact-form-container">
        <form method="post" on:submit={handleSubmit}>
            <label>Nom <input name="nom" required /></label>
            <label>Prénom <input name="prenom" required /></label>
            <label>Email <input name="email" required /></label>
            <label>Message <textarea name="message" required></textarea></label>

            <div bind:this={turnstileContainer}></div>
            <input
                type="hidden"
                name="cf-turnstile-response"
                bind:value={turnstileToken}
            />

            <button type="submit">Envoyer</button>
        </form>
    </div>
</section>
