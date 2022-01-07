import { writable } from 'svelte/store';

export const animalType = {
    "CHIEN": "chien",
    "CHAT": "chat",
    "POISSON": "poisson",
    "LAPIN": "lapin",
    "REPTILE": "reptile",
    "RONGEUR": "rongeur",
    "SEVERAL": "several"
}

// export const currentUser = writable({});
export const currentUser = writable({
    id: 1,
    name: "user1",
    firstname: "user1",
    email: "user1@gmail.com",
    password: "toor",
    type: "particulier",
    sex: "homme",
    tel: "0202020202",
    address: "Marseille",
    dateOfBirth: "1993-02-05",
    job: "jobless",
    animals: [{
        id: 1,
        name: "Pongo",
        category: animalType.CHIEN,
        breed: "dalmatiens",
        weight: "10kg",
        dateOfBirth: "2010-04-01",
        image: "https://blob.cede.ch/catalog/15991000/15991133_1_92.jpg",
        vaccins : []
    },
    {
        id: 2,
        name: "AAAAAA",
        category: animalType.CHIEN,
        breed: "dalmatiens",
        weight: "10kg",
        dateOfBirth: "2010-04-01",
        image: "https://blob.cede.ch/catalog/15991000/15991133_1_92.jpg",
        vaccins : []
    },
    {
        id: 3,
        name: "BBBB",
        category: animalType.CHIEN,
        breed: "dalmatiens",
        weight: "10kg",
        dateOfBirth: "2010-04-01",
        image: "https://blob.cede.ch/catalog/15991000/15991133_1_92.jpg",
        vaccins : []
    }]
});


// promotions
export const promotions = writable([
    {
        text: "-25% super promo pour toute prémière consultation!",
        url: "#promotion"
    }
]);


export const ANIMAL_TYPE = writable(animalType)
// animal selection : selection d'un animal : {image, text}
export const animalTypeSelections = writable([
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


let menu = {
    HOME: "ACCUEIL",
    CONTACT: "CONTACTS",
    MAP: "CARTE",
    HOUR: "HORAIRE",
    APPOINTMENT: "RENDEZ-VOUS",
    ANIMAL: "ANIMAUX",
    INFO: "INFOS PRATIQUE"
}
export const MENU = writable(menu);

export let activeMenu = writable(menu.HOME);

