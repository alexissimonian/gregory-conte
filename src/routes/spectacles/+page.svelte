<script lang="ts">
  import GregButton from "$lib/components/GregButton.svelte";
  const services = [
    {
      icon: "https://images.gregoryraconte.com/elderly.png",
      title: "EHPAD",
      description:
        "Stimuler les sens et émotions des résidents, éveiller curiosité et culture, et créer un moment d’échange chaleureux.",
    },
    {
      icon: "https://images.gregoryraconte.com/mortarboard.png",
      title: "Écoles",
      description:
        "Des instants de langage, d’imagination et de partage, en maternelle et élémentaire, intégrés aux projets pédagogiques pour favoriser cohésion, émotions et ouverture culturelle.",
    },
    {
      icon: "https://images.gregoryraconte.com/library.png",
      title: "Médiathèques",
      description:
        "Valoriser la culture orale et écrite dans un moment d’échange et de créativité. J’adapte mes récits et animations aux différents profils du public accueilli par la médiathèque.",
    },
    {
      icon: "https://images.gregoryraconte.com/hospital.png",
      title: "Hopitaux",
      description:
        "Apaisement, créativité et partage pour soutenir patients, familles et ambiance hospitalière, au chevet comme en collectif.",
    },
    {
      icon: "https://images.gregoryraconte.com/heart.png",
      title: "Associations",
      description:
        "Répondre aux divers besoins selon le public et les objectifs de votre association.",
    },
    {
      icon: "https://images.gregoryraconte.com/woman.png",
      title: "Particuliers",
      description:
        "Je viens chez vous ou à votre événement pour partager ensemble un instant suspendu, hors du quotidien.",
    },
  ];

  let activeIndex = 0;

  const storiesExamples = [
    {
      title: "Vietnam",
      titleLogo: "https://images.gregoryraconte.com/vitenamlogo.png",
      image: "https://images.gregoryraconte.com/vietnam.png",
      synopsis: `Dans un village où pousse un arbre aux fruits précieux, un corbeau géant apparaît un jour..."Je mange vos fruits, et je vous rembourse avec de l’or."`,
      ending: "Que cache vraiment cette promesse ?",
      textPosition: "top",
    },
    {
      title: "Îles de Pâques",
      titleLogo: "https://images.gregoryraconte.com/ilepaquelogo.png",
      image: "https://images.gregoryraconte.com/iledepaque.png",
      synopsis: `Tangaroa, dieu des océans, prend la forme d'un phoque pour aller découvrir les Hommes. Pris dans un filet de pêche, la rencontre devient inévitable.`,
      ending: "Comment sera-t-il accueilli ?",
      textPosition: "center-right",
    },
    {
      title: "Tibet",
      titleLogo: "https://images.gregoryraconte.com/tibetlogo.png",
      image: "https://images.gregoryraconte.com/tibet.png",
      synopsis: `Un homme maladroit se fait passer pour un grand devin. Grâce à une chance inespérée, il parvient à faire croire en son mensonge et obtient la renommée`,
      ending: "La chance finira-t-elle par tourner ?",
      textPosition: "top-right",
    },
  ];

  function changeStory(index: number) {
    activeIndex = index;
  }
</script>

