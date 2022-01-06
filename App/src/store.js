import { writable } from 'svelte/store';

// export const currentUser = writable({});
export const currentUser = writable({
    id: 2,
    name: "user1",
    firstname: "user1",
    email: "user1@gmail.com",
    password: "toor",
    type: "particulier",
    sex: "homme",
    tel: "0202020202",
    address: "Marseille",
    dateOfBirth: "1993-02-05",
    job: "jobless"
    // verificationCode (~)
});

export const DB = writable({});

// promotions
export const promotions = writable([
    {
        text: "-25% super promo pour toute prémière consultation!",
        url: "#promotion"
    }
]);


const animalType = {
    "CHIEN": "chien",
    "CHAT": "chat",
    "POISSON": "poisson",
    "LAPIN": "lapin",
    "REPTILE": "reptile",
    "SEVERAL": "several"
}
export const ANIMAL_TYPE = writable(animalType)
// animal selection : selection d'un animal : {image, text}
export const animalSelections = writable([
    {
        text: "Plusieurs",
        image: "images/plusieurs_animaux.png",
        type: animalType.SEVERAL
    },
    {
        text: "Chien",
        image: "images/chien.png",
        type: animalType.CHIEN
    },
    {
        text: "Chat",
        image: "images/chat.png",
        type: animalType.CHAT
    },
    {
        text: "Lapin",
        image: "images/lapin.png",
        type: animalType.LAPIN
    },
    {
        text: "Poisson",
        image: "images/poisson.png",
        type: animalType.POISSON
    },
    {
        text: "Poisson",
        image: "images/poisson.png",
        type: animalType.POISSON
    },
    {
        text: "Poisson",
        image: "images/poisson.png",
        type: animalType.POISSON
    },
    {
        text: "Poisson",
        image: "images/poisson.png",
        type: animalType.POISSON
    }
]);



export const MENU = writable({
    HOME: "HOME",
    CONTACT: "CONTACT",
    MAP: "MAP",
    HOUR: "HOUR",
    APPOINTMENT: "APPOINTMENT",
    ANIMAL: "ANIMAL",
    INFO: "INFO"
});

export let activeMenu = writable(MENU.HOME);

