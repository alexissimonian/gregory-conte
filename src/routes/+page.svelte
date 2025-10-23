<script>
  import GregButton from "$lib/components/GregButton.svelte";
</script>

<svelte:head>
  <title>Bienvenue sur Grégory Raconte</title>
  <meta
    name="description"
    content="Conteur professionel, je propose des récits puisés dans le répertoire traditionnel pour le jeune public ou pour les adultes. Mes spectacles et ateliers inclusifs sont adaptés à tous les publics et à chaque lieu. Contactez moi!"
  />
</svelte:head>

<header id="main-header">
  <div id="titleAndCta">
    <h2 class="no-underline">Grégory Simonian</h2>
    <GregButton />
  </div>
</header>
<div class="faux-body">
  <section>
    <header>
      <h2>conteur</h2>
    </header>
    <div>
      <p>
        Je propose des récits puisés dans le répertoire traditionnel pour le
        jeune public ou pour les adultes et des ateliers de création ludiques
        qui vous invitent à donner vie à votre propre conte. Mes spectacles et
        ateliers inclusifs sont adaptés à tous les publics et à chaque lieu.
      </p>
    </div>
  </section>
  <section>
    <p class="poetry-section">
      Transmis par une parole&nbsp;vivante,<br />
      Les contes traversent les siècles et&nbsp;les&nbsp;océans,<br />
      Pour arriver jusqu’à nos&nbsp;oreilles.<br />
      Qu’ont-ils à nous&nbsp;raconter ?
    </p>
  </section>
  <section>
    <div id="two-offers">
      <div class="offer-card">
        <div>
          <h3>spectacles de conte</h3>
        </div>
        <p>
          Écouter un conte, c'est ouvrir une porte vers des mondes inattendus et
          s'émerveiller ensemble. Un moment de partage simple et authentique qui
          nous reconnecte à la saveur des histoires. Des spectacles pour tous
          les âges, des tout-petits aux très grands.
        </p>
        <div class="card-button">
          <GregButton page="spectacles" label="En Savoir Plus" />
        </div>
      </div>
      <div class="offer-card">
        <div>
          <h3>ateliers d&#x2019écriture</h3>
        </div>
        <p>
          Créer des contes nous plonge au cœur de notre imaginaire, où naissent
          des histoires drôles, surprenantes et révélatrices. Atelier accessible
          à tous, qui s’adapte à chaque participant. Découvrez les bases de la
          narration et repartez avec votre propre conte.
        </p>
        <div class="card-button">
          <GregButton page="ateliers" label="En Savoir Plus" />
        </div>
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  p {
    max-width: 50rem;
  }

  h2.no-underline {
    display: block;
  }

  h2.no-underline::after {
    display: none;
  }

  #main-header {
    background-color: black;
    background-image: url("https://images.gregoryraconte.com/main-header-image-black.png");
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: top right;
    height: 38rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 15%;
    box-sizing: border-box;

    @media screen and (max-width: $breakpoint-lg) {
      padding: 0 10%;
    }

    @media screen and (max-width: $breakpoint-md) {
      justify-content: center;
    }

    h2 {
      color: $white-color;
      font-size: $h2-main-header-lg;

      @media screen and (max-width: $breakpoint-xl) {
        font-size: $h2-main-header-md;
      }

      @media screen and (max-width: $breakpoint-md) {
        display: none;
      }
    }

    @media screen and (width <= 1810px) {
      height: 30rem;
    }

    @media screen and (width <= 1500px) {
      height: 25rem;
    }

    @media screen and (width <= 1200px) {
      height: 20rem;
    }

    @media screen and (width <= 900px) {
      height: 17rem;
    }

    @media screen and (max-width: $breakpoint-md) {
      padding: 0 2rem 2rem 2rem;
      background-size: 120%;
      background-position: top center;
    }

    @media screen and (width <= 500px) {
      background-size: 140%;
    }
  }

  #titleAndCta {
    @media screen and (max-width: $breakpoint-md) {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .poetry-section {
    font-size: $p-poetry-lg;
    font-weight: $bold-lg;

    @media screen and (max-width: $breakpoint-xl) {
      font-size: $p-poetry-md;
    }
  }

  #two-offers {
    display: flex;
    text-align: left;
    max-width: $page-max-width-lg;
    gap: $two-offers-gap-lg;

    @media screen and (max-width: $breakpoint-xl) {
      gap: $two-offers-gap-md;
    }

    @media screen and (max-width: $breakpoint-lg) {
      gap: $two-offers-gap-s;
    }

    @media screen and (max-width: $additional-breakpoint-two-offers) {
      gap: $two-offers-gap-xs;
    }

    @media screen and (max-width: $grid-breakpoint-two-offers) {
      display: block;
      text-align: center;
      max-width: $content-max-width-md;
    }
  }

  .offer-card {
    flex: 1;
    padding: $two-offers-padding-lg;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: $breakpoint-lg) {
      padding: $two-offers-padding-md;
    }

    @media screen and (max-width: $breakpoint-s) {
      padding: $two-offers-padding-s;
    }

    h3::after {
      position: absolute;
      content: "";
      height: $underline-height;
      background-color: $yellow-color;
      z-index: -1;
      bottom: $underline-bottom-positioning;
      width: $underline-width;
      left: $underline-overflow;
      right: $underline-overflow;
      border-radius: 0.2em;
    }

    p {
      flex-grow: 1;
      margin-bottom: 2rem;
    }

    .card-button {
      margin-top: auto;
      align-self: flex-start;

      @media screen and (max-width: $grid-breakpoint-two-offers) {
        align-self: center;
      }
    }
  }
</style>
