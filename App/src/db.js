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
            name: "Pongo",
            category: animalType.CHIEN,
            breed: "dalmatiens",
            weight: "10kg",
            dateOfBirth: "2010-04-01",
            image: "https://blob.cede.ch/catalog/15991000/15991133_1_92.jpg",
            vaccins : []
        }]
    }]
});