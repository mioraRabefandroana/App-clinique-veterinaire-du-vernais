import { writable } from 'svelte/store';
import { animalType } from './store';

export const DB = writable({
    users: [{
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
            image: "/images/pongo.png",
            vaccins : []
        }],

        appointments: []
    }],

    disponibilities: {
        "07/01/2022": [
            ["10:00","10:30"],
            ["10:30","11:00"],
            ["16:30","17:00"],
        ],
        "08/01/2022": [
            ["10:00","10:30"],
            ["10:30","11:00"],
            ["16:30","17:00"],
        ],
        "09/01/2022": [
            ["10:00","10:30"],
            ["10:30","11:00"],
            ["16:30","17:00"],
        ],
    }


});