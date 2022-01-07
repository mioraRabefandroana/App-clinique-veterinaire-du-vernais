<script>
    import { createEventDispatcher } from "svelte";
    import { link, navigate } from "svelte-routing";

    import AnimalSelection from "../Animal/AnimalSelection.svelte";
    import NavigationButtons from "../Common/NavigationButtons.svelte";

    import { DB } from "../db";

    import { activeMenu, ANIMAL_TYPE, currentUser, MENU } from "../store";
    
    import { workingAppointment, appointment0 } from "./appointmentData"
    import Confirmation from "./Confirmation.svelte";
    import DateHourSelection from "./DateHourSelection.svelte";
    import FinalMessage from "./FinalMessage.svelte";
    import ReasonSelection from "./ReasonSelection.svelte";

    

    // set active menu
    $activeMenu = $MENU.APPOINTMENT
    
    if(!$currentUser || !("id" in $currentUser))
    {
        navigate("/login");
    }

    // type param
    export let type="";

    console.log("type =>", type)

    // curent user animals
    $: animals = (!type || type == $ANIMAL_TYPE.SEVERAL) ? $currentUser.animals : $currentUser.animals.filter(a => a.category == type);

    function setAppointment(detail){
        $workingAppointment = {...$workingAppointment, ...detail}
    }
    function animalSelectionChange(animal, detail){
        const selectedAnimals = $workingAppointment.animals
        if(detail.selected)
        {
            $workingAppointment.animals = [...$workingAppointment.animals, animal]
        }
        else
        {
            $workingAppointment.animals = $workingAppointment.animals.filter( a => a != animal );
        }
    }
    

    const APPOINTMENT_FORM = {
        ANIMAL_SELCTION: "ANIMAL_SELCTION",
        REASON_SELECTION: "REASON",
        DATE_HOUR_SELECTION: "DATE_SELECTION",
        CONFIRMATION: "CONFIRMATION",
        FINAL_MESSAGE: "FINAL_MESSAGE"
    }
    const appointmentFormList = [
        APPOINTMENT_FORM.ANIMAL_SELCTION,
        APPOINTMENT_FORM.REASON_SELECTION,
        APPOINTMENT_FORM.DATE_HOUR_SELECTION,
        APPOINTMENT_FORM.CONFIRMATION,
        APPOINTMENT_FORM.FINAL_MESSAGE
    ]

    let formIndex = 0;

    // next page
    function onNext(){        
        if(formIndex == (appointmentFormList.length-1))
            return;
        formIndex++
    }
    // previous page
    function onPrevious(){
        if(formIndex == 0)
            return;
        formIndex--
    }

    // confirm appointment
    function onConfirmation(){
        $workingAppointment = {...$workingAppointment, ...{id: Date.now()}};

        // save appointment for the user
        $DB.users.map(u => {
            if(u.id == $currentUser.id)
            {
                u.appointments = [...u.appointments, $workingAppointment];
            }
                
            return u;
        }) 

        // clear working appointment
        $workingAppointment = appointment0;

        // go to the next form
        formIndex++
    }
    function onOK(){
        // console.log("OK")
    }

</script>

<style>
    #animal-selection{
        display: grid;
        grid-template-columns: max-content max-content;
        grid-gap: 20px;
        align-content: center;
        width: fit-content;
        margin: auto;
    }
</style>

<div id="appointment" class="page">

{#if type }
    <!-- <div>Rendez vous pour {type}</div> -->
{:else}
    <div>Rendez vous sans type</div>
{/if}

{#if appointmentFormList[formIndex] == APPOINTMENT_FORM.ANIMAL_SELCTION}   
    <h3>Choix de l'animal</h3>
    <div id="animal-selection">     
        {#each animals as animal}
            <AnimalSelection {animal} on:change={ (e)=>{ animalSelectionChange(animal, e.detail) } }/>
            <!-- {JSON.stringify(animal)} -->
        {/each}
        <!-- add appointment link -->
        <AnimalSelection />
    </div>
{:else if appointmentFormList[formIndex] == APPOINTMENT_FORM.REASON_SELECTION }
    <ReasonSelection on:change={ (e)=>{ setAppointment(e.detail) } }/>
{:else if appointmentFormList[formIndex] == APPOINTMENT_FORM.DATE_HOUR_SELECTION }
    <DateHourSelection on:change={ (e)=>{ setAppointment(e.detail) } }/>
{:else if appointmentFormList[formIndex] == APPOINTMENT_FORM.CONFIRMATION }
    <Confirmation/>
{:else if appointmentFormList[formIndex] == APPOINTMENT_FORM.FINAL_MESSAGE }
    <FinalMessage/>
{/if}
    <NavigationButtons 
        previous={ formIndex != 0 && formIndex < (appointmentFormList.length-1)} 
        next={ formIndex < (appointmentFormList.length-2) }
        confirmation={ appointmentFormList[formIndex] == APPOINTMENT_FORM.CONFIRMATION }
        ok={ appointmentFormList[formIndex] == APPOINTMENT_FORM.FINAL_MESSAGE }
        on:onNext={()=>{onNext()}} 
        on:onPrevious={() =>{onPrevious()}}
        on:onConfirmation={() =>{onConfirmation()}}
        on:onOK={() =>{onOK()}}
        />
</div>