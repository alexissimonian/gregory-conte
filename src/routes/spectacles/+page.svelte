<script>
    import GregButton from "$lib/components/GregButton.svelte";
    const services = [
        {
            icon: "https://images.gregoryconte.com/elderly.png",
            title: "Maisons de retraite",
            description:
                "Stimuler les sens et émotions des résidents, éveiller curiosité et culture, et créer un moment d’échange chaleureux.",
        },
        {
            icon: "https://images.gregoryconte.com/mortarboard.png",
            title: "Écoles",
            description:
                "Des instants de langage, d’imagination et de partage, en maternelle et élémentaire, intégrés aux projets pédagogiques pour favoriser cohésion, émotions et ouverture culturelle.",
        },
        {
            icon: "https://images.gregoryconte.com/library.png",
            title: "Médiathèques",
            description:
                "Valoriser la culture orale et écrite dans un moment d’échange et de créativité. J’adapte mes récits et animations aux différents profils du public accueilli par la médiathèque.",
        },
        {
            icon: "https://images.gregoryconte.com/hospital.png",
            title: "Hopitaux",
            description:
                "Apaisement, créativité et partage pour soutenir patients, familles et ambiance hospitalière, au chevet comme en collectif.",
        },
        {
            icon: "https://images.gregoryconte.com/heart.png",
            title: "Associations",
            description:
                "Répondre aux divers besoins selon le public et les objectifs de votre association.",
        },
        {
            icon: "https://images.gregoryconte.com/woman.png",
            title: "Particuliers",
            description:
                "Je viens chez vous ou à votre événement pour partager ensemble un instant suspendu, hors du quotidien.",
        },
    ];
</script>

<div class="faux-body">
    <section>
        <header>
            <h2>Spectacles</h2>
        </header>
        <div>
            <p>
                Les spectacles durent une heure et se composent de plusieurs
                contes. Chaque conte est issu de la tradition orale, un héritage
                ancien qui traverse les âges et les cultures. Puisant dans cette
                source commune à l’humanité, je crée des récits originaux, où
                ces histoires millénaires se racontent encore aujourd’hui.
            </p>
        </div>
    </section>
    <section>
        <header>
            <h2>Pour Qui ?</h2>
        </header>
        <div>
            <p>
                A ma ceinture deux besaces fidèles, chacune remplie de récits
                adaptés à différents publics. Des histoires courtes,
                interactives et pleines de couleurs, idéales pour les
                tout-petits. Des contes plus longs, parfaits pour les adultes,
                les adolescents et les grands enfants.
            </p>
        </div>
        <div id="service-grid">
            {#each services as service}
                <div class="service-card">
                    <div class="service-title">
                        <img
                            class="service-icon"
                            src={service.icon}
                            alt={"icone pour " + service.title}
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
<div class="additionnal-content"></div>

<style>
    .faux-body {
        background: linear-gradient(
            180deg,
            #b1e1f9 0%,
            #c0e4d9 60%,
            #f8eed3 100%
        );
    }

    #service-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        margin: 4rem 0;
        text-align: left;

        .service-title {
            display: flex;
            gap: 1rem;

            img {
                height: 40px;
            }
        }
    }
</style>
