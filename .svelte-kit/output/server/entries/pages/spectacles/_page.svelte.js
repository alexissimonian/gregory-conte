import { w as ensure_array_like, x as attr, y as attr_class, G as attr_style, J as stringify } from "../../../chunks/index2.js";
import { G as GregButton } from "../../../chunks/GregButton.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload) {
  const services = [
    {
      icon: "https://images.gregoryconte.com/elderly.png",
      title: "Maisons de retraite",
      description: "Stimuler les sens et émotions des résidents, éveiller curiosité et culture, et créer un moment d’échange chaleureux."
    },
    {
      icon: "https://images.gregoryconte.com/mortarboard.png",
      title: "Écoles",
      description: "Des instants de langage, d’imagination et de partage, en maternelle et élémentaire, intégrés aux projets pédagogiques pour favoriser cohésion, émotions et ouverture culturelle."
    },
    {
      icon: "https://images.gregoryconte.com/library.png",
      title: "Médiathèques",
      description: "Valoriser la culture orale et écrite dans un moment d’échange et de créativité. J’adapte mes récits et animations aux différents profils du public accueilli par la médiathèque."
    },
    {
      icon: "https://images.gregoryconte.com/hospital.png",
      title: "Hopitaux",
      description: "Apaisement, créativité et partage pour soutenir patients, familles et ambiance hospitalière, au chevet comme en collectif."
    },
    {
      icon: "https://images.gregoryconte.com/heart.png",
      title: "Associations",
      description: "Répondre aux divers besoins selon le public et les objectifs de votre association."
    },
    {
      icon: "https://images.gregoryconte.com/woman.png",
      title: "Particuliers",
      description: "Je viens chez vous ou à votre événement pour partager ensemble un instant suspendu, hors du quotidien."
    }
  ];
  let activeIndex = 0;
  const storiesExamples = [
    {
      title: "Vietnam",
      image: "https://images.gregoryconte.com/vietnam.png",
      synopsis: `Dans un village où pousse un arbre aux fruits précieux, un corbeau géant apparaît un jour..."Je mange vos fruits, et je vous rembourse avec de l’or."`,
      ending: "Que cache vraiment cette promesse ?",
      textPosition: "top"
    },
    {
      title: "Îles de Pâques",
      image: "https://images.gregoryconte.com/iledepaque.png",
      synopsis: `Tangaroa, dieu des océans, prend la forme d'un phoque pour aller découvrir les Hommes. Pris dans un filet de pêche, la rencontre devient inévitable.`,
      ending: "Comment sera-t-il accueilli ?",
      textPosition: "center-right"
    },
    {
      title: "Tibet",
      image: "https://images.gregoryconte.com/tibet.png",
      synopsis: `Un homme maladroit se fait passer pour un grand devin. Grâce à une chance inespérée, il parvient à faire croire en son mensonge et obtient la renommée`,
      ending: "La chance finira-t-elle par tourner ?",
      textPosition: "top-right"
    }
  ];
  const each_array = ensure_array_like(services);
  const each_array_1 = ensure_array_like(storiesExamples);
  const each_array_2 = ensure_array_like(storiesExamples);
  $$payload.out.push(`<div class="faux-body svelte-b78zxs"><section><header><h2>Spectacles</h2></header> <div><p>Les spectacles durent une heure et se composent de plusieurs
                contes. Chaque conte est issu de la tradition orale, un héritage
                ancien qui traverse les âges et les cultures. Puisant dans cette
                source commune à l’humanité, je crée des récits originaux, où
                ces histoires millénaires se racontent encore aujourd’hui.</p></div></section> <section><header><h2>Pour Qui ?</h2></header> <div><p>A ma ceinture deux besaces fidèles, chacune remplie de récits
                adaptés à différents publics. Des histoires courtes,
                interactives et pleines de couleurs, idéales pour les
                tout-petits. Des contes plus longs, parfaits pour les adultes,
                les adolescents et les grands enfants.</p></div> <div id="service-grid" class="svelte-b78zxs"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    $$payload.out.push(`<div class="service-card"><div class="service-title svelte-b78zxs"><img class="service-icon svelte-b78zxs"${attr("src", service.icon)}${attr("alt", "icone pour " + service.title)}/> <h3>${escape_html(service.title)}</h3></div> <p class="service-description">${escape_html(service.description)}</p></div>`);
  }
  $$payload.out.push(`<!--]--></div> <div id="services-cta">`);
  GregButton($$payload, { label: "Contactez-moi" });
  $$payload.out.push(`<!----></div></section></div> <div class="additional-content"><section id="carousel-section" class="svelte-b78zxs"><header><h2>Les Contes</h2> <p>Voici un apperçu de quelques récits parmi ceux que je raconte.</p></header> <div class="tabs svelte-b78zxs"><!--[-->`);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let story = each_array_1[i];
    $$payload.out.push(`<button${attr_class("svelte-b78zxs", void 0, { "active": i === activeIndex })}><span class="svelte-b78zxs">${escape_html(story.title)}</span></button>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="carousel svelte-b78zxs"><!--[-->`);
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let story = each_array_2[i];
    $$payload.out.push(`<div${attr_class("slide svelte-b78zxs", void 0, {
      "active": i === activeIndex,
      "before": i < activeIndex,
      "after": i > activeIndex
    })}${attr_style(`background-image: url(${stringify(story.image)}); background-position: ${stringify(story.title === "Vietnam" ? "center 35%" : "top")};`)}><div${attr_class("slide-content svelte-b78zxs", void 0, {
      "position-top": story.textPosition === "top",
      "position-center-right": story.textPosition === "center-right",
      "position-top-right": story.textPosition === "top-right"
    })}><p class="svelte-b78zxs">${escape_html(story.synopsis)}</p> <p class="svelte-b78zxs"><strong>${escape_html(story.ending)}</strong></p></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></section></div>`);
}
export {
  _page as default
};
