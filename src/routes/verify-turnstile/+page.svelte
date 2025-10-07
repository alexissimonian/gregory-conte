<script>
    import { onMount } from "svelte";
    import { PUBLIC_TURNSTILE_SITE_KEY } from "$env/static/public";

    let turnstileToken = "";
    let turnstileContainer;
    let formElement;

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
                    formElement.submit();
                },
                theme: "light",
            });
        };
    });
</script>

<div class="faux-body">
    <section>
        <form method="POST" bind:this={formElement}>
            <div bind:this={turnstileContainer}></div>
            <input
                type="hidden"
                name="cf-turnstile-response"
                bind:value={turnstileToken}
            />
        </form>
    </section>
</div>
