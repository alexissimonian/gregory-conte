import "clsx";
import { G as GregButton } from "../../chunks/GregButton.js";
function _page($$payload) {
  $$payload.out.push(`<header id="main-header" class="svelte-1uha8ag"><div id="titleAndCta"><h2 class="no-underline svelte-1uha8ag">Grégory Simonian</h2> `);
  GregButton($$payload, {});
  $$payload.out.push(`<!----></div></header> <div class="faux-body"><section><header><h2>conteur · animateur d’ateliers d’écriture</h2></header> <div><p class="svelte-1uha8ag">Des récits puisés dans le répertoire traditionnel pour le jeune
                public ou pour les adultes. Des ateliers de création ludiques,
                qui vous invitent à donner vie à votre propre conte. Spectacles
                et Ateliers inclusifs, adaptés aux publics et à chaque lieu.</p></div></section> <section><p class="poetry-section svelte-1uha8ag">Transmis par une parole vivante,<br/> Les contes traversent les siècles et les océans,<br/> Pour arriver jusqu’à nos oreilles.<br/> Qu’ont-ils à nous raconter ?</p></section> <section><header><h2>toutes les routes mènent à l’imaginaire</h2></header> <div id="two-offers" class="svelte-1uha8ag"><div class="offer-card svelte-1uha8ag"><h3>spectacles de contes</h3> <p class="svelte-1uha8ag">Écouter un conte, c'est ouvrir une porte vers des mondes
                    inattendus et s'émerveiller ensemble. Un moment de partage
                    simple et authentique qui nous reconnecte à la saveur des
                    histoires. Des spectacles pour tous les âges, des
                    tout-petits aux très grands.</p> <div class="card-button svelte-1uha8ag">`);
  GregButton($$payload, { page: "spectacles", label: "En Savoir Plus" });
  $$payload.out.push(`<!----></div></div> <div class="offer-card svelte-1uha8ag"><h3>ateliers d’écriture</h3> <p class="svelte-1uha8ag">Créer des contes nous plonge au cœur de notre imaginaire, où
                    naissent des histoires drôles, surprenantes et révélatrices.
                    Atelier accessible à tous, qui s’adapte à chaque
                    participant. Découvrez les bases de la narration et repartez
                    avec votre propre conte.</p> <div class="card-button svelte-1uha8ag">`);
  GregButton($$payload, { page: "ateliers", label: "En Savoir Plus" });
  $$payload.out.push(`<!----></div></div></div></section></div>`);
}
export {
  _page as default
};
