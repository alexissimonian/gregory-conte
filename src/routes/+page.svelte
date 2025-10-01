<script>
    import GregButton from "$lib/components/GregButton.svelte";
</script>

<header>
    <h2>Grégory Simonian</h2>
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
    <p>
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
    <div>
        <div>
            <h3>spectacles de contes</h3>
            <p>
                Écouter un conte, c'est ouvrir une porte vers des mondes
                inattendus et s'émerveiller ensemble. Un moment de partage
                simple et authentique qui nous reconnecte à la saveur des
                histoires. Des spectacles pour tous les âges, des tout-petits
                aux très grands.
            </p>
            <GregButton page="spectacles" label="En Savoir Plus" />
        </div>
        <div>
            <h3>ateliers d&#x2019écriture</h3>
            <p>
                Créer des contes nous plonge au cœur de notre imaginaire, où
                naissent des histoires drôles, surprenantes et révélatrices.
                Atelier accessible à tous, qui s’adapte à chaque participant.
                Découvrez les bases de la narration et repartez avec votre
                propre conte.
            </p>
            <GregButton page="ateliers" label="En Savoir Plus" />
        </div>
    </div>
</section>
