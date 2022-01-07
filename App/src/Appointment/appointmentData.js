import { writable } from 'svelte/store';

export const APPOINTMENT_REASON = {
    VACCINE: "vaccine",
    REMOTE_CONSULTATION: "remoteConsutlation ",
    INTERVENTION: "operation",
    ADVICE: "advice",
    CARE: "care"
}

// an appointment data structure
// {    
//     id: null,
//     date: null,
//     hour: null,
//     reason: null,
//     user: {},
//     animals: []
// }

export const workingAppointment = writable({    
    id: null,
    date: null,
    hour: null,
    reason: null,
    user: null,
    animals: []
})

// export const APPOINTMENT_REASON = writable(appointmentReason)

