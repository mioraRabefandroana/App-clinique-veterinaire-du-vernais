import { writable } from 'svelte/store';

export const user = writable({});

// form data

export const formData =  writable({
    firstname: '',
    lastname: '',
    companyname:'',
    profession:'',
    activity: '',
    address: '',
    phone: '',
    mail: '',
    password: '',
    confirmationPass: '',
    code: '',
    gender: [],
    type: []
});

// promotions
export const promotions = writable([]);

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
    }
]);
