<script>
  import {
    PUBLIC_PHONE_NUMBER,
    PUBLIC_EMAIL_ADDRESS,
  } from "$env/static/public";
</script>

<svelte:head>
  <title>Grégory Raconte: Conteur Professionnel</title>
  <meta
    name="description"
    content="Contactez Grégory Simonian pour vos spectacles de conte ou ateliers d'écriture. Par téléphone ou email. Devis gratuit et projets sur mesure."
  />
</svelte:head>

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
        <p>{PUBLIC_PHONE_NUMBER}</p>
      </div>
      <div class="contact-card">
        <img
          src="https://images.gregoryraconte.com/icons8-email-100.png"
          alt="email-logo"
        />
        <p>{PUBLIC_EMAIL_ADDRESS}</p>
      </div>
    </div>
  </section>
</div>

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
