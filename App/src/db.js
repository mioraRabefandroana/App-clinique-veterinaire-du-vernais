import { writable } from 'svelte/store';
import { APPOINTMENT_REASON } from './Appointment/appointmentData';
import { animalType } from './store';


export const chien1 = {
    id: 1,
    name: "Pongo",
    category: animalType.CHIEN,
    breed: "dalmatiens",
    weight: "10kg",
    dateOfBirth: "01/01/2000",
    image: "https://blob.cede.ch/catalog/15991000/15991133_1_92.jpg",
    vaccins : []
}



export const user1 = {
    id: 1,
    name: "user1",
    firstname: "user1",
    email: "user1@gmail.com",
    password: "toor",
    type: "particulier",
    sex: "homme",
    tel: "0202020202",
    address: "Marseille",
    dateOfBirth: "09/08/1994",
    job: "jobless",
    animals: [
        chien1,
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
        },
        {
            id: 4,
            name: "CCCCCC",
            category: animalType.CHAT,
            breed: "dalmatiens",
            weight: "10kg",
            dateOfBirth: "2010-04-01",
            image: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/d/e/3/de38b91166_92399_shutterstock-259729697.jpg",
            vaccins : []
        },
        {
            id: 5,
            name: "DDDDD5",
            category: animalType.CHAT,
            breed: "dalmatiens",
            weight: "10kg",
            dateOfBirth: "2010-04-01",
            image: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/d/e/3/de38b91166_92399_shutterstock-259729697.jpg",
            vaccins : []
        }]
}

const user100 = {
    id: 100,
    name: "user100",
    firstname: "user100",
    email: "user1@gmail.com",
    password: "toor",
    type: "particulier",
    sex: "homme",
    tel: "0202020202",
    address: "Marseille",
    dateOfBirth: "1993-02-05",
    job: "jobless",

    animals: [{
        id: 100,
        name: "Pongo",
        category: animalType.CHIEN,
        breed: "dalmatiens",
        weight: "10kg",
        dateOfBirth: "2010-04-01",
        image: "/images/pongo.png",
        vaccins : []
    }],
    appointments: []
}


// dummy appoitment
let appointment1 = {    
    id: 9999,
    date: "12/12/2020",
    hour: "09:00",
    reason: APPOINTMENT_REASON.INTERVENTION,
    passed: true,
    user: user1,
    animals: [chien1]
}
let appointment2 = {    
    id: 88888,
    date: "03/08/2022",
    hour: "11:00",
    reason: APPOINTMENT_REASON.CARE,
    passed: false,
    user: user1,
    animals: [chien1]
}

// affect to user1
user1.appointments = [appointment1, appointment2];

export const DB = writable({
    users: [  
        user1, 
        user100 
    ],

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