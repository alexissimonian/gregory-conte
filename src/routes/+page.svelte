<script>
    import GregButton from "$lib/components/GregButton.svelte";
</script>

<header id="main-header">
    <h2 class="no-underline">Grégory Simonian</h2>
    <GregButton />
</header>
<section>
    <header>
        <h2>conteur · animateur d’ateliers d’écriture</h2>
    </header>
    <div>
        <p>
            Des récits puisés dans le répertoire traditionnel pour le jeune
            public ou pour les adultes. Des ateliers de création ludiques, qui
            vous invitent à donner vie à votre propre conte. Spectacles et
            Ateliers inclusifs, adaptés aux publics et à chaque lieu.
        </p>
    </div>
</section>
<section>
    <p class="poetry-section">
        Transmis par une parole vivante,<br />
        Les contes traversent les siècles et les océans,<br />
        Pour arriver jusqu’à nos oreilles.<br />
        Qu’ont-ils à nous raconter ?
    </p>
</section>
<section>
    <header>
        <h2>toutes les routes mènent à l’imaginaire</h2>
    </header>
    <div id="two-offers">
        <div class="offer-card">
            <h3>spectacles de contes</h3>
            <p>
                Écouter un conte, c'est ouvrir une porte vers des mondes
                inattendus et s'émerveiller ensemble. Un moment de partage
                simple et authentique qui nous reconnecte à la saveur des
                histoires. Des spectacles pour tous les âges, des tout-petits
                aux très grands.
            </p>
            <div class="card-button">
                <GregButton
                    page="spectacles"
                    label="En Savoir Plus"
                />
            </div>
        </div>
        <div class="offer-card">
            <h3>ateliers d&#x2019écriture</h3>
            <p>
                Créer des contes nous plonge au cœur de notre imaginaire, où
                naissent des histoires drôles, surprenantes et révélatrices.
                Atelier accessible à tous, qui s’adapte à chaque participant.
                Découvrez les bases de la narration et repartez avec votre
                propre conte.
            </p>
            <div class="card-button">
                <GregButton page="ateliers" label="En Savoir Plus" />
            </div>
        </div>
    </div>
</section>

<style>
    p {
        max-width: 800px;
    }

    h2.no-underline {
        display: block;
    }

    h2.no-underline::after {
        display: none;
    }

    #main-header{
        background-color: black;
        background-image: url("https://images.gregoryconte.com/main-header-image-black.png");
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: top right;
        height: 600px;
        overflow: hidden;

        h2 {
            color: white;
        }
    }

    .poetry-section {
        font-size: 18px;
        font-weight: 600;
    }

    #two-offers {
        display: flex;
        text-align: left;
        max-width: 1000px;
        gap: 4rem;
    }

    .offer-card {
        flex: 1;
        padding: 2rem;
        display: flex;
        flex-direction: column;


        p {
            flex-grow: 1;
            margin-bottom: 2rem;
        }

        .card-button {
            margin-top: auto;
            align-self: flex-start;
        }
    }
</style>
