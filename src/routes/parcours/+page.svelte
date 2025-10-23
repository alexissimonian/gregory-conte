<svelte:head>
  <title>Grégory Raconte: mon parcours</title>
  <meta
    name="description"
    content="Conteur professionnel, je détaille mon parcours : ce qui m'a donné envie de me représenter ainsi que mes formations."
  />
</svelte:head>

<div class="faux-body">
  <h1 class="sr-only">Mon Parcours de Conteur Professionnel</h1>
  <section>
    <header>
      <h2>Auprès des autres</h2>
    </header>
    <div>
      <p>
        Avant que le conte ne croise ma route, mon chemin m’a mené au contact
        d’expériences humaines fortes : auprès des aînés, en donnant des cours
        d’histoire dans les maisons de retraite ; auprès des enfants, comme
        professeur des écoles en maternelle et en élémentaire ; et auprès des
        patients, à la médiathèque de l’hôpital Necker. Dans toutes ces
        expériences professionnelles, ce qui me guidait, c’était la rencontre et
        le partage. Ces aventures humaines m’ont appris combien il est essentiel
        de m’adapter aux besoins de chacun.
      </p>
    </div>
  </section>
  <section>
    <header>
      <h2>La rencontre</h2>
    </header>
    <div>
      <p>
        Puis, un jour, le conte est venu frapper à ma porte. J’ai été émerveillé
        par sa force tranquille, sa douceur et par la multitude de réponses
        qu’il semblait offrir à ma vie. J’ai eu envie de transmettre ces
        histoires, de créer des moments de partage et de faire ressentir la joie
        qu’elles apportent. Je me suis formé auprès de conteurs et conteuses, et
        j’ai pris la parole en scène ouverte, dans les écoles, les maisons de
        retraite, les bars et les hôpitaux.
      </p>
    </div>
  </section>
  <section>
    <header>
      <h2>L’écriture</h2>
    </header>
    <div>
      <p>
        Parallèlement, j’ai souhaité partager tout le plaisir et le bien-être
        que l’écriture de contes suscite en moi. En passant par l’imaginaire,
        les contes nous permettent d’utiliser des symboliques puissantes pour
        parler de nous et de la vie avec une perspective nouvelle, à la fois
        ludique et révélatrice. Afin de pouvoir transmettre au mieux cet art,
        j’ai suivi des formations à l’animation d’ateliers d’écriture, auprès de
        l’Esprit-Livre et de la Haute Ecole Léonard de Vinci à Bruxelles. Ces
        formations mettaient un accent particulier sur la mise en place
        d’ateliers d’écriture inclusifs, afin d’accompagner chacun dans
        l’exploration de sa créativité.
      </p>
    </div>
  </section>
  <section>
    <header>
      <h2>L’évidence</h2>
    </header>
    <div>
      <p>
        Après avoir partagé des instants précieux auprès des enfants, des
        personnes âgées et des patients, et après m’être enrichi des savoirs de
        conteurs et conteuses, j’ai choisi de consacrer ma vie à raconter des
        histoires. Aujourd’hui, je parcours différents lieux pour conter et
        animer des ateliers : auprès des tout-petits, des retraités, des
        personnes hospitalisées… Je m’adapte à chacun, convaincu que
        l’imaginaire est un trésor que nous portons tous en nous.
      </p>
    </div>
  </section>
</div>
<div class="additional-content">
  <section>
    <div id="mes-formations-card">
      <header><h2>Mes formations</h2></header>
      <div>
        <ul>
          <li>
            Formation à l’art du conte avec <strong>Sonia Koskas</strong>
            et <strong>Claire Péricard</strong>
          </li>
          <li>
            Formation à l’art du conte avec <strong>Sonia Koskas</strong>
            et <strong>Fabienne Thierry</strong>
          </li>
          <li>Conter au bébé avec <strong>Ralph Nataf</strong></li>
          <li>
            Les ressources du conteur avec <strong>Natalie Léone</strong>
          </li>
          <li>
            De l’écrit à l’oral avec <strong>François Vincent</strong>
          </li>
          <li>
            Travail du conte avec <strong>Martine Compagnon</strong>
          </li>
          <li>
            Animateur d’Ateliers d’écriture auprès de <strong
              >l’Esprit-Livre</strong
            >
          </li>
          <li>
            Formation aux ateliers d’écriture thérapeutique auprès de la <strong
              >Haute Ecole Léonard de Vinci</strong
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  .additional-content {
    #mes-formations-card {
      background-color: #ead7a4;
      border: 1px solid black;
      border-radius: 50px;
      padding: 1rem 0.5rem;
    }

    ul {
      list-style: none;
      padding: 0 2rem;
    }

    li {
      padding-left: 2.5rem;
      background-repeat: no-repeat;
      background-image: url("https://images.gregoryconte.com/certificate.png");
      background-position: left center;
      background-size: 1.8rem;
      text-align: left;
      padding-bottom: 0.9rem;
    }

    @media screen and (max-width: $breakpoint-md) {
      section {
        padding: 2rem 0 2rem 0;
      }

      #mes-formations-card {
        border-radius: 0;
      }

      ul {
        padding: 0 0.3rem;
      }

      li {
        line-height: $line-height-md;
        background-position: left 0.5rem;
      }
    }
  }
</style>
