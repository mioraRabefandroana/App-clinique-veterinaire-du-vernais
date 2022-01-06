import { writable } from 'svelte/store';

export const user = writable({});

// promotions
export const promotions = writable([
    {
        text: "-25% super promo pour toute prémière consultation!",
        url: "#promotion"
    }
]);

// animal selection : selection d'un animal : {image, text}
export const animalSelections = writable([
    {
        text: "Plusieurs",
        image: "images/plusieurs_animaux.png"
    },
    {
        text: "Chien",
        image: "images/chien.png"
    },
    {
        text: "Chat",
        image: "images/chat.png"
    },
    {
        text: "Lapin",
        image: "images/lapin.png"
    },
    {
        text: "Poisson",
        image: "images/poisson.png"
    },
    {
        text: "Poisson",
        image: "images/poisson.png"
    },
    {
        text: "Poisson",
        image: "images/poisson.png"
    },
    {
        text: "Poisson",
        image: "images/poisson.png"
    }
]);