<div class="faux-body">
  <section>
    <header>
      <h2>Spectacles</h2>
    </header>
    <div>
      <p>
        Les spectacles durent une heure et se composent de plusieurs contes.
        Chaque conte est issu de la tradition orale, un héritage ancien qui
        traverse les âges et les cultures. Puisant dans cette source commune à
        l’humanité, je crée des récits originaux, où ces histoires millénaires
        se racontent encore aujourd’hui.
      </p>
    </div>
  </section>
  <section>
    <header>
      <h2>Pour Qui ?</h2>
    </header>
    <div>
      <p>
        A ma ceinture deux besaces fidèles, chacune remplie de récits adaptés à
        différents publics. Des histoires courtes, interactives et pleines de
        couleurs, idéales pour les tout-petits. Des contes plus longs, parfaits
        pour les adultes, les adolescents et les grands enfants.
      </p>
    </div>
    <div id="service-grid">
      {#each services as service}
        <div class="service-card">
          <div class="service-title">
            <img
              class="service-icon"
              src={service.icon}
              alt={"icone " + service.title}
            />
            <h3>{service.title}</h3>
          </div>
          <p class="service-description">{service.description}</p>
        </div>
      {/each}
    </div>
    <div id="services-cta">
      <GregButton label="Contactez-moi" />
    </div>
  </section>
</div>
<div class="additional-content">
  <section id="carousel-section">
    <header>
      <h2>Les Contes</h2>
      <p>Voici un apperçu de quelques récits parmi ceux que je&nbsp;raconte.</p>
    </header>
    <div class="tabs">
      {#each storiesExamples as story, i}
        <button class:active={i === activeIndex} onclick={() => changeStory(i)}>
          <span class="tab-text">{story.title}</span>
          <img class="tab-logo" src={story.titleLogo} alt={story.title} />
        </button>
      {/each}
    </div>
    <div class="carousel">
      {#each storiesExamples as story, i}
        <div
          class="slide"
          class:active={i === activeIndex}
          class:before={i < activeIndex}
          class:after={i > activeIndex}
          style="background-image: url({story.image}); background-position: {story.title ===
          'Vietnam'
            ? 'center 35%'
            : 'top'};"
        >
          <div
            class="slide-content"
            class:position-top={story.textPosition === "top"}
            class:position-center-right={story.textPosition === "center-right"}
            class:position-top-right={story.textPosition === "top-right"}
          >
            <p>{story.synopsis}</p>
            <p class="ending"><strong>{story.ending}</strong></p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style lang="scss">
  #service-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin: 4rem 0;
    text-align: left;

    @media screen and (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }

    .service-title {
      display: flex;
      gap: 1rem;

      img {
        height: 40px;
      }
    }
  }

  .tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 55rem;
    margin: auto;
    padding: 3rem 2rem 1rem 2rem;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: $breakpoint-md) {
      justify-content: center;
      gap: 1rem;
      padding-left: 0rem;
      padding-right: 0rem;
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: $tab-button-size-lg;
      font-weight: $bold-lg;
      font-family: "Inknut Antiqua", sans-serif;
      position: relative;
      z-index: 1;
      text-transform: uppercase;
      color: $black-color;
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;

      .tab-logo {
        display: none;
        height: 3rem;
        object-fit: contain;

        @media screen and (max-width: $breakpoint-md) {
          display: block;
          font-size: 0.8rem;
        }
      }

      .tab-text {
        @media screen and (max-width: $breakpoint-md) {
          display: none;
        }
      }
    }

    button.active::after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: -2.5rem;
      height: 0px;
      width: 0px;
      left: 50%;
      transform: translateX(-50%);
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-top: 30px solid #f8eed3;
    }

    button span {
      position: relative;
    }

    button.active span::after {
      position: absolute;
      content: "";
      height: 0.5em;
      background-color: $yellow-color;
      z-index: -1;
      bottom: 0.6em;
      width: $underline-width;
      left: -0.3em;
      right: -0.3em;
      border-radius: 0.2em;
    }
  }

  #carousel-section {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    width: 100%;
    max-width: none;

    p {
      max-width: $content-max-width-lg;
      padding: 0 2em;
      margin: $section-margin;
      line-height: $line-height-lg;
      text-align: center;

      @media screen and (max-width: $breakpoint-lg) {
        max-width: $content-max-width-md;
      }

      @media screen and (max-width: $breakpoint-md) {
        line-height: $line-height-md;
      }
    }
  }

  .carousel {
    position: relative;
    overflow: hidden;
    height: 75dvh;
  }

  .slide {
    position: absolute;
    inset: 0;
    transition: transform 0.5s ease-in-out;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2rem;

    .slide-content p.ending {
      margin-top: 1rem !important;
    }

    .slide-content.position-top {
      position: absolute;
      padding: 2rem;
      top: 3rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      max-width: 45rem;
      width: 100%;
    }

    .slide-content.position-center-right {
      position: absolute;
      padding: 2rem;
      top: 3rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      max-width: 45rem;
      width: 100%;
    }

    .slide-content.position-top-right {
      position: absolute;
      top: 4rem;
      right: 1rem;
      max-width: 35rem;

      @media screen and (max-width: 1050px) {
        right: 0;
        position: absolute;
        padding: 2rem;
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        max-width: 45rem;
        width: 100%;
      }
    }
  }
  .slide.active {
    transform: translateX(0);
  }

  .slide.before {
    transform: translateX(-100%);
  }

  .slide.after {
    transform: translateX(100%);
  }

  .slide:nth-child(1) {
    @media screen and (max-width: 500px) {
      background-image: url("https://images.gregoryraconte.com/vietnam-mobile.png") !important;
      background-position: top !important;
    }
  }
  .slide:nth-child(2) {
    @media screen and (max-width: 1100px) {
      background-image: url("https://images.gregoryraconte.com/ilepaques-mobile.png") !important;
    }
  }
  .slide:nth-child(3) {
    @media screen and (max-width: 1050px) {
      background-image: url("https://images.gregoryraconte.com/tibet-mobile.png") !important;
    }
  }
</style>
