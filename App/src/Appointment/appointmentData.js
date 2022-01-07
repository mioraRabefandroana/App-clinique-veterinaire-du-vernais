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
//     passed: false,
//     user: {},
//     animals: []
// }

export const appointment0 = {    
    id: null,
    date: null,
    hour: null,
    reason: null,
    passed: false,
    user: null,
    animals: []
}
export const workingAppointment = writable(appointment0)

// export const APPOINTMENT_REASON = writable(appointmentReason)

