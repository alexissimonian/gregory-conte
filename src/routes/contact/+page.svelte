<script lang="ts">
  import { onMount } from "svelte";
  import { PUBLIC_TURNSTILE_SITE_KEY } from "$env/static/public";
  import type { PageData } from "./$types";

  export let data: PageData;

  let turnstileToken = "";
  let turnstileContainer;
  let formElement;

  onMount(() => {
    // Only load Turnstile if not validated
    if (!data.isValidated) {
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
    }
  });
</script>

<svelte:head>
  <title>Grégory Raconte: Conteur Professionnel</title>
  <meta
    name="description"
    content="Contactez Grégory Simonian pour vos spectacles de conte ou ateliers d'écriture. Par téléphone ou email. Devis gratuit et projets sur mesure."
  />
</svelte:head>

{#if !data.isValidated}
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
{:else}
  <div class="faux-body">
    <section>
      <header>
        <h1>
          Contactez-moi<span class="sr-only">
            - Grégory Simonian: Conteur Professionnel</span
          >
        </h1>
      </header>
      <div>
        <p>
          Je serais ravi d'échanger avec vous. <br />
          Appelez-moi ou envoyez-moi un email !
        </p>
      </div>
      <div class="contact-cards-container">
        <div class="contact-card">
          <img
            src="https://images.gregoryraconte.com/icons8-phone-100.png"
            alt="phone-logo"
          />
          <p>{data.phoneNumber}</p>
        </div>
        <div class="contact-card">
          <img
            src="https://images.gregoryraconte.com/icons8-email-100.png"
            alt="email-logo"
          />
          <p>{data.emailAddress}</p>
        </div>
      </div>
    </section>
  </div>
{/if}

<style lang="scss">
  p {
    text-align: center;
  }
  .contact-cards-container {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    flex-wrap: wrap;
  }
  .contact-card {
    flex: 0 0 auto;
    min-width: 200px;
    p {
      font-weight: $bold-lg;
    }
  }
</style>
